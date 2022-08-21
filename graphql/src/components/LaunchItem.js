import React from "react";
import classNames from "classnames";
import Moment from "react-moment";
import { Link } from "react-router-dom";
import "./LaunchItem.css";

export default function LaunchItem({ data }) {
  return (
    <div className="card card-body mb-3">
      {console.log(data)}
      <div className="row">
        <div className="col-md-9">
          <h4>
            Country:{" "}
            <span
              className={classNames({
                "text-success": true,
                "text-warning": !true,
              })}
            >
              {data.name}
            </span>
          </h4>
          <p>Capital: {data.capital}</p>
        </div>
        <div className="col-md-3">
          <Link to={`/launch/${data.code}`} className="btn btn-secondary">
            Country Details
          </Link>
        </div>
      </div>
    </div>
  );
}
