import React from "react";
import { SearchForm } from "../SearchForm/SearchForm";
import Users from "../../containers/Users/UsersContainer";

export const MainScreen: React.FC = () => {
  return (
    <div className="container">
      <SearchForm />
      <Users />
    </div>
  );
};
