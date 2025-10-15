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
const Role = require("../models/Role");

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
    const limit = parseInt(req.query.limit) || 5;
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
    const limit = parseInt(req.query.limit) || 5;
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
    const limit = parseInt(req.query.limit) || 5;
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
    const limit = parseInt(req.query.limit) || 5;
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
    const limit = parseInt(req.query.limit) || 5;
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
    const limit = parseInt(req.query.limit) || 5;
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
    const limit = parseInt(req.query.limit) || 5;
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
    const limit = parseInt(req.query.limit) || 5;
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
    const limit = parseInt(req.query.limit) || 5;
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
    const limit = parseInt(req.query.limit) || 5;
    const { items: wards, pagination } = await paginateModel(Ward, page, limit);

    res.json({ wards, pagination });
  } catch (error) {
    console.error("Error fetching wards:", error);
    res.status(500).json({ message: "Server error" });
  }
};

const getRole = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 5;
    const { items: roles, pagination } = await paginateModel(Role, page, limit);

    res.json({ roles, pagination });
  } catch (error) {
    console.error("Error fetching roles:", error);
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

// Create functions
const createUser = async (req, res) => {
  try {
    const { firstName, lastName, email, phone, role } = req.body;
    const newUser = new User({ firstName, lastName, email, phone, role });
    await newUser.save();
    res
      .status(201)
      .json({ message: "User created successfully", user: newUser });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ message: "Server error" });
  }
};

const createBlockType = async (req, res) => {
  try {
    const { blockTypeName } = req.body;
    const newBlockType = new BlockType({ blockTypeName });
    await newBlockType.save();
    res.status(201).json({
      message: "Block type created successfully",
      blockType: newBlockType,
    });
  } catch (error) {
    console.error("Error creating block type:", error);
    res.status(500).json({ message: "Server error" });
  }
};

const createSurveyTopic = async (req, res) => {
  try {
    const { surveyTopicName } = req.body;
    const newSurveyTopic = new SurveyTopic({ surveyTopicName });
    await newSurveyTopic.save();
    res.status(201).json({
      message: "Survey topic created successfully",
      surveyTopic: newSurveyTopic,
    });
  } catch (error) {
    console.error("Error creating survey topic:", error);
    res.status(500).json({ message: "Server error" });
  }
};

const createQuestionType = async (req, res) => {
  try {
    const { questionTypeName } = req.body;
    const newQuestionType = new QuestionType({ questionTypeName });
    await newQuestionType.save();
    res.status(201).json({
      message: "Question type created successfully",
      questionType: newQuestionType,
    });
  } catch (error) {
    console.error("Error creating question type:", error);
    res.status(500).json({ message: "Server error" });
  }
};

const createQBCategory = async (req, res) => {
  try {
    const { qbCategoryName } = req.body;
    const newQBCategory = new QBCategory({ qbCategoryName });
    await newQBCategory.save();
    res.status(201).json({
      message: "QB category created successfully",
      qbCategory: newQBCategory,
    });
  } catch (error) {
    console.error("Error creating QB category:", error);
    res.status(500).json({ message: "Server error" });
  }
};

const createSurveyType = async (req, res) => {
  try {
    const { surveyTypeName } = req.body;
    const newSurveyType = new SurveyType({ surveyTypeName });
    await newSurveyType.save();
    res.status(201).json({
      message: "Survey type created successfully",
      surveyType: newSurveyType,
    });
  } catch (error) {
    console.error("Error creating survey type:", error);
    res.status(500).json({ message: "Server error" });
  }
};

const createCorporation = async (req, res) => {
  try {
    const { corporationName } = req.body;
    const newCorporation = new Corporation({ corporationName });
    await newCorporation.save();
    res.status(201).json({
      message: "Corporation created successfully",
      corporation: newCorporation,
    });
  } catch (error) {
    console.error("Error creating corporation:", error);
    res.status(500).json({ message: "Server error" });
  }
};

const createDesignation = async (req, res) => {
  try {
    const { designationName } = req.body;
    const newDesignation = new Designation({ designationName });
    await newDesignation.save();
    res.status(201).json({
      message: "Designation created successfully",
      designation: newDesignation,
    });
  } catch (error) {
    console.error("Error creating designation:", error);
    res.status(500).json({ message: "Server error" });
  }
};

const createAssemblyConstituency = async (req, res) => {
  try {
    const { assemblyName } = req.body;
    const newAssembly = new AssemblyConstituency({ assemblyName });
    await newAssembly.save();
    res.status(201).json({
      message: "Assembly constituency created successfully",
      assembly: newAssembly,
    });
  } catch (error) {
    console.error("Error creating assembly constituency:", error);
    res.status(500).json({ message: "Server error" });
  }
};

const createWard = async (req, res) => {
  try {
    const { oldWardNumber, oldWardName } = req.body;
    const newWard = new Ward({ oldWardNumber, oldWardName });
    await newWard.save();
    res
      .status(201)
      .json({ message: "Ward created successfully", ward: newWard });
  } catch (error) {
    console.error("Error creating ward:", error);
    res.status(500).json({ message: "Server error" });
  }
};

