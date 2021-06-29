import React from "react";
import { useAPI } from "../../contexts/apiContext";
import { UserCard } from "../../components/UserCard/UserCard";
import { Spinner } from "../../components/Spinner/Spinner";
import { AccordionComponent } from "../../components/AccordionComponent/AccordionComponent";

export function UsersContainer() {
  const { users } = useAPI();

  console.log(
    users.results?.sort((a: any, b: any) => a.registered.age - b.registered.age)
  );
  return (
    <>
      {!users.results ? (
        <Spinner />
      ) : (
        // TODO: write an interface for parameters

        users.results
          ?.sort((a: any, b: any) => b.registered.age - a.registered.age)
          .flatMap((obj: any) => {
            return (
              <UserCard
                key={obj.login.uuid}
                avatar={obj.picture.large}
                firstName={obj.name.first}
                lastName={obj.name.last}
                registeredDate={obj?.registered.date}
                email={obj.email}
              />
            );
          })
      )}
    </>
  );
}
