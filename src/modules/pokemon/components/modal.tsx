"use client";
import { formatName } from "@/shared/components/formatname";
import PokedexModal from "@/shared/components/PokedexModal";
import { color } from "@/shared/constant/color";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import { CheckIcon } from "@heroicons/react/24/solid";
import { Box, Button, Typography } from "@mui/material";

type propType = {
  closeHandler: () => void;
  onConfirm: () => void;
  pokemonName: string;
};

export const ConfirmModal = ({ closeHandler, onConfirm, pokemonName }: propType) => {
  return (
    <PokedexModal
      state={true}
      closeHandler={closeHandler}
      content={
        <Box
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          gap={"1rem"}
        >
          <ExclamationTriangleIcon
            color={color.warning}
            style={{
              borderRadius: "100%",
              background: color.lightYellow,
              padding: "8px",
            }}
            width={"2.5rem"}
            height={"2.5rem"}
          />
          <Typography variant="h3" color={color.warning}>
            Mark as Favorite?
          </Typography>
          <Typography>
            Do you want to add '<strong>{formatName(pokemonName)}</strong>' to your favorites?
          </Typography>
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
          bgcolor={color.lightYellow}
        >
          <Button
            variant="text"
            color="primary"
            sx={{ color: color.n4 }}
            onClick={closeHandler}
          >
            <Typography variant="h3">Cancel</Typography>
          </Button>
          <Button variant="contained" color="warning" onClick={onConfirm}>
            <Typography variant="h3">Confirm</Typography>
          </Button>
        </Box>
      }
    ></PokedexModal>
  );
};

export const StatusModal = ({ closeHandler, onConfirm, pokemonName }: propType) => {
  return (
    <PokedexModal
      state={true}
      closeHandler={closeHandler}
      content={
        <Box
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          gap={"1rem"}
        >
          <CheckIcon
            color={color.success}
            style={{
              borderRadius: "100%",
              background: color.lightGreen,
              padding: "8px",
            }}
            width={"2.5rem"}
            height={"2.5rem"}
          />
          <Typography variant="h3" color={color.success}>
            Added to Favorites!
          </Typography>
          <Typography>
            '<strong>{formatName(pokemonName)}</strong>' has been successfully added to your
            favorites.
          </Typography>
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
          bgcolor={color.lightGreen}
        >
          <Button variant="contained" color="success" onClick={onConfirm}>
            <Typography variant="h3">OK</Typography>
          </Button>
        </Box>
      }
    ></PokedexModal>
  );
};
