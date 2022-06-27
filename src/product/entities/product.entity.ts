import { Company } from '@prisma/client';
import { ProductCategory } from 'src/product-categories/entities/product-category.entity';
import { ProductType } from './product-type.entity';

export class Product {
  productId: string;
  product_category: ProductCategory;
  product_category_id: string;
  company: Company;
  company_id: string;
  product_type: ProductType;
  sku: string;
  title: string;
  subtitle: string;
  description: string;
  url_banner?: string;
  active: boolean;
  combo?: boolean;
  amount_min_sale?: number;
  amount_max_sale?: number;
  highlighted: boolean;
  order_on_menu?: number;
  for_sale: boolean;
  discount: boolean;

  created_at: Date | string;
  updated_at: Date | string;
}
