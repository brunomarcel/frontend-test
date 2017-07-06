import Vue from 'vue'

import Movie from '@/components/Movie/Movie'
describe('Movie Component', () => {
  it('Verifica se os dados estão corretos para criar o componente', () => {
    const Constructor = Vue.extend(Movie)
    const vm = new Constructor({
      propsData: {
        movie: {
          show_title: 'title',
          release_year: '1989',
          favorite: 'favorite',
          poster: 'poster'
        }
      }
    }).$mount()
    expect(vm.show).to.be.true
  })
  it('Enviando os dados incorretos para criar o componente', () => {
    const Constructor = Vue.extend(Movie)
    const vm = new Constructor({
      propsData: {
        movie: {
          show_title: 123,
          release_year: {},
          favorite: 'favorite',
          poster: []
        }
      }
    }).$mount()
    expect(vm.show).to.be.false
  })
  it('Verifica se o método addRemoveFavorite existe', () => {
    expect(typeof Movie.methods.addRemoveFavorite).to.equal('function')
  })
  it('Verifica se o método imgError existe', () => {
    expect(typeof Movie.methods.imgError).to.equal('function')
  })
  it('Verifica se o método showDetails existe', () => {
    expect(typeof Movie.methods.showDetails).to.equal('function')
  })
})
