import {Poppins} from "next/font/google";

const poppins = Poppins({weight: "300", subsets: ['latin']})
export default function DashboardLayout({children}: {children: React.ReactNode
}) {
    return (
        <section className={`${poppins.className} bg-neutral-700 shadow-lg rounded-md p-2 m-2`}>
            {children}
        </section>
    )
}