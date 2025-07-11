import React from "react";

type FilterBarProps = {
  filters: string[];
  selected: string;
  onSelect: (filter: string) => void;
};

export const FilterBar: React.FC<FilterBarProps> = ({ filters, selected, onSelect }) => (
  <div style={{ display: "flex", gap: "16px", margin: "24px 0", flexWrap: "wrap" }}>
    {filters.map((filter) => (
      <button
        key={filter}
        onClick={() => onSelect(filter)}
        style={{
          background: selected === filter ? "#000D1B" : "#5DC2E4",
          color: selected === filter ? "#fff" : "#000D1B",
          border: "none",
          borderRadius: "14px",
          padding: "6px 24px",
          fontWeight: 500,
          cursor: "pointer",
          outline: "none",
          textDecoration: selected === filter ? "underline" : "none",
          transition: "background 0.2s, color 0.2s",
        }}
        onMouseEnter={e => {
          e.currentTarget.style.background = "#000D1B";
          e.currentTarget.style.color = "#fff";
        }}
        onMouseLeave={e => {
          if (selected !== filter) {
            e.currentTarget.style.background = "#5DC2E4";
            e.currentTarget.style.color = "#000D1B";
          }
        }}
      >
        {filter}
      </button>
    ))}
  </div>
); 