import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faLocation, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

import React, { useRef, useEffect } from 'react';
import Layout from '../common/Layout';

function Location() {
	const path = process.env.PUBLIC_URL;
	//가상돔을 참조할 container객체를 useRef로 생성
	const container = useRef(null);
	//window전역객체 안에서 kakao라는 객체를 찾은 다음에 kakao라는 변수이름으로 비구조화 할당
	const { kakao } = window;

	useEffect(() => {
		const options = {
			center: new kakao.maps.LatLng(37.52505963561427, 126.92595809695256),
			level: 3,
		};
		const mapInfo = new kakao.maps.Map(container.current, options);

		const imageSrc = `${path}/img/marker.png`, // 마커이미지의 주소입니다
			imageSize = new kakao.maps.Size(44, 49), // 마커이미지의 크기입니다
			imageOption = { offset: new kakao.maps.Point(22, 49) };

		//마커 위치 인스턴스 생성
		const markerImage = new kakao.maps.MarkerImage(
			imageSrc,
			imageSize,
			imageOption
		);
		const markerPosition = new kakao.maps.LatLng(
			37.52505963561427,
			126.92595809695256
		);

		// 마커를 생성합니다
		const marker = new kakao.maps.Marker({
			position: markerPosition,
			image: markerImage,
		});

		// 마커가 지도 위에 표시되도록 설정합니다
		marker.setMap(mapInfo);
	}, []);

	return (
		<Layout name={'LOCATION'}>
			<section id='contact'>
				<div className='inner'>
					<h2>Contact Us</h2>
					<p>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br />
						Nam quis quaerat hic atque repellat.
					</p>
					<div className='wrap'>
						<article>
							<div className='pic'>
								<a href='#'>
									<FontAwesomeIcon icon={faLocationDot} />
								</a>
								<h2>Adress</h2>
								<p>
									56th Street, SE Washington,
									<br /> DC 20103
								</p>
							</div>
						</article>
						<article>
							<div className='pic'>
								<a href='#'>
									<FontAwesomeIcon icon={faPhone} />
								</a>
								<h2>Call Us</h2>
								<p>
									703.908.8003
									<br />
									703.907.8001
								</p>
							</div>
						</article>
						<article>
							<div className='pic'>
								<a href='#'>
									<FontAwesomeIcon icon={faEnvelope} />
								</a>
								<h2>Email Us</h2>
								<p>abcd123@claudel.com</p>
							</div>
						</article>
					</div>
					<div className='icon1'>
						<ul>
							<li>
								<a href='#'>
									<FontAwesomeIcon icon={faFacebookF} />
								</a>
							</li>
							<li>
								<a href='#'>
									<FontAwesomeIcon icon={faInstagram} />
								</a>
							</li>
							<li>
								<a href='#'>
									<FontAwesomeIcon icon={faTwitter} />
								</a>
							</li>
							<li>
								<a href='#'>
									<FontAwesomeIcon icon={faYoutube} />
								</a>
							</li>
						</ul>
					</div>
				</div>
			</section>

			<div id='map' ref={container}></div>
		</Layout>
	);
}

export default Location;
