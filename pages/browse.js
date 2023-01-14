import { Cardo, Inter } from '@next/font/google'
import Navbar from '@/components/Navbar'
import StoryCard from '@/components/StoryCard'
import { Grid } from '@mui/material'
import { storyData } from '@/data/dummydata'
import { useEffect, useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Browse() {
    const [type, setType] = useState("All");
    const [typeFilteredStories, setTypeFilter] = useState();
    const [filteredStories, setFilteredStories] = useState();
    let storyTypes = ["All", "Standard", "Business"]
    let allCategories = ["General", "Personal journal", "Fiction short story", "Non-fiction short story", "Poetry", "Fiction", "Non-Fiction", "Blogging", "Social media post", "Creative writing", "Video caption", "Advertisements", "Brochures", "Websites", "General marketing", "Technical Writing", "Grant writing", "Professional email", "Content Writing", "Speech Writing", "Travel Writing"]
    let standardCategories = ["General", "Personal journal", "Fiction short story", "Non-fiction short story", "Poetry", "Fiction", "Non-Fiction", "Blogging", "Social media post", "Creative writing", "Video caption"]
    let businessCategories = ["Advertisements", "Brochures", "Websites", "General marketing", "Technical Writing", "Grant writing", "Professional email", "Content Writing", "Speech Writing", "Travel Writing"]

    useEffect(() => {
        setFilteredStories(storyData);
    }, [])

    function handleTypeChange(event){
        let selectedType = event.target.value;
        setType(selectedType);
        let filteredStories = storyData.filter((data) => selectedType==="All" || data.type===selectedType)
        setFilteredStories(filteredStories);
    }

    function handleCategoryChange(event){
        let selectedCat = event.target.value;
        setFilteredStories(filteredStories.filter((data) => type === "All" || selectedCat === "General" || data.category===selectedCat));
    }

    return (
        <>
        <main>
            <Navbar></Navbar>
            <stack className='inline-block'>
                <div class='child'>
                    <select onChange={handleTypeChange} className='md:py-2 w-[80%] lg:text-[15px] text-[12px] font-thin bg-white'>
                        {storyTypes.map((item, key) => <option key={key} value={item}>{item}</option>)}
                    </select>
                </div>
                <div class='child'>
                    <select onChange={handleCategoryChange} className='md:py-2 w-[80%] lg:text-[15px] text-[12px] font-thin bg-white'>
                        {
                            type === "Standard" ? standardCategories.map((item, key) => <option key={key} value={item}>{item}</option>)
                            :  type === "Business" ? businessCategories.map((item, key) => <option key={key} value={item}>{item}</option>)
                            :  allCategories.map((item, key) => <option key={key} value={item}>{item}</option>)
                        }
                    </select>
                </div>
            </stack>
            <div className="storyContainer">
                <Grid container spacing={1} direction="row">
                    {filteredStories?.map((data, key) => (
                        <Grid item key={key} className="h-1/4">
                            <StoryCard
                            story={data}
                            key={key} />
                        </Grid>
                    ))}
                </Grid>
            </div>
        </main>
        </>
        
  )
}
