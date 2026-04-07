import React from "react";
import Banner from "../../components/banner/Banner";
import StatsSection from "../../components/statsSection/StatsSection";
import TrendingApps from "../../components/trendingApps/TrendingApps";

const Home = () => {
  const apps = [
    {
      id: 1,
      name: "Forest: Focus For Productivity",
      image: "/apps/app1.jpg",
      downloads: "9M",
      rating: "5",
    },
    {
      id: 2,
      name: "SmPlan: ToDo List With Reminder",
      image: "/apps/app2.jpg",
      downloads: "9M",
      rating: "5",
    },
    {
      id: 3,
      name: "FLIP - Focus Timer For Study",
      image: "/apps/app3.jpg",
      downloads: "9M",
      rating: "5",
    },
    {
      id: 4,
      name: "Pomocat - Cute Pomodoro Timer",
      image: "/apps/app4.jpg",
      downloads: "9M",
      rating: "5",
    },
    {
      id: 5,
      name: "Time Planner: Schedule & Tasks",
      image: "/apps/app5.jpg",
      downloads: "9M",
      rating: "5",
    },
    {
      id: 6,
      name: "Morning Habits - Daily Routine",
      image: "/apps/app6.jpg",
      downloads: "9M",
      rating: "5",
    },
    {
      id: 7,
      name: "Focus Plant: Pomodoro Forest",
      image: "/apps/app7.jpg",
      downloads: "9M",
      rating: "5",
    },
    {
      id: 8,
      name: "Alarmy - Alarm Clock & Sleep",
      image: "/apps/app8.jpg",
      downloads: "9M",
      rating: "5",
    },
  ];
  return (
    <div>
      <Banner />
      <StatsSection />
      <TrendingApps apps={apps} />
    </div>
  );
};

export default Home;
