import React, { useState, useRef, useEffect, useCallback } from 'react';
import Navbar from '@/components/Navbar'
import HTMLFlipBook from 'react-pageflip';
import Image from "next/image";
import axios from 'axios';
import { CardMedia } from '@mui/material';

const PageCover = React.forwardRef((props, ref) => {
    return (
      <div className="bg-book-cover flex justify-evenly" ref={ref} data-density="hard">
        <div className="text-center font-custom1 mt-24 font-extrabold drop-shadow-lg">
          <h2 className="text-5xl capitalize">{props.children}</h2>
          <br/>
          <hr className='bg-black mx-8 h-[2px]'></hr>
        </div>
        <Image className="m-auto lg:pt-12 pt-12 drop-shadow-2xl w-[35%] h-[35%] lg:w-[200px]" alt="logo" src="/logo.svg" height={200} width={200}></Image>
      </div>
    );
  });
  PageCover.displayName = "PageCover";
  
  const MainPage = React.forwardRef((props, ref) => {
    return (
      <div className="flex align-center text-left px-8 bg-[#FAF9F6]" ref={ref}>
        <div className="page-content lg:my-16 mt-12">
          <div className="page-image"></div>
          <div className="font-black lg:text-4xl md:text-2xl sm:text-lg font-custom2">{props.title}</div>
          <div className="mt-12 lg:text-2xl md:text-lg sm:text-md md:mt-6 text-gray-600">{props.children}</div>
        </div>
      </div>
    );
  });
  MainPage.displayName = "MainPage";
  
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
  Page.displayName = "Page";


