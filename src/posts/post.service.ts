import { Component } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Post } from './post.entity';
import { IPost } from './post.interface';

@Component()
export class PostService {
  constructor(
    @InjectRepository(Post)
    private readonly postRepo: Repository<Post>,
  ) {}

  public async all(): Promise<Post[]> {
    return await this.postRepo.find();
  }

  public async one(id: string): Promise<Post> {
    return await this.postRepo.findOne({ id });
  }

  public async createOne(args: Post): Promise<Post> {
    const post = new Post();
    post.title = args.title;
    post.body = args.body;
    post.published = args.published;
    return await this.postRepo.save(post);
    // return await this.postRepo.create(args);
  }

  // public async update(id: Partial<Post>, args: DeepPartial<Post>): Promise<Post> {
  //   return await this.postRepo.update(id, { args });
  // }

  // public async delete(id: string): Promise<void> {
  //   return await this.postRepo.deleteById(id);
  // }

}
