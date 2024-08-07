import React, { useState, useEffect } from "react";
import { json, useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import firebaseApp from '../FirbaseConfig/firebase'; // Ensure the path is correct
import { clientListeningClassification } from "../clientListeningClassification.ts";
import { Bar, Radar } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, RadarController, RadialLinearScale, PointElement, LineElement } from 'chart.js';
import { intakeToClassificationMadeAccessible } from "../intakeToClassificationMadeAccessible.ts";
// import playlistCompImage from '../../playlist_comp.png'; // playlist_comp.png Ensure the path to your logo is correct


const auth = getAuth(firebaseApp);

/**
 * dummy set example
 */
// const inputs = [`Yeah, yeah, yeah
// Yeah, yeah
// Every time you cross my mind, you get right under my skin
// Am I crazy, out my mind, this situation I'm in
// And it gets harder just to breathe, feel like the walls are closin' in
// But all I need is some closure
// Yeah, I can't eat, I can't sleep, I get anxiety
// When you're not here with me, I get anxiety
// I can't eat, I can't sleep, don't know why you can't see
// You give me, you give me, give me
// Anxiet-xiet, xiet, xiet-xiet-xiet, xiet-xiety-ty
// Xiet, xiet-xiet-xiet
// Give me anxiety
// Xiet-xiet, xiet, xiet-xiety-ty
// Xiet, xiet-xiet-xiet
// Anxiety
// Every time I smile while I'm doin' fine, does it show?
// 'Cause I'm really freaking out, too scared of letting you go
// Then my heart drowns out my thoughts, my head's about to explode
// What I need is some closure
// I, I can't eat, I can't sleep, I get anxiety
// When you're not here with me, I get anxiety
// I can't eat, I can't sleep, don't know why you can't see
// You give me, you give me, give me
// Anxiet-xiet, xiet, xiet-xiet-xiet, xiet-xiety-ty
// Xiet, xiet-xiet-xiet
// Give me anxiety
// Xiet-xiet, xiet, xiet-xiety-ty
// Xiet, xiet-xiet-xiet
// Anxiety (anxiety)
// (If you ain't beside me)
// Every time I smile while I'm doin' fine, does it show?
// 'Cause' I'm really freaking out, too scared of letting you go
// I can't eat, I can't sleep, I get anxiety
// When you're not here with me, I get anxiety
// I can't eat, I can't sleep, don't know why you can't see
// You give me, you give me, give me anxiety
// Anxiety
// Give me anxiety
// Anxiety`, `They told me to run, but just how far?
// Can I go wearing the black mask of fear?
// The hate in my eyes always gives me away
// The tension building slowly
// Now I lost everything I had in you
// Nothing we shared means a thing
// Without you close to me
// I can't live without you
// Breaking the silence of the night
// Can't you hear me screaming?
// I look for your face in the neon light
// You never answer me
// There's no direction to my stare
// No more flame burning in my heart anymore
// Quiet, I keep it to myself
// Until the sun sets slowly
// I hear your voice in the evening rain calling
// Nothing will keep us apart
// No more lies and fear
// There's no end to our story
// Breaking the silence of the night
// Can't you hear me screaming?
// I look for your face in the neon light
// You never answer
// I could make all the wrong seem right
// If you were by my side
// I'd gather all the tears you cried
// And hide them deep underground
// Can't look back, it's just a waste of time
// Can't erase this hate from my eyes
// Breaking the silence of the night
// Through the streets I'm screaming
// Looking for you in the neon light
// Why don't you answer me?
// Breaking the silence with my cries
// Can't you hear me screaming?
// We could make all this wrong seem right
// But you never answer me`, `Paralyzed from the neck down
// Can't move, can't scream, can't make a sound
// The shadows move and enclose the room
// Creating the familiar silhouettes that
// Stalk and linger throughout the nights
// Wake up
// Teasing, they aim to mangle your perception of reality
// Staring back at you, making sure you see and feel their presence
// Numb from fear
// They reach over and hover above
// To remind you what you've always been told
// You'll never get rid of them and your life is a lost soul
// Wake up
// I'll never sleep again
// I'll never be the same
// I'm crawling out of my own skin
// I'm drowning in pain
// They watch, they wait, they accumulate incontestably through the dying light
// To fulfill my miserable construct
// My every night
// I am imprisoned to the shadows of a different realm
// Realize that this is hell
// I am imprisoned to the shadows of a different realm
// Realize that this is hell
// I am imprisoned to the shadows of a different realm
// This is the darkest form of mental torture, this is hell
// My body is numb, only my eyes can move
// And witness the hateful energy
// That stares back into the depths of me
// Paralyzed, paranormal paralysis
// Preying on perception
// And wretchedness
// I am the hopeless
// I'm one with the night
// Take me
// I'll never sleep again
// I'll never be the same
// I'm crawling out of my own skin
// I'm drowning in pain
// They watch, they wait, they accumulate incontestably through the dying light
// To fulfill my miserable construct
// My every night
// I am imprisoned to the shadows of a different realm
// Realize that this is hell
// I am imprisoned to the shadows of a different realm
// This is the darkest form of mental torture, this is hell
// My body is numb, only my eyes can move
// And witness the hateful energy
// That stares back into the depths of me
// Paralyzed, paranormal paralysis
// Preying on fucking perception
// And wretchedness
// Wake up
// Wake up
// Wake up
// Wake up
// Realize that this is hell`, `The thrill is gone
// The thrill is gone away
// The thrill is gone, baby
// The thrill is gone away
// You know you done me wrong, baby
// And you'll be sorry someday
// The thrill is gone
// It's gone away from me
// The thrill is gone, baby
// The thrill is gone away from me
// Although, I'll still live on
// But so lonely I'll be
// The thrill is gone
// It's gone away for good
// All the thrill is gone
// Baby, it's gone away for good
// Someday I know I'll be open-armed baby
// Just like I know, I know I should
// You know, I'm free, free now, baby
// I'm free from your spell
// Oh, free, free, free now, baby
// I'm free from your spell
// And now that it's all over
// All that I can do is wish you well`, `I hurt myself today
// To see if I still feel
// I focus on the pain
// The only thing that's real
// The needle tears a hole
// The old familiar sting
// Try to kill it all away
// But I remember everything
// What have I become?
// My sweetest friend
// Everyone I know goes away
// In the end
// And you could have it all
// My empire of dirt
// I will let you down
// I will make you hurt
// I wear this crown of thorns
// Upon my liar's chair
// Full of broken thoughts
// I cannot repair
// Beneath the stains of time
// The feelings disappear
// You are someone else
// I'm still right here
// What have I become?
// My sweetest friend
// Everyone I know goes away
// In the end
// And you could have it all
// My empire of dirt
// I will let you down
// I will make you hurt
// If I could start again
// A million miles away
// I would keep myself
// I would find a way`, `Right now, he's probably slow dancing
// With a bleached-blonde tramp
// And she's probably getting frisky
// Right now, he's probably buying her some fruity little drink
// 'Cause she can't shoot a whiskey
// Right now, he's probably up behind her with a pool-stick
// Showing her how to shoot a combo
// And he don't know
// I dug my key into the side
// Of his pretty little souped up four-wheel drive
// Carved my name into his leather seats
// I took a Louisville Slugger to both headlights
// Slashed a hole in all four tires
// Maybe next time, he'll think before he cheats
// Right now, she's probably up singing some
// White-trash version of Shania karaoke
// Right now, she's probably saying, "I'm drunk"
// And he's a thinking that he's gonna get lucky
// Right now, he's probably dabbing on
// Three dollars worth of that bathroom Polo
// Oh, and he don't know
// Oh, that I dug my key into the side
// Of his pretty little souped up four-wheel drive
// Carved my name into his leather seats
// I took a Louisville Slugger to both headlights
// Slashed a hole in all four tires
// Maybe next time, he'll think before he cheats
// I might've saved a little trouble for the next girl
// 'Cause the next time that he cheats
// Oh, you know it won't be on me
// No, not on me
// 'Cause I dug my key into the side
// Of his pretty little souped up four-wheel drive
// Carved my name into his leather seats
// I took a Louisville Slugger to both headlights
// Slashed a hole in all four tires
// Maybe next time, he'll think before he cheats
// Oh, maybe next time, he'll think before he cheats
// Oh, before he cheats
// Oh
// `, `I can't stand it, I know you planned it
// I'ma set it straight, this Watergate
// I can't stand rockin' when I'm in here
// 'Cause your crystal ball ain't so crystal clear
// So while you sit back and wonder why
// I got this fuckin' thorn in my side
// Oh my god, it's a mirage
// I'm tellin' y'all, it's sabotage
// So, so, so, so listen up, 'cause you can't say nothin'
// You'll shut me down with a push of your button
// But, yo, I'm out and I'm gone
// I'll tell you now, I keep it on and on
// 'Cause what you see, you might not get
// And we can bet, so don't you get souped yet
// Scheming on a thing, that's a mirage
// I'm trying to tell you now, it's sabotage
// Why?
// (Our backs are now against the wall)
// (Listen all y'all, it's a sabotage)
// (Listen all y'all, it's a sabotage)
// (Listen all y'all, it's a sabotage)
// (Listen all y'all, it's a sabotage)
// I can't stand it, I know you planned it
// I'ma set it straight, this Watergate
// But I can't stand rockin' when I'm in this place
// Because I feel disgrace because you're all in my face
// But make no mistakes and switch up my channel
// I'm Buddy Rich when I fly off the handle
// What could it be, it's a mirage
// You're scheming on a thing, that's sabotage`, `You were my sun
// You were my earth
// But you didn't know all the ways I loved you, no
// So you took a chance
// And made other plans
// But I bet you didn't think that they would come crashing down, no
// You don't have to say, what you did
// I already know, I found out from him
// Now there's just no chance
// For you and me
// There'll never be
// And don't it make you sad about it?
// You told me you love me
// Why did you leave me all alone?
// Now you tell me you need me
// When you call me on the phone
// Girl, I refuse
// You must have me confused with some other guy
// The bridges were burned
// Now it's your turn, to cry
// Cry me a river
// Cry me a river
// Cry me a river
// Cry me a river (yeah, yeah)
// You know that they say that some things are better left unsaid
// And it wasn't like you only talked to him and you know it
// Don't act like you don't know it
// And all of these things people told me
// Keep messin' with my head (messin' with my head)
// Should've picked honesty
// Then you may not have blown it (yeah)
// You don't have to say (don't have to say)
// What you did (what you did)
// I already know (I already know)
// I found out from him (uh)
// Now there's just no chance (no chance)
// For you and me (you and me)
// There'll never be
// Don't it make you sad about it?
// You told me you love me
// Why did you leave me all alone (all alone)
// Now you tell me you need me
// When you call me on the phone (when you call me on the phone)
// Girl, I refuse
// You must have me confused with some other guy (I'm not like them baby)
// The bridges were burned
// Now it's your turn (it's your turn) to cry
// So cry me a river (go on and just)
// Cry me a river (go on and just)
// Cry me a river (baby, go on and just)
// Cry me a river (yeah, yeah)
// Oh (oh!)
// The damage is done, so I guess I be leaving
// Oh (oh!)
// The damage is done, so I guess I be leaving
// Oh (oh!)
// The damage is done, so I guess I be leaving
// Oh (oh!)
// The damage is done, so I guess I be, leaving
// You don't have to say (you don't have to say)
// What you did (what you did)
// I already know (I already know)
// I found out from him (uh)
// Now there's just no chance (no chance)
// For you and me (you and me)
// There'll never be
// Don't it make you sad about it?
// Cry me a river (go on and just)
// Cry me a river (baby, go on and just)
// Cry me a river (you can go on and just)
// Cry me a river (yeah, yeah)
// Cry me a river (baby, go on and just)
// Cry me a river (go on and just)
// Cry me a river (come on baby, cry)
// Cry me a river (I don't wanna cry no more, yeah yeah)
// Cry me a river
// Cry me a river, oh
// Cry me a river, oh
// Cry me a river, oh
// Cry me a river (cry me, cry me) oh
// Cry me a river (cry me, cry me) oh
// Cry me a river (cry me, cry me) oh
// Cry me a river (cry me, cry me) oh
// Cry me a river (cry me, cry me) oh
// Cry me a river (cry me, cry me) oh
// Cry me a river (cry me, cry me)`, `I do my makeup in somebody else's car
// We order different drinks at the same bars
// I know about what you did and I wanna scream the truth
// She thinks you love the beach, you're such a damn liar
// Those great whites, they have big teeth
// Hope they bite you
// Thought you said that you would always be in love
// But you're not in love no more
// Did it frighten you
// How we kissed when we danced on the light up floor?
// On the light up floor
// But I hear sounds in my mind
// Brand new sounds in my mind
// But honey I'll be seein' you 'ever I go
// But honey I'll be seein' you down every road
// I'm waiting for it, that green light, I want it
// 'Cause honey I'll come get my things, but I can't let go
// I'm waiting for it, that green light, I want it
// Oh, I wish I could get my things and just let go
// I'm waiting for it, that green light, I want it
// Sometimes I wake up in a different bedroom
// I whisper things, the city sings 'em back to you
// All those rumors, they have big teeth
// Hope they bite you
// Thought you said that you would always be in love
// But you're not in love no more
// Did it frighten you
// How we kissed when we danced on the light up floor?
// On the light up floor
// But I hear sounds in my mind
// Brand new sounds in my mind
// But honey I'll be seein' you 'ever I go
// But honey I'll be seein' you down every road
// I'm waiting for it, that green light, I want it
// 'Cause honey I'll come get my things, but I can't let go
// I'm waiting for it, that green light, I want it
// Oh, honey I'll come get my things, but I can't let go
// I'm waiting for it, that green light, I want it
// Yes, honey I'll come get my things, but I can't let go
// I'm waiting for it, that green light, I want it
// Oh, I wish I could get my things and just let go
// I'm waiting for it, that green light, I want it
// I'm waiting for it, that green light, I want it
// I'm waiting for it, that green light, I want it
// I'm waiting for it, that green light, I want it
// I'm waiting for it, that green light, I want it
// I'm waiting for it, that green light, I want it
// I'm waiting for it, that green light, I want it`, `This is not a drill
// It's time for you to speak (blessings on)
// What you wanna see (blessings on)
// And if you with it then repeat after me, c'mon
// Every time I turn around
// Blessings, blessings
// Every time I turn around
// Blessings on blessings
// Every time I turn around
// Blessings, blessings
// Every time I turn around
// Blessings on blessings
// Every time I turn around
// Blessings, blessings
// Every time I turn around
// There will be blessings on blessings
// Blessings on blessings
// Every time I turn around
// Blessings, blessings
// Every time I turn around
// There will be blessings on blessings
// Blessings on blessings
// The favor of the Lord rests upon me
// In my hands I have more than enough
// (Yeah, more than enough)
// Surely goodness and mercy is following me
// And my God will supply every one of my needs
// The favor of the Lord rests upon me
// In my hands I have more than enough
// Surely goodness and mercy is following me
// And my God will supply every one of my needs
// Every time I turn around
// Blessings, blessings
// Every time I turn around
// There will be blessings on blessings
// Every time I turn around
// Blessings, blessings
// Every time I turn around
// There will be blessings on blessings
// The favor of the Lord rests upon me
// In my hands I have more than enough
// Surely goodness and mercy is following me
// And my God will supply every one of my needs
// The favor of the Lord rests upon me
// In my hands I got
// More than enough
// (You got everything you need)
// Surely goodness and mercy is following me and
// My God will supply
// Every single one of my needs
// I'm not gonna worry
// Aye, well alright
// I choose not to fear
// (I got) no fear, no fear
// I'm only speaking blessings
// (Yeah I'm only seeking blessings)
// For the rest of the year
// I'm not gonna worry
// (You've got to say it like you mean it)
// I choose not to fear
// (I got) No fear, no fear
// I'm only speaking blessings
// (Yes I'm only speaking blessings)
// For the rest of the year
// Blessings, blessings
// Come on say, blessings, blessings
// Come on say blessings, blessings
// For the rest of the year
// Come on say blessings, blessings
// Blessing, blessings
// For the rest of the year
// Favor, favor, I gotta get
// Favor, favor
// For the rest of the year
// Favor, favor, favor
// For the rest of the year
// Healing, healing
// I claim it, healing
// For the rest of the year
// Healing, healing, healing
// For the rest of the year
// Power, power, power
// For the rest of the year
// Power, power, power
// Every time I turn around
// I see blessings, blessings
// Blessings, blessings
// Every time I turn around
// There will be blessings
// Blessings on blessings
// Every time I turn around I see
// Blessings, blessings
// Blessings, blessings
// Every time I turn around
// There will be blessings on blessings
// Blessings on blessings`, `Stars shining bright above you
// Night breezes seem to whisper, I love you
// Birds singin' in the sycamore trees
// Dream a little dream of me


