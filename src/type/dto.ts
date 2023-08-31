export type Post = {
    id: String,
    writer: String,
    title: String,
    content: String,
    tag: String[] | String,
    author: String,
    description: String,
    image_header: String,
    published: Boolean,
    key: Number,
    createdAt? : String
}

export type SearchQ = {
    searchValue: string
}