<template>
	<div class="center-content">
		<logo></logo>
		<magic-button></magic-button>
		<magic-content v-if="fetch"></magic-content>
	</div>
</template>
<script>
	import {mapGetters} from 'vuex';

	export default {
		computed: {
			...mapGetters({
				'fetch': 'Statistics/fetch'
			})
		}
	}
</script>

<style lang="less">
	@import '../styles/main.less';
</style>
