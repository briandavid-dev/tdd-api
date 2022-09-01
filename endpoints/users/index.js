const apiJson = "https://jsonplaceholder.typicode.com";

const handlers = ({ axios }) => ({
  get: async function (req, res) {
    const { data } = await axios.get(`${apiJson}/users`);
    res.status(200).send(data);
  },
  post: async function (req, res) {
    const { data } = await axios.post(`${apiJson}/users`);

    res.status(201).json(data);
  },
  put: async function (req, res) {
    const { body } = req;
    const { id } = req.params;
    const { data } = await axios.put(`${apiJson}/users/${id}`, body);
    res.status(204).json(data);
  },
  delete: async function (req, res) {
    const { id } = req.params;
    const { data } = await axios.put(`${apiJson}/users/${id}`);
    res.status(204).json(data);
  },
});

module.exports = handlers;
