import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm';

@Entity()
export class Post {
  
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @CreateDateColumn()
  public createdAt: Date;

  @UpdateDateColumn()
  public updatedAt: Date;

  @Column()
  public title: string;
  
  @Column()
  public body: string;

  @Column()
  public published: boolean;

  // @Column({ unique: true })
  // public slug: string;
  
  // @Column()
  // public featuredImage: string;

}
