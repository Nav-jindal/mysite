// Packages:
import { useLocation, NavLink } from "react-router-dom"
import { useState } from "react"

// Icons:
import { FaBars } from "react-icons/fa6"

// Typescript:
import { RouterPathsType } from "../App"
import { motion, Variants } from "motion/react"

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
                                className={`${currentPage === title ? 'font-bold pointer-events-none' : ' !font-normal text-[#6d6d6d]' } 
                                            text-[20.25px]  hover:font-bold hover:text-[#E02720] hover:shadow-[0_2px_0_0_rgb(224,73,68)]`}
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
    const hamburgerMenuVariant: Variants = {
        hidden: {
            x: '100%',
            opacity: 0,
        },
        visible: {
            x: '0px',
            opacity: 1,
        }
    }
    const blackOverlayVariant: Variants = {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
        }
    }
    // States:
    const [isNavBarOpen, setIsNavBarOpen] = useState<boolean>(false) 

    // Functions:
    const toggleIsNavbarOpen = () => setIsNavBarOpen(!isNavBarOpen)  

    // Return:
    return <div className='flex py-[20px] gap-[24px] items-center justify-between'> 
            <img 
                className='w-[30px] aspect-square'
                src='./images/logo.svg' 
                alt='logo' 
            />

            {/* Hamburger Menu */}
            <div className={`absolute z-[100] right-[20px] sm:hidden`}>
                <FaBars 
                    className={` cursor-pointer fill-[#ffffff]`}
                    size={24} 
                    onClick={()=>setIsNavBarOpen(!isNavBarOpen)}
                />
            </div>

            <motion.div 
                initial='hidden'
                animate={isNavBarOpen ? 'visible' : 'hidden'}
                variants={blackOverlayVariant}
                transition={{duration: .75, ease: 'easeInOut'}}
                className='sm:hidden z-[30] pointer-events-none bg-[rgba(0,0,0,0.75)] fixed top-0 bottom-0 left-0 right-0 block'>
                
            </motion.div>

            <motion.div 
                initial='hidden'
                animate={isNavBarOpen ? 'visible' : 'hidden'}
                exit='hidden'
                variants={hamburgerMenuVariant}
                transition={{duration: .75, ease: 'easeInOut'}}
                className='origin-right z-[50] py-[50px] px-[20px] md:z-[0] md:p-0 fixed right-0 top-0 bottom-0 w-[75%] min-[540px]:w-[45%] bg-[#313030] sm:hidden'
            >
                <div className='mt-[30px] flex flex-col gap-[40px] items-center'>
                {routerPaths?.map((page, index)=>
                    <NavigationLink 
                        key={index}
                        title={page.path ?? '/'}
                        currentPage={currentPage.pathname}
                        toggleIsNavbarOpen={toggleIsNavbarOpen}
                    />
                    )}
                </div>
            </motion.div>
            
            <div className='hidden sm:flex gap-[30px] lg:gap-[40px]'>
                {routerPaths?.map((page, index)=>
                    <NavigationLink 
                        key={index}
                        title={page.path ?? '/'}
                        currentPage={currentPage.pathname}
                        toggleIsNavbarOpen={toggleIsNavbarOpen}
                    />
                )}
            </div>
    </div>
}

export default Navbar