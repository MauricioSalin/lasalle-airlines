import { Icon } from "@chakra-ui/react";
import { MdHome, MdPeopleAlt } from "react-icons/md";

// Admin Imports
import MainDashboard from "pages/admin/default";
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
    path: "/alunos",
    icon: <Icon as={MdPeopleAlt} width="20px" height="20px" color="inherit" />,
    component: MainDashboard,
  },
  {
    name: "Instrutores",
    layout: "/admin",
    path: "/instrutores",
    icon: <Icon as={MdPeopleAlt} width="20px" height="20px" color="inherit" />,
    component: MainDashboard,
  },
  {
    name: "Perfil",
    layout: "/admin",
    path: "/profile",
    icon: <Icon as={MdPeopleAlt} width="20px" height="20px" color="inherit" />,
    component: MainDashboard,
    visible: false,
  },
];

export default routes;
