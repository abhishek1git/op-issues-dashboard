import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import { ExclamationTriangleFill, FlagFill, CheckCircleFill, ClockFill } from "react-bootstrap-icons";

function SummaryCard({ icon: Icon, value, label, color, bg }) {
  return (
    <Col xs={12} sm={6} lg={3}>
      <Card className="od-card h-100 border-0 summary-card">
        <Card.Body className="d-flex align-items-center gap-3">
          <div className="od-card-icon" style={{ background: bg, color }}>
            <Icon size={18} />
          </div>
          <div>
            <p className="od-card-value">{value}</p>
            <p className="od-card-label">{label}</p>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default function SummaryCards({ issues }) {
  const open = issues.filter((i) => i.status !== "Resolved").length;
  const highPriority = issues.filter((i) => i.priority === "High" && i.status !== "Resolved").length;
  const resolved = issues.filter((i) => i.status === "Resolved").length;
  const followUp = issues.filter((i) => i.followUp && i.status !== "Resolved").length;

  return (
    <Row className="g-3 mb-4">
      <SummaryCard icon={ExclamationTriangleFill} value={open} label="Total open issues" color="#33488D" bg="#EAEDF9" />
      <SummaryCard icon={FlagFill} value={highPriority} label="High-priority issues" color="#B3261E" bg="#FBEAE9" />
      <SummaryCard icon={CheckCircleFill} value={resolved} label="Resolved issues" color="#276749" bg="#E8F4EE" />
      <SummaryCard icon={ClockFill} value={followUp} label="Requiring follow-up" color="#A15C07" bg="#FBF1E2" />
    </Row>
  );
}
