import React from "react";
import { UserProps } from "../../types/types";
import "./UserCard.scss";
import { getDate } from "../../utils/utils";
import Card from "react-bootstrap/Card";

export const UserCard: React.FC<UserProps> = ({
  avatar,
  firstName,
  lastName,
  registeredDate,
  email,
}) => {
  return (
    <>
      <Card
        border="secondary"
        style={{
          maxWidth: "28rem",
          flexDirection: "row",
          marginBottom: "15px",
          borderLeft: "1px",
        }}
      >
        <Card.Header>
          <img src={avatar} alt="avatar"/>{" "}
        </Card.Header>
        <Card.Body>
          <Card.Title>
            {firstName} {lastName}
          </Card.Title>
          <Card.Text>Date of registration: {getDate(registeredDate)}</Card.Text>
          <Card.Text>
            <a href={`mailto:${email}`}>{email}</a>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};
