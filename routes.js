const router = require("express").Router();
const auth = require("./middleware/auth");

//========================================================================================
/*                                                                                      *
 *                              User Routes
 *                                                                                      */
//========================================================================================

const User = require("./controllers/userController");

router.post("/user/register", User.signUp);
router.post("/user/login", User.login);
router.patch("/user/updateuser", auth, User.updateuser);
router.get("/user/checkToken", User.checkToken);

/*
view users page
*/

// router.get("/user/getusername/:userid", User.getusername);

// //========================================================================================
// /*                                                                                      *
//  *                              Recipe Routes
//  *                                                                                      */
// //========================================================================================

/*
view bookmarks
add to bookmarks
remove from bookmarks
rate a recipe
comment on recipe
delete a comment
add user and recipe to viewed
*/

const Recipe = require("./controllers/recipeController");

router.get("/recipe/all/:category", Recipe.getAllRecipe);
router.post("/recipe/create", auth, Recipe.createRecipe);
router.get("/recipe/:id", Recipe.getRecipe);
router.delete("/recipe/delete/:recipeid", auth, Recipe.deleteRecipe);

// router.post("/recipe/remove/:recipeid/:userid", auth, Recipe.removePerson);
// router.delete("/recipe/leaverecipe/:recipeid", auth, Recipe.leaveRecipe);
// router.get("/recipe/recipeinvite/:recipeid", auth, Recipe.createInvite);
// router.post("/recipe/recipeinvite/:recipeid", auth, Recipe.joinUsingInvite);
// router.patch("/recipe/changerecipetype", auth, Recipe.changeRecipeType);
// router.get("/recipe/users/:recipeid", auth, Recipe.getUsersInRecipe);
// router.post("/recipe/updatepp/:recipeid", auth, Recipe.updatepp);

module.exports = router;
