<style src="./search.css"></style>
<template>
	<div id="search" class="container">
		<div class="col-xs-12">
			<div id="searchWrap" class="row">
				<input type="text" id="toSearch" :placeholder="msg" class="col-xs-8 col-xs-offset-1 col-md-5 col-md-offset-3" />
				<button id="btnSearch" @click="search" class="col-xs-2 col-md-1">Buscar</button>
			</div>
		</div>
		<div id="radios">
			<label>
				<input type="radio" name="busca" value="title" checked="checked" />
				Titulo	
			</label>
			<label>
				<input type="radio" name="busca" value="director" />
				Diretor
			</label>
			<label>
				<input type="radio" name="busca" value="actor" />
				Ator
			</label>
		</div>
	</div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'search',
  data () {
    return {
      msg: 'Busca'
    }
  },
  methods: {
    ...mapActions(['search'])
  }
}
</script>
