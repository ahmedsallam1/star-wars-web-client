import gql from 'graphql-tag'

export const GET_MOST_APPEARED_SPECIES = gql`
	query{
		species(isMostAppeared: true){
			name,
			peopleCount
		}
	}`

