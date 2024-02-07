// import Page from "@/components/Page/Page";
// import React from "react";
// import { useParams } from "react-router-dom";

// const Groups = () => {
//   const {group} = useParams()
//   return <Page>Groups Page Content {group}</Page>;
// };

// export default Groups;


import Page from "@/components/Page/Page";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// Import the calendar component
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const Groups = () => {
  const { group } = useParams();
  const [selectedLabel, setSelectedLabel] = useState("")

  // Function to fetch and display future events
  const fetchFutureEvents = () => {
    // Logic to fetch future events from your backend or storage
  };

  // useEffect to fetch future events on component mount
  useEffect(() => {
    if (selectedLabel === "אירועים עתידיים") {
      fetchFutureEvents();

    }

  }, [selectedLabel]);

  return (
    <Page>

      <div>
        <h2>{group}</h2>
        {
          selectedLabel === "אירועים עתידיים" && (
            <div>
              <h2>אירועים עתידיים</h2>
              <Calendar />
            </div>
          )
        }


        {/* You can render other content related to future events here */}

      </div>
    </Page>
  );
};

export default Groups;
