<style src="./movie.css"></style>
<template>
	<li class="movies" @click="showDetails" v-if="show">
		<label for="ocModal-checkbox" class="ocModal-show">
			<img :src="movie.poster" @error="imgError"/>
			<p><strong>{{ movie.show_title }}</strong> - {{ movie.release_year }}</p>
			<button @click="addRemoveFavorite(movie)">{{ movie.favorite }}</button>
		</label>
	</li>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'movie',
  props: ['movie'],
  data () {
    return {
      show: false
    }
  },
  beforeMount () {
    if (
      this.movie.hasOwnProperty('show_title') &&
      typeof this.movie.show_title === 'string' &&
      this.movie.hasOwnProperty('poster') &&
      typeof this.movie.poster === 'string' &&
      this.movie.hasOwnProperty('release_year') &&
      typeof this.movie.release_year === 'string' &&
      this.movie.hasOwnProperty('favorite') &&
      typeof this.movie.favorite === 'string'
    ) {
      this.show = true
    }
  },
  methods: {
    ...mapActions(['addRemoveFavorite']),
    imgError () {
      this.movie.poster = 'http://via.placeholder.com/285x400'
    },
    showDetails () {
      window.scrollTo(0, 0)
      this.$store.commit('setDataModal', this.movie)
    }
  }
}
</script>
