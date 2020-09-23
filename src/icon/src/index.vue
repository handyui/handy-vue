<template>
  <i :class="classes" :style="{ color: color, fontSize: `${size}px` }">
    <img v-if="imageIcon" className="ha-icon__image" :src="name" />
    <div v-if="dot" className="ha-info ha-info--dot"></div>
    <div v-if="badge" className="ha-info">{{ badge }}</div>
  </i>
</template>

<script lang='ts'>
import { defineComponent, computed } from 'vue'

function isImage(name?: string): boolean {
  return name ? name.indexOf('/') !== -1 : false
}

export default defineComponent({
  name: 'HaIcon',
  props: {
    prefixCls: {
      type: String,
      default: 'ha-icon'
    },
    name: {
      type: String,
      default: 'default'
    },
    dot: {
      type: Boolean,
      default: false
    },
    badge: {
      type: String || Number,
      default: ''
    },
    color: {
      type: String,
      default: ''
    },
    size: {
      type: String || Number,
      default: 'default'
    }
  },
  setup(props, { slots, emit }) {
    const imageIcon = isImage(props.name)
    const classes = computed(() => {
      return [`${props.prefixCls}`, { [`${props.prefixCls}-${props.name}`]: !imageIcon }]
    })
    return { classes, imageIcon }
  }
})
</script>

<style lang="scss" scoped>
</style>