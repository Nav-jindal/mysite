// Packages:
import { useLocation, NavLink } from "react-router-dom"
import { useState } from "react"

// Icons:
import { FaBars } from "react-icons/fa6"

// Typescript:
import { RouterPathsType } from "../App"

interface NavigationLinkType {
    id?: number
    title: string
    currentPage: string
    toggleIsNavbarOpen: () => void
}


const NavigationLink = ({
    id,
    title,
    currentPage,
    toggleIsNavbarOpen
}: NavigationLinkType) =>   <NavLink 
                                className={`${currentPage === title ? 'font-bold pointer-events-none' : ' text-[#92A8E0]' } 
                                            pl-[8px] hover:shadow-[-2px_0px_0px_0px_#263568] text-[20.25px]
                                            hover:font-semibold hover:text-[#263568]`}
                                to={title}
                                onClick={toggleIsNavbarOpen}
                                >
                                {title === '/' ? 'home' : title.slice(1)}          
</NavLink>

const Navbar = ({
    routerPaths
}:RouterPathsType) => {
    // Constants:
    const currentPage = useLocation()

    // States:
    const [isNavBarOpen, setIsNavBarOpen] = useState<boolean>(false) 

    // Functions:
    const toggleIsNavbarOpen = () => setIsNavBarOpen(!isNavBarOpen)  

    // Return:
    return <div className='flex gap-[24px] items-center justify-between'> 
            <img 
                className='w-[35px] aspect-square'
                src='./images/logo.svg' 
                alt='logo' 
            />

            {/* Hamburger Menu */}
            <div className='md:hidden'>
                <FaBars 
                    className={` cursor-pointer fill-[#92A8E0]`}
                    size={24} 
                    onClick={toggleIsNavbarOpen}
                />
            </div>

            <div className={`${ isNavBarOpen ? '' : 'hidden' } md:hidden z-[30] pointer-events-none bg-[rgba(0,0,0,0.75)] absolute top-0 bottom-0 left-0 right-0 block`}></div>

            <div className={`${ isNavBarOpen ? 'block' : 'hidden' } z-[50] py-[25px] px-[20px] md:z-[0] md:p-0 absolute right-0 top-0 bottom-0 w-[75%] sm:w-[35%] md:w-max bg-[#F0F2F6] md:block md:static`}>
                <div className='md:hidden'>
                    <FaBars 
                        className={`md:hidden cursor-pointer fill-[#92A8E0]`}
                        size={24} 
                        onClick={toggleIsNavbarOpen}
                    />
                </div>
                <div className={`mt-[30px] flex  flex-col gap-[24px] md:flex-row md:mt-[0px] items-center`}>
                {routerPaths.map((page, index)=>
                    <NavigationLink 
                        key={index}
                        title={page.path ?? '/'}
                        currentPage={currentPage.pathname}
                        toggleIsNavbarOpen={toggleIsNavbarOpen}
                    />
                    )}
                </div>
            </div>
            
    </div>
}

export default Navbar