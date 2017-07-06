import List from '@/pages/List/List'
describe('List Page', () => {
  it('Verifica se o componente Search é válido', () => {
    expect(typeof List.components.Search).to.equal('object')
  })
  it('Verifica se o componente Movie é válido', () => {
    expect(typeof List.components.Movie).to.equal('object')
  })
  it('Verifica se o componente Modal é válido', () => {
    expect(typeof List.components.Modal).to.equal('object')
  })
  it('Verifica se o método getSearch existe', () => {
    expect(typeof List.methods.getSearch).to.equal('function')
  })
})
