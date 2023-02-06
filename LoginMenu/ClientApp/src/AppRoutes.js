import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { Info } from "./components/Info";

// App route untuk berpindah halaman website
const AppRoutes = [
  {
    index: true,
    element: <Login />
    },

   {
     path: '/home',
     element: <Home />
   },
   {
    path: '/info',
    element: <Info />
   }
];

export default AppRoutes;
