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
};

const ActionMenu = ({ anchorEl, open, handleClose, onViewClick }: propType) => {
  return (
    <Menu
      id="pokemon-menu"
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
    >
      <MenuItem onClick={onViewClick}>
        <ArrowTopRightOnSquareIcon
          width={"1.5rem"}
          height={"1.5rem"}
          style={{ marginRight: "8px" }}
        />
        View
      </MenuItem>
      <MenuItem onClick={handleClose}>
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
