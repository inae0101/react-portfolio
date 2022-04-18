import React from 'react';

function Visual() {
	return (
		<figure className='mainVisual'>
			<div className='wrap'>
				<video src='/videos/video_9.mp4' autoplay loop muted></video>
				<div className='inner'>
					<h1>HOME & INTERIOR DESIGN</h1>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
					<a href='#'>VIEW MORE</a>
				</div>
			</div>
		</figure>
	);
}

export default Visual;
