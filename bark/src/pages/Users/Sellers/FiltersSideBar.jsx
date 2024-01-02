import { useState } from "react";
import PropTypes from "prop-types";
import {
  Box,
  Button,
  Checkbox,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import FlexBetween from "../../../components/FlexBetween";
import CloseIcon from "@mui/icons-material/Close";

const FiltersSideBar = ({
  items,
  isDrawerOpen,
  setDrawerOpen,
  handleApplyFilters,
}) => {
  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  const [selected, setSelected] = useState([]);

  const [checkboxes, setCheckboxes] = useState(
    items.reduce((acc, item) => ({ ...acc, [item.id]: false }), {})
  );

  const handleCheckboxChange = (itemName) => {
    setCheckboxes((prevCheckboxes) => ({
      ...prevCheckboxes,
      [itemName]: !prevCheckboxes[itemName],
    }));

    if (selected.includes(itemName)) {
      const filtered = selected.filter((select) => select !== itemName);
      setSelected(filtered);
    } else {
      setSelected([...selected, itemName]);
    }
  };

  const submitFilters = () => {
    handleApplyFilters(selected);
    handleDrawerClose();
  };

  return (
    <>
      {/* Sidebar Drawer */}
      <Drawer anchor="left" open={isDrawerOpen} onClose={handleDrawerClose}>
        <FlexBetween>
          <Typography variant="h6" p={4}>
            Filter
          </Typography>
          <Box onClick={handleDrawerClose} p={2} m={2}>
            <CloseIcon sx={{ cursor: "pointer" }} />
          </Box>
        </FlexBetween>
        <List sx={{ width: "400px" }}>
          {items.map((item) => (
            <ListItem
              key={item.id}
              onClick={() => handleCheckboxChange(item.id)}
              button
            >
              <Checkbox checked={checkboxes[item.id]} />
              <ListItemText primary={item.label} />
            </ListItem>
          ))}
        </List>
        <Box p={4} display="flex" justifyContent="flex-end">
          <Button
            variant="contained"
            sx={{ width: "100px" }}
            onClick={submitFilters}
          >
            Apply
          </Button>
        </Box>
      </Drawer>
    </>
  );
};

FiltersSideBar.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  isDrawerOpen: PropTypes.bool.isRequired,
  setDrawerOpen: PropTypes.func.isRequired,
  handleApplyFilters: PropTypes.func.isRequired,
};

export default FiltersSideBar;
