import React from "react";
import { UserProps } from "../../types/types";
import "./UserCard.scss";
import { getDate } from "../../utils/utils";

export const UserCard: React.FC<UserProps> = ({
  avatar,
  firstName,
  lastName,
  registeredAge,
  registeredDate,
  email,
}) => {
  let regDate = getDate(registeredDate);
  return (
    <>
      <div className="card mb-3 custom-user-card">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={avatar}
              className="img-fluid rounded-start"
              alt="avatar"
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">
                {firstName} {lastName}
              </h5>
              <p className="card-text regDate">
                Date of registration: {regDate}
              </p>
              <p className="card-text">
                <small className="text-muted">
                  <a href={`mailto:${email}`}>{email}</a>
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
