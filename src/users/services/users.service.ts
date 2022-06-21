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
import { userResponse } from '../dto/user-response.dto';

@Injectable()
export class UsersService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly companiesService: CompaniesService,
  ) {}

  private async validateCreateLocalUser(
    company_id: string,
    data: CreateUserDto,
  ) {
    const { email, document } = data;

    if (!company_id) {
      throw new BadRequestException('User needs a company ID');
    }

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

  async create(company_id: string, dto: CreateUserDto): Promise<User> {
    await Promise.all([this.validateCreateLocalUser(company_id, dto)]);

    const data: Prisma.UserCreateInput = {
      company_id,
      ...dto,
    };

    console.log({ data });
    this.prisma.user.create({
      data,
    });

    return;
  }

  async findOne(userId: string): Promise<User | unknown> {
    const user = this.prisma.user.findUnique({
      where: { userId },
      select: {
        ...userResponse,
      },
    });

    if (!user) {
      throw new BadRequestException('User not Found');
    }

    return user;
  }

  async findAll(
    company_id: string,
    dto: FindUserDto,
  ): Promise<User[] | unknown> {
    const company = this.prisma.company.findUnique({
      where: { id: company_id },
    });

    if (!company) {
      throw new NotFoundException('Company not found');
    }

    return this.prisma.user.findMany({
      where: {
        company_id,
        ...dto,
      },
      select: {
        ...userResponse,
      },
    });
  }

  async update(userId: string, dto: UpdateUserDto): Promise<User> {
    const updateUser = await this.findOne(userId);
    await Promise.all([this.validateUpdateLocalUser(dto, updateUser as User)]);

    const data: Prisma.UserUpdateInput = {
      ...dto,
    };

    this.prisma.user.update({
      where: { userId },
      data,
    });

    return;
  }

  async remove(userId: string): Promise<User> {
    return this.prisma.user.delete({
      where: { userId },
    });
  }
}
