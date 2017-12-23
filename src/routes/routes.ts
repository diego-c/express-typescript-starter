import { Request, Response, Router } from 'express';
const router: Router = Router();

// GET / with sample data

type Data = {
    project: string,
    inDev: boolean
}

router.get('/', (req: Request, res: Response) => {
    let data: Data = {
        project: 'myProject',
        inDev: true
    }
    res.render('index', data);
});

// 404
router.all('*', (req: Request, res: Response) => {
    res.render('404');
})

// ship routes
export default router;