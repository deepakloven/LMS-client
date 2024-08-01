import { PaletteColor } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    naasaPrimary: PaletteColor;
    naasaTheme: PaletteColor;
    tertiary: PaletteColor;
  }
  interface PaletteOptions {
    naasaPrimary?: PaletteColor;
    naasaTheme?: PaletteColor;
    tertiary?: PaletteColor;
  }
}
