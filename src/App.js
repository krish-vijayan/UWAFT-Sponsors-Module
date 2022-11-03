import "./App.css";
import FoundationalCarousel from "./components/Carousel";
import BasicCard from "./components/Card";
import Grid2 from '@mui/material/Unstable_Grid2';
import "bootstrap/dist/css/bootstrap.min.css";
import { sponsor_info } from "./sponsors.js"
import Typography from '@mui/material/Typography';
import FoundationalSponsors from "./MainApp";

function App() {
  

  return (
    <>
      <div className="background">
      <Typography variant="h1" align="center">
        Sponsorships
      </Typography>
      <Typography variant='h2' align='center'>
        Foundational
        </Typography>
        <Grid2 container spacing={3} justifyContent="center">
          <F
          <Grid2 xs={6} md={4}>
            <BasicCard 
            sponsor_link={sponsor_info.foundational[0].link}            
            sponsor_logo={sponsor_info.foundational[0].logo}
            sponsor_company={sponsor_info.foundational[0].company}
            />
          </Grid2>
          <Grid2 xs={6} md={4}>
          <BasicCard 
            sponsor_link={sponsor_info.foundational[1].link}            
            sponsor_logo={sponsor_info.foundational[1].logo}
            sponsor_company={sponsor_info.foundational[1].company}/>
          </Grid2>
          <Grid2 xs={6} md={4}>
          <BasicCard
           sponsor_link={sponsor_info.foundational[2].link}            
           sponsor_logo={sponsor_info.foundational[2].logo}
           sponsor_company={sponsor_info.foundational[2].company}/>
          </Grid2>
          <Grid2 xs={6} md={4}>
            <BasicCard
             sponsor_link={sponsor_info.foundational[3].link}            
             sponsor_logo={sponsor_info.foundational[3].logo}
             sponsor_company={sponsor_info.foundational[3].company}/>
          </Grid2>
          <Grid2 xs={6} md={4}>
          <BasicCard
           sponsor_link={sponsor_info.foundational[4].link}            
           sponsor_logo={sponsor_info.foundational[4].logo}
           sponsor_company={sponsor_info.foundational[4].company}/>
          </Grid2>
          <Grid2 xs={6} md={4}>
          <BasicCard
           sponsor_link={sponsor_info.foundational[5].link}            
           sponsor_logo={sponsor_info.foundational[5].logo}
           sponsor_company={sponsor_info.foundational[5].company}/>
          </Grid2>
          <Grid2 xs={6} md={4}>
          <BasicCard
            sponsor_link={sponsor_info.foundational[6].link}            
            sponsor_logo={sponsor_info.foundational[6].logo}
            sponsor_company={sponsor_info.foundational[6].company}/>
          </Grid2>
        </Grid2>


        <Typography variant='h2' align='center'>
            Benefactor
          </Typography>
        <Grid2 container spacing={3} justifyContent="center">
       
          <Grid2 xs={6} md={4}>
          <BasicCard  
            sponsor_link={sponsor_info.benefactor[0].link}            
             sponsor_logo={sponsor_info.benefactor[0].logo}
             sponsor_company={sponsor_info.benefactor[0].company}/>
          </Grid2>
          <Grid2 xs={6} md={4}>
          <BasicCard  
          sponsor_link={sponsor_info.benefactor[1].link}            
          sponsor_logo={sponsor_info.benefactor[1].logo}
          sponsor_company={sponsor_info.benefactor[1].company}/>
          </Grid2>
          <Grid2 xs={6} md={4}>
          <BasicCard  
          sponsor_link={sponsor_info.benefactor[2].link}            
          sponsor_logo={sponsor_info.benefactor[2].logo}
          sponsor_company={sponsor_info.benefactor[2].company}/>
          </Grid2>
          <Grid2 xs={6} md={4}>
          <BasicCard  
          sponsor_link={sponsor_info.benefactor[3].link}            
          sponsor_logo={sponsor_info.benefactor[3].logo}
          sponsor_company={sponsor_info.benefactor[3].company}/>
          </Grid2>
          <Grid2 xs={6} md={4}>
          <BasicCard  
          sponsor_link={sponsor_info.benefactor[4].link}            
          sponsor_logo={sponsor_info.benefactor[4].logo}
          sponsor_company={sponsor_info.benefactor[4].company}/>
          </Grid2>
          <Grid2 xs={6} md={4}>
          <BasicCard  
          sponsor_link={sponsor_info.benefactor[5].link}            
          sponsor_logo={sponsor_info.benefactor[5].logo}
          sponsor_company={sponsor_info.benefactor[5].company}/>
          </Grid2>
          <Grid2 xs={6} md={4}>
          <BasicCard  
          sponsor_link={sponsor_info.benefactor[6].link}            
          sponsor_logo={sponsor_info.benefactor[6].logo}
          sponsor_company={sponsor_info.benefactor[6].company}/>
          </Grid2>
        </Grid2>

      </div>
    </>
  );
}

export default App;
