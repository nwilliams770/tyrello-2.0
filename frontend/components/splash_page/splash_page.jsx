import React from 'react';
import { Link } from 'react-router-dom';



class SplashPage extends React.Component {
  constructor(props) {
    super(props);

    this.demoLogin = this.demoLogin.bind(this);
  }

  demoLogin(e) {
    e.preventDefault();
    const fadeOuts = document.getElementsByClassName('slide-up-fade-in');
    for (var i = 0; i < fadeOuts.length; i++) {
      fadeOuts[i].classList.add('slide-up-fade-in-reverse');
    }

    setTimeout(function () {this.props.login({ username: 'Sansa-Stark', password: 'password' }); }.bind(this), 2000);

  }

  render() {
    return (
      <div className='bg'>
        <video playbackRate='0.4' autoPlay loop className="fullscreen-bg fullscreen-bg-video">
          <source src="http://res.cloudinary.com/nwilliams770/video/upload/v1515454667/Temps_Des_Fleurs_dspllq.mp4" type="video/mp4" />
        </video>
        <div className='logo'></div>
        <div className='splash--copy'>
          <h1 className='splash--h1 slide-up-fade-in'> welcome. </h1>
          <h2 className='splash--h2 slide-up-fade-in'> Get more done with Tyrello </h2>
          <ul className='splash--body slide-up-fade-in'>
              <li> Flexible prioritization </li>
              <li> Organize projects with lists and cards </li>
              <li> A visual way to collaborate </li>
          </ul>
          <div className='splash--links slide-up-fade-in'>
            <p> Already have an account? <Link className='link' to="/login"> Log in here </Link> </p>
            <p> Otherwise, you can <Link className='link' to="/signup"> Sign up here </Link> </p>
            <p> Ain't got time for all that? Click the demo button below: </p>
          </div>
          <button className='session-button slide-up-fade-in' onClick={this.demoLogin} > DEMO </button>          
        </div>
      </div>
    );
  }
}

export default SplashPage;