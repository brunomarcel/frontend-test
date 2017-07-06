import Favorites from '@/pages/Favorites/Favorites'
describe('Favorites Page', () => {
  it('Verifica se o componente Movie é válido', () => {
    expect(typeof Favorites.components.Movie).to.equal('object')
  })
  it('Verifica se o componente Modal é válido', () => {
    expect(typeof Favorites.components.Modal).to.equal('object')
  })
})
