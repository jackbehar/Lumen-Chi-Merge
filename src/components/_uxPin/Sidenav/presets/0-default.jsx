import React from "react";
import Sidenav from "../Sidenav";
const sidenavItems = [
  {
    title: "Active Item",
    icon: "icon-atom",
    drawerTitle: "Menu item 1",
    accordionItems: [
      {
        title: "Item 1",
        subItems: [
          { title: "Item 1.1.1", href: "#exampleHashTarget" },
          { title: "Item 1.1.2", href: "#exampleHashTarget" },
        ],
      },
      {
        title: "Item 2",
        isActive: true,
        subItems: [
          { title: "Item 2.2.1", href: "#exampleHashTarget" },
          { title: "Item 2.2.2", href: "#exampleHashTarget" },
        ],
      },
    ],
  },
  {
    title: "Menu Item 2",
    icon: "icon-atom",
    drawerTitle: "Menu item 2",
    accordionItems: [
      /* similar structure as above */
    ],
  },
  // Add more items as needed
];

export default (
  <Sidenav
    items={sidenavItems}
    openOnHover={true}
    autoClose={true}
    uxpId="sidenav-01"
  />
);
