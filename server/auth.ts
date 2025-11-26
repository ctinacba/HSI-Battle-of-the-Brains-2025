import { Request, Response, NextFunction } from 'express';

const VALID_USERNAME = 'Ebay_Seller';
const VALID_PASSWORD = 'StM@rysR0cks!';

export function isAuthenticated(req: Request, res: Response, next: NextFunction) {
  if (req.session?.userId) {
    return next();
  }
  res.status(401).json({ message: 'Unauthorized' });
}

export function validateCredentials(username: string, password: string): boolean {
  return username === VALID_USERNAME && password === VALID_PASSWORD;
}
