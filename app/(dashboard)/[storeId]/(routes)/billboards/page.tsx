import { format } from "date-fns";

import prismadb from "@/lib/prismadb";
import { BillbordsClient } from "./components/client";
import { BillboardColumns } from "./components/columns";

const BillboardsPage = async ({ params }: { params: { storeId: string } }) => {
  const billboards = await prismadb.billboard.findMany({
    where: {
      storeId: params.storeId
    },
    orderBy: {
      createdAt: "desc"
    }
  });

  const formattedBillboards: BillboardColumns[] = billboards.map((item) => ({
    id: item.id,
    label: item.label,
    // date needs to be in string, here we use DateFNS
    createdAt: format(item.createdAt, "MMMM do, yyyy")
  }));

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <BillbordsClient data={formattedBillboards} />
      </div>
    </div>
  );
};

export default BillboardsPage;
