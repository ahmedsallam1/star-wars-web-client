import Api from '../libraries/Api'
import apolloProvider from '../graphql/apolloClient'
import {GET_MOST_APPEARED_CHARACTER} from '../graphql/query/film'
import {GET_MOST_APPEARED_SPECIES} from '../graphql/query/species'

export default {
    namespaced: true,
    state: {
        fetch: false,
        longestCrawl: '...',
        mostAppearedCharacter: '...',
        mostAppearedSpecies: [],
        largestNumberPilots: '...',
    },
    getters: {
        fetch(state) {
            return state.fetch;
        },
        longestCrawl(state) {
            return state.longestCrawl;
        },
        mostAppearedCharacter(state) {
            return state.mostAppearedCharacter;
        },
        mostAppearedSpecies(state) {
            return state.mostAppearedSpecies;
        },
        largestNumberPilots(state) {
            return state.largestNumberPilots;
        }, 
    },
    mutations: {
        ['SET_FETCH'](state, fetch) {
            state.fetch = fetch;

            return fetch;
        },
        ['SET_LONGEST_CRAWL'](state, longestCrawl) {
            state.longestCrawl = longestCrawl;

            return longestCrawl;
        },
        ['SET_MOST_APPEARED_CHARACTER'](state, mostAppearedCharacter) {
            state.mostAppearedCharacter = mostAppearedCharacter;

            return mostAppearedCharacter;
        },
        ['SET_MOST_APPEARED_SPECIES'](state, mostAppearedSpecies) {
            state.mostAppearedSpecies = mostAppearedSpecies;

            return mostAppearedSpecies;
        },
    },
    actions: {
        setFetch ({commit}, value) {
            commit('SET_FETCH', value);
        },

        load ({dispatch}){
            dispatch('fetchLongestCrawl')
            dispatch('fetchMostAppearedCharacter')
            dispatch('fetchMostAppearedSpecies')
        },

        fetchLongestCrawl ({commit}) {
            return Api
                .get('/api/films', {
                    params: {
                        'longest': 'openingCrawl',
                    }
                })
                .then((response) => {
                    if (response.data) {
                        commit('SET_LONGEST_CRAWL', response.data.data.title)
                    }
                })
        },

        fetchMostAppearedCharacter ({commit}) {
            return apolloProvider
                .defaultClient
                .query({ query: GET_MOST_APPEARED_CHARACTER })
                .then((response) => {
                    if (response.data) {
                        commit('SET_MOST_APPEARED_CHARACTER', response.data.character.name)
                    }
                })
        },

        fetchMostAppearedSpecies ({commit}) {
            return apolloProvider
                .defaultClient
                .query({ query: GET_MOST_APPEARED_SPECIES })
                .then((response) => {
                    if (response.data) {
                        commit('SET_MOST_APPEARED_SPECIES', response.data.species)
                    }
                })
        }
    }
}
