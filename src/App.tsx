
// Pages:
import Hero from './pages/hero'
import About from './pages/about'
import Contact from './pages/contact'

// Components:
import Navbar from './components/navbar'
import Footer from './components/footer'

// Routes:
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"

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

  return (
    <div className='py-[25px] px-[75px] bg-[#F0F2F6] min-h-screen w-full flex flex-col justify-between'>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
