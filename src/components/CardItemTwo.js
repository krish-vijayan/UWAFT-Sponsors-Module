import Card from 'react-bootstrap/Card';
import CardMedia from '@mui/material/CardMedia';
import '../App.css';
import React from 'react';

function CardItemTwo(props) {
	return (
		<>
			<Card style={{ width: '18rem' }}>
				<div className='logo hover-zoom'>
					<CardMedia
						component='img'
						height='140'
						image={props.sponsor_logo}
						alt='Sponsorship Logo'
						className='hover-zoom'
					/>

					{/* <img className='w-100' src={props.sponsor_logo} /> */}
				</div>
				<Card.Body>
					<Card.Title>AAM</Card.Title>
					<Card.Text></Card.Text>
				</Card.Body>
			</Card>
		</>
	);
}

export default CardItemTwo;
