import {
  IsBoolean,
  IsDate,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUUID,
} from 'class-validator';
import { ProductType } from 'src/product/entities/product-type.entity';

export class CreateProductCategoryDto {
  @IsString()
  @IsUUID()
  @IsOptional()
  categoryId?: string;

  @IsString()
  @IsUUID()
  @IsOptional()
  company_id: string;

  product_type: ProductType;

  @IsString()
  @IsOptional()
  config_type_id?: string | null;

  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsOptional()
  description?: string | null;

  @IsString()
  @IsOptional()
  url_banner?: string | null;

  @IsBoolean()
  @IsOptional()
  active?: boolean;

  products?: any;

  @IsString()
  @IsOptional()
  @IsDate()
  created_at?: Date | string;

  @IsString()
  @IsOptional()
  @IsDate()
  updated_at?: Date | string;
}
