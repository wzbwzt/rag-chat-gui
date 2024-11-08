import { Instruction } from "../entities/instruction";
import { AppDataSource } from "./index";

export default class InstructionController {
  private registry = AppDataSource.getRepository(Instruction);

  async create(data: Partial<Instruction>) {
    console.log("create instruction", data);
    const res = await this.registry.save(data);
    return res;
  }

  findAll() {
    return this.registry.find();
  }
}
