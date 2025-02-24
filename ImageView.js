import React, { useState } from "react";
import { Grid, Card, CardMedia, Pagination, Box, Button, CircularProgress, Typography } from "@mui/material";
import { v4 as uuidv4 } from 'uuid';

const ImageView = ({ images, fetchMoreImages, loading }) => {
  const imagesPerPage = 8;
  const [page, setPage] = useState(1);

  const indexOfLastImage = page * imagesPerPage;
  const currentImages = images.slice(0, indexOfLastImage);

  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <Box textAlign="center">

      {images.length === 0 && !loading && (
        <Typography variant="h6" color="textSecondary" mt={3}>
          Try searching something.
        </Typography>
      )}

 
      {loading && (
        <Box display="flex" justifyContent="center" my={3}>
          <CircularProgress color="primary" />
        </Box>
      )}


      <Grid container spacing={2} justifyContent="center" mt={3}>
        {currentImages.map((image) => (
          <Grid item key={uuidv4()} xs={12} sm={6} md={4} lg={3}>
            <Card>
              <CardMedia
                component="img"
                image={image.webformatURL}
                alt={image.alt_description || "Image"}
                sx={{ height: 200 }}
              />
            </Card>
          </Grid>
        ))}
      </Grid>

     
      {images.length > imagesPerPage && (
        <Box display="flex" justifyContent="center" mt={4}>
          <Pagination
            count={Math.ceil(images.length / imagesPerPage)}
            page={page}
            onChange={handleChange}
            color="primary"
          />
        </Box>
      )}

    
      {images.length > 0 && (
        <Box display="flex" justifyContent="center" mt={3}>
          <Button 
            variant="contained" 
            color="primary" 
            onClick={fetchMoreImages}
            disabled={loading}
          >
            {loading ? "Loading..." : "Load More"}
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default ImageView;
