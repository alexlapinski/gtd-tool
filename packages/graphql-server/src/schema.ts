import { gql } from 'apollo-server';

// TODO: Read the schema from file
export default gql`
type Task {
    id: String!
    text: String!
    priority: Priority!
}

enum Priority {
    High
    Medium
    Low
}

type Query {
    tasks: [Task!]!
}

type Mutation {
    createTask(text: String, priority: Priority): Task!
}
`;
