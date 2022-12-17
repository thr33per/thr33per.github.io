import { createTheme } from "@mui/material";

declare module "@mui/material/styles" {
    interface Palette {
        lightGray: Palette["primary"];
        darkGray: Palette["primary"];
        textGray: Palette["primary"];
        lightOrange: Palette["primary"];
        darkOrange: Palette["primary"];
        textOrange: Palette["primary"];
    }
    interface PaletteOptions {
        lightGray: PaletteOptions["primary"];
        darkGray: PaletteOptions["primary"];
        textGray: PaletteOptions["primary"];
        lightOrange: PaletteOptions["primary"];
        darkOrange: PaletteOptions["primary"];
        textOrange: PaletteOptions["primary"];
    }
}

export const theme = createTheme({
    palette: {
        lightGray: {
            main: "#C5C5C4",
        },
        darkGray: {
            main: "#232325",
        },
        textGray: {
            main: "#696A6B",
        },
        lightOrange: {
            main: "#E79027",
        },
        darkOrange: {
            main: "#9B532A",
        },
        textOrange: {
            main: "#D69B58",
        },
    },
});
