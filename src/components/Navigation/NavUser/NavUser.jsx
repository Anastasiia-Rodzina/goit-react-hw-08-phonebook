import {useSelector, useDispatch } from 'react-redux';
import css from './nav-user.module.css';
import { selectUser } from '../../../redux/auth/auth-selectors';
import { logout } from '../../../redux/auth/auth-operations';


const NavUser = () => {

    const user = useSelector(selectUser);
  
const dispatch = useDispatch();

const onLogout = () => dispatch(logout());

const email = user && user.email;
    return (
        <div className={css.user}>
  {email}
  <button onClick={onLogout} className={css.btn}>Logout</button>
        </div>
    )
}
export default NavUser;