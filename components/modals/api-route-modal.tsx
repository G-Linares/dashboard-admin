"use client";

import { useEffect, useState } from "react";

import { Modal } from "@/components/ui/modal";
import { ApiList } from "@/components/ui/api-list";

interface ApiRouteModalProps {
  isOpen: boolean;
  onClose: () => void;
  entityName: string;
  entityIdName: string;
}

export const ApiRouteModal: React.FC<ApiRouteModalProps> = ({
  isOpen,
  onClose,
  entityIdName,
  entityName
}) => {
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) return null;

  return (
    <Modal
      title="API Routes"
      description={`Here are the API URL endpoints for ${entityName}`}
      isOpen={isOpen}
      onClose={onClose}
    >
      <ApiList entityName={entityName} entityIdName={entityIdName} />
    </Modal>
  );
};
