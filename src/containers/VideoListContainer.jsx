import { useEffect, useState } from 'react'

const { default: VideoList } = require('components/VideoList/VideoList')

const VideoListContainer = () => {
  //Traerme los datos
  //fetch
  //loading

  const [videos, setVideos] = useState([])

  useEffect(() => {
    const url = 'https://my-json-server.typicode.com/JoseLuisFriedrich/coder-react.js-2021-01-19-clone-tiktok/feed'

    fetch(url)
      .then(response => {
        return response.json()
      })
      .then(response => {
        setVideos(response)
      })
  }, [])

  return (
    <div id='VideoListContainer'>
      <VideoList videos={videos} />
    </div>
  )
}

export default VideoListContainer

//ItemDetailContainer
//state ->  const [producto, setProducto] = useState({})
//ItemDetail ->
//getProductById(id)
