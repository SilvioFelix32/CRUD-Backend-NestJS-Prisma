import {
  IsBoolean,
  IsDate,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  IsUUID,
} from 'class-validator';
import { ProductType } from '../entities/product-type.entity';

export class CreateProductDto {
  @IsUUID()
  @IsString()
  @IsOptional()
  productId?: string;

  @IsString()
  @IsOptional()
  product_category_id: string;

  @IsUUID()
  @IsString()
  @IsOptional()
  company_id: string;

  @IsString()
  @IsOptional()
  product_type?: ProductType;

  @IsString()
  @IsNotEmpty()
  sku: string;

  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsOptional()
  subtitle?: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsString()
  @IsOptional()
  url_banner?: string;

  @IsBoolean()
  @IsOptional()
  active: boolean;

  @IsBoolean()
  @IsOptional()
  combo?: boolean;

  @IsNumber()
  @IsOptional()
  amount_min_sale?: number;

  @IsNumber()
  @IsOptional()
  amount_max_sale?: number;

  @IsBoolean()
  @IsOptional()
  highlighted: boolean;

  @IsNumber()
  @IsOptional()
  order_on_menu?: number;

  @IsBoolean()
  @IsOptional()
  for_sale?: boolean;

  @IsBoolean()
  @IsOptional()
  discount?: boolean | null;

  @IsString()
  @IsDate()
  @IsOptional()
  created_at: Date | string;

  @IsString()
  @IsDate()
  @IsOptional()
  updated_at: Date | string;
}
