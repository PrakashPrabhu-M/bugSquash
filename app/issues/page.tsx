import React from "react";
import { fetchIssues } from "../lib/data";
import { ObjectId } from "mongoose";
import Link from "next/link";
import { addIssue } from "../lib/actions";

interface IssueBody {
  _id: ObjectId;
  status: string;
  title: string;
  description: string;
  priority: string;
}

const IssuePage = async () => {
  const issues = (await fetchIssues()) as IssueBody[];
  return (
    <div className="flex flex-col min-h-screen min-w-full">
      <ul className="flex flex-wrap gap-2 justify-center">
        {issues.map((issue) => (
          <li className="w-screen sm:w-1/4" key={issue.title}>
            <div className="card">
              <Link
                className="card card-body bg-orange-600 hover:bg-orange-400 transition-colors"
                href={`issues/${issue._id}`}
              >
                <h2 className="card card-title text-white transition-colors hover:text-slate-400">
                  {issue.title}
                </h2>
              </Link>
            </div>
          </li>
        ))}
      </ul>
      <Link href={"issues/create"} className="btn btn-primary mt-2 mx-auto">
        Create New Issue
      </Link>
    </div>
  );
};

export default IssuePage;
