import React from 'react'

function ControlledCarousel(props) {
  return (
    <>
      {props.noMore ?
        <div className="main-page">
          <h1> No more users </h1>
        </div> :
        <div className="main-page">
          <div className="info">
            <div className="info-section">
              <label>Bio:</label>
              <p>{props.user.about_bio}</p>
            </div>
            <div className="info-section">
              <label>Interests:</label>
              <p>{props.user.other_interests}</p>
            </div>
            <div className="info-section">
              <label>Political Views:</label>
              <p>{props.user.political_preferences}</p>
            </div>
            <div className="info-section">
              <label>Favourite Music:</label>
              <p>{props.user.music_preferences}</p>
            </div>
            <div className="info-section">
              <label>Favourite Books:</label>
              <p>{props.user.literature_preferences}</p>
            </div>
            <div className="info-section">
              <label>Favourite Films:</label>
              <p>{props.user.film_preferences}</p>
            </div>
            <div className="info-section">
              <label>Favourite TV</label>
              <p>{props.user.television_preferences}</p>
            </div>
          </div>
        </div >}
    </>
  )
}


export default ControlledCarousel