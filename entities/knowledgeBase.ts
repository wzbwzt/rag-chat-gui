import { Entity, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class KnowledgeBase {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ unique: true })
  name: string;
  @Column()
  embedding: string;
  @Column()
  description: string;
  @Column()
  created: DateTime;
  @Column()
  updated: DateTime;
  @Column({ default: true })
  is_public: boolean;
  @Column()
  user_id: number;
  // user: User;

  files: KnowledgeBaseFile[];
}
