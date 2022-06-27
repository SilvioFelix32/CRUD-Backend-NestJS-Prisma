import {
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { CompaniesService } from 'src/companies/services/companies.service';
import { PrismaService } from 'src/shared/prisma/prisma.service';
import { CreateProductCategoryDto } from '../dto/create-product-category.dto';
import { productCategoryReponse } from '../dto/product-category-response';
import { UpdateProductCategoryDto } from '../dto/update-product-category.dto';
import { ProductCategory } from '../entities/product-category.entity';

@Injectable()
export class ProductCategoriesService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly companiesService: CompaniesService,
  ) {}

  private async validateProduct(company_id: string) {
    const company = await this.companiesService.findOne(company_id);

    if (!company) {
      throw new NotFoundException('Company not found');
    }
  }

  async create(
    company_id: string,
    dto: CreateProductCategoryDto,
  ): Promise<ProductCategory | unknown> {
    await this.validateProduct(company_id);

    const data: Prisma.ProductCategoryCreateInput = {
      company_id,
      ...dto,
    };

    return this.prisma.productCategory.create({ data });
  }

  async findAll(
    company_id: string,
    dto: any,
  ): Promise<ProductCategory[] | unknown> {
    return this.prisma.productCategory.findMany({
      where: {
        company_id,
        ...dto,
      },
      select: {
        ...productCategoryReponse,
      },
    });
  }

  async findOne(categoryId: string): Promise<ProductCategory | unknown> {
    return this.prisma.productCategory.findUnique({
      where: {
        categoryId,
      },
      select: {
        ...productCategoryReponse,
      },
    });
  }

  async update(
    categoryId: string,
    dto: UpdateProductCategoryDto,
  ): Promise<ProductCategory | unknown> {
    return this.prisma.productCategory.update({
      where: {
        categoryId,
      },
      data: {
        ...dto,
      },
    });
  }

  remove(categoryId: string): Promise<ProductCategory | unknown> {
    return this.prisma.productCategory.delete({
      where: {
        categoryId,
      },
    });
  }
}
