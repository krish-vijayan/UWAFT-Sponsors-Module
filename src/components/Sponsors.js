import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import { sponsor_info } from "../sponsors";
import "../App.css";

function Sponsors() {
  const alignLogos = {
    height: 'auto',
    maxHeight: '140px',
    width: 'auto',
    maxWidth: '140px',
    paddingLeft: '10px',  
    "&:hover": {
      transform: 'scale(1.1)',
      objectFit: 'cover',
      filter: 'brightness(calc(0.6 * (1 + var(--hl))))',
      transition: '0.7s',
    },
  }
  const hover = {
    transform: 'scale(1.1)',
    objectFit: 'cover',
    filter: 'brightness(calc(0.6 * (1 + var(--hl))))',
    transition: '0.7s',
  }

  return (
    <Grid
      sx={{ flexGrow: 10 }}
      container
      spacing={10}
      style={{
        display: "flex",
        justifyContent: "center",
        height: "0vh",
        paddingBottom: "10px",
      }}
    >
      <Grid item xs={10}>
        <Typography variant="h3" align="center">
          Headline
        </Typography>
        <Grid container justifyContent="center" spacing={1}>
          {sponsor_info.headline.map((item) => (
            <ImageListItem key={item.img} className="Image-Size">
              <a target="_blank" href={item.link} class="">
                <img
                  src={`${item.logo}?w=248&fit=crop&auto=format`}
                  srcSet={`${item.logo}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  alt={item.company + " Logo Not Found."}
                  loading="lazy"
                  // style={{...alignLogos, ...hover}}
                  className='Align-Logos hover'
                />
                {/* <ImageListItemBar position="below" title={item.company} /> */}
              </a>
            </ImageListItem>
          ))}
        </Grid>
      </Grid>
      <Grid item xs={10}>
        <Typography variant="h3" align="center">
          Visionary
        </Typography>
        <Grid container justifyContent="center" spacing={0}>
          {/* <ImageList variant="masonry" cols={5} gap={10}> */}{" "}
          {sponsor_info.visionary.map((item) => (
            <a target="_blank" href={item.link}>
              <ImageListItem key={item.img}>
                <img
                  src={`${item.logo}?w=248&fit=crop&auto=format`}
                  srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  alt={item.company + " Logo Not Found."}
                  loading="lazy"
                  className="Align-Logos hover"
                />

                {/* <ImageListItemBar position="below" title={item.company} /> */}
              </ImageListItem>
            </a>
          ))}
        </Grid>
      </Grid>
      <Grid item xs={10}>
        <Typography variant="h3" align="center">
          Leadership
        </Typography>
        <Grid container justifyContent="center" spacing={0}>
          {/* <ImageList variant="masonry" cols={5} gap={10}> */}{" "}
          {sponsor_info.leadership.map((item) => (
            <a target="_blank" href={item.link}>
              <ImageListItem key={item.img}>
                <img
                  src={`${item.logo}?w=248&fit=crop&auto=format`}
                  srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  alt={item.company + " Logo Not Found."}
                  loading="lazy"
                  className="Align-Logos hover"
                />

                {/* <ImageListItemBar position="below" title={item.company} /> */}
              </ImageListItem>
            </a>
          ))}
        </Grid>
      </Grid>
      <Grid item xs={10}>
        <Typography variant="h3" align="center">
          Sustaining
        </Typography>
        <Grid container justifyContent="center" spacing={0}>
          {/* <ImageList variant="masonry" cols={5} gap={10}> */}{" "}
          {sponsor_info.sustaining.map((item) => (
            <a target="_blank" href={item.link}>
              <ImageListItem key={item.img}>
                <img
                  src={`${item.logo}?w=248&fit=crop&auto=format`}
                  srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  alt={item.company + " Logo Not Found."}
                  loading="lazy"
                  className="Align-Logos hover"
                />

                {/* <ImageListItemBar position="below" title={item.company} /> */}
              </ImageListItem>
            </a>
          ))}
        </Grid>
      </Grid>
      <Grid item xs={10}>
        <Typography variant="h3" align="center">
          Supporter
        </Typography>
        <Grid container justifyContent="center" spacing={0}>
          {/* <ImageList variant="masonry" cols={5} gap={10}> */}{" "}
          {sponsor_info.supporter.map((item) => (
            <a target="_blank" href={item.link}>
              <ImageListItem key={item.img}>
                <img
                  src={`${item.logo}?w=248&fit=crop&auto=format`}
                  srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  alt={item.company + " Logo Not Found."}
                  loading="lazy"
                  className="Align-Logos hover"
                />

                {/* <ImageListItemBar position="below" title={item.company} /> */}
              </ImageListItem>
            </a>
          ))}
        </Grid>
      </Grid>
      <Grid item xs={10}>
        <Typography variant="h3" align="center">
          Automotive
        </Typography>
        <Grid container justifyContent="center" spacing={0}>
          {sponsor_info.automotive.map((item) => (
            <a target="_blank" href={item.link}>
              <ImageListItem key={item.img}>
                <img
                  src={`${item.logo}?w=248&fit=crop&auto=format`}
                  srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  alt={item.company + " Logo Not Found."}
                  loading="lazy"
                  className="Align-Logos hover"
                />

                {/* <ImageListItemBar position="below" title={item.company} /> */}
              </ImageListItem>
            </a>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Sponsors;
