import { Box, Divider, Link, Typography } from "@mui/material";
import { reverseString } from "../util/functions";

const Contact = () => {
    return (
        <Box sx={{ marginTop: 2 }}>
            <Divider>
                <Typography variant="subtitle2" sx={{ fontWeight: "100" }}>
                    CONTACT
                </Typography>
            </Divider>
            <Box sx={{ marginTop: 2, textAlign: "center" }}>
                <Typography
                    sx={{
                        fontStyle: "italic",
                        fontWeight: "100",
                        fontSize: "1.5rem",
                    }}
                >
                    {reverseString(import.meta.env.VITE_PHONE)}
                </Typography>
                <Link
                    href={"mailto:" + reverseString(import.meta.env.VITE_EMAIL)}
                    sx={{ color: "darkOrange.main", textDecoration: "none" }}
                >
                    <Typography
                        sx={{
                            fontStyle: "italic",
                            fontWeight: "100",
                            fontSize: "0.9rem",
                        }}
                    >
                        {reverseString(import.meta.env.VITE_EMAIL)}
                    </Typography>
                </Link>
            </Box>
        </Box>
    );
};

export default Contact;
