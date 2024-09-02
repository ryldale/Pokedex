import { EllipsisHorizontalCircleIcon } from "@heroicons/react/24/solid";
import { IconButton, TableCell, TableRow } from "@mui/material";
import React, { MouseEvent, useState } from "react";
import ActionMenu from "@/shared/components/action";
import { ItemDetails } from "../reducer/item_init";
import { formatName } from "@/shared/components/formatname";
import { color } from "@/shared/constant/color";
import ViewModal from "./view-modal";
import { ConfirmModal, StatusModal } from "./modal";
import { markAsFavorite } from "../functions/markasfavorite";

type propType = {
  item: ItemDetails;
};

const ItemRow = ({ item }: propType) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const [isStatusModalOpen, setIsStatusModalOpen] = useState(false);

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleViewClick = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  const handleMarkAsFavorite = () => {
    setIsConfirmModalOpen(true);
  };

  const handleConfirm = async () => {
    await markAsFavorite(item, item.name);
    setIsConfirmModalOpen(false);
    setIsStatusModalOpen(true);
  };

  const handleStatusClose = () => {
    setIsStatusModalOpen(false);
  };
  const open = Boolean(anchorEl);
  const effect = item.effect_entries.map((effect) => effect.short_effect);

  return (
    <>
      {isModalOpen && (
        <ViewModal
          item={item}
          effect={effect}
          closeHandler={handleModalClose}
        />
      )}
      {isConfirmModalOpen && (
        <ConfirmModal
          closeHandler={() => setIsConfirmModalOpen(false)}
          onConfirm={handleConfirm}
          itemName={item.name}
        />
      )}

      {isStatusModalOpen && (
        <StatusModal
          closeHandler={handleStatusClose}
          onConfirm={handleStatusClose}
          itemName={item.name}
        />
      )}
      <TableRow key={item.id}>
        <TableCell style={{ width: "5%" }}>
          <img
            src={item.sprites.default}
            alt={item.name}
            width={50}
            height={50}
            style={{
              border: `1px solid ${color.n3}`,
              background: `${color.n1}`,
              borderRadius: "4px",
            }}
          />
        </TableCell>
        <TableCell style={{ width: "10%" }}>{formatName(item.name)}</TableCell>
        <TableCell style={{ width: "80%" }}>{effect}</TableCell>
        <TableCell style={{ width: "5%" }}>
          <IconButton onClick={handleClick}>
            <EllipsisHorizontalCircleIcon width={"1.5rem"} height={"1.5rem"} />
          </IconButton>
          <ActionMenu
            anchorEl={anchorEl}
            open={open}
            onMarkAsFavorite={handleMarkAsFavorite}
            handleClose={handleClose}
            onViewClick={handleViewClick}
          />
        </TableCell>
      </TableRow>
    </>
  );
};

export default ItemRow;
