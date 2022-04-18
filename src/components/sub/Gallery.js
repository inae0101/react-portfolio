import Layout from '../common/Layout.js';
import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import Masonry from 'react-masonry-component';

function Gallery() {
	const path = process.env.PUBLIC_URL;
	const getURL = () => {
		const key = '1765faf0803ccd7b809bb3f4eb7b63dd';
		const method1 = 'flickr.interestingness.getList';
		const method2 = 'flickr.photos.search';
		const num = 500;
		const url1 = `https://www.flickr.com/services/rest/?method=${method1}&per_page=${num}&api_key=${key}&format=json&nojsoncallback=1`;
		const url2 = `https://www.flickr.com/services/rest/?method=${method2}&per_page=${num}&api_key=${key}&format=json&nojsoncallback=1&tags=interiordesign`;
		return [url1, url2];
	};
	const [url1, url2] = getURL();

	const masonryOptions = {
		transitionDuration: '0.5s',
	};

	const frame = useRef(null);
	const [items, setItems] = useState([]);
	//로딩바 처리할 스테이트 추가
	const [loading, setLoading] = useState(true);

	const getFlickr = async (name) => {
		await axios.get(name).then((json) => {
			setItems(json.data.photos.photo);
		});
		//flickr데이터 호출이 완료된 순간 masonry가 정렬하는 시간을 벌어주기 위해서
		//1초 뒤에 로딩바 사라지고 레이아웃이 위로 올라오는 모션 처리
		setTimeout(() => {
			frame.current.classList.add('on');
			setLoading(false);
		}, 1000);
	};

	useEffect(() => {
		getFlickr(url1);
	}, []);

	return (
		<Layout name={'GALLERY'}>
			<section className='inner'>
				<button
					onClick={() => {
						setLoading(true);
						frame.current.classList.remove('on');
						//getFlickr가 호출되서 컴포넌트가 로딩완료되면 내부적으로 다시 로딩바 사라짐
						getFlickr(url1);
					}}>
					All
				</button>

				<button
					onClick={() => {
						setLoading(true);
						frame.current.classList.remove('on');
						getFlickr(url2);
					}}>
					Interior design
				</button>
				{/* loading state값이 true일때 로딩바 보이게 처리하고 */}
				{loading ? (
					<img className='loading' src={path + '/img/loading.gif'} />
				) : null}

				{/* 각 버튼 클릭시 setLoading(true)로 로딩바 보이게 처리 */}
				<div className='frame' ref={frame}>
					<Masonry elementType={'div'} options={masonryOptions}>
						{items.map((item, idx) => {
							return (
								<article key={idx}>
									<div className='inner'>
										<div className='pic'>
											<img
												src={`https://live.staticflickr.com/${item.server}/${item.id}_${item.secret}_m.jpg`}
											/>
										</div>
										<h2>{item.title}</h2>
									</div>
								</article>
							);
						})}
					</Masonry>
				</div>
			</section>
		</Layout>
	);
}

export default Gallery;
