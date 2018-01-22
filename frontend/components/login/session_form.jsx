import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  componentDidMount() {
    document.title = "Tyrello - Welcome";
  }

  renderErrors() {
    return (
      <ul className="login-signup-errors">
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.login(user);
  }


  render() {
    return (
      <div className='bg--signup-login'>
        <div className='logo-login-signup'></div> 
        <div className='photo-bg'>
          <div className='signup-login--container'>
            <h1 className='signup-login--header'> log in </h1>
            <form className='signup-login-form' onSubmit = {this.handleSubmit}>
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
              <input className='login-signup--submit' type="submit" value="LOG IN" />
            </form>
            <p className='link-copy'> New in town? <Link id='redirect-link' to='/signup'> Sign up </Link> </p>
          </div>
        </div>
      </div>
    );

  }
}

export default withRouter(SessionForm);
