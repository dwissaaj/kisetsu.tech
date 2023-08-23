export default function LayoutResult({
                                         children,
                                     }: {
    children: React.ReactNode
}) {
    return (
        <>
            <div className={'flex w-screen my-4 justify-center items-center'}>
                {children}
            </div>
        </>
    )

}