/* eslint-disable prettier/prettier */
import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from 'src/shared/prisma/prisma.service';
import { CreateCompanyDto } from '../dto/create-company.dto';
import { UpdateCompanyDto } from '../dto/update-company.dto';
import { Company } from '../entities/company.entity';

@Injectable()
export class CompaniesService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateCompanyDto) {
    const { cnpj } = data;
    const findCompanyCnpj = await this.prisma.company.findUnique({
      where: { cnpj },
    });
    if (findCompanyCnpj) {
      throw new HttpException(
        'CNPJ already exists in the database',
        HttpStatus.BAD_REQUEST,
      );
    }

    return await this.prisma.company.create({ data });
  }

  async findAll(): Promise<Company[]> {
    return this.prisma.company.findMany();
  }

  async findOne(id: string) {
    const company = this.prisma.company.findUnique({
      where: { id },
    });

    if (!company) {
      throw new NotFoundException('Company not found');
    }

    return company;
  }

  async update(id: string, data: UpdateCompanyDto) {
    const { cnpj } = data;

    if (cnpj) {
      const findCompanyCnpj = await this.prisma.company.findUnique({
        where: { cnpj },
      });

      if (findCompanyCnpj && findCompanyCnpj.id !== id) {
        throw new HttpException(
          'CNPJ already exists in the database',
          HttpStatus.BAD_REQUEST,
        );
      }
    }

    const findCompanyUpdate = await this.findOne(id);
    if (!findCompanyUpdate) {
      throw new HttpException('Company not found', HttpStatus.BAD_REQUEST);
    }

    return this.prisma.company.update({ where: { id }, data });
  }

  remove(id: string) {
    return this.prisma.company.delete({ where: { id } });
  }
}
