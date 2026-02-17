exports.getAdminData = async (req, res) => {
  res.json({
    message: "Welcome Admin",
    user: req.user
  });
};
