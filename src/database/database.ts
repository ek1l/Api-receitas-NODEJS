import { IRecipe } from '../interface/recipe.interface';

let id = 0;
export const recipeDatabase: IRecipe[] = [];

export const generateId = () => {
  id++;
  return id;
};
