import { Entity, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, PrimaryGeneratedColumn, Column } from "typeorm";
import { KnowledgeBaseFile } from "./knowledgeBaseFile";

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
  created: Date;
  @Column()
  updated: Date;
  @Column({ default: true })
  is_public: boolean;
  @Column()
  user_id: number;
  // user: User;

  files: KnowledgeBaseFile[];
}
