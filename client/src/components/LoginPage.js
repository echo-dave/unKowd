import React from "react";
import SignUpForm from "./SignUpForm";
import LoginForm from "./LoginForm";

class LoginPage extends React.Component {
  state = {
    isRegister: false
  };
  changeForm = () => {
    this.setState({ isRegister: !this.state.isRegister });
  };
  render() {
    const { isRegister } = this.state;
    return (
      <>
        <nav>
          <h1 id="main-name">UnKnowed</h1>
        </nav>
        <h5 id="quote">Putting community back in community</h5>
        <div class="container">
          <div class="columns is-centered is-vcentered">
            <div class="column is-narrow">
              {isRegister ? <SignUpForm /> : <LoginForm />}
              <button
                class="button is-primary is-small"
                id="login"
                onClick={this.changeForm}
              >
                {isRegister
                  ? "Already have an account?"
                  : "Sign up for an account"}
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default LoginPage;
