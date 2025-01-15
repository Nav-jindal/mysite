//Packages:
import { useState } from "react"
import { NavLink } from "react-router-dom"

//Icons:
import { FaChevronRight } from "react-icons/fa6"

// Typescript:
export interface PaginationType {
    id?:number
    name: string
}



const PaginationLink = ({
    name
}: PaginationType) => {

    //States:
    const [isHovering, setIsHovering] = useState<boolean>(false)

    return <NavLink 
            to={name}
            className={`origin-bottom-left mb-[15px] 
                            last:mb-0 flex gap-[15px] items-center cursor-pointer transition-all hover:scale-125 hover:ml-[30px]` }
            onMouseEnter={()=>setIsHovering(true)}
            onMouseLeave={()=>setIsHovering(false)}
        >
        <span className={`${isHovering ? 'bg-[#2159E4]' : 'bg-[#E7E6E6]' } block w-[50px] h-[2px]`}></span>
        <span className={`${isHovering ? 'text-[#2159E4] font-bold' : '' }`}>{name}</span>
        <FaChevronRight 
            className={`${isHovering ? 'fill-[#2159E4]' : 'fill-[#E7E6E6]' }`}
            size={isHovering ? 18 : 15} 
        />
    </NavLink>
}

export default PaginationLink