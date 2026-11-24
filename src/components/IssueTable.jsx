import React from "react";
import { Table } from "react-bootstrap";
import IssueRow from "./IssueRow";

/** Column headers + rows for the filtered issue list, with an empty state. */
export default function IssueTable({ issues, onOpenIssue }) {
  return (
    <div className="table-responsive">
      <Table hover className="od-table mb-0 align-middle">
        <thead>
          <tr>
            <th className="od-stripe-head"></th>
            <th>Store</th>
            <th>Issue</th>
            <th>Date reported</th>
            <th>Priority</th>
            <th>Status</th>
            <th>Manager</th>
          </tr>
        </thead>
        <tbody>
          {issues.length === 0 && (
            <tr>
              <td colSpan={7} className="od-empty">
                No issues match the selected filters.
              </td>
            </tr>
          )}
          {issues.map((issue) => (
            <IssueRow key={issue.id} issue={issue} onOpen={onOpenIssue} />
          ))}
        </tbody>
      </Table>
    </div>
  );
}
