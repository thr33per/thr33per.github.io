import { Divider, Grid, Typography } from "@mui/material";
import ApacheAirflowIcon from "../media/ApacheAirflowIcon";
import BashIcon from "../media/BashIcon";
import CssIcon from "../media/CssIcon";
import DockerIcon from "../media/DockerIcon";
import FastApiIcon from "../media/FastApiIcon";
import GithubIcon from "../media/GithubIcon";
import GitlabIcon from "../media/GitlabIcon";
import HtmlIcon from "../media/HtmlIcon";
import JavascriptIcon from "../media/JavascriptIcon";
import MaterialUiIcon from "../media/MaterialUiIcon";
import PowerShellIcon from "../media/PowerShellIcon";
import PythonIcon from "../media/PythonIcon";
import ReactIcon from "../media/ReactIcon";
import ReduxIcon from "../media/ReduxIcon";
import TailwindIcon from "../media/TailwindIcon";
import TypescriptIcon from "../media/TypescriptIcon";
import ViteIcon from "../media/ViteIcon";

const items = [
    <PythonIcon />,
    <FastApiIcon />,
    <ApacheAirflowIcon />,
    <PowerShellIcon />,
    <BashIcon />,
    <HtmlIcon />,
    <CssIcon />,
    <JavascriptIcon />,
    <TypescriptIcon />,
    <ReactIcon />,
    <ViteIcon />,
    <ReduxIcon />,
    <TailwindIcon />,
    <MaterialUiIcon />,
    <DockerIcon />,
    <GithubIcon />,
    <GitlabIcon />,
];

const Skills = () => {
    return (
        <>
            <Divider variant="middle">
                <Typography variant="subtitle2" sx={{ fontWeight: "100" }}>
                    SKILLS
                </Typography>
            </Divider>
            <Grid
                item
                container
                spacing={2}
                sx={{
                    marginRight: 2,
                    marginLeft: 2,
                    marginTop: 1,
                }}
            >
                {items.map((itm, num) => {
                    return (
                        <Grid
                            item
                            key={num}
                            xs={4}
                            sx={{
                                "&:hover": {
                                    color: "darkOrange.main",
                                    transform: "scale(1.25)",
                                },
                            }}
                        >
                            {itm}
                        </Grid>
                    );
                })}
            </Grid>
        </>
    );
};

export default Skills;
