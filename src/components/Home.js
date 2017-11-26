import React from 'react';
import Parallax from 'react-springy-parallax';
import { Row, Col } from 'react-bootstrap';
import picture from '../../public/img/picture.jpg';
import Slider from 'react-slick';
import react from '../../public/img/react.png';
import pdj from '../../public/img/python-django-logo.jpg';
import rest from '../../public/img/dj-rest-framework.png';
import psql from '../../public/img/postgresql.jpg'

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
		<div className="container-fluid">
	        <Row style={{padding: '3% 0', backgroundColor: '#40649a', color: 'white', textAlign:'center'}}>
	        	<Col md={2} mdOffset={2}>
        			<img src={picture} style={{maxHeight: 200, borderRadius: 25}} className="img-responsive center-block"/>
        		</Col>
	        	<Col md={4}>
        		<p style={{fontSize:'3.5vw'}}>Carlos A. Ramírez</p>
        		<p className="subtitle">Software Engineer. Freelancer.</p>
        		</Col>
        	</Row>
        	<div>
	        	<Row>
		        	<Col md={12}>
	        			<h3 style={{textAlign: 'center'}}>Technology Stack</h3>
	        		</Col>
	        		<Col md={12}>
	        	
	        		</Col>
        		</Row>
        		<Slider {...settings}>
					        <div>									
					        	<div className="tech">
					        		<img src={react} style={{verticalAlign: 'center'}}className="img-responsive"/>
								</div>								   
					        </div>
					        <div>
					        	<div className="tech center-block">
					        		<img src={pdj} className="img-responsive"/>
								</div>	
							</div>
					        <div>
					        	<div className="tech center-block">
					        		<img src={rest} className="img-responsive"/>
								</div>	
							</div>
							<div>
					        	<div className="tech center-block">
					        		<img src={psql} className="img-responsive"/>
								</div>	
							</div>
				</Slider>
        	</div>
        </div>
	);
}

export default Home
