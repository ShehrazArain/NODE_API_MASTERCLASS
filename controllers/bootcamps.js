// @desc    	GET all bootcamps
// @route       GET /api/v1/bootcamps
// @access      Public
exports.getBootcamps = (req, res) => {
  res
    .status(200)
    .json({ success: true, msg: 'Get all bootcamps', User: req.hello });
};

// @desc       GET single bootcamps
// route       GET /api/v1/bootcamps/:id
// access      Public
exports.getBootcamp = (req, res) => {
  res
    .status(200)
    .json({ success: true, msg: `Get a Bootcamp ${req.params.id}` });
};

// @desc       Create new Bootcamps
// route       GET /api/v1/bootcamps
// access      Private
exports.createBootcamp = (req, res, next) => {
  res.status(200).json({ success: ture, msg: 'Create a Bootcamp' });
};

// @desc      Update Bootcamps
// route      PUT /api/v1/bootcamps
// access     Private
exports.updateBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `Update a Bootcamp ${req.params.id}` });
};

// @desc     Delete a Bootcamp
// route     DELETE /api/v1/bootcamps
// access    Private
exports.deleteBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `delete a bootcamp ${req.params.id}` });
};
