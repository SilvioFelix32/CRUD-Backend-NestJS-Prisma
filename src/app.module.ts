import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { PrismaService } from './shared/prisma/prisma.service';
import { AppController } from './app.controller';
import { UsersModule } from './users/users.module';
import { PostsModule } from './posts/posts.module';
import { CompaniesModule } from './companies/companies.module';

@Module({
  imports: [CompaniesModule, UsersModule, PostsModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
