import { Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel } from "react-accessible-accordion";
import './forecast.css';

const WEEK_DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const Forecast = ({ data }) => {
   const dayInAWeek = new Date().getDay();
   const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(WEEK_DAYS.slice(0, dayInAWeek));

   return (
      <>
         <Accordion allowZeroExpanded>
            {data.list.splice(0, 7).map((item, idx) => (
               <AccordionItem key={idx}>
                  <AccordionItemHeading>
                     <AccordionItemButton>
                        <div className="daily-item">
                           <img alt="weather" className="icon-small" src={`icons/${item.weather[0].icon}.png`}/>
                           <label className="day">{forecastDays[idx]}</label>
                           <label className="description">{item.weather[0].description}</label>
                           <label className="min-max">
                              {Math.round(item.main.temp_min)}&#8457; 
                              <span className="colorMax"> / {Math.round(item.main.temp_max)}&#8457;</span>
                           </label>
                        </div>
                     </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel></AccordionItemPanel>
               </AccordionItem>
            ))}
         </Accordion>
      </>
   );
}
export default Forecast;