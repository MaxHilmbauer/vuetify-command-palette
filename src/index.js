import CommandPalette from "./components/CommandPalette.vue";

export default {
  install: (app, options) => {
    app.component("CommandPalette", CommandPalette);
  },
};

export { CommandPalette };
