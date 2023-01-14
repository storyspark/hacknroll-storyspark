import Head from 'next/head'
import Image from 'next/image'
import { Cardo, Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Navbar from '@/components/Navbar'
import StoryCard from '@/components/StoryCard'
import { Grid } from '@mui/material'
import { storyData } from '@/data/dummydata'

const inter = Inter({ subsets: ['latin'] })

export default function Library() {
  return (
    <>
      <main>
        <Navbar></Navbar>
        <div className="story-container">
          <Grid container>
            {storyData.map(data => {
              return (
                <StoryCard user={data.user} title={data.title} key={key}></StoryCard>
              )
            })}
          </Grid>
        </div>
      </main>
    </>
  )
}
