import { DataSource } from "typeorm";
import InstructionController from "./instruction";
import path from "path";

export const AppDataSource = new DataSource({
  type: "sqlite",
  database: "./chatollama.sqlite",
  synchronize: true,
  logging: true,
  entities: [path.resolve(__dirname, "../entities/*.js")],
  migrations: [path.resolve(__dirname, "./migration/**/*.js")],
  extra: {
    timezone: "Asia/Shanghai",
  },
});

export const InstructionCtl = new InstructionController();
