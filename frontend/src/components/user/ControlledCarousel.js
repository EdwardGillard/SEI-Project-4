import React from 'react'

//! DISPLAY ONE USERS AT A TIME IN THE CAROUSEL FOR A TINDER FEEL.
function ControlledCarousel(props) {
  return (
    <>
      {props.noMore ?
        <div className="main-page">
          <h1> No more users </h1>
        </div> :
        <div className="main-page">
          <div className="info info-two">
            <div className="info-section info-section-two">
              <label>Bio:</label>
              <p>{props.user.about_bio}</p>
            </div>
            <div className="info-section info-section-two">
              <label>Interests:</label>
              <p>{props.user.other_interests}</p>
            </div>
            <div className="info-section info-section-two">
              <label>Political Views:</label>
              <p>{props.user.political_preferences}</p>
            </div>
            <div className="info-section info-section-two">
              <label>Favourite Music:</label>
              <p>{props.user.music_preferences}</p>
            </div>
            <div className="info-section info-section-two">
              <label>Favourite Books:</label>
              <p>{props.user.literature_preferences}</p>
            </div>
            <div className="info-section info-section-two">
              <label>Favourite Films:</label>
              <p>{props.user.film_preferences}</p>
            </div>
            <div className="info-section info-section-two">
              <label>Favourite TV</label>
              <p>{props.user.television_preferences}</p>
            </div>
          </div>
        </div >}
    </>
  )
}


export default ControlledCarousel