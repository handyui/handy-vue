// import Vue from 'vue';
// import Vuex from 'vuex';
import middlewares from './middle-wares';
// @ts-ignore
import packageJson from '../../package.json';

// Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

import  { createStore }  from 'vuex'

const store = createStore({
  strict: debug,
  plugins: middlewares,
  state: {
    activeName: 'quick-start',
    lang: 'ZH',
    version: '2.0.0',
    versionList: [{
      value: '1.x',
      label: '1.x',
      path: 'https://zhongantech.github.io/zarm-vue/1.x/#/zh-CN/component/fastdoc',
    }, {
      value: '2.0.0',
      label: packageJson.version,
      path: '#/documents/quick-start',
    }],
  },
  actions: {
    setVersion(context, payload) {
      context.commit('updateVersion', payload);
    },
    setActiveName(context, payload) {
      context.commit('updateActive', payload);
    },
  },
  mutations: {
    updateVersion(state, data) {
      // @ts-ignore
      state.version = data;
    },
    updateActive(state, data) {
      // @ts-ignore
      state.activeName = data;
    },
  },
  modules: {}
})

export default store