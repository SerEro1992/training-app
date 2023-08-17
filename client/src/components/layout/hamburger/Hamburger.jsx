import { CgMenuRight } from 'react-icons/cg';
import { IoClose } from 'react-icons/io5';

import styles from './Hamburger.module.scss';

import Menu from './Menu';

import { useOnClickOutside } from '../../../hooks/useOnClickOutside';

const Hamburger = () => {
	const { ref, isShow, setIsShow } = useOnClickOutside(false);

	return (
		<div className={styles.wrapper} ref={ref}>
			<button onClick={() => setIsShow(!isShow)}>
				{isShow ? <IoClose /> : <CgMenuRight />}
			</button>
			<Menu isShow={isShow} />
		</div>
	);
};

export default Hamburger;
