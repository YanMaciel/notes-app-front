import React from 'react';
import homeImage from './home_image.png'

const Home = () => {

  const imageStyle = {
    boxShadow: "0 1px 3px rgba(0, 0, 0, 0.3)"
  }
  return (
    <section className="hero is-fullheight is-white">
      <div className="hero-body">
        <div className="container">
          <div className="columns">
            <div className="column is-8 is-offset-2">
              <figure className="image is-16by9" style={imageStyle}>
                <img src={homeImage} alt="" />
              </figure>
            </div>
          </div>
          <section className="section">
            <div className="columns">
              <div className="column is-8 is-offset-2">
                <div className="content is-medium">
                  <h1 className="title">Notes App</h1>
                  <h3 className="title 2">For every minute spent organizing, an hour is earned.</h3>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}
export default Home;