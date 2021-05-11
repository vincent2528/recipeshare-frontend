const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//========================================================================================
/*                                                                                      *
 *                  getAllRecipe
 *                                                                                      */
//========================================================================================

module.exports.getAllRecipe = async (req, res) => {
  const db = req.app.locals.db;
  const category = req.params.category;

  try {
    if (category != 0) {
      querydata = await db.query(
        "SELECT * FROM recipe_table WHERE category_id=?",
        [category]
      );
    } else {
      querydata = await db.query(
        "SELECT * FROM recipe_table ORDER BY views_count DESC"
      );
    }
    // console.log(querydata[0]);
    res.status(200).json(querydata[0]);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

//========================================================================================
/*                                                                                      *
 *                create recipe
 *                                                                                      */
//========================================================================================

module.exports.createRecipe = async (req, res) => {
  const db = req.app.locals.db;

  try {
    const token = req.header("x-auth-token");
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    if (!verified) return res.json(false);
    user_id = verified.id;

    const {
      recipe_name,
      desc,
      recipe_image,
      time,
      category_id,
      ingredients,
      steps,
    } = req.body;
    console.log(req.body);

    const querydata = await db.query(
      "INSERT INTO recipe_table(creator_id, recipe_name, recipe_desc, recipe_image, no_steps, time_required, category_id) VALUES (?,?,?,?,?,?,1)",
      [
        user_id,
        recipe_name,
        desc,
        recipe_image,
        steps.length,
        time,
        category_id,
      ]
    );
    // console.log(querydata[0].insertId)

    // ingredients table

    for (var i = 0; i < ingredients.length; i++) {
      var query2 = await db.query(
        "INSERT INTO recipe_ingredients_table(recipe_id,instructions) VALUES(?,?)",
        [querydata[0].insertId, ingredients[i]]
      );
    }

    // // steps table

    for (var i = 0; i < ingredients.length; i++) {
      var query2 = await db.query(
        "INSERT INTO step_table(recipe_id,instructions) VALUES(?,?)",
        [querydata[0].insertId, steps[i]]
      );
    }

    res.status(200).json({ message: "Created successfully" });
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: err.message });
  }
};

//========================================================================================
/*                                                                                      *
 *                   getRecipe
 *                                                                                      */
//========================================================================================