const createRole = async (req, res) => {
  try {
    const { roleName } = req.body;
    const newRole = new Role({ roleName });
    await newRole.save();
    res.status(201).json({
      message: "Role created successfully",
      role: newRole,
    });
  } catch (error) {
    console.error("Error creating role:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// Update functions
const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { firstName, lastName, email, role } = req.body;

    const updates = { firstName, lastName, email, role }; // make sure role is correct

    const updatedUser = await User.findByIdAndUpdate(id, updates, {
      new: true,
    });

    if (!updatedUser)
      return res.status(404).json({ message: "User not found" });

    res.json({ message: "User updated successfully", user: updatedUser });
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

const updateBlockType = async (req, res) => {
  try {
    const { id } = req.params;
    const { blockTypeName } = req.body;
    const updatedBlockType = await BlockType.findByIdAndUpdate(
      id,
      { blockTypeName },
      { new: true }
    );
    if (!updatedBlockType)
      return res.status(404).json({ message: "Block type not found" });
    res.json({
      message: "Block type updated successfully",
      blockType: updatedBlockType,
    });
  } catch (error) {
    console.error("Error updating block type:", error);
    res.status(500).json({ message: "Server error" });
  }
};

const updateSurveyTopic = async (req, res) => {
  try {
    const { id } = req.params;
    const { surveyTopicName } = req.body;
    const updatedSurveyTopic = await SurveyTopic.findByIdAndUpdate(
      id,
      { surveyTopicName },
      { new: true }
    );
    if (!updatedSurveyTopic)
      return res.status(404).json({ message: "Survey topic not found" });
    res.json({
      message: "Survey topic updated successfully",
      surveyTopic: updatedSurveyTopic,
    });
  } catch (error) {
    console.error("Error updating survey topic:", error);
    res.status(500).json({ message: "Server error" });
  }
};

const updateQuestionType = async (req, res) => {
  try {
    const { id } = req.params;
    const { questionTypeName } = req.body;
    const updatedQuestionType = await QuestionType.findByIdAndUpdate(
      id,
      { questionTypeName },
      { new: true }
    );
    if (!updatedQuestionType)
      return res.status(404).json({ message: "Question type not found" });
    res.json({
      message: "Question type updated successfully",
      questionType: updatedQuestionType,
    });
  } catch (error) {
    console.error("Error updating question type:", error);
    res.status(500).json({ message: "Server error" });
  }
};

const updateQBCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const { qbCategoryName } = req.body;
    const updatedQBCategory = await QBCategory.findByIdAndUpdate(
      id,
      { qbCategoryName },
      { new: true }
    );
    if (!updatedQBCategory)
      return res.status(404).json({ message: "QB category not found" });
    res.json({
      message: "QB category updated successfully",
      qbCategory: updatedQBCategory,
    });
  } catch (error) {
    console.error("Error updating QB category:", error);
    res.status(500).json({ message: "Server error" });
  }
};

const updateSurveyType = async (req, res) => {
  try {
    const { id } = req.params;
    const { surveyTypeName } = req.body;
    const updatedSurveyType = await SurveyType.findByIdAndUpdate(
      id,
      { surveyTypeName },
      { new: true }
    );
    if (!updatedSurveyType)
      return res.status(404).json({ message: "Survey type not found" });
    res.json({
      message: "Survey type updated successfully",
      surveyType: updatedSurveyType,
    });
  } catch (error) {
    console.error("Error updating survey type:", error);
    res.status(500).json({ message: "Server error" });
  }
};

const updateCorporation = async (req, res) => {
  try {
    const { id } = req.params;
    const { corporationName } = req.body;
    const updatedCorporation = await Corporation.findByIdAndUpdate(
      id,
      { corporationName },
      { new: true }
    );
    if (!updatedCorporation)
      return res.status(404).json({ message: "Corporation not found" });
    res.json({
      message: "Corporation updated successfully",
      corporation: updatedCorporation,
    });
  } catch (error) {
    console.error("Error updating corporation:", error);
    res.status(500).json({ message: "Server error" });
  }
};

const updateDesignation = async (req, res) => {
  try {
    const { id } = req.params;
    const { designationName } = req.body;
    const updatedDesignation = await Designation.findByIdAndUpdate(
      id,
      { designationName },
      { new: true }
    );
    if (!updatedDesignation)
      return res.status(404).json({ message: "Designation not found" });
    res.json({
      message: "Designation updated successfully",
      designation: updatedDesignation,
    });
  } catch (error) {
    console.error("Error updating designation:", error);
    res.status(500).json({ message: "Server error" });
  }
};

const updateAssemblyConstituency = async (req, res) => {
  try {
    const { id } = req.params;
    const { assemblyName } = req.body;
    const updatedAssembly = await AssemblyConstituency.findByIdAndUpdate(
      id,
      { assemblyName },
      { new: true }
    );
    if (!updatedAssembly)
      return res
        .status(404)
        .json({ message: "Assembly constituency not found" });
    res.json({
      message: "Assembly constituency updated successfully",
      assembly: updatedAssembly,
    });
  } catch (error) {
    console.error("Error updating assembly constituency:", error);
    res.status(500).json({ message: "Server error" });
  }
};

const updateWard = async (req, res) => {
  try {
    const { id } = req.params;
    const { oldWardNumber, oldWardName } = req.body;
    const updatedWard = await Ward.findByIdAndUpdate(
      id,
      { oldWardNumber, oldWardName },
      { new: true }
    );
    if (!updatedWard)
      return res.status(404).json({ message: "Ward not found" });
    res.json({ message: "Ward updated successfully", ward: updatedWard });
  } catch (error) {
    console.error("Error updating ward:", error);
    res.status(500).json({ message: "Server error" });
  }
};

const updateRole = async (req, res) => {
  try {
    const { id } = req.params;
    const { roleName } = req.body;
    const updatedRole = await Role.findByIdAndUpdate(
      id,
      { roleName },
      { new: true }
    );
    if (!updatedRole)
      return res.status(404).json({ message: "Role not found" });
    res.json({
      message: "Role updated successfully",
      role: updatedRole,
    });
  } catch (error) {
    console.error("Error updating role:", error);
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
  getRole,
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
  createRole,
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
  updateRole,
};
