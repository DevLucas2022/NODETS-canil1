import { Router } from 'express';

const routers = Router();

routers.get('/',(req,res)=>{
  res.send('home');
});

export default routers;