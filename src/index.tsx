import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

const client = new ApolloClient({
    uri: 'https://api.spacex.land/graphql',
    cache: new InMemoryCache(),
});

ReactDOM.render(
    <React.StrictMode>
        <ApolloProvider client={client}>
            <Router>
                <App />
            </Router>
        </ApolloProvider>
    </React.StrictMode>,
    document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// client
//     .query({
//         query: gql`
//             query PastLaunches {
//                 launchesPast(limit: 10) {
//                     mission_name
//                     launch_date_local
//                 }
//             }
//         `,
//     })
//     .then((result) => console.log(result))
//     .catch((e) => console.log(e));
