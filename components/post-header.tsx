import { FunctionComponent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faTag } from "@fortawesome/free-solid-svg-icons";
import { PostMetadata } from "../types/PostMetadata";
import TagList from "./TagList";

type PostHeaderProps = {
    post: PostMetadata;
};

const PostHeader: FunctionComponent<PostHeaderProps> = (props) => {
    const { post } = props;

    return (
        <header>
            <time className="text-gray-600">
                <FontAwesomeIcon
                    className={`mr-2 text-${post.theme}-500`}
                    icon={faClock}
                ></FontAwesomeIcon>
                {post.date}
            </time>
            <h1 className="text-2xl md:text-3xl lg:text-4xl mb-6">{post.title}</h1>
            {/* POST TAGS */}
            <div className="flex items-center">
                <FontAwesomeIcon
                    className={`mr-2 text-${post.theme}-500`}
                    icon={faTag}
                ></FontAwesomeIcon>
                {post.tags && <TagList tags={post.tags}></TagList>}
            </div>
            {/* SEPARATOR */}
            <div className={`bg-${post.theme}-500 mx-auto rounded h-2 mt-4 mb-8`}></div>
        </header>
    );
};

export default PostHeader;
