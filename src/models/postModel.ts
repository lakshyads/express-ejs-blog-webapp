/** Blog Post interface
 * @field `title`: Post title
 * @field `body`: Post body
 */
interface Post {
    title: string;
    body: string;
}

/**
 * Blog Post class
 */
class PostModel implements Post {
    title: string = '';
    body: string = '';
    constructor(title: string, body: string) {
        this.title = title;
        this.body = body;
    }
}

export default PostModel;
export { Post };