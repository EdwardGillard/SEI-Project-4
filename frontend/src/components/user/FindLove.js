import React from 'react'
import { Redirect } from 'react-router-dom'
import useFetch from '../../utils/useFetch'
import { getAUser, addToFavourites, addToDisliked, getDashboard } from '../../lib/api'
import { Swipeable } from 'react-swipeable'

function FindLove() {
  const { data: user, loading, error } = useFetch(getAUser, 'admin')
  const { data: currentUser } = useFetch(getDashboard)


  const userSwipedRight = async () => {
    const res = await addToFavourites({ liked_user: user.id })
    console.log(res)
  }

  const userSwipedLeft = async () => {
    const res = await addToDisliked({ disliked_user: user.id })
    console.log(res)
  }


  if (error) {
    return <Redirect to="/notfound" />
  }

  console.log(user)
  console.log(currentUser)
  return (
    <>
      {loading ? <h1>loading</h1> :
        <Swipeable onSwipedRight={userSwipedRight} onSwipedLeft={userSwipedLeft} preventDefaultTouchmoveEvent={true}>
          <div className="main-page">
            <div className="info">
              <div className="info-section">
                <label>Bio:</label>
                <p>{user.about_bio}</p>
              </div>
              <div className="info-section">
                <label>Interests:</label>
                <p>{user.other_interests}</p>
              </div>
              <div className="info-section">
                <label>Political Views:</label>
                <p>{user.political_preferences}</p>
              </div>
              <div className="info-section">
                <label>Favourite Music:</label>
                <p>{user.music_preferences}</p>
              </div>
              <div className="info-section">
                <label>Favourite Books:</label>
                <p>{user.literature_preferences}</p>
              </div>
              <div className="info-section">
                <label>Favourite Films:</label>
                <p>{user.film_preferences}</p>
              </div>
              <div className="info-section">
                <label>Favourite TV</label>
                <p>{user.television_preferences}</p>
              </div>
            </div>
          </div >
        </Swipeable>
      }
    </>
  )
}








export default FindLove