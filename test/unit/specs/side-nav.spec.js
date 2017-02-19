import Vue from 'vue'
import SideNav from 'src/components/side-nav.vue'

describe('SideNav.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(SideNav)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('header span').textContent)
      .to.equal('Xu Fei')
  })
})
