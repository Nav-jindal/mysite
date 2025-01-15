// Packages:
import { useLocation, NavLink } from "react-router-dom"

// Typescript:
import { RouterPathsType } from "../App"

interface NavigationLinkType {
    id?: number
    title: string
    currentPage: string
}


const NavigationLink = ({
    id,
    title,
    currentPage
}: NavigationLinkType) =>   <NavLink 
                                className={`${currentPage === title ? 'font-bold pointer-events-none' : 'font-light text-[#7C9AE7]' } 
                                            pl-[10px] hover:shadow-[-2px_0px_0px_0px_#263568] 
                                            hover:font-semibold hover:text-[#263568]`}
                                to={title}>
                                {title === '/' ? 'home' : title.slice(1)}          
</NavLink>

const Navbar = ({
    routerPaths
}:RouterPathsType) => {
    // Constants:
    const currentPage = useLocation()

    // Return:
    return <div className=' flex gap-[24px] items-center justify-between h-max'> 
            <img 
                className='w-[35px] aspect-square'
                src='./images/logo.svg' 
                alt='logo' 
            />
            <div className='flex items-center gap-[30px]'>
            {routerPaths.map((page, index)=>
                <NavigationLink 
                    key={index}
                    title={page.path ?? '/'}
                    currentPage={currentPage.pathname}
                />
                )}
            </div>
    </div>
}

export default Navbar