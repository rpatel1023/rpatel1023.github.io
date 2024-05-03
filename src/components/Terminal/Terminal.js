import { Typography, Box, Link } from "@mui/material";
import ReactTypingEffect from 'react-typing-effect';
import "./Terminal.css";


const Terminal = ({darkMode}) => {
    const terminalColor = darkMode ? "darkMode" : "lightMode"
    return (
        <div className="terminal">
          <div className={`terminal-header ${terminalColor}`}>
            <div className="header-button red"/>
            <div className="header-button yellow"/>
            <div className="header-button green"/>
          </div>
          <div className={`terminal-window ${terminalColor}`}>
          <Box sx={{gap: 1, display: 'flex', flexDirection: "column", justifyContent: "center", alignItems: "flex-start", minHeight: "60vh", }}>
          <ReactTypingEffect text={"Hi, I'm Rushi"} style={{display: 'flex', justifyContent: 'space-between', fontSize: '3.1em', fontFamily: 'Monaco, Consolas, Lucida Console, monospace', padding: '0.5em', color: "white"}}/>
            <Typography variant="p" sx={{display: 'flex', justifyContent: 'space-between', fontSize: '1.1em', fontFamily: 'Monaco, Consolas, Lucida Console, monospace', padding: '1.1em', color: "white"}}>
              > I'm a software engineer at Amazon based in Austin, TX. 
              I recently graduated from UT Austin with a B.S. in Electrical and Computer Engineering.
              When I'm not writing code, I spend most of my time playing video games, spending time with my dog Levi, or watching sports (and esports!). <br/> <br/>
              > Although I'm a developer at heart, I've worked in a lot of different roles in the past: <br/> 
            </Typography>
            <Typography variant="p" sx={{display: 'flex', justifyContent: 'flex-start', fontSize: '1.1em', lineHeight: '1.6em', fontFamily: 'Monaco, Consolas, Lucida Console, monospace', padding: '1.1em', color: "white"}}>
              <ul>
                <li>Helped coordinate the annual Bomb Technician Workshop at <Link href="https://www.nasa.gov/johnson/" underline="none" color={"#E88878    "}>Johnson Space Center</Link>.</li>
                <li>Studied ideal building conditions at <Link href="https://www.ie-lab.org/" underline="none" color={"#E39237"}>UT Austin's Intelligent Environments Laboratory</Link>.</li>
                <li>Worked on the launch of <Link href="https://teamliquid.com/" underline="none" color={"#78A7E5"}>Team Liquid's</Link> loyalty platform in their pilot internship program.</li>
                <li>Cultivated competitive advantages in esports through data science at <Link href="https://evilgeniuses.gg/" underline="none" color={darkMode ? "#3B73E7": "#17233C"}>Evil Geniuses</Link>.</li>
                <li>Kept the internet clean for good at <Link href="https://cleandns.com/" underline="none" color={"#4EB278"}>CleanDNS</Link>.</li>
                <li>Built (building!) marketing tools at <Link href="https://www.amazon.com/fmc/storefront?almBrandId=QW1hem9uIEZyZXNo" underline="none" color={"#82EA64"}>Amazon Fresh</Link>.</li>
              </ul>
            </Typography>

          </Box>
          </div>
        </div>
    )
}


export default Terminal;
