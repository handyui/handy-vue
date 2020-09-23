<template lang="html">
  <Container>
    <Demo></Demo>
    {{Demo}}
    <Simulator :url="path" />
  </Container>
</template>

<script>
import {component, defineComponent, ref, toRefs, reactive } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
import Simulator from "./Simulator";
import Container from 'site/components/Container';
import Demo from "@/icon/demo.md";
export default defineComponent({
  components: {
    Container,
    Simulator,
    Demo
  },
  setup(props, { slots, emit }) {
    const state = reactive({path: null})
    const store = useStore()
    const router = useRoute();
    const v = store.state.version;
    console.log(router.path)
    state.path = router.path.replace('/documents/', '');
    //   app.component('Demo', (resolve, reject)=>{
    //     require([`docs/${v}/button.md`], resolve)
    //   })
    return {
      ...toRefs(state)  
    }
  }
})
</script>

