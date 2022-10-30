import "./App.css";
import FoundationalCarousel from "./components/Carousel";
import BasicCard from "./components/Card";
import Grid2 from '@mui/material/Unstable_Grid2';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <div className="background">
        <Grid2 container spacing={3}>
          <Grid2 xs={6} md={4}>
            <BasicCard/>
          </Grid2>
          <Grid2 xs={6} md={4}>
          <BasicCard/>
          </Grid2>
          <Grid2 xs={6} md={4}>
          <BasicCard/>
          </Grid2>
          <Grid2 xs={6} md={4}>
            <BasicCard/>
          </Grid2>
          <Grid2 xs={6} md={4}>
          <BasicCard/>
          </Grid2>
          <Grid2 xs={6} md={4}>
          <BasicCard/>
          </Grid2>
          <Grid2 xs={6} md={4}>
            <BasicCard/>
          </Grid2>
          <Grid2 xs={6} md={4}>
          <BasicCard/>
          </Grid2>
          <Grid2 xs={6} md={4}>
          <BasicCard/>
          </Grid2>
        </Grid2>
      </div>
    </>
  );
}

export default App;
