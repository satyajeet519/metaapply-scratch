"use client";

import { useState } from "react";
import Link from "next/link";
import { AppBar, Toolbar, Typography, Button, Box, IconButton, Menu, MenuItem, Container } from "@mui/material";
import Image from "next/image";
import Mielogo from '../../public/Header/mie-logo.svg'

type HeaderProps = {
  menus: any[];
};

export default function Header({ menus }: HeaderProps) {
  const [anchorEl, setAnchorEl] = useState([])

  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Toolbar sx={{ justifyContent: "space-between" }}>

        {/* Logo */}
        <Link href="/"> <Image src={Mielogo} alt="Metaapply"/> </Link>
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