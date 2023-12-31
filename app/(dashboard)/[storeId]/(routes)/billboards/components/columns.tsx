"use client";

import { ColumnDef } from "@tanstack/react-table";
import { CellAction } from "./cell-action";

// This type is used to define the shape of our data.
// Will use zod

export type BillboardColumns = {
  id: string;
  label: string;
  createdAt: string;
};

export const columns: ColumnDef<BillboardColumns>[] = [
  {
    accessorKey: "label",
    header: "Label"
  },
  {
    accessorKey: "createdAt",
    header: "Date"
  },
  {
    id: "actions",
    cell: ({ row }) => <CellAction data={row.original} />
  }
];
