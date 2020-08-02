import Head from 'next/head'
import { MainLayout } from '../components/MainLayout'

export default function Test(){
    return (
        <MainLayout>
            <Head>
                <title>Posts</title>
            </Head>

            Posts
        </MainLayout>
    )
}