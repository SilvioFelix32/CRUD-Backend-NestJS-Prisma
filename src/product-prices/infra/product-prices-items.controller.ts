import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CreateProductItemPriceDto } from '../dto/create-product-item-price.dto';
import { UpdateProductPriceDto } from '../dto/update-product-item-price.dto';
import { ProductPriceItemService } from '../services/product-price-items.service';

@Controller('product-prices')
export class ProductPriceItemController {
  constructor(private readonly service: ProductPriceItemService) {}

  @Post()
  create(
    @Param() item_price_id: string,
    @Body() dto: CreateProductItemPriceDto,
  ) {
    return this.service.create(item_price_id, dto);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') item_price_id: string) {
    return this.service.findOne(item_price_id);
  }

  @Patch(':id')
  update(
    @Param('id') item_price_id: string,
    @Body() dto: UpdateProductPriceDto,
  ) {
    return this.service.update(item_price_id, dto);
  }

  @Delete(':id')
  remove(@Param('id') item_price_id: string) {
    return this.service.remove(item_price_id);
  }
}
