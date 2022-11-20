export interface Post {
    author: string,
    message: string,
    _id?: string,
    datetime: string,
}
export interface NewPost {
    author: string,
    message: string,
    datetime: string,
}