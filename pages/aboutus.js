import { Cardo, Inter } from '@next/font/google'
import Navbar from '@/components/Navbar'
import StoryCard from '@/components/StoryCard'
import { Card, CardMedia, Typography } from '@mui/material'
// import { storyData } from '@/data/dummydata'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Image from 'next/image'
const inter = Inter({ subsets: ['latin'] })
import jasony from "../public/jasony-lk.jpg"
import xuanming from "../public/xuanming-lk.jpg"
import eugene from "../public/eugene-lk.jpg"
import shaune from "../public/shauneang-lk.jpg"


export default function Browse() {
    const [type, setType] = useState("All");
    const [typeFilteredStories, setTypeFilter] = useState();
    const [displayedStories, setDisplayedStories] = useState();
    const [storyData, setStoryData] = useState();
    let storyTypes = ["All types", "Standard", "Business"]
    let allCategories = ["All", "General", "Personal journal", "Fiction short story", "Non-fiction short story", "Poetry", "Fiction", "Non-Fiction", "Blogging", "Social media post", "Creative writing", "Video caption", "Advertisements", "Brochures", "Websites", "General marketing", "Technical Writing", "Grant writing", "Professional email", "Content Writing", "Speech Writing", "Travel Writing"]
    let standardCategories = ["All", "General", "Personal journal", "Fiction short story", "Non-fiction short story", "Poetry", "Fiction", "Non-Fiction", "Blogging", "Social media post", "Creative writing", "Video caption"]
    let businessCategories = ["All", "Advertisements", "Brochures", "Websites", "General marketing", "Technical Writing", "Grant writing", "Professional email", "Content Writing", "Speech Writing", "Travel Writing"]

    async function fetchData() {
        try {
            const response = await axios.get("https://eugenetayyj.pythonanywhere.com/storyboards/storyboard/")
            console.log(response.data)
            setStoryData(response.data)
            setDisplayedStories(response.data);
            setTypeFilter(response.data)
        } catch (error) {
          console.error(error);
        }
      }
    
    useEffect(() => {
        fetchData();
    }, [])

    

    function handleTypeChange(event){
        let selectedType = event.target.value;
        setType(selectedType);
        let filteredStories = storyData.filter((data) => selectedType==="All types" || data.type===selectedType)
        setTypeFilter(filteredStories)
        setDisplayedStories(filteredStories);
    }

    function handleCategoryChange(event){
        let selectedCat = event.target.value;
        if (selectedCat === "All") {
            setDisplayedStories(typeFilteredStories)
        }
        setDisplayedStories(typeFilteredStories.filter((data) => selectedCat==="All" || data.category===selectedCat));
    }

    return (
        <main>
            <Navbar></Navbar>
            <div className='flex flex-row justify-evenly'>
                <div>
                    <Image className="p-5" alt='jasony image' src={jasony} height='600' width='500'/> 
                    <Typography className="text-center font-custom1 py-4" variant="h4">Jasony</Typography>
                </div>
                    
                <div>
                    <Image className="p-5" alt='xuanming image' src={xuanming} height='500' width='500'/> 
                    <Typography className="text-center font-custom1 py-4" variant="h4">Xuan Ming</Typography>
                </div>
                    
                <div>
                    <Image className="p-5" alt='eugene image' src={eugene} height='500' width='500'/> 
                    <Typography className="text-center font-custom1 py-4" variant="h4">Eugene</Typography>
                </div>
                    
                <div>
                    <Image className="p-5" alt="shaune image" src={shaune} height='500' width='500'/>
                    <Typography className="text-center font-custom1 py-4" variant="h4">Shaune</Typography>
                </div>
                    
            </div>
        </main>        
  )
}
