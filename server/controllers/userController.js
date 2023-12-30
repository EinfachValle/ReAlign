const authUser = (req, res) => {
  res.send(200).json({ message: "Auth User" });
};

export { authUser };
