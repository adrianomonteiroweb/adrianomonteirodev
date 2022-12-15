import express from 'express';
import { allSkills } from '../data/skillsData';

const skillsRouter = express.Router();

skillsRouter.get('/skills', (_req, res) => res.status(200).json(allSkills));

export default skillsRouter;
