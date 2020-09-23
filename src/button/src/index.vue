<template>
  <button :class="classes" :disabled="disabled" :style="styles" @click="onClick">
    <div class="ha-button__content">
      <template v-if="loading">
        <Loading :type="loadingType" class="ha-button__loading" />
        <span class="ha-button__text">{{ loadingText }}</span>
      </template>
      <template v-else-if="isIcon">
        <Icon :name="icon" class="ha-button__icon" />
        <span class="ha-button__text"><slot /></span>
      </template>
      <template v-else
        ><span class="ha-button__text"> <slot /> </span
      ></template>
    </div>
  </button>
</template>

<script lang="ts">
  import { defineComponent, PropType, CSSProperties, computed } from 'vue'
  import { useRouter, RouteLocationRaw } from 'vue-router'
  import Loading from '../../loading'
  import Icon from '../../icon'

  export type ButtonType = 'default' | 'primary' | 'info' | 'warning' | 'danger'

  export type ButtonSize = 'large' | 'normal' | 'small' | 'mini'

  export default defineComponent({
    props: {
      prefixCls: {
        type: String,
        default: 'ha-button'
      },
      plain: {
        type: Boolean,
        default: false
      },
      hairline: {
        type: Boolean,
        default: false
      },
      disabled: {
        type: Boolean,
        default: false
      },
      size: {
        type: String as PropType<ButtonSize>,
        default: 'normal'
      },
      type: {
        type: String as PropType<ButtonType>,
        default: 'default'
      },
      loading: {
        type: Boolean,
        default: false
      },
      loadingType: {
        type: String,
        default: 'circular'
      },
      loadingText: {
        type: String,
        default: ''
      },
      square: {
        type: Boolean,
        default: false
      },
      round: {
        type: Boolean,
        default: false
      },
      icon: {
        type: String,
        default: ''
      },
      color: {
        type: String,
        default: ''
      },
      to: {
        type: String || Object,
        default: ''
      },
      url: {
        type: String,
        default: ''
      }
    },
    components: { Loading, Icon },
    setup(props, { slots, emit }) {
      const classes = computed(() => {
        return [
          `${props.prefixCls}`,
          { [`${props.prefixCls}--primary`]: props.type === 'primary' },
          { [`${props.prefixCls}--info`]: props.type === 'info' },
          { [`${props.prefixCls}--default`]: props.type === 'default' },
          { [`${props.prefixCls}--danger`]: props.type === 'danger' },
          { [`${props.prefixCls}--warning`]: props.type === 'warning' },
          `${props.prefixCls}--normal`,
          { [`${props.prefixCls}--plain`]: props.plain },
          { [`${props.prefixCls}--hairline`]: props.hairline },
          { [`ha-hairline--surround`]: props.hairline },
          { [`${props.prefixCls}--disabled`]: props.disabled },
          { [`${props.prefixCls}--loading`]: props.loading },
          { [`${props.prefixCls}--square`]: props.square },
          { [`${props.prefixCls}--round`]: props.round },
          { [`${props.prefixCls}--${props.size}`]: props.size }
        ]
      })

      const isIcon = computed(() => {
        return props.icon
      })

      const styles = computed(() => {
        const style: CSSProperties = {}
        console.log(props.color)
        if (props.plain) {
          style.color = props.color
          style.borderColor = props.color
        } else {
          style.color = '#fff'
          style.background = props.color
        }
        return style
      })

      const router = useRouter()

      const onClick = (event: Event) => {
        if (props.disabled) return
        if (props.to && router) {
          router.push(props.to as RouteLocationRaw)
          return
        } else if (props.url) {
          location.href = props.url
        }
        emit('click', event)
      }

      return { classes, isIcon, styles, onClick }
    }
  })
</script>

<style lang="scss" scoped></style>
