import { Typography, Link } from '@mui/material';
import { useMediaQuery } from '@mui/material';

const Contact = ({darkMode}) => {
    const openBracket = `{`;
    const closeBracket = `}`;
    const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));

    const contactInfo = [
        {title: "email", link: "patelrushi1023@gmail.com"},
        {title: "linkedin", link: "https://www.linkedin.com/in/patelrushi01"},
        {title: "github", link: "https://github.com/rpatel1023"},
        {title: "twitter", link: "https://twitter.com/rushiipatel"},
    ]
    
    return (
      <div style={{ display: "flex",flexDirection: isSmallScreen ? 'column' : 'row',}}>
            <Typography
                variant="p"
                sx={{
                    display: "flex",
                    flexDirection: 'column',
                    justifyContent: "space-between",
                    fontSize:  isSmallScreen ? "0.8em": "1.1em",
                    fontFamily: "Monaco, Consolas, Lucida Console, monospace",
                    padding: "0.9em",
                    color: darkMode ? "#DDDA9D" : "#404B6F",
                    margin: "1.4em",
                    wordWrap: "break-word"
                }}
            >
                {contactInfo.map((elem) =>
                    <Typography sx={{fontSize: "1.1em", fontFamily: "Monaco, Consolas, Lucida Console, monospace", color: "#CCCCC"}}>
                        {elem.title} {openBracket} <br/>
                        &nbsp;link: {<Link href={elem.link} color={darkMode ? "#CE4B6C" : "#61594F"}>{elem.link}</Link>} <br/>
                        {closeBracket} <br/><br/>
                    </Typography>
                )}
            </Typography>
        </div>
    );
};

export default Contact;
