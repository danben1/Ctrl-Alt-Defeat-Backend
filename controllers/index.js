//import * as Model from "../models/index.js";

export async function searchCityByName(req, res) {
    const city = req.query.city;
    res.json({ success: true, payload: city });
}

// export async function getAuthorById(req, res) {
//   const author = await authorModel.getAuthorById(req.params.id);
//   res.json({ success: true, payload: author });
// }

// export async function createAuthor(req, res) {
//   const data = req.body;
//   const author = await authorModel.createAuthor(data);
//   res.json({ success: true, payload: author });
// }

// export async function updateAuthorById(req, res) {
//   const data = req.body;
//   const author = await authorModel.updateAuthorById(req.params.id, data);
//   res.json({ success: true, payload: author });
// }

// export async function deleteAuthorById(req, res) {
//   const author = await authorModel.deleteAuthorById(req.params.id);
//   res.json({ success: true, payload: author });
// }
