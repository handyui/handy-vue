import {App} from 'vue'
import Button from "./button"

const version = '1.0.0';
const components = [
  Button
];

// const install = function (Vue, opts = {}) { // eslint-disable-line no-unused-vars
//   /* istanbul ignore if */
//   if (install.installed) return;

//   components.map(component => Vue.component(component.name, component));
// };

// if (typeof window !== 'undefined' && window.Vue) {
//   install(window.Vue);
// }

const install = function (app: App) {
  components.forEach(({ install }) => {
    if (!install) return;
    app.use(install);
  });
};


export {
  install,
  Button
};

export default {
  install,
  version,
};
