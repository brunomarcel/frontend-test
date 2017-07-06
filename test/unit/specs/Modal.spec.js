import Vue from 'vue'
import Vuex from 'vuex'

import Modal from '@/components/Modal/Modal'
describe('Modal component', () => {
  let store
  it('Verifica se o componente Modal é montado corretamente', () => {
    store = new Vuex.Store({
      state: {
        dataModal: {
          show_title: 'titulo',
          poster: 'poster',
          release_year: 'ano',
          director: 'diretor',
          category: 'categoria',
          runtime: 'duração',
          show_cast: 'elenco',
          summary: 'resumo'
        }
      }
    })
    const Constructor = Vue.extend(Modal)
    const vm = new Constructor({
      store
    }).$mount()
    expect(vm.$el.querySelector('h4').textContent).to.equal('titulo - ano')
  })
})
