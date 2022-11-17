import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CardItem from "./components/CardItem";
import Grid2 from "@mui/material/Unstable_Grid2";
import { sponsor_info } from "./sponsors.js";
import Typography from "@mui/material/Typography";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import Sponsors from "./components/Sponsors";

function App() {
  return (
    <>
      <div>
        <Typography variant="h1" align="center">
          Sponsorships
        </Typography>

        {/* <Typography variant="h2" align="center">
          Foundational
        </Typography> */}
        <div>
          {" "}
          <Sponsors />
        </div>

        {/* <Typography variant="h2" align="center">
          Benefactor
        </Typography>
        <Benefactor /> */}

        {/* <Typography variant="h2" align="center">
          Evergreen
        </Typography>
        <Evergreen /> */}
      </div>
    </>
  );
}

export default App;
