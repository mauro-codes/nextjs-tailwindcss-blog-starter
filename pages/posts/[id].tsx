import { GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";
import { FunctionComponent } from "react";
import { getAllPostsIds, getPostData } from "../../lib/posts";
import { PostMetadata } from "../../types/PostMetadata";
import Layout from "../layout";
import Head from "next/head";
import PostHeader from "../../components/post-header";


const Post: FunctionComponent<PostProps> = (props) => {
    const { post } = props;

    return (
        <>
            <Head>
                <title>{post.title}</title>
            </Head>
            <Layout>
                <article className="max-w-6xl mt-12 rounded-xl mx-auto bg-white">
                    <img src={post.coverUrl} className="object-fill w-full" />
                    <div className="p-8">
                        <PostHeader post={post}></PostHeader>
                        <div className={`prose prose-${post.theme} max-w-3xl mx-auto`} dangerouslySetInnerHTML={{ __html: post.content }} />
                    </div>
                </article>
            </Layout>
        </>
    );
};

const getStaticPaths: GetStaticPaths = async () => {
    const paths = getAllPostsIds();
    return {
        paths,
        fallback: false,
    };
};

const getStaticProps: GetStaticProps<PostProps, Params> = async (context) => {
    const params = context.params as Params;
    console.log(params.id);
    const post = await getPostData(params.id);
    return {
        props: { post },
    };
};

interface Params extends ParsedUrlQuery {
    id: string;
}

type PostProps = {
    post: PostMetadata;
};
export default Post;
export { getStaticPaths, getStaticProps };
