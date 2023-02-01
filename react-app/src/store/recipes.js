const LOAD_RECIPES = "recipes/LOAD_ALL_RECIPES";
const LOAD_SINGLE_RECIPE = "recipe/LOAD_SINGLE_RECIPE";
const CREATE_RECIPE = "recipe/CREATE_RECIPE";
const DELETE_RECIPE = "recipe/DELETE_RECIPE";
const EDIT_RECIPE = "recipe/EDIT_RECIPE"
const ADD_INGREDIENTS_TO_RECIPE = "recipe/ADD_INGREDIENTS"
const LOAD_MY_RECPES = "recipe/LOAD_MY_RECIPES"
const UPDATE_INGREDIENT = "ingredient/UPDATE_INGREDIENT"
const UPDATE_PREPARATION = "preparation/UPDATE_PREPARATION"
const DELETE_INGREDIENT = "ingredient/DELETE_INGREDIENT"
const DELETE_PREPARATION = "preparaion/DELETE_PREPARATION"
const ADD_PREPARATION_TO_RECIPE = "recipe/ADD_PREPARATION"



//////////ACTIONS CREATORS /////////////
const loadRecipes = (recipes) =>({
    type:LOAD_RECIPES,
    recipes
});

const loadSingleRecipe = (recipe) =>({
    type: LOAD_SINGLE_RECIPE,
    recipe
})

const createRecipe = (recipe) =>({
    type:CREATE_RECIPE,
    recipe
})

const deleteRecipe = (recipeId) =>({
    type:DELETE_RECIPE,
    recipeId
})

const EditRecipe = (data) =>({
    type:EDIT_RECIPE,
    data
})

const loadMyRecipes = (data) =>({
    type:LOAD_MY_RECPES,
    data
})

const addIngredientToRecipe = (recipe) =>({
    type:ADD_INGREDIENTS_TO_RECIPE,
    recipe
})

const addPreparationToRecipe = (recipe) =>({
    type:ADD_PREPARATION_TO_RECIPE,
    recipe
})


const updateIngredient = (recipe) =>({
    type:UPDATE_INGREDIENT,
    recipe
})

const updatePreparaion = (recipe) =>({
    type:UPDATE_PREPARATION,
    recipe
})

const deleteIngredient = (recipe)=>({
    type:DELETE_INGREDIENT,
    recipe
})


const deletePreparation = (recipe) =>({
    type:DELETE_PREPARATION,
    recipe
})






/////////THUNK ////////////
export const loadRecipesThunk = () => async (dispatch) =>{
    const response = await fetch ("/api/recipes/");
    if (response.ok){
        const data = await response.json();
        await dispatch (loadRecipes(data.recipes))
    }
};


export const loadSingleRecipeThunk = (recipeId) => async (dispatch) =>{
    const response = await fetch(`/api/recipes/${recipeId}`);
    if(response.ok){
        const data = await response.json();
        dispatch(loadSingleRecipe(data));
        return data
    }
}


export const createRecipeThunk = (newRecipe) => async (dispatch) =>{
    const response = await fetch(`/api/recipes`, {
        method:"POST",
        headers:{
            "Content-Type": "application/json",
        },
        body: JSON.stringify(Object.fromEntries(newRecipe)),
    });
    if(response.ok){
        const newRecipe = await response.json();
        dispatch(createRecipe(newRecipe));
        return newRecipe
    }
}


export const createNewRecipeThunk = (formData) => async (dispatch) => {
    const res = await fetch(`/api/recipes`, {
        method:"POST",
        body: formData,
    });
    if (res.ok){
        const data = await res.json();
        await dispatch(createRecipe(data))
    }
    return res
}

export const deleteRecipeThunk = (recipeId) => async (dispatch) =>{
    const response = await fetch(`/api/recipes/${recipeId}`, {
        method:"DELETE",
    });
    if(response.ok){
        dispatch(deleteRecipe(recipeId));
        return response;
    }
};

