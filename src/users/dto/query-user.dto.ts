import { ApiHideProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsDate,
  IsEmail,
  IsOptional,
  IsString,
  IsUUID,
} from 'class-validator';
import { Role, Sex } from '../entities/user.entity';

export class FindUserDto {
  @IsString()
  @IsOptional()
  @IsUUID()
  userId?: string;

  @IsString()
  @IsOptional()
  @IsUUID()
  company_id: string;

  @IsString()
  @IsOptional()
  document?: string | null;

  @IsString()
  @IsOptional()
  name: string;

  @IsString()
  @IsOptional()
  last_name: string;

  @IsString()
  @IsOptional()
  sex_type?: Sex;

  @IsDate()
  @IsString()
  @IsOptional()
  birth_date?: Date;

  @IsString()
  @IsOptional()
  celphone?: string | null;

  @IsEmail()
  @IsString()
  @IsOptional()
  email: string;
  cep?: string | null;

  @IsString()
  @IsOptional()
  state?: string | null;

  @IsString()
  @IsOptional()
  city?: string | null;

  @IsString()
  @IsOptional()
  neighborhood?: string | null;

  @IsString()
  @IsOptional()
  address?: string | null;

  @IsString()
  @IsOptional()
  address_number?: string | null;

  @IsString()
  @IsOptional()
  address_complement?: string | null;

  @IsBoolean()
  @IsOptional()
  active?: boolean | null;

  @ApiHideProperty()
  role: Role;

  @ApiHideProperty()
  password?: string;

  @ApiHideProperty()
  user_name?: string | null;

  @ApiHideProperty()
  created_at?: Date | string;

  @ApiHideProperty()
  updated_at?: Date | string;
}
