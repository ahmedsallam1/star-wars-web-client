<template>
	<div id="magic-content" class="">
		<div id="longest-crawl">
			<h2 class="question">Which of all StarWars movies has longest opening crawl?</h2>
			<h2 class="answer">{{ longestCrawl }}</h2>
		</div>
		<div id="most-appeared-character">
			<h2 class="question">What character (person) appeared in the most of StarWars films?</h2>
			<h2 class="answer">{{ mostAppearedCharacter }}</h2>
		</div>
		<div id="most-appeared-species">
			<h2 class="question">What species appeared in the most number StarWars films?</h2>
			<h2 class="answer">
				<span v-for="species in mostAppearedSpecies" :key="species.name">
					<p>{{ species.name }} ({{species.peopleCount}})</p>
				</span>
				<p v-if="!mostAppearedSpecies.length">...</p>
			</h2>
		</div>
		<div id="largest-number-pilots">
			<h2 class="question">What planet in StarWars universe provided largest number of vehicle pilots?</h2>
			<h2 class="answer">{{ largestNumberPilots }}</h2>
		</div>
	</div>
</template>

<script>
	import {mapGetters} from 'vuex';

	export default {
		computed: {
			...mapGetters({
				longestCrawl: 'Statistics/longestCrawl',
				mostAppearedCharacter: 'Statistics/mostAppearedCharacter',
				mostAppearedSpecies: 'Statistics/mostAppearedSpecies',
				largestNumberPilots: 'Statistics/largestNumberPilots',
			})
		},
	}
</script>
