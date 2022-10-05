// *@desc       Get all bootcamps
// *@route      GET /api/v1/bootcamps
// *@access   	Public
exports.getBootcamps = (req, res, next) => {
  res.status(200).json({ success: true, msg: 'Show All Bootcamps' });
};

// *@desc       Get sinble bootcamps
// *@route      GET /api/v1/bootcamps/:id
// *@access   	Public
exports.getBootcamp = (req, res, next) => {
  res.status(200).json({
    success: true,
    msg: `Get Single Bootcamp with Id: ${req.params.id}`,
  });
};

// *@desc       Create new bootcamps
// *@route      POST /api/v1/bootcamps
// *@access   	Private
exports.createBootcamp = (req, res, next) => {
  res.status(200).json({ success: true, msg: 'Create New Bootcamp' });
};

// *@desc       Update bootcamps
// *@route      PUT /api/v1/bootcamps/:id
// *@access   	Private
exports.updateBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `Update Bootcamp with Id: ${req.params.id}` });
};

// *@desc       Delete bootcamps
// *@route      DElETE /api/v1/bootcamps/:id
// *@access   	Private
exports.deleteBootcamp = (req, res, next) => {
  res.status(200).json({
    success: true,
    msg: `Delete Bootcamp with Id: ${req.params.id}`,
  });
};