import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import Post from '@/interfaces/Post'

type Props = {
    post: Post
}

export default function PostCard({ post }: Props) {
    return (
        <Link
            as={`/posts/${post.slug}`}
            href={`/posts/${post.slug}`}
            className={styles.card}
        >
            <img
                src={post.coverImage}
                alt={post.title || "alt text"}
            />
            <h2>
                {post.title} <span>-&gt;</span>
            </h2>
            <p>
                {post.excerpt}
            </p>
        </Link>
    )
}