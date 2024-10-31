import { defineStore } from "pinia";

export const collapsedStore = defineStore("isCollapsed", {
  state: () => {
    return {
      isCollapased: false,
    };
  },

  getters: {
    getIsCollapsed(state) {
      return state.isCollapased;
    },
  },

  actions: {
    setCollapsed() {
      this.isCollapased = !this.isCollapased;
    },
  },
});
