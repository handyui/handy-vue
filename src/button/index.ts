// import { App } from "vue";
// import Component from "./src/index.vue";

// Component.install = function (app: App) {
//   app.component(Component.name, Component);
// };

// export * from "./src/index.vue";

// export const Button = Component;

import { App } from "vue";
import Button from './index.vue';

/* istanbul ignore next */
Button.install = function (app: App) {
  app.component(Button.name, Button);
};

export default Button;
