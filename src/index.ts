import Button from './button/index'

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

const install = function(app) {
    components.map(component => {
      app.use(component);
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