// Say nighty-night and kiss me
// Just hold me tight and tell me you'll miss me
// While I'm alone and blue as can be
// Dream a little dream of me

// Stars fading but I linger on dear
// Still craving your kiss
// Now I'm longin' to linger till dawn dear
// Just saying this

// Sweet dreams till sunbeams find you
// Sweet dreams that leave all worries behind you
// But in your dreams whatever they be
// Dream a little dream of me

// Stars fading but I linger on dear
// Still craving your kiss
// I'm longin' to linger till dawn dear
// Just saying this
// See R&B shows near Seattle
// Get tickets as low as $39

// Sweet dreams till sunbeams find you
// Leave the worries behind you
// But in your dreams, whatever may be
// You've gotta make me a promise, promise to me
// You'll dream, dream a little dream of me`, `
// Metro Boomin want some more, nigga! (Hey)


// Going to the jeweler, bust the AP, yeah (Bust it)
// Slide on the water like a jet-ski, yeah (Woo, slide)
// I'm tryna fuck you and your bestie, yeah (Hey)
// Chopper with the scope so do not test me, (Drrt) yeah (Drrt)
// Ric Flair drip, go "woo" on a bitch (Woo)
// 57 90, split the coupe on my wrist (Ice)
// Multi-million dollar, I'm a fool with the hits (Ayy)
// Hop up in the Lamb' and drop the roof, show the tits (Skrrt)


