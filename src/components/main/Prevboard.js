import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';

function Prevboard() {
	return (
		<section className='prevboard'>
			<div class='inner'>
				<div class='wrap'>
					<div class='txt1'>
						<h1>
							HOW TO DECORATE YOUR HOME <FontAwesomeIcon icon={faHouse} />
						</h1>
						<p>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius
							debitis accusamus qui esse, unde doloremque omnis deserunt. Animi,
							dolorem dolorum.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Prevboard;
