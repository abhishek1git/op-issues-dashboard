export const STATUS_OPTIONS = ["New", "In Progress", "Resolved"];

export const PRIORITY_STYLES = {
  High: { color: "#B3261E", bg: "#FBEAE9", label: "High" },
  Medium: { color: "#A15C07", bg: "#FBF1E2", label: "Medium" },
  Low: { color: "#276749", bg: "#E8F4EE", label: "Low" },
};

export const STATUS_STYLES = {
  New: { color: "#33488D", bg: "#EAEDF9", icon: "ExclamationTriangle" },
  "In Progress": { color: "#7A4FB5", bg: "#F1EAFA", icon: "Clock" },
  Resolved: { color: "#276749", bg: "#E8F4EE", icon: "CheckCircle" },
};

export const initialIssues = [
  {
    id: "OPS-1042",
    store: "104",
    category: "Equipment Failure",
    description:
      "Walk-in freezer compressor failed overnight; perishable stock at risk of spoilage.",
    dateReported: "2026-08-11",
    priority: "High",
    status: "In Progress",
    manager: "Abhishek Kumar",
    followUp: true,
    notes: [{ text: "Refrigeration technician on-site, ETA 2 hours.", ts: "2026-08-11 09:20" }],
  },
  {
    id: "OPS-1043",
    store: "118",
    category: "IT / POS",
    description:
      "POS terminals offline at 3 of 6 checkout lanes, causing long queues during peak hours.",
    dateReported: "2026-08-12",
    priority: "High",
    status: "New",
    manager: "Rohit Gupta",
    followUp: true,
    notes: [],
  },
  {
    id: "OPS-1044",
    store: "102",
    category: "Inventory Discrepancy",
    description:
      "Stock count mismatch of 18 units found in the electronics aisle during weekly audit.",
    dateReported: "2026-08-09",
    priority: "Medium",
    status: "New",
    manager: "Devesh Sharma",
    followUp: false,
    notes: [],
  },
  {
    id: "OPS-1045",
    store: "109",
    category: "Safety",
    description:
      "Wet floor warning sign missing near main entrance after rain; slip hazard for customers.",
    dateReported: "2026-08-13",
    priority: "High",
    status: "New",
    manager: "Charu Gupta",
    followUp: true,
    notes: [],
  },
  {
    id: "OPS-1046",
    store: "121",
    category: "Staffing",
    description:
      "Two cashiers called in sick; store is understaffed ahead of the weekend rush.",
    dateReported: "2026-08-14",
    priority: "Medium",
    status: "In Progress",
    manager: "Uday",
    followUp: true,
    notes: [{ text: "Requested temp staff from Store 119 for Saturday shift.", ts: "2026-08-14 11:05" }],
  },
  {
    id: "OPS-1047",
    store: "107",
    category: "Customer Complaint",
    description:
      "Repeated customer complaints about long checkout wait times during evenings.",
    dateReported: "2026-08-06",
    priority: "Low",
    status: "In Progress",
    manager: "Majnu",
    followUp: false,
    notes: [],
  },
  {
    id: "OPS-1048",
    store: "115",
    category: "Cash Handling",
    description:
      "Discrepancy of ₹2,400 found in the evening cash drawer during closing reconciliation.",
    dateReported: "2026-08-15",
    priority: "High",
    status: "New",
    manager: "Jwala Singh",
    followUp: true,
    notes: [],
  },
  {
    id: "OPS-1049",
    store: "103",
    category: "Facilities",
    description:
      "Restroom plumbing leak reported by staff; maintenance vendor already dispatched.",
    dateReported: "2026-08-04",
    priority: "Medium",
    status: "Resolved",
    manager: "Ananya Verma",
    followUp: false,
    notes: [{ text: "Leak fixed, area inspected, no further issues.", ts: "2026-08-05 16:40" }],
  },
  {
    id: "OPS-1050",
    store: "130",
    category: "Security",
    description:
      "Suspected shoplifting incident reported by staff; CCTV footage currently under review.",
    dateReported: "2026-08-16",
    priority: "High",
    status: "In Progress",
    manager: "Rohit Sharma",
    followUp: true,
    notes: [{ text: "Footage pulled, sharing with area loss-prevention lead.", ts: "2026-08-16 14:10" }],
  },
  {
    id: "OPS-1051",
    store: "111",
    category: "Delivery / Logistics",
    description:
      "Vendor delivery delayed by two days; low stock risk on fast-moving grocery items.",
    dateReported: "2026-08-10",
    priority: "Medium",
    status: "New",
    manager: "Karan Mehta",
    followUp: false,
    notes: [],
  },
  {
    id: "OPS-1052",
    store: "106",
    category: "Equipment Failure",
    description:
      "Main floor air conditioning unit not cooling effectively during peak afternoon hours.",
    dateReported: "2026-08-02",
    priority: "Low",
    status: "Resolved",
    manager: "Deepak Kumar",
    followUp: false,
    notes: [{ text: "Unit serviced and recharged; temperature back to normal.", ts: "2026-08-03 10:00" }],
  },
  {
    id: "OPS-1053",
    store: "119",
    category: "IT / POS",
    description:
      "Barcode scanners at the self-checkout kiosk misreading items intermittently.",
    dateReported: "2026-08-07",
    priority: "Medium",
    status: "Resolved",
    manager: "Vikram Singh",
    followUp: false,
    notes: [{ text: "Firmware updated on all kiosk scanners; issue no longer reproducing.", ts: "2026-08-08 09:30" }],
  },
];
