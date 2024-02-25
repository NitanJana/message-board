import messageModel from "../models/messageModel.js";

// retrieve messages from the database
export const getMessages = async (req, res) => {
  try {
    const messages = await messageModel.find();
    res.send(messages);
  } catch (error) {
    console.error("Error retrieving messages:", error);
    res.status(500).send({ error: "Failed to retrieve messages" });
  }
};
// save a new message to the database
export const saveMessage = async (req, res) => {
  try {
    const { author, message } = req.body;
    const savedMessage = await messageModel.create({ author, message });
    console.log("Saved successfully");
    res.status(201).send(savedMessage);
  } catch (error) {
    console.error("Error saving message:", error);
    res.status(400).send({ error: "Failed to save message" });
  }
};
