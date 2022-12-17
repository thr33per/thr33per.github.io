import { Container, Grid } from "@mui/material";
import Contact from "./components/Contact";
import HeadShot from "./components/HeadShot";
import Skills from "./components/Skills";
import { reverseString } from "./util/functions";

// Icon Resource: https://simpleicons.org/

function App() {
    document.title = "Resume: " + reverseString(import.meta.env.VITE_FULLNAME);
    return (
        <Container maxWidth="md">
            <Grid
                container
                sx={{
                    height: "100vh",
                    boxShadow: "10px 10px 600px #713112",
                }}
            >
                <Grid
                    item
                    sm={12}
                    md={4}
                    sx={{
                        backgroundColor: "lightGray.main",
                        color: "darkGray.main",
                        paddingLeft: 0,
                        paddingRight: 0,
                    }}
                >
                    {/* Profile Overview */}
                    <HeadShot />
                    <Skills />
                    <Contact />
                </Grid>
                <Grid
                    item
                    sm={12}
                    md={8}
                    sx={{
                        backgroundColor: "darkGray.main",
                        color: "lightGray.main",
                    }}
                >
                    {/* Work history, etc... */}
                </Grid>
            </Grid>
        </Container>
    );
}

export default App;
