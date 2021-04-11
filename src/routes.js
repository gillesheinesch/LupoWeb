// @material-ui/icons
import Home from "@material-ui/icons/Home";

// core components/views for Admin layout
import DashboardPage from "views/Home/Home.js";

const routes = [
  {
    path: "/home",
    name: "Dashboard",
    icon: Home,
    component: DashboardPage,
    layout: "/index"
  },
];

export default routes;
