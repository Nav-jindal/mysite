// Typescript:
interface TagsType{
    title: string
}

const Tags = ({
    title
}: TagsType) => {
    return <div className='w-max px-[14px] py-[6px] bg-[#D5DAE8] text-[#263568]'>
        {title}
    </div>
}

export default Tags