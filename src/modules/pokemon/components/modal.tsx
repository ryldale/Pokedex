"use client";
import PokedexModal from "@/shared/components/PokedexModal";
import { color } from "@/shared/constant/color";
import { Box, Button } from "@mui/material";

const ConfirmModal = () => {
  const CloseHandler = () => {
    console.log("close handler");
  };

  return (
    <PokedexModal
      state={true}
      closeHandler={CloseHandler}
      header="Assign RT Series No."
      content={"TEs"}
      actionButtons={
        <Box
          display={"flex"}
          justifyContent={"flex-end"}
          alignItems={"center"}
          alignSelf={"stretch"}
          borderTop={`1px solid ${color.n3}`}
          padding={"1rem"}
          gap={"1rem"}
          bgcolor={color.lightYellow}
        >
          <Button
            variant="text"
            color="primary"
            sx={{ color: color.n4 }}
            onClick={CloseHandler}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            color="warning"
            // onClick={}
          >
            Assign
          </Button>
        </Box>
      }
    ></PokedexModal>
  );
};

export default ConfirmModal;
