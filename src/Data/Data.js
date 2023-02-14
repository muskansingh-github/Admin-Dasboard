import {
  UilEstate,
  UilClipboardAlt,
  UilUsersAlt,
  UilPackage,
  UilChart,
} from "@iconscout/react-unicons";

import { UilUsdSquare, UilMoneyWithdrawal } from "@iconscout/react-unicons";

export const SidebarData = [
  {
    icon: UilEstate,
    heading: "Dashboard",
  },
  {
    icon: UilClipboardAlt,
    heading: "Orders",
  },
  {
    icon: UilUsersAlt,
    heading: "Customers",
  },
  {
    icon: UilPackage,
    heading: "Products",
  },
  {
    icon: UilChart,
    heading: "Analytics",
  },
];

export const cardsData = [
  {
    title: "Sales",
    color: {
      backGround:
        "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)",
      boxShadow: "0px 10px 20px 0px #F9D59B",
    },
    barValue: 90,
    value: "1,12,495",
    png: UilUsdSquare,
    series: [
      {
        name: "Sales",
        data: [11, 60, 18, 61, 82, 12, 102],
      },
    ],
  },
  {
    title: "Profit",
    color: {
      backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
      boxShadow: "0px 10px 20px 0px #FDC0C7",
    },
    barValue: 40,
    value: "26,985",
    png: UilMoneyWithdrawal,
    series: [
      {
        name: "Profit",
        data: [5, 50, 100, 35, 40, 15, 80],
      },
    ],
  }, 
  {
    title: "Expenses",
    color: {
      backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
      boxShadow: "0px 10px 20px 0px #e0c6f5",
    },
    barValue: 75,
    value: "2,24,990",
    png: UilClipboardAlt,
    series: [
      {
        name: "Expenses",
        data: [10, 25, 20, 35, 24, 32, 12],
      },
    ],
  },
];
