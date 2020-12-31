import { Exclude } from 'class-transformer';
import {
  BeforeInsert,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import User from './user.entity';
const bcrypt = require('bcrypt');

@Entity('levels')
export default class Level {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  url: string;

  @JoinColumn({
    name: 'user_id',
  })
  @ManyToOne(type => User)
  user?: User;

  constructor(partial: Partial<Level>) {
    Object.assign(this, partial);
  }
}
