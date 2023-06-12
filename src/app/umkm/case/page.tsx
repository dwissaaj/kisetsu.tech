type IComment = {
    commentId: number;
    commentContent: string;
    replies?: IComment[];
}
type IFruit = {
    fruitId: number,
    fruitName: string,
    fruitType: 'IMPORT' | 'LOCAL',
    stock: number
}
//FETCHING DATA FROM DB
async function getDataFruit() {
    const res = await fetch('http://localhost:3004/fruits')
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()

}

async function getDataComment() {
    const res = await fetch(' http://localhost:3004/comments')
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}

export default async function Case() {
    const dataFruit = await getDataFruit()
    const dataComment = await getDataComment()

    //function for get stock
    const sumStock = (data,typeFruit?: string): number => {
        let stockFruit = []
        //mapping to data
        data.map((fr) => {
            //check type
            if (!typeFruit) {
                stockFruit.push(fr.stock)
            }
            if (fr.fruitType == typeFruit)
                stockFruit.push(fr.stock)
        })
        return stockFruit.reduce((total, current) => {
            return total + current;
        }, 0);
    }

    const totalComment = (data): [] => {
        //multi array mapping
        let dataArr = []
        data.map((datac) => {
            dataArr.push(datac.commentId)
            {datac.replies?.map((reps) => {
                dataArr.push(reps.commentId)
                {
                    reps.replies?.map((reply) => {
                        dataArr.push(reply.commentId)
                    })
                }
            })}
        })
        return dataArr
    }

    return (
        <>
            {/*main div screen*/}
            <div className={'w-screen flex justify-center mt-12'}>
                <div className={'flex flex-col p-3'}>
                    <section>
                        <div>
                            <h1 className={'text-xl'}>Buah apa saja yang dimiliki Andi?</h1>
                        </div>
                        {/*#render all fruit*/}
                        {
                            dataFruit.map(fruit => (
                                <li key={fruit.fruitId}>
                                    {fruit.fruitName.toUpperCase()}
                                </li>
                            ))
                        }
                        {/*#second question*/}
                        <div>
                            <h1 className={'text-xl'}>Berapa jumlah wadah yang dibutuhkan? Dan ada buah apa saja di
                                masing-masing wadah?</h1>
                            <span>total wadah yang dibutuhkan </span>
                            <span className={'text-red-500 text-2xl'}> {sumStock(dataFruit)}   </span>
                        </div>

                        {/*#third question*/}
                        <div>
                            {/*#render import fruit*/}
                            <h1>Wadah Import</h1>
                            {
                                dataFruit.filter(fruit => fruit.fruitType == 'IMPORT').map(filteredFruit => (
                                    <p key={filteredFruit.fruitId}>
                                        {filteredFruit.fruitName.toUpperCase()} - {filteredFruit.stock} buah
                                    </p>
                                ))
                            }
                            <span className={''}>total yang wadah untuk buah import
                                <span className={'text-red-500 text-2xl'}>  {sumStock(dataFruit,'IMPORT')}   </span>
                            </span>
                        </div>
                        <div>
                            {/*#render local fruit*/}
                            <h1>Wadah Local</h1>
                            {
                                dataFruit.filter(fruit => fruit.fruitType == 'LOCAL').map(filteredFruit => (
                                    <p key={filteredFruit.fruitId}>
                                        {filteredFruit.fruitName.toUpperCase()} - {filteredFruit.stock} buah
                                    </p>
                                ))
                            }
                            <span className={''}>total yang wadah untuk buah Local
                                <span className={'text-red-500 text-2xl'}>  {sumStock(dataFruit,'LOCAL')}   </span>
                            </span>

                        </div>

                        <div>
                            <h1 className={'text-xl'}>Komentar terkait kasus di atas</h1>
                            <p>FruitID not distinct but duplicated</p>
                        </div>
                    </section>

                    {/*CASE NO 5*/}
                    <section className={'mt-8'}>
                        <p className={'text-2xl'}>case 5</p>
                        <p className={'text-2xl'}>
                            Buatlah fungsi untuk menghitung total komentar yang ada?</p>
                        <span className={'text-xl text-sky-500'}>
                            {totalComment(dataComment).length} terdeteksi
                        </span>


                    </section>
                </div>

            </div>
        </>
    )
}
