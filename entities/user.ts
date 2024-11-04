import { Entity, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ unique: true })
  name: string;
  @Column()
  email: string;
  @Column()
  password: string;
  @Column()
  first_name: string;
  @Column()
  last_name: string;
  @Column({ default: 0 })
  role: number;
  @Column({ default: false })
  email_verified: boolean;
  @Column({ default: true })
  is_active: boolean;
  @Column()
  last_login: Date;
  @CreateDateColumn()
  created_at: Date;
  @DeleteDateColumn()
  deleted_at: Date;
  @Column()
  access_token: string;
  @UpdateDateColumn()
  updated_at: Date;

  knowledgeBases: KnowledgeBase[];
}