// Poppin' but you really not gon' shoot (Pop)
// 90 pointers down my diamonds look like hula hoops (90)
// Hopping in my Bentayga and her seat is a masseuse (Hey)
// Balenciaga, check my posture, Valentino boots (Oho-ooh)
// It's the Boominati way, a lotta Lambs, a lotta Wraiths (Boominati)
// Never hesitate to give a nigga yellow tape (Grrt)
// Ain't worried 'bout the bag 'cause the cash accumulatin' (Bags)
// Soon as we came in the game, all these niggas they imitate it (Hey)
// Put my mind on it then I put my grind on it (Grind)
// Put the iron on him if a nigga my opponent (Iron)
// My car 500 and I don't put no miles on it (Ho)
// I was runnin' 'round homie, with 500 thou' on me (Ho)


// Going to the jeweler, bust the AP, yeah (Bust it)
// Slide on the water like a jet-ski, yeah (Woo, slide)
// I'm tryna fuck you and your bestie, yeah (Hey)
// Chopper with the scope so do not test me, (Drrt) yeah (Drrt)
// Ric Flair drip, go "woo" on a bitch (Woo)
// 57 90, split the coupe on my wrist (Ice)
// Multi-million dollar, I'm a fool with the hits (Ayy)
// Hop up in the Lamb' and drop the roof, show the tits (Offset)


