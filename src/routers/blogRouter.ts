// Initialize router
import express from 'express';
const BlogRouter = express.Router();

// Imports
import { log, logInfo, logError, newLine } from '../utils/loggerUtil';
import dateTimeStamp from '../utils/dateTimeUtil';
import views from '../utils/filePaths';

// Routes -----------------------------

// Home route
BlogRouter.route('/')
    .get(async (req: express.Request, res: express.Response) => {
        const viewPath = views.INDEX;
        try {
            logInfo('Requested view', viewPath)
            res.status(200).render(viewPath);
        } catch (error) {
            logError('requested view', viewPath, error);
        }
    })

// ------------------------------------
export default BlogRouter;
