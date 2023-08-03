"use client";

import { BillboardColumns } from "./columns";

interface CellActionProps {
  data: BillboardColumns;
}

export const CellAction: React.FC<CellActionProps> = ({ data }) => {
  return <div>Action</div>;
};
