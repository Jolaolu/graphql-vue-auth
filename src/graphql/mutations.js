import gql from 'graphql-tag'

export const LOGIN_USER = gql`
mutation login ($email: String! $password: String! ){
  login(email: $email password: $password ){
    token
  }
}
`
export const REGISTER_USER = gql`
mutation createUser($name: String! $email: String! $password: String! ) {
    createUser( name: $name, email: $email, password: $password) {
      token
    }
}
`
