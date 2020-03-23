import gql from 'graphql-tag'

// export const LOGIN_USER = gql`
// mutation login (){
//   login(){

//   }
// }
// `
export const REGISTER_USER = gql`
mutation createUser($name: String! $email: String! $password: String! ) {
    createUser( name: $name, email: $email, password: $password) {
      token
      user
    }
}
`
// export const NEW_POST = gql`
//    mutation createPost(){
//     createPost(){

//     }
//   }

// `
