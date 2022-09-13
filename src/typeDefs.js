import { gql } from "apollo-server";

const typeDefs = gql`
    type Person {
        id: ID!
        name: String!
        phone: String
        street: String!
        city: String!
    }

    type Query {
        personCount: Int!
        allPersons: [Person]!
        findPerson(name: String!): Person
        findPersonById(id: ID!): Person
    }

    type Mutation {
        addPerson(
            name: String!
            phone: String
            street: String!
            city: String!
        ): Person
        deletePerson(id: ID!): Person
        updatePerson(
            id: ID!
            name: String!
            phone: String
            street: String!
            city: String!
        ): Person
    }

    type Subscription {
        personAdded: Person!
    }  
`

export { typeDefs };