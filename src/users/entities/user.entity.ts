import { ApiHideProperty } from '@nestjs/swagger';

export type Sex = 'MALE' | 'FEMALE' | 'OTHERS';
export type Role = 'USER' | 'ADMIN';
export class User {
  userId?: string;

  @ApiHideProperty()
  company_id: string;
  document: string;
  name: string;
  last_name: string;
  sex_type?: Sex;
  birth_date?: Date;
  celphone?: string | null;
  email: string;
  cep?: string | null;
  state?: string | null;
  city?: string | null;
  neighborhood?: string | null;
  address?: string | null;
  address_number?: string | null;
  address_complement?: string | null;
  @ApiHideProperty()
  active?: boolean | null;
  @ApiHideProperty()
  role: Role;
  @ApiHideProperty()
  user_name?: string | null;
  @ApiHideProperty()
  password: string;

  @ApiHideProperty()
  created_at?: Date | string;
  @ApiHideProperty()
  updated_at?: Date | string;
}
