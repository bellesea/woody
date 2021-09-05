import Head from 'next/head'

export default function HeadObject({children}) {
    const title = "Woody Keppel";
    const description = "actor • comedian • songwriter";
    const keywords = "woody, keppel, actor, comedian, songwriter, vermont";
    const author = "Woody Keppel";
    return (
        <Head>
            <meta charSet="utf-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width,initial-scale=1" />
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta name="author" content={author} />
            <link rel="icon" href="/favicon.ico" type="image/x-icon" />
            {children}
        </Head>
    )
}
