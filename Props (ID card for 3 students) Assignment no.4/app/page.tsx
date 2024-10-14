import React from "react";
import Card from "./components/Card";

function Home() {
  return (
    <>
      <div className="text-black font-bold">
        <Card
          name="Mariam Rauf"
          rollno="00*****5"
          dayTime="Monday-00:00 PM - 00:00 PM"
          distanceLearning="No"
          city="Karachi"
          center="Governor House Karachi"
          campus="Main"
          batch="1"
          profileImage="/images/img 2.png"
        />
        <Card
          name="Hadiqa Atif"
          rollno="00*****6"
          dayTime="Sunday-00:00 PM - 00:00 PM"
          distanceLearning="No"
          city="Karachi"
          center="Governor House Karachi"
          campus="Main"
          batch="1"
          profileImage="/images/img1.jpg"
        />
        <Card
          name="Qirat Ali"
          rollno="00*****7"
          dayTime="Tuesday-00:00 PM - 00:00 PM"
          distanceLearning="No"
          city="Karachi"
          center="Governor House Karachi"
          campus="Main"
          batch="1"
          profileImage="/images/img 3.jpg"
        />
      </div>
    </>
  );
}

export default Home;
