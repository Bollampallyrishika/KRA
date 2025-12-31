import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  OneToMany,
  ManyToMany,
  JoinTable,
} from 'typeorm';

import { Profile } from '../../profile/entities/profile.entity';
import { Post } from '../../post/entities/post.entity';
import { Role } from '../../role/entities/role.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  // ONE TO ONE
  @OneToOne(() => Profile, (profile) => profile.user)
  profile: Profile;

  // ONE TO MANY
  @OneToMany(() => Post, (post) => post.user)
  posts: Post[];

  // MANY TO MANY
  @ManyToMany(() => Role, (role) => role.users)
  @JoinTable() // owning side
  roles: Role[];
}
