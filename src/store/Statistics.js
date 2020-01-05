export default {
    namespaced: true,
    state: {
        fetch: false,
        longestCrawl: 'static',
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
            return state.longestCrawl;
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
    },
    actions: {
        setFetch ({commit}, value) {
            commit('SET_FETCH', value);
        }
    }
}
