import React from "react";
import { Badge } from "react-bootstrap";
import { PRIORITY_STYLES } from "../data/issues";

export default function PriorityBadge({ priority }) {
  const style = PRIORITY_STYLES[priority];

  return (
    <Badge pill bg="" className="od-pill" style={{ color: style.color, background: style.bg }}>
      {style.label}
    </Badge>
  );
}
