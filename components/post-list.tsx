import { FunctionComponent } from "react";
import { PostMetadata } from "../types/PostMetadata";
import PostCard from "./post-card";

type PostListProps = {
    items: PostMetadata[];
};

const PostList: FunctionComponent<PostListProps> = (props) => {
    const { items } = props;

    return (
        <div className="mt-8">
            <h1 className="text-4xl mb-4 tracking-tight font-extrabold dark:text-cool-gray-100">
                Recent <span className="text-indigo-500">posts</span>
            </h1>
            <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-4 grid-flow-row auto-rows-fr">
                {items.map((item) => (
                    <PostCard {...item}></PostCard>
                ))}
            </div>
        </div>
    );
};

export default PostList;
