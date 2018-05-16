import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Post } from './post.entity';
import { IPost } from './post.interface';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Post) private readonly postRepo: Repository<Post>,
  ) {}

  public async all(): Promise<Post[]> {
    return await this.postRepo.find();
  }

  public async one(args: IPost): Promise<Post> {
    return await this.postRepo.findOne(args.where.slug);
  }

  public async create(args: IPost): Promise<Post> {
    const post = new Post();
    post.title = args.data.title;
    post.slug = args.data.slug;
    post.body = args.data.body;
    post.published = args.data.published;

    return await this.postRepo.save(post);
  }

  // public async update(args: IPost): Promise<Post> {
  //   return await this.postRepo.update(args.where.slug, args.data);
  // }

  // public async delete(args: IPost): Promise<Post> {
  //   return await this.postRepo.deleteById(args.where.slug);
  // }
}
