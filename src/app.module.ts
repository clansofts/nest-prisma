import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { GQLModule } from './graphql.module';
import { PostModule } from './posts/post.module';

@Module({
  imports: [TypeOrmModule.forRoot(), GQLModule, PostModule],
})
export class ApplicationModule {}
