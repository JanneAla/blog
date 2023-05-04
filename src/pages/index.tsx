import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import PostCard from '@/components/postCard/PostCard'
import { getSortedPostsData } from '@/utility/getAllPosts'
import Post from '@/interfaces/Post'

type Props = {
  allPosts: Post[]
}

export default function Home({ allPosts }: Props) {
  return (
    <>
      <Head>
        <title>React Nextjs</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>

        <header className={styles.description}>
          <title>Header</title>
        </header>

        <div className={styles.grid}>
          {allPosts.length > 0 && allPosts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </main>
    </>
  )
}

export async function getStaticProps() {
  const allPosts = getSortedPostsData()
  return {
    props: {
      allPosts
    }
  }
}