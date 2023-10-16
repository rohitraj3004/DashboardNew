import {
  AiOutlineOrderedList,
  AiOutlineUserAdd,
  AiOutlineLayout,
} from "react-icons/ai";

import { BsLayoutWtf } from "react-icons/bs";
import { TbTableShortcut } from "react-icons/tb";

export const menu = [
  {
    icon: <AiOutlineLayout size={18} />,
    id: "1",
    label: "Dashboard",
    link: "/home",
  },
  {
    icon: <AiOutlineUserAdd size={18} />,
    id: "2",
    label: "Product",
    // link: "/product",
    sub: [
      {
        isCollaspe: true,
        id: "1",
        label: "Product",
      },
    ],
  },
  {
    icon: <AiOutlineOrderedList size={18} />,
    id: "3",
    label: "Customers",
    // link: "/customers",
    sub: [
      {
        isCollaspe: true,
        id: "1",
        label: "Customers",
      },
    ],
  },
  {
    icon: <BsLayoutWtf size={18} />,
    id: "4",
    label: "Income",
    // link: "/income",
    sub: [
      {
        isCollaspe: true,
        id: "1",
        label: "Income",
      },
    ],
  },
  {
    icon: <TbTableShortcut size={18} />,
    id: "5",
    label: "Promote",
    // link: "/promote",
    sub: [
      {
        isCollaspe: true,
        id: "1",
        label: "Promote",
      },
    ],
  },
  {
    icon: <TbTableShortcut size={18} />,
    id: "5",
    label: "Help",
    // link: "/help",
    sub: [
      {
        isCollaspe: true,
        id: "1",
        label: "Help",
      },
    ],
  },
];
