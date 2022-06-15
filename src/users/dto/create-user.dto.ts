/* eslint-disable prettier/prettier */
import { Type } from 'class-transformer';
import {
  IsBoolean,
  IsDate,
  IsEmail,
  IsOptional,
  IsString,
  IsUUID,
} from 'class-validator';
import { Role, Sex, User } from '../entities/user.entity';

export class CreateUserDto extends User {
  @IsUUID()
  @IsString()
  userId?: string;

  @IsUUID()
  @IsString()
  company_id: string;

  @IsString()
  document: string;

  @IsString()
  name: string;

  @IsString()
  last_name: string;

  @Type(() => Date)
  @IsDate()
  @IsOptional()
  birth_date?: Date;

  @IsOptional()
  @IsString()
  sex?: Sex;

  @IsEmail()
  email: string;

  @IsString()
  @IsOptional()
  celphone?: string | null;

  @IsString()
  @IsOptional()
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

  @IsString()
  role: Role;

  @IsString()
  password: string;

  @IsString()
  user_name: string;

  @Type(() => Date)
  @IsDate()
  @IsOptional()
  created_at?: Date | string;

  @Type(() => Date)
  @IsDate()
  @IsOptional()
  updated_at?: Date | string;
}
