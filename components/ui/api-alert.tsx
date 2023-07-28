import { ServerIcon } from "lucide-react";

import { Alert, AlertTitle } from "@/components/ui/alert";

interface ApiAlertProps {
  title: string;
  description: string;
  variant: "public" | "admin";
}

const textMap: Record<ApiAlertProps["variant"], string> = {
  public: "Public",
  admin: "Admin"
};

const variantMap: Record<ApiAlertProps["variant"], string> = {
  public: "secondary",
  admin: "descructive"
};

export const ApiAlert: React.FC<ApiAlertProps> = ({
  title,
  description,
  variant = "public"
}) => {
  return (
    <Alert>
      <ServerIcon className="h4 w-4" />
      <AlertTitle className="flex items-center gap-x-2">{title}</AlertTitle>
    </Alert>
  );
};
