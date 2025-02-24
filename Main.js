import React, { useState, useEffect } from "react";
import { Container, Typography } from "@mui/material";
import ImageView from "./ImageView";
import Navbar from "./Navbar";
import SearchBar from "./SerachBar";
import AOS from 'aos';
import 'aos/dist/aos.css';

const ACCESS_KEY = "48993962-fd27d3fa1d882c2fdb0d7efe3"; 

const Main = () => {
    useEffect(() => {
        AOS.init({ duration: 2000, once: true }); 
    }, []);
    
    const [images, setImages] = useState([]);
    const [query, setQuery] = useState("");
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);

    const fetchImages = async (newQuery = query, newPage = 1) => {
        setLoading(true);
        try {
            const response = await fetch(
                `https://pixabay.com/api/?key=${ACCESS_KEY}&q=${encodeURIComponent(newQuery)}&image_type=photo&page=${newPage}&per_page=12`
            );
            const data = await response.json();

            if (data.hits.length === 0) {
                setHasMore(false);
            } else {
                setImages(newPage === 1 ? data.hits : [...images, ...data.hits]);
                setPage(newPage);
            }
        } catch (error) {
            console.error("Error fetching images:", error);
            alert("Network error. Please try again.");
        }
        setLoading(false);
    };

    useEffect(() => {
        if (query) fetchImages(query, 1);
    }, [query]);

    const handleSearch = (newQuery) => {
        setQuery(newQuery);
        setImages([]);
        setPage(1);
        setHasMore(true);
    };

 
    const fetchMoreImages = () => {
        fetchImages(query, page + 1);
    };

    return (
        <>
            <Navbar />
            <Container>
                <Typography variant="h4" textAlign="center" mt={3} data-aos="zoom-in">
                    The best free stock photos, royalty-free images.
                </Typography>
                <SearchBar onSearch={handleSearch} />
                
                <ImageView 
                    data-aos="fade-up" 
                    images={images} 
                    fetchMoreImages={fetchMoreImages}
                    loading={loading}
                />
            </Container>
        
        </>
    );
};

export default Main;
