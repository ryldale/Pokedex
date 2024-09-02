"use client";
import { formatName } from "@/shared/components/formatname";
import PokedexModal from "@/shared/components/PokedexModal";
import { color } from "@/shared/constant/color";
import {
  CheckIcon,
  ExclamationTriangleIcon,
} from "@heroicons/react/24/outline";
import { Box, Button, Typography } from "@mui/material";

type propType = {
  closeHandler: () => void;
  onConfirm: () => void;
  name: string;
};

export const ConfirmModal = ({
  closeHandler,
  onConfirm,
  name,
}: propType) => {
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
            color={color.error}
            style={{
              borderRadius: "100%",
              background: color.lightRed,
              padding: "8px",
            }}
            width={"2.5rem"}
            height={"2.5rem"}
          />
          <Typography variant="h3" color={color.error}>
            Remove Pokémon from Favorites?
          </Typography>
          <Typography>
            Are you sure you want to remove '
            <strong>{formatName(name)}</strong>' from your favorites?
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
          bgcolor={color.lightRed}
        >
          <Button
            variant="text"
            color="primary"
            sx={{ color: color.n4 }}
            onClick={closeHandler}
          >
            <Typography variant="h3">Cancel</Typography>
          </Button>
          <Button variant="contained" color="error" onClick={onConfirm}>
            <Typography variant="h3">Remove</Typography>
          </Button>
        </Box>
      }
    ></PokedexModal>
  );
};

export const StatusModal = ({
  closeHandler,
  onConfirm,
  name,
}: propType) => {
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
            Pokémon Removed
          </Typography>
          <Typography>
            '<strong>{formatName(name)}</strong>' has been successfully
            removed from your favorites.
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
