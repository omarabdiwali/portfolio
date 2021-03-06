import React from 'react';
import { Header, Grommet, Menu, ResponsiveContext, Anchor, Box } from 'grommet';
import { Menu as MenuIcon, Code, Home, Projects, MailOption, Github, Linkedin } from 'grommet-icons';
import { grommet } from 'grommet/themes';

export default function PageHeader() {

  return (
    <Grommet theme={grommet} style={{width: "100%", position: "absolute", top: 0, right: 0}}>
      <Header background="black" pad="medium" height="xsmall">
        <Anchor
          href="/"
          icon={<Code color="accent-1" />}
          label="Omar Abdiwali"
          color="white"
          size="xlarge"
          style={{boxShadow: "none"}}
        />
        <ResponsiveContext.Consumer>
          {size =>
            size === 'small' ? (
              <Box justify="end">
                <Menu
                  a11yTitle="Navigation Menu"
                  dropProps={{ align: { top: 'bottom', right: 'right' } }}
                  icon={<MenuIcon color="brand" />}
                  style={{boxShadow: "none"}}
                  items={[
                    {
                      label: <Box pad="small">Home</Box>,
                      href: "/",
                      icon: <Home/>
                    },
                    {
                      label: <Box pad="small">Projects</Box>,
                      href: "/projects",
                      icon: <Projects />
                    },
                    {
                      label: <Box pad="small">Email</Box>,
                      href: "mailto:omarabdiwali17@gmail.com",
                      icon: <MailOption />
                    },
                    {
                      label: <Box pad="small">Github</Box>,
                      href: "https://github.com/omarabdiwali",
                      icon: <Github />
                    },
                    {
                      label: <Box pad="small">LinkedIn</Box>,
                      href: "https://www.linkedin.com/in/omar-abdiwali/",
                      icon: <Linkedin />
                    }
                  ]}
                />
              </Box>
            ) : (
              <Box justify="end" direction="row" gap="medium" style={{paddingLeft: "10%"}}>
                <Anchor href='/' label="Home" color="white" icon={<Home color="accent-1" />} style={{boxShadow: "none"}} />
                  <Anchor
                  href="/projects"
                  label="Projects"
                  color="white"
                  icon={<Projects color="accent-1" />}
                  style={{boxShadow: "none"}}
                />
                <Anchor href="mailto:omarabdiwali17@gmail.com" label="Email" color="white" icon={<MailOption color="accent-1" />} style={{boxShadow: "none"}} />
                <Anchor href="https://github.com/omarabdiwali" target="_blank" label=" " icon={<Github color="accent-1" />} style={{ boxShadow: "none" }} />
                <Anchor href="https://linkedin.com/in/omar-abdiwali" target="_blank" label=" " icon={<Linkedin color="accent-1" />} style={{boxShadow: "none"}} />
              </Box>
            )
          }
        </ResponsiveContext.Consumer>
      </Header>
    </Grommet>
  )
}
