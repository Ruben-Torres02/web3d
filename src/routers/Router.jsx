import { createBrowserRouter } from 'react-router-dom'
import Login from '../pages/login/login.jsx'
import Quiz from '../pages/quiz/Quiz.jsx'
import Home from '../pages/home/Home.jsx'
import PublicRoute from './PublicRoute.jsx';
import ProtectedRoute from './ProtectedRoute.jsx';
import Start from '../pages/Start/Start.jsx';
import Shortage from '../pages/shortage/Shortage.jsx';
import Pollution from '../pages/pollution/Pollution.jsx';
import Test from '../pages/test/Test.jsx';
import ShortageTest from '../pages/shortageTest/ShortageTest.jsx';



const Router = createBrowserRouter([
  {
    path: '/',
    element: (
      <PublicRoute>
        <Login />
      </PublicRoute>
    )
  },
  {
    path: '/quiz',
    element: (
      <ProtectedRoute>
        <Quiz />
      </ProtectedRoute>
    )
  },
  {
    path: '/home',
    element: (
      <ProtectedRoute>
        <Home />
      </ProtectedRoute>
    )
  },
  {
    path: '/Start',
    element: (
      <ProtectedRoute>
        <Start />
      </ProtectedRoute>
    )
  },
  {
    path: '/shortage',
    element: (
      <ProtectedRoute>
        <Shortage />
      </ProtectedRoute>
    )
  },
  {
    path: '/pollution',
    element: (
      <ProtectedRoute>
        <Pollution />
      </ProtectedRoute>
    )
  },
  {
    path: '/test',
    element: (
      <ProtectedRoute>
        <Test />
      </ProtectedRoute>
    )
  },
  {
    path: '/shortage-Test',
    element: (
      <ProtectedRoute>
        <ShortageTest />
      </ProtectedRoute>
    )
  }
]);

export default Router;