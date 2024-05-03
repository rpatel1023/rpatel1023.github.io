import { Typography } from '@mui/material';
import { Spotify } from 'react-spotify-embed';
import { useMediaQuery } from '@mui/material';

const About = ({darkMode}) => {
    const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));

    return (
      <div style={{ display: "flex",flexDirection: isSmallScreen ? 'column' : 'row', justifyContent: 'center', alignItems: 'center' }}>
        <Typography
          variant="p"
          sx={{
            display: "flex",
            fontSize: "1.3em",
            fontFamily: "Monaco, Consolas, Lucida Console, monospace",
            padding: "1.2em",
            color: darkMode ? "#D9E3E3" : "#2F2B25 ",
          }}
        >
          Like most developers, I enjoy the challenges that come with writing
          software, and find a lot of satisfaction in completing a new project.
          Most of my projects in the past were completed on the side during
          college, but I'd like to take on more complex challenges with the
          experience I've gained working in the industry. <br />
          <br />
          Personally, I've always loved the film Moneyball, and admired the idea
          of using data science to gain competitive advantages in sports. I've
          been able to replicate this in some esports contexts, previously
          working with Evil Geniuses and Shopify Rebellion's Dota 2 rosters.{" "}
          <br />
          <br />
          There's still so many areas of technology that I'd like to learn about
          and experience, and I'm always interested in new projects related to
          sports, esports, or anything in between. If you'd like to work
          together, let me know!
        </Typography>
        <Spotify
          link="https://open.spotify.com/playlist/0X3VJiIFr0Bla1HCKvNqX9"
          style={{ padding: "12px"}}
        />
      </div>
    );
};

export default About;
