import React from 'react';
import './Testimonials.css';


import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials = () => {

	const data = [
		{
			id: 1,
			title: "Merit Scholarship",
			subtitle: "Vellore Institute of Technology",
			comment: "I was awarded the Merit Scholarship for the academic year 2022-2023 in recognition of my outstanding performance in academics.",
		},
		{
			id: 2,
			title: "Excellence in 10th boards",
			subtitle: "Sanghamitra School",
			comment: "I was awarded certificate of excellence for an excelent performance in 10th boards.",
		},
	];

	return (
		<section className="testimonials container section">

			<h2 className="section__title">Testimonials</h2>

			<Swiper className="testimonial__container grid"
				modules={[Pagination]}
				spaceBetween={30}
				slidesPerView={1}
				loop={true}
				grabCursor={true}
				pagination={{ clickable: true }}>
				{data.map(({ id, title, subtitle, comment }) => {
					return (
						<SwiperSlide className="testimonial__item" key={id}>
							<h3 className="testimonial__title">{title}</h3>
							<span className="subtitle">{subtitle}</span>
							<div className="comment">{comment}</div>
						</SwiperSlide>
					)
				})}
			</Swiper>
		</section>
	)
}

export default Testimonials