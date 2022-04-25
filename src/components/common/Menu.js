import { useState, forwardRef, useImperativeHandle } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NavLink } from 'react-router-dom';

const Menu = forwardRef((props, ref) => {
	const [open, setOpen] = useState(false);
	const active = { color: 'aqua' };

	useImperativeHandle(ref, () => {
		return {
			open: () => setOpen(true),
			close: () => setOpen(false),
		};
	});

	return (
		<AnimatePresence>
			{open && (
				<>
					<motion.nav
						initial={{
							x: -280,
							opacity: 0,
						}}
						animate={{
							x: 0,
							opacity: 1,
							transition: { duration: 0.5, type: 'spring', bounce: 0 },
						}}
						exit={{
							x: -280,
							opacity: 0,
							transition: { duration: 0.5, type: 'spring', bounce: 0 },
						}}>
						<h1>
							<NavLink exact to='/'>
								CLAUDEL DESIGN
							</NavLink>
						</h1>
						<ul
							id='gnb'
							onClick={() => {
								setOpen(false);
								props.setOpened(!props.opened);
							}}>
							<li>
								<NavLink to='/about' activeStyle={active}>
									ABOUT
								</NavLink>
							</li>
							<li>
								<NavLink to='/community' activeStyle={active}>
									COMMUNITY
								</NavLink>
							</li>
							<li>
								<NavLink to='/gallery' activeStyle={active}>
									GALLERY
								</NavLink>
							</li>
							<li>
								<NavLink to='/youtube' activeStyle={active}>
									YOUTUBE
								</NavLink>
							</li>
							<li>
								<NavLink to='/location' activeStyle={active}>
									LOCATION
								</NavLink>
							</li>
							<li>
								<NavLink to='/join' activeStyle={active}>
									JOIN
								</NavLink>
							</li>
						</ul>
					</motion.nav>
				</>
			)}
		</AnimatePresence>
	);
});

export default Menu;
