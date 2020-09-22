// import { shallowMount } from '@vue/test-utils'


// const shallowMount = require('@vue/test-utils');
// const TaskList = import('@/components/TaskList.vue');

// describe('TaskList.vue', () => {
//   it('renders props.msg when passed', () => {
//     const msg = 'new message'
//     // const wrapper = mount(TaskList, { msg: 'body' });
//     const wrapper = shallowMount(TaskList);
//     expect(true).toBe(true)
//   })
// })


import { mount } from '@vue/test-utils'
import TaskList from '@/TaskList.vue'
// import HelloWorld from '@/HelloWorld.vue'

describe('displays message',  () => {
  const wrapper =  mount(TaskList, { msg: 'body' })
    console.log(wrapper)
  // Assert the rendered text of the component
//   expect(wrapper.find('p').text()).toBe('0')
//   await wrapper.find('button').trigger('click')
//   expect(wrapper.find('p').text()).toBe('1')
})
