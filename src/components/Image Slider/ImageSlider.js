import React, { useState } from "react";
import { SliderData } from "./SliderData";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import "./ImageSlider.css";
export default function ImageSlider() {
	const [current, setCurrent] = useState(0);
	const length = SliderData.length;
	const nextSlide = () => {
		setCurrent(current === length - 1 ? 0 : current + 1);
	};
	const prevSlide = () => {
		setCurrent(current === 0 ? length - 1 : current - 1);
	};

	if (!Array.isArray(SliderData) || SliderData.length <= 0) {
		return null;
	}
	return (
		<section className="slider">
			<FaArrowCircleLeft className="left-arrow" onClick={prevSlide} />
			{SliderData.map((data, index) => {
				return (
					<div
						className={index === current ? "slide active" : "slide"}
						key={index}
					>
						{index === current && (
							<>
								<img
									src={data.image}
									alt="fashion"
									className="slider-image"
								/>
								<h2 className="slider-text">{data.text}</h2>
							</>
						)}
					</div>
				);
			})}
			<FaArrowCircleRight className="right-arrow" onClick={nextSlide} />
		</section>
	);
}
