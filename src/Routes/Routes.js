import React from "react";
import { Switch, Route } from "react-router-dom";

import { categoryinfo } from "../const";

import Navigation from "../Components/Navigation/Navigation";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import FAQ from "../pages/FAQ/FAQ";
import Animals from "../pages/API-Pages/Animals/Animals";
import Anime from "../pages/API-Pages/Anime/Anime";
import AntiMalware from "../pages/API-Pages/Anti-Malware/Anti-Malware";
import ArtDesign from "../pages/API-Pages/Art-Design/Art-Design";
import Books from "../pages/API-Pages/Books/Books";
import Business from "../pages/API-Pages/Business/Business";
import Calendar from "../pages/API-Pages/Calendar/Calendar";
import CloudStorageFileSharing from "../pages/API-Pages/Cloud-Storage-File-Sharing/Cloud-Storage-File-Sharing";
import ContinuousIntegration from "../pages/API-Pages/Continuous-Integration/Continuous-Integration";
import Cryptocurrency from "../pages/API-Pages/Cryptocurrency/Cryptocurrency";
import CurrencyExchange from "../pages/API-Pages/Currency-Exchange/Currency-Exchange";
import DataValidation from "../pages/API-Pages/Data-Validation/Data-Validation";
import Development from "../pages/API-Pages/Development/Development";
import Dictionaries from "../pages/API-Pages/Dictionaries/Dictionaries";
import DocumentsProductivity from "../pages/API-Pages/Documents-Productivity/Documents-Productivity";
import Environment from "../pages/API-Pages/Environment/Environment";
import Events from "../pages/API-Pages/Events/Events";
import Finance from "../pages/API-Pages/Finance/Finance";
import FoodDrink from "../pages/API-Pages/Food-Drink/Food-Drink";
import GamesComics from "../pages/API-Pages/Games-Comics/Games-Comics";
import Geocoding from "../pages/API-Pages/Geocoding/Geocoding";
import Government from "../pages/API-Pages/Government/Government";
import Health from "../pages/API-Pages/Health/Health";
import Jobs from "../pages/API-Pages/Jobs/Jobs";
import MachineLearning from "../pages/API-Pages/Machine-Learning/Machine-Learning";
import Music from "../pages/API-Pages/Music/Music";
import News from "../pages/API-Pages/News/News";
import OpenData from "../pages/API-Pages/Open-Data/Open-Data";
import OpenSourceProjects from "../pages/API-Pages/Open-Source-Projects/Open-Source-Projects";
import Patent from "../pages/API-Pages/Patent/Patent";
import Personality from "../pages/API-Pages/Personality/Personality";
import Photography from "../pages/API-Pages/Photography/Photography";
import ScienceMath from "../pages/API-Pages/Science-Math/Science-Math";
import Security from "../pages/API-Pages/Security/Security";
import Shopping from "../pages/API-Pages/Shopping/Shopping";
import Social from "../pages/API-Pages/Social/Social";
import SportsFitness from "../pages/API-Pages/Sports-Fitness/Sports-Fitness";
import TestData from "../pages/API-Pages/Test-Data/Test-Data";
import TestAnalysis from "../pages/API-Pages/Text-Analysis/Test-Analysis";
import Tracking from "../pages/API-Pages/Tracking/Tracking";
import Transportation from "../pages/API-Pages/Transportation/Transportation";
import URLShorteners from "../pages/API-Pages/URL-Shorteners/URL-Shorteners";
import Vehicle from "../pages/API-Pages/Vehicle/Vehicle";
import Video from "../pages/API-Pages/Video/Video";
import Weather from "../pages/API-Pages/Weather/Weather";

const Routes = () => {
  return (
    <>
      <Navigation />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/faq" component={FAQ} />
        <Route exact path="/animals" component={Animals} />
        <Route exact path="/anime" component={Anime} />
        <Route exact path="/anti-malware" component={AntiMalware} />
        <Route exact path="/art-and-design" component={ArtDesign} />
        <Route exact path="/books" component={Books} />
        <Route exact path="/business" component={Business} />
        <Route exact path="/calendar" component={Calendar} />
        <Route
          exact
          path="/cloud-storage-file-sharing"
          component={CloudStorageFileSharing}
        />
        <Route
          exact
          path="/continuous-intergration"
          component={ContinuousIntegration}
        />
        <Route exact path="/cryptocurrency" component={Cryptocurrency} />
        <Route exact path="/currency-exchange" component={CurrencyExchange} />
        <Route exact path="/data-validation" component={DataValidation} />
        <Route exact path="/development" component={Development} />
        <Route exact path="/dictionaries" component={Dictionaries} />
        <Route
          exact
          path="/documents-and-productivity"
          component={DocumentsProductivity}
        />
        <Route exact path="/environment" component={Environment} />
        <Route exact path="/events" component={Events} />
        <Route exact path="/finance" component={Finance} />
        <Route exact path="/food-and-drink" component={FoodDrink} />
        <Route exact path="/games-and-comics" component={GamesComics} />
        <Route exact path="/geocoding" component={Geocoding} />
        <Route exact path="/government" component={Government} />
        <Route exact path="/health" component={Health} />
        <Route exact path="/jobs" component={Jobs} />
        <Route exact path="/machine-learning" component={MachineLearning} />
        <Route exact path="/music" component={Music} />
        <Route exact path="/news" component={News} />
        <Route exact path="/open-data" component={OpenData} />
        <Route
          exact
          path="/open-source-projects"
          component={OpenSourceProjects}
        />
        <Route exact path="/patent" component={Patent} />
        <Route exact path="/personality" component={Personality} />
        <Route exact path="/photography" component={Photography} />
        <Route exact path="/science-and-math" component={ScienceMath} />
        <Route exact path="/security" component={Security} />
        <Route exact path="/shopping" component={Shopping} />
        <Route exact path="/social" component={Social} />
        <Route exact path="/sports-and-fitness" component={SportsFitness} />
        <Route exact path="/test-data" component={TestData} />
        <Route exact path="/text-analysis" component={TestAnalysis} />
        <Route exact path="/tracking" component={Tracking} />
        <Route exact path="/transportation" component={Transportation} />
        <Route exact path="/url-shorteners" component={URLShorteners} />
        <Route exact path="/vehicle" component={Vehicle} />
        <Route exact path="/video" component={Video} />
        <Route exact path="/weather" component={Weather} />
      </Switch>
    </>
  );
};

export default Routes;
