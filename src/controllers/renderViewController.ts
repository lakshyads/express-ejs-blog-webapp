import { Response } from 'express';
import { logInfo, logError } from '../utils/loggerUtil';
import { resolveViews } from '../utils/filePaths';

// CONTROLLERS ------------------------------------------------------------------------------------------------

/** Renders view in response by view path
 * @param res Express response
 * @param viewPath Full file path of view to render
 * @param ejsPageState Optional values to pass to page being rendered
 */

const renderViewByPath = (res: Response, viewPath: string, ejsPageState?: any) => {
    try {
        logInfo('Requested view', viewPath)
        res.status(200).render(viewPath, ejsPageState);
    } catch (error) {
        logError('requested view', viewPath, error);
    }
}

/** Renders view in response by view name
 * @param res Express response
 * @param viewName Name of view to render
 * @param ejsPageState Optional values to pass to page being rendered
 */
const renderViewByName = (res: Response, viewName: string, ejsPageState?: any) => {
    const viewPath = resolveViews(viewName);
    try {
        logInfo('Requested view', viewPath)
        res.status(200).render(viewPath, ejsPageState);
    } catch (error) {
        logError('requested view', viewPath, error);
    }
}

// Exports ---------------------------------------------------------------------------------------------------------
export default renderViewByName ;
export { renderViewByPath };