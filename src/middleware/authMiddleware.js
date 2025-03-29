export const authenticate = (req, res, next) => {
  const token = req.header("Authorization");
  //console.log("Received Token:", token);
  if (!token || token !== "SecretToken") {
    return res.status(401).json({ error: "Unauthorized" });
  }

  next();
};
