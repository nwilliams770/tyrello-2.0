import React from 'react';

import SessionFormContainer from './splash/session_form_container';
import Footer from '../footer/footer';


class SplashPage extends React.Component {
  render() {
    return (
      <div>
        <video playbackRate='0.4' autoPlay loop className="fullscreen-bg fullscreen-bg-video">
          <source src="http://res.cloudinary.com/nwilliams770/video/upload/v1515454667/Temps_Des_Fleurs_dspllq.mp4" type="video/mp4" />
        </video>
        <SessionFormContainer />
        <Footer />
      </div>
    );
  }
}

export default SplashPage;