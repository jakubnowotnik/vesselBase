import { useState, useEffect } from 'react';



const useFetch = (url, type, control) => {
  const [data, setData] = useState([])
  const [isLoading, setisLoading] = useState(true)
  const [error, setError] = useState(null)


  useEffect(() => {
    const abortController = new AbortController();


    fetch(url, { signal: abortController.signal })
      .then(res => {
        if (!res.ok) {
          throw Error('connection error')
        }
        return res.json()
      })
      .then((data) => {
        var res = type ? Object.keys(data).map((key) => new type(data[key])) : data;
        setData(res)
        setisLoading(false)
        setError(null)
      })
      .catch(err => {
        if (err.name === 'AbortError') {
        }
        else {
          setisLoading(false)
          setError(err.message)
        }

      })
    return () => abortController.abort()
  }, [url, type, control])

  return { data, isLoading, error }
}

export default useFetch