import React from "react";

export const SearchForm: React.FC = () => {
  return (
    <div className="mb-2">
      <div className="form-group">
        <div className="input-group">
          <input
            type="search"
            className="form-control"
            id="searchFrom"
            placeholder="Find a person"
          />
        </div>
      </div>
    </div>
  );
};
