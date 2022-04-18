import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';

function Photobox() {
	return (
		<section className='photobox'>
			<div className='inner'>
				<div className='pagination'>
					<a href='#' className='prev'>
						<FontAwesomeIcon icon={faAngleLeft} />
					</a>
					<a href='#' className='next'>
						<FontAwesomeIcon icon={faAngleRight} />
					</a>
				</div>
				<div className='wrap'>
					<article>
						<div className='pic'>
							<img src='img/kitchen_1.jpg'></img>
							<p>
								<a href='#'>KICHEN</a>
							</p>
						</div>
					</article>
					<article>
						<div className='pic'>
							<img src='img/bedroom_1.jpg'></img>
							<p>
								<a href='#'>BED ROOM</a>
							</p>
						</div>
					</article>
					<article>
						<div className='pic'>
							<img src='img/livingroom_1.jpg'></img>
							<p>
								<a href='#'>LIVING ROOM</a>
							</p>
						</div>
					</article>
					<article>
						<div className='pic'>
							<img src='img/bathroom_1.jpg'></img>
							<p>
								<a href='#'>BATH ROOM</a>
							</p>
						</div>
					</article>
				</div>
			</div>
		</section>
	);
}

export default Photobox;
