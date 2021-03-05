import Link from "next/link";
import { FunctionComponent } from "react";
import { PostMetadata } from "../types/PostMetadata";

type SeriesCardProps = {
    post: PostMetadata,
    related: PostMetadata[]
}

const SeriesCard: FunctionComponent<SeriesCardProps> = (props) => {

    const { post, related } = props

    return (
        <section className={`text-white border-l-8 border-${post.theme}-500 p-4 mb-4 rounded bg-cool-gray-900`}>
            <p className="mb-2">Series:</p>
            {related.map((relatedPost, index) => {
                if (relatedPost.id !== post.id) {
                    return (
                        <Link href={`./${relatedPost.id}`}>
                            <a>
                                <p className="mb-4">
                                    <span className={`rounded-full px-3 py-1 bg-${post.theme}-500 mr-2`}>{index + 1}</span>
                                    <span>{relatedPost.title}</span>
                                </p>
                            </a>
                        </Link>
                    )
                } else {
                    return (
                        <p className="mb-4">
                            <span className={`rounded-full px-3 py-1 bg-${post.theme}-500 mr-2`}>{index + 1}</span>
                            <span className={`text-${relatedPost.theme}-500`}>{relatedPost.title}</span>
                        </p>
                    )
                }
            }
            )}
        </section>
    )
}

export default SeriesCard;
