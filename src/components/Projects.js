import React from 'react';
import {
  Box,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Grid,
  Grommet,
  Anchor,
  ResponsiveContext
} from 'grommet';
import { Language, Github, Ticket, Book, LineChart, Twitter, Reactjs, Html5 } from 'grommet-icons';
import { FaChess, FaPython } from 'react-icons/fa';
import { GiCardJoker } from 'react-icons/gi';
import { DiJavascript1 } from 'react-icons/di';

const theme = {
  themeMode: 'dark',
  global: {
    font: {
      family: `-apple-system,
           BlinkMacSystemFont, 
           "Segoe UI"`,
    },
  },
  card: {
    container: {
      background: 'dark-1',
      elevation: 'none',
    },
    footer: {
      pad: { horizontal: 'medium', vertical: 'large' },
      background: 'black',
    },
  },
};

const projects = [
  
  {
    title: [ "Study Cards", "https://github.com/omarabdiwali/study-cards", <Book /> ],
    body: "A little website that allows users to add cards over periods of time, with each card having 3 wrong answers and one right one.It stores cards in your local storage, and has the ability to add, delete, or edit any of the cards that are available. Cards are created as an object, and are stored in an array.",
    footer: [ "https://github.com/omarabdiwali/study-cards", "https://omarabdiwali.github.io/study-cards", "react" ]
  },

  {
    title: ["News Bot Twitter", "https://github.com/omarabdiwali/news-bot-twitter", <Twitter /> ],
    body: "A bot that gets news based on what you wants, and tweets it. Using an API and access keys from twitter, this program allows the bot to tweet by itself. It uses the datanews api and library to get the articles, getting some preference from user to base what it is gathering. This has a database that stores articles that have already been tweeted, and checks for new articles. Gets the first article that hasn't been tweeted yet, stores it into the database, and tweets the title, along with a link directing you to the page.",
    footer: [ "https://github.com/omarabdiwali/news-bot-twitter" ]
  },

  {
    title: [ "Command-Line Stock Program", "https://github.com/omarabdiwali/cmdline-stock-program", <LineChart /> ],
    body: "Gives you a base amount to start with, and allows you to buy stocks with it. Stocks are stored on a database, which you could view. You are able to check the values of your stock, by checking the net gain of when you bought it versus what the price is at currently. It also allows you to sell stocks, and lets you give the amount of number you would want to sell. Browsing the different stocks shows you the current price, the highest and lowest it was, the previous close, and the current date and time.",
    footer: [ "https://github.com/omarabdiwali/cmdline-stock-program" ]
  },

  {
    title: ["Chess", "https://github.com/omarabdiwali/chess", <FaChess /> ],
    body: "A basic chess game that ends when the king is captured. Functions are called to find the valid positions for each type of piece. In this, castling is not an option, but the pawn can move two pieces on its first move, and promotes to a queen when it reaches the eighth rank. It was made using p5.js",
    footer: [ "https://github.com/omarabdiwali/chess", "https://omarabdiwali.github.io/chess", "html" ]
  },

  {
    title: [ "Movie Browse", "https://github.com/omarabdiwali/movie-browse", <Ticket /> ],
    body: "This is a React App that displays basic data about movies, tv shows, and whatever is trending about the entertainment that shows up. It uses The Movie DB API to gather data, giving twenty pages of movie and tv-shows. When you click them, it gives details about the show or film, like the length, basic description, and seasons with the number of episodes. The trending page shows the shows and movies that are currently trending.",
    footer: [ "https://github.com/omarabdiwali/movie-browse", "https://omarabdiwali.github.io/movie-browse", "react" ]
  },

  {
    title: ["Blackjack", "https://github.com/omarabdiwali/blackjack", <GiCardJoker />],
    body: "A blackjack game that plays on your command line console. Players connect to it using a database, which stores their names and how much money they currently have. The game has the option to double, hit, and stand. The dealer stops hitting on 17, either hard or soft. It gives the option to play again, and add additional players. At the end of the game, it updates the amount of money.",
    footer: [ "https://gihub.com/omarabdiwali/blackjack" ]
  }
  
]

export default function Projects() {
  return (
    <Grommet theme={theme}>
      <ResponsiveContext.Consumer>
        {size => size === "small" ? (
        <Box pad="large" height="100%" style={{marginTop: "20%"}}>
          <Grid gap="medium" columns={{ count: 'fit', size: "medium" }}>
            
            {projects.map((project, i) => {
              return (
                <Card key={i}>
                  <CardHeader pad="medium">
                    <Anchor href={project.title[1]} size="xxlarge" target="_blank" label={project.title[0]} icon={project.title[2]} alignSelf="center" style={{ boxShadow: "none" }} />
                  </CardHeader>
                  <CardBody pad="medium">
                    {project.body}
                  </CardBody>
                  <CardFooter >
                    <Anchor href={project.footer[0]} target="_blank" label="Github" icon={<Github color="accent-1" size="medium" />} style={{ boxShadow: "none" }} />
                    
                    {project.footer[1] ? (
                      <>
                        <Anchor href={project.footer[1]} target="_blank" label="Website" icon={<Language color="accent-1" size="medium" />} style={{ boxShadow: "none" }} />
                        {project.footer[2] === "html" ? (
                          <Html5 color="accent-1" />
                        ) : (
                          <Reactjs color="accent-1" />
                        )}
                        <DiJavascript1 color="#6FFFB0" size="2em" />
                      </>
                    ) : (
                      <FaPython color="#6FFFB0" size="2em" />
                    )}

                  </CardFooter>
                </Card>)
            })}    
          
          </Grid>
        </Box>
      ) : (
        <Box pad="large" height="100%" style={{marginTop: "5%"}}>
          <Grid gap="medium" columns={{ count: 'fit', size: "medium" }}>

            {projects.map((project, i) => {
              return (
                <Card key={i}>
                  <CardHeader pad="medium">
                    <Anchor href={project.title[1]} size="xxlarge" target="_blank" label={project.title[0]} icon={project.title[2]} alignSelf="center" style={{ boxShadow: "none" }} />
                  </CardHeader>
                  <CardBody pad="medium">
                    {project.body}
                  </CardBody>
                  <CardFooter >
                    <Anchor href={project.footer[0]} target="_blank" label="Github" icon={<Github color="accent-1" size="medium" />} style={{ boxShadow: "none" }} />
                    
                    {project.footer[1] ? (
                      <>
                        <Anchor href={project.footer[1]} target="_blank" label="Website" icon={<Language color="accent-1" size="medium" />} style={{ boxShadow: "none" }} />
                        {project.footer[2] === "html" ? (
                          <Html5 color="accent-1" />
                        ) : (
                          <Reactjs color="accent-1" />
                        )}
                        <DiJavascript1 color="#6FFFB0" size="2em" />
                      </>
                    ) : (
                      <FaPython color="#6FFFB0" size="2em" />
                    )}
    
                  </CardFooter>
                </Card>
              )
            })}
          </Grid>
        </Box>
      )}
      </ResponsiveContext.Consumer>
    </Grommet>
  )
}