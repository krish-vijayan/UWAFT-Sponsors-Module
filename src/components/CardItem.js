import Card from 'react-bootstrap/Card';
import CardMedia from '@mui/material/CardMedia';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function CardItem(props) {
	return (
		<Card sx={{ minWidth: 500, borderRadius: '20px' }}>
			<a href={props.sponsor_link} target='_blank'>
				<div className='logo hover-zoom'>
					<CardMedia
						component='img'
						height='140'
						image={props.sponsor_logo}
						alt='Sponsorship Logo'
						className='logo'
					/>
				</div>
			</a>
			<Card.Body>
				<Card.Title className='Sponsor-Company'>
					{props.sponsor_company}
				</Card.Title>
				<Card.Text>{props.sponsor_text}</Card.Text>
			</Card.Body>
		</Card>
	);
}

export default CardItem;
