import { IoMdArrowBack } from 'react-icons/io';
import { SlUser } from 'react-icons/sl'
import { useLocation, useNavigate } from 'react-router-dom';

import { useAuth } from '../../../hooks/useAuth';
import styles from './Header.module.scss';
import Hamburger from '../hamburger/Hamburger';


const Header = ({ backLink = "/" }) => {

	const { pathname } = useLocation()
	const navigate = useNavigate();
	const { isAuth } = useAuth();
	

	return (
		<header className={styles.header}>
			{isAuth && (
				<>
					{pathname === '/' && isAuth ? (
						<button
							onClick={() => {
								navigate('/profile')
							}}
						>
							<SlUser />
						</button>
					) : (
						<button
							onClick={() => {
								navigate(isAuth ? backLink : '/auth')
							}}
						>
							<IoMdArrowBack />
						</button>
					)}
					<Hamburger />
				</>
			)}
		</header>
	);
};

export default Header;
