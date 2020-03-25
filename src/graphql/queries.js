import gql from 'graphql-tag'

// export const ALL_POST = gql`

// `
// export const SINGLE_POST = gql`

// `
// export const USER = gql`

// `

export const LOGGED_IN_USER = gql`
  query {
    me {
      id
      name 
      email
      posts{
        title
      }
    }
  }
`
