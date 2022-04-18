import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBullhorn } from '@fortawesome/free-solid-svg-icons';
import {
	faCalendarCheck,
	faComments,
} from '@fortawesome/free-regular-svg-icons';

function Nextboard() {
	return (
		<section className='nextboard'>
			<div className='inner'>
				<div className='wrap'>
					<article>
						<a href='#'>
							<FontAwesomeIcon icon={faBullhorn} />
						</a>
						<h1>Notice</h1>
						<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
					</article>
					<article>
						<a href='#'>
							<FontAwesomeIcon icon={faCalendarCheck} />
						</a>
						<h1>Reservation</h1>
						<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
					</article>
					<article>
						<a href='#'>
							<FontAwesomeIcon icon={faComments} />
						</a>
						<h1>Online Chat</h1>
						<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
					</article>
				</div>
			</div>
		</section>
	);
}

export default Nextboard;
