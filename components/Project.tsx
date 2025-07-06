"use client";

import React, { useState } from "react";
import {
  Container,
  Typography,
  Box,
  Button,
  Grid,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";
import { amber } from "@mui/material/colors";

// ✅ Sadece kategori isimleri düzenlendi
const categories = [
  "All",
  "UI/UX",
  "Web Design",
  "App Design",
  "App Development",
  "Visual Design",
];

// ✅ Sadece project verileri düzenlendi (isim + kategori)
const projectsData = [
  {
    id: 1,
    category: "UI/UX",
    title: "Adventure Game UI",
    imageUrl: "/project/adv.png",
  },
  {
    id: 2,
    category: "App Design",
    title: "Decision Maker App",
    imageUrl: "/project/nx.png",
  },
  {
    id: 3,
    category: "Web Design",
    title: "E-Commerce Website",
    imageUrl: "/project/jt.png",
  },
  {
    id: 4,
    category: "Visual Design",
    title: "Netfilms Movie Platform",
    imageUrl: "/project/netfilms.png",
  },
  {
    id: 5,
    category: "App Development",
    title: "Fitness Planner Web App",
    imageUrl: "/project/neo.png",
  },
  
];

const Project = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === selectedCategory);

  return (
    <section className="py-10" id="projects">
      <div className="max-w-6xl mx-auto px-4">
        <Container maxWidth="lg" sx={{ py: 8 }}>
          <Box textAlign="center" mb={4}>
            <Typography
              variant="h4"
              fontWeight="bold"
              sx={{ color: amber[600] }}
            >
              My Projects
            </Typography>
            <Typography variant="body1" sx={{ color: "slategray" }} mt={1}>
              A collection of my recent projects — built with modern technologies and lots of passion.
            </Typography>
          </Box>

          <Box textAlign={"center"} mb={4}>
            {categories.map((cat) => (
              <Button
                key={cat}
                variant={cat === selectedCategory ? "contained" : "outlined"}
                sx={{
                  m: 1,
                  borderColor: amber[600],
                  color: cat === selectedCategory ? "#000" : amber[600],
                  backgroundColor:
                    cat === selectedCategory ? amber[600] : "transparent",
                  "&:hover": {
                    backgroundColor:
                      cat === selectedCategory ? amber[700] : amber[50],
                    borderColor: amber[600],
                  },
                }}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </Button>
            ))}

            <Grid container spacing={4} mt={4}>
              {filteredProjects.map((project) => (
                <Grid key={project.id}>
                  <Card
                    sx={{
                      borderRadius: 2,
                      boxShadow: 3,
                      backgroundColor: "transparent",
                      height: 330, 
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
                    }}
                  >
                    <CardMedia
                      component="img"
                      image={project.imageUrl}
                      alt={project.title}
                      sx={{
                        height: 180,
                        objectFit: "cover",
                      }}
                    />
                    <CardContent>
                      <Typography variant="body2" sx={{ color: amber[600] }}>
                        {project.category}
                      </Typography>
                      <Typography
                        variant="h6"
                        mt={1}
                        sx={{ color: "slategray" }}
                      >
                        {project.title}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </div>
    </section>
  );
};

export default Project;
