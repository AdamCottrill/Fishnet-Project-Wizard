import React, { useState } from "react";

import { useStateMachine } from "little-state-machine";
import { Link, withRouter } from "react-router-dom";

import { updateAction } from "../actions";

import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

// http://10.167.37.157/fn_portal/api/v1/fn012_protocol/?lake=HU&protocol=BSM

const FN012Sampling = (props) => {
  const { state, actions } = useStateMachine({ updateAction });

  const [showRules, setShowRules] = useState(false);

  return (
    <div className="card">
      <div className="card-header">
        <div className="d-flex justify-content-between">
          FN012 - Fish Sampling Specifications
          <button
            type="button"
            className="btn btn-link"
            onClick={() => setShowRules(!showRules)}
          >
            Validation Rules
          </button>
        </div>

        <div className="card-body">
          <p>
            This table displays information about how fish will be sampled in
            this project. Based on the lake and protocol provided in the last
            form, we have pre-populated the species list and sampling
            specifications. In most cases, these will be appropriate, but they
            can be changed if necessary. To add a new species or group, click
            the Add SPC+GRP button and fill in the form. Existing entries can be
            edited or deleted by clicking on the icons in the corresponding row
            of the table.
          </p>

          <p>
            The intent of this table is to capture how fish should be sampled in
            order to meet the project objectives. It does not limit sampling to
            these specification or enforce sampling requirements. The fields are
            used during process-validate stage to ensure that all associated
            data is include in the populated template database.
          </p>

          <p>
            Biological limits for each species-group combination will be
            addressed in the next form.
          </p>
          <p>
            There is no limit on the number of SPC+GRP combinations that can be
            specified, but they should be limited to those species that are
            expected to be sampled in the project and are part of the project
            study design.
          </p>
        </div>

        {showRules && (
          <div className="card mt-2 mb-3">
            <div className="card-body">
              <h5 className="card-title">Validation Rules</h5>
              <ul>
                <li>All fields are required</li>
                <li>combinations of SPC + GRP must be unique </li>
              </ul>
            </div>
          </div>
        )}

        <div className="row justify-content-between">
          <div className="col-3">
            <Link to="/" tabIndex="-1">
              <button type="button" className="btn btn-primary">
                <span className="px-1">
                  <FaArrowLeft />
                </span>
                Back
              </button>
            </Link>
          </div>
          <div className="col-3">
            <Link to="/fn012_limits" tabIndex="-1">
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

export default withRouter(FN012Sampling);
