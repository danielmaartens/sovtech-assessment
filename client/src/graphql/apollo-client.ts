import ApolloClient from 'apollo-boost';
import config from '../config';

const Client = new ApolloClient({
    uri: config.SERVER_URL,
});

export const query = (query: any, variables?: any) => {
    return Client.query({
        query: query,
        variables: variables,
        fetchPolicy: 'network-only'
    });
};

export default Client;