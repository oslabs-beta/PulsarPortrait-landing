import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import CheckIcon from '@mui/icons-material/Check';
import { GitHub } from '@mui/icons-material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Avatar from '@mui/material/Avatar';
import Alert from '@mui/material/Alert';
import Badge from '@mui/material/Badge';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Link } from 'react-scroll';

export default function Body() {
  const [clicked, setClicked] = useState(false);
  function copyCode() {
    navigator.clipboard.writeText(code);
    setClicked(true);

    setTimeout(() => {
      setClicked(false);
    }, 3000);
  }

  const code = `
  prometheus:
    image: pulsarportrait/prometheus:latest
    container_name: prometheus
    networks:
      - pulsar
    ports:
      - "9090:9090"

  pulsarportrait:
    image: pulsarportrait/app:latest
    container_name: pulsarportrait
    networks:
      - pulsar
    ports:
      - "3333:3333"

  grafana:
    image: pulsarportrait/grafana:latest
    container_name: grafana
    networks:
      - pulsar
    ports: 
      - "2222:3000"
    depends_on:
      - prometheus
  `;
  return (
    <>
      <Container
        maxWidth={false}
        id='header'
        sx={{
          // background: 'radial-gradient(circle at 90% 5%, rgb(147, 24, 204) 0%, rgb(118, 37, 231) 99.4%)',
          // bgcolor: '#e0e0e0',
          maxWidth: '100%',
          height: '100vh',
          display: {
            md: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
            justifyContent: 'center',
          },
        }}
      >
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            mt: '-15%',
          }}
        >
          <Avatar
            src='https://cdn.discordapp.com/attachments/1120822627880144916/1131335983279906918/LogoTransparent.png'
            sx={{
              height: '700px',
              width: '500px',
              alignItems: 'left',
              ml: '5%',
            }}
          />
          <Box
            sx={{
              fontSize: '3.5rem',
              color: '#ffff',
              letterSpacing: '.3rem',
              textAlign: 'right',
              flex: 1,
              mb: '-5%',
            }}
          >
            PulsarPortrait
          </Box>
        </Box>
        <Box
          component='p'
          sx={{
            maxWidth: '40%',
            mr: '10%',
            color: '#ffff',
            fontSize: '1.8rem',
            mt: '-18%',
          }}
        >
          PulsarPortait is a tool made for developers to help visualize Apache
          Pulsar cluster metrics.
        </Box>
        <Box sx={{ mr: '10%', display: { md: 'flex' } }}>
          <Link to='get-started' smooth={true} duration={500} offset={-70}>
            <Button
              sx={{
                my: 2,
                mr: '5px',
                color: 'black',
                boxShadow: '0px 3px 7px rgba(0,0,0,0.2)',
                bgcolor: 'yellow',
                display: 'block',
                ':hover': {
                  bgcolor: 'rgba(149, 149, 149, 0.419)',
                  color: 'white',
                },
              }}
            >
              Get Started
            </Button>
          </Link>
          <Link to='features' smooth={true} duration={500} offset={-60}>
            <Button
              sx={{
                my: 2,
                color: 'white',
                boxShadow: '0px 3px 7px rgba(0,0,0,0.2)',
                bgcolor: '#e0e0e028',
                border: '1px solid #cbcbcb',
                display: 'block',
                ':hover': { bgcolor: '#e0e0e048', color: 'white' },
              }}
            >
              Learn More
            </Button>
          </Link>
        </Box>
      </Container>
      <Container
        id='features'
        maxWidth={false}
        sx={{
          bgcolor: '#cbcbcb',
          maxWidth: '100%',
          display: { md: 'flex' },
          pt: '2%',
          pb: '2%',
        }}
      >
        <Container
          sx={{
            display: {
              md: 'flex',
              width: '30%',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'flex-start',
            },
          }}
        >
          <Box
            sx={{
              fontSize: '2.5rem',
              color: '#2c2c2c',
              letterSpacing: '.3rem',
              mt: '5%',
              textAlign: 'center',
            }}
          >
            Features
          </Box>
          <Box component='p' sx={{ fontSize: '1.8em' }}>
            View critical pulsar broker metrics like throughput, backlog, CPU
            resource consumption and more.
          </Box>
        </Container>
        <Container id='screenshots'>
          <Box
            component='img'
            src='https://cdn.discordapp.com/attachments/1120822627880144916/1131305167929737276/ppdemogif.gif'
            sx={{
              m: '2%',
              width: '100%',
              height: 'auto',
              borderRadius: '10px',
            }}
          />
        </Container>
      </Container>
      <Container
        id='get-started'
        maxWidth={false}
        sx={{
          bgcolor: '#ffff',
          maxWidth: '100%',
          display: {
            md: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          },
        }}
      >
        <Box
          component='h1'
          sx={{
            width: '100%',
            fontSize: '2.5rem',
            color: '#2c2c2c',
            letterSpacing: '.3rem',
            mt: '5%',
            textAlign: 'center',
          }}
        >
          Install
        </Box>
        <Box
          component='p'
          sx={{
            maxWidth: '100%',
            color: '#2c2c2c',
            fontSize: '1.8rem',
            pb: '10px',
            textAlign: 'center',
          }}
        >
          To install, simply copy and paste this code into the services
          dictionary in your <code id='compose-code'>compose.yml</code> file.
        </Box>
        <Box component='p' sx={{ pb: '10px' }}>
          * Our application's default image networks are set to{' '}
          <strong>pulsar</strong>, if your network names are different, be sure
          to update the compose.yml with your network name.
        </Box>
        <Box
          component='div'
          sx={{ display: { md: 'flex', justifyContent: 'center' } }}
        >
          <Box
            component='div'
            id='code-container'
            sx={{
              width: '100%',
              bgcolor: '#212121',
              borderRadius: '10px',
              p: '20px',
              mb: '20px',
              display: {
                md: 'flex',
                justifyContent: 'space-between',
                alignItems: 'start',
              },
            }}
          >
            <Box component='pre' sx={{ whiteSpace: 'pre', overflowX: 'auto' }}>
              <Box component='code' sx={{ color: '#c145ff', fontSize: '1rem' }}>
                {code}
              </Box>
            </Box>
            <IconButton onClick={copyCode}>
              <Badge
                // <CheckCircleIcon />
                badgeContent={
                  clicked ? <CheckCircleIcon sx={{ color: '#52f322' }} /> : null
                }
                anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
                sx={{ color: '#52f322' }}
              >
                <ContentCopyIcon sx={{ color: 'white' }} />
              </Badge>
            </IconButton>
          </Box>
        </Box>
        <Box
          component='h1'
          sx={{
            width: '100%',
            fontSize: '2.5rem',
            color: '#2c2c2c',
            letterSpacing: '.3rem',
            mt: '5%',
            textAlign: 'center',
          }}
        >
          Alternatively,
        </Box>
        <Box
          component='p'
          sx={{
            width: '100%',
            color: '#2c2c2c',
            fontSize: '1.8rem',
            pb: '20px',
            textAlign: 'center',
          }}
        >
          if you already have a project that uses Pulsar and do not want to edit
          your compose.yml file, please fork and clone our{' '}
          <a
            href='https://github.com/oslabs-beta/PulsarPortrait/blob/main/README.md'
            target='._blank'
            style={{
              color: '#1976d2',
              textDecoration: 'underline',
            }}
          >
            GitHub Repo
          </a>{' '}
          and follow the instructions in the README
        </Box>
      </Container>
      <Container
        id='contact-section'
        maxWidth={false}
        sx={{
          bgcolor: '#cbcbcb',
          maxWidth: '100%',
          display: {
            md: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
          },
        }}
      >
        <Box
          component='h1'
          sx={{
            width: '100%',
            mb: '100px',
            fontSize: '3rem',
            color: '#2c2c2c',
            letterSpacing: '.3rem',
            mt: '5%',
            textAlign: 'center',
          }}
        >
          Our Team
        </Box>
        <Box
          component='div'
          sx={{
            mb: '100px',
            width: '100%',
            display: {
              md: 'flex',
              justifyContent: 'space-evenly',
              alignItems: 'center',
            },
          }}
        >
          <Box className='info-tile'>
            <Box
              sx={{
                m: '10%',
                display: { md: 'flex', justifyContent: 'center' },
              }}
            >
              <Avatar
                src='https://cdn.discordapp.com/attachments/1120822627880144916/1131331274074751137/Anthony.png'
                sx={{ height: 170, width: 170 }}
              />
            </Box>
            <Typography
              sx={{ fontSize: '1.5rem', fontFamily: 'Rajdhani, sans-serif' }}
            >
              Anthony Le
            </Typography>
            <IconButton href='https://github.com/anthonyle910'>
              <GitHub />
            </IconButton>
            <IconButton href='https://www.linkedin.com/in/anthony-le-616b4b101/'>
              <LinkedInIcon />
            </IconButton>
          </Box>
          <Box className='info-tile'>
            <Box
              sx={{
                m: '10%',
                display: { md: 'flex', justifyContent: 'center' },
              }}
            >
              <Avatar
                src='https://cdn.discordapp.com/attachments/1120822627880144916/1131331274733269092/Cyrux.jpg'
                sx={{ height: 170, width: 170 }}
              />
            </Box>
            <Typography
              sx={{ fontSize: '1.5rem', fontFamily: 'Rajdhani, sans-serif' }}
            >
              Cyrux Lam
            </Typography>
            <IconButton href='https://github.com/cyduckk'>
              <GitHub />
            </IconButton>
            <IconButton href='https://www.linkedin.com/in/cyrux-lam-a45141133/'>
              <LinkedInIcon />
            </IconButton>
          </Box>
          <Box className='info-tile'>
            <Box
              sx={{
                m: '10%',
                display: { md: 'flex', justifyContent: 'center' },
              }}
            >
              <Avatar
                src='https://cdn.discordapp.com/attachments/1120822627880144916/1131331275240783932/Grant.jpg'
                sx={{ height: 170, width: 170 }}
              />
            </Box>
            <Typography
              sx={{ fontSize: '1.5rem', fontFamily: 'Rajdhani, sans-serif' }}
            >
              Grant Thomas
            </Typography>
            <IconButton href='https://github.com/GrantCT'>
              <GitHub />
            </IconButton>
            <IconButton href='https://www.linkedin.com/in/grantcthomas/'>
              <LinkedInIcon />
            </IconButton>
          </Box>
          <Box className='info-tile'>
            <Box
              sx={{
                m: '10%',
                display: { md: 'flex', justifyContent: 'center' },
              }}
            >
              <Avatar
                src='https://cdn.discordapp.com/attachments/1120822627880144916/1131331275609866290/Jordan.JPG'
                sx={{ height: 170, width: 170 }}
              />
            </Box>
            <Typography
              sx={{ fontSize: '1.5rem', fontFamily: 'Rajdhani, sans-serif' }}
            >
              Jordan Zolman
            </Typography>
            <IconButton href='https://github.com/PrincePuggo'>
              <GitHub />
            </IconButton>
            <IconButton href='https://www.linkedin.com/in/jordanzolman/'>
              <LinkedInIcon />
            </IconButton>
          </Box>
        </Box>
      </Container>
    </>
  );
}
