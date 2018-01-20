import React from 'react';

import Footer from '../footer/footer';


class SplashPage extends React.Component {
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
        </div>
        <Footer />
      </div>
    );
  }
}

export default SplashPage;