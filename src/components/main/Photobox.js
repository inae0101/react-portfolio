import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

function Photobox() {
	return (
		<section className='photobox'>
			<Swiper
				spaceBetween={20}
				slidesPerView={4}
				loop={true}
				pagination={{
					clickable: true,
				}}
				navigation={true}
				modules={[Pagination, Navigation]}>
				<SwiperSlide>
					<div className='pic'>
						<img src='img/kitchen_1.jpg'></img>
						<p>
							<a href='#'>KICHEN</a>
						</p>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className='pic'>
						<img src='img/bedroom_1.jpg'></img>
						<p>
							<a href='#'>BED ROOM</a>
						</p>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className='pic'>
						<img src='img/livingroom_1.jpg'></img>
						<p>
							<a href='#'>LIVING ROOM</a>
						</p>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className='pic'>
						<img src='img/bathroom_1.jpg'></img>
						<p>
							<a href='#'>BATH ROOM</a>
						</p>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className='pic'>
						<img src='img/entrance.jpg'></img>
						<p>
							<a href='#'>ENTRANCE</a>
						</p>
					</div>
				</SwiperSlide>
			</Swiper>
		</section>
	);
}

export default Photobox;
