import React from "react";
import { useAPI } from "../../contexts/apiContext";
import { UserCard } from "../../components/UserCard/UserCard";
import { Spinner } from "../../components/Spinner/Spinner";

export default function Users() {
  const { users } = useAPI();
  // TODO: write an interface for x
  return (
    <>
      {
        users.results ? (
        users.results?.flatMap((obj: any) => (
          <UserCard
            key={obj.login.uuid}
            avatar={obj.picture.large}
            firstName={obj.name.first}
            lastName={obj.name.last}
            registeredAge={obj?.registered.age}
            registeredDate={obj?.registered.date}
            email={obj.email}
          />
        ))) : ( <Spinner /> )
      }
    </>
  );
}
