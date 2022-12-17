import { Divider, Grid, IconButton, Tooltip, Typography } from "@mui/material";
import ApacheAirflowIcon from "../media/ApacheAirflowIcon";
import BashIcon from "../media/BashIcon";
import BitBucketIcon from "../media/BitBucketIcon";
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
    [<PythonIcon />, "Python 3", "https://www.python.org/"],
    [<FastApiIcon />, "FastAPI", "https://fastapi.tiangolo.com/"],
    [<ApacheAirflowIcon />, "Apache Airflow", "https://airflow.apache.org/"],
    [
        <PowerShellIcon />,
        "PowerShell Scripting",
        "https://learn.microsoft.com/en-us/powershell/",
    ],
    [<BashIcon />, "Bash Scripting", "https://www.gnu.org/software/bash/"],
    [
        <HtmlIcon />,
        "HTML 5",
        "https://developer.mozilla.org/en-US/docs/Glossary/HTML5",
    ],
    [<CssIcon />, "CSS 3", "https://developer.mozilla.org/en-US/docs/Web/CSS"],
    [
        <JavascriptIcon />,
        "Javascript",
        "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    ],
    [<TypescriptIcon />, "Typescript", "https://www.typescriptlang.org/docs/"],
    [<ReactIcon />, "React", "https://reactjs.org/"],
    [<ViteIcon />, "Vite", "https://vitejs.dev/"],
    [<ReduxIcon />, "Redux Toolkit", "https://redux-toolkit.js.org/"],
    [<TailwindIcon />, "Tailwind CSS", "https://tailwindcss.com/"],
    [<MaterialUiIcon />, "Material UI", "https://mui.com/"],
    [<DockerIcon />, "Docker", "https://www.docker.com/"],
    [<GithubIcon />, "Github", "https://github.com/"],
    [<GitlabIcon />, "Gitlab", "https://about.gitlab.com/"],
    [<BitBucketIcon />, "BitBucket", "https://bitbucket.org/product"],
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
                        <Grid item key={num} xs={4}>
                            <Tooltip title={itm[1]} placement="top">
                                <IconButton
                                    href={String(itm[2])}
                                    target="_blank"
                                    disableRipple
                                    sx={{
                                        margin: 0,
                                        padding: 0,
                                        "&:hover": {
                                            color: "darkOrange.main",
                                        },
                                    }}
                                >
                                    {itm[0]}
                                </IconButton>
                            </Tooltip>
                        </Grid>
                    );
                })}
            </Grid>
        </>
    );
};

export default Skills;
