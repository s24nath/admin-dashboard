import { MenuItem } from "react-pro-sidebar";

import { Link } from "react-router-dom";

import { shades } from "../theme";

/* Import MUI component starts */
import { useTheme, Typography } from "@mui/material";
/* Import MUI component ends */

const SideBarItem = ({ title, to, icon, selected, setSelected }) => {
  /* Other hooks declaration starts */
  const theme = useTheme();
  /* Other hooks declaration ends */

  /* Component variable declaration / object destructure starts */
  const colors = shades(theme.palette.mode);
  /* Component variable declaration / object destructure ends */

  /* ************* Component rendering. JSX code ************* */

  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.grey[100],
      }}
      onClick={() => setSelected(title)}
      icon={icon}
      component={<Link to={to} />}
    >
      <Typography>{title}</Typography>      
    </MenuItem>
  );
};

export default SideBarItem;
