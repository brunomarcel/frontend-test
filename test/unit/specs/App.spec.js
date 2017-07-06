import App from '@/App'
describe('App init', () => {
  it('Verifica se o componente Search é válido', () => {
    expect(typeof App.components.HeaderBar).to.equal('object')
  })
})
