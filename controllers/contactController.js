const getContacts = ((req, res) => {
    res.status(200).json({message: "Get all contacts."})
});

const createContact = ((req, res) => {
    console.log(req.body);
    const {name, email, phone, designation} = req.body;
    if (!name || !email || !phone || !designation) {
        res.status(400);
        throw new Error("All fields are required!");
    }
    res.status(201).json({message: `Create new contact: ${req.params.id}`})
});

const getContact = ((req, res) => {
    res.status(200).json({message: `Get contact: ${req.params.id}`})
});

const deleteContact = ((req, res) => {
    res.status(200).json({message: `Delete contact: ${req.params.id}`})
});

const updateContact = ((req, res) => {
    res.status(200).json({message: `Update contact: ${req.params.id}`})
});

module.exports = { getContacts, createContact, getContact, deleteContact, updateContact }