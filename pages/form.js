import React, { useState, useRef, useEffect } from 'react';
import Navbar from '@/components/Navbar'
import HTMLFlipBook from 'react-pageflip';
import Image from "next/image";
import next from 'next';

const PageCover = React.forwardRef((props, ref) => {
    return (
      <div className="bg-gray-200 flex justify-evenly" ref={ref} data-density="hard">
        <div className="text-center font-custom1 mt-24 font-extrabold drop-shadow-lg">
          <h2 className="text-5xl capitalize">{props.children}</h2>
        </div>
        <Image className="m-auto pt-32 drop-shadow-2xl w-[50%] h-[50%] lg:w-[200px]" alt="logo" src="/logo.svg" height={200} width={200}></Image>
      </div>
    );
  });
  
  const MainPage = React.forwardRef((props, ref) => {
    return (
      <div className="flex align-center text-left px-8 bg-[#FAF9F6]" ref={ref}>
        <div className="page-content mt-28">
          <div className="page-image"></div>
          <div className="font-black lg:text-6xl md:text-4xl sm:text-xl font-custom2">{props.title}</div>
          <div className="mt-12 lg:text-3xl md:text-xl sm:text-md md:mt-6 text-gray-600">{props.children}</div>
        </div>
      </div>
    );
  });

  const Page = React.forwardRef((props, ref) => {
    return (
      <div className="flex align-center text-left px-8 bg-[#FAF9F6]" ref={ref}>
        <div className="page-content">
          <div className="page-image"></div>
          <div className="page-text">{props.children}</div>
        </div>
      </div>
    );
  });


