import React from "react";
import { SearchForm } from "../../components/SearchForm/SearchForm";
import { UsersContainer } from "../UsersContainer/UsersContainer";
import { AccordionComponent } from "../../components/AccordionComponent/AccordionComponent";

export const MainScreen: React.FC = () => {
  return (
    <div className="container">
      <SearchForm />
      <AccordionComponent />
      <UsersContainer />
    </div>
  );
};
