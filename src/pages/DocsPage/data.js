import { Tabs } from "components/Doc";

export const sections = [
  {
    heading: "Beginner's Guide to React",
    chapters: [
      { id: 1, title: "UI-with-DOM-createElement", component: Tabs[0] },
      { id: 2, title: "UI-with-createElement", component: Tabs[1] },
      { id: 3, title: "UI-with-JSX", component: Tabs[2] },
      { id: 4, title: "JSX-tricks", component: Tabs[3] },
      { id: 5, title: "Fragments", component: Tabs[4] },
      { id: 6, title: "Custom-Components", component: Tabs[5] },
      { id: 7, title: "PropTypes", component: Tabs[6] },
      { id: 8, title: "JSX-Interpolation", component: Tabs[7] },
      { id: 9, title: "Re-render", component: Tabs[8] },
      { id: 10, title: "Styling-HTML", component: Tabs[9] },
      { id: 11, title: "Event-Handlers", component: Tabs[10] },
      { id: 12, title: "State", component: Tabs[11] },
      { id: 13, title: "Side-Effects", component: Tabs[12] },
      { id: 14, title: "Lazy-Initialization", component: Tabs[12] },
      {
        id: 15,
        title: "Use-Effect-Dependency-Array",
        component: Tabs[14],
      },
      { id: 16, title: "Custom-Hooks", component: Tabs[15] },
      { id: 17, title: "Vanilla-tilt-with-refs", component: Tabs[16] },
      { id: 18, title: "React-Hook-Flow", component: Tabs[17] },
      { id: 19, title: "Basic-Forms", component: Tabs[18] },
      { id: 20, title: "Dynamic-Forms", component: Tabs[19] },
      { id: 21, title: "Controlling-Form-Values", component: Tabs[20] },
      { id: 22, title: " Error-Boundaries", component: Tabs[21] },
      { id: 23, title: "Key-props-for-list", component: Tabs[22] },
      {
        id: 24,
        title: "Lifting-and-Collocating-states",
        component: Tabs[23],
      },
      { id: 25, title: "Http-requests", component: Tabs[24] },
      {
        id: 26,
        title: "Handling-errors-in-Http-requests",
        component: Tabs[25],
      },
    ],
    defaultToggle: true,
  },
  {
    heading: "Practices",
    chapters: [
      { id: 1, title: "Star-Rating", component: Tabs[26] },
      { id: 2, title: "Progress-Bar", component: Tabs[27] },
      {
        id: 3,
        title: "Customer-Reviews",
        component: Tabs[28],
      },
      {
        id: 4,
        title: "Result-Summary-Component",
        component: Tabs[29],
      },
      {
        id: 5,
        title: "Multi-Step-Form",
        component: Tabs[30],
      },
      {
        id: 6,
        title: "Bulb",
        component: Tabs[31],
      },
      { id: 7, title: "Wall Clock", component: Tabs[32] },
      { id: 8, title: "Rock-Paper-Scissors", component: Tabs[33] },
    ],
    defaultToggle: false,
  },
];
