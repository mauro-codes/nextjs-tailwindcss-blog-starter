import { FunctionComponent } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faTag } from "@fortawesome/free-solid-svg-icons";
import { PostMetadata } from "../types/PostMetadata";

type PostHeaderProps = {
    post: PostMetadata
};

const PostHeader: FunctionComponent<PostHeaderProps> = (props) => {

    const { post } = props

    return (
        <header>
            <h1 className="text-5xl mb-6">{post.title}</h1>
            {/* POST METADATA */}
            <div className="flex justify-center">
                <time className="mx-2">
                    <FontAwesomeIcon
                        className={`mr-2 text-${post.theme}-500`}
                        icon={faClock}
                    ></FontAwesomeIcon>
                    {post.date}
                </time>
                <span className="mx-2">
                    <FontAwesomeIcon
                        className={`mr-2 text-${post.theme}-500`}
                        icon={faTag}
                    ></FontAwesomeIcon>
                    {post.category}
                </span>
            </div>
            {/* SEPARATOR */}
            <div className={`bg-${post.theme}-500 mx-auto rounded h-2 mt-4 mb-8`}></div>
        </header>
    );
};

export default PostHeader;
