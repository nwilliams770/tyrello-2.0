import React from 'react';

import SessionFormContainer from './session_form/session_form_container';


class SplashPage extends React.Component {
  render() {
    return (
      <div>
        <video autoPlay loop className="fullscreen-bg fullscreen-bg-video">
          <source src="http://res.cloudinary.com/nwilliams770/video/upload/v1515178864/Bee_Flower_Compressed_dkfzal.mp4" type="video/mp4" />
        </video>
        <SessionFormContainer />
      </div>
    );
  }
}

export default SplashPage;