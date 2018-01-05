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
    this.props.login({ username: 'Sansa-Stark', password: 'password' });
  }

  render() {
    return (
      <div>
        <video autoPlay loop className="fullscreen-bg fullscreen-bg-video">
          <source src="http://res.cloudinary.com/nwilliams770/video/upload/v1515178864/Bee_Flower_Compressed_dkfzal.mp4" type="video/mp4" />
        </video>
      </div>
    );

  }
}

export default withRouter(SessionForm);
