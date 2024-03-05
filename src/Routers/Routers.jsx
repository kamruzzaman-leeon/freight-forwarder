import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Page/Home/Home/Home";
import OurStory from "../Page/AboutUs/OurStory/OurStory";
import OurPeople from "../Page/AboutUs/OurPeople/OurPeople";
import OurCompanies from "../Page/AboutUs/OurCompanies/OurCompanies";
import AwardAccreditation from "../Page/AboutUs/AwardAccreditation/AwardAccreditation";
import ContactUs from "../Page/ContactUs/ContactUs";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
          path:"services",
          element:<div>services</div>
        },
        {
          path:"travel-tourism",
          element:<div>travel-tourism</div>
        },
        {
          path:"about-us/our-story",
          element:<OurStory></OurStory>
        },
        {
          path:"about-us/our-people",
          element:<OurPeople></OurPeople>
        },
        {
          path:"about-us/our-companies",
          element:<OurCompanies></OurCompanies>,
        },
        {
          path:"about-us/award-accreditation",
          element:<AwardAccreditation></AwardAccreditation>
        },
        {
          path:"contact-us",
          element:<ContactUs></ContactUs>,
        }
      ]
    },
  ]);