import { Typography, Link } from '@mui/material';
import { useMediaQuery } from '@mui/material';

const Projects = ({darkMode}) => {
    const openUL = `<ul>`
    const closeUL = `</ul>`
    const openLI = `<li>`
    const closeLI = `</li>`
    const openP = `<p>`
    const closeP = `</p>`
    const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));

    const quotedText = [
        { title: "Immortal Bot", url: "https://github.com/rpatel1023/ImmortalBot", description: "A discord bot for fetching and posting pro-Dota 2 matches" },
        { title: "Valorant Tracker", url: "https://github.com/rpatel1023/valorant_tracker", description: "A stat-tracking app for Valorant performance" },
        { title: "Glimpse", url: "", description: "Automated data pipeline tracking high-skill Dota 2 matches for analytics"},
        { title: "Portfolio", url: "https://github.com/rpatel1023/rpatel1023.github.io", description: "This website! Made with React + Material UI"}
    ]

    return (
        <div style={{ display: "flex",flexDirection: isSmallScreen ? 'column' : 'row', justifyContent: 'center', alignItems: 'center' }}>
            <Typography
                variant="p"
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    fontSize: "1.3em",
                    fontFamily: "Monaco, Consolas, Lucida Console, monospace",
                    padding: "0.9em",
                    color: darkMode ?  "#9CDCFE": "#1A3635",
                    margin: "1.4em",
                }}
            >
                {openP} I've done a handful of projects between my internships, coursework,
                and personal ventures. I started early in college designing Discord
                bots for my friends, to creating data transformation pipelines for
                esports and full-stack applications in internships/coursework. Here's
                a few to explore, &nbsp;
                {closeP}
            </Typography>
            <Typography
                variant="p"
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    fontSize: "1.3em",
                    fontFamily: "Monaco, Consolas, Lucida Console, monospace",
                    padding: "0.9em",
                    color: darkMode ? "#A4B1A9": "#292F46",
                    margin: "1.4em",
                }}
            >
                {openUL}
                <br />
                {quotedText.map((elem) =>
                    <Typography sx={{
                        fontSize: "1.1em",
                        fontFamily: "Monaco, Consolas, Lucida Console, monospace",
                        color: darkMode ? "#A4B1A9": "#404B6F",
                    }}>
                        &nbsp;&nbsp;{openLI} {<Link href={elem.url} color={ darkMode ? "#C97E7D" : "#765A35"}>{elem.title}</Link>}: {elem.description} {closeLI}
                    </Typography>
                )}
                {closeUL}
            </Typography>
        </div>
    );
};

export default Projects
