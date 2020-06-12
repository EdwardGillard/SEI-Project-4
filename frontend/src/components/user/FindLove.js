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
  const genderFilter = users => {
    if (!users || !currentUser) return null
    if (currentUser.gender_preference === 'B') {
      return users
    } else {
      return users.filter(user => user.gender === currentUser.gender_preference)
    }
  }

  if (!users || !currentUser) return null
  const combined = currentUser.users_disliked.map(disliked => disliked.disliked_user).concat(currentUser.users_liked.map(liked => liked.liked_user.id))
  const filtered = genderFilter(users).filter(user => {
    if (user.id !== currentUser.id ) return !combined.includes(user.id)
  })

  //? Function to add user to favourites: ONSWIPERIGHT for mobile/tablet, ONCLICK for desktop.
  const addToFavs = async () => {
    try {
      const res = await ToggleFavs({ liked_user: filtered[index].id })
      console.log(res)
      if (index < filtered.length - 1) {
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
    await addToDisliked({ disliked_user: filtered[index].id })
    if (index < filtered.length - 1) {
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
  if (filtered.length < 1) return (
    <div className="main-page">
      <h1>No users available</h1>
    </div>
  )

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
              user={filtered[index]}
              noMore={noMore}
            />
          </Swipeable>
        </div>
      }
    </>
  )
}
export default FindLove