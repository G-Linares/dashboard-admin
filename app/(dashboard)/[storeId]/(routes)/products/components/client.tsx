"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { Braces, Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { DataTable } from "@/components/ui/data-table";
import { ApiRouteModal } from "@/components/modals/api-route-modal";

import { ProductColumn, columns } from "./columns";

interface ProductClientProps {
  data: ProductColumn[];
}

export const ProductClient: React.FC<ProductClientProps> = ({ data }) => {
  const router = useRouter();
  const params = useParams();

  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <ApiRouteModal
        isOpen={open}
        onClose={() => setOpen(false)}
        entityName="products"
        entityIdName="productId"
      />
      <div className="flex items-center justify-between">
        <Heading
          title={`Products (${data.length})`}
          description="Mange products for your store"
        />
        <Button onClick={() => router.push(`/${params.storeId}/products/new`)}>
          <Plus className="mr-2 h-4 w-4 />" />
          Add New
        </Button>
      </div>
      <Separator />
      <DataTable columns={columns} data={data} searchKey="name" />
      <div className="flex items-center justify-center">
        <Button onClick={() => setOpen(true)}>
          View Products API Routes <Braces className="h-4 w-4 ml-2" />
        </Button>
      </div>
    </>
  );
};
