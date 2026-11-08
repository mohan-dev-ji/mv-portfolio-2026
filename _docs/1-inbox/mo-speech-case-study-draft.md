# Mo Speech case study: Mo's rough draft (verbatim)

Exported from Figma `portfolio_2026` (file `evRdWCVVcOJhWGFxKPVuTB`), frame
`Mo Speech - Case Study` 169:4, on 2026-11-08. Text is exactly as written,
errors included: this is the source for the edited copy in
`3-design/mo-speech-case-study.md` and the voice sample for the `mo-voice`
skill. Don't edit it. `[IMG …]` lines are the image layers in the frame.

---

[IMG Home 1 · 731x473]

## Introduction / Overview

Mo Speech is an AAC application that was born out of my own experiences as a father of a non-verbal autistic child who was given a device from his school.  AAC stands for Augmentative and Alternative Communication, which encompasses all the tools, methods, and strategies used to supplement or replace spoken or written language for people with communication difficulties.

### Modelling

When first introduced to AAC the first step is called Modelling. This is the process where an instructor can teach the meaning of the symbols by using the context of their surrounding area and real life objects. The instructor will point to object in real life then demonstrate to their student how to navigate to this symbol in the app. The idea is to teach motor skills to their student to prepare them for independent use. This method is backed by science and highly respected by professionals as the gateway to proper AAC usage.

## Problem / Competitor Analysis

**Problem #1** Many leading companies will choose a particular os which alienates people according the manufacturer of their hardware.

**Problem #2** Navigating current AAC apps is not intuitive. The information architecture doesn't flow like any other modern software.

**Problem #3** The Modelling process is difficult and commonly known to be an area of struggle for new users.

After attending numerous coffee morning to talk to other parents at my son's school. I began to realise AAC was getting a negative reputation amongst the parents. The most common complaint I heard was "... we don't have an iPad so we can't use it". Even though some parents thought it was great there were quite a few who were bewildered by the modelling process and this is where I found the root of the problem being the navigational system within the app. Each page has symbols and buttons that look like symbols that open other pages. When you know where something is it is easy but learning where new symbols live is very hard especially when trying to use the real-life situation as context where speed and ease of use is of the essence. It is hard for parents to work out let alone teach it to their children

## Define / The first vision

> I started thinking about voice search, text search and a how to organise categories

After listening to many people with the same problems I also saw the other side, where students took to it like water. I attended training sessions arranged by therapists and teachers who were AAC advocates. I learnt about the modelling process as the way AAC can be used independently. Still having the same issues I started to ideate on how I could solve these issues through better UI and UX.

[IMG AAC-search 1 · 217x442] [IMG AAC-listening 1 · 217x442] [IMG AAC-category 1 · 217x442]

## Ideate / Cutting it down

> The MVP of Mo Speech became a symbol exposure tool to re affirm symbol meanings outside the AAC modelling session

I decided to cut it down and make a Minimum Viable Product. The idea was to productise the biggest pain point and launch it fast. This was  searching for the correct symbol quick enough to relate to context of the moment. The MVP was purely about search  and with no navigational aspect it became a symbol exposure tool as opposed to an AAC app.

[IMG screen-1 1 · 779x551]

### Voice Search

Voice search allows a user to search the 58k symbol library with instant results as they type. This was a key feature as it now enables parents and caregivers to search for any symbol without any AAC navigation issues. It is a one button hit and pressing the symbol adds it to the topline areas so sequences of words can be built up.

[IMG AAC-listening 1 · 217x442]

### Dynamic typing

Type any word in the search bar. Results appear instantly from our library of 58,000 SymbolStix symbols. Tap to add to your sequence, audio plays automatically. Giving the user the choice to search by typing or voice recognition.

[IMG AAC-listening 1 · 217x442]

### Full-Screen Playback

Isolating and enlarging Images improves visual focus

Tap the play button to enter fullscreen mode. Your symbol sequence plays one at a time, full screen, with synchronised audio. Perfect for keeping attention and reinforcing learning.

[IMG AAC-listening 1 · 217x442]

### Three Months of Marketing

> 166 sign ups and 2 therapists with custom access

I started posting multiple times a week on linkedIn and Facebook groups. Feedback was generally quite good. I di get some push back about the wording as I was originally using "AAC" in the copy where there was no motor planning involved. I acted fast and changed the marketing of the app to a "Symbol Exposure" tool.

[IMG image 1 · 271x271] [IMG image 2 · 271x271] [IMG Screenshot 2026-11-02 at 23.27.39 1 · 781x451]

### Learnings from the MVP

> The main criticism was Mo Speech was not AAC and it did not teach motor skills

