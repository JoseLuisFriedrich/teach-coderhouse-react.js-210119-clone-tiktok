import './Icon.scss'

const Icon = ({ iconName, content, callback }) => {
  //onAdd(counter´1)
  return (
    <div id='Icon'>
      <i className={`fas fa-${iconName}`} onClick={() => callback(iconName)} />
      <p>{content}</p>
    </div>
  )
}

export default Icon
