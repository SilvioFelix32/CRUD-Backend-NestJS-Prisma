import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  BadRequestException,
} from '@nestjs/common';
import { RequestHeaders } from 'src/shared/app.headers.dto';
import { IHeaders } from 'src/shared/IHeaders';
import { CreateProductDto } from '../dto/create-product.dto';
import { FindProductDto } from '../dto/find-product.dto';
import { UpdateProductDto } from '../dto/update-product.dto';
import { ProductService } from '../services/product.service';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  create(@RequestHeaders() header: IHeaders, @Body() dto: CreateProductDto) {
    const { company_id } = header;
    console.log(company_id);

    if (!company_id) {
      throw new BadRequestException('No Company informed');
    }

    return this.productService.create(company_id, dto);
  }

  @Get()
  findAll(@RequestHeaders() header: IHeaders, @Param() dto: FindProductDto) {
    const { company_id } = header;

    if (!company_id) {
      throw new BadRequestException('No Company informed');
    }

    return this.productService.findAll(company_id, dto);
  }

  @Get(':id')
  findOne(@Param('id') productId: string) {
    return this.productService.findOne(productId);
  }

  @Patch(':id')
  update(
    @RequestHeaders() header: IHeaders,
    @Param('id') productId: string,
    @Body() dto: UpdateProductDto,
  ) {
    const { company_id } = header;

    if (!company_id) {
      throw new BadRequestException('No Company informed');
    }
    return this.productService.update(productId, dto);
  }

  @Delete(':id')
  remove(@Param('id') productId: string) {
    return this.productService.remove(productId);
  }
}
