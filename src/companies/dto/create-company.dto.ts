/* eslint-disable prettier/prettier */
import { Company } from '../entities/company.entity';
import {
  IsEmail,
  IsOptional,
  IsString,
  IsUUID,
  ValidateNested,
} from 'class-validator';
import { CreateCompanyParamsDto } from './create-company-params.dto';
import { Type } from 'class-transformer';

export class CreateCompanyDto extends Company {
  @IsUUID()
  @IsString()
  id: string;

  @IsString()
  name: string;

  @IsString()
  cnpj: string;

  @IsOptional()
  @IsString()
  fantasy_name?: string;

  @IsString()
  celphone1: string;

  @IsOptional()
  @IsString()
  celphone2?: string;

  @IsEmail()
  email: string;

  @IsOptional()
  @IsString()
  url_banner?: string;

  @IsOptional()
  @IsString()
  url_site?: string;

  @IsOptional()
  @IsString()
  url_facebook?: string;

  @IsOptional()
  @IsString()
  url_instagram?: string;

  @IsOptional()
  @IsString()
  url_linkedin?: string;

  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => CreateCompanyParamsDto)
  company_params?: CreateCompanyParamsDto;

  created_at?: string | Date;

  updated_at?: string | Date;
}
