<style src="./header.css"></style>
<template>
	<div>
		<div id="header">
			<router-link to="/">
				<img src="../../assets/logo.png">
			</router-link>
		</div>
		<router-link to="/">Home</router-link>
		-
		<router-link to="/favorites">Favoritos</router-link>
	</div>
</template>

<script>
export default {
  name: 'header'
}
</script>
