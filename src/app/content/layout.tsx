export default function ContentLayout({
                                            children,
                                        }: {
    children: React.ReactNode
}) {
    return <section>
        <div className={'container mx-auto'}>
            <div className={'bg-neutral-700 p-2 m-2'}>
                {children}
            </div>
        </div>
    </section>
}