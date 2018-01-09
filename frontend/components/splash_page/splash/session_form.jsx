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
    this.demoLogin = this.demoLogin.bind(this);
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

  demoLogin(e) {
    e.preventDefault();
    this.props.login({ username: 'Loras-Tyrell', password: 'password' });
  }

  render() {
    return (
      <div>
        <div className='logo'></div> 
        <div className='session--container'>
        <h1 className='session--header'> Welcome, stranger! </h1>
        <ul className='session--bullets'>
          <li> Get more done with Tyrello </li>
          <li> Flexible prioritization </li>
          <li> Organize projects with lists and cards </li>
          <li> A Trello parody </li>
        </ul>
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

          <input className="session-button" type="submit" value="LOG IN" />
          <button className="session-button" onClick={this.demoLogin} >
            DEMO
              </button>
        </form>
        </div>
        
        
      </div>
    );

  }
}

export default withRouter(SessionForm);
