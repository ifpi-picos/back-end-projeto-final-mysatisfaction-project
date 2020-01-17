class UserController {
  constructor(User) {
    this.User = User;
  }

  async get(req, res) {
    try {
      const users = await this.User.find({});
      res.send(users);
    } catch (err) {
      res.status(400).send(err.message);
    }
  }

  async getById(req, res) {
    const {
      params: { id }
    } = req;

    try {
      const user = await this.User.find({ _id: id });
      res.send(user);
    } catch (err) {
      res.status(400).send(err.message);
    }
  }

}

export default UserController;
