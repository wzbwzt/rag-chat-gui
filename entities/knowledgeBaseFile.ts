import { Entity, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class KnowledgeBaseFile {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  url: string;
  @Column()
  knowledgeBaseId: number;
}
