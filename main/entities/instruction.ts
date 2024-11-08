import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Instruction {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ unique: true })
  name: string;
  @Column()
  instruction: string;
}
