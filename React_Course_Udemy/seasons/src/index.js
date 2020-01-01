import React from "react";
import ReactDOM from "react-dom";
import "./SeasonDisplay.css";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

class App extends React.Component {
  state = { lat: null, errorMessage: "" };

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({ lat: position.coords.latitude });
      },
      positionError => {
        this.setState({ errorMessage: positionError.message });
      }
    );
  }

  renderContent() {
    const { lat, errorMessage } = this.state;

    if (errorMessage && !lat) {
      return <div>Error Occured: {errorMessage}</div>;
    } else if (!errorMessage && lat) {
      return <SeasonDisplay lat={lat} />;
    } else {
      return <Spinner message="Please accept the request of location." />;
    }
  }

  render() {
    return <div>{this.renderContent()}</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
