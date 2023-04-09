import React from "react";
import AccountNavbar from "../navbar/AccountNavbar";
import Sidebar from "./Sidebar";
import { sidebarData } from "./sidebarData";

const AccountProfileInformation = () => {
  return (
    <>
      <div className="p-10">
        <AccountNavbar />
        {sidebarData.map((data) => (
          <Sidebar title={data.title} tabData={data.tabData} />
        ))}
      </div>
    </>
  );
};

export default AccountProfileInformation;
