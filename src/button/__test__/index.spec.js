import {shallowMount} from '@vue/test-utils'
import Button from '../index.vue'

describe('Button.vue', ()=>{
  it('renders props.msg when passed', ()=>{
    const msg = 'new button'
    const wrapper = shallowMount(Button, {
      propsData: { msg }
    })
    expect(wrapper.findAll('.ha-button').length).toBe(1)
  })
})