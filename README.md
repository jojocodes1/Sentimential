## Problem statement

Currently, the number of media being consumed is parallel to the rise of the mental health crisis. “According to the World Health Organization, the prevalence of mental health problems is increasing at a rate of 13% each year” (National Center of Biotechnology Information, 2023).  As the current global population is about 7 billion people, this equates to over 900 million people who will develop mental health concerns this year alone. Consequently, more people are consulting with mental health professionals  than ever before. However, medical professionals are struggling to receive accurate and consistent information on their patients during consultations. Patients tend to omit critical details, hindering effective diagnosis and treatment. Mind Bridge aids both medical professionals and patients to have a more efficient consultation. Initially the Medical Professional will recommend the patient downloads our product. We will then provide professionals with a list of trends that showcases sentimental analysis from the media the client is consuming. Furthermore, the medical professional will be able to look that all the data provided and make a more accurate diagnosis for the client. All in all, our mission is to aid medical professionals in producing better diagnosis and treatments.

## Customer profile

(who, what, when, why, how)
Who: Patients: Individuals experiencing mental health challenges, particularly those influenced by media consumption.

Therapists: Mental health professionals (such as psychologists, psychiatrists, counselors) who provide treatment and support to patients.

What: A digital tool/platform designed to:
Analyze media consumption (e.g., music lyrics) to understand emotional states and provide trends about such.

When: Ongoing use: Mental Health Professionals can use the tool continuously to track their patients’ emotional trends related to the consumed media. 
Before consultations: Data-driven reports are generated to provide insights before therapy sessions.

Why: Addressing the mental health crisis: To help patients and therapists navigate increasing mental health challenges exacerbated by media consumption.
Enhancing therapeutic outcomes: By providing therapists with deeper insights into patients' emotional states and facilitating personalized care.

Improving efficiency : Streamlining patient information to ensure therapists have accurate and consistent data for consultations and diagnosis rather than just relying on talk therapy.

How: Seamless Onboarding : Patients download the intuitive tool recommended by their medical professionals (MP). Then they get their MP’s code which is unique to each patient and the MP will confirm on their side if that person is their client, then the patient doesn’t have to do anything. The MP will see the trends on their end and then will combine this information with their talk therapy and use it to benefit the patient

Sentiment Analysis: Media consumption is analyzed with patient consent, focusing on emotional trends derived from music lyrics.

Data-Driven Insights: Comprehensive reports are generated, empowering therapists with a deeper understanding of patients' emotional landscapes.

Privacy and Consent/Security: All data handling is conducted with strict confidentiality, prioritizing patient trust.

Professional Integration: Designed to integrate seamlessly into therapists' existing workflows, enhancing their ability to provide empathetic and precise care.


## Goals

  What are you improving in the customers' life? How can it be measured?  
Patient: trust with medical professionals and communication
Therapist: Getting information about patient and helping give more accurate diagnosis
Our  initiative aims to significantly enhance the relationship between patients and mental health professionals, addressing fundamental barriers that hinder trust and communication. Historically, patients have struggled to build rapport with MP’s, often viewing them as licensed strangers. Our platform seeks to alleviate this by fostering an environment where patients feel more comfortable opening and establishing trust with their therapists. Simultaneously, we empower MP’s with tools to gather more comprehensive patient information, thereby improving diagnostic accuracy and treatment effectiveness. This addresses common frustrations among patients who feel their medical professionals lack sufficient understanding of their circumstances. To measure our impact, we plan to track metrics such as user engagement, therapist and patient adoption rates, geographic reach, and the overall increase in therapy attendance facilitated by our platform. By focusing on these areas, we aim to not only improve individual patient outcomes but also contribute to broader advancements in mental health care accessibility and efficacy.

Media consumption patterns - what sorts of data and info to potentially be looking for  
-	Music genres: displaying the different genres of music the patient listens to and how often
-	Viewing history: which is the most used platform (e.g. songs, podcasts, audiobooks etc.)
-	Search history: what does the user search for and transcription of the songs that are being searched
-	Duration and frequency: track amount of time spent on media
-	Times of day: morning, afternoon, nig

