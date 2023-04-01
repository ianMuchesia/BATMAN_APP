const express = require("express");
const authenticateUser = require("../middlewares/authentication");
const {
  postRequest,
  generateImageRequest,
} = require("../controllers/postDalleRoute");
const {
  getAllPosts,
  getMyAllPosts,
  getSinglePost,
  getMySinglePost,
  deleteMyPost,
} = require("../controllers/getDalleRoute");
const router = express.Router();

router.post("/community", authenticateUser, postRequest);
router.post("/image", generateImageRequest);
router.get("/posts", getAllPosts);
router.get("/posts/:id", getSinglePost);
router.get("/userposts", authenticateUser, getMyAllPosts);
router.get("/userposts/:id", authenticateUser, getMySinglePost);
router.delete("/userposts/:id", authenticateUser, deleteMyPost);

module.exports = router;
