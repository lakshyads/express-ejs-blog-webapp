/** View files paths */
import path from 'path';

/** Resolves absolute path of a view to `public/views` directory
 * @param viewName Name of view to resolve path for
 */
const resolveViews = (viewName: string) => {
    return path.resolve('public/views/' + viewName);
};

/** Resolves absolute path of a style file to `public/views/styles` directory
 * @param styleName Name of style file to resolve path for
 */
const resolveStyles = (styleName: string) => {
    return path.resolve('public/views/assets/styles/' + styleName);
};

/** File names of views present in `public/views` directory */
const views = {
    "INDEX": 'index.html',
    "HOME": 'home.html',
    "ABOUT": 'about.ejs',
    "CONTACT": 'contact.ejs',
    "COMPOSE": 'compose.ejs',
    "POST": 'post.ejs',
};

/**  File names of style files present in `public/views/assets/styles` directory */
const styles = {
    INDEX: 'index.css',
    GLOBAL: 'style.css',
};

// Exports ------------------------------------------------------------------------------------------------------------------------
export default views;
export { styles, resolveViews, resolveStyles };