import { IoMdArrowBack } from 'react-icons/io';
import { SlUser } from 'react-icons/sl'
import { useAuth } from '../../../hooks/useAuth';

import styles from './Header.module.scss';

import Hamburger from '../hamburger/Hamburger';
import { useLocation, useNavigate } from 'react-router-dom';

const Header = ({ backLink = "" }) => {
	const { isAuth } = useAuth();

	const { pathname } = useLocation()
	let navigate = useNavigate();

	return (
		<header className={styles.header}>
			{pathname !== '/' ? (
				<button onClick={() => {
					navigate(backLink
					)
				}}>
					<IoMdArrowBack />
				</button>) :
				(
					<button onClick={() => {
						navigate(isAuth ? '/profile' : '/auth'
						)
					}}>
						<SlUser />
					</button>)
			}

			<Hamburger />
		</header>
	);
};

export default Header;
