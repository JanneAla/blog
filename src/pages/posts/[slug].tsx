import { getPostBySlug, getPostSlugs } from "@/utility/getAllPosts"
import { useRouter } from "next/router"
import ErrorPage from 'next/error'
import Post from '@/interfaces/Post'
import Head from "next/head"
import Layout from "@/components/layout/layout"
import Link from "next/link"

type Props = {
    post: Post
}

export default function Post({ post }: Props) {
    const router = useRouter()
    if (!router.isFallback && !post?.slug) {
        return <ErrorPage statusCode={404} />
    }

    return (
        <>
            <>
                <Link href="/">
                    <h2>HOME</h2>
                </Link>
            </>
            {router.isFallback ? (
                <p>Loading...</p>
            ) : (
                <>
                    <Head>

                        <title>{post.title}</title>
                    </Head>
                    <Layout>
                        <article>
                            <div style={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                            }}>
                                <h2>{post.title}</h2>
                                <div>
                                    <p>{post.date}</p>
                                </div>
                            </div>
                            <div dangerouslySetInnerHTML={{ __html: post.content }} />
                        </article>
                    </Layout>
                </>
            )
            }
        </>
    )
}

type Params = {
    params: {
        slug: string
    }
}

export async function getStaticPaths() {
    const paths = getPostSlugs()
    return {
        paths: paths.map((slug) => {
            return {
                params: {
                    slug: slug.replace(/\.md$/, '')
                }
            }
        }),
        fallback: false
    }
}

export async function getStaticProps({ params }: Params) {
    const post = getPostBySlug(params.slug, [
        'title',
        'date',
        'slug',
        'coverImage',
        'excerpt',
        'content'
    ])

    return {
        props: {
            post
        }
    }
}