import {
  IsBoolean,
  IsDate,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { ProductType } from '../entities/product-type.entity';

export class UpdateProductDto {
  product_category?: any;
  company?: any;

  @IsString()
  @IsOptional()
  product_type?: ProductType;

  @IsString()
  @IsOptional()
  sku?: string | null;

  @IsString()
  @IsOptional()
  title?: string | null;

  @IsString()
  @IsOptional()
  subtitle?: string | null;

  @IsString()
  @IsOptional()
  description?: string | null;

  @IsString()
  @IsOptional()
  url_banner?: string | null;

  @IsBoolean()
  @IsOptional()
  active?: boolean;

  @IsBoolean()
  @IsOptional()
  combo?: boolean | null;

  @IsNumber()
  @IsOptional()
  amount_min_sale?: number | null;

  @IsNumber()
  @IsOptional()
  amount_max_sale?: number | null;

  @IsBoolean()
  @IsOptional()
  highlighted?: boolean | null;

  @IsNumber()
  @IsOptional()
  order_on_menu?: number | null;

  @IsBoolean()
  @IsOptional()
  for_sale?: boolean | null;

  @IsBoolean()
  @IsOptional()
  discount?: boolean | null;

  @IsDate()
  @IsString()
  @IsOptional()
  created_at?: Date | string;

  @IsDate()
  @IsString()
  @IsOptional()
  updated_at?: Date | string;
}
