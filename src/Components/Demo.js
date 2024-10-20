import React, { Component } from "react";

export class Demo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "sudheer",
    };
    console.log("constructor");
  }
  componentWillMount() {
    console.log("componentWillMount");
  }
  componentDidMount() {
    console.log("componentDidMount");
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate-----", nextProps, nextState);
    return true;
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate------", prevProps, prevState);
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log(prevProps, prevState, "getSnapshotBeforeUpdate");
  }
  hitMe = () => {
    this.setState({
      name: "Rajesh",
    });
  };
  render() {
    console.log("render");
    return (
      <div>
        <a href="https://www.twitter.com" target="_blank">
          da
        </a>
        Hi {this.state.name}
        <br /> <br /> <br />
        <button onClick={this.hitMe}>Updating State</button>
      </div>
    );
  }
}

export default Demo;
