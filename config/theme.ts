import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
    typography: {
        fontFamily: ['Poppins','sans-serif',].join(','),
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 12,
                    textTransform: 'none'
                }
            }
        }
    }
});
theme = responsiveFontSizes(theme);

export default theme;