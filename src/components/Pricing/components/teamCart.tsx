import React, { useState } from "react";
import Cart, { ItemType } from "./Cart";

const items: ItemType[] = [
  { title: "2 GB of space", checked: true },
  { title: "14 days of backups", checked: true },
  { title: "Social integrations", checked: true },
  { title: "Client billing", checked: true },
  { title: "Remote access", checked: true },
  { title: "Custom domain", checked: true },
  { title: "24 hours support", checked: true },
  { title: "Admin tools", checked: false },
  { title: "Collaboration tools", checked: false },
  { title: "User management", checked: false },
];

const TeamCart = () => {
  return (
    <div>
      <Cart items={items} price={99.9} title="Team" />
    </div>
  );
};

export default TeamCart;