The MVP was a great experiment not only in building a live product with real user feedback but also in thinking how I can solve the navigational issue so Mo Speech can become a real AAC app that can compete with the best apps on the market

## Competitor Analysis / The AAC market

To research deeper into the navigational problem many people were complaining about I decided to analyse the top 3 AACs on the market. Below are images from TD Snap, Awaaz and Proloquo2go. As you can see the layout are all very similar. In a way this is a good thing as current layouts are assumed to work with a lot of good research and science gone into the why. A main issue I found is there is no one dedicated place for navigation and sometimes to find the right symbol you have to go into folders within folders which just leaves a longer breadcrumb trail to get back.

[IMG image 3 · 297x243] [IMG image 4 · 256x153] [IMG image 6 · 217x153]

### Key Insights

- Folders and symbols can be hard to be distinguished against each other
- There is no central place for symbol navigation. All apps have side or bottom navigational bars with navigational folders living amongst the symbols.
- Current AAC users seem to be wizards on YouTube, which uses a standard dashboard navigational systems.

With these key insights locked in I began to ask myself why can't a modern AAC use the modern software dashboard for it's framing. Is this why so many people don't pick it up and stick with it. I was just theorising questions about a new type of AAC built on a modern framework and the only way to find out if it would work was to build it and launch it to the public.

## Design / The new navigational model

The new navigational model was in place and I wanted it as simple as possible. I made wireframes with only a Home, Search and Categories page on the side nav bar. With each category I include mode switch to switch from lists to sentences to board.

[IMG Categories 1 · 684x442]

After making a working prototype of this I made a major architectural decision to have lists and sentences as a key feature of the app with their own place on the side navbar. Firstly I found in practice having lists and sentences in the categories very awkward as it is possible to have a list or sentence that doesn't necessary fit into any category. I decided that we should be able to group lists and sentences with their own definitions in different folders.

> I made a final design in figma then used Claude design to add some polish to the overall look.

Designed in Figma [IMG Categories - Hand 1] · Claude Design [IMG Screenshot 2026-11-06 at 10.06.58 1] · Final version [IMG Categories final 1]

### Themes from Figma Variables

I wanted the app to be more visually appealing to what was already on the market so I designed 6 default themes in figma to make sure everything worked aesthetically then use the Figma MPC to generate the switchable tokens in the repo.

[IMG Screenshot 2026-11-06 at 11.39.01 1 · 681x353]

### The Figma MPC

This enabled Claude Code to read and write to my figma design file ensuring that my figma variables became tokenised elements within the code with the highest level of accuracy.

[IMG Screenshot 2026-11-07 at 13.08.17 1 · 691x294]

### Static default themes

> The app's default themes include 3 light mode and 3 dark mode colour ways.

[IMG Home-v2-2 1] [IMG Home-v2 1] [IMG Home-v2-4 1] [IMG Home-v2-1 1] [IMG Home-v2-5 1] [IMG Home-v2-3 1]

### Animated tiered themes

> Having movement in a continuous loop may encourage users to stay on their device making learning their AAC more fun.

I want Mo Speech to be a visual treat for all users regardless of where or if they are on the spectrum. An autistic trait is the fixation on repetitive movements so I designed 4 styles of animated themes where the background animates in and endless loop.

[IMG Water 1 · 640x414] [IMG Screenshot 2026-11-07 at 13.42.07 1 · 637x364]

> I used figma shaders for the design then converted them to WebGL2 while creating a skill for whole the process

[IMG image 7 · 637x379]

> Current animated themes include water, sky, space and electric with the ability to make new additions fast and accurate with the skill

[IMG Home-v2 · Space 1 · 637x412]

## Agentic coding / Documentation

> I have developed a documentation system that lives in the repo, guiding  Claude Code with a live file system that acts as context for every coding agent instance.

[IMG Screenshot 2026-11-06 at 10.41.04 1 · 315x400]

### The agentic system flow

The CLAUDE.md file works as an over-arching index to the documentation setup and other important facts and rules that every agentic coding session must know such as the stack, staging and back-ups

[IMG image 10 · 401x442]

### The decisions records

Being able to pivot quickly was an important part of this project. In my docs folder I created an ADR folder and recorded every pivot with a Markdown file. Not only was this a good approach to keep myself updated with constant changes that were being made but it also gives the agent a complete and accurate context to code with .

[IMG Screenshot 2026-11-07 at 21.12.10 1 · 617x369]

### Linear MPC

The Linear MPC helped with the organisation of development and grouped all my issues, bugs and build phases into topics which ended up keeping my build sessions to stay on track.

[IMG Screenshot 2026-11-07 at 22.05.40 1 · 637x429]

### Superpowers skill

