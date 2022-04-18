import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';

function Txtbox() {
	return (
		<section className='txtbox'>
			<div className='inner'>
				<div className='wrap'>
					<div className='txt1'>
						<h1>LOOK BOOK</h1>
						<span>
							<FontAwesomeIcon icon={faQuoteLeft} />
						</span>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
							aliquam veritatis fuga quasi facilis placeat magni esse nemo
							officiis soluta.
						</p>
						<span>
							<FontAwesomeIcon icon={faQuoteRight} />
						</span>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Txtbox;
