import React from "react";
import { Container, Grid, Typography, Link, Box, IconButton, Divider } from "@mui/material";
import { Facebook, Twitter, Pinterest, LinkedIn, Instagram } from "@mui/icons-material";
import Logo from '../Logo.png';

function Footer() {
  return (
    <Box component="footer" sx={{ bgcolor: "grey.900", color: "white", py: 4 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4} textAlign="center" sx={{ textAlign: { xs: "center", sm: "left" } }}>
     
          <Grid item xs={12} sm={6} md={4}>
             <Box sx={{ flexGrow: 1, position: 'relative' }}>
                       <Box
                         component="img"
                         src={Logo}
                         alt="Logo"
                         sx={{
                           height: '20rem', 
                           width:'15rem',  
                           position: 'absolute',
                           top: '-7rem',  
                           left: '-1rem',
                         }}
                       />
                     </Box>
          
      
            <Box sx={{ mt: 14 }}>
              <IconButton color="inherit">
                <Facebook />
              </IconButton>
              <IconButton color="inherit">
                <Twitter />
              </IconButton>
              <IconButton color="inherit">
                <Pinterest />
              </IconButton>
              <IconButton color="inherit">
                <LinkedIn />
              </IconButton>
              <IconButton color="inherit">
                <Instagram />
              </IconButton>
            </Box>
          </Grid>

       
          {[
            { title: "Menu", links: ["About", "Blog", "Contact", "Pages"] },
            { title: "Blog", links: ["Quote", "Post", "Video Post", "Gallery"] },
            { title: "Company", links: ["Select", "Services", "Payment"] },
            { title: "Services", links: ["Option", "Privling Page", "Account"] },
          ].map((section, index) => (
            <Grid item xs={6} sm={3} md={2} key={index}>
              <Typography variant="h6">{section.title}</Typography>
              {section.links.map((link, idx) => (
                <Typography key={idx} variant="body2" sx={{ mt: 1 }}>
                  <Link href="#" color="inherit" underline="hover">
                    {link}
                  </Link>
                </Typography>
              ))}
            </Grid>
          ))}
        </Grid>

        <Divider sx={{ bgcolor: "grey.700", my: 3 }} />
        <Grid container justifyContent="space-between" alignItems="center">
          <Typography variant="body2" sx={{ opacity: 0.7 }}>
          &#169; {new Date().getFullYear()} Easy Frontend, All rights reserved.
          </Typography>
          <Box>
            {["Privacy", "Security", "Terms"].map((item, idx) => (
              <Link key={idx} href="#" color="inherit" underline="hover" sx={{ mx: 1, opacity: 0.7 }}>
                {item}
              </Link>
            ))}
          </Box>
        </Grid>
      </Container>
    </Box>
  );
}

export default Footer;
