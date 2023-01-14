const createCode = async (req, res) => {
  res.send("Create code");
};

const getAllCode = async (req, res) => {
  res.send("Get All code");
};

const updateCode = async (req, res) => {
  res.send("Update code");
};

const deleteCode = async (req, res) => {
  res.send("Delete code");
};

export { createCode, getAllCode, updateCode, deleteCode };
