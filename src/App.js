import React from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import InputSearch from "./components/InputSearch";
import WorldWideCases from "./components/WorldWideCases";
import UserCountryCases from "./components/UserCountryCases";

const App = () => {
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <>
      <Grid container direction="column" justify="center" alignItems="center">
        <Grid
          item
          style={{ marginBottom: matchesMD ? "2em" : "5em", marginTop: "2em" }}
        >
          <Card>
            <CardContent
              style={{ backgroundColor: " rgba(255, 0, 0, 0.9)", opacity: 1 }}
            >
              <Typography
                style={{ color: "#eee" }}
                variant={matchesMD ? "h4" : "h2"}
              >
                Corona Virus Cases
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid
          item
          style={{
            marginBottom: matchesMD ? "2em" : "5em",
            marginTop: "2em"
          }}
        >
          <InputSearch />
        </Grid>
      </Grid>
      <Grid
        container
        direction={matchesMD ? "column" : "row"}
        justify="center"
        alignItems="center"
        spacing={3}
      >
        <WorldWideCases />
        <UserCountryCases />
      </Grid>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        style={{ marginTop: "3em", textAlign: "center", marginBottom: "2em" }}
      >
        <p>{process.env.REACT_APP_BASE_URL}</p>
        <Card>
          <CardContent>
            <Typography variant="h6" style={{ color: "red" }}>
              Made in{" "}
              <span role="img" aria-label="emoji">
                ❤{" "}
              </span>
              with <br />
              <a
                style={{ textDecoration: "none", color: "#61DAFB" }}
                href="https://reactjs.org/"
              >
                React
              </a>{" "}
              &&{" "}
              <a
                style={{ textDecoration: "none", color: "#1976d2" }}
                href="https://material-ui.com/"
              >
                Material UI
              </a>
            </Typography>
            <Typography variant="h6">
              ---Aditya{" "}
              <span role="img" aria-label="emoji">
                👋😊
              </span>
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </>
  );
};

export default App;