## In scope

*(Target user stories/scenarios)	
First time opening – Practicing Mental Health Professional:

1.	A user opens the app for the first time and specifies if they are a patient/client or a practicing mental health professional.

2.	A user specifies that they are a practicing mental health professional and is prompted to provide certification

a.	Must agree with terms of agreements for collecting data and permission to send it towards mental health professionals before next step

3.	The practicing mental health professional user’s certification is verified (to prevent misuse)

4.	After verification, the practicing mental health professional is prompted to enter some information

a.	Profile pic
b.	Small bio (optional)
c.	Preferred contact method and info

5.	Incorporate emergency crisis feature

Regular use opening – Practicing Mental Health Professional:

1.	A mental health professional user opens the app on a regular day, and is presented with their home page

a.	They are presented with their unique user code which they can give to patients/clients to use this app
b.	Mental health professional promises to keep and maintain privacy of data of patient agreement
c.	They press on their profile pic to edit their profile
d.	They are presented with a list of their patients/clients

2.	A mental health professional opens the app on a regular day and wishes to seek more information on one of their patients/clients

a.	They press that person’s name on the patient/client list presented to them on their home page
b.	The person’s data is presented to the mental health professional

i.	A list of the different kinds of data is presented
ii.	The mental health professional taps on a certain kind of data
iii.	The specific of that data is presented to the mental health professional in a readable manner (graphics?)

Backend
1.	Get lyrics from Genius API
2.	Spotify login
3.	Perform sentiment analysis using established methods
4.	Display results

## Out of scope

-	Collect data and implement sentimental analysis on different media sources (podcast, audiobooks, videos) 

## Breakdown of work
[Prioritization]
[P0] Display song data, keywords, genre, time listened on Spotify API – Kelly
[P0] Data pipeline (parsing text data) – design pipeline that fetches data from API, processes it, and sends it to Azure for sentiment analysis -Ayo
[P0] Using Azure AI for sentiment analysis (default capability of Azure AI)– Frankli n
[P0] Developing the Initial UI and Navigation between screens - Joel
[P1] Final presentation of analysis in readable format for mental health professionals- Ugonna
[P2] Beautifying the appearance of UI/UX (as described in the prototypes)  - Joel
[Future work] Security and privacy, data encryption to protect patient information, access control to ensure only authorized users can access the data, and compliance with regulation


## Compete analysis

Top competitors? Sentiment.io (Spotify sentiment analysis app), Spotify Inc. 
Strength:
•	Using Spotify API, trends what the user consumes (times, repeated songs, tracks common words/synonyms).
•	Providing a larger amount of context than is available through surveys or conversation.
•	Analyzing large amounts of data and providing trends and other info much faster than a human could.
•	Could help medical professionals know their patients better
Weakness:
•	Information presented by our product could be misinterpreted
Opportunities:
•	Could expand to other platforms and perform sentimental analysis to understand patient better
•	So far, research has revealed no similar products
•	possibility of expanding past just music, and eventually past just the theme of art and design, analyzing someone’s digital footprint
Threats: 
•	Could mishandle data causing privacy issues, such as leakage in information
•	Users might not trust our product to handle their data safely and securely 
•	Product could be stolen, minimal differentiation
•	Irresponsible Ai use
•	APIs getting taken down
•	Spotify changing their use policies



## Future opportunities

In the future, this product holds significant potential to expand into various areas, including integrating with video consumption platforms such as YouTube and Netflix, and social media platforms like Instagram and TikTok. This expansion aims to effectively analyze and trend the user's daily consumption habits.
These popular platforms provide tools that can be leveraged efficiently. For example, integrating with TikTok will involve tracking not only liked posts and TikTok lives but also conducting semantic analysis on transcriptions to understand content preferences. Additionally, the app will monitor the time spent on the app to provide valuable insights into usage patterns.
This strategy aligns with the current trends in entertainment and social media application usage, supported by insights gathered from user interviews. The goal is to expand the product's capabilities without compromising its potential to effectively integrate technology into mental health practices