export const EditRecipeThunk = (recipe) => async(dispatch) =>{
    const response = await fetch(`/api/recipes/${recipe.id}`, {
        method:"PUT",
        headers:{
            "Content-Type": "application/json", 
        },
        body: JSON.stringify(recipe),
    })
    if (response.ok) {
        const updatedRecipe = await response.json()
        dispatch(EditRecipe( updatedRecipe ));
        return updatedRecipe;
      }
}

export const addIngredientToRecipeThunk = (newIngredient, recipeId) =>async(dispatch) =>{
    const response = await fetch(`/api/recipes/${recipeId}/add-ingredients`, {
        method:"POST",
        headers:{
            "Content-Type": "application/json", 
        },
        body: JSON.stringify(newIngredient),
    })
    if (response.ok){
        const recipe = await response.json()
        dispatch(addIngredientToRecipe(recipe))
        return null
    } else if(response.status<500){
        const data = await response.json();
        if(data.errors){
            return data.errors;
        }
        else{
            return ['An error occurred. Please try again.']
        }
    }
}


export const addPreparationToRecipeThunk = (newPreparation, recipeId) =>async(dispatch) =>{
    const response = await fetch(`/api/recipes/${recipeId}/add-preparations`,{
        method:"POST",
        headers:{
            "Content-Type": "application/json", 
        },
        body: JSON.stringify(newPreparation),
    })
    if (response.ok){
        const recipe = await response.json()
        dispatch(addPreparationToRecipe(recipe))
        return null
    } else if(response.status<500){
        const data = await response.json();
        if(data.errors){
            return data.errors;
        }
        else{
            return ['An error occurred. Please try again.']
        }
    }
}

export const loadMyRecipesThunk = (id) => async (dispatch) =>{
    const response = await fetch(`/api/recipes/users/${id}`);
    if (response.ok){
        const data = await response.json()
        dispatch(loadMyRecipes(data))
    }
}



export const updateIngredientThunk = (ingredient) =>async(dispatch) =>{
    const response = await fetch(`/api/ingredients/update/${ingredient.id}`,{
        method:"PUT",
        headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(ingredient),
    });
    if(response.ok){
        const data = await response.json()
        await dispatch(updateIngredient(data))
        return null;
    }else if(response.status<500){
        const data = await response.json();
        if(data.errors){
            return data.errors;
        }
        else{
            return ['An error occurred. Please try again.']
        }
    }
}

export const updatePreparaionThunk = (preparation) => async(dispatch)=>{
    const response = await fetch (`/api/preparations/update/${preparation.id}`, {
        method:"PUT",
        headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(preparation),
    })
    if(response.ok){
        const data = await response.json()
        await dispatch(updatePreparaion(data))
        return null;
    }else if(response.status<500){
        const data = await response.json();
        if(data.errors){
            return data.errors;
        }
        else{
            return ['An error occurred. Please try again.']
        }
    }
}

export const deleteIngredientThunk = (ingredient) => async(dispatch) =>{
    const response = await fetch(`/api/ingredients/delete/${ingredient.id}`,{
        method:'DELETE'
    })
    if(response.ok){
        const data = await response.json()
        await dispatch(deleteIngredient(data));
        return null;
    }else if(response.status<500){
        const data = await response.json();
        if(data.errors){
            return data.errors;
        }
        else{
            return ['An error occurred. Please try again.']
        }
    }
}

export const deletePreparationThunk = (preparation) => async(dispatch) =>{
    const response = await fetch(`/api/preparations/delete/${preparation.id}`,{
        method:'DELETE'
    })
    if(response.ok){
        const data = await response.json()
        await dispatch(deletePreparation(data));
        return null;
    }else if(response.status<500){
        const data = await response.json();
        if(data.errors){
            return data.errors;
        }
        else{
            return ['An error occurred. Please try again.']
        }
    }
}



