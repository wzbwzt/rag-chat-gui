import Store, { Schema } from "electron-store";

// import ElectronStore from "electron-store";
// export const appConfig = new ElectronStore({
//   name: "appConfig",
//   defaults: {
//     setting: {},
//   },
//   schema: {
//     setting: {
//       type: "object",
//     },
//   },
// });

type SettingType = {
  setting: {
    appBounds: string;
  };
};

const schema: Schema<SettingType> = {
  setting: {
    type: "object",
    properties: {
      appBounds: {
        type: "string",
      },
    },
    default: {},
  },
};

export const appConfig = new Store<SettingType>({ schema });
