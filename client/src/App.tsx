import React from 'react';
import {ApolloProvider} from '@apollo/react-hooks';
import {Provider} from "react-redux";
import apolloClient from './graphql/apollo-client';
import store from './store';
import Home from './components/home/Home';

import './App.css';


const App: React.FC = () => (
    <ApolloProvider client={apolloClient}>
      <Provider store={store}>
          <Home/>
      </Provider>
    </ApolloProvider>
);

export default App;
