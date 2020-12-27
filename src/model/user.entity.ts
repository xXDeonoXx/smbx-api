import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import bcrypt from 'bcrypt';
@Entity('users')
export default class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  nickname?: string;

  @BeforeInsert() async hashPassword() {
    this.password = await bcrypt.hash(this.password, 10);
  }
}
