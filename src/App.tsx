import React from "react";
import "./styles/app.css";
import "./styles/styles.css";
import ProfileBox from "./components/ProfileBox";
import StatsBox from "./components/StatsBox";
import YearlyStats from "./components/YearlyStats";
import TopTracks from "./components/TopTracks";
import TopArtists from "./components/TopArtists";

function App() {
  return (
    <div className="root">
      <div className="web-title">
        <div>Spotify Extended Data Analysis</div>
      </div>

      <ProfileBox></ProfileBox>

      <StatsBox pos={"A"} stat="X"></StatsBox>
      <StatsBox pos={"B"} stat="X"></StatsBox>
      <StatsBox pos={"C"} stat="X"></StatsBox>

      <YearlyStats></YearlyStats>
      <TopTracks></TopTracks>
      <TopArtists></TopArtists>

      <StatsBox pos={"D"} stat="X"></StatsBox>
      <StatsBox pos={"E"} stat="X"></StatsBox>
    </div>
  );
}

export default App;
