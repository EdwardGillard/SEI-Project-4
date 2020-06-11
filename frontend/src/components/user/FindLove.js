import React from 'react'
import { Redirect } from 'react-router-dom'
import useFetch from '../../utils/useFetch'
import { getAllUsers, ToggleFavs, addToDisliked, getDashboard } from '../../lib/api'
import { Swipeable } from 'react-swipeable'
import ControlledCarousel from './ControlledCarousel'


function FindLove() {
  //*! GET ALL USERS TO CYCLE THROUGH.
  const { data: users, loading, error, refetchData } = useFetch(getAllUsers)
  //*! TOGGLE FOR IF NO MORE USERS ARE AVAILABLE.
  const [noMore, setNoMore] = React.useState(false)
  //*! GET CURRENT USER FOR COMPARISONS WITH ALL USER INFO.
  const { data: currentUser } = useFetch(getDashboard)
  //! INDEX TO CONTROL INFO SENT TO CAROUSEL.
  const [index, setIndex] = React.useState(0)

  //? FUNCTION TO FILTER USERS SUITABLE TO CURRENT USERS WANTS.
  const filterUsers = users => {
    if (!users || !currentUser) return null
    if (currentUser.gender_preference === 'B') return users
    return users.filter(user => user.gender === currentUser.gender_preference)
  }

  //? Function to add user to favourites: ONSWIPERIGHT for mobile/tablet, ONCLICK for desktop.
  const addToFavs = async () => {
    try {
      await ToggleFavs({ liked_user: users[index].id })
      if (index < filterUsers(users).length - 1) {
        setIndex(index + 1)
      } else {
        setNoMore(true)
      }
      refetchData()
    } catch (err) {
      console.log(err)
    }
  }

  //*? Function to add user to reject pile: ONSWIPELEFT for mobile/tablet, ONCLICK for desktop.
  const disliked = async () => {
    console.log('swipped left')
    await addToDisliked({ disliked_user: users[index].id })
    if (index < filterUsers(users).length - 1) {
      console.log('Okay')
      setIndex(index + 1)
    } else {
      setNoMore(true)
    }
    refetchData()
  }

  //! IF AN ERROR OCCURS IN CUSTOM HOOK REDIRECT TO ERROR PAGE.
  if (error) {
    return <Redirect to="/notfound" />
  }
  //*! AWAIT FILTER USERS FUNCTION BEFORE RENDERING.
  if (filterUsers(users) === null) return null
  return (
    <>
      {loading ?
        <div className="home-page">
          <div className="background-home">
          </div>
        </div>
        :
        <div>
          <div className="judgement-button">
            <button onClick={disliked} className="reject">Not my kind of person</button>
            <button onClick={addToFavs}>My kind of person!</button>
          </div>
          <Swipeable onSwipedRight={addToFavs} onSwipedLeft={disliked} preventDefaultTouchmoveEvent={true}>
            <ControlledCarousel
              user={filterUsers(users)[index]}
              noMore={noMore}
            />
          </Swipeable>
        </div>
      }
    </>
  )
}
export default FindLove