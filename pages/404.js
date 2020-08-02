import Link from 'next/link';

export default function NotFindPage() {
    return (
        <>
            <h1>Page is not find</h1>
            <h5>Please <Link href='/'>go to home </Link>page</h5>
        </>
    )
}