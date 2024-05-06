import React, { useState } from "react";
import Cart, { ItemType } from "./Cart";

const items:ItemType[]=[  { title: "2 GB of space", checked: true },
{ title: "14 days of backups", checked: true },
{ title: "Social integrations", checked: true },
{ title: "Client billing", checked: true },
{ title: "Remote access", checked: true },
{ title: "Custom domain", checked: true },
{ title: "24 hours support", checked: true },
{ title: "Admin tools", checked: true },
{ title: "Collaboration tools", checked: true },
{ title: "User management", checked: true },]

const ProfessionalCart = () => {
  return (
    <div >
     <Cart items={items} price={45.5} title="Professional" isColorFull/>
    </div>
  );
};

export default ProfessionalCart;
