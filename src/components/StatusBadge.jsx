import React from "react";
import { Badge } from "react-bootstrap";
import { ExclamationTriangleFill, Clock, CheckCircleFill } from "react-bootstrap-icons";
import { STATUS_STYLES } from "../data/issues";

const ICONS = {
  ExclamationTriangle: ExclamationTriangleFill,
  Clock: Clock,
  CheckCircle: CheckCircleFill,
};

export default function StatusBadge({ status }) {
  const style = STATUS_STYLES[status];
  const Icon = ICONS[style.icon];

  return (
    <Badge
      pill
      bg=""
      className="od-pill d-inline-flex align-items-center gap-1"
      style={{ color: style.color, background: style.bg }}
    >
      <Icon size={11} /> {status}
    </Badge>
  );
}
