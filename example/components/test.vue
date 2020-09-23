<template>

</template>

<script>
import { defineComponent, computed, h } from "vue";
export default defineComponent({
    name: "VLayout",
    setup(props, { slots }) {
        const createSpaceItemList=()=>{
            console.log(slots)
            return 'eee'
        }
        return ()=>{
            return  h( "div",
                { class: 'ha-loading', style: 'color: red' }, 
                createSpaceItemList()
            )
        }
    }
})
</script>

<style lang="scss" scoped>

</style>