import React from 'react';
import {ApolloProvider} from '@apollo/react-hooks';
import {Provider} from "react-redux";
import apolloClient from './graphql/apollo-client';
import store from './store';

import './App.css';


const App: React.FC = () => (
    <ApolloProvider client={apolloClient}>
      <Provider store={store}>

      </Provider>
    </ApolloProvider>
);

export default App;
