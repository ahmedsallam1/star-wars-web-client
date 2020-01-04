<template>
	<div id="magic-button" class="break">
		<div class="button">
			<div class="overlay"
				v-bind:class="{ 'active-btn': isActive }"
				v-on:click="isActive = !isActive; setFetch(!fetch);">
				<span id="magic-words">
					<font-awesome-icon :icon="['fas', 'star']" size="lg"/>
						<span class="text">Do. Or do not. There is no try.</span>
					<font-awesome-icon :icon="['fas', 'star']" size="lg"/>
				</span>
			</div>
		</div>
	</div>
</template>

<script>
	import {mapGetters, mapActions} from 'vuex';
	export default {
		computed: {
			...mapGetters({
				fetch: 'Statistics/fetch',
			})
		},
		data: () => ({
			isActive: false
		}),
		methods: {
			...mapActions({
				'setFetch': 'Statistics/setFetch'
			})
		},
	}
</script>
