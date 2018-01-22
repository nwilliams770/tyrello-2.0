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
      <div className='bg'>
        <div className='logo-login-signup'></div>
        <div className='photo-bg'>
          <div className='signup-login--container'>
            <h1 className='signup-login--header'> Sign up </h1>
            <form className='signup-login-form' onSubmit={this.handleSubmit}>
              <input type="text"
                value={this.state.email}
                onChange={this.update('email')}
                placeholder="Email"
                className='login-signup--input'
              />

              <input type="text"
                value={this.state.username}
                onChange={this.update('username')}
                placeholder="Username"
                className='login-signup--input'
              />
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                placeholder="Password"
                className='login-signup--input'
              />
              {this.renderErrors()}
              <input className='login-signup--submit' type="submit" value="sign up" />
            </form>
            <p> Already have an account? <Link to='/'> Log In </Link> </p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withRouter(Signup);