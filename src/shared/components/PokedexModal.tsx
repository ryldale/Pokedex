import { Box, IconButton, Modal, Typography } from "@mui/material";
import { BaseContainer } from "./BaseContainer";
import { ReactNode } from "react";
import { color } from "../constant/color";
import { XMarkIcon } from "@heroicons/react/24/outline";

type propType = {
  state: any;
  closeHandler: () => void;
  header?: string;
  closeButton?: boolean;
  content: ReactNode;
  actionButtons: ReactNode;
};

const PokedexModal = ({
  state,
  closeHandler,
  header,
  closeButton,
  content,
  actionButtons,
}: propType) => {
  return (
    <Modal disableAutoFocus open={state} onClose={closeHandler}>
      <BaseContainer
        overflow={"hidden"}
        display={"flex"}
        flexDirection={"column"}
        width={"100%"}
        maxWidth={"40rem"}
        maxHeight={"40rem"}
      >
        <Box padding={"1.5rem 1rem"} sx={{ overflowY: "auto" }}>
          {content}
        </Box>
        {actionButtons}
      </BaseContainer>
    </Modal>
  );
};

export default PokedexModal;
