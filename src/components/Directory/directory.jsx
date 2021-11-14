import React from "react";
import "./directory.scss";
import { useState } from "react";
import Menuitem from "../menu-items/menu-items";

export const Directory = () => {
  const [Sections, setSections] = useState([
    {
      title: "Wholesalers",
      imageUrl:
        "https://images.in.locan.to/Wholesale-Ladies-Clothing-Supplier/vap_4956677154.jpg",
      id: 1,
      linkUrl: "wholesalers",
    },
    {
      title: "Customers",
      imageUrl:
        "https://pas-wordpress-media.s3.amazonaws.com/content/uploads/2018/04/19150705/clothing-line.jpg",
      id: 2,
      linkUrl: "customers",
    },
    {
      title: "Latest Trends",
      imageUrl:
        "https://t3.ftcdn.net/jpg/04/03/83/24/360_F_403832452_xFThlwe5rmois9UDeRvL0ijEh1VpX1uL.jpg",
      id: 3,
      size: "large",
      linkUrl: "trends",
    },
  ]);
  return (
    <div className="directory-menu">
      {Sections.map(({ id, ...otherSectionsProps }) => (
        <Menuitem key={id} {...otherSectionsProps} />
      ))}
    </div>
  );
};
