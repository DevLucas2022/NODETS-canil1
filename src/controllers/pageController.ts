import { Request, Response} from 'express';

export const home = (req: Request, res: Response) =>{
  res.send("Essa é da home")
}
export const dogs = (req: Request, res: Response) =>{
  res.send("Essa é dos dogs")
}
export const cats = (req: Request, res: Response) =>{
  res.send("Essa é dos gatinhos")
}
export const fishes = (req: Request, res: Response) =>
{
  res.send("Essa é dos peixes")
}