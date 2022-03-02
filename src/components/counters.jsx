import React, { Component } from "react";
import Counter from "./counter";
class counters extends Component {
  state = {
    counters: [
      { id: 1, value: 3 },
      { id: 2, value: 10 },
      { id: 3, value: 5 },
      { id: 4, value: 0 },
    ],
  };
  render() {
    return (
      <React.Fragment>
        <h1>React Sample 3</h1>
        <h2>Counters</h2>
        <div className="container">
          {this.state.counters.map((counter) => (
            <Counter key={counter.id} value={counter.value}>
              <p> Counter number is: {counter.id}</p>
            </Counter>
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default counters;
