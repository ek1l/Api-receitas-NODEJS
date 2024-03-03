import { Router } from 'express';
import { RecipeControllers } from '../controllers/recipe.controller';
import { isRecipeIdValid } from '../middlewares/isRecipeIdValid.middleware';

export const recipeRouter = Router();
const recipeControllers = new RecipeControllers();

recipeRouter.get('/', recipeControllers.getMany);
recipeRouter.get('/:id', isRecipeIdValid.execute, recipeControllers.getOne);
recipeRouter.post('/', recipeControllers.create);
recipeRouter.patch('/:id', isRecipeIdValid.execute, recipeControllers.update);
recipeRouter.delete('/:id', isRecipeIdValid.execute, recipeControllers.delete);
