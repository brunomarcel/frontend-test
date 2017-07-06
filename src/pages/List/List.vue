<style src="./list.css"></style>
<template>
  <div id="list">
    <search></search>
		<p v-if="!this.$store.state.listEmpty" id="result">Resultado da busca por: <strong>{{ getSearch() }}</strong></p>
		<p v-if="this.$store.state.listEmpty" id="result">Não encontramos nada buscando por <strong>{{ getSearch() }}</strong></p>
		<ul>
			<movie
				v-for="m in $store.state.movies"
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
import Search from '../../components/Search/Search.vue'

export default {
  name: 'list',
  components: {
    Movie,
    Modal,
    Search
  },
  methods: {
    getSearch () {
      return this._routerRoot._route.params.search
    }
  },
  mounted () {
    this.$store.dispatch('getList')
  },
  watch: {
    '$route' (to, from) {
      this.$store.dispatch('getList')
    }
  }
}
</script>
