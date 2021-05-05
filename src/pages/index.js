import React, { useState } from "react";
import Navbar from "../Components/Navbar";

const Page = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Navbar toggle={toggle} />
    </>
  );
};

export default Page;
