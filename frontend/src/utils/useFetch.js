import React from 'react'

const initialState = {
  data: null,
  error: null,
  loading: true
}

//! CUSTOM HOOK TO RETRIEVE DATA
function useFetch(request, params = null) {
  const [state, setState] = React.useState(initialState)

  React.useEffect(() => {
    const getData = async () => {
      try {
        //! SEND DATA TO AXIOS REQ AND DESTRUCTURE RESPONSE
        const { data } = await request(params)
        setState({ error: null, loading: false, data: data })
      } catch (err) {
        setState({ error: true, loading: false, data: null })
      }
    }
    //! CALL THE FUNCTION
    getData()
    //! LISTEN FOR CHANGES IN REQUEST AND PARAMS
  }, [request, params])

  //! RETURN THE STATE BACK TO CALL
  return state
}

export default useFetch