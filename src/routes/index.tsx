import {useRoutes} from 'react-router-dom';
import MainLayout from "../layout/MainLayout";


export default function ThemeRoutes() {
  return useRoutes([
    {
      path: '/',
      element: <MainLayout/>,
      children: [
        {path: '/', element: <h1>Home</h1>},
        {path: '/chart', element: <h1>About</h1>},
        {path: '/settings', element: <h1>Dashboard</h1>},
      ]
    }
  ]);
}