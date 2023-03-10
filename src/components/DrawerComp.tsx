import { Drawer, Box, Typography, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

const DrawerComp = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <div className="drawer-container">
      <>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="logo"
          onClick={() => setIsDrawerOpen(true)}
        >
          <MenuIcon />
        </IconButton>
        <big>
          <b> Indian Staple Food Statistics </b>{" "}
        </big>
        <Drawer
          anchor="left"
          open={isDrawerOpen}
          onClose={() => setIsDrawerOpen(false)}
        >
          <Box p={2} width="250px" textAlign="center" role="presentation">
            <Typography variant="h6" component="div">
              Side panel
            </Typography>
          </Box>
        </Drawer>
      </>
    </div>
  );
};

export default DrawerComp;
