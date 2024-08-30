import {
  ArrowTopRightOnSquareIcon,
  StarIcon,
} from "@heroicons/react/24/outline";
import { Menu, MenuItem } from "@mui/material";

type propType = {
  anchorEl: null | HTMLElement;
  open: boolean;
  handleClose: () => void;
  onViewClick: () => void;
  onMarkAsFavorite: () => void;
};

const ActionMenu = ({
  anchorEl,
  open,
  handleClose,
  onViewClick,
  onMarkAsFavorite,
}: propType) => {
  return (
    <Menu
      id="pokemon-menu"
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
    >
      <MenuItem
        onClick={() => {
          onViewClick();
          handleClose();
        }}
      >
        <ArrowTopRightOnSquareIcon
          width={"1.5rem"}
          height={"1.5rem"}
          style={{ marginRight: "8px" }}
        />
        View
      </MenuItem>
      <MenuItem
        onClick={() => {
          onMarkAsFavorite();
          handleClose();
        }}
      >
        <StarIcon
          width={"1.5rem"}
          height={"1.5rem"}
          style={{ marginRight: "8px" }}
        />
        Mark as Favorite
      </MenuItem>
    </Menu>
  );
};

export default ActionMenu;
