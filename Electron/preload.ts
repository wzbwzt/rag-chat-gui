import { contextBridge, ipcRenderer } from "electron";
import { KnowledgeBaseFile, KnowledgeBase, User, Instruction } from "@prisma/client";

export type DBData = KnowledgeBaseFile | KnowledgeBase | User | Instruction;
export type DBOption = "create" | "read" | "update" | "delete";
export enum DBTable {
  KnowledgeBaseFile = "knowledgeBaseFile",
  KnowledgeBase = "knowledgeBase",
  User = "user",
  Instruction = "instruction",
}

contextBridge.exposeInMainWorld("electronAPI", {
  versions: () => ipcRenderer.invoke("versions"),
  dbHandler: (table: DBTable, option: DBOption, data: DBData) => ipcRenderer.send("dbHandler", table, option, data),
});
