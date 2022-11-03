import { sponsor_info } from "../sponsors.js"
import BasicCard from "./Card";
import Grid2 from '@mui/material/Unstable_Grid2';


export let mappedFoundational = sponsor_info.foundational.map((i,sponsor) => {
    return (
        <Grid2 xs={6} md={4}>
        <BasicCard 
        sponsor_link={sponsor_info.foundational[i].link}            
        sponsor_logo={sponsor_info.foundational[i].logo}
        sponsor_company={sponsor_info.foundational[i].company}/>
      </Grid2>
    );
});

