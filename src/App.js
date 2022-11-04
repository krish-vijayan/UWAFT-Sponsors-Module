import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardItem from './components/CardItem';
import Grid2 from '@mui/material/Unstable_Grid2';
import { sponsor_info } from './sponsors.js';
import Typography from '@mui/material/Typography';

function App() {
	const foundational = [];
	const benefactor = [];
	const evergreen = [];

	for (let i = 0; i < sponsor_info.foundational.length - 1; i++) {
		foundational.push(
			<Grid2 xs={6} md={4}>
				<CardItem
					key={i}
					sponsor_link={sponsor_info.foundational[i].link}
					sponsor_logo={sponsor_info.foundational[i].logo}
					sponsor_company={sponsor_info.foundational[i].company}
				/>{' '}
			</Grid2>
		);
	}
	for (let i = 0; i < sponsor_info.benefactor.length - 1; i++) {
		benefactor.push(
			<Grid2 xs={6} md={4}>
				<CardItem
					key={i}
					sponsor_link={sponsor_info.benefactor[i].link}
					sponsor_logo={sponsor_info.benefactor[i].logo}
					sponsor_company={sponsor_info.benefactor[i].company}
				/>
			</Grid2>
		);
	}
	for (let i = 0; i < sponsor_info.evergreen.length - 1; i++) {
		evergreen.push(
			<Grid2 xs={6} md={4}>
				<CardItem
					key={i}
					sponsor_link={sponsor_info.evergreen[i].link}
					sponsor_logo={sponsor_info.evergreen[i].logo}
					sponsor_company={sponsor_info.evergreen[i].company}
				/>{' '}
			</Grid2>
		);
	}
	console.log(benefactor);

	return (
		<>
			<div className='background'>
				<Typography variant='h1' align='center'>
					Sponsorships
				</Typography>
				<Typography variant='h2' align='center'>
					Foundational
				</Typography>
				<Grid2 container spacing={3} justifyContent='center'>
					{foundational}
				</Grid2>

				<Typography variant='h2' align='center'>
					Benefactor
				</Typography>
				<Grid2 container spacing={3} justifyContent='center'>
					{benefactor}
				</Grid2>
				<Typography variant='h2' align='center'>
					Evergreen
				</Typography>
				<Grid2 container spacing={3} justifyContent='center'>
					{evergreen}
				</Grid2>
			</div>
		</>
	);
}

export default App;
