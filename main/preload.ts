import { contextBridge, ipcRenderer } from "electron";

export type DBOption = "create" | "read" | "update" | "delete";
export enum DBTable {
  KnowledgeBaseFile = "knowledgeBaseFile",
  KnowledgeBase = "knowledgeBase",
  User = "user",
  Instruction = "instruction",
}

contextBridge.exposeInMainWorld("electronAPI", {
  versions: () => ipcRenderer.invoke("versions"),
  insert: (data: any) => ipcRenderer.invoke("insert.instruction", data),
});
