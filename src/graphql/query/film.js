import gql from 'graphql-tag'

export const GET_MOST_APPEARED_CHARACTER = gql`
	query{
		character(isMostAppeared: true){
			name
		}
	}`

