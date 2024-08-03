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

const auth = getAuth(firebaseApp);

/**
 * dummy set example
 */
const inputs = [`Yeah, yeah, yeah
Yeah, yeah
Every time you cross my mind, you get right under my skin
Am I crazy, out my mind, this situation I'm in
And it gets harder just to breathe, feel like the walls are closin' in
But all I need is some closure
Yeah, I can't eat, I can't sleep, I get anxiety
When you're not here with me, I get anxiety
I can't eat, I can't sleep, don't know why you can't see
You give me, you give me, give me
Anxiet-xiet, xiet, xiet-xiet-xiet, xiet-xiety-ty
Xiet, xiet-xiet-xiet
Give me anxiety
Xiet-xiet, xiet, xiet-xiety-ty
Xiet, xiet-xiet-xiet
Anxiety
Every time I smile while I'm doin' fine, does it show?
'Cause I'm really freaking out, too scared of letting you go
Then my heart drowns out my thoughts, my head's about to explode
What I need is some closure
I, I can't eat, I can't sleep, I get anxiety
When you're not here with me, I get anxiety
I can't eat, I can't sleep, don't know why you can't see
You give me, you give me, give me
Anxiet-xiet, xiet, xiet-xiet-xiet, xiet-xiety-ty
Xiet, xiet-xiet-xiet
Give me anxiety
Xiet-xiet, xiet, xiet-xiety-ty
Xiet, xiet-xiet-xiet
Anxiety (anxiety)
(If you ain't beside me)
Every time I smile while I'm doin' fine, does it show?
'Cause' I'm really freaking out, too scared of letting you go
I can't eat, I can't sleep, I get anxiety
When you're not here with me, I get anxiety
I can't eat, I can't sleep, don't know why you can't see
You give me, you give me, give me anxiety
Anxiety
Give me anxiety
Anxiety`, `They told me to run, but just how far?
Can I go wearing the black mask of fear?
The hate in my eyes always gives me away
The tension building slowly
Now I lost everything I had in you
Nothing we shared means a thing
Without you close to me
I can't live without you
Breaking the silence of the night
Can't you hear me screaming?
I look for your face in the neon light
You never answer me
There's no direction to my stare
No more flame burning in my heart anymore
Quiet, I keep it to myself
Until the sun sets slowly
I hear your voice in the evening rain calling
Nothing will keep us apart
No more lies and fear
There's no end to our story
Breaking the silence of the night
Can't you hear me screaming?
I look for your face in the neon light
You never answer
I could make all the wrong seem right
If you were by my side
I'd gather all the tears you cried
And hide them deep underground
Can't look back, it's just a waste of time
Can't erase this hate from my eyes
Breaking the silence of the night
Through the streets I'm screaming
Looking for you in the neon light
Why don't you answer me?
Breaking the silence with my cries
Can't you hear me screaming?
We could make all this wrong seem right
But you never answer me`, `Paralyzed from the neck down
Can't move, can't scream, can't make a sound
The shadows move and enclose the room
Creating the familiar silhouettes that
Stalk and linger throughout the nights
Wake up
Teasing, they aim to mangle your perception of reality
Staring back at you, making sure you see and feel their presence
Numb from fear
They reach over and hover above
To remind you what you've always been told
You'll never get rid of them and your life is a lost soul
Wake up
I'll never sleep again
I'll never be the same
I'm crawling out of my own skin
I'm drowning in pain
They watch, they wait, they accumulate incontestably through the dying light
To fulfill my miserable construct
My every night
I am imprisoned to the shadows of a different realm
Realize that this is hell
I am imprisoned to the shadows of a different realm
Realize that this is hell
I am imprisoned to the shadows of a different realm
This is the darkest form of mental torture, this is hell
My body is numb, only my eyes can move
And witness the hateful energy
That stares back into the depths of me
Paralyzed, paranormal paralysis
Preying on perception
And wretchedness
I am the hopeless
I'm one with the night
Take me
I'll never sleep again
I'll never be the same
I'm crawling out of my own skin
I'm drowning in pain
They watch, they wait, they accumulate incontestably through the dying light
To fulfill my miserable construct
My every night
I am imprisoned to the shadows of a different realm
Realize that this is hell
I am imprisoned to the shadows of a different realm
This is the darkest form of mental torture, this is hell
My body is numb, only my eyes can move
And witness the hateful energy
That stares back into the depths of me
Paralyzed, paranormal paralysis
Preying on fucking perception
And wretchedness
Wake up
Wake up
Wake up
Wake up
Realize that this is hell`, `The thrill is gone
The thrill is gone away
The thrill is gone, baby
The thrill is gone away
You know you done me wrong, baby
And you'll be sorry someday
The thrill is gone
It's gone away from me
The thrill is gone, baby
The thrill is gone away from me
Although, I'll still live on
But so lonely I'll be
The thrill is gone
It's gone away for good
All the thrill is gone
Baby, it's gone away for good
Someday I know I'll be open-armed baby
Just like I know, I know I should
You know, I'm free, free now, baby
I'm free from your spell
Oh, free, free, free now, baby
I'm free from your spell
And now that it's all over
All that I can do is wish you well`, `I hurt myself today
To see if I still feel
I focus on the pain
The only thing that's real
The needle tears a hole
The old familiar sting
Try to kill it all away
But I remember everything
What have I become?
My sweetest friend
Everyone I know goes away
In the end
And you could have it all
My empire of dirt
I will let you down
I will make you hurt
I wear this crown of thorns
Upon my liar's chair
Full of broken thoughts
I cannot repair
Beneath the stains of time
The feelings disappear
You are someone else
I'm still right here
What have I become?
My sweetest friend
Everyone I know goes away
In the end
And you could have it all
My empire of dirt
I will let you down
I will make you hurt
If I could start again
A million miles away
I would keep myself
I would find a way`, `Right now, he's probably slow dancing
With a bleached-blonde tramp
And she's probably getting frisky
Right now, he's probably buying her some fruity little drink
'Cause she can't shoot a whiskey
Right now, he's probably up behind her with a pool-stick
Showing her how to shoot a combo
And he don't know
I dug my key into the side
Of his pretty little souped up four-wheel drive
Carved my name into his leather seats
I took a Louisville Slugger to both headlights
Slashed a hole in all four tires
Maybe next time, he'll think before he cheats
Right now, she's probably up singing some
White-trash version of Shania karaoke
Right now, she's probably saying, "I'm drunk"
And he's a thinking that he's gonna get lucky
Right now, he's probably dabbing on
Three dollars worth of that bathroom Polo
Oh, and he don't know
Oh, that I dug my key into the side
Of his pretty little souped up four-wheel drive
Carved my name into his leather seats
I took a Louisville Slugger to both headlights
Slashed a hole in all four tires
Maybe next time, he'll think before he cheats
I might've saved a little trouble for the next girl
'Cause the next time that he cheats
Oh, you know it won't be on me
No, not on me
'Cause I dug my key into the side
Of his pretty little souped up four-wheel drive
Carved my name into his leather seats
I took a Louisville Slugger to both headlights
Slashed a hole in all four tires
Maybe next time, he'll think before he cheats
Oh, maybe next time, he'll think before he cheats
Oh, before he cheats
Oh
`, `I can't stand it, I know you planned it
I'ma set it straight, this Watergate
I can't stand rockin' when I'm in here
'Cause your crystal ball ain't so crystal clear
So while you sit back and wonder why
I got this fuckin' thorn in my side
Oh my god, it's a mirage
I'm tellin' y'all, it's sabotage
So, so, so, so listen up, 'cause you can't say nothin'
You'll shut me down with a push of your button
But, yo, I'm out and I'm gone
I'll tell you now, I keep it on and on
'Cause what you see, you might not get
And we can bet, so don't you get souped yet
Scheming on a thing, that's a mirage
I'm trying to tell you now, it's sabotage
Why?
(Our backs are now against the wall)
(Listen all y'all, it's a sabotage)
(Listen all y'all, it's a sabotage)
(Listen all y'all, it's a sabotage)
(Listen all y'all, it's a sabotage)
I can't stand it, I know you planned it
I'ma set it straight, this Watergate
But I can't stand rockin' when I'm in this place
Because I feel disgrace because you're all in my face
But make no mistakes and switch up my channel
I'm Buddy Rich when I fly off the handle
What could it be, it's a mirage
You're scheming on a thing, that's sabotage`, `You were my sun
You were my earth
But you didn't know all the ways I loved you, no
So you took a chance
And made other plans
But I bet you didn't think that they would come crashing down, no
You don't have to say, what you did
I already know, I found out from him
Now there's just no chance
For you and me
There'll never be
And don't it make you sad about it?
You told me you love me
Why did you leave me all alone?
Now you tell me you need me
When you call me on the phone
Girl, I refuse
You must have me confused with some other guy
The bridges were burned
Now it's your turn, to cry
Cry me a river
Cry me a river
Cry me a river
Cry me a river (yeah, yeah)
You know that they say that some things are better left unsaid
And it wasn't like you only talked to him and you know it
Don't act like you don't know it
And all of these things people told me
Keep messin' with my head (messin' with my head)
Should've picked honesty
Then you may not have blown it (yeah)
You don't have to say (don't have to say)
What you did (what you did)
I already know (I already know)
I found out from him (uh)
Now there's just no chance (no chance)
For you and me (you and me)
There'll never be
Don't it make you sad about it?
You told me you love me
Why did you leave me all alone (all alone)
Now you tell me you need me
When you call me on the phone (when you call me on the phone)
Girl, I refuse
You must have me confused with some other guy (I'm not like them baby)
The bridges were burned
Now it's your turn (it's your turn) to cry
So cry me a river (go on and just)
Cry me a river (go on and just)
Cry me a river (baby, go on and just)
Cry me a river (yeah, yeah)
Oh (oh!)
The damage is done, so I guess I be leaving
Oh (oh!)
The damage is done, so I guess I be leaving
Oh (oh!)
The damage is done, so I guess I be leaving
Oh (oh!)
The damage is done, so I guess I be, leaving
You don't have to say (you don't have to say)
What you did (what you did)
I already know (I already know)
I found out from him (uh)
Now there's just no chance (no chance)
For you and me (you and me)
There'll never be
Don't it make you sad about it?
Cry me a river (go on and just)
Cry me a river (baby, go on and just)
Cry me a river (you can go on and just)
Cry me a river (yeah, yeah)
Cry me a river (baby, go on and just)
Cry me a river (go on and just)
Cry me a river (come on baby, cry)
Cry me a river (I don't wanna cry no more, yeah yeah)
Cry me a river
Cry me a river, oh
Cry me a river, oh
Cry me a river, oh
Cry me a river (cry me, cry me) oh
Cry me a river (cry me, cry me) oh
Cry me a river (cry me, cry me) oh
Cry me a river (cry me, cry me) oh
Cry me a river (cry me, cry me) oh
Cry me a river (cry me, cry me) oh
Cry me a river (cry me, cry me)`, `I do my makeup in somebody else's car
We order different drinks at the same bars
I know about what you did and I wanna scream the truth
She thinks you love the beach, you're such a damn liar
Those great whites, they have big teeth
Hope they bite you
Thought you said that you would always be in love
But you're not in love no more
Did it frighten you
How we kissed when we danced on the light up floor?
On the light up floor
But I hear sounds in my mind
Brand new sounds in my mind
But honey I'll be seein' you 'ever I go
But honey I'll be seein' you down every road
I'm waiting for it, that green light, I want it
'Cause honey I'll come get my things, but I can't let go
I'm waiting for it, that green light, I want it
Oh, I wish I could get my things and just let go
I'm waiting for it, that green light, I want it
Sometimes I wake up in a different bedroom
I whisper things, the city sings 'em back to you
All those rumors, they have big teeth
Hope they bite you
Thought you said that you would always be in love
But you're not in love no more
Did it frighten you
How we kissed when we danced on the light up floor?
On the light up floor
But I hear sounds in my mind
Brand new sounds in my mind
But honey I'll be seein' you 'ever I go
But honey I'll be seein' you down every road
I'm waiting for it, that green light, I want it
'Cause honey I'll come get my things, but I can't let go
I'm waiting for it, that green light, I want it
Oh, honey I'll come get my things, but I can't let go
I'm waiting for it, that green light, I want it
Yes, honey I'll come get my things, but I can't let go
I'm waiting for it, that green light, I want it
Oh, I wish I could get my things and just let go
I'm waiting for it, that green light, I want it
I'm waiting for it, that green light, I want it
I'm waiting for it, that green light, I want it
I'm waiting for it, that green light, I want it
I'm waiting for it, that green light, I want it
I'm waiting for it, that green light, I want it
I'm waiting for it, that green light, I want it`, `This is not a drill
It's time for you to speak (blessings on)
What you wanna see (blessings on)
And if you with it then repeat after me, c'mon
Every time I turn around
Blessings, blessings
Every time I turn around
Blessings on blessings
Every time I turn around
Blessings, blessings
Every time I turn around
Blessings on blessings
Every time I turn around
Blessings, blessings
Every time I turn around
There will be blessings on blessings
Blessings on blessings
Every time I turn around
Blessings, blessings
Every time I turn around
There will be blessings on blessings
Blessings on blessings
The favor of the Lord rests upon me
In my hands I have more than enough
(Yeah, more than enough)
Surely goodness and mercy is following me
And my God will supply every one of my needs
The favor of the Lord rests upon me
In my hands I have more than enough
Surely goodness and mercy is following me
And my God will supply every one of my needs
Every time I turn around
Blessings, blessings
Every time I turn around
There will be blessings on blessings
Every time I turn around
Blessings, blessings
Every time I turn around
There will be blessings on blessings
The favor of the Lord rests upon me
In my hands I have more than enough
Surely goodness and mercy is following me
And my God will supply every one of my needs
The favor of the Lord rests upon me
In my hands I got
More than enough
(You got everything you need)
Surely goodness and mercy is following me and
My God will supply
Every single one of my needs
I'm not gonna worry
Aye, well alright
I choose not to fear
(I got) no fear, no fear
I'm only speaking blessings
(Yeah I'm only seeking blessings)
For the rest of the year
I'm not gonna worry
(You've got to say it like you mean it)
I choose not to fear
(I got) No fear, no fear
I'm only speaking blessings
(Yes I'm only speaking blessings)
For the rest of the year
Blessings, blessings
Come on say, blessings, blessings
Come on say blessings, blessings
For the rest of the year
Come on say blessings, blessings
Blessing, blessings
For the rest of the year
Favor, favor, I gotta get
Favor, favor
For the rest of the year
Favor, favor, favor
For the rest of the year
Healing, healing
I claim it, healing
For the rest of the year
Healing, healing, healing
For the rest of the year
Power, power, power
For the rest of the year
Power, power, power
Every time I turn around
I see blessings, blessings
Blessings, blessings
Every time I turn around
There will be blessings
Blessings on blessings
Every time I turn around I see
Blessings, blessings
Blessings, blessings
Every time I turn around
There will be blessings on blessings
Blessings on blessings`, `Stars shining bright above you
Night breezes seem to whisper, I love you
Birds singin' in the sycamore trees
Dream a little dream of me


Say nighty-night and kiss me
Just hold me tight and tell me you'll miss me
While I'm alone and blue as can be
Dream a little dream of me

Stars fading but I linger on dear
Still craving your kiss
Now I'm longin' to linger till dawn dear
Just saying this

Sweet dreams till sunbeams find you
Sweet dreams that leave all worries behind you
But in your dreams whatever they be
Dream a little dream of me

Stars fading but I linger on dear
Still craving your kiss
I'm longin' to linger till dawn dear
Just saying this
See R&B shows near Seattle
Get tickets as low as $39

Sweet dreams till sunbeams find you
Leave the worries behind you
But in your dreams, whatever may be
You've gotta make me a promise, promise to me
You'll dream, dream a little dream of me`, `
Metro Boomin want some more, nigga! (Hey)


Going to the jeweler, bust the AP, yeah (Bust it)
Slide on the water like a jet-ski, yeah (Woo, slide)
I'm tryna fuck you and your bestie, yeah (Hey)
Chopper with the scope so do not test me, (Drrt) yeah (Drrt)
Ric Flair drip, go "woo" on a bitch (Woo)
57 90, split the coupe on my wrist (Ice)
Multi-million dollar, I'm a fool with the hits (Ayy)
Hop up in the Lamb' and drop the roof, show the tits (Skrrt)


Poppin' but you really not gon' shoot (Pop)
90 pointers down my diamonds look like hula hoops (90)
Hopping in my Bentayga and her seat is a masseuse (Hey)
Balenciaga, check my posture, Valentino boots (Oho-ooh)
It's the Boominati way, a lotta Lambs, a lotta Wraiths (Boominati)
Never hesitate to give a nigga yellow tape (Grrt)
Ain't worried 'bout the bag 'cause the cash accumulatin' (Bags)
Soon as we came in the game, all these niggas they imitate it (Hey)
Put my mind on it then I put my grind on it (Grind)
Put the iron on him if a nigga my opponent (Iron)
My car 500 and I don't put no miles on it (Ho)
I was runnin' 'round homie, with 500 thou' on me (Ho)


Going to the jeweler, bust the AP, yeah (Bust it)
Slide on the water like a jet-ski, yeah (Woo, slide)
I'm tryna fuck you and your bestie, yeah (Hey)
Chopper with the scope so do not test me, (Drrt) yeah (Drrt)
Ric Flair drip, go "woo" on a bitch (Woo)
57 90, split the coupe on my wrist (Ice)
Multi-million dollar, I'm a fool with the hits (Ayy)
Hop up in the Lamb' and drop the roof, show the tits (Offset)


Told my fam, got the gang with me (Gang with me)
Bought my first Patek, it got some rain on it (Patek)
Nigga, we used to kick it, how you hatin' on me? (How? How?)
Hop in the Bentley coupe and blow the brains out it (Skrrt!)
We not the same, my nigga
My nigga, we from the north division (North, nawf)
Aim at your brain, yea we bought ya just like it's an auction, ain't it (Hey)
Beat the chopper, hundred round total, like it's car collision (Brrt-brrt)
I made that shit mandatory, that means I had to get it (Hey)
My shooter be begging "please", he ready to wack a nigga (Please, please)
I gave a nigga a diamond, I had to cap a nigga (Woo)
I'm giving your ho away like she a raffle, nigga (Here, here)
We get at it, then we 'gone pray with the pastor's scriptures (Hey)


Going to the jeweler, bust the AP, yeah (Bust it)
Slide on the water like a jet-ski, yeah (Woo, slide)
I'm tryna fuck you and your bestie, yeah (Hey)
Chopper with the scope so do not test me, (Drrt) yeah (Drrt)
Ric Flair drip, go "woo" on a bitch (Woo)
57 90, split the coupe on my wrist (Ice)
Multi-million dollar, I'm a fool with the hits (Ayy)
Hop up in the Lamb' and drop the roof, show the tits (Skrrt)
Going to the jeweler, bust the AP, yeah (Bust it)
Slide on the water like a jet-ski, yeah (Woo, slide)
I'm tryna fuck you and your bestie, yeah (Hey)
Chopper with the scope so do not test me, (Drrt) yeah (Drrt)
Ric Flair drip, go "woo" on a bitch (Woo)
57 90, split the coupe on my wrist (Ice)
Multi-million dollar, I'm a fool with the hits (Ayy)
Hop up in the Lamb' and drop the roof, show the tits (Skrrt)`, 
`
Same bed, but it feels just a little bit bigger now
Our song on the radio, but it don't sound the same
When our friends talk about you, all it does is just tear me down
'Cause my heart breaks a little when I hear your name


It all just sounds like (Ooh, ooh)
Mm, too young, too dumb to realize


That I should've bought you flowers
And held your hand
Shoulda gave you all my hours
When I had the chance
Take you to every party
'Cause all you wanted to do was dance
Now my baby's dancin'
But she's dancin' with another man


Uh, my pride, my ego, my needs, and my selfish ways
Caused a good, strong woman like you to walk out my life
Now I'll never, never get to clean up the mess I made, oh
And that haunts me every time I close my eyes


It all just sounds like (Ooh, ooh)
Mm, too young, too dumb to realize


That I should've bought you flowers
And held your hand
Shoulda gave you all my hours
When I had the chance
Take you to every party
'Cause all you wanted to do was dance
Now my baby's dancin'
But she's dancin' with another man


Although it hurts
I'll be the first to say that
I was wrong
Oh, I know I'm probably much too late
To try and apologize for my mistakes
But I just want you to know


I hope he buys you flowers
I hope he holds your hand
Give you all his hours
When he has the chance
Take you to every party
'Cause I remember how much you love to dance
Do all the things I should've done
When I was your man
Do all the things I should've done
When I was your man`, 
`
Let's take our time tonight, girl
Above us all the stars are watchin'
There's no place I'd rather be in this world
Your eyes are where I'm lost in
Underneath the chandelier
We're dancin' all alone
There's no reason to hide
What we're feelin' inside
Right now


So, baby, let's just turn down the lights
And close the door
Oooh I love that dress
But you won't need it anymore
No, you won't need it no more
Let's just kiss 'til we're naked, baby


Versace on the floor
Oooh take it off for me, for me, for me, for me now, girl
Versace on the floor
Oooh take it off for me, for me, for me, for me now, girl


Now I unzip the back to watch it fall
While I kiss your neck and shoulders
No, don't be afraid to show it all
I'll be right here ready to hold you
Girl, you know you're perfect from
Your head down to your heels
Don't be confused by my smile
'Cause I ain't ever been more for real, for real


So just turn down the lights
And close the door
Oooh I love that dress
But you won't need it anymore
No, you won't need it no more
Let's just kiss 'til we're naked, baby


Versace on the floor
Oooh take it off for me, for me, for me, for me now, girl
Versace on the floor
Oooh take it off for me, for me, for me, for me now, girl
Dance


It's warmin' up
Can you feel it?
It's warmin' up
Can you feel it?
It's warmin' up
Can you feel it, baby?
It's warmin' up
Oh, seems like you're ready for more, more, more
Let's just kiss 'til we're naked


Versace on the floor
Hey, baby
Take it off for me, for me, for me, for me now, girl
Versace on the floor
Oooh take it off for me, for me, for me, for me now, girl


Versace on the floor
Floor
Floor`,
`
Yeah, yeah, Pluto


I don't hang with rats, that's some new type shit
Get a nigga whacked on the news type shit
Sippin' drank and Actavis on some Screw type shit
Just a sad ho runnin' through the crew type shit
I got a bad bitch at home, voodoo type shit
Take down Meg Thee Stallions by the group type shit


That's some thick shit, I just thought you knew type shit
I just tricked off, I don't just usually do this type of shit
Pockets racked up, all blue type shit
Bunch of rich niggas, hoes get confused type shit
Atlanta nigga, I live like Ted Turner type shit
On camera, knockin' jaws loose typе shit
I canceled her, kick hеr out the stu' type shit
A silent hitter, I just keep it cool with you bitches
A solid nigga, countin' dog food type shit
Movin' through the city with your boo type shit
She's ready to suck it up like soup type shit
You goin' against the guys and you gon' lose type shit
Pray to God they knock you out your shoes type shit (Type shit)


Pop it, pop it, right up out the blue type shit
Put the Double O in a mood
Serotonin, that's a cool type mix
Oxycontin, mix it with balloons (Alright)
East Atlanta feelin' like a zoo type mix (Open up)
Shawty, shawty strippin', takin' shrooms
Eatin' all the Percs, on some food type shit (Open up)
Shawty make it work, 9-to-5 type shit (Open up)
Eatin' all the Perkies, on some food type shit (Open up)
Eatin' all the Perkies, on some food type shit (Going up)
All the homies crushin' on some fool type— (Going up)
Floodin' out the spot, it's like a pool type mix (Add it up)
All the homies crushin' on some fool type shit (Going up)
All the homies crushin' on some fool type— (Open up)
Eatin' all the Perkies, on some food type shit
Feelin' so high, I'm on the moon type shit


Kick the slow flow, jitsu type shit (Open it up, add it up)
Red lock in my dreadlocks, I'm on bool type shit (Fuck it up, add it up)
Cook a nigga up like food type shit (Fuck it up, fuck it up)
Posted up with my dogs, Scooby Doo type shit (Fuck it up, woo)

She grippin' all on my balls, I gotta move type shit
Diamonds, they cover my flaws, I'm actin' brand new type shit
Hundred round drum, make it burst, soundin' like a nuke type shit
All of my jeans is saggin', I think I'm over tight shit
Put the ho down with the gang, now she think she my manager type shit
Shawty thought she was the one, I will forever have a boss bitch
The presi' set on me plain, I'm on some naked type shit
Eighty-one thou' for the teeth, I still ain't smiling for this bitch
This ho think she better than me? She on that IG model shit
Shawty said I'm a superhero, so how the fuck I'ma hide from shit?
Bitch give me dome in the back, she on her bobblehead type shit
All I want is ass and titties, I ain't got no type, shit
Sippin' on drank, Pluto, hold up
Sippin' my drank, Metro
Sittin' right here with my yayo type shit
Might put some diamonds in my gloves, woah, on my Mike shit
What the fuck y'all talking about bodies for? Y'all just type shit (Pluto)


I don't hang with rats, that's some new type shit (New type shit)
Get a nigga whacked on the news type shit
Sippin' drank and Actavis on some Screw type shit
Just a sad ho runnin' through the crew type shit
I got a bad bitch at home, voodoo type shit
Take down Meg Thee Stallions by the group type shit


Tags all over my shirt, uh, rockstar type shit (Open it up, open it up)
Molly all in my dreads, uh, Rasta type shit (Open it up, open it up)
'Bout to take a ho to Turks, she a monster type shit (Type shit)
She don't speak no English, money talk type shit
She fuck me, ran her mouth 'cause I'm a boss type shit (Woo)`,
`
Ayy, ayy, ayy
I got a condo in Manhattan
Baby girl, what's happenin'?
You and your ass invited
So go on and get to clappin'
So pop it for a player
Pop, pop it for me
Turn around and drop it for a player
Drop, drop it for me
I'll rent a beach house in Miami (-ami)
Wake up with no jammies (Nope)
Lobster tail for dinner
Julio, serve that scampi (Julio!)
You got it if you want it
Got, got it if you want it
Said, you got it if you want it
Take my wallet if you want it now


Jump in the Cadillac, girl, let's put some miles on it
Anything you want, just to put a smile on it
You deserve it, baby, you deserve it all
And I'm gonna give it to you


Gold jewelry shinin' so bright
Strawberry champagne on ice
Lucky for you, that's what I like, that's what I like
Lucky for you, that's what I like, that's what I like
Sex by the fire at night
Silk sheets and diamonds all white
Lucky for you, that's what I like, that's what I like
Lucky for you, that's what I like, that's what I like


I'm talkin' trips to Puerto Rico (Bih)
Say the word and we go (Say it)
You can be my freaka (Brrrt!)
Girl, I'll be your fleeko, Mamacita
I'll never make a promise that I can't keep
I promise that your smile ain't gon' ever leave
Shoppin' sprees in Paris
Everything 24 karats
Take a look in that mirror
Now tell me, who's the fairest?
Is it you? (Is it you?) Is it me? (Is it me?)
Say it's us (Say it's us) and I'll agree, baby


Jump in the Cadillac, girl, let's put some miles on it
Anything you want, just to put a smile on it
You deserve it, baby, you deserve it all
And I'm gonna give it to you


Gold jewelry shinin' so bright
Strawberry champagne on ice
Lucky for you, that's what I like, that's what I like
Lucky for you, that's what I like, that's what I like
Sex by the fire at night
Silk sheets and diamonds all white
Lucky for you, that's what I like, that's what I like
Lucky for you, that's what I like, that's what I like


You say you want a good time
Well, here I am, baby, here I am, baby
Talk to me, talk to me, talk to me baby
Tell me, what's on your mind? (What's on your mind?)
If you want it, girl, come and get it
All this is here for you
Tell me, baby, tell me, tell me, baby
What you tryna do?


Gold jewelry shinin' so bright
Strawberry champagne on ice
Lucky for you, that's what I like, that's what I like (That's what I like, babe)
Lucky for you, that's what I like, that's what I like (Oh, oh)
Sex by the fire at night
Silk sheets and diamonds all white (All white)
Lucky for you, that's what I like, that's what I like (That's what I like, babe)
Lucky for you, that's what I like, that's what I like (Ooh, ooh, ooh)`,
`

Big dreamer, small business
'88 Beamer, heat seeeker, tall Guiness
I am living on the edge of panic rooms & busted windows
With a mustard colored jumpsuit
Seducing younger womens
Spend my days in the basement avoiding the super
Cornbread, peach tea, burning sour, eating grouper
Spiral out the staircase leaving on the creep
Sometimes I wish that I was dead, just to get some decent sleep
Time to pay my loan shark, Hudson & Horatio
Cigar bar owner with enforcers on the payroll
Emeralds in the headphones, exchange manila envelopes
Handshake agreements, my pops taught me to honor those
Move in total silence, so I'm never like "your honor", though
Ostinato bass line, copped a box of Optimos
Cops is like the Octagon, choke without a care
In the lab I'm Dr. Octopus, engineer extraordinaire

HOOK - Innocent?

Look - I don't know what these motherf***er's expect
You carved your name in this game, they gotta show you respect
Traveled across lands, demand they cut a check
You so up to your neck, might light up a cigarette
(And you don't even smoke...)
They say you insane in the membrane, & yep
There's a couple screws missing
But homie ain't done yet
I make you a bet that the day before you go
You get a million-dollar check in a manila envelope



Smash pumpkins off the necks of dumb fellas
Country bumpkins buying guns at Cabela's
Switch the vehicle cause they memorize your patterns
Rap is lackluster, never memorize your patterns
Snooping neighbors, overdue favors
But if I'm on the clock, then there's food on the table
My mood is unstable, sampling Dave Brubeck
Dance like I'm crippled with palsy, I can't two-step
Cripller crossface, true story -
I sold Chris Benoit groceries in 1999
Before I ever sold a record, before he snapped & went gory
Met my idol as a teen, the Wolverine said go for mine
Bumped my head a few times
Suffered two concussions
But cracked $80 Thou on the strength of my percussion
Last year, JP Midas Touch, Golden Ear
Old enough to know better, young enough to see it clear



Ghost guns from the Philippines
These white b*****s is feeling me like Ryan Philippe
Whip a blow-up in the kitchen, this s*** is chemistry
It's risky business, we did wickedry with the chicken feet
Switching V's, $50 G's is chicken feed
We in a different league, I cop my ice from Tiffany's
Drive-by's in the Lotus, the 6-speed
The 5th will bend your knees like Christopher Reeves
Getting the breeze is just routine
My shoes from the boutique
They cool as Kool G, they run a cool G
Just copped a new blue SUV
We don't lose sleep
Was a jewel thief
I popped the tooly at your booty meat
Play your position, I'm playing mines
I'm playing God, you could never take the baton
My young shooter Juan he from San Juan
Said Duece was on the arm
After he blammed your car, he died his hair blonde



What do you do when your back is against the wall
And you're down so deep, no reception to make a call
All you got is a couple of bags of raw
Brown liquor, one mic & a button that says record
Second hand got me high as my first toke
Don't even think Travis Scott come equipped with the antidote
Dungeon of rap, these chains will never be broke
All because of C-Notes inside manila envelopes`,
`
Gotta fire my joint up on this bitch
Young Metro, young Metro, young Metro, three times
Yeah


Stickin' to the code, all these hoes for the streets
I put it in her nose, it's gon' make her pussy leak
Pussy niggas told, ain't gon' wake up out they sleep
You can't hear that switch, but you can hear them niggas scream
All my hoes do shrooms, nigga, all my hoes do coke
Twenty-carat ring, I put my fingers down her throat (Uh, uh, uh)
If I lose a carat, she might choke (Uh, uh, uh)
I know she gon' swallow, she a G.O.A.T. (Uh, uh, uh)
Freeband nigga, bring the racks in
Got the shooters in the corner like the pack in
She think 'cause she exotic bitch, she attractive
That's that shit'll get you put up out the section, brrt
And the motto still the same
Ball like I won a championship game
You know these hoes hungry, they gon' fuck for a name
I put her on the gang, she get fucked for a chain
Got your girl in this bitch, she twirlin' on the dick
I got syrup in this bitch, turn up in this bitch
And we brought the 'Ercs in this bitch, get murked in this bitch
All these pointers on me, baby, you know it's game time
Bring a friend, bitch, we fucked 'em at the same time
I'm a different nigga, no, we not the same kind
You can have that lil'— if she ain't mine (Yeah)


Young dope dealer, sellin' dope, is you like that? (If you like that)
Kickin' doors, kickin' in doors, is you like that? (Yeah)
Young throwed nigga, sellin' loads, is you like that? (Yeah)
All '24, you on go, is you like that? (If you like that)
Niggas from the bottom really like that (If you like that)
Steppin' in Balencis if you like that (If you like that)
Pop another bottle if you like that (If you like that)


He was once a thug from around the way


These niggas talkin' out of they necks
Don't pull no coffin out of your mouth, I'm way too paranoid for a threat
Ayy-ayy, let's get it, bro
D-O-T, the money, power, respect
The last one is better
Say, it's a lot of goofies with a check
I mean, ah, I hope them sentiments symbolic
Ah, my temperament bipolar, I choose violence
Okay, let's get it up, it's time for him to prove that he's a problem
Niggas clickin' up, but cannot be legit, no 40 Water, tell 'em
Ah, yeah, huh, yeah, get up with me
Fuck sneak dissin', first-person shooter, I hope they came with three switches
I crash out like, "Fuck rap," diss Melle Mel if I had to
Got 2TEEZ with me, I'm snatchin' chains and burnin' tattoos, it's up
Lost too many soldiers not to play it safe
If he walk around with that stick, it ain't André 3K
Think I won't drop the location? I still got PTSD
Motherfuck the big three, nigga, it's just big me
Nigga, bum
What? I'm really like that
And your best work is a light pack
Nigga, Prince outlived Mike Jack'
Nigga, bum
'Fore all your dogs gettin' buried
That's a K with all these nines, he gon' see Pet Sematary (Yeah)
Nigga, bum


Young dope dealer, sellin' dope, is you like that? (If you like that, yeah, yeah)
Kickin' doors, kickin' in doors, is you like that? (How?, yeah)
Young throwed nigga, sellin' loads, is you like that? (Holy water, Holy water, yeah)
All '24, you on go, is you like that? (If you like that)
Niggas from the bottom really like that (If you like that)
Steppin' in Balencis if you like that (If you like that)
Pop another bottle if you like that (If you like that)


He was once a thug from around the way


Young dope dealer, sellin' dope, is you like that?
Kickin' doors, kickin' in doors, is you like that?
Young throwed nigga, sellin' loads, is you like that?
All '24, you on go, is you like that? (If you like that)
Niggas from the bottom really like that (If you like that)
Steppin' in Balencis if you like that (If you like that)
Pop another bottle if you like that (If you like that)


He was once a thug, he was, he


Came in banging dope, niggas was young, slangin' powder
Walk in the strip club, make it rain for three hours
Locked in and now I got my Phantom and my driver
Perc'd out, took chances in my hood like Nevada
Surfed out outside, white interior, lasagna
Hundred thousands, I just cashed out on designer
Gotta devour, nigga, I learned that in the jungle
Once I sell this load, that's a million in a week`,
`
Mustard on the beat, ho


I know you've been goin' through some things, uh-huh
I know you don't even love the same, do you, do you?
I know you've been runnin' on empty, runnin' on empty
The way you move it's like you could use a vacation
Drink in your hand and the harder you dance
I swear right now it look like you on a vacation
Gotta get away, make it happen
Whatever happened just had to happen
On vacation, yeah
I know you've been, I know you've been


Dancin', dancin', dancin' like you fucking got a reason
Dancing like it's something to believe in
Dancing like it's fuckin' dancing season
Blame it on the alcohol or blame it on sativa
The harder your heart keep beating
Only feel bad while you're thinkin'
Pop, pop, pop like Pepsi Co. the best we smoke
Plus the tan look like you flew in from Mexico
Go go, let me see how wild it get, bust it wide as it get
You need to be taken care of and pampered
But just like a pamper, he on that childish shit
Yeah, I know you've been silencing your phone
(Silencing your phone, ignoring calls from home)
Uh-huh, I know you've been tryna get along
What's up, it's on, no games, we grown
I know you feel like sometimes
That y'all don't speak the same language
Uh-huh, I know that you just wanna let it go
With all the bitches that you came with


I know you've been going through some thangs
Wanna get away, baby, let me be your vacation
That other trick you've been fuckin' with is a trip
You know she be playin', baby I am just saying
I know you know I am down for whatever, yeah
You know I'm just here to make you feel better, yeah
Take a load off on my private island
Come inside and go into hiding
I know that you've been sacrificing your time
And need time to unwind and let go
So let go and let's go and let's roll and we roll


Excited, activated get ignited
So many charges on my card, oh God I think it got indicted
Get a, get a night, get a day, get a room, get a place
Get a drink, pop a bottle, maybe we can get away
You a star, you need space, we can shoot up out of town
Have you ever been to Texas? South By Southwestern
Where we can smoke a zip like we can't get arrested
Where they might know us off any intersection
I mean baby I know you've been, wanna be the baddest
Wanna be with somebody who ain't never had it
No status, just all cinematics, you just gotta cast it


I know you've been crying and poutin'
Know you're tired of arguing but no screaming and shouting
And you know we on a roll like we did good in college
Throwin' hundreds and thousands
Like they not hundreds and thousands


Why? Cause I know you've been going through some things
I know you've been going through some things you can't explain
With your main thing that shit insane
I know you just tryna maintain, that shit is lame, you can't complain
I know you don't even love the same, do you, do you?
Don't love the same, I know you've been diving through pain
I know you goin' so crazy, I know you runnin' on empty
That shit can fuck with your mente
I know this shit, don't you tempt me, I know you...
I know you've been runnin' on empty, runnin' on empty
The way you move it's like you could use a vacation
I know you, I know you
Drink in your hand and the harder you dance
I swear right now it look like you want a vacation
Gotta get away, make it happen
Whatever happened just had to happen
On vacation, yeah
I know you've been, I know you've been


I know it look like like you need a vacation
How 'bout Hawaii, maybe Jamaica, maybe Asia
Take you places other niggas can't take ya
Don't forget the makeup, yeah`,
`
Drop top Porsche (Porsche), Rollie on my wrist (Wrist)
Diamonds up and down my chain (Aha)
Cardi B, straight stuntin', can't tell me nothin'
Bossed up and I changed the game (You see me?)
It's my big Bronx boogie, got all them girls shook (Shook)
My big fat ass got all them boys hooked (Hooked)
Went from dollar bills, now we poppin' rubber bands (Ha)
Bruno sang to me while I do my money dance like
Ayy, flexin' on the 'Gram like
Ayy, hit the Lil Jon
Okay (Okay), okay (Okay)
Oh yeah, we drippin' in finesse and gettin' paid, ow


Ooh, don't we look good together?
There's a reason why they watch all night long (All night long, woo)
Yeah, I know we'll turn heads forever
So tonight, I'm gonna show you off


When I walk in with you (When I walk in with you)
I watch the whole room change (I watch the whole room change)
Baby, that's what you do (Baby, that's what you do)
No, my baby don't play (No)
Blame it on my confidence or blame it on your measurements
Shut the shit down on sight
That's right


We out here drippin' in finesse
It don't make no sense
Out here drippin' in finesse
You know it, you know
We out here drippin' in finesse
It don't make no sense
Out here drippin' in finesse
You know it, you know it


Now, slow it down for me, baby (Slow it down, girl)
'Cause I love the way it feels when we grind (When we grind), yeah
Our connection's so magnetic on the floor
Nothing can stop us tonight


When I walk in with you (When I walk in with you)
I watch the whole room change (I watch the whole room change)
Baby, that's what you do (Baby, that's what you do)
No, my baby don't play (No)
Blame it on my confidence or blame it on your measurements
Shut the shit down on sight
That's right


We out here drippin' in finesse
It don't make no sense
Out here drippin' in finesse
You know it, you know
We out here drippin' in finesse
It don't make no sense
Out here drippin' in finesse
You know it, you know it (Woo)


Fellas, grab your ladies if your lady fine
Tell her she the one, she the one for life (Woo)
Ladies, grab your fellas and let's do this right (Do this right)
If you're on one like me and mine (Ow)


Yeah, we got it goin' on, got it goin' on
Don't it feel so good to be us? Ayy
Yeah, we got it goin' on, got it goin' on, yeah
Girl, we got it goin' on
Yeah, we got it goin' on, got it goin' on (Hey, hey)
Don't it feel so good to be us? Ayy (It feels so good with you)
Yeah, we got it goin' on, got it goin' on, yeah (Woo)


We out here drippin' in finesse (We drippin' on 'em)
It don't make no sense
Out here drippin' in finesse
You know it, you know it
We out here drippin' in finesse with my baby
It don't make no sense (Oh-oh)
Out here drippin' in finesse (Yeah, yeah)
You know it, you know it (Girl, you know we got it goin' on)


Yeah, we got it goin' on, got it goin' on
Don't it feel so good to be us? Ayy
Yeah, we got it goin' on, got it goin' on
You know it, you know it (Ooh)
Yeah, we got it goin' on, got it goin' on (Girl, we got it)
Don't it feel so good to be us? Ayy (Baby)
Yeah, we got it goin' on, got it goin' on (Woo)
You know it, you know it`,
`
My baby want a Birkin, she's been tellin' me all night long
Gasoline and groceries, the list goes on and on
This nine-to-five ain't workin', why the hell do I work so hard?
I can't worry 'bout my problems, I can't take 'em when I'm gone, uh


One, here comes the two to the three to the four
Tell 'em "Bring another round," we need plenty more
Two-steppin' on the table, she don't need a dance floor
Oh my, good Lord


Someone pour me up a double shot of whiskey
They know me and Jack Daniеl's got a history
There's a party downtown near 5th Street
Evеrybody at the bar gettin' tipsy


Everybody at the bar gettin' tipsy
Everybody at the bar gettin' tipsy


I've been Boozey since I left
I ain't changin' for a check
Tell my ma, I ain't forget (Oh Lord), I
Woke up drunk at 10 a.m.​
We gon' do this shit again
Tell your girl to bring a friend, oh Lord


One, here comes the two to the three to the four
Tell 'em "Bring another round," we need plenty more
Two-steppin' on the table, she don't need a dance floor
Oh my, good Lord


Someone pour me up a double shot of whiskey (Double shot of whiskey)
They know me and Jack Daniel's got a history (We go way back)
There's a party downtown near 5th Street
Everybody at the bar gettin' tipsy


Everybody at the bar gettin' tipsy (At the bar gettin' tipsy)
Everybody at the bar gettin' tipsy


One, here comes the two to the three to the four
When it's last call and they kick us out the door
It's gettin' kind of late, but the ladies want some more
Oh my, good Lord (Tell 'em drinks on me)


Someone pour me up a double shot of whiskey (Double shot of whiskey)
They know me and Jack Daniel's got a history (Way back)
There's a party downtown near 5th Street (Come on)
Everybody at the bar gettin' tipsy (Woo-ooh)
Someone pour me up a double shot of whiskey (Double shot of whiskey)
They know me and Jack Daniel's got a history (It's Jack D)
At the bottom of a bottle, don't miss me (Baby, don't miss me)
Everybody at the bar gettin' tipsy (At the bar gettin' tipsy)


Everybody at the bar gettin' tipsy
Everybody at the bar gettin' tipsy


That's fuckin' messed up, bro, they kicked me out the bar`,
`Tonight
I just wanna take you higher
Throw your hands up in the sky
Let's set this party off right
Players

Put your pinky rings up to the moon
Girls, what y'all tryna do?
24-karat magic in the air
Head to toe so player
Look out, uh

Pop-pop, it's show time (Show time), show time (Show time)
Guess who's back again? (Brrah)
Oh, they don't know? (Go on, tell 'em) Oh, they don't know? (Go on, tell 'em)
I bet they know as soon as we walk in (Showin' up)
Wearin' Cuban links (Yeah), designer minks (Yeah)
Inglewood's finest shoes (Woop, woop)
Don't look too hard, might hurt yourself
Known to give the color red the blues
Woo, shit


I'm a dangerous man with some money in my pocket (Keep up)
So many pretty girls around me and they wakin' up the rocket (Keep up)
Why you mad? Fix your face, ain't my fault they all be jockin' (Keep up)
Players only, come on


Put your pinky rings up to the moon
Girls, what y'all tryna do?
24-karat magic in the air
Head to toe so player
Look out, uh

Second verse for the hustlers (Hustlers), gangsters (Gangsters)
Bad bitches and your ugly ass friends (Haha)
Can I preach? (Uh-oh) Can I preach? (Uh-oh)
I gotta show 'em how a pimp get it in
First, take your sip (Sip), do your dip (Dip)
Spend your money like money ain't shit
Ooh-ooh (We too fresh)
Got to blame it on Jesus (Hashtag blessed)
They ain't ready for me, uh


I'm a dangerous man with some money in my pocket (Keep up)
So many pretty girls around me and they wakin' up the rocket (Keep up)
Why you mad? Fix your face, ain't my fault they all be jockin' (Keep up)
Players only, come on


Put your pinky rings up to the moon (Woo, hey, girls)
What y'all tryna do? (What you tryna do?)
24-karat magic in the air (Air, air)
Head to toe so player (Ooh)
Look out, uh


(Woo) Everywhere I go, they be like (Ooh, so player)
(Woo) Everywhere I go, they be like (Ooh, so player; ah)
(Woo) Everywhere I go, they be like (Ooh, so player, ooh)
Now, now, now
Now watch me break it down like, ugh
24-karat (Woo), 24-karat magic (What's that sound?)
24-karat, 24-karat magic (Come on now)
24-karat, 24-karat magic
Don't fight the feelin', invite the feelin', just


Put your pinky rings up to the moon (Ooh)
Girls, what y'all tryna do? (Tell me what you're tryna do)
24-karat magic in the air (Yeah, get up)
Head to toe so player (Hands up)
Put your pinky rings up to the moon (24-karat, 24-karat magic)
Girls, what y'all tryna do? (24-karat, 24-karat magic; do)
24-karat magic in the air (24-karat, 24-karat magic)
Head to toe so player (24-karat)
Look out, uh (24-karat magic)`];
const dummy = new clientListeningClassification("bob");

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
      data: [0.7, 1, 0.9],
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 2,
    },
    {
      label: 'danceability',
      data: [1, 0.6, 0.8],
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      borderColor: 'rgba(54, 162, 235, 1)',
      borderWidth: 2,
    },
    {
      label: 'energy',
      data: [.8, 0.7, 0.6],
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
      data: [6, 8, 4],
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

  useEffect(()=> {
    Promise.all(inputs.map(input => { return dummy.classifyThis(input)})).then((results) => {
      const dummyMap = dummy.getMap();
      const jsonData = JSON.parse(dummyMap);
    
      setBarCharData({
        labels: ['Joy', 'Sadness', 'Anger', 'Fear' ],
        datasets: [
          {
            label: 'Amount of Songs',
            data: [jsonData['Joy'], jsonData['Sadness'], jsonData['Anger'], jsonData['Fear']],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 3,
          },
        ],
      });
    });
  },[]);

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
      <h1 className="text-center">Mind Bridge</h1>
      <h2 className="text-center">{userEmail}</h2>

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
        <Col xs={12} md={5} lg={5} className="mb-4">
          <Card border="secondary" className="text-center">
            <Card.Body>
              <Card.Title><h1>Sentiment Radar Chart</h1></Card.Title>
              <Card.Text>
                <div className="radar-chart-container">
                  <Radar data={radarChartData} options={{ responsive: true }} />
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={5} lg={5} className="mb-4">
          <Card border="secondary" className="text-center">
            <Card.Body>
              <Card.Title><h1>Common Genres</h1></Card.Title>
              <Card.Text>
                <ul className="list-unstyled">
                  <li>Rap</li>
                  <li>Country</li>
                  <li>Gospel</li>
                  <li>Rock</li>
                </ul>
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


