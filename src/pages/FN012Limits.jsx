import React, { useState } from "react";

import { withRouter, Link } from "react-router-dom";
import { useStateMachine } from "little-state-machine";

import { updateAction } from "../actions";

import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const FN012Limits = (props) => {
  const { state, actions } = useStateMachine({ updateAction });

  const [showRules, setShowRules] = useState(false);

  return (
    <div className="card">
      <div className="card-header">
        <div className="d-flex justify-content-between">
          FN012 - Size Limits
          <button
            type="button"
            className="btn btn-link"
            onClick={() => setShowRules(!showRules)}
          >
            Validation Rules
          </button>
        </div>
      </div>
      <div className="card-body">
        <p>
          This table contains the default size limits that will be used to
          validate the biological attributes of the length and weight data
          collected in this project. Default values have been specified based on
          the lake and protocol, but they can be adjusted as necessary.
          Generally speaking, the limits should be wide enough to reasonably
          encompass the species and lifestages you are likely to encounter, but
          no wider. You can edit individual records by clicking on the edit icon
          in the corresponding row of the table. To add or remove spc+group
          combinations, please return to the previous form.
        </p>

        {showRules && (
          <div className="card mt-2 mb-3">
            <div className="card-body">
              <h5 className="card-title">Validation Rules</h5>
              <ul>
                <li>All fields are required</li>
                <li>
                  Values for FLEN cannot be greater than their corresponding
                  limits for TLEN
                </li>
                <li>
                  Warning values cannot fall outside of the range defined by the
                  Error values
                </li>
                <li>
                  Maximum and minimum values must be withing the global limits
                  of GLIS{" "}
                </li>
              </ul>
            </div>
          </div>
        )}

        <div className="row justify-content-between">
          <div className="col-3">
            <Link to="/fn012_samping" tabIndex="-1">
              <button type="button" className="btn btn-primary">
                <span className="px-1">
                  <FaArrowLeft />
                </span>
                Back
              </button>
            </Link>
          </div>
          <div className="col-3">
            <Link to="/fn022" tabIndex="-1">
              <button type="button" className="btn btn-primary">
                <span className="px-1">
                  <FaArrowRight />
                </span>
                Next
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(FN012Limits);
