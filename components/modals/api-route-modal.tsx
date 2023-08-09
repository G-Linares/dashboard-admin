"use client";

import { useEffect, useState } from "react";

import { Modal } from "@/components/ui/modal";

interface ApiRouteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ApiRouteModal: React.FC<ApiRouteModalProps> = ({
  isOpen,
  onClose
}) => {
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) return null;

  return (
    <Modal
      title="API Routes"
      description="API Calls for categories."
      isOpen={isOpen}
      onClose={onClose}
    >
      <div className="pt-6 space-x-2 flex items-center w-full">
        This is a modal where the API routes will go
      </div>
    </Modal>
  );
};
