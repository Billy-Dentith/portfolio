import React from "react";
import { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import PropTypes from 'prop-types';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel`}
      aria-labelledby={`vertical-tab`}
      {...other}
    >
      {value === index && (
        <Box 
            sx={{ p: 3 }}
        >
          {children}
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
  };
}

export default function JobsTable() {
  const [value, setValue] = useState(0);

  const experienceItems = {
    Northcoders: {
      jobTitle: "Junior Software Development Student",
      duration: "MAR 2024 - JUN 2024",
      desc: [
        "Attended an intensive 13 week bootcamp, learning both front-end and back-end development.",
        "Mastered fundamental concepts of JavaScript programming, including best practices and test-driven development.",
        "Gained extensive experience with building and integrating API's.",
        "Demonstrated expertise in front-end technologies, including HTML, CSS, and React.",
        "Acquired a robust understanding of SQL for database management and Express for server side routing.",
      ],
    },
    "Woodford Motorcycles": {
      jobTitle: "Parts and Servicing Manager",
      duration: "SEP 2015 - PRESENT",
      desc: [
        "Proficiently managed a high volume of customer interactions on a daily basis, ensuring exemplary satisfaction across all areas.",
        "Maintained and updated a comprehensive customers database and parts database, implementing necessary amendments as per requirements.",
        "Demonstrated initiative by creating and implementing an streamlined solution for stock location and distribution, optimising efficiency in the department.",
        "Trained and advised team members on IT systems, both software and hardware. Proactively troubleshooting any IT issues to maintain optimal performance and minimise downtime",
      ],
    },
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{ display: 'flex', height: 300 }}
    >
      <Tabs
        orientation={"vertical"}
        variant={"scrollable"}
        value={value}
        onChange={handleChange}
        sx={{ borderRight: 1, borderColor: '--green-bright' }}
      >
        {Object.keys(experienceItems).map((key, index) => (
          <Tab label={key} {...a11yProps(index)} />
        ))}
      </Tabs>
      {Object.keys(experienceItems).map((key, index) => (
        <TabPanel value={value} index={index}>
          <div className="job-title">
            {experienceItems[key]["jobTitle"] + " "}
          </div>
          <div className="job-company">{key}</div>
          <div className="duration">{experienceItems[key]["duration"]}</div>
          <ul className="job-description">
            {experienceItems[key]["desc"].map(function (descItem, index) {
              return <li key={index}>{descItem}</li>;
            })}
          </ul>
        </TabPanel>
      ))}
    </Box>
  );
}
