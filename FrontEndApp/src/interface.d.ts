export interface IElectronAPI {
  versions: () => Promise<any>;
  pingpang: () => Promise<string>;
}

declare global {
  interface Window {
    electronAPI: IElectronAPI;
  }
}
