import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Dashboard from './Components/Dashboard';
import Login from './Components/Login';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';

import First from './Components/First';
import Second from './Components/Second';
import Third from './Components/Third';

import Gourav from './Components/Gourav';
import Happy from './Components/Happy';
import Manoj from './Components/Manoj';

import Error from './Components/Error';

const router = createBrowserRouter([
  {
    path: '/',
    element: <><Navbar/><Home/></>
  },
  {
    path: '/about',
    element: <><Navbar/><About/></>
  },
  {
    path: '/contact',
    element: <><Navbar/><Contact/></>
  },
  {
    path: '/dashboard',
    element: <><Navbar/><Dashboard/></>,
    children:[
      {
        path: 'first',
        element: <First />,
        children: [
          {
            path: 'gourav',
            element: <Gourav />
          },
          {
            path: 'happy',
            element: <Happy />
          },
          {
            path: 'manoj',
            element: <Manoj />
          },
        ]
      },
      {
        path: 'second',
        element: <Second />
      },
      {
        path: 'third',
        element: <Third />
      }
    ]
  },
  {
    path: '/login/:id',
    element: <><Navbar/><Login/></>
  },
  {
    path: '*',
    element: <Error />
  }
])

function App() {
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
