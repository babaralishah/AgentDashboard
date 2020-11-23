import { RouteInfo } from "./sidebar.metadata";

export const ROUTES: RouteInfo[] = [
  {
    path: "",
    title: "Dashboard",
    icon: "mdi mdi-dots-horizontal",
    class: "nav-small-cap",
    extralink: true,
    submenu: [],
  },
  {
    path: "/profile",
    title: "User Profile",
    icon: "mdi mdi-account",
    class: "",
    extralink: false,
    submenu: [],
  },
  {
    path: "/users",
    title: "Agent",
    icon: "fa fa-users",
    class: "",
    extralink: false,
    submenu: [],
  },
  {
    path: "/inventory",
    title: "Inventory",
    icon: "fas fa-file-alt",
    class: "",
    extralink: false,
    submenu: [],
  },
  {
    path: "/leads",
    title: "Leads",
    icon: "fas fa-phone-volume",
    class: "",
    extralink: false,
    submenu: [],
  }
];
