import { BadRequestException, Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { CompaniesService } from 'src/companies/services/companies.service';
import { PrismaService } from 'src/shared/prisma/prisma.service';
import { CreateProductDto } from '../dto/create-product.dto';
import { FindProductDto } from '../dto/find-product.dto';
import { productReponse } from '../dto/product-response';
import { UpdateProductDto } from '../dto/update-product.dto';
import { Product } from '../entities/product.entity';

@Injectable()
export class ProductService {
  constructor(private readonly prisma: PrismaService) {}

  private async validateProduct(company_id: string) {
    if (!company_id) {
      throw new BadRequestException('No company ID informed');
    }
  }

  async create(
    company_id: string,
    dto: CreateProductDto,
  ): Promise<Product | unknown> {
    await this.validateProduct(company_id);

    const data: Prisma.ProductCreateInput = {
      ...dto,
    };

    return this.prisma.product.create({
      data,
    });
  }

  findAll(
    company_id: string,
    dto: FindProductDto,
  ): Promise<Product[] | unknown> {
    return this.prisma.product.findMany({
      where: {
        company_id,
        ...dto,
      },
      select: {
        ...productReponse,
      },
    });
  }

  findOne(productId: string): Promise<Product | unknown> {
    return this.prisma.product.findUnique({
      where: {
        productId,
      },
      select: {
        ...productReponse,
      },
    });
  }

  update(productId: string, dto: UpdateProductDto): Promise<Product | unknown> {
    return this.prisma.product.update({
      where: {
        productId,
      },
      data: {
        ...dto,
      },
    });
  }

  remove(productId: string): Promise<Product | unknown> {
    return this.prisma.product.delete({
      where: {
        productId,
      },
    });
  }
}