Since adding this skill the speed and accuracy of my sub-agent development has got greatly improved. The depth of planning builds triggers the brainstorming skill which touches real code to produce accurate insights. The plan-writing skill builds on this creating detailed documentation for sub-agents to build out from. It also has saved me from thinking about when to commit

[IMG image 9 · 637x410]

## Research / Gestalt Language Processing

> After a live demo with an onboarded Speech and Language Therapist from the MVP I went to research about Gestalt Language Processing

Here I learnt about the reusable chunks that make up a sentence. It was a profound moment during reading the literature as I could imagine it being a very useful feature I would use. An idea was starting to emerge about sentences being built like blocks of lego.

[IMG Screenshot 2026-11-06 at 10.57.42 1 · 633x360]

> The reduction of cognitive load by have several words baked into one tappable phrase would be a huge benefit.

## Features / The Talker

> The talker is holding area for symbols that can be turned on or off. When it is on a tapped symbol goes there

You can tap symbols or phrases to add to the talker when it is on. You can delete and re-order them to form sentences. The sequences formed in the talker can be saved as block sentences, which means when you play them each unit gets highlighted and played one by one like in the example below.

[IMG Screenshot 2026-11-08 at 12.09.36 1 · 637x333]

### The Talker Dropdown

> The talker has a dropdown with two tabs for core words and phrases.

The idea behind the Talker dropdown is a way to reduce the need to navigate. Now with core words and phrases attached to the talker a user can complete full sentences with all the essential and reusable components fully available regardless of which category they are in.

Core words [IMG Screenshot 2026-11-06 at 11.12.47 1] · Phrases [IMG Screenshot 2026-11-06 at 11.13.20 1]

### Sentences

> Sentences can made and saved from two different locations within the app. From the talker and from the create a sentence flow

A block sentence is saved from the talker with playback highlighting each segment with a slight pause in between. Fluent sentences are made in the sentence folder or from the home page which where you simply list the symbols you want to display with the sentence audio you want to hear to generate a sentence. You can then fine tune either type from edit mode within the sentence group.

[IMG Screenshot 2026-11-07 at 14.47.12 1 · 617x323]

### Tone

> Each sentence has 3 tone options: angry, neutral and excited. This also allows block sentences to playback with fluent-like audio.

[IMG Screenshot 2026-11-07 at 21.18.53 1 · 617x321]

### Instructor and student views

One Mo Speech account serves two very different people: the adult who sets things up, and the student who uses them. Views keep the two apart. The instructor sees and controls everything. The student sees only what's right for them. This helps reduce cognitive overload and allows the instructor to introduce new concepts one step at a time.

[IMG Screenshot 2026-11-08 at 01.45.10 1 · 637x339]

### Language switching

> The language is set in two places: the instructor's account, and each student's own setting on Pro or Max.

Languages on different profiles are independent of each other. So a student can have multiple profiles with different languages on each so to  encourage bi-lingual communicaters. The instructor has their own profile to switch language as and when it suites them.

[IMG image 8 · 671x399] [IMG Screenshot 2026-11-07 at 14.27.57 1 · 637x330]

### The symbol editor

> The symbol editor is the main are for creating and saving symbols and images to be used in categories, lists and sentences.

You can choose a symbol from the pre-loaded symbolStix library, upload your own picture, search royalty free image search sites, create an ai-generated image in one of four pre-prompted styles and  look at "My Images" which is a library of all your uploaded and created content.

[IMG Screenshot 2026-11-08 at 01.55.20 1 · 637x339]

### Modelling mode

> Modelling teaches motor planning so a student can learn how to navigate to a particular symbol

This is an important part for any AAC program. It works on any content inside a category. The instructor can set a word to model and the student's view will go into "Modelling mode" where they follow clear arrows with the symbol displayed until they reach the destination. This can be repeated until the student learns where the symbol lives.

[IMG Screenshot 2026-11-08 at 02.06.54 1 · 637x334]

### Connected words

> Words can be connected to related words in terms of being plurals, having different forms or simply just goes with another word

This is a feature that the Mo Speech admin can manually update in accordance to onboarded professional's feedback. Words that have "Connected words" attached on the back end can be triggered in the app by holding that word for over 2 seconds.

[IMG Screenshot 2026-11-08 at 02.14.41 1 · 637x335]

### The admin dashboard

> The Mo Speech admin needs a dedicated dashboard to see user statistics, control themes, languages and edit symbols.

Themes and languages can be published and unpublished. There is a pipeline set up to translate the symbol set and UI. Symbols can be edited in different languages and have connected words added to them. The idea is to give future admin employees of Mo Speech the access to maintain the app without direct developer access.

[IMG Screenshot 2026-11-08 at 02.24.15 1 · 637x339]

## Marketing

### Look and feel
### Promo videos
### Marketing site
