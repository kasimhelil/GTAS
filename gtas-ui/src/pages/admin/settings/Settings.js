import React from "react";
import { settingsinfo } from "../../../services/serviceWrapper";
import Form from "../../../components/form/Form";
import LabelledInput from "../../../components/labelledInput/LabelledInput";

const Settings = ({ name }) => {
  const cb = function(result) {};
  const onChange = function(result) {};

  return (
    <div className="container">
      <div className="columns">
        <div className="top column is-4 is-offset-4">
          <Form service={settingsinfo} title="" callback={cb} action="edit" id="1">
            <LabelledInput
              datafield
              labelText="Matching Threshold"
              inputType="text"
              name="matchingThreshold"
              callback={onChange}
              alt="nothing"
            />
            <LabelledInput
              datafield
              labelText="Maximum Passenger Query Results"
              inputType="number"
              name="maxPassengerQueryResult"
              callback={onChange}
              alt="nothing"
            />
            <LabelledInput
              datafield
              labelText="Maximum Flight Query Results"
              inputType="number"
              name="maxFlightQueryResult"
              callback={onChange}
              alt="nothing"
            />
            <LabelledInput
              datafield
              labelText="Watchlists Matching Flight Range"
              inputType="number"
              name="flightRange"
              callback={onChange}
              alt="nothing"
            />
            <LabelledInput
              datafield
              labelText="Maximum Rule Hits Allowed Per Run on Rule"
              inputType="text"
              name="maxRuleHit"
              callback={onChange}
              alt="nothing"
            />
            <LabelledInput
              datafield
              labelText="APIS Only Flag"
              inputType="select"
              options={[
                { value: "TRUE", label: "TRUE" },
                { value: "FALSE", label: "FALSE" }
              ]}
              name="apisOnlyFlag"
              callback={onChange}
              alt="nothing"
            />
            <LabelledInput
              datafield
              labelText="APIS Version"
              inputType="text"
              name="apisVersion"
              callback={onChange}
              alt="nothing"
            />
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Settings;