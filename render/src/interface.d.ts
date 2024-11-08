export interface IElectronAPI {
  versions: () => Promise<any>;
  insert: (data: any) => Promise<any>;
}

declare global {
  interface Window {
    electronAPI: IElectronAPI;
  }
}
