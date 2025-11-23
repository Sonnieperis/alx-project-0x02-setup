// components/common/UserCard.tsx

import React from "react";
import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({ name, email, address }) => {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: "16px",
        borderRadius: "8px",
        marginBottom: "16px",
      }}
    >
      <h3>{name}</h3>
      <p>Email: {email}</p>
      <p>
        Address: {address.street}, {address.city}
      </p>
    </div>
  );
};

export default UserCard;
