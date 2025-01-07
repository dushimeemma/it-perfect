"use client";

import { useState } from "react";
import { useTheme } from "next-themes";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { navLinks } from "@/app/helpers/stub-data/nav-links";
import Link from "next/link";
import Logo from "./Logo";
import Button from "@/app/components/reusable/Button";
import ThemeIcon from "../../reusable/Theme";

declare module "@mui/material/styles" {
  interface Theme {
    status: {
      danger: string;
    };
  }
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }
}

interface Props {
  buttonChildren: React.ReactNode;
}
export const lightTheme = createTheme({
  palette: {
    mode: "light",
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

export default function SideDrawer({ buttonChildren }: Props) {
  const [open, setOpen] = useState(false);
  const { theme } = useTheme();

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <Logo className="m-6 ml-3" />
      <Divider />
      <List>
        {navLinks.map((link) => (
          <ListItem
            key={link.name}
            className=" p-3 hover:rounded-md capitalize"
            disablePadding
          >
            <Link href={link.href}>
              <ListItemText>{link.name}</ListItemText>
            </Link>
          </ListItem>
        ))}
      </List>
      <Divider />
      <ThemeIcon classNames="m-6" />
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton className="flex items-center capitalize">
            <Link href="#home">
              <span className="text-primary ml-1">Login</span>
            </Link>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton className="flex items-center capitalize">
            <Link href="#home">
              <Button className="rounded-[1.875rem]">Get Started</Button>
            </Link>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div>
      <button className="lg:hidden" onClick={toggleDrawer(true)}>
        {buttonChildren}
      </button>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <Drawer open={open} onClose={toggleDrawer(false)}>
          {DrawerList}
        </Drawer>
      </ThemeProvider>
    </div>
  );
}
