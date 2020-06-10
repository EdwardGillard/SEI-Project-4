import React from 'react'
import { Redirect } from 'react-router-dom'
import useFetch from '../../utils/useFetch'
import { getAllUsers, addToFavourites, addToDisliked, getDashboard } from '../../lib/api'
import { Swipeable } from 'react-swipeable'
import ControlledCarousel from './ControlledCarousel'


function FindLove() {
  const { data: users, loading, error, refetchData } = useFetch(getAllUsers)
  const [noMore, setNoMore] = React.useState(false)
  const { data: currentUser } = useFetch(getDashboard)
  const [index, setIndex] = React.useState(0)

  const filterUsers = users => {
    if (!users || !currentUser) return null
    if (currentUser.gender_preference === 'B') return users
    return users.filter(user => user.gender === currentUser.gender_preference)
  }

  const userSwipedRight = async () => {
    try {
      console.log('swipped right')
      await addToFavourites({ liked_user: users[index].id })
      if (index < filterUsers(users).length - 1) {
        console.log('Okay')
        setIndex(index + 1)
      } else {
        setNoMore(true)
      }
      refetchData()
    } catch (err) {
      console.log(err)
    }
  }
  const userSwipedLeft = async () => {
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
  if (error) {
    return <Redirect to="/notfound" />
  }
  if (filterUsers(users) === null) return null
  return (
    <>
      {loading ?
        <div className="main-page">
          <h1>loading</h1>
        </div>
        :
        <Swipeable onSwipedRight={userSwipedRight} onSwipedLeft={userSwipedLeft} preventDefaultTouchmoveEvent={true}>
          <ControlledCarousel
            user={filterUsers(users)[index]}
            noMore={noMore}
          />
        </Swipeable>
      }
    </>
  )
}
export default FindLove