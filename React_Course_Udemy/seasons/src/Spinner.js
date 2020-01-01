import React from "react";
import ReactDOM from "react-dom";

const Spinner = props => {
  return (
    <div className="ui active dimmer">
      <div className="ui big text loader">{props.message}</div>
    </div>
  );
};

//  These props values woul be taken if no prop been provided
Spinner.defaultProps = {
  message: "Sample Default Message"
};

export default Spinner;