// Told my fam, got the gang with me (Gang with me)
// Bought my first Patek, it got some rain on it (Patek)
// Nigga, we used to kick it, how you hatin' on me? (How? How?)
// Hop in the Bentley coupe and blow the brains out it (Skrrt!)
// We not the same, my nigga
// My nigga, we from the north division (North, nawf)
// Aim at your brain, yea we bought ya just like it's an auction, ain't it (Hey)
// Beat the chopper, hundred round total, like it's car collision (Brrt-brrt)
// I made that shit mandatory, that means I had to get it (Hey)
// My shooter be begging "please", he ready to wack a nigga (Please, please)
// I gave a nigga a diamond, I had to cap a nigga (Woo)
// I'm giving your ho away like she a raffle, nigga (Here, here)
// We get at it, then we 'gone pray with the pastor's scriptures (Hey)


// Going to the jeweler, bust the AP, yeah (Bust it)
// Slide on the water like a jet-ski, yeah (Woo, slide)
// I'm tryna fuck you and your bestie, yeah (Hey)
// Chopper with the scope so do not test me, (Drrt) yeah (Drrt)
// Ric Flair drip, go "woo" on a bitch (Woo)
// 57 90, split the coupe on my wrist (Ice)
// Multi-million dollar, I'm a fool with the hits (Ayy)
// Hop up in the Lamb' and drop the roof, show the tits (Skrrt)
// Going to the jeweler, bust the AP, yeah (Bust it)
// Slide on the water like a jet-ski, yeah (Woo, slide)
// I'm tryna fuck you and your bestie, yeah (Hey)
// Chopper with the scope so do not test me, (Drrt) yeah (Drrt)
// Ric Flair drip, go "woo" on a bitch (Woo)
// 57 90, split the coupe on my wrist (Ice)
// Multi-million dollar, I'm a fool with the hits (Ayy)
// Hop up in the Lamb' and drop the roof, show the tits (Skrrt)`];
//const dummy = new clientListeningClassification("bob");


