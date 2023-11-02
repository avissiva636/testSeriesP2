const express = require("express");
const { getContactS,
    getContact,
    createContact,
    updateContact,
    deleteContact
} = require("../controllers/contactController");
const validateToken = require("../util/middleware/validateTokenHandler");
const router = express.Router();

router.use(validateToken);
router.route("/").get(getContactS).post(createContact);
router.route("/:id").get(getContact).put(updateContact).delete(deleteContact);

module.exports = router;