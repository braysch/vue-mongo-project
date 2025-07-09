const expressAsyncHandler = require("express-async-handler");
const Contact = require("../models/Contact");

const getContacts = expressAsyncHandler(async(req, res) => {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
});

const createContact = expressAsyncHandler(async (req, res) => {
        const {name, email, phone, designation} = req.body;
        if (!name || !email || !phone || !designation) {
            res.status(400);
            throw new Error("All fields are required!");
        }
        const contact = await Contact.create({
            name, email, phone, designation
        });
        res.status(201).json(contact);
});

const getContact = expressAsyncHandler(async(req, res) => {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
        res.status(404);
        throw new Error("Contact not found");
    }
    res.status(200).json(contact);
});

const deleteContact = expressAsyncHandler(async(req, res) => {
    const contact = await Contact.findByIdAndDelete(req.params.id);
    if (!contact) {
        res.status(404);
        throw new Error("Contact not found");
    }
    res.status(200).json(contact);

});

const updateContact = expressAsyncHandler(async(req, res) => {
    const contact = await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new: true}
    );
    if (!contact) {
        res.status(404);
        throw new Error("Contact not found");
    }
    res.status(200).json(contact);
});

module.exports = { getContacts, createContact, getContact, deleteContact, updateContact }