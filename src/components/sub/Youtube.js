import Layout from '../common/Layout';
import axios from 'axios';
import { useEffect, useState, useRef } from 'react';
import Popup from '../common/Popup';

function Youtube() {
	const pop = useRef(null);
	const key = 'AIzaSyB7nrhbjSC7YDpKTx1N4KobEeTguhGOYHA';
	const num = 5;
	const id = 'PLyQWRfaKIpVZb3lCBeAwY_2-lP9fzWM-4';
	const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${key}&maxResults=${num}&playlistId=${id}`;

	const [items, setItems] = useState([]);
	const [index, setIndex] = useState(0);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		axios.get(url).then((json) => {
			console.log(json.data.items);
			setItems(json.data.items);
			setLoading(true);
		});
	}, []);

	return (
		<>
			<Layout name={'YOUTUBE'}>
				<section className='project'>
					<div className='inner'>
						<div className='wrap'>
							<article>
								<div className='pic'>
									<img src='img/jean-philippe.jpg'></img>
								</div>
							</article>
							<article>
								<h2>Lorem, ipsum dolor.</h2>
								<h3>Veniam harum nulla</h3>

								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Veniam harum nulla magnam impedit illum delectus aut neque
									perspiciatis cumque beatae, dolor.consequatur, temporibus
									fuga? Eos nostrum delectus, eaque numquam provident quae velit
									minima maiores impedit, hic rem magni incidunt voluptatum
									error ipsum nam consequuntur perspiciatis adipisci. deserunt
									maxime reprehenderit assumenda itaque et? Atque ipsa laborum
									minima exercitationem nemo laboriosam error ab architecto
									perferendis cum labord voluptatum architecto perferendis cum?
								</p>
							</article>
						</div>
					</div>
				</section>
				{items.map((item, idx) => {
					const desc = item.snippet.description;
					const date = item.snippet.publishedAt;

					return (
						<section
							className='youtube'
							key={idx}
							onClick={() => {
								pop.current.open();
								setIndex(idx);
							}}>
							<div className='inner'>
								<article>
									<div className='date'>
										<span>{date.split('T')[0]}</span>
									</div>
									<div className='pic'>
										<img src={item.snippet.thumbnails.medium.url} />
									</div>
									<div className='con'>
										<h3>{item.snippet.title}</h3>
										<p>
											{desc.length > 150 ? desc.substr(0, 150) + '...' : desc}
										</p>
									</div>
								</article>
							</div>
						</section>
					);
				})}
				<p className='bottom'>
					<a href='#'>Start a project ?</a>
				</p>
			</Layout>

			<Popup ref={pop}>
				{loading && (
					<iframe
						src={
							'https://www.youtube.com/embed/' +
							items[index].snippet.resourceId.videoId
						}
						frameBorder='0'></iframe>
				)}
				<span onClick={() => pop.current.close()}>close</span>
			</Popup>
		</>
	);
}

export default Youtube;
