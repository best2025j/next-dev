const Event = require('../models/eventModel');
const cloudinaryUploadImg = require('../utils/cloudinary');

const getAllEvents = async(req, res) => {
    Event.find()
    .select('-__v')
    .exec()
    .then()
}