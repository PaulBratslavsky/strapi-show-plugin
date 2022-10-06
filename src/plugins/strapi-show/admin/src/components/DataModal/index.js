import React, { useState } from "react";

import {
  ModalLayout,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Typography,

} from "@strapi/design-system";

export default function DataModal({ name, setShowModal, children }) {

  return (
    <ModalLayout
      onClose={() => setShowModal(false)}
      labelledBy="title"
      as="form"
    >
      <ModalHeader>
        <Typography fontWeight="bold" textColor="neutral800" as="h2" id="title">
         { name }
        </Typography>
      </ModalHeader>

      <ModalBody>
        { children }
      </ModalBody>

      <ModalFooter />
    </ModalLayout>
  );
}