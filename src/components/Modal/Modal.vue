<style src="./modal.css"></style>
<template>
	<div id="modal">
		<div class="ocModal">
			<input type="checkbox" id="ocModal-checkbox"/>
			
			<label for="ocModal-checkbox" class="ocModal-modal-opacity"></label>
			<div class="ocModal-modal">
				<div class="ocModal-modal-header">
					<label for="ocModal-checkbox">x</label>
					<h4>{{ this.$store.state.dataModal.show_title }} - {{ this.$store.state.dataModal.release_year }}</h4>
				</div>
				<div class="ocModal-modal-body">
					<img :src="this.$store.state.dataModal.poster" />
					
					<p><strong>Diretor:</strong> {{ this.$store.state.dataModal.director }}</p>
					<p><strong>Categoria:</strong> {{ this.$store.state.dataModal.category }}</p>
					<p><strong>Duração:</strong> {{ this.$store.state.dataModal.runtime }}</p>
					<p><strong>Elenco:</strong> {{ this.$store.state.dataModal.show_cast }}</p>
					<p><strong>Resumo:</strong> {{ this.$store.state.dataModal.summary }}</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
  name: 'modal'
}
</script>
