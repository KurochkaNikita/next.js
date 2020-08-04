import {useState, useEffect} from 'react'
import {NextPageContext} from 'next'
import Head from 'next/head'
import Link from 'next/link'
import {useRouter} from 'next/router'
import { MainLayout } from '../components/MainLayout'
import { MyPost } from '../interfaces/post'

interface PostPageProps {
  posts: MyPost[]
}

export default function Posts({posts: serverPost}: PostPageProps){

    const [posts, setPost] = useState(serverPost)
    const router = useRouter()
  
    useEffect(() => {
      async function load() {
        const response = await fetch(`http://localhost:4201/posts`)
        const data = await response.json()
        setPost(data)
      }
  
      if (!serverPost) {
        load()
      }
    }, [])

    if (!posts) {
        return <MainLayout>
          <p>Loading ...</p>
        </MainLayout>
      }

    return (
        <MainLayout
            title='Posts Page | Next Course'
        >
            <h1>Posts Page</h1>
            <ul>
                {posts.map(post => (
                <li key={post.id}>
                    <Link href={`/post/[id]`} as={`/post/${post.id}`}>
                    <a>{post.title}</a>
                    </Link>
                </li>
                ))}
            </ul>
        </MainLayout>
    )
}

Posts.getInitialProps = async ({req} : NextPageContext) => {
    if (!req) {
        return {posts: null}
    }

    const response = await fetch(`${process.env.API_URL}/posts`)
    const posts: MyPost = await response.json()

    return {
        posts
    }
}