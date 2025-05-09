
import { useState } from "react";
import { Activity } from "../types/gantt";

export const useGanttData = () => {
  const [activities, setActivities] = useState<Activity[]>([
    {
      id: "Foundation",
      name: "Foundation",
      level: 0,
      isExpanded: true,
      type: "group",
      start: "2021-05-01",
      end: "2021-07-15",
      color: "#a4c2f4",
      children: []
    },
    {
      id: "Structure",
      name: "Structure - Structure",
      level: 0,
      isExpanded: true,
      type: "group",
      start: "2021-07-15",
      end: "2022-02-15",
      color: "#b6d7a8",
      children: [
        {
          id: "EC1870",
          name: "Pre-fab Structural Frame Components",
          level: 1,
          isExpanded: false,
          type: "task",
          start: "2021-07-15",
          end: "2021-09-15",
          color: "#b6d7a8"
        },
        {
          id: "EC1390",
          name: "Erect Structural Frame",
          level: 1,
          isExpanded: false,
          type: "task",
          start: "2021-08-01",
          end: "2021-10-01",
          color: "#ea9999"
        },
        {
          id: "EC1410",
          name: "Begin Structural Phase",
          level: 1,
          isExpanded: false,
          type: "milestone",
          start: "2021-10-01",
          end: "2021-10-01"
        },
        {
          id: "EC1420",
          name: "Floor Decking",
          level: 1,
          isExpanded: false,
          type: "task",
          start: "2021-10-01",
          end: "2021-11-15",
          color: "#ea9999"
        },
        {
          id: "EC1430",
          name: "Concrete First Floor",
          level: 1,
          isExpanded: false,
          type: "task",
          start: "2021-11-15",
          end: "2021-12-15",
          color: "#ea9999"
        },
        {
          id: "EC1460",
          name: "Erect Stairwell and Elevator Walls",
          level: 1,
          isExpanded: false,
          type: "task",
          start: "2021-12-01",
          end: "2022-01-15",
          color: "#ea9999"
        },
        {
          id: "EC1470",
          name: "Concrete Basement Slab",
          level: 1,
          isExpanded: false,
          type: "task",
          start: "2021-12-15",
          end: "2022-01-15",
          color: "#b6d7a8"
        },
        {
          id: "EC1480",
          name: "Concrete Second Floor",
          level: 1,
          isExpanded: false,
          type: "task",
          start: "2022-01-01",
          end: "2022-02-01",
          color: "#ea9999"
        },
        {
          id: "EC1540",
          name: "Structure Complete",
          level: 1,
          isExpanded: false,
          type: "milestone",
          start: "2022-02-15",
          end: "2022-02-15"
        }
      ]
    },
    {
      id: "Mechanicals",
      name: "Mechanicals - Mechanical/Electrical Systems",
      level: 0,
      isExpanded: true,
      type: "group",
      start: "2022-01-15",
      end: "2022-07-01",
      color: "#d9d2e9",
      children: [
        {
          id: "EC1490",
          name: "Rough-In Phase Begins",
          level: 1,
          isExpanded: false,
          type: "milestone",
          start: "2022-01-15",
          end: "2022-01-15"
        },
        {
          id: "EC1690",
          name: "Rough In Complete",
          level: 1,
          isExpanded: false,
          type: "milestone",
          start: "2022-06-15",
          end: "2022-06-15"
        }
      ]
    },
    {
      id: "Lifts",
      name: "Lifts - Elevator",
      level: 0,
      isExpanded: true,
      type: "group",
      start: "2022-02-01",
      end: "2022-05-01",
      color: "#f4cccc",
      children: []
    },
    {
      id: "HVAC",
      name: "HVAC - HVAC",
      level: 0,
      isExpanded: true,
      type: "group",
      start: "2022-03-01",
      end: "2022-09-15",
      color: "#d9d2e9",
      children: []
    },
    {
      id: "Systems",
      name: "Systems - Plumbing and Electrical",
      level: 0,
      isExpanded: true,
      type: "group",
      start: "2022-03-15",
      end: "2022-09-01",
      color: "#d9d2e9",
      children: [
        {
          id: "EC1440",
          name: "Set Mechanical and Electrical Equipment",
          level: 1,
          isExpanded: false,
          type: "task",
          start: "2022-03-15",
          end: "2022-05-15",
          color: "#b6d7a8"
        },
        {
          id: "EC1520",
          name: "Rough-In Plumbing/Piping",
          level: 1,
          isExpanded: false,
          type: "task",
          start: "2022-04-15",
          end: "2022-07-01",
          color: "#d9d2e9"
        },
        {
          id: "EC1640",
          name: "Install Wiring and Cable",
          level: 1,
          isExpanded: false,
          type: "task",
          start: "2022-06-15",
          end: "2022-08-15",
          color: "#ea9999"
        },
        {
          id: "EC1660",
          name: "Connect Equipment",
          level: 1,
          isExpanded: false,
          type: "task",
          start: "2022-08-01",
          end: "2022-09-01",
          color: "#d9d2e9"
        }
      ]
    },
    {
      id: "ExFinish",
      name: "Ex-Finish - Exterior Finishes",
      level: 0,
      isExpanded: true,
      type: "group",
      start: "2022-05-01",
      end: "2022-11-15",
      color: "#b6d7a8",
      children: []
    },
    {
      id: "IntFinish",
      name: "Int-Finish - Interior Finishes",
      level: 0,
      isExpanded: true,
      type: "group",
      start: "2022-07-01",
      end: "2022-12-15",
      color: "#d9d2e9",
      children: []
    }
  ]);

  const months = [
    "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
    "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];

  const toggleExpand = (id: string) => {
    setActivities(
      activities.map(activity => 
        activity.id === id ? { ...activity, isExpanded: !activity.isExpanded } : activity
      )
    );
  };

  return {
    activities,
    months,
    toggleExpand
  };
};
