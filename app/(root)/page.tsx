"use client";

import { useEffect } from "react";

import { useStoreModal } from "@/hooks/use-store-modal";

const SetUpPage = () => {
  // feature of zustand to extract the state without calling the whole store
  const onOpen = useStoreModal((state) => state.onOpen);
  const isOpen = useStoreModal((state) => state.isOpen);

  // basically this will prevent the user from closing the modal if a store does not exist,
  // the modal sits on the layout and it only open when the hook is called and triggered,
  // this is an alternative ofr not rendering the modal evry time on different component.

  useEffect(() => {
    if (!isOpen) {
      onOpen();
    }
  }, [isOpen, onOpen]);

  return <div className="p-4">root Page</div>;
};

export default SetUpPage;
