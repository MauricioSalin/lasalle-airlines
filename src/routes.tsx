import { Icon } from "@chakra-ui/react";
import {
  MdPerson,
  MdHome,
  MdOutlineSchedule,
  MdPeopleAlt,
  MdDashboard,
  MdAttachMoney,
} from "react-icons/md";

// Admin Imports
import MainDashboard from "pages/admin/default";
import DataTables from "pages/admin/data-tables";

// Auth Imports
import SignInCentered from "pages/auth/sign-in";
import { IRoute } from "types/navigation";

const routes: IRoute[] = [
  {
    name: "Dashboard",
    layout: "/admin",
    path: "/default",
    icon: <Icon as={MdHome} width="20px" height="20px" color="inherit" />,
    component: MainDashboard,
  },
  {
    name: "Alunos",
    layout: "/admin",
    path: "/responsaveis",
    icon: <Icon as={MdPeopleAlt} width="20px" height="20px" color="inherit" />,
    component: DataTables,
    secondary: true,
  },
  {
    name: "Instrutores",
    layout: "/admin",
    path: "/responsaveis",
    icon: <Icon as={MdPeopleAlt} width="20px" height="20px" color="inherit" />,
    component: DataTables,
    secondary: true,
  },
  {
    name: "Pilotos",
    layout: "/admin",
    path: "/responsaveis",
    icon: <Icon as={MdPeopleAlt} width="20px" height="20px" color="inherit" />,
    component: DataTables,
    secondary: true,
  },
];

export default routes;
