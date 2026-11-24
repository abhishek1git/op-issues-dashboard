import React from "react";
import { PersonFill, FlagFill } from "react-bootstrap-icons";
import { PRIORITY_STYLES } from "../data/issues";
import StatusBadge from "./StatusBadge";
import PriorityBadge from "./PriorityBadge";

function formatDate(iso) {
  const d = new Date(iso + "T00:00:00");
  return d.toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" });
}

/** One clickable table row for a single issue. */
export default function IssueRow({ issue, onOpen }) {
  const pr = PRIORITY_STYLES[issue.priority];
  const needsFollowUp = issue.followUp && issue.status !== "Resolved";

  return (
    <tr className="od-row" onClick={() => onOpen(issue.id)}>
      <td className="od-stripe-cell">
        <span className="od-stripe" style={{ background: pr.color }}></span>
      </td>
      <td className="od-store opsdash-mono">Store {issue.store}</td>
      <td className="od-desc">
        <p className="od-desc-cat">{issue.category}</p>
        <p className="od-desc-text">{issue.description}</p>
      </td>
      <td className="od-date opsdash-mono">{formatDate(issue.dateReported)}</td>
      <td>
        <PriorityBadge priority={issue.priority} />
      </td>
      <td>
        <StatusBadge status={issue.status} />
      </td>
      <td className="od-manager">
        {needsFollowUp && <FlagFill size={12} className="od-flag me-1" />}
        <PersonFill size={12} className="text-secondary me-1" />
        {issue.manager}
      </td>
    </tr>
  );
}
