"use client";

import { useEffect, useState } from "react";
import { StoreModal } from "@/components/modals/store-modal";

// this is to solve the hydration error because

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <>
      <StoreModal />
    </>
  );
};