module.exports.getRecipe = async (req, res) => {
  const db = req.app.locals.db;

  try {
    const id = req.params.id;

    const querydata = await db.query(
      "SELECT * FROM recipe_table WHERE recipe_id = ?",
      [id]
    );
    const querydata2 = await db.query(
      "SELECT * FROM recipe_ingredients_table WHERE recipe_id = ?",
      [id]
    );
    const querydata3 = await db.query(
      "SELECT * FROM step_table WHERE recipe_id = ?",
      [id]
    );
    const querydata4view = await db.query(
      "UPDATE recipe_table SET views_count = views_count + 1 WHERE recipe_id = ?",
      [id]
    );
    const mega = [querydata[0], querydata2[0], querydata3[0]];
    // console.log(mega);
    res.status(200).json(mega);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

//========================================================================================
/*                                                                                      *
 *                   delete recipe
 *                                                                                      */
//========================================================================================

module.exports.deleteRecipe = async (req, res) => {
  const db = req.app.locals.db;

  try {
    const token = req.header("x-auth-token");
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    if (!verified) return res.json(false);

    const user_id = verified.id;
    const recipeid = req.params.recipeid;

    const checkCreator = await db.query(
      "SELECT * FROM recipe_table WHERE recipe_id = ?",
      [recipeid]
    );
    // console.log(checkCreator[0][0]);

    if (!checkCreator[0][0] || checkCreator[0][0].creator_id != user_id) {
      res.status(401).json({ message: "Not authorized!!!!!!!!" });
    } else {
      const querydata = await db.query(
        "DELETE FROM recipe_table WHERE recipe_id = ?",
        [recipeid]
      );
      res.status(200).json({ message: "Recipe removed successfully" });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

//========================================================================================
/*                                                                                      *
 *          get getUsersInGroup (anyone in the group can get the all users)
 *                                                                                      */
//========================================================================================

module.exports.getUsersInGroup = async (req, res) => {
  const db = req.app.locals.db;

  try {
    const token = req.header("x-auth-token");
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    if (!verified) return res.json(false);
    const user_id = verified.id;
    const groupid = req.params.groupid;

    const checkIfInGroup = await db.query(
      "SELECT * FROM group_connections WHERE user_id = ? AND groupid = ? ",
      [user_id, groupid]
    );

    if (!checkIfInGroup[0][0]) {
      res.status(401).json({ message: "Not authorized!!!!!!!!" });
    } else {
      const usersdata = await db.query(
        "SELECT username, user_id, profile_pic FROM user_table WHERE user_id IN (SELECT user_id FROM group_connections WHERE groupid=?) ",
        [groupid]
      );
      res.status(200).json(usersdata[0]);
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

//========================================================================================
/*                                                                                      *
 *      Join group using invite ( check if the invite is valid, & not in group then add)
 *                                                                                      */
//========================================================================================

module.exports.joinUsingInvite = async (req, res) => {
  const db = req.app.locals.db;

  try {
    const token = req.header("x-auth-token");
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    if (!verified) return res.json(false);
    const user_id = verified.id;
    const encoded = req.params.groupid;
    var groupid = atob(encoded).substring(4);
    // console.log(groupid);
    const checkIfInGroup = await db.query(
      "SELECT * FROM group_connections WHERE user_id = ? AND groupid = ? ",
      [user_id, groupid]
    );

    if (checkIfInGroup[0][0]) {
      res.status(401).json({ message: "You are already in this server" });
    } else {
      const querydata = await db.query(
        "INSERT INTO group_connections VALUES (?,?) ",
        [user_id, groupid]
      );
      res.status(200).json({ message: groupid });
    }
  } catch (err) {
    res.status(500).json({
      message:
        "Don't try to guess it xD\nIf you break the pattern message me for a gift",
    });
  }
};

//========================================================================================
/*                                                                                      *
 *                              user getMyGroups
 *                                                                                      */
//========================================================================================

module.exports.getMyGroups = async (req, res) => {
  const db = req.app.locals.db;
  try {
    const token = req.header("x-auth-token");
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    if (!verified) return res.json(false);

    const querydata = await db.query(
      "SELECT g_id, g_name, g_desc, g_members, g_creator_id, g_pp FROM group_table WHERE g_id IN (SELECT groupid FROM group_connections WHERE user_id=?) ",
      [verified.id]
    );

    res.status(200).send(querydata[0]);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

//========================================================================================
/*                admin change group type  */
//========================================================================================

module.exports.changeGroupType = async (req, res) => {
  const db = req.app.locals.db;
  try {
    const token = req.header("x-auth-token");
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    if (!verified) return res.json(false);
    const { groupid, newtype } = req.body;
    user_id = verified.id;

    const checkAdmin = await db.query(
      "SELECT * FROM group_table WHERE g_id = ?",
      [groupid]
    );

    if (!checkAdmin[0][0] || checkAdmin[0][0].g_creator_id != user_id) {
      res.status(401).json({ message: "Not authorized!!!!!!!!" });
    } else {
      const querydata = await db.query(
        "UPDATE group_table SET g_type = ? WHERE g_id = ?",
        [newtype, groupid]
      );
      res.status(200).json({ message: "Type updated success" });
    }
  } catch (err) {
    res.status(405).json({ message: err.message });
  }
};

module.exports.updatepp = async (req, res) => {
  const db = req.app.locals.db;

  try {
    const token = req.header("x-auth-token");
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    if (!verified) return res.json(false);
    const user_id = verified.id;
    const groupid = req.params.groupid;
    const { g_pp } = req.body;
    console.log(groupid, g_pp);
    const checkIfInGroup = await db.query(
      "SELECT * FROM group_connections WHERE user_id = ? AND groupid = ? ",
      [user_id, groupid]
    );

    if (!checkIfInGroup[0][0]) {
      res.status(401).json({ message: "Not authorized!!!!!!!!" });
    } else {
      await db.query("UPDATE group_table SET g_pp = ? WHERE g_id = ?", [
        g_pp,
        groupid,
      ]);

      res.status(200).json({ message: "updated" });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
