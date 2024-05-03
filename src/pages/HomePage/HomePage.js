import React from "react";
import { Grid } from "@mui/material";
import Terminal from "../../components/Terminal/Terminal";
import Editor from "../../components/Editor/Editor";

const HomePage = ({darkMode}) => {
  return (
    <div className="mainPage">
      <Grid container sx={{ justifyContent: "center", marginTop: "10vh", }}>
        <Grid item sm={7} xs={9} sx={{ height: '90vh', overflowY: "scroll", scrollbarWidth: "none" }}>
          <Terminal darkMode={darkMode} />
          <Editor darkMode={darkMode}/>
        </Grid>
      </Grid>
    </div>
  );
};



export default HomePage;
