<template>
  <div :class="classes">
    <span :class="classesSpinner" :style="styles">
      <template v-if="type === 'spinner'"> <i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /> </template>
      <template v-else>
        <svg viewBox="25 25 50 50" class="ha-loading__circular">
          <circle cx="50" cy="50" r="20" fill="none"></circle>
        </svg>
      </template>
    </span>
    <span v-if="isShowText" className="ha-loading__text"> <slot /> </span>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, CSSProperties, computed } from 'vue'

export type LoadingType = 'circular' | 'spinner'

export default defineComponent({
  name: 'HaLoading',
  props: {
    prefixCls: {
      type: String,
      default: 'ha-loading'
    },
    type: {
      type: String as PropType<LoadingType>,
      default: 'circular'
    },
    size: {
      type: String || Number,
      default: '30px'
    },
    color: {
      type: String,
      default: '#c9c9c9'
    },
    vertical: {
      type: Boolean,
      default: false
    },
    textSize: {
      type: String || Number,
      default: '14px'
    }
  },
  setup(props, { slots, emit }) {
    console.log(props.type)
    const classes = computed(() => {
      return [
        `${props.prefixCls}`,
        `${props.prefixCls}--${props.type}`,
        { [`${props.prefixCls}--vertical`]: props.vertical === true }
      ]
    })
    const classesSpinner = computed(() => {
      return [
        `${props.prefixCls}__spinner`,
        {
          [`${props.prefixCls}__spinner--spinner`]: props.type === 'spinner'
        },
        {
          [`${props.prefixCls}__spinner--circular`]: props.type !== 'spinner'
        }
      ]
    })

    const styles = computed(() => {
      const style: CSSProperties = {}
      style.color = props.color
      style.width = props.size
      style.height = props.size
      return style
    })

    const isShowText = computed(() => {
      return slots.default
    })

    return { classes, classesSpinner, styles, isShowText }
  }
})
</script>

<style lang="scss"></style>
