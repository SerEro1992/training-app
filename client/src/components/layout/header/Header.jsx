import { IoMdArrowBack } from 'react-icons/io';

import { useAuth } from '../../../hooks/useAuth';

import styles from './Header.module.scss';

import Hamburger from '../hamburger/Hamburger';

const Header = ({ backLink }) => {
	const { isAuth } = useAuth();

	return (
		<header className={styles.header}>
			<button onClick={() => {}}>
				<IoMdArrowBack />
			</button>

			<Hamburger />
		</header>
	);
};

export default Header;