export default function Form() {
   const book = useRef();
   const [userState, setUserState] = useState({
      category: "",
      tone: "",
      story: "",
      image: "",
      title: "",
      isPrivate: "false",
    });

   const badWords = [
      "4r5e",
      "5h1t",
      "5hit",
      "a55",
      "anal",
      "anus",
      "ar5e",
      "arrse",
      "arse",
      "ass",
      "b!tch",
      "b00bs",
      "b17ch",
      "b1tch",
      "ballbag",
      "ballsack",
      "bastard",
      "beastial",
      "beastiality",
      "bellend",
      "bestial",
      "bestiality",
      "bi+ch",
      "biatch",
      "bitch",
      "bloody",
      "blowjob",
      "boiolas",
      "bollock",
      "bollok",
      "boner",
      "boob",
      "breasts",
      "buceta",
      "bugger",
      "bum",
      "butt",
      "butthole",
      "buttmunch",
      "buttplug",
      "c0ck",
      "c0cksucker",
      "carpetmuncher",
      "cawk",
      "chink",
      "cipa",
      "cl1t",
      "clit",
      "clitoris",
      "clits",
      "cnut",
      "cock",
      "cok",
      "cokmuncher",
      "coksucka",
      "coon",
      "cox",
      "crap",
      "cum",
      "cunilingus",
      "cunillingus",
      "cunnilingus",
      "cunt",
      "cuntlick",
      "cuntlicker",
      "cuntlicking",
      "cunts",
      "cyalis",
      "d1ck",
      "damn",
      "dick",
      "dickhead",
      "dildo",
      "dink",
      "dirsa",
      "dlck",
      "doggin",
      "donkeyribber",
      "doosh",
      "duche",
      "dyke",
      "ejaculate",
      "ejaculating",
      "ejaculation",
      "ejakulate",
      "f4nny",
      "fag",
      "fanny",
      "fanyy",
      "fark",
      "f4rk",
      "fcuk",
      "fcuking",
      "feck",
      "fecker",
      "felching",
      "fellate",
      "fellatio",
      "flange",
      "fook",
      "fuc",
      "fudgepacker",
      "fuk",
      "fux",
      "gangbang",
      "gay",
      "gaylord",
      "gaysex",
      "goatse",
      "goddamn",
      "goddamned",
      "hardcoresex",
      "hell",
      "heshe",
      "hoar",
      "hoer",
      "homo",
      "hore",
      "horniest",
      "horny",
      "hotsex",
      "jackoff",
      "jap",
      "jerk",
      "jism",
      "jiz",
      "jizm",
      "jizz",
      "kawk",
      "knob",
      "kock",
      "kondum",
      "kum",
      "kunilingus",
      "l3i+ch",
      "l3itch",
      "labia",
      "lmfao",
      "lust",
      "m0f0",
      "m0fo",
      "m45terbate",
      "ma5terb8",
      "ma5terbate",
      "masochist",
      "master-bate",
      "masterb8",
      "masterbat*",
      "masterbat3",
      "masterbate",
      "masterbation",
      "masturbate",
      "mo-fo",
      "mof0",
      "mofo",
      "muff",
      "mutha",
      "muther",
      "n1gga",
      "n1gger",
      "nazi",
      "nigg3r",
      "nigg4h",
      "nigga",
      "nigger",
      "niggers",
      "nob",
      "numbnuts",
      "nutsack",
      "orgasim",
      "orgasm",
      "p0rn",
      "pawn",
      "pecker",
      "penis",
      "phonesex",
      "phuck",
      "phuk",
      "phuq",
      "pimpis",
      "piss",
      "poop",
      "porn",
      "prick",
      "pron",
      "pube",
      "pusse",
      "pussi",
      "pussy",
      "rectum",
      "retard",
      "rimjaw",
      "rimming",
      "sob.",
      "sadist",
      "schlong",
      "screwing",
      "scroat",
      "scrote",
      "scrotum",
      "semen",
      "sex",
      "sh!+",
      "sh!t",
      "sh1t",
      "shag",
      "shemale",
      "shi+",
      "shit",
      "skank",
      "slut",
      "smegma",
      "smut",
      "snatch",
      "son-of-a-bitch",
      "spac",
      "spunk",
      "t1tt1e5",
      "t1tties",
      "teets",
      "teez",
      "testical",
      "testicle",
      "tit",
      "tosser",
      "turd",
      "tw4t",
      "twat",
      "twathead",
      "twatty",
      "twunt",
      "twunter",
      "v14gra",
      "v1gra",
      "vagina",
      "viagra",
      "vulva",
      "w00se",
      "wang",
      "wank",
      "whoar",
      "whore",
      "willies",
      "willy",
      "xrated",
      "xxx"];
   const standardCategories = ["General", "Personal journal", " Fiction short story", "Non-fiction short story", "Poetry", "Fiction", "Non-Fiction", "Blogging", "Social media post", "Creative writing", "Video caption"]

   const handleInputChange = (event) => {
      const { name, value } = event.target;

      setUserState((prevProps) => ({
        ...prevProps,
        [name]: value
      }));
    };

    const handleSubmit = (event) => {
      let flag = false;
      for (const [key, value] of Object.entries(userState)) {
         if (value == "") {
            alert("Please do not leave " + key + " blank!");
            flag = true;
            break;
         }
      }

      if (flag) {
         event.preventDefault()
         return false;
      } else {
         // Submit to BE
      }
    }

    useEffect(() => {
      console.log(userState)
    }, [userState])

   return (
    <>
      <main className="display flex flex-col h-screen bg-white">
        <Navbar></Navbar>
        <div className='bg-white w-screen h-auto flex text-black pt-1 justify-center overflow-hidden'>
            <div className='h-[70%] w-[70%]'>
                <div className='justify-evenly text-center w-full mt-5 flex flex-row items-center text-white'>
                    <button onClick={() => book.current.pageFlip().flipPrev()} className="bg-cyan-700 px-4 lg:w-[250px] w-[150px] h-[50px] rounded-lg md:mt-0 mt-2">
                    Previous
                    </button>

                    <button onClick={() => book.current.pageFlip().flipNext()}  className="bg-cyan-700 px-4 lg:w-[250px] w-[150px] h-[50px] rounded-lg md:mt-0 mt-2">
                    Next
                    </button>
                </div>
                <HTMLFlipBook 
                    width={300}
                    height={480}
                    size="stretch"
                    minWidth={215}
                    maxWidth={800}
                    minHeight={300}
                    maxHeight={2533}
                    maxShadowOpacity={0.5}
                    showCover={true}
                    mobileScrollSupport={true}
                    useMouseEvents={false}
                    ref={book}
                    className="border border-yellow-500 shadow-md my-5 lg:mt-4">
                    <PageCover>Begin your story</PageCover>
                    <MainPage title={"Let's Start with your story!"}>How would you like your story to begin?</MainPage>
                    <Page>
                        <form className="px-4 w-full flex flex-col">
                           <label className='md:py-4 font-medium mt-12 lg:text-3xl md:text-xl text-md md:mt-6 text-gray-600'>
                              Select a category:
                              <p className='py-2 lg:text-[20px] text-[15px] font-thin'>What will your story be used for?</p>
                              <select onChange={handleInputChange} name="category" value={userState.category} className='md:py-2 w-[80%] lg:text-[15px] text-[12px] font-thin bg-white'>
                                 {standardCategories.map((item, key) => <option key={key} value={item}>{item}</option>)}
                              </select>
                           </label>

                            <label className='sm:py-2 py-4 md:py-2 font-medium lg:text-3xl md:text-xl text-md md:mt-6 text-gray-600'>
                                Pick a tone
                                <p className='py-2 lg:text-[20px] text-[15px] font-thin'>I want my story to have a...</p>
                                <input onBlur={handleInputChange} type="text" name="tone" className='bg-white px-4 w-[80%]'/>
                            </label>
                        </form>
                    </Page>
                    <MainPage title={"Great! Let's bring it to life!"}>Create your prompts and let us handle the rest.</MainPage>
                    <Page>
                        <form className="px-4 w-full flex flex-col">
                           <label className='sm:py-2 py-4 md:py-2 font-medium lg:text-3xl md:text-xl text-md md:mt-6 text-gray-600'>
                                Story Prompt
                                <p className='py-2 lg:text-[15px] text-[12px] font-thin'>This will be used to generate your story!.</p>
                                <textarea onBlur={handleInputChange} type="text" name="story" className='text-[15px] whitespace-normal text-justify bg-white px-4 w-[80%] lg:h-32 h-16'/>
                            </label>

                            <label className='sm:py-2 py-4 md:py-2 font-medium lg:text-3xl md:text-xl text-md md:mt-6 text-gray-600'>
                                Image Prompt
                                <p className='py-2 lg:text-[15px] text-[12px] font-thin'>We’ll use this prompt for the cover image!</p>
                                <textarea onBlur={handleInputChange} type="text" name="image" className='text-[15px] whitespace-normal text-justify bg-white px-4 w-[80%] lg:h-32 h-16'/>
                            </label>
                        </form>
                    </Page>
                    <MainPage title={"Finalize your story"}>Make your story perfect with a compelling title!</MainPage>
                    <Page>
                        <form className="px-4 w-full flex flex-col">
                           <label className='sm:py-2 py-4 md:py-2 font-medium lg:text-3xl md:text-xl text-md md:mt-6 text-gray-600'>
                                Title
                                <p className='py-2 lg:text-[15px] text-[12px] font-thin'>This will be used to generate your story!.</p>
                                <textarea onBlur={handleInputChange} type="text" name="title" className='text-[15px] whitespace-normal text-justify bg-white px-4 w-[80%] lg:h-32 h-24'/>
                            </label>

                            <label className='sm:py-2 py-4 md:py-2 font-medium lg:text-3xl md:text-xl text-md md:mt-6 text-gray-600'>
                                Privacy Settings
                                <p className='py-2 lg:text-[15px] text-[12px] font-thin'>Who would you like to view this story?</p>
                                 <select onChange={handleInputChange} name="isPrivate" value={userState.isPrivate} className='md:py-2 w-[80%] lg:text-[15px] text-[12px] font-thin bg-white'>
                                    <option key={1} value={false}>Open to public</option>
                                    <option key={2} value={true}>Only Me</option>
                                 </select>
                            </label>
                            <button onClick={handleSubmit} className="text-white bg-cyan-700 my-6 px-4 lg:w-[250px] w-[150px] h-[50px] rounded-lg md:mt-0 mt-2">Submit</button>
                        </form>
                    </Page>
                    <MainPage title="Congrats!">Here is your new Story.</MainPage>
                    <Page>Insert Story here</Page>
                </HTMLFlipBook>
            </div>
        </div>
      </main>
    </>
  )
}
