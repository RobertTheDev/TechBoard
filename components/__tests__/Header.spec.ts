import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Header from '../Header/index.vue'

describe('HelloWorld', () => {
  it('Header component is a Vue instance', () => {
    const wrapper = mount(Header)
    expect(wrapper.vm).toBeTruthy()
  })
})
