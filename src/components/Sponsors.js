import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import { sponsor_info } from "../sponsors";
import "../App.css";

function Sponsors() {
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
        <Typography variant="h2" align="center">
          Foundational
        </Typography>
        <Grid container justifyContent="center" spacing={1}>
          {sponsor_info.foundational.map((item) => (
            <ImageListItem key={item.img} className="Image-Size">
              <a target="_blank" href={item.link} class="">
                <img
                  src={`${item.logo}?w=248&fit=crop&auto=format`}
                  srcSet={`${item.logo}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  alt={item.company + " Logo Not Found."}
                  loading="lazy"
                  className="Align-Logos"
                />
                {/* <ImageListItemBar position="below" title={item.company} /> */}
              </a>
            </ImageListItem>
          ))}
        </Grid>
      </Grid>
      <Grid item xs={10}>
        <Typography variant="h2" align="center">
          Benefactor
        </Typography>
        <Grid container justifyContent="center" spacing={0}>
          {/* <ImageList variant="masonry" cols={5} gap={10}> */}{" "}
          {sponsor_info.benefactor.map((item) => (
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
        <Typography variant="h2" align="center">
          Evergreen
        </Typography>
        <Grid container justifyContent="center" spacing={0}>
          {sponsor_info.evergreen.map((item) => (
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
