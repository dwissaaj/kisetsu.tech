import { MDXRemote } from 'next-mdx-remote/rsc'
import Image from "next/image";

const components = {
    img: () => (
        <Image src={src} alt={alt} width={400} height={400} />
    ),
}

export function CustomMDX(props) {
    return (
        <MDXRemote
            {...props}
            components={{ ...components, ...(props.components || {}) }}
        />
    )
}