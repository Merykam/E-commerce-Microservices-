import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    next();
  }

  isAuth(req: Request, res: Response, next: NextFunction) {
    try {
      if (!req.headers.authorization) {
        throw new Error();
      }
      const token = req.headers.authorization.split(' ')[1];

      const jwtService = new JwtService({
        secret: process.env.SECREtKEYJWT,
      });
      const decodedToken = jwtService.verify(token);

      if (!token || !decodedToken) {
        throw new Error();
      }

      next();
    } catch (error) {
      res.status(401).json({ message: 'Token Invalid or Not Provided' });
    }
  }
}
