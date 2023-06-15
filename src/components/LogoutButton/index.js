// Write your JS code here
import Cookies from 'js-cookie'
import './index.css'

const Logout = props => {
  const onClickLogout = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }

  return (
    <button type="button" onClick={onClickLogout}>
      Logout
    </button>
  )
}

export default Logout
