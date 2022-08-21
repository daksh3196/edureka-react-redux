import React, { Component, Fragment } from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import LaunchItem from "./LaunchItem";

const LAUNCHES_QUERY = gql`
  query LaunchesQuery {
    continent(code: "NA") {
      code
      name
      countries {
        name
        code
        capital
      }
    }
  }
`;

export class Launches extends Component {
  render() {
    return (
      <Fragment>
        <Query query={LAUNCHES_QUERY}>
          {({ loading, error, data }) => {
            if (loading) return <h4>Loading...</h4>;
            if (error) console.log(error);

            return (
              <Fragment>
                <h1 className="display-4 my-3">
                  Continent : {data.continent.name}{" "}
                </h1>
                {data.continent.countries.map((country) => (
                  <LaunchItem key={country.code} data={country} />
                ))}
              </Fragment>
            );
          }}
        </Query>
      </Fragment>
    );
  }
}

export default Launches;
