"use client";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

export default function Header({ menus }: any) {

  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Toolbar sx={{ justifyContent: "space-between" }}>

        {/* Logo */}
        <Typography variant="display00" component="h1">
          MetaApply
        </Typography>

        {/* Navigation */}
        <Box sx={{ display: "flex", gap: 3 }}>
          {menus?.map((menu: any) => (
            <Typography key={menu.id}>
              {menu.attributes?.title}
            </Typography>
          ))}
        </Box>

        {/* CTA Button */}
        <Button variant="outlined" color="primary">
          Book 1:1 Counselling
        </Button>

      </Toolbar>
    </AppBar>
  );
}