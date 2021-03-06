module.exports = {
  getAll: (req, res) => {
    const db = req.app.get('db');

    db.get_all_houses().then(resp => {
      res.status(200).send(resp);
    });
  },

  addHouse: (req, res) => {
    const db = req.app.get('db')
    const{name, address, city, state, zip} = req.body;

    db.create_house(name, address, city, state, zip).then(resp => {
      res.status(200).send(resp)
    })
  },

  destroyHouse: (req, res) => {
    const db = req.app.get('db');
    const {id} = req.params;

    db.destroy_house(id).then(resp => {
      res.status(200).send(resp)
    })
  }
}