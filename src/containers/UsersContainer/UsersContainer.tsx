import React from "react";
import { useAPI } from "../../contexts/apiContext";
import { UserCard } from "../../components/UserCard/UserCard";
import { Spinner } from "../../components/Spinner/Spinner";
import { AccordionComponent } from "../../components/AccordionComponent/AccordionComponent";
import {useSpinner} from "../../contexts/isTypingContext";

export const UsersContainer: React.FC = () => {
  const { users } = useAPI();
  const { isTyping } = useSpinner();
  const length = users?.length;
  let step = 10;
  let accordSection: Array<object> = [];
  const sortedUsers = users?.sort(
    (a: any, b: any) => a.registered.age - b.registered.age
  );

  return (
    <>
      {users && !Object.keys(users).length || isTyping ? (
        <Spinner />
      ) : (
        sortedUsers?.map((obj: any, id: number) => {
          if (obj.registered.age <= step && id + 1 !== length) {
            accordSection.push(obj);
            return null
          } else {
            step = step + 10;
            const tmp = [...accordSection];
            if (id + 1 === length) tmp.push(obj)
            accordSection = [obj];
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
