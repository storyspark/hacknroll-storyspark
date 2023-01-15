import { Cardo, Inter } from '@next/font/google'
import Navbar from '@/components/Navbar'
import StoryCard from '@/components/StoryCard'
import { Grid } from '@mui/material'
// import { storyData } from '@/data/dummydata'
import { useEffect, useState } from 'react'
import axios from 'axios'
const inter = Inter({ subsets: ['latin'] })

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
            <div className="overflow-y-auto bg-white h-full">
                <div className="flex flex-row justify-end align-right mar mb-2 mt-2 ">
                    <select onChange={handleTypeChange} className='bg-gray-100 md:py-2 w-[15%] lg:text-[15px] text-[12px] font-thin bg-white mar m-1 rounded'>
                        {storyTypes.map((item, key) => <option key={key} value={item}>{item}</option>)}
                    </select>
                    <select onChange={handleCategoryChange} className='md:py-2 w-[15%] lg:text-[15px] text-[12px] font-thin bg-white mar m-1 rounded'>
                        {
                            type === "Standard" ? standardCategories.map((item, key) => <option key={key} value={item}>{item}</option>)
                            :  type === "Business" ? businessCategories.map((item, key) => <option key={key} value={item}>{item}</option>)
                            :  allCategories.map((item, key) => <option key={key} value={item}>{item}</option>)
                        }
                    </select>
                </div>
                <div className="overflow-y-auto">
                    <Grid container spacing={1} direction="row">
                        {displayedStories?.map((data, key) => (
                            <Grid item key={key} className="h-1/4">
                                <StoryCard
                                story={data}
                                key={key} />
                            </Grid>
                        ))}
                    </Grid>
                </div>
            </div>
        </main>        
  )
}
