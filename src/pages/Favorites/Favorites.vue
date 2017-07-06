<style src="./favorites.css"></style>
<template>
  <div id="favorites">
		<p id="result">Lista de favoritos</p>
		<ul>
			<movie
				v-for="m in $store.state.favorite"
				:movie="m"
				:key="m.show_id">
			</movie>
		</ul>
		<modal></modal>
  </div>
</template>

<script>
import Movie from '../../components/Movie/Movie'
import Modal from '../../components/Modal/Modal'

export default {
  name: 'favorites',
  components: {
    Movie,
    Modal
  }
}
</script>
