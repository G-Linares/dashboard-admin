"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { Braces, Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { DataTable } from "@/components/ui/data-table";
import { ApiRouteModal } from "@/components/modals/api-route-modal";

import { BillboardColumns, columns } from "./columns";

interface BillbordsClientProps {
  data: BillboardColumns[];
}

export const BillbordsClient: React.FC<BillbordsClientProps> = ({ data }) => {
  const router = useRouter();
  const params = useParams();

  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <ApiRouteModal
        isOpen={open}
        onClose={() => setOpen(false)}
        entityName="billboards"
        entityIdName="billboardId"
      />
      <div className="flex items-center justify-between">
        <Heading
          title={`Billboards (${data.length})`}
          description="Manage billboards for your store"
        />
        <Button
          onClick={() => router.push(`/${params.storeId}/billboards/new`)}
        >
          <Plus className="mr-2 h-4 w-4 />" />
          Add New
        </Button>
      </div>
      <Separator />
      <DataTable columns={columns} data={data} searchKey="label" />
      <div className="flex items-center justify-center">
        <Button onClick={() => setOpen(true)}>
          View Billboards API Routes <Braces className="h-4 w-4 ml-2" />
        </Button>
      </div>
    </>
  );
};
