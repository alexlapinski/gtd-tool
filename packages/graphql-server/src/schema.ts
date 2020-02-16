import { gql } from 'apollo-server';

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
