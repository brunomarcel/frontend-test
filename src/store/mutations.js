// MUTATIONS
// mutations are operations that actually mutates the state.
// each mutation handler gets the entire state tree as the
// first argument, followed by additional payload arguments.
// mutations must be synchronous and can be recorded by plugins
// for debugging purposes.
const mutations = {
  saveMovies (state, movies) {
    if (movies.length === undefined) {
      state.movies = []
      if (state.favoriteIds.indexOf(movies.show_id) === -1) {
        movies.favorite = 'favoritar'
      } else {
        movies.favorite = 'desfavoritar'
      }
      state.movies.push(movies)
    } else {
      movies.favorite = false
      var mv = movies.map(function (idx, el) {
        if (state.favoriteIds.indexOf(idx.show_id) === -1) {
          idx.favorite = 'favoritar'
        } else {
          idx.favorite = 'desfavoritar'
        }
        return idx
      })
      state.movies = mv
    }
  },
  setDataModal (state, data) {
    state.dataModal = data
  },
  listEmpty (state, flag) {
    state.movies = []
    state.listEmpty = flag
  },
  addRemoveFavorite (state, movie) {
    event.stopImmediatePropagation()
    if (movie.favorite === 'favoritar') {
      movie.favorite = 'desfavoritar'
      state.favoriteIds.push(movie.show_id)
      state.favorite.push(movie)
    } else {
      var start = state.favoriteIds.indexOf(movie.show_id)
      state.favoriteIds.splice(start, 1)
      state.favorite.splice(start, 1)
      movie.favorite = 'favoritar'
    }
  }
}

export default mutations
