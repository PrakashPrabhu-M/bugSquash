import { addIssue } from "@/app/lib/actions";
import React from "react";

const CreateIssue = () => {
  return (
    <form action={addIssue} className="form-control space-y-3 sm:w-1/3 mx-auto">
      <input
        className="input input-bordered"
        type="text"
        name="title"
        placeholder="title"
        required
      />
      <textarea
        className="textarea textarea-bordered"
        name="description"
        placeholder="description"
        required
      />
      <input
        className="input input-bordered"
        type="text"
        name="priority"
        placeholder="priority"
        required
      />
      <input
        className="input input-bordered"
        type="text"
        name="status"
        placeholder="status"
        required
      />
      <button className="mt-4 btn btn-primary w-52 mx-auto">Submit</button>
    </form>
  );
};

export default CreateIssue;
