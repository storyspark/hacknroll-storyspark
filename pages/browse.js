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
    const [categoryFilteredStories, setCategoryFilter] = useState();
    let storyTypes = ["All", "Standard", "Business"]
    let standardCategories = ["General", "Personal journal", "Fiction short story", "Non-fiction short story", "Poetry", "Fiction", "Non-Fiction", "Blogging", "Social media post", "Creative writing", "Video caption"]
    let businessCategories = ["All", "Advertisements", "Brochures", "Websites", "General marketing", "Technical Writing", "Grant writing", "Professional email", "Content Writing", "Speech Writing", "Travel Writing"]

    useEffect(() => {
        setTypeFilter(storyData);
        setCategoryFilter(storyData);
    }, [])

    function handleTypeChange(event){
        let selectedType = event.target.value;
        console.log(selectedType);
        setType(selectedType);
        setTypeFilter(storyData.filter((data) => data.type!=selectedType));
        setCategoryFilter(typeFilteredStories);
    }

    function handleCategoryChange(event){
        let selectedCat = event.target.value;
        setCategoryFilter(categoryFilteredStories.filter((data) => selectedCat === "General" || selectedCat === "All"  || data.category===selectedCat));
    }

    return (
        <>
        <main>
            <Navbar></Navbar>
            <select onChange={handleTypeChange} className='md:py-2 w-[80%] lg:text-[15px] text-[12px] font-thin bg-white'>
                {storyTypes.map((item, key) => <option key={key} value={item}>{item}</option>)}
            </select>
            <select onChange={handleCategoryChange} className='md:py-2 w-[80%] lg:text-[15px] text-[12px] font-thin bg-white'>
                {
                    type === "Business" ? businessCategories.map((item, key) => <option key={key} value={item}>{item}</option>)
                    : standardCategories.map((item, key) => <option key={key} value={item}>{item}</option>)
                }
            </select>
            <div className="storyContainer">
                <Grid container spacing={1} direction="row">
                    {categoryFilteredStories?.map((data, key) => (
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
