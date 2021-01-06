import { FunctionComponent } from "react";
type PostCardProps = {
    category: string;
    title: string;
    description: string;
    coverUrl: string;
    date: string;
    id: string
};

const PostCard: FunctionComponent<PostCardProps> = (props) => {
    const { category, title, description, coverUrl, date, id } = props;

    return (
        <div className="relative">
            <div className="w-full h-full">
                <img src={coverUrl} alt="" className="object-cover h-48 w-full" />
                <div className="p-4 bg-white">
                    <p className="text-indigo-600 font-semibold mb-2">{category}</p>
                    <h2 className="text-2xl font-semibold mb-3">{title}</h2>
                    <p className="text-gray-500">{description}</p>
                </div>
            </div>
            <a href={`posts/${id}`} className="absolute inset-0"></a>
        </div>
    );
};

export default PostCard;
