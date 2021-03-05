import { GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";
import { FunctionComponent } from "react";
import { getAllPostsIds, getPostData, getPostsBySeries } from "../../lib/posts";
import { PostMetadata } from "../../types/PostMetadata";
import Layout from "../../components/layout";
import Head from "next/head";
import PostHeader from "../../components/post-header";
import { getProseClass } from "../../helpers/theme";
import SeriesCard from "../../components/series-card";

const Post: FunctionComponent<PostProps> = (props) => {
    const { post, related } = props;

    return (
        <>
            <Head>
                <title>{post.title}</title>
            </Head>
            <Layout>
                <article className="max-w-3xl md:mt-6 rounded-xl mx-auto bg-white dark:bg-cool-gray-800">
                    <img src={post.coverUrl} className="object-cover w-full h-auto" />
                    <div className="p-8">
                        <PostHeader post={post}></PostHeader>
                        {post.series && (
                            <SeriesCard post={post} related={related}></SeriesCard>
                        )}
                        <div
                            className={`prose ${getProseClass(post.theme)} max-w-3xl mx-auto dark:text-cool-gray-100`}
                            dangerouslySetInnerHTML={{ __html: post.content }}
                        />
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
    const related = await getPostsBySeries(post.series)
    return {
        props: { post, related },
    };
};

interface Params extends ParsedUrlQuery {
    id: string;
}

type PostProps = {
    post: PostMetadata;
    related: PostMetadata[]
};
export default Post;
export { getStaticPaths, getStaticProps };
