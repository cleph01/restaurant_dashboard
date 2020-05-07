import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
//Start ApolloClient Imports
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
//End ApolloClient Imports
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

export const client = new ApolloClient({
    uri: "http://localhost:8000",
    request: (operation) => {
        // const token = localStorage.getItem("token");
        const token = "token";
        operation.setContext({
            headers: {
                authorization: token ? `Bearer ${token}` : "",
            },
        });
    },
});

ReactDOM.render(
    <ApolloProvider client={client}>
        <Router>
            <App />
        </Router>
    </ApolloProvider>,
    document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
