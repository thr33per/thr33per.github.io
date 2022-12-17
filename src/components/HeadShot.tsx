import { Avatar, Box, Typography } from "@mui/material";
import { reverseString } from "../util/functions";

const HeadShot = () => {
    return (
        <>
            <Box
                sx={{
                    marginTop: 2,
                    marginBottom: 2,
                    display: "flex",
                    justifyContent: "center",
                }}
            >
                <Avatar
                    src="/images/profile.jpeg"
                    sx={{
                        width: 220,
                        height: 220,
                        backgroundColor: "darkGray.main",
                    }}
                >
                    Avatar
                </Avatar>
            </Box>
            <Box sx={{ textAlign: "center", marginBottom: 2 }}>
                <Typography sx={{ fontWeight: "100" }}>
                    {reverseString(import.meta.env.VITE_CURRENT_JOB_TITLE)}
                </Typography>
                <Typography variant="h5">
                    {reverseString(import.meta.env.VITE_FULLNAME)}
                </Typography>
                <Typography
                    variant="subtitle1"
                    sx={{ fontStyle: "italic", fontWeight: "100" }}
                >
                    {reverseString(import.meta.env.VITE_LOCATION.toUpperCase())}
                </Typography>
            </Box>
        </>
    );
};
export default HeadShot;
