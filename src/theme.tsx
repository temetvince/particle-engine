import {
   extendTheme,
   ThemeConfig,
   theme as base,
   withDefaultColorScheme,
   withDefaultVariant,
} from "@chakra-ui/react";
import { mode, StyleFunctionProps } from "@chakra-ui/theme-tools";
import { Dict } from "@chakra-ui/utils";

const inputSelectStyles = {
   variants: {
      filled: {
         field: {
            _focus: {
               borderColor: "brand.500",
            },
         },
      },
   },
   sizes: {
      md: {
         field: {
            borderRadius: "none",
         },
      },
   },
};

const brandRing = {
   _focus: {
      ring: 2,
      ringColor: "brand.500",
   },
};

const overrides = {
   fonts: {
      heading: `Roboto, ${base.fonts?.heading}`,
      body: `Yaldevi, ${base.fonts?.body}`,
   },
   colors: {
      brand: {
         50: "red",
         100: "blue",
         200: "green",
         300: "purple",
         400: "teal",
         500: "orange",
         600: "violet",
         700: "magenta",
         800: "yellow",
         900: "gray",
      },
   },
   components: {
      Input: { ...inputSelectStyles },
      Select: { ...inputSelectStyles },
      Checkbox: {
         baseStyle: {
            control: {
               borderRadius: "none",
               ...brandRing,
            },
         },
      },
      Button: {
         variants: {
            primary: (props: Dict | StyleFunctionProps) => ({
               rounded: "none",
               ...brandRing,
               color: mode("white", "gray.800")(props),
               backgroundColor: mode("brand.500", "brand.200")(props),

               _hover: {
                  backgroundColor: mode("brand.600", "brand.300")(props),
               },

               _active: {
                  backgroundColor: mode("brand.700", "brand.400")(props),
               },
            }),
         },
      },
   },
};

const config: ThemeConfig = {
   initialColorMode: "dark",
   useSystemColorMode: false,
};

const colorSchemeComponentOverrides = withDefaultColorScheme({
   colorScheme: "brand",
   components: ["Checkbox"],
});

const colorVariantsComponentOverrides = withDefaultVariant({
   variant: "filled",
   components: ["Input", "Select"],
});

const theme = extendTheme(
   overrides,
   config,
   colorSchemeComponentOverrides,
   colorVariantsComponentOverrides
);

export default theme;
