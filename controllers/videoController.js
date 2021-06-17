const Video = require('../models/videoModel');
const ApiFeatures = require('../utils/apiFeatures');

exports.getAllVideos = async (req, res) => {
  try {
    const query = Video.find();
    const queryStr = req.query;
    const apiFeatures = new ApiFeatures(query, queryStr);
    apiFeatures.filter().sort().limitFields().paginate();

    //execute query
    const videos = await apiFeatures.query;

    //send response
    res.status(200).json({
      status: 'success',
      data: {
        videos,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err.message,
    });
  }
};

exports.getVideo = async (req, res) => {
  try {
    const video = await Video.findById(req.params.id);
    res.status(200).json({
      status: 'success',
      data: {
        video,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.createVideo = async (req, res) => {
  try {
    const newVideo = await Video.create(req.body);
    res.status(201).json({
      status: 'success',
      data: {
        video: newVideo,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.updateVideo = async (req, res) => {
  try {
    const video = await Video.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
      status: 'success',
      data: {
        video,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.deleteVideo = async (req, res) => {
  try {
    await Video.findByIdAndDelete(req.params.id);
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
