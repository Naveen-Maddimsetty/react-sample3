import React, { Component } from "react";
class Counter extends Component {
  state = { counter: this.props.value };

  handleIncrement = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  handleDecrement = () => {
    if (this.state.counter > 0)
      this.setState({ counter: this.state.counter - 1 });
  };

  stateCunterColor = () => {
    let colors = "badge m-2 bg-";
    return (colors += this.state.counter === 0 ? "danger" : "success");
  };

  render() {
    return (
      <React.Fragment>
        <div>{this.props.children}</div>
        <div className="container">
          <span className={this.stateCunterColor()}>{this.state.counter}</span>
          <button
            onClick={this.handleIncrement}
            className="btn btn-secondary btn-sm m-2"
          >
            Incrising
          </button>

          <button
            onClick={this.handleDecrement}
            className={"btn btn-secondary btn-sm m-2"}
            disabled={this.state.counter === 0 ? true : false}
          >
            Decrising
          </button>
        </div>
      </React.Fragment>
    );
  }
}

export default Counter;
