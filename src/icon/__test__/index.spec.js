import {mount, shallowMount} from '@vue/test-utils'
import Icon from '../src/index.vue'

describe('Icon.vue', ()=>{
  it('renders props.msg when passed', ()=>{
    const wrapper = mount(Icon, {
      propsData: {
        name: 'success',
      },
    });
    expect(wrapper).toMatchSnapshot();
  })

  it('renders props.msg when passed', ()=>{
    const msg = 'new icon'
    const wrapper = shallowMount(Icon, {
      propsData: { msg }
    })
    expect(wrapper.findAll('.ha-icon').length).toBe(1)
  })

  it('dot prop', () => {
    const wrapper = mount(Icon, {
      propsData: {
        dot: true,
      },
    });
    expect(wrapper).toMatchSnapshot();
  });
})