/////////REDUCER/////////////
const initialState = {allRecipes:{}, singleRecipe:{}, myRecipes:{}}
export default function reducer(state = initialState, action){
    switch (action.type) {
        case LOAD_RECIPES:{
            const newState = {
                allRecipes:{},
                singleRecipe:{...state.singleRecipe},
                myRecipes:{...state.myRecipes}
            };
            action.recipes.forEach(recipe => {
                newState.allRecipes[recipe.id]=recipe
            });
            return newState
        }
        case LOAD_SINGLE_RECIPE:{
            const newState ={
                allRecipes:{...state.allRecipes},
                singleRecipe:action.recipe,
                myRecipes: {...state.myRecipes}
            };
            return newState;
        }
        case CREATE_RECIPE:{
            const newState ={
                ...state,
                allRecipes:{...state.allRecipes},
                singleRecipe:action.recipe,
                myRecipes:{...state.myRecipes}
            }
            newState.allRecipes[action.recipe.id]=action.recipe;
            newState.singleRecipe=action.recipe;
            newState.myRecipes[action.recipe.id] = action.recipe
            return newState
        }
        case DELETE_RECIPE:{
            const newState={
                allRecipes:{...state.allRecipes},
                singleRecipe:{},
                myRecipes:{...state.myRecipes}
            };
            delete newState.allRecipes[action.recipeId];
            delete newState.myRecipes[action.recipeId]
            return newState
        }
        case EDIT_RECIPE:{
            const newState = {
                allRecipes:{...state.allRecipes},
                singleRecipe:{...state.singleRecipe},
                myRecipes:{...state.myRecipes}
            };
            newState.allRecipes[action.data.id] = action.data;
            newState.singleRecipe=action.data;
            newState.myRecipes[action.data.id] = action.data;
            return newState;
        }
        case ADD_INGREDIENTS_TO_RECIPE:{
            const newState = {
                allRecipes:{...state.allRecipes},
                singleRecipe:action.recipe,
                myRecipes:{...state.myRecipes}
            }
            newState.allRecipes[action.recipe.id]=action.recipe;
            newState.myRecipes[action.recipe.id] = action.recipe;
            if (Object.values(newState.singleRecipe).length) {
                if (newState.singleRecipe.id === action.recipe.id) {
                  newState.singleRecipe = action.recipe;
                }
              }
            return newState
            
        }
        case ADD_PREPARATION_TO_RECIPE:{
            const newState ={
                allRecipes:{...state.allRecipes},
                singleRecipe:action.recipe,
                myRecipes:{...state.myRecipes}
            }
            newState.allRecipes[action.recipe.id]=action.recipe;
            newState.myRecipes[action.recipe.id]=action.recipe;
            if(Object.values(newState.singleRecipe).length){
                if(newState.singleRecipe.id===action.recipe.id){
                    newState.singleRecipe = action.recipe;
                }
            }
            return newState
        }
        case LOAD_MY_RECPES:{
            const newState = {
                ...state,
                allRecipes: { ...state.allRecipes },
                singleRecipe: { ...state.singleRecipe },
                myRecipes: {},
              };
              
              Object.values(action.data.recipes).forEach((recipe) => {
                newState.myRecipes[recipe.id] = recipe;
              });
              return newState;

        }
        case UPDATE_INGREDIENT:{
           const newState = {
               allRecipes:{...state.allRecipes},
               singleRecipe:action.recipe,
               myRecipes:{...state.myRecipes}
           };
           return newState
        }

        case UPDATE_PREPARATION:{
            const newState = {
                allRecipes:{...state.allRecipes},
                singleRecipe:action.recipe,
                myRecipes:{...state.myRecipes}
            };
            return newState
        }
        case DELETE_INGREDIENT:{
            const newState ={
                allRecipes:{...state.allRecipes},
                singleRecipe:action.recipe,
                myRecipes:{...state.myRecipes}
            };
            return newState

        }
        case DELETE_PREPARATION:{
            const newState={
                allRecipes:{...state.allRecipes},
                singleRecipe:action.recipe,
                myRecipes:{...state.myRecipes}
            }
            return newState
        }
            
        default:
            return state;
    }
}