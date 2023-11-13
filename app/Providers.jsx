"use client";
import { ThemeProvider } from "next-themes";
import { MantineProvider } from "@mantine/core";

import React from "react";

const Providers = ({ children }) => {
  return (
    <MantineProvider theme={{ loader: "bars" }}>
      <ThemeProvider enableSystem={true} attribute="class">
        <div className="dark:bg-gray-700 dark:text-gray-200 text-gray-700 transition-colors duration-300 min-h-screen select-none">
          {children}
        </div>
      </ThemeProvider>
    </MantineProvider>
  );
};

export default Providers;
