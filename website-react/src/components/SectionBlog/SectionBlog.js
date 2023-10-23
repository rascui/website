import React from 'react';
import DataSectionBlog from '../../assets/data/data-section-blog.json';
import { Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

function SectionBlog() {
	return (
		<section className="blog" id="blog">
			<div className="main-text">
				<h2 className="heading">Our Events & Seminars</h2>
				<span>Latest News & Post</span>
			</div>

			<Swiper
				className="blog-box swiper"
				modules={[Pagination, Autoplay]}
				slidesPerView={1}
				spaceBetween={30}
				pagination={{ clickable: true, el: '.swiper-pagination' }}
				autoplay={{
					delay: 3000,
					disableOnInteraction: false
				}}
				breakpoints={{
					576: {
						slidesPerView: 2,
						spaceBetween: 10
					},
					1200: {
						slidesPerView: 3,
						spaceBetween: 20
					}
				}}
			>
				<div className="cards swiper-wrapper">
					{DataSectionBlog.posts.map((item, index) => (
						<SwiperSlide className="card swiper-slide" key={index}>
							<div className="card-top">
								<img src={require(`../../assets/images/${item.image}`)} alt={item.title} />
							</div>
							<div className="card-info">
								<h2>{item.title}</h2>
								<span className="date">{item.date}</span>
								<p className="excerpt"></p>
							</div>
						</SwiperSlide>
					))}
				</div>
			</Swiper>

			<div className="swiper-pagination"></div>

			<div className="showcase">
				<img src={require(`../../assets/images/shapes/ring.png`)} className="ring" />
				<img src={require(`../../assets/images/shapes/second-circle.png`)} className="second-circle" />
				<img src={require(`../../assets/images/shapes/circle.png`)} className="circle" />
				<img src={require(`../../assets/images/shapes/half-ring.png`)} className="half-ring" />
			</div>
		</section>
	);
}

export default SectionBlog;
