import { Request, Response, Router } from 'express';
import { NextFunction } from 'express-serve-static-core';
const router: Router = Router();

// GET / with sample data

type Data = {
    project: string,
    inDev: boolean
}

router.get('/', (req: Request, res: Response, next: NextFunction) => {
    let data: Data = {
        project: 'myProject',
        inDev: true
    }
    res.render('index', data);
    next();
});

// 404
router.all('*', (req: Request, res: Response, next: NextFunction) => {
    res.render('404');
    next();
})

// ship routes
export default router;