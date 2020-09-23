import { mount, shallowMount } from '@vue/test-utils'
import Loading from '../src/index.vue'

describe('Loading.vue', () => {
  it('renders props.msg when passed', () => {
    const wrapper = mount(Loading, {
      propsData: {
        type: 'circular'
      }
    })
    expect(wrapper).toMatchSnapshot()
  })
})
