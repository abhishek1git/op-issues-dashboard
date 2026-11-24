import React from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import { ArrowCounterclockwise } from "react-bootstrap-icons";
import { STATUS_OPTIONS } from "../data/issues";

function FilterSelect({ label, value, onChange, options, prefix = "" }) {
  return (
    <Col xs={6} sm={4} md="auto">
      <Form.Group controlId={`filter-${label}`}>
        <Form.Label className="od-filter-label">{label}</Form.Label>
        <Form.Select size="sm" value={value} onChange={(e) => onChange(e.target.value)}>
          {options.map((opt) => (
            <option key={opt} value={opt}>
              {opt === "All" ? "All" : `${prefix}${opt}`}
            </option>
          ))}
        </Form.Select>
      </Form.Group>
    </Col>
  );
}

export default function FilterBar({ filters, onFilterChange, onReset, stores, categories, resultCount, totalCount }) {
  return (
    <>
      <Row className="od-filters g-3 align-items-end mx-0">
        <FilterSelect label="Store" value={filters.store} onChange={(v) => onFilterChange("store", v)} options={stores} prefix="Store " />
        <FilterSelect label="Category" value={filters.category} onChange={(v) => onFilterChange("category", v)} options={categories} />
        <FilterSelect label="Priority" value={filters.priority} onChange={(v) => onFilterChange("priority", v)} options={["All", "High", "Medium", "Low"]} />
        <FilterSelect label="Status" value={filters.status} onChange={(v) => onFilterChange("status", v)} options={["All", ...STATUS_OPTIONS]} />
        <Col xs="auto" className="ms-sm-auto">
          <Button variant="link" size="sm" className="od-reset" onClick={onReset}>
            <ArrowCounterclockwise className="me-1" /> Reset filters
          </Button>
        </Col>
      </Row>
      <p className="od-count">
        Showing {resultCount} of {totalCount} issues
      </p>
    </>
  );
}
