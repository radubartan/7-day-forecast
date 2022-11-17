import './App.css';
import { useRef, useState } from 'react';
import Search from './components/search/search.js';
import Forecast from "./components/forecast/forecast.js";
import CurrentWeather from './components/current-weather/current-weather';
import { WEATHER_API_URL, WEATHER_API_KEY } from './api';

function App() {
   // scroll to element code for menu links
   const refSelection = useRef(null);
   const handleSelectionClick = () => { refSelection.current?.scrollIntoView({ behavior: 'smooth' }); }
   const refRequirements = useRef(null);
   const handleRequirementsClick = () => { refRequirements.current?.scrollIntoView({ behavior: 'smooth' }); }
   // const refBugs = useRef(null);
   // const handleBugsClick = () => { refBugs.current?.scrollIntoView({ behavior: 'smooth' }); }
   const refAboutMe = useRef(null);
   const handleAboutMeClick = () => { refAboutMe.current?.scrollIntoView({ behavior: 'smooth' }); }

   const [currentWeather, setCurrentWeather] = useState(null);
   const [forecast, setForecast] = useState(null);

   const handleOnSearchChange = (searchData) => {
      const [lat, lon] = searchData.value.split(" ");
      const currentWeatherFetch = fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=imperial`);
      const forecastFetch = fetch(`${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=imperial`);
      Promise.all([currentWeatherFetch, forecastFetch])
         .then(async (response) => {
            const weatherResponse = await response[0].json();
            const forecastResponse = await response[1].json();
            setCurrentWeather({ city: searchData.label, ...weatherResponse });
            setForecast({ city: searchData.label, ...forecastResponse });
         })
         .catch((err) => console.log(err));
   }

   console.log(forecast);

   return (
      <div className="container">
         {/* Navbar */}
         <div className="topBar d-flex justify-content-between row">
            <div className="logo_Wunder">
               <img src="https://res.cloudinary.com/analogyofpearl/image/upload/v1668205504/Shared/technical%20assessments/Insight%202%20Profit%20-%207%20day%20forecast/logo_v2.svg" alt="logo" />
            </div>
            <div>
               <ul className="topMenu" style={{ marginBottom: "0px" }}>
                  <li className="icons_topMenu">
                     <img src="https://res.cloudinary.com/analogyofpearl/image/upload/v1660250161/Shared/technical%20assessments/Meta%20-%20Landing%20Page/icon_gear.svg" alt="this is" title="this is" />
                  </li>
                  <li className="icons_topMenu">
                     <img src="https://res.cloudinary.com/analogyofpearl/image/upload/v1660250496/Shared/technical%20assessments/Meta%20-%20Landing%20Page/icon_search.svg" alt="just" title="just" />
                  </li>
                  <li className="icons_topMenu">
                     <img src="https://res.cloudinary.com/analogyofpearl/image/upload/v1660250907/Shared/technical%20assessments/Meta%20-%20Landing%20Page/_Radu_mug_shot_round.jpg" alt="eye candy" title="eye candy" />
                  </li>
               </ul>
            </div>
         </div>

         {/* Menu links */}
         <div className="row">
            <div className="col-5"></div>
            <div className="col-6">
               <div id="header">
                  <li onClick={handleSelectionClick}>
                     <div className="header_caps">WEATHER & GEO API</div>
                     <div className="header_subtitle">JavaScript <span className="color-lightGray">/</span> HTML <span className="color-lightGray">/</span> CSS</div>
                  </li>
                  <li onClick={handleRequirementsClick}> {/* onClick="scrollto('requirements');" */}
                     <div className="header_caps">REQUIREMENTS</div>
                     <div className="header_subtitle">Completion Status</div>
                  </li>
                  {/* <li onClick={handleBugsClick}>
                     <div className="header_caps">CODE</div>
                     <div className="header_subtitle">How it works</div>
                  </li> */}
                  <li onClick={handleAboutMeClick}>
                     <div className="header_caps">ABOUT ME</div>
                     <div className="header_subtitle">Portfolio <span className="color-lightGray">&amp;</span> Experience</div>
                  </li>
               </div>
            </div>
            <div className="col-1"></div>
         </div>

         {/* WEATHER FORECAST */}
         <div id="selection_table" ref={refSelection}>
            <div className="row">
               <div className="col-3">
                  <div className="line_smallLeft"></div>
                  <div className="left_headingPink">/ Weather & GEO API</div>
                  <div className="left_subHeading">JavaScript <span className="color-lightGray">/</span> HTML <span className="color-lightGray">/</span> CSS</div>
               </div>
               <div className="col-9">
                  <div className="line_bigRightLight"></div>
                  <Search onSearchChange={handleOnSearchChange} />
                  <div className="row">
                     <div className="col-5">
                        {currentWeather && <CurrentWeather data={currentWeather} />}
                     </div>
                     <div className="col-7 forecastContainer">
                        {forecast && <Forecast data={forecast} />}
                     </div>
                  </div>
               </div>
            </div>
         </div>

         {/* REQUIREMENTS */}
         <div id="requirements" ref={refRequirements}>
            <div className="row">
               <div className="col-3">
                  <div className="spacer-31px"></div>
                  <div className="left_headingPink">/ Requirements</div>
                  <div className="left_subHeading">Completion status</div>
               </div>
               <div className="col-9">
                  <div className="line_bigRightLight"></div>
                  <div className="bodyText hangingIndent mb10px">
                     <img src="https://res.cloudinary.com/analogyofpearl/image/upload/v1662401738/Shared/technical%20assessments/CrowdStrike%20-%20Selection%20Downloader/icon-available-teal.svg" className="icon_available_missing" alt="" />
                     Using functional <span className="boxGreyDarker">React</span>, <i>TypeScript</i> and optionally a <i>.NET</i> backend, connect to a public weather and geocoding REST API,
                     specifically the <a href="https://www.weather.gov/documentation/services-web-api" className="linkCodeDescription" target="_blank" rel="noopener noreferrer">US National Weather Service API</a>. <br />
                  </div>
                  <div className="bodyText hangingIndent mb10px">
                     <img src="https://res.cloudinary.com/analogyofpearl/image/upload/v1662402382/Shared/technical%20assessments/CrowdStrike%20-%20Selection%20Downloader/icon-missing-red.svg" className="icon_available_missing" alt="" />
                     <span className="color-gray"><i>
                        Because I chose to <u>deploy</u> the <span className="boxGreyDarker">React</span> app to&nbsp;
                        <a href="https://pages.github.com/" className="linkCodeDescription" target="_blank" rel="noopener noreferrer">GitHub Pages</a>,
                        I did <span style={{ color: "hotpink" }}>not</span> use a <b>.Net</b> backend, as GitHub does <span style={{ color: "hotpink" }}>not</span> support ASP<b>.Net</b>.
                     </i></span>
                  </div>
                  <div className="bodyText hangingIndent mb10px">
                     <img src="https://res.cloudinary.com/analogyofpearl/image/upload/v1662401738/Shared/technical%20assessments/CrowdStrike%20-%20Selection%20Downloader/icon-available-teal.svg" className="icon_available_missing" alt="" />
                     Display the <span className="boxGreyDarker">7 day forecast</span> for a specified address on an HTML page using the&nbsp;
                     <a href="https://geocoding.geo.census.gov/geocoder/Geocoding_Services_API.pdf" className="linkCodeDescription" target="_blank" rel="noopener noreferrer">US Census Geocoding service</a>
                     &nbsp;for converting addresses into latitude and longitude.
                  </div>
               </div>
            </div>
         </div>

         {/* CODE */}
         {/* <div id="bugs" ref={refBugs}>
            <div className="row">
               <div className="col-3">
                  <div className="spacer-31px"></div>
                  <div className="left_headingPink">/ Code</div>
                  <div className="left_subHeading">How it works</div>
               </div>
               <div className="col-9">
                  <div className="line_bigRightLight"></div>
                  <div className="bodyText hangingIndent mb10px">
                     <img src="https://res.cloudinary.com/analogyofpearl/image/upload/v1668281764/Shared/technical%20assessments/Insight%202%20Profit%20-%207%20day%20forecast/icon-code-3.svg" className="icon_bug" alt="" />
                     <span className="boxGreyDarker">Scroll</span> to an element <b>onClick</b>():
                     <div className="spacer-10px"></div>
                     <a href="https://1drv.ms/u/s!Aont154u79uZ5Dkum6dSl-_hJmNX?e=qOBQ92" target="_blank" rel="noopener noreferrer">
                        <img src="https://res.cloudinary.com/analogyofpearl/image/upload/v1668271034/Shared/technical%20assessments/Insight%202%20Profit%20-%207%20day%20forecast/code-scroll_to_element.jpg" alt="" />
                     </a>
                  </div>
                  <div className="spacer-30px"></div>
                  <div className="bodyText hangingIndent mb10px">
                     <img src="https://res.cloudinary.com/analogyofpearl/image/upload/v1668273130/Shared/technical%20assessments/Insight%202%20Profit%20-%207%20day%20forecast/icon-code-1.svg" className="icon_bug" alt="" />
                     Selected checkboxes <b>counter</b> is wrong and <b>indeterminate</b> checkbox still shows:
                     <img src="https://res.cloudinary.com/analogyofpearl/image/upload/v1662469527/Shared/technical%20assessments/CrowdStrike%20-%20Selection%20Downloader/bug_4.jpg" alt="" />
                  </div>
                  <div className="spacer-20px"></div>
               </div>
            </div>
         </div> */}

         {/* ABOUT ME */}
         <div id="about_me" ref={refAboutMe}>
            <div className="row">
               <div className="col-3">
                  <div className="spacer-31px"></div>
                  <div className="left_headingPink">/ About Me</div>
                  <div className="left_subHeading">Portfolio <span className="color-lightGray">&amp;</span> Experience</div>
               </div>
               <div className="col-9">
                  <div className="line_AboutUs"></div>
                  <div className="row">
                     <div className="col-2">
                        <img className="img-fluid" src="https://res.cloudinary.com/analogyofpearl/image/upload/v1662464295/Shared/technical%20assessments/CrowdStrike%20-%20Selection%20Downloader/image_aboutMe_2.jpg" style={{ paddingLeft: "4px" }} alt="" />
                     </div>
                     <div className="col-10 bodyText">
                        <div className="mb10px">
                           <b>Front End</b> web developer with emphasys on <b>UI</b> and user-facing <i>responsive</i> web applications.<br />
                           <b>6</b>+ years of professional <i>full stack</i> development and <b>20</b>+ years of <i>web</i> <span className="color-gray">and</span> <i>graphic design</i> experience.
                        </div>
                        <div style={{ marginBottom: "15px" }}>
                           <span className="color-gray">Tech stack:</span> ASP.NET, MVC, C#, SQL on the <i><b>server side</b></i> <span className="color-gray">and</span>
                           React, JavaScript, jQuery, Bootstrap, HTML, CSS on the <i><b>front end</b></i>.
                        </div>
                        <div className="breadcrumbs d-flex row" style={{ marginLeft: "11px" }}>
                           <div>
                              <img src="https://res.cloudinary.com/analogyofpearl/image/upload/v1660317800/Shared/technical%20assessments/Meta%20-%20Landing%20Page/icon_business_man.svg" alt="" />
                           </div>
                           <div className="breadcrumb_arrow">
                              <img src="https://res.cloudinary.com/analogyofpearl/image/upload/v1660318190/Shared/technical%20assessments/Meta%20-%20Landing%20Page/icon_arrow.svg" alt="" />
                           </div>
                           <div className="breadcrumb_text breadcrumbs-hover-underline-animation">
                              <a href="https://dribbble.com/RaduBartan" className="link-breadcrumb" target="_blank" rel="noopener noreferrer">Dribbble Portfolio</a>
                           </div>
                           <div className="breadcrumb_arrow">
                              <img src="https://res.cloudinary.com/analogyofpearl/image/upload/v1660318190/Shared/technical%20assessments/Meta%20-%20Landing%20Page/icon_arrow.svg" alt="" />
                           </div>
                           <div className="breadcrumb_text breadcrumbs-hover-underline-animation">
                              <a href="https://sites.google.com/view/react-js-projects" className="link-breadcrumb" target="_blank" rel="noopener noreferrer">React Portfolio</a>
                           </div>
                           <div className="breadcrumb_arrow">
                              <img src="https://res.cloudinary.com/analogyofpearl/image/upload/v1660318190/Shared/technical%20assessments/Meta%20-%20Landing%20Page/icon_arrow.svg" alt="" />
                           </div>
                           <div className="breadcrumb_text breadcrumbs-hover-underline-animation">
                              <a href="https://drive.google.com/file/d/1fK5mBFoRYiXP2q3HRWnaG1DezlatkacN/view?usp=share_link" className="link-breadcrumb" target="_blank" rel="noopener noreferrer">Resume</a>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className="spacer-5px"></div>

         {/* Footer */}
         <div className="mb-4">
            <div className="topBar"></div>
            <div className="d-flex justify-content-between footerText_gray ps-2 pe-2 row">
               <div style={{ margin: "10px 0px 0px 20px" }}><span>Copyright 2022 &copy;&nbsp;</span><span className="footerText_pink">Radu Bartan</span>&nbsp;<span>- all rights reserved</span></div>
               <div style={{ margin: "10px 20px 0px 0px" }}>
                  <span className="footer-hover-underline-animation mr10px">
                     <a href="https://linkedin.com/in/RaduBartan" className="link-footer" target="_blank" rel="noopener noreferrer">Linked IN</a>
                  </span>
                  <span className="footer-hover-underline-animation mr10px">
                     <a href="https://stackblitz.com/@radubartan" className="link-footer" target="_blank" rel="noopener noreferrer">StackBlitz</a>
                  </span>
                  <span className="footer-hover-underline-animation mr10px">
                     <a href="https://github.com/radubartan" className="link-footer" target="_blank" rel="noopener noreferrer">GitHub</a>
                  </span>
                  <span className="footer-hover-underline-animation mr10px">
                     <a href="https://stackoverflow.com/users/7191056/radu-bartan?tab=topactivity" className="link-footer" target="_blank" rel="noopener noreferrer">StackOverflow</a>
                  </span>
               </div>
            </div>
         </div>
         <div className="spacer-10px"></div>
      </div >
   );
}

export default App;