import Root from "./components/Root";
import Cleaning from "./views/Cleaning";
import Login from "./views/Login";
import MainView from "./views/MainView";

const routes = [
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '',
        element: <MainView />,
        displayName: 'Home'
      },
      {
        path: '/limpieza',
        element: <Cleaning />,
        displayName: 'Limpieza'
      }
    ],
  },
  {
    path: '/login',
    element: <Login />,
  }
]

export default routes