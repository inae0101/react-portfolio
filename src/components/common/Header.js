import { NavLink } from 'react-router-dom';
import React, { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Menu from './Menu';

// function Header(props)
function Header(props) {
	const [opened, setOpened] = useState(false);
	const active = { color: '#aaa' };
	const menu = useRef(null);
	useEffect(() => {
		opened ? menu.current.open() : menu.current.close();
	}, [opened]);
	return (
		<>
			<header className={props.type}>
				<div className='inner'>
					<h1>
						<NavLink exact to='/'>
							CLAUDEL DESIGN
						</NavLink>
					</h1>
					<ul id='gnb'>
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
					<FontAwesomeIcon
						icon={faBars}
						onClick={() => {
							setOpened(!opened);
						}}
					/>
				</div>
			</header>

			<Menu ref={menu} opened={opened} setOpened={setOpened} />
		</>
	);
}

export default Header;
