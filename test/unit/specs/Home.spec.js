import Home from '@/pages/Home/Home'
describe('Home Page', () => {
  it('Verifica se o componente Search é válido', () => {
    expect(typeof Home.components.Search).to.equal('object')
  })
})
