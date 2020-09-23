import { mount, shallowMount } from '@vue/test-utils'
import Button from '../src/index.vue'

describe('Button.vue', () => {
  it('renders props.type when passed', () => {
    const wrapper = mount(Button, {
      propsData: {
        type: 'info'
      }
    })
    expect(wrapper).toMatchSnapshot()
  })

  // it('dot prop', () => {
  //   const wrapper = mount(Button, {
  //     propsData: {
  //       dot: true
  //     }
  //   })
  //   expect(wrapper).toMatchSnapshot()
  // })
})
