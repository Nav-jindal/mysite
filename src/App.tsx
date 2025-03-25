// Packages:
import { ToastContainer } from 'react-toastify'

// Pages:
import Hero from './pages/hero'
import About from './pages/about'
import Contact from './pages/contact'
import Examples from './pages/examples'
import Services from './pages/services'

// Components:
import Navbar from './components/navbar'
import Footer from './components/footer'

// Routes:
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"

// CSS:
import 'react-toastify/dist/ReactToastify.css'

// Typescript:
export interface RouterPathsType {
routerPaths: {
  index?: boolean
  path?: string
  element: JSX.Element
}[]
}


const MainLayout = ({routerPaths}: RouterPathsType) => <>
  <Navbar routerPaths={routerPaths}/>
  <Outlet />
  <Footer />
</>

function App() {
  // Constants:
  const routerPaths = [
    {
      index: true,
      element:<Hero />,
    },
    {
      path: '/about',
      element: <About />
    },
    {
      path: '/services',
      element: <Services />
    },
    {
      path: '/examples',
      element: <Examples />
    },
    {
      path: '/contact',
      element: <Contact />
    },
  ]
  const router = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout routerPaths={routerPaths}/>,
      errorElement: <h3 className='my-[35px]'>Error: Page Not Found</h3>,
      children: routerPaths
    }
  ])

  return <>
    <ToastContainer  limit={2}/>
    <div className='mx-[auto] px-[20px] py-[25px] xl:max-w-[1250px] 2xl:max-w-[1350px] min-h-dvh w-full flex flex-col justify-between'>
      <RouterProvider router={router}/>
    </div>
    </>
}

export default App;
