import Vue from 'vue'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { onError } from "apollo-link-error"
import { InMemoryCache } from 'apollo-cache-inmemory'
import VueApollo from 'vue-apollo'
import config from '../../env'

const httpLink = new HttpLink({
    uri: config.GRAPHQL_END_POINT,
    credentials: false
})

const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors)
        graphQLErrors.map(({ message, locations, path }) =>
            console.log(
                `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
            )
        )
    if (networkError) console.log(`[Network error]: ${networkError}`)
})

export const apolloClient = new ApolloClient({
    link: errorLink.concat(httpLink),
    cache: new InMemoryCache(),
    connectToDevTools: true
})

Vue.use(VueApollo)

export default new VueApollo({
    defaultClient: apolloClient
})