import React, { useMemo, useState } from "react";
import { Container, Card } from "react-bootstrap";
import Header from "./components/Header";
import SummaryCards from "./components/SummaryCards";
import FilterBar from "./components/FilterBar";
import IssueTable from "./components/IssueTable";
import IssueDetails from "./components/IssueDetails";
import { initialIssues } from "./data/issues";

const EMPTY_FILTERS = { store: "All", category: "All", priority: "All", status: "All" };

export default function App() {
  const [issues, setIssues] = useState(initialIssues);
  const [filters, setFilters] = useState(EMPTY_FILTERS);
  const [selectedId, setSelectedId] = useState(null);
  const [noteDraft, setNoteDraft] = useState("");

  const stores = useMemo(
    () => ["All", ...Array.from(new Set(initialIssues.map((i) => i.store))).sort()],
    []
  );
  const categories = useMemo(
    () => ["All", ...Array.from(new Set(initialIssues.map((i) => i.category))).sort()],
    []
  );

  const filteredIssues = useMemo(() => {
    return issues.filter((i) => {
      if (filters.store !== "All" && i.store !== filters.store) return false;
      if (filters.category !== "All" && i.category !== filters.category) return false;
      if (filters.priority !== "All" && i.priority !== filters.priority) return false;
      if (filters.status !== "All" && i.status !== filters.status) return false;
      return true;
    });
  }, [issues, filters]);

  const selectedIssue = issues.find((i) => i.id === selectedId) || null;

  function handleFilterChange(key, value) {
    setFilters((f) => ({ ...f, [key]: value }));
  }

  function handleResetFilters() {
    setFilters(EMPTY_FILTERS);
  }

  function handleOpenIssue(id) {
    setSelectedId(id);
    setNoteDraft("");
  }

  function handleCloseModal() {
    setSelectedId(null);
    setNoteDraft("");
  }

  function handleStatusChange(status) {
    setIssues((prev) => prev.map((i) => (i.id === selectedId ? { ...i, status } : i)));
  }

  function handleAddNote() {
    const text = noteDraft.trim();
    if (!text) return;
    const ts = new Date().toISOString().slice(0, 16).replace("T", " ");
    setIssues((prev) =>
      prev.map((i) => (i.id === selectedId ? { ...i, notes: [...i.notes, { text, ts }] } : i))
    );
    setNoteDraft("");
  }

  return (
    <div className="opsdash-root">
      <Header issueCount={issues.length} />

      <Container fluid="lg" className="od-body py-4">
        <SummaryCards issues={issues} />

        <Card className="od-panel border-0">
          <Card.Body className="p-0">
            <div className="px-3 pt-3">
              <FilterBar
                filters={filters}
                onFilterChange={handleFilterChange}
                onReset={handleResetFilters}
                stores={stores}
                categories={categories}
                resultCount={filteredIssues.length}
                totalCount={issues.length}
              />
            </div>
            <IssueTable issues={filteredIssues} onOpenIssue={handleOpenIssue} />
          </Card.Body>
        </Card>
      </Container>

      {selectedIssue && (
        <IssueDetails
          issue={selectedIssue}
          onClose={handleCloseModal}
          onStatusChange={handleStatusChange}
          noteDraft={noteDraft}
          setNoteDraft={setNoteDraft}
          onAddNote={handleAddNote}
        />
      )}
    </div>
  );
}
