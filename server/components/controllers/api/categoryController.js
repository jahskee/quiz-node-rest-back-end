const DataController = require('./crud/_dataController');
const Example = require('../../models/categoryModel');

const controller = new DataController(Example);

/* ---------- Available or built-in functions ----------
   
1. controller.list(req, res)

2. controller.create(req, res) 
   - requires x-www-form-urlencoded to test in Postman

3. controller.read(req, res)

---private function2
3. this._search(queryObj={}, fields=[], limit = null)

---------- Default functions ---------- */
module.exports = controller;