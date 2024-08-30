"use client";
import PokedexModal from "@/shared/components/PokedexModal";
import { color } from "@/shared/constant/color";
import { Box, Button, Typography } from "@mui/material";
import { ItemDetails } from "../reducer/item_init";
import { formatName } from "@/shared/components/formatname";

type propType = {
  closeHandler: () => void;
  item: ItemDetails;
  effect: string[];
};

const ViewModal = ({ closeHandler, item, effect }: propType) => {
  return (
    <PokedexModal
      state={true}
      closeHandler={closeHandler}
      header={formatName(item.name)}
      content={
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-start",
            overflow: "hidden",
          }}
        >
          <Box>
            <img
              src={item.sprites.default}
              alt={item.name}
              width={100}
              height={100}
              style={{
                border: `1px solid ${color.n3}`,
                background: `${color.n1}`,
                borderRadius: "4px",
              }}
            />
          </Box>
          <Box
            sx={{
              flex: "1 1 auto",
              p: 2,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography variant="body1" fontWeight={600}>
              {"Effect:"}
            </Typography>
            <Typography variant="body2" mt={"8px"}>
              {effect}
            </Typography>
          </Box>
        </Box>
      }
      actionButtons={
        <Box
          display={"flex"}
          justifyContent={"flex-end"}
          alignItems={"center"}
          alignSelf={"stretch"}
          borderTop={`1px solid ${color.n3}`}
          padding={"1rem"}
          gap={"1rem"}
        >
          <Button
            variant="outlined"
            style={{ background: color.bgPrimary }}
            onClick={closeHandler}
          >
            <Typography variant="h3">Close</Typography>
          </Button>
        </Box>
      }
    ></PokedexModal>
  );
};

export default ViewModal;
