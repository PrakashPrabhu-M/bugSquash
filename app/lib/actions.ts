"use server"
import { Issue } from "./models";
import connect from "./connect";

export const addIssue = async (formData: FormData) => {
  try {
    connect();
    const { status, title, description, priority } =
      Object.fromEntries(formData);
    const msg = await Issue.create({ status, title, description, priority });
    return msg;
  } catch (error) {
    console.log("error:", error);
  }
};
