import Vue from 'vue'

import Search from '@/components/Search/Search'
describe('Search Component', () => {
  it('Verifica se msg é válido e igual "Busca"', () => {
    expect(typeof Search.data).to.equal('function')
    const defaultData = Search.data()
    expect(defaultData.msg).to.equal('Busca')
  })
  it('Verifica se o input default da busca é o title', () => {
    const Constructor = Vue.extend(Search)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('#radios input[checked=checked]').value)
      .to.equal('title')
  })
  it('Verifica se o método search existe', () => {
    expect(typeof Search.methods.search).to.equal('function')
  })
})
