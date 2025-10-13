const User = require("../models/User");
const BlockType = require("../models/BlockType");
const SurveyTopic = require("../models/SurveyTopic");
const QuestionType = require("../models/QuestionType");
const QBCategory = require("../models/QBCategory");
const SurveyType = require("../models/SurveyType");
const Corporation = require("../models/Corporation");
const Designation = require("../models/Designation");
const AssemblyConstituency = require("../models/AssemblyConstituency");
const Ward = require("../models/Ward");

const getUser = async (req, res) => {
  try {
    const users = await User.find().populate("role");
    if (!users || users.length === 0) {
      return res.status(404).json({ message: "No users found", users: [] });
    }
    res.json(users);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};
const getBlockType = async (req, res) => {
  try {
    const blockTypes = await BlockType.find();
    if (!blockTypes || blockTypes.length === 0) {
      return res.status(404).json({ message: "No block types found" });
    }
    res.json(blockTypes);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

const getSurveyTopic = async (req, res) => {
  try {
    const surveyTopics = await SurveyTopic.find();
    if (!surveyTopics || surveyTopics.length === 0) {
      return res.status(404).json({ message: "No survey topics found" });
    }
    res.json(surveyTopics);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

const getQuestionType = async (req, res) => {
  try {
    const questionTypes = await QuestionType.find();
    if (!questionTypes || questionTypes.length === 0) {
      return res.status(404).json({ message: "No question types found" });
    }
    res.json(questionTypes);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

const getQBCategory = async (req, res) => {
  try {
    const qBCategories = await QBCategory.find();
    if (!qBCategories || qBCategories.length === 0) {
      return res.status(404).json({ message: "No question types found" });
    }
    res.json(qBCategories);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

const getSurveyType = async (req, res) => {
  try {
    const surveyTypes = await SurveyType.find();
    if (!surveyTypes || surveyTypes.length === 0) {
      return res.status(404).json({ message: "No survey types found" });
    }
    res.json(surveyTypes);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

const getCorporation = async (req, res) => {
  try {
    const corporations = await Corporation.find();
    if (!corporations || corporations.length === 0) {
      return res.status(404).json({ message: "No corporations found" });
    }
    res.json(corporations);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

const getDesignation = async (req, res) => {
  try {
    const designations = await Designation.find();
    if (!designations || designations.length === 0) {
      return res.status(404).json({ message: "No designations found" });
    }
    res.json(designations);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

const getAssemblyConstituency = async (req, res) => {
  try {
    const assemblyConstituencies = await AssemblyConstituency.find();
    if (!assemblyConstituencies || assemblyConstituencies.length === 0) {
      return res
        .status(404)
        .json({ message: "No assembly constituencies found" });
    }
    res.json(assemblyConstituencies);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

const getWard = async (req, res) => {
  try {
    const wards = await Ward.find();
    if (!wards || wards.length === 0) {
      return res.status(404).json({ message: "No wards found" });
    }
    res.json(wards);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = {
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
};
