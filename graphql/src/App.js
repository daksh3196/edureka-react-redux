import React, { Component } from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Launches from "./components/Launches";
import Launch from "./components/Launch";

const client = new ApolloClient({
  uri: "https://countries.trevorblades.com",
});
class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Router>
          <div className="container">
            <h1>Countries</h1>
            <Route exact path="/" component={Launches} />
            <Route exact path="/launch/:country_code" component={Launch} />
          </div>
        </Router>
      </ApolloProvider>
    );
  }
}
export default App;
