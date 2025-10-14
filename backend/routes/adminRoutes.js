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
  getReports,
  createUser,
  createBlockType,
  createSurveyTopic,
  createQuestionType,
  createQBCategory,
  createSurveyType,
  createCorporation,
  createDesignation,
  createAssemblyConstituency,
  createWard,
  updateUser,
  updateBlockType,
  updateSurveyTopic,
  updateQuestionType,
  updateQBCategory,
  updateSurveyType,
  updateCorporation,
  updateDesignation,
  updateAssemblyConstituency,
  updateWard,
} = require("../controllers/adminController");

const router = express.Router();

// GET routes
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
router.get("/get-reports", getReports);

router.post("/create-role", createUser);
router.post("/create-blocktype", createBlockType);
router.post("/create-surveytopic", createSurveyTopic);
router.post("/create-questiontype", createQuestionType);
router.post("/create-qbcategory", createQBCategory);
router.post("/create-surveytype", createSurveyType);
router.post("/create-corporation", createCorporation);
router.post("/create-designation", createDesignation);
router.post("/create-assembly", createAssemblyConstituency);
router.post("/create-wards", createWard);

router.put("/update-role/:id", updateUser);
router.put("/update-blocktype/:id", updateBlockType);
router.put("/update-surveytopic/:id", updateSurveyTopic);
router.put("/update-questiontype/:id", updateQuestionType);
router.put("/update-qbcategory/:id", updateQBCategory);
router.put("/update-surveytype/:id", updateSurveyType);
router.put("/update-corporation/:id", updateCorporation);
router.put("/update-designation/:id", updateDesignation);
router.put("/update-assembly/:id", updateAssemblyConstituency);
router.put("/update-wards/:id", updateWard);

module.exports = router;
