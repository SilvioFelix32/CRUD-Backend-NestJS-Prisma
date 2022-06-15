/* eslint-disable prettier/prettier */
export type Sex = 'MALE' | 'FEMALE' | 'OTHERS';
export type Role = 'USER' | 'ADMIN';

export class User {
  userId?: string;
  company_id: string;
  document?: string | null;
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
  active?: boolean | null;
  role: Role;
  user_name?: string | null;
  password: string;

  created_at?: Date | string;
  updated_at?: Date | string;
}
