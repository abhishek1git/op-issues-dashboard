import React from "react";
import { Navbar, Container } from "react-bootstrap";

export default function Header({ issueCount }) {
  return (
    <Navbar className="od-navbar" variant="dark">
      <Container fluid="lg" className="d-flex justify-content-between align-items-baseline flex-wrap py-2 gap-1">
        <div>
          <p className="od-eyebrow">Store Operations</p>
          <Navbar.Brand className="od-title p-0 m-0">Dashboard</Navbar.Brand>
        </div>
        <p className="od-sub m-0">{issueCount} issues logged across the store network</p>
      </Container>
    </Navbar>
  );
}
