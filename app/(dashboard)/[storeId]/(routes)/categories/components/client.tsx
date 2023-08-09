"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { Braces, Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { DataTable } from "@/components/ui/data-table";
import { ApiRouteModal } from "@/components/modals/api-route-modal";

import { CategoryColumn, columns } from "./columns";

interface CategoryColumnProps {
  data: CategoryColumn[];
}

export const CategoryClient: React.FC<CategoryColumnProps> = ({ data }) => {
  const router = useRouter();
  const params = useParams();

  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <ApiRouteModal
        isOpen={open}
        onClose={() => setOpen(false)}
        entityName="categories"
        entityIdName="categoryId"
      />
      <div className="flex items-center justify-between">
        <Heading
          title={`Categories (${data.length})`}
          description="Manage categories for your store"
        />
        <Button
          onClick={() => router.push(`/${params.storeId}/categories/new`)}
        >
          <Plus className="mr-2 h-4 w-4 />" />
          Add New
        </Button>
      </div>
      <Separator />
      <DataTable columns={columns} data={data} searchKey="name" />
      <div className="flex items-center justify-center">
        <Button onClick={() => setOpen(true)}>
          View Categories API Routes <Braces className="h-4 w-4 ml-2" />
        </Button>
      </div>
    </>
  );
};
