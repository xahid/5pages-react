
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from './pages/About';
import Home from './pages/Home';
import Services from './pages/Services';
import Contact from './pages/Contact';
import ErrorPage from './pages/ErrorPage';
import Header from './components/Header';
import Footer from './components/Footer';

const router = createBrowserRouter([
{
  path: '/',
  element: <Home/>
},
{
  path: '/home',
  element: <Home/>
},
{
  path: '/about',
  element: <About/>
},
{
  path: '/services',
  element: <Services/>
},
{
  path: '/contact',
  element: <Contact/>
},
{
  path: '*',
  element: <ErrorPage/>
},

]);


function App() {

  return (

<>
<Header/>
    <RouterProvider router={router} />
<Footer/>
    </>

  
  )
}

export default App
