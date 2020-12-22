import React, { Component } from "react";

export default class Classrerender extends Component {
  state = {
    bool: false
  };

  randomNum = Math.random();
  render() {
    return (
      <div>
        <p>Este número random será igual cada vez que le des clcik:</p>
        <p>{this.randomNum}</p>
        <p>Estado de bool {`${this.state.bool}`}</p>

        <button
          onClick={() =>
            this.setState((state) => {
              return {
                bool: !state.bool
              };
            })
          }
        >
          Que sucedera ?
        </button>
      </div>
    );
  }
}
