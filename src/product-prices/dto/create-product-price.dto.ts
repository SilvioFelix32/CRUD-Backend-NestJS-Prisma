import {
  IsArray,
  IsDate,
  IsOptional,
  IsString,
  IsUUID,
  ValidateNested,
} from 'class-validator';
import { ProductItemPrice } from '../entities/product-price-items.entity';
import { ProductPriceTable } from '../entities/product-price.entity';

export class CreateProductTablePriceDto extends ProductPriceTable {
  @IsUUID()
  @IsString()
  price_table_id: string;

  @IsUUID()
  @IsString()
  company_id: string;

  @IsString()
  description: string;

  @IsDate()
  @IsString()
  @IsOptional()
  initial_date?: Date;

  @IsDate()
  @IsString()
  @IsOptional()
  final_date?: Date;

  @IsArray()
  @IsOptional()
  @ValidateNested({ each: true })
  products: any | ProductItemPrice[];

  @IsDate()
  @IsString()
  @IsOptional()
  created_at?: Date;
  @IsDate()
  @IsString()
  @IsOptional()
  updated_at?: Date;
}
