import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './components/RootLayout';
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import Events from './components/pages/Events';
import Volunteer from './components/pages/Volunteer';
import Eventbyid from './components/pages/Eventbyid';

import Signup from './components/pages/Signup'
import ClubEvents from './components/pages/ClubEvents';
const browserRouter = createBrowserRouter([
  {
    path: '',
    element: <RootLayout />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'eventbyid',
        element: <Eventbyid />
      },
      {
        path: 'login',
        element: <Login />
      },
      {
        path: 'events',
        element: <Events />
      },
      {
        path:"volunteer/:id",
        element:<Volunteer />
      },
      {
        path:"signup-details",
        element:<Signup />
      },
      {
        path:'clubevents',
        element:<ClubEvents />
      }
    ]
  }
]);

function App() {
  return <RouterProvider router={browserRouter} />;
}

export default App;
