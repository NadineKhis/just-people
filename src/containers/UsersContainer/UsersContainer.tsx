import React from "react";
import {useAPI} from "../../contexts/apiContext";
import {UserCard} from "../../components/UserCard/UserCard";
import {Spinner} from "../../components/Spinner/Spinner";
// import {Accordion} from "react-bootstrap";
import {AccordionComponent} from "../../components/AccordionComponent/AccordionComponent";

// import {AccordionComponent} from "../../components/AccordionComponent/AccordionComponent";

export function UsersContainer() {
  const {users} = useAPI();
  const length = users.results?.length
  let count = 10;
  let groupped: Array<object> = []

  console.log(
    users.results?.sort((a: any, b: any) => a.registered.age - b.registered.age)
  );
  return (
    <>
      {!users.results ? (
        <Spinner/>
      ) : (
        // TODO: write an interface for parameters
        users.results
          ?.sort((a: any, b: any) => a.registered.age - b.registered.age)
          .map((obj: any, id : number) => {
            if (obj.registered.age <= count && id + 1 !== length) {
              groupped.push(obj)
            } else {
              count = count + 10
              let tmp = [...groupped]
              groupped = []
              return (
                <AccordionComponent key={count - 10} count={count - 10}>
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
                    )
                  })}
                </AccordionComponent>
              )
            }
          })
      )}
    </>
  );
}
