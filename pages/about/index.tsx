import Head from 'next/head'
import { MainLayout } from '../../components/MainLayout'

interface AboutPageProps {
    title: string
}

export default function About({title}: AboutPageProps){
    return (
        <MainLayout
            title='About'
        >
            {title}
        </MainLayout>
    )
}

About.getInitialProps = async () => {
    const response = await fetch(`http://localhost:4201/about`)
    const data = await response.json()
  
    return {
      title: data.title
    }
  }