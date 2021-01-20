import Icon from 'components/Icon/Icon'
import './Footer.scss'
import plusSign from './../../assets/images/plus-sign.png'

//ItemDetailContainer
const Footer = () => {
  const handleClick = iconName => {
    alert(iconName)
  }

  return (
    <div id='Footer'>
      {/* ItemCounter min={9} stock={10} onAdd={handleCounter} */}
      <Icon iconName='home' content='Home' callback={handleClick} />
      <Icon iconName='search' content='Discover' callback={handleClick} />
      <img src={plusSign} alt='new tiktok' />
      <Icon iconName='inbox' content='Inbox' callback={handleClick} />
      <Icon iconName='user' content='Me' callback={handleClick} />
    </div>
  )
}

export default Footer