// Register the necessary components for Bar and Radar charts
ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  RadarController,
  RadialLinearScale,
  PointElement,
  LineElement
);

// Sample data for the radar chart
const radarChartData = {
  labels: ['acousticness', 'danceability', 'energy', 'valence', 'instrumentalness', 'tempo', 'speechiness'],
  datasets: [
    {
      label: 'acousticness',
      data: [7, 1, 9],
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 2,
    },
    {
      label: 'danceability',
      data: [1, 6, 8],
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      borderColor: 'rgba(54, 162, 235, 1)',
      borderWidth: 2,
    },
    {
      label: 'energy',
      data: [8, 9, 1],
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 2,
    },
    {
      label: 'valence',
      data: [8, 7, 6],
      backgroundColor: 'rgba(175, 238, 238, 0.2)', // Pale Turquoise
      borderColor: 'rgba(175, 238, 238, 1)',       // Darker Turquoise
      borderWidth: 2,
    },
    {
      label: 'instrumentalness',
      data: [2, 8, 4],
      backgroundColor: 'rgba(255, 218, 185, 0.2)', // Peach Puff
      borderColor: 'rgba(255, 218, 185, 1)',       // Darker Peach
      borderWidth: 2,
    },{
      label: 'tempo',
      data: [4, 2, 8],
      backgroundColor: 'rgba(255, 228, 225, 0.2)', // Misty Rose
      borderColor: 'rgba(255, 228, 225, 1)',       // Darker Rose
      borderWidth: 2,
    },{
      label: 'speechiness',
      data: [2, 5 , 9],
      backgroundColor: 'rgba(255, 160, 122, 0.2)', // Light Salmon
      borderColor: 'rgba(255, 160, 122, 1)',       // Darker Salmon
      borderWidth: 2,
    },
  ],
};

