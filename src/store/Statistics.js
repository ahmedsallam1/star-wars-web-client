import Api from '../libraries/Api'
import apolloProvider from '../graphql/apolloClient'
import {GET_MOST_APPEARED_CHARACTER} from '../graphql/query/film'

export default {
    namespaced: true,
    state: {
        fetch: false,
        longestCrawl: '...',
        mostAppearedCharacter: 'static',
        mostAppearedSpecies: 'static',
        largestNumberPilots: 'static',
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
    },
    actions: {
        setFetch ({commit}, value) {
            commit('SET_FETCH', value);
        },

        load ({dispatch}){
            dispatch('fetchLongestCrawl')
            dispatch('fetchMostAppearedCharacter')
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
                .catch((e) => {
                    console.log(e)
                })
        }
    }
}