export default function Form() {
   const book = useRef();
   const [ isLoading, setIsLoading ] = useState(false);
   const [ isLastPage, setIsLastPage ] = useState(false)
   const [userState, setUserState] = useState({
      category: "",
      tone: "",
      author: "",
      storyPrompt: "",
      imagePrompt: "",
      title: "",
      isPrivate: "false",
    });

   const standardCategories = ["General", "Personal journal", " Fiction short story", "Non-fiction short story", "Poetry", "Fiction", "Non-Fiction", "Blogging", "Social media post", "Creative writing", "Video caption"];
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

   const handleBadWords = (name, words) => {
      const foundSwears = badWords.filter(word => words.toLowerCase().includes(word.toLowerCase()));
      if (foundSwears.length >= 1) {
         alert("Please remove your swear word from the " + name.toUpperCase() + " field, otherwise this field will be empty!");
         return true;
      } else {
         return false;
      }
   }

   const handleInputChange = (event) => {
      const { name, value } = event.target;

      const hasBadWords = handleBadWords(name, value)

      if (hasBadWords) {
         return;
      } else {
         setUserState((prevProps) => ({
            ...prevProps,
            [name]: value
         }));
      }

    };

    const handleSubmit = (event) => {
      let flag = false;
      for (const [key, value] of Object.entries(userState)) {
         if (value == "") {
            alert("Please do not leave the " + key.toUpperCase() + " field blank!");
            flag = true;
            break;
         }
      }
      setIsLoading(true);
      event.preventDefault()

      if (flag) {
         event.preventDefault()
         return false;
      } else {
        let chatgpt = {
          "model": "text-davinci-003",
          "prompt": "Make a " + userState.category + " story with a " + userState.tone + " and this prompt: " + userState.storyPrompt,
          "max_tokens": 1000,
          "temperature": 0.7
        }

        let chatgptconfig = {
          method: 'post',
          url: 'https://api.openai.com/v1/completions',
          headers: { 
            'Content-Type': 'application/json', 
            'Authorization': `Bearer ${NEXT_PUBLIC_OPENAI_KEY}`
          },
          data : chatgpt
        };
        
        axios(chatgptconfig)
        .then(function (response) {
          setUserState((prevProps) => ({
            ...prevProps,
            storyResult: response.data.choices[0]?.text,
          }))
          console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
          console.log(error);
        });


        let dalle = {
          "prompt":  userState.imagePrompt,
          "n": 2,
          "size": "1024x1024"
        }

        let dalleconfig = {
          method: 'post',
          url: 'https://api.openai.com/v1/images/generations',
          headers: { 
            'Content-Type': 'application/json', 
            'Authorization': `Bearer ${NEXT_PUBLIC_OPENAI_KEY}`
          },
          data : dalle
        };
        
        axios(dalleconfig)
        .then(function (response) {
          console.log(JSON.stringify(response.data));
          setUserState((prevProps) => ({
            ...prevProps,
            imageUrl: response.data.data[0]?.url,
          }))
        })
        .catch(function (error) {
          console.log(error);
        });
      }

      setIsLoading(false);
    }

    const handlePost = (event) => {
      setUserState((prevProps) => ({
        ...prevProps,
        type: "Personal",
      }))
      let body = JSON.parse(JSON.stringify(userState));

      event.preventDefault();
      
      axios.post("https://eugenetayyj.pythonanywhere.com/storyboards/storyboard/", body)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });

      book.current.pageFlip().flipNext()
    }

    const onFlip = useCallback((e) => {
      if (e.data == 5) {
        setIsLastPage(true);
      } else {
        setIsLastPage(false);
      }
    }, []);

   return (
    <>
      <main className="display flex flex-col h-screen bg-white">
        <Navbar></Navbar>
        <div className='bg-white w-screen h-auto flex text-black pt-1 justify-center'>
            <div className='lg:h-[70%] lg:w-[50%] h-[30%]'>
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
                    onFlip={onFlip}
                    ref={book}
                    className="border border-yellow-500 shadow-md my-5 lg:mt-4">
                    <PageCover>Begin your story</PageCover>
                    <MainPage title={"Let's start with you and your story!"}>How would you like your story to begin?</MainPage>
                    <Page>
                        <form className="px-4 w-full flex flex-col">
                           <label className='md:py-4 font-medium mt-12 lg:text-xl md:text-lg text-md md:mt-2 text-gray-600'>
                              Select a category:
                              <p className='py-2 lg:text-[15px] text-[12px] font-thin'>What will your story be used for?</p>
                              <select onChange={handleInputChange} name="category" value={userState.category} className='md:py-2 w-[80%] lg:text-[15px] text-[12px] font-thin bg-white'>
                                 {standardCategories.map((item, key) => <option key={key} value={item}>{item}</option>)}
                              </select>
                           </label>

                            <label className='py-2font-medium lg:text-xl md:text-lg text-md text-gray-600'>
                                Pick a tone
                                <p className='py-2 lg:text-[15px] text-[12px] font-thin'>I want my story to...</p>
                                <input onBlur={handleInputChange} type="text" name="tone" className='bg-white lg:text-[15px] text-[12px] px-4 w-[80%]'/>
                            </label>

                            <label className='py-2 font-medium lg:text-xl md:text-lg text-md text-gray-600'>
                                Email
                                <p className='py-2 lg:text-[15px] text-[12px] font-thin'>Who wrote this?</p>
                                <input onBlur={handleInputChange} type="email" name="author" className='bg-white lg:text-[15px] text-[12px] px-4 w-[80%]'/>
                            </label>
                        </form>
                    </Page>
                    <MainPage title={"Great! Let's bring it to life!"}>Create your prompts and let us handle the rest.</MainPage>
                    <Page>
                        <form className="px-4 w-full flex flex-col">
                           <label className='py-2 font-medium lg:text-xl md:text-lg text-md md:mt-2 text-gray-600'>
                                Story Prompt
                                <p className='py-2 lg:text-[15px] text-[12px] font-thin'>This will generate your story!.</p>
                                <textarea onBlur={handleInputChange} type="text" name="storyPrompt" className='lg:text-[15px] text-[12px] whitespace-normal text-justify bg-white px-4 w-[80%] lg:h-24 h-16'/>
                            </label>

                            <label className='py-2 font-medium lg:text-xl md:text-lg text-md text-gray-600'>
                                Image Prompt
                                <p className='py-2 lg:text-[15px] text-[12px] font-thin'>This will inspire the cover!</p>
                                <textarea onBlur={handleInputChange} type="text" name="imagePrompt" className='lg:text-[15px] text-[12px] whitespace-normal text-justify bg-white px-4 w-[80%] lg:h-24 h-16'/>
                            </label>
                        </form>
                    </Page>
                    <MainPage title={"Finalize your story"}>Make your story perfect with a compelling title!</MainPage>
                    <Page>
                        <form className="px-4 w-full flex flex-col">
                           <label className='sm:py-2 py-4 md:py-2 font-medium lg:text-xl md:text-lg text-md md:mt-6 text-gray-600'>
                                Title
                                <p className='py-2 lg:text-[15px] text-[12px] font-thin'></p>
                                <textarea onBlur={handleInputChange} type="text" name="title" className='lg:text-[15px] text-[12px]whitespace-normal text-justify bg-white px-4 w-[80%] lg:h-24 h-16'/>
                            </label>

                            <label className='py-2 font-medium lg:text-xl md:text-lg text-md md:mt-2 text-gray-600'>
                                Privacy Settings
                                <p className='py-2 lg:text-[15px] text-[12px] font-thin'>Who should see this story?</p>
                                 <select onChange={handleInputChange} name="isPrivate" value={userState.isPrivate} className='md:py-2 w-[80%] lg:text-[15px] text-[12px] font-thin bg-white'>
                                    <option key={1} value={false}>Open to public</option>
                                    <option key={2} value={true}>Only Me</option>
                                 </select>
                            </label>
                            <button onClick={handleSubmit} className="text-white bg-cyan-700 my-6 px-4 w-[80%] h-[50px] rounded-lg md:mt-0 mt-2">Submit</button>
                            {isLoading ? <p>...Loading</p> : <button onClick={handlePost} className="text-white bg-cyan-700 px-4 w-[80%] h-[50px] rounded-lg mt-0">View your story</button>}
                        </form>
                    </Page>
                    <MainPage title="Congrats!">Here is your new Story.</MainPage>
                    <Page>
                      <div className="h-full max-h-screen overflow-y-auto flex flex-col flex-grow bg-white">
                      <h1 className='underline font-custom1 text-center'>{userState.title}</h1>
                      <CardMedia src={userState.imageUrl} component="img" alt="thumbnail" width={30} height={30} className="p-0 m-0 h-[200px] w-[50px]"></CardMedia>
                      <div className="bg-gray-50 max-h-[190px] overflow-y-auto">{userState.storyResult}</div>
                      </div>
                    </Page>
                </HTMLFlipBook>

                <div className='justify-evenly text-center w-full mt-5 flex flex-row items-center text-white'>
                    <button onClick={() => book.current.pageFlip().flipPrev()} className="bg-cyan-700 px-4 lg:w-[250px] w-[150px] h-[50px] rounded-lg md:mt-0 mt-2">
                    Previous
                    </button>
                    {isLastPage ? <></> : <button onClick={() => book.current.pageFlip().flipNext()}  className="bg-cyan-700 px-4 lg:w-[250px] w-[150px] h-[50px] rounded-lg md:mt-0 mt-2">
                      Next
                    </button> }

                </div>
            </div>
        </div>
      </main>
    </>
  )
}
