import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

// function Header(props)
function Header() {
	const active = { color: '#aaa' };
	return (
		// <header className={props.type}>
		<header>
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
				<FontAwesomeIcon icon={faBars} />
			</div>
		</header>
	);
}

export default Header;
