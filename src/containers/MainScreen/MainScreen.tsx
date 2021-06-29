import React from "react";
import { SearchForm } from "../../components/SearchForm/SearchForm";
import { UsersContainer } from "../UsersContainer/UsersContainer";

export const MainScreen: React.FC = () => {
  return (
    <div className="container">
      <SearchForm />
      <UsersContainer />
    </div>
  );
};
