import React from "react";
import { Table } from "./Table";
import { deliveryBoyDetails } from "./data/data";

const Delivery = () => {
  return (
    <div>
      <Table userData={deliveryBoyDetails} />
    </div>
  );
};

export { Delivery };
