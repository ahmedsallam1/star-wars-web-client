<template>
	<div id="magic-button" class="break">
		<div class="button">
			<div class="overlay"
				v-bind:class="{ 'active-btn': isActive }"
				v-on:click="isActive = !isActive">
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
	export default {
		data: () => ({
			isActive: false
		})
	}
</script>