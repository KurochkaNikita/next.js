import { Children } from "react";

import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { Nav, Main } from './style.js';

export function MainLayout({children, title = 'Next.js App'}) {
    return (
        <React.Fragment>
            <Head>
                <title>{title}</title>
            </Head>
            <Nav>
                <Link href="/"><a>Home</a></Link>
                <Link href="/about"><a>About</a></Link>
                <Link href="/posts"><a>Posts</a></Link>
            </Nav>

            <Main>
                { children }
            </Main>
        </React.Fragment>
    )
} 