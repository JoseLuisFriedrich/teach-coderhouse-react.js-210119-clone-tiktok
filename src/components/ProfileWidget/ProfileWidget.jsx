import './ProfileWidget.scss'

const ProfileWidget = ({ profile }) => {
  return (
    <div id='ProfileWidget'>
      <img src={profile} alt='' />
      <i className={`fas fa-plus-circle`} />
    </div>
  )
}

export default ProfileWidget
