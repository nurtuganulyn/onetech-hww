import React from "react";
import { connect } from "react-redux";

class App extends React.Component {
  inc = () => {
    this.props.dispatch({
      type: "INCREMENT"
    });
  };

  dec = () => {
    this.props.dispatch({
      type: "DECREMENT"
    });
  };

  reset = () => {
    this.props.dispatch({
      type: "RESET"
    });
  };

 
  render() {
    return (
      <div className="App mt-5">
        <button onClick={this.inc} className="btn btn-success mr-5">
          Increment
        </button>
        <button onClick={this.dec} className="btn btn-danger">
          Decrement
        </button>
        <button onClick={this.reset} className="btn btn-primary">
          Reset
        </button>
        <h2 className="mt-5 display-1">{this.props.count}</h2>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    count: state.count
  };
};

export default connect(mapStateToProps)(App);
