import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Footer from '../footer/footer';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    const user = this.state;
    this.props.signup(user);
    // .then(() => this.props.history.push("/boards"));
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  componentDidMount() {
    document.title = "Tyrello - Sign Up";
  }

  renderErrors() {
    return (
      <ul className="login-errors">
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div>
        <div className='signup--container'>
          <h1> Sign up! </h1>
          <form onSubmit={this.handleSubmit} className='signup--form'>
            <input type="text"
              value={this.state.email}
              onChange={this.update('email')}
              placeholder="Email"
            />

            <input type="text"
              value={this.state.username}
              onChange={this.update('username')}
              placeholder="Username"
            />
            <input type="password"
              value={this.state.password}
              onChange={this.update('password')}
              placeholder="Password"
            />
            {this.renderErrors()}
            <input id="sign-up-button" type="submit" value="SIGN UP" />
          </form>
          <p> Already have an account? <Link to='/'> Log In </Link> </p>

        </div>
        <Footer />
      </div>
    );
  }
}

export default withRouter(Signup);