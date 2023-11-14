import { Issue } from "./models";
import connect from "./connect";

export const fetchIssues = async () => {
  try {
    connect();
    const data = await Issue.find({});
    return data;
  } catch (error) {
    console.log("error:", error);
  }
};
