import {useState, useEffect} from 'react'
import {NextPageContext} from 'next'
import Link from 'next/link'
import {useRouter} from 'next/router'
import {MainLayout} from '../../components/MainLayout'
import { MyPost } from '../../interfaces/post'

export default function Post({ post: serverPost }) {
  const [post, setPost] = useState(serverPost)
  const router = useRouter()

  useEffect(() => {
    async function load() {
      const response = await fetch(`http://localhost:4201/posts/${router.query.id}`)
      const data = await response.json()
      setPost(data)
    }

    if (!serverPost) {
      load()
    }
  }, [])

  if (!post) {
    return <MainLayout>
      <p>Loading ...</p>
    </MainLayout>
  }

  return(
    <MainLayout>
      <h1>{post.title}</h1>
      <hr />
      <p>{post.body}</p>
      <Link href={'/posts'}><a>Back to all posts</a></Link>
    </MainLayout>
  )
}

interface PostNextPageContext extends NextPageContext {
  query: {
    id: string
  }
}

Post.getInitialProps = async ({ query, req }: PostNextPageContext) => {
  if (!req) {
    return {post: null}
  }

  const response = await fetch(`http://localhost:4201/posts/${query.id}`)
  const post: MyPost = await response.json()

  return {
    post
  }
}
