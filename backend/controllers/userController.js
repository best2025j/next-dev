const User = require('../models/userModel');


// Gets all users
const getAllUsers = async(req, res) => {
    User.find()
    .select('-__v')
    .exec()
    .then(users => {

        res.status(200).json({
            count: users.length,
            users: users.map(user => {
                return {
                    id: user._id,
                    firstname: user.firstname,
                    lastname: user.lastname,
                    email: user.email,
                    courses: user.courses,
                    request: {
                        type: 'GET',
                        url: `https://localhost:4000/api/users` + user._id
                    }
                }
            })
        })
    })
    .catch(err => {
        res.status(500)
        .json({
            error: err
        })
    })
}

// Gets a user
const getAUser = async(req, res) => {
    const { id } = req.params;

    // Checks if the id is a valid
    if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(401).json({ error: 'Invalid ID' });
  }

    User.findById(id)
    .select('-__v')
    .exec()
    .then(user => {
        res.status(200).json({
            user,
            request: {
                type: 'GET',
                url: `https://localhost/api/users/`
            }
        });
    })
    .catch(err => {
        res.status(500).json({
            error: err
        })
    })

}
const deleteUser = async (req, res) => {
    const { id } = req.params;

    // Checks if the id is a valid
    if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(401).json({ error: 'Invalid ID' });
  }

  // Checks if user with ID exists
  const exists = await User.findById(id);

  if (!exists) return res.status(401).json({ error: 'User does not exist' });

  User.findByIdAndDelete(id)
  .exec()
  .then(result => {
    res.status(200).json({
        message: 'User deleted successfully',
        request: {
            type: 'GET',
            url: 'https://localhost/api/users'
        }
    })
  })
  .catch(err => {
    res.status(500).json({ error: err });
  })


}
module.exports = {getAUser, getAllUsers, deleteUser }