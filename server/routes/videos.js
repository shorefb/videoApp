import express from "express";
import {
  addVideo,
  updateVideo,
  deleteVideo,
  getVideo,
  addView,
  trend,
  random,
  sub,
  search,
  getByTag,
} from "../controllers/video.js";
import { verifyToken } from "../verifyToken.js";

const router = express.Router();

// create a video
router.post("/", verifyToken, addVideo);

// update a video
router.put("/:id", verifyToken, updateVideo);

// delete a video
router.delete("/:id", verifyToken, deleteVideo);

// get a video
router.get("/find/:id", getVideo);

// add a view
router.put("/view/:id", addView);

// get a trend
router.get("/trend", trend);

// get a random video
router.get("/random", random);

// get a subscription
router.get("/sub", verifyToken, sub);

// get a video by tag
router.get("/tags", getByTag);

// get a video by title
router.get("/search", search);

export default router;
