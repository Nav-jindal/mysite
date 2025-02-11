// Typescript:
interface TagsType{
    title: string
}

const Tags = ({
    title
}: TagsType) => {
    return <div className='w-max rounded-[6px] px-[14px] py-[6px] bg-[#D8DCE6] text-[#6C6E73]'>
        {title}
    </div>
}

export default Tags