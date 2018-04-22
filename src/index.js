import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'antd';
import 'antd/dist/antd.css';
import './index.css';

function LoginButton(props) {
  return (
    <Button
      type={props.isLoggedIn ? "danger" : "primary"}
      onClick={props.onClick}
      className="Button__Center"
    >
      {props.isLoggedIn ? "Logout" : "Login"}
    </Button>
  )
}

function Greeting(props) {
  return (
    <h1>
      Hello, {props.isLoggedIn ? "Logged In User" : "Guest"}!
    </h1>
  )
}

class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.state = {isLoggedIn: false};
  }

  handleLoginClick() {
    this.setState({isLoggedIn: !this.state.isLoggedIn});
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;

    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        <LoginButton
          isLoggedIn={isLoggedIn}
          onClick={this.handleLoginClick}
        />
      </div>
    )
  }
}

ReactDOM.render(
  <div className="Container__Wrapper">
    <LoginControl />
  </div>
  ,
  document.getElementById('root')
);
