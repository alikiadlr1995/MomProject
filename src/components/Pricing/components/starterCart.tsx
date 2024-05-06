import React, { useState } from "react";
import Cart, { ItemType } from "./Cart";

const items:ItemType[]=[
  {title:"2 GB of space",checked:true},
  {title:"14 days of backups",checked:true},
  { title: "Social integrations", checked: true },
  {title:"Client billing",checked:true},
  {title:"Remote access",checked:false},
  {title:"Custom domain",checked:false},
  {title:"24 hours support",checked:false},
  {title:"Admin tools",checked:false},
  {title:"Collaboration tools",checked:false},
  {title:"User management",checked:false},

]

const StarterCart = () => {
  return (
    <div>
     <Cart items={items} price={90.8} title="Starter"/>
    </div>
  );
};

export default StarterCart;
