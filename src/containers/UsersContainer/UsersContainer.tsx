import React from "react";
import { useAPI } from "../../contexts/apiContext";
import { UserCard } from "../../components/UserCard/UserCard";
import { Spinner } from "../../components/Spinner/Spinner";
import { AccordionComponent } from "../../components/AccordionComponent/AccordionComponent";

export function UsersContainer() {
  const { users } = useAPI();
  const length = users.results?.length;
  let step = 10;
  let accordSection: Array<object> = [];
  const sortedUsers = users.results?.sort(
    (a: any, b: any) => a.registered.age - b.registered.age
  );

  return (
    <>
      {!users.results ? (
        <Spinner />
      ) : (
        sortedUsers.map((obj: any, id: number) => {
          if (obj.registered.age <= step && id + 1 !== length) {
            accordSection.push(obj);
          } else {
            step = step + 10;
            let tmp = [...accordSection];
            accordSection = [];
            return (
              <AccordionComponent key={step - 10} count={step - 10}>
                {tmp.map((user: any) => {
                  return (
                    <UserCard
                      key={user.login.uuid}
                      avatar={user.picture.large}
                      firstName={user.name.first}
                      lastName={user.name.last}
                      registeredAge={user.registered.age}
                      registeredDate={user.registered.date}
                      email={user.email}
                    />
                  );
                })}
              </AccordionComponent>
            );
          }
        })
      )}
    </>
  );
}
