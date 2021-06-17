const Source = require('../models/sourceModel');
const ApiFeatures = require('../utils/apiFeatures');

exports.getAllSources = async (req, res) => {
  try {
    const query = Source.find();
    const queryStr = req.query;
    const apiFeatures = new ApiFeatures(query, queryStr);
    apiFeatures.filter().sort().limitFields().paginate();

    //execute query
    const resources = await apiFeatures.query;

    //send response
    res.status(200).json({
      status: 'success',
      data: {
        resources,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err.message,
    });
  }
};

exports.getSource = async (req, res) => {
  try {
    const resource = await Source.findById(req.params.id);
    res.status(200).json({
      status: 'success',
      data: {
        resource,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.createSource = async (req, res) => {
  try {
    const newSource = await Source.create(req.body);
    res.status(201).json({
      status: 'success',
      data: {
        resource: newSource,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.updateSource = async (req, res) => {
  try {
    const resource = await Source.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
      status: 'success',
      data: {
        resource,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.deleteSource = async (req, res) => {
  try {
    await Source.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: 'success',
      data: null,
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};
