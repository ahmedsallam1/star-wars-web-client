import Api from '../libraries/Api'

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
    },
    actions: {
        setFetch ({commit}, value) {
            commit('SET_FETCH', value);
        },

        load ({dispatch}){
            dispatch('fetchLongestCrawl')
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
        }
    }
}
