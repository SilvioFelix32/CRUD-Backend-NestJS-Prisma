import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Prisma, User } from '@prisma/client';
import { CompaniesService } from 'src/companies/services/companies.service';
import { PrismaService } from 'src/shared/prisma/prisma.service';
import { CreateUserDto } from '../dto/create-user.dto';
import { FindUserDto } from '../dto/query-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly companiesService: CompaniesService,
  ) {}

  private async validateCreateLocalUser(data: CreateUserDto) {
    const { email, document } = data;

    const userEmail = await this.prisma.user.findUnique({
      where: { email },
    });

    if (userEmail) {
      throw new BadRequestException('User with email already informed');
    }

    const userDocument = await this.prisma.user.findUnique({
      where: { document },
    });

    if (userDocument) {
      throw new BadRequestException('User with document already informed');
    }
  }

  private async validateUpdateLocalUser(data: UpdateUserDto, updateUser: User) {
    if (!updateUser) {
      throw new NotFoundException('User not found');
    }

    const company = await this.companiesService.findOne(data.company_id);

    if (updateUser.company_id !== company.id) {
      throw new BadRequestException('Invalid User');
    }

    const { email, document } = data;
    if (email === null) {
      throw new BadRequestException('Invalid email');
    }

    if (document === null) {
      throw new BadRequestException('Invalid document');
    }

    if (email) {
      const userEmail = await this.prisma.user.findUnique({
        where: { email },
      });

      if (userEmail && userEmail.userId !== updateUser.userId) {
        throw new BadRequestException('User with email already informed');
      }
    }

    if (document) {
      const userDocument = await this.prisma.user.findUnique({
        where: { document },
      });

      if (userDocument && userDocument.userId !== updateUser.userId) {
        throw new BadRequestException('User with document already informed');
      }
    }
  }

  async create(dto: CreateUserDto): Promise<User> {
    await Promise.all([this.validateCreateLocalUser(dto)]);
    
    const data: Prisma.UserCreateInput = {
      ...dto,
    };

    return this.prisma.user.create({
      data,
    });
  }

  async findOne(userId: string): Promise<User> {
    return this.prisma.user.findUnique({
      where: { userId },
    });
  }

  async findAll(dto: FindUserDto): Promise<User[]> {
    return this.prisma.user.findMany({
      where: {
        ...dto,
      },
    });
  }

  async update(userId: string, dto: UpdateUserDto): Promise<User> {
    const updateUser = await this.findOne(userId);
    await Promise.all([this.validateUpdateLocalUser(dto, updateUser)]);

    const data: Prisma.UserUpdateInput = {
      ...dto,
    };

    return this.prisma.user.update({
      where: { userId },
      data,
    });
  }

  async remove(userId: string): Promise<User> {
    return this.prisma.user.delete({
      where: { userId },
    });
  }
}
