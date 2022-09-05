import { FunctionComponent } from "react";

type TagListProps = {
    tags: string[]
}

const TagList: FunctionComponent<TagListProps> = (props) => {
    const { tags } = props

    return (
        <p className="flex">
            {tags.map(tag => (
                <span key={tag} className="bg-cool-gray-700 text-white mr-2 rounded-lg py-1 px-2 text-sm">
                    {tag}
                </span>
            ))}
        </p>
    )
    
}

export default TagList