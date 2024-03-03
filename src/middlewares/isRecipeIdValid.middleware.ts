import { NextFunction, Request, Response } from 'express';
import { recipeDatabase } from '../database/database';
import { AppError } from '../errors/AppError';

export class isRecipeIdValid {
  static execute(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;
    const recipe = recipeDatabase.find((recipe) => recipe.id === Number(id));
    if (!recipe) {
      throw new AppError('Recipe not found', 404);
    }
    res.locals.recipe = recipe;
    next();
  }
}
