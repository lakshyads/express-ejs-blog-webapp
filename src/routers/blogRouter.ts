// Initialize router
import express from 'express';
const BlogRouter = express.Router();

import _, { truncate } from '../utils/stringLodashUtil';

// Import Utils
import views from '../utils/filePaths';
import { log } from '../utils/loggerUtil';

// Import Controllers
import renderView from '../controllers/renderViewController';

// Import models
import PostModel, { Post } from '../models/postModel';

// Page variables/constants
const homeStartingContent = "Lacus vel facilisis volutpat est velit egestas dui id ornare. Semper auctor neque vitae tempus quam. Sit amet cursus sit amet dictum sit amet justo. Viverra tellus in hac habitasse. Imperdiet proin fermentum leo vel orci porta. Donec ultrices tincidunt arcu non sodales neque sodales ut. Mattis molestie a iaculis at erat pellentesque adipiscing. Magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Adipiscing elit ut aliquam purus sit amet luctus venenatis lectus. Ultrices vitae auctor eu augue ut lectus arcu bibendum at. Odio euismod lacinia at quis risus sed vulputate odio ut. Cursus mattis molestie a iaculis at erat pellentesque adipiscing.";
const aboutContent = "Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Non diam phasellus vestibulum lorem sed. Platea dictumst quisque sagittis purus sit. Egestas sed sed risus pretium quam vulputate dignissim suspendisse. Mauris in aliquam sem fringilla. Semper risus in hendrerit gravida rutrum quisque non tellus orci. Amet massa vitae tortor condimentum lacinia quis vel eros. Enim ut tellus elementum sagittis vitae. Mauris ultrices eros in cursus turpis massa tincidunt dui.";
const contactContent = "Scelerisque eleifend donec pretium vulputate sapien. Rhoncus urna neque viverra justo nec ultrices. Arcu dui vivamus arcu felis bibendum. Consectetur adipiscing elit duis tristique. Risus viverra adipiscing at in tellus integer feugiat. Sapien nec sagittis aliquam malesuada bibendum arcu vitae. Consequat interdum varius sit amet mattis. Iaculis nunc sed augue lacus. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Pulvinar elementum integer enim neque. Ultrices gravida dictum fusce ut placerat orci nulla. Mauris in aliquam sem fringilla ut morbi tincidunt. Tortor posuere ac ut consequat semper viverra nam libero.";
let posts: Post[] = [];

// Routes -----------------------------

// Home route
BlogRouter.get('/', async (req: express.Request, res: express.Response) => {
    const truncatedPosts = posts.map(post => new PostModel(post.title, truncate(post.body)));
    renderView(res, views.HOME, { posts: truncatedPosts });
})

// About route
BlogRouter.get('/about', async (req: express.Request, res: express.Response) => {
    renderView(res, views.ABOUT, { pageContent: aboutContent });
})

// Contact route
BlogRouter.get('/contact', async (req: express.Request, res: express.Response) => {
    renderView(res, views.CONTACT, { pageContent: contactContent });
})

// Compose route
BlogRouter.route('/compose')
    .get(async (req: express.Request, res: express.Response) => {
        renderView(res, views.COMPOSE);
    })
    .post(async (req: express.Request, res: express.Response) => {
        const post = new PostModel(req?.body?.postTitle, req?.body?.postBody);
        posts.push(post);
        res.redirect('/')
    })

BlogRouter.get('/posts/:postTitle', async (req: express.Request, res: express.Response) => {
    const postTitle = _.lowerCase(req.params?.postTitle) ?? 'No params found!';
    log('Post requested:', postTitle);
    let found = false;
    posts.forEach(post => {
        if (_.lowerCase(post.title) === postTitle) {
            renderView(res, views.POST, { post: post });
            found = true;
        }
    });
    if (!found)
        res.status(404).send('<h1>Not Found</h1>');
});

// Exports ------------------------------------
export default BlogRouter;
