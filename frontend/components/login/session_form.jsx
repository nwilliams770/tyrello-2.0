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
      <ul className="login-errors">
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
      <div className='bg'>
        <div className='logo-login-signup'></div> 
        <div className='session--container'>
          <h1 className='session--header'> Welcome back! </h1>
          <form className='session--form' onSubmit = {this.handleSubmit}>
            <input type="text"
              value={this.state.username}
              onChange={this.update('username')}
              id="username"
              placeholder="Username"
            />
            <input type="password"
              value={this.state.password}
              onChange={this.update('password')}
              id="password"
              placeholder="Password"
            />
            {this.renderErrors()}
            <input className="session-button" type="submit" value="LOG IN" />
            
          </form>
        </div>
      </div>
    );

  }
}

export default withRouter(SessionForm);
