import { Prisma } from '@prisma/client';

export class Post implements Prisma.PostUncheckedCreateInput {
  id?: string;
  createdAt?: string | Date;
  published?: boolean;
  authorId?: string;
}
