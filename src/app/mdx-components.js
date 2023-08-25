import Image from "next/image";

export function useMDXComponents(components) {
    return {
        img: () => <Image src={`${img.src}`} alt={`${img.alt}`} width={400} height={400} />,
        ...components
    }
    // Allows customizing built-in components, e.g. to add styling.
    // return {
    //   h1: ({ children }) => <h1 style={{ fontSize: "100px" }}>{children}</h1>,
    //   ...components,
    // }

}