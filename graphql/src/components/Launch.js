import React, { Component, Fragment } from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import { Link } from "react-router-dom";
import classNames from "classnames";

const LAUNCH_QUERY = gql`
  query LaunchQuery($country_code: ID!) {
    country(code: $country_code) {
      name
      code
      native
      capital
      emoji
      currency
      continent {
        code
        name
      }
      languages {
        code
        name
      }
    }
  }
`;

export class Launch extends Component {
  render() {
    let { country_code } = this.props.match.params;
    return (
      <Fragment>
        <Query query={LAUNCH_QUERY} variables={{ country_code }}>
          {({ loading, error, data }) => {
            if (loading) return <h4>Loading...</h4>;
            if (error) console.log(error);

            const {
              name,
              code,
              native,
              capital,
              emoji,
              currency,
            } = data.country;
            return (
              <div>
                <h1 className="display-4 my-3">
                  <span className="text-light">Country:</span> {name}
                </h1>
                <h4 className="mb-3">Country Details</h4>
                <ul className="list-group">
                  <li className="list-group-item">
                    Country Capital: {capital}
                  </li>
                  <li className="list-group-item">Country Code: {code}</li>
                  <li className="list-group-item">Country Emoji: {emoji}</li>
                  <li className="list-group-item">
                    Country Currency: {currency}
                  </li>
                  <li className="list-group-item">Country Native: {native}</li>
                </ul>

                <h4 className="my-3">Continent Details</h4>
                <ul className="list-group">
                  <li className="list-group-item">
                    Continent ID: {data.country.continent.code}
                  </li>
                  <li className="list-group-item">
                    Continent Name: {data.country.continent.name}
                  </li>
                </ul>
                <hr />
                <Link to="/" className="btn btn-secondary">
                  Back
                </Link>
              </div>
            );
          }}
        </Query>
      </Fragment>
    );
  }
}

export default Launch;