const ProfOverview = () => {

  const [barChartData, setBarCharData] = useState({
    labels: ['Joy', 'Sadness', 'Anger', 'Fear' ],
    datasets: [
      {
        label: 'Amount of Songs',
        data: [0, 0, 0, 0],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 3,
      },
    ],
  });

  /*useEffect(()=> {
    //Promise.all(inputs.map(input => { return dummy.classifyThis(input)})).then((results) => {
      //const dummyMap = dummy.getMap();
      //const jsonData = JSON.parse(dummyMap);
      const valuesString = intakeToClassificationMadeAccessible.accessible.lyricMap;
      const valueMap = JSON.parse(valuesString);
      setBarCharData({
        labels: ['Joy', 'Sadness', 'Anger', 'Fear' ],
        datasets: [
          {
            label: 'Amount of Songs',
            data: [valueMap['Joy'], valueMap['Sadness'], valueMap['Anger'], valueMap['Fear']],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 3,
          },
        ],
      });
    //});
  },[]);*/

  const [userEmail, setUserEmail] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserEmail(user.email);
        console.log('User:', user);
      } else {
        setUserEmail(null);
      }
    });

    // Clean up subscription on unmount
    return () => unsubscribe();
  }, []);

  const onButtonClick = () => {
    navigate('/listPage');  
  }

  return (
    <div className="mainContainer">
      <h1 className="text-center">Psionic Synchronicity</h1>
      

      <Row className="justify-content-center">
        <Col xs={12} md={5} lg={5} className="mb-4">
          <Card border="secondary" className="text-center">
            <Card.Body>
              <Card.Title><h1>Sentiment Counter</h1></Card.Title>
              <Card.Text>
                <div style={{ width: '100%', height: '300px' }}>
                  <Bar data={barChartData} options={{ responsive: true }} />
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={100} md={15} lg={20} className="mb-4">
          <Card border="secondary" className="text-center">
            <Card.Body>
              <Card.Title><h1>Sentiment Radar Chart</h1></Card.Title>
              <Card.Text>
                <div className="radar-chart-container">
                <img src={`${process.env.PUBLIC_URL}/playlist_comp.png`} className="card-logo" alt="playlist_comp_image" />
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <div className={'buttonContainer'}>
        <input
          className={'inputButton'}
          type="button"
          onClick={onButtonClick}
          value={'Back To Client List'}
        />
      </div>
    </div>
  );
}

export default ProfOverview;


