import { Router } from 'express';

import { Post } from '../models/post'

const router = Router();

const posts: Post[] = [];

router.get('/', (req, res, next) => {
  res.status(200).json({message :"please enter valid api endpoint"});
});

router.get('/post', (req, res, next) => {
  res.status(200).json({post : posts});
});

export default router;