import Icon from 'components/Icon/Icon'
import ProfileWidget from 'components/ProfileWidget/ProfileWidget'
import React, { useEffect, useRef, useState } from 'react'
import Ticker from 'react-ticker'
import './Video.scss'
import vinyl from './../../assets/images/vinyl.png'
import { useInView } from 'react-intersection-observer'

// comments: 433
// description: "So peaceful countryside, be quiet and find yourself back #travel #tiktoktravel"
// id: 1
// likes: 244
// profile: "https://raw.githubusercontent.com/JoseLuisFriedrich/coder-react.js-2021-01-19-clone-tiktok/master/public/images/joseluis.f.jpg"
// shared: 113
// song: "Guns N' Roses - November Rain"
// url: "https://raw.githubusercontent.com/JoseLuisFriedrich/coder-react.js-2021-01-19-clone-tiktok/master/public/videos/01.MP4"
// user: "@joseluis.f"

const Video = ({ video }) => {
  const [videoData, setVideoData] = useState(video)

  const { ref, inView } = useInView({ threshold: 1 })
  const videoRef = useRef()

  useEffect(() => {
    if (inView) {
      videoRef.current.play()
    } else {
      videoRef.current.pause()
      videoRef.current.currentTime = 0
    }

    // textRef.current.focus()
  }, [inView])

  const handleClick = iconName => {
    switch (iconName) {
      case 'heart':
        setVideoData({ ...videoData, likes: videoData.likes + 1 })
        break
      case 'comment-dots':
        setVideoData({ ...videoData, comments: videoData.comments + 1 })
        break
      case 'share':
        setVideoData({ ...videoData, shared: videoData.shared + 1 })
        break
      default:
        alert(iconName)
        break
    }
  }

  return (
    <div id='Video' ref={ref}>
      {/* Video */}
      {/* <input  ref={textRef} type="text" name="" id=""/> */}
      <video ref={videoRef} muted loop src={videoData.url} />

      {/* VideoFooter (Separar a otro Componente llamado VideoFooter) */}
      <div>
        <h3>{videoData.user}</h3>
        <p>{videoData.description}</p>
        <i className={`fas fa-music`} />
        <Ticker mode='smooth'>{() => <span>{videoData.song}</span>}</Ticker>
        <img src={vinyl} alt='' />
      </div>

      {/* VideoSideBar (Separar a otro Componente llamado VideoSideBar) */}
      <div>
        <ProfileWidget profile={videoData.profile} />
        <Icon iconName='heart' content={videoData.likes} callback={handleClick} />
        <Icon iconName='comment-dots' content={videoData.comments} callback={handleClick} />
        <Icon iconName='share' content={videoData.shared} callback={handleClick} />
      </div>
    </div>
  )
}

export default Video
