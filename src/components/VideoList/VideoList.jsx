import Video from 'components/Video/Video'
import './VideoList.scss'

const VideoList = ({ videos }) => {
  return (
    <div id='VideoList'>
      <div /> {/* <-- to solve snap scrolling in Chrome */}
      <div>
        {videos.map(video => (
          <Video key={video.id} video={video} />
        ))}
      </div>
    </div>
  )
}

export default VideoList
