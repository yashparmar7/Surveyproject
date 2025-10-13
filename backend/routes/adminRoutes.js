const express = require("express");
const {
  getUser,
  getBlockType,
  getSurveyTopic,
  getQuestionType,
  getQBCategory,
  getSurveyType,
  getCorporation,
  getDesignation,
  getAssemblyConstituency,
  getWard,
} = require("../controllers/adminController");

const router = express.Router();

router.get("/get-user", getUser);
router.get("/get-blocktype", getBlockType);
router.get("/get-surveytopic", getSurveyTopic);
router.get("/get-questiontype", getQuestionType);
router.get("/get-qbcategory", getQBCategory);
router.get("/get-surveytype", getSurveyType);
router.get("/get-corporation", getCorporation);
router.get("/get-designation", getDesignation);
router.get("/get-assemblyconstituency", getAssemblyConstituency);
router.get("/get-ward", getWard);

module.exports = router;
