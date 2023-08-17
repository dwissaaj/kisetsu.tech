// noinspection JSUnusedGlobalSymbols

async function generateMetadata({ params: { title } }: {params: { title: string}}) {
    let decodeTitle = decodeURIComponent(title).split(" ");

    for (let i = 0; i < decodeTitle.length; i++) {
        decodeTitle[i] = decodeTitle[i].charAt(0).toUpperCase() + decodeTitle[i].slice(1);

    }
    const final = decodeTitle.join(" ")
    // const data = await getData(title)
    return {
        title: `Kisetsu: ${final}`,
    }
}

export default function BlogLayout(props: {
    children: React.ReactNode
    recommendation: React.ReactNode
}) {
    return (
        <>
            <div className={'mx-auto container'}>
                <div className={'grid grid-cols-1 md:grid-cols-2'}>
                    <div>
                        {props.children}
                    </div>
                    <div>
                        {props.recommendation}
                    </div>
                </div>
            </div>
        </>
    )
}