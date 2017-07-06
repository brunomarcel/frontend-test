import axios from 'axios'
import router from '../router/index.js'

var rt = router

// ACTIONS
// actions are functions that causes side effects and can involve
// asynchronous operations.
const actions = {
  search ({ commit, state, dispatch }, post) {
    var toSearchVal = document.getElementById('toSearch').value
    if (toSearchVal !== '') {
      var radios = document.getElementsByName('busca')
      var toSearch
      for (var i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
          toSearch = radios[i].value
          rt.push({name: 'list', params: { type: toSearch, search: toSearchVal }})
          if (rt.history.current.name === 'list') {
            dispatch('getList')
          }
          break
        }
      }
    }
  },
  getList ({ commit, state }) {
    var search = rt.history.current.params.type + '=' + rt.history.current.params.search
    var API_URL = 'http://netflixroulette.net/api/api.php?'
    axios.get(API_URL + search)
    .then(function (response) {
      if (state.listEmpty) {
        commit('listEmpty', false)
      }
      commit('saveMovies', response.data)
    })
    .catch(function () {
      commit('listEmpty', true)
    })
  },
  addRemoveFavorite ({ commit, state }, movie) {
    commit('addRemoveFavorite', movie)
  }
}

export default actions
