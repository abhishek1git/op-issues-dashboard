import React from "react";
import { Modal, Row, Col, Button, ButtonGroup, Form, ListGroup } from "react-bootstrap";
import {
  Shop,
  TagFill,
  CalendarEvent,
  PersonFill,
  FlagFill,
  ExclamationTriangleFill,
  Clock,
  CheckCircleFill,
  ChatSquareTextFill,
} from "react-bootstrap-icons";
import { PRIORITY_STYLES, STATUS_STYLES, STATUS_OPTIONS } from "../data/issues";

const ICONS = {
  ExclamationTriangle: ExclamationTriangleFill,
  Clock: Clock,
  CheckCircle: CheckCircleFill,
};

function formatDate(iso) {
  const d = new Date(iso + "T00:00:00");
  return d.toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" });
}

/**
 * Modal shown when an issue row is opened. Lets a manager review full
 * details, change status, and add a short note.
 */
export default function IssueDetails({ issue, onClose, onStatusChange, noteDraft, setNoteDraft, onAddNote }) {
  const pr = PRIORITY_STYLES[issue.priority];

  return (
    <Modal show onHide={onClose} centered size="lg">
      <Modal.Header closeButton>
        <div>
          <p className="od-modal-id opsdash-mono">{issue.id}</p>
          <Modal.Title className="od-modal-title">
            {issue.category} — Store {issue.store}
          </Modal.Title>
        </div>
      </Modal.Header>

      <Modal.Body>
        <p className="od-issue-desc">{issue.description}</p>

        <Row className="od-meta-grid g-3">
          <Col xs={6}>
            <div className="od-meta-item">
              <Shop size={15} className="od-meta-icon" />
              <div>
                <p className="od-meta-label">Store number</p>
                <p className="od-meta-value opsdash-mono">{issue.store}</p>
              </div>
            </div>
          </Col>
          <Col xs={6}>
            <div className="od-meta-item">
              <TagFill size={15} className="od-meta-icon" />
              <div>
                <p className="od-meta-label">Category</p>
                <p className="od-meta-value">{issue.category}</p>
              </div>
            </div>
          </Col>
          <Col xs={6}>
            <div className="od-meta-item">
              <CalendarEvent size={15} className="od-meta-icon" />
              <div>
                <p className="od-meta-label">Date reported</p>
                <p className="od-meta-value opsdash-mono">{formatDate(issue.dateReported)}</p>
              </div>
            </div>
          </Col>
          <Col xs={6}>
            <div className="od-meta-item">
              <PersonFill size={15} className="od-meta-icon" />
              <div>
                <p className="od-meta-label">Assigned manager</p>
                <p className="od-meta-value">{issue.manager}</p>
              </div>
            </div>
          </Col>
          <Col xs={6}>
            <div className="od-meta-item">
              <FlagFill size={15} className="od-meta-icon" style={{ color: pr.color }} />
              <div>
                <p className="od-meta-label">Priority</p>
                <p className="od-meta-value" style={{ color: pr.color }}>
                  {issue.priority}
                </p>
              </div>
            </div>
          </Col>
        </Row>

        <div className="mt-4">
          <p className="od-section-label">Status</p>
          <ButtonGroup className="od-status-row w-100">
            {STATUS_OPTIONS.map((s) => {
              const st = STATUS_STYLES[s];
              const StIcon = ICONS[st.icon];
              const active = issue.status === s;
              return (
                <Button
                  key={s}
                  variant="outline-secondary"
                  className="od-status-btn"
                  style={active ? { color: st.color, background: st.bg, borderColor: st.color } : {}}
                  onClick={() => onStatusChange(s)}
                >
                  <StIcon size={13} className="me-1" /> {s}
                </Button>
              );
            })}
          </ButtonGroup>
        </div>

        <div className="mt-4">
          <p className="od-section-label">Management notes</p>
          <ListGroup className="od-notes-list mb-2">
            {issue.notes.length === 0 && (
              <ListGroup.Item className="od-note-empty">No notes added yet.</ListGroup.Item>
            )}
            {issue.notes.map((n, idx) => (
              <ListGroup.Item key={idx} className="od-note">
                <p className="od-note-text">{n.text}</p>
                <p className="od-note-ts opsdash-mono">{n.ts}</p>
              </ListGroup.Item>
            ))}
          </ListGroup>
          <div className="od-note-form">
            <Form.Control
              as="textarea"
              rows={2}
              className="od-note-input"
              placeholder="Add a short management note…"
              value={noteDraft}
              onChange={(e) => setNoteDraft(e.target.value)}
            />
            <Button variant="dark" className="od-note-add" onClick={onAddNote} disabled={!noteDraft.trim()}>
              <ChatSquareTextFill size={14} className="me-1" /> Add
            </Button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}
