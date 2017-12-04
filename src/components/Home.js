import React from 'react';
import { Row, Col } from 'react-bootstrap';
import profile_picture from '../../public/img/picture.jpg';
import Slider from 'react-slick';
import react from '../../public/img/react.png';
import pdj from '../../public/img/python-django-logo.jpg';
import rest from '../../public/img/dj-rest-framework.png';
import psql from '../../public/img/postgresql.jpg'
import styled from 'styled-components';
import { Center , Flex, FlexColumn, RowContent } from './common';

const Subtitle = styled.p`
	font-family: "Bookman";
	font-size: 1vw;
	line-height: 1.8em;
	text-transform: uppercase;
	letter-spacing: 3px;
	font-weight: 300;
	font-style: normal;
	color: #cfcfcf;
	@media screen and (max-width:990px) {
		display: none;
	  }
`;

const Name = styled.p`
	font-size: 3.5vw;
	padding-top 10px;
`;

const SliderImgItem = styled.img`
	padding: 10px 30px;
	flex-flow: row nowrap;
	align-items: center;
`;

const ProfilePicture = styled.img`
	max-height: 200px;
	border-radius: 25px;
`;

const TopSection = Flex.extend`
	align-items: center;
	justify-content: space-around;
	padding: 3% 0;
	background-color: #40649a;
	color: white;
	@media screen and (max-width:990px) {
		flex-direction: column;
	  }
`;

const TextSection = FlexColumn.extend`
	justify-content: center;
`;

const Home = (props) => {
	let parallax;
	let settings = {
		autoplay: true,
		centerMode: true,
      	dots: true,
      	speed: 1000,
      	slidesToShow: 3,
      	slidesToScroll: 1,
      	responsive: [ { breakpoint: 991, settings: { slidesToShow: 2, autoplay: true, speed: 1000, slidesToScroll: 1, swipeToSlide: true } }, { breakpoint: 1024, settings: { slidesToScroll: 1, slidesToShow: 4, autoplay: true, speed: 1000, swipeToSlide: true } }, { breakpoint: 480, settings: { speed: 1000, slidesToScroll: 1, slidesToShow:1, autoplay: true, swipeToSlide: true} } ]
    };
	return (
		<FlexColumn>
	        <TopSection>
				<div></div>
        		<ProfilePicture src={profile_picture} />
				<TextSection>
					<Name>Carlos A. Ramírez</Name>
					<Subtitle>
						Software Engineer. Freelancer.
					</Subtitle>
				</TextSection>
				<div></div>
				<div></div>
        	</TopSection>
        	<RowContent>
	        	<Center>
	        		<h3>Technology Stack used for portfolio</h3>
        		</Center>
        		<Slider {...settings} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>									
					<SliderImgItem src={react} />
					<SliderImgItem src={pdj} />	
					<SliderImgItem src={rest} />	
					<SliderImgItem src={psql} />
				</Slider>
        	</RowContent>
        </FlexColumn>
	);
}

export default Home
