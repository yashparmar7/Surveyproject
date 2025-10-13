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

// Helper to paginate any model
const paginateModel = async (Model, page, limit, populateField = null) => {
  const skip = (page - 1) * limit;
  const totalItems = await Model.countDocuments();
  let query = Model.find().skip(skip).limit(limit).sort({ createdAt: -1 });
  if (populateField) query = query.populate(populateField);
  const items = await query;
  const totalPages = Math.ceil(totalItems / limit);
  return {
    items,
    pagination: {
      currentPage: page,
      totalPages,
      totalItems,
      itemsPerPage: limit,
    },
  };
};

const getUser = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const { items: users, pagination } = await paginateModel(
      User,
      page,
      limit,
      "role"
    );

    res.json({ users, pagination });
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ message: "Server error" });
  }
};

const getBlockType = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const { items: blockTypes, pagination } = await paginateModel(
      BlockType,
      page,
      limit
    );

    res.json({ blockTypes, pagination });
  } catch (error) {
    console.error("Error fetching block types:", error);
    res.status(500).json({ message: "Server error" });
  }
};

const getSurveyTopic = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const { items: surveyTopics, pagination } = await paginateModel(
      SurveyTopic,
      page,
      limit
    );

    res.json({ surveyTopics, pagination });
  } catch (error) {
    console.error("Error fetching survey topics:", error);
    res.status(500).json({ message: "Server error" });
  }
};

const getQuestionType = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const { items: questionTypes, pagination } = await paginateModel(
      QuestionType,
      page,
      limit
    );

    res.json({ questionTypes, pagination });
  } catch (error) {
    console.error("Error fetching question types:", error);
    res.status(500).json({ message: "Server error" });
  }
};

const getQBCategory = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const { items: qbCategories, pagination } = await paginateModel(
      QBCategory,
      page,
      limit
    );

    res.json({ qbCategories, pagination });
  } catch (error) {
    console.error("Error fetching QB categories:", error);
    res.status(500).json({ message: "Server error" });
  }
};

const getSurveyType = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const { items: surveyTypes, pagination } = await paginateModel(
      SurveyType,
      page,
      limit
    );

    res.json({ surveyTypes, pagination });
  } catch (error) {
    console.error("Error fetching survey types:", error);
    res.status(500).json({ message: "Server error" });
  }
};

const getCorporation = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const { items: corporations, pagination } = await paginateModel(
      Corporation,
      page,
      limit
    );

    res.json({ corporations, pagination });
  } catch (error) {
    console.error("Error fetching corporations:", error);
    res.status(500).json({ message: "Server error" });
  }
};

const getDesignation = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const { items: designations, pagination } = await paginateModel(
      Designation,
      page,
      limit
    );

    res.json({ designations, pagination });
  } catch (error) {
    console.error("Error fetching designations:", error);
    res.status(500).json({ message: "Server error" });
  }
};

const getAssemblyConstituency = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const { items: assemblies, pagination } = await paginateModel(
      AssemblyConstituency,
      page,
      limit
    );

    res.json({ assemblies, pagination });
  } catch (error) {
    console.error("Error fetching assembly constituencies:", error);
    res.status(500).json({ message: "Server error" });
  }
};

const getWard = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const { items: wards, pagination } = await paginateModel(Ward, page, limit);

    res.json({ wards, pagination });
  } catch (error) {
    console.error("Error fetching wards:", error);
    res.status(500).json({ message: "Server error" });
  }
};

const getReports = async (req, res) => {
  try {
    // Reports are static; pagination optional
    const reports = [
      { _id: "1", reportName: "D2D Conversion Rate" },
      { _id: "2", reportName: "Volunteer Signed Up" },
      { _id: "3", reportName: "BNP Members Count" },
      { _id: "4", reportName: "Top 3 Civic Issues" },
      { _id: "5", reportName: "Residents with Voter ID" },
    ];
    res.json({
      reports,
      pagination: {
        currentPage: 1,
        totalPages: 1,
        totalItems: reports.length,
        itemsPerPage: reports.length,
      },
    });
  } catch (error) {
    console.error("Error fetching reports:", error);
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
  getReports,
};
