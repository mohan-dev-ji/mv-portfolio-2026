# Hero

## Mo Speech

Label: Hero

### Mo Speech

One-liner: An AAC app I built for my son, and for every family who needs a voice.

Role: Solo. Research, design and build
Timeline: MVP 2025 [CHECK: dates] · Full build April to November 2026
Tools: Figma, Claude Code, Next.js, Convex

Media: new
Caption: Mo Speech on the Space theme.
Note: VIDEO · 10s · tablet screen recording: silent loop, Home, open a category, tap three symbols into the talker, play the sentence.

# Overview

## Overview

Label: Overview

### AAC gives a voice to people who can't speak

Mo Speech is an AAC app born out of my own experiences as a father of a non-verbal autistic child, who was given a device by his school. AAC stands for Augmentative and Alternative Communication, which covers all the tools and strategies used to supplement or replace speech for people with communication difficulties.

When someone is first introduced to AAC, the first step is called modelling. The instructor points to an object in real life, then shows their student how to navigate to its symbol in the app, so the student learns the motor skills they need for independent use.

Media: Home 1
Caption: Home in the full Mo Speech app
Note: STILL · the existing Home 1 layer: the full build's Home, with the Resource Library and the shortcut cards.

# Act 1 · The MVP

## The problem

Label: Problem

### "We don't have an iPad, so we can't use it."

After attending numerous coffee mornings at my son's school, I began to realise AAC was getting a negative reputation amongst the parents. Some parents thought it was great, but quite a few were bewildered by the modelling process. I found the root of the problem in the app's navigation.

Each page has symbols, and buttons that look like symbols but open other pages. When you know where something is, it's easy. Learning where new symbols live is very hard, especially in a real-life moment where speed matters. It's hard for parents to work out, let alone teach to their children.

#### Problem 1

Headline: Many leading AAC companies choose one operating system, which alienates families depending on who made their hardware.

#### Problem 2

Headline: Navigating AAC apps isn't intuitive, because the information architecture doesn't flow like other modern software.

#### Problem 3

Headline: Modelling is difficult, and it's commonly known as an area where new users struggle.

Media: new
Caption: Three problems I kept hearing about
Note: STILL · three problem cards side by side: Problem 1 platform lock-in, Problem 2 navigation, Problem 3 modelling is hard. Each card carries its headline line.

## Learning modelling

Label: Research

### Some children took to it like water

After listening to so many people with the same problems, I also saw the other side, where students took to it like water. I attended training sessions arranged by therapists and teachers who were AAC advocates, and learnt that modelling is how AAC leads to independent use.

The same problems were still there, though. So I started to ideate on how I could solve them through better UI and UX.

Media: new
Caption: At an AAC training session
Note: STILL · a photo from one of the AAC training sessions: the training materials or the room, no faces. [CHECK: photo exists]

## Cutting it down

Label: Define

### Finding the symbol was the hardest part, so I built that first

One-liner: The MVP became a symbol exposure tool, to reaffirm symbol meanings outside the modelling session.

I started thinking about voice search, text search and how to organise categories. Then I decided to cut it down and make a Minimum Viable Product. The idea was to productise the biggest pain point and launch it fast.

That pain point was searching for the right symbol quickly enough to match the moment. The MVP was purely about search, with no navigation at all.

Media: AAC-search 1, AAC-listening 1, AAC-category 1
Caption: First ideas for search, voice and categories
Note: GALLERY · 3 images, click through: AAC-search 1, the search screen with text and voice buttons; AAC-listening 1, the voice search listening screen; AAC-category 1, a category page with folders of symbols.

## Storyboard

Label: Ideate

### A word, in the moment

One-liner: The symbol has to come up while the child is still looking at the dog.

Media: new
Caption: A word at the park
Note: GALLERY · 6 images, click through: six drawn storyboard panels. At the park, the child points at a dog; the parent takes out their phone and taps the mic; the parent says "dog"; the dog symbol comes up; it plays full screen; the child looks from the phone to the dog.

## What I built

Label: Prototype

### Say it, see it

One-liner: Find a symbol by voice or by typing, then play it full screen.

Media: screen-1 1
Caption: The Mo Speech MVP landing page
Note: STILL · the existing screen-1 1 layer: the MVP site, "Instant Symbol Access", with the app open on a tablet.

#### Voice search

One-liner: It's a one-button hit. Tap the mic and say the word.

This was a key feature, because parents and caregivers could now search for any symbol without the AAC navigation issues. Tapping a symbol adds it to the top line, so sequences of words can be built up.

Media: new
Caption: Voice search in the MVP
Note: VIDEO · 10s · phone screen recording: open the MVP, tap the mic, say "dog", the results appear, tap the dog symbol, it plays and lands in the top line.

#### Type to search

One-liner: Type any word, and the results appear as you type.

The results come from a library of 58,000 SymbolStix symbols [CHECK: 58,000 symbols]. Tap a symbol to add it to your sequence, and its audio plays automatically. So the user can choose to search by typing or by voice.

Media: new
Caption: Typing a word in the MVP
Note: VIDEO · 10s · phone screen recording: tap the search bar, type "ball", the results appear as you type, tap the ball symbol, it plays and joins the sequence in the top line.

#### Full-screen playback

One-liner: Isolating and enlarging images improves visual focus.

Tap the play button to go full screen. Your symbol sequence plays one symbol at a time, with synchronised audio.

Media: new
Caption: Playing a sequence full screen
Note: VIDEO · 10s · phone screen recording: with "I", "want" and "ball" in the top line, tap play, then each symbol fills the screen in turn with its audio.

## Launch

Label: Test

### 166 sign-ups in three months

One-liner: Plus 2 therapists with custom access.

I started posting several times a week on LinkedIn and in Facebook groups. Most of the feedback was good.

I did get some pushback about the wording. I was using "AAC" in the copy, but there was no motor planning involved. I acted fast and changed the marketing to call the app a "symbol exposure" tool.

Media: new
Caption: Posts on LinkedIn and Facebook
Note: GALLERY · 4 images, click through: your best MVP posts from LinkedIn and Facebook groups, with other people's names and photos cropped out. [CHECK: which posts]

Media: Screenshot 2026-11-02 at 23.27.39 1
Caption: The MVP admin dashboard, 166 users
Note: STILL · the existing admin screenshot showing 166 total users. Blur every email address in the recent activity list before it goes on the site.

## What I learned

Label: Iterate

### "It isn't AAC." They were right.

One-liner: The main criticism was that Mo Speech wasn't AAC, and it didn't teach motor skills.

With the MVP, I built a live product and got real user feedback. It also got me thinking about how to solve the navigation issue, so Mo Speech could become a real AAC app that competes with the best apps on the market.

Media: none

# Act 2 · The full build

## The AAC market

Label: Research

### Every app hides its navigation among the symbols

To look deeper into the navigation problem so many people were complaining about, I analysed the top three AAC apps on the market: TD Snap, Awaaz and Proloquo2Go. Their layouts are all very similar. In a way that's a good thing, because those layouts are assumed to work, with a lot of research behind them.

The main issue I found is that there's no one dedicated place for navigation. Sometimes, to find the right symbol, you have to go into folders within folders, which leaves a longer breadcrumb trail to get back.

#### Insight 1

Headline: Folders and symbols can be hard to tell apart.

#### Insight 2

Headline: There's no central place for navigation, and the folders live among the symbols.

#### Insight 3

Headline: Current AAC users seem to be wizards on YouTube, which uses standard dashboard navigation.

Media: image 3, image 4, image 6
Caption: TD Snap, Awaaz and Proloquo2Go
Note: GALLERY · 3 images, click through: image 3, TD Snap; image 4, Awaaz; image 6, Proloquo2Go. [CHECK: which image is which app, and the spelling: the app is usually written "Avaz"]

## Gestalt language

Label: Research

### Sentences are built from chunks, like Lego

One-liner: Several words baked into one tappable phrase would mean a lot less cognitive load.

After a live demo with one of the Speech and Language Therapists from the MVP, I started researching Gestalt Language Processing. Here I learnt about the reusable chunks that make up a sentence. Many autistic children learn whole phrases first, then break them down and build their own sentences from the pieces.

Reading the literature was a profound moment, because I could picture it as a feature I'd use. An idea started to emerge about sentences being built like blocks of Lego.

Media: Screenshot 2026-11-06 at 10.57.42 1
Caption: Reading about Gestalt Language Processing
Note: STILL · the existing Screenshot 2026-11-06 at 10.57.42 1 layer, from the Gestalt Language Processing research.

Media: new
Caption: The live demo with a Speech and Language Therapist
Note: STILL · a screenshot or photo from the live demo, with no faces unless the therapist agrees. [CHECK: a capture of the demo exists]

## A new navigation

Label: Define

### A dashboard, like the apps they already use

One-liner: The only way to find out if it would work was to build it and launch it to the public.

With these insights, I began to ask myself why a modern AAC app couldn't use the dashboard framing of modern software. I wanted the new navigation as simple as possible. My wireframes had only Home, Search and Categories on the sidebar, and each category had a mode switch for lists, sentences and boards.

After building a working prototype, I made a major architectural decision. Lists and sentences got their own place on the sidebar, and their own folders, because in practice a list or sentence doesn't always fit a category. I made the final design in Figma, then used Claude Design to add some polish.

Media: Categories 1, Categories - Hand 1, Screenshot 2026-11-06 at 10.06.58 1, Categories final 1
Caption: From wireframe to final design
Note: GALLERY · 4 images, click through: Categories 1, the first wireframe, with Home, Search and Categories on the sidebar; Categories - Hand 1, the design in Figma; Screenshot 2026-11-06 at 10.06.58 1, the polish in Claude Design; Categories final 1, the final version.

## Storyboard

Label: Ideate

### Show me where it lives

One-liner: The student finds the word on their own tablet, while the instructor watches from their phone.

Media: new
Caption: Modelling a snack in the kitchen
Note: GALLERY · 6 images, click through: six drawn storyboard panels. In the kitchen, the instructor opens Food on their phone, taps Model and picks "snack"; the student's tablet goes to Home, the page dims and the Categories button lights up with a pointer; the student taps Categories, then the Food tile; the student finds "snack" and taps it, while the instructor's phone follows live; with the talker on, the student taps "I want" from Phrases, then "snack"; they play the sentence and tap the excited face.

## Look and feel

Label: Design

### Made to be looked at for a long time

One-liner: Movement in a continuous loop may encourage users to stay on their device, and make learning their AAC more fun.

I wanted Mo Speech to look better than anything already on the market, and to be a visual treat for every user, wherever they are on the spectrum, or if they're not on it at all.

#### Default themes

I designed six default themes in Figma, three light and three dark, to make sure everything worked together. Then I used the Figma MCP, which lets Claude Code read and write my Figma file, to turn my variables into switchable tokens in the code.

Media: Home-v2-2 1, Home-v2 1, Home-v2-4 1, Home-v2-1 1, Home-v2-5 1, Home-v2-3 1
Caption: The six default themes, three light and three dark
Note: GALLERY · 6 images, click through: Home on each default theme, the light Amber, Fuchsia and Lime, and the dark Classic, Rose and Sky. [CHECK: which layer is which theme]

Media: Screenshot 2026-11-06 at 11.39.01 1
Caption: The theme variables in Figma
Note: STILL · the existing Screenshot 2026-11-06 at 11.39.01 1 layer: the Figma variables the theme tokens come from.

#### Animated themes

A common autistic trait is a fascination with repetitive movement, so I designed four animated themes where the background moves in an endless loop. They're Water, Clouds, Space and Electric Midnight. Two are on Pro, and all four are on Max.

I designed them with Figma shaders, then converted them to WebGL2. I made a skill for the whole process, so new themes can be added quickly and accurately.

Media: new
Caption: Water, on Pro
Note: VIDEO · 10s · tablet screen recording: Home on Water, no taps, calm water ripples and bobs behind the frosted-glass cards. Water 1 is the still fallback.

Media: new
Caption: Clouds, on Pro
Note: VIDEO · 10s · tablet screen recording: Home on Clouds, no taps, soft clouds drift slowly and sunbeams break through the gaps.

Media: new
Caption: Space, on Max
Note: VIDEO · 10s · tablet screen recording: Home on Space, no taps, stars stream past and a nebula drifts slowly towards you. Home-v2 · Space 1 is the still fallback.

Media: new
Caption: Electric Midnight, on Max
Note: VIDEO · 10s · tablet screen recording: Home on Electric Midnight, no taps, storm clouds drift across a midnight sky while green lightning races from edge to edge.

## Features

Label: Prototype

### Everything a sentence needs, one tap away

Group: Building a sentence

#### The talker

Headline: The talker is where a sentence comes together

One-liner: The talker is a holding area for symbols, and you can turn it on or off. When it's on, a tapped symbol goes there.

You can tap symbols or phrases into the talker, then delete and reorder them to make a sentence. A sentence made in the talker can be saved as a block sentence. When it plays, each block lights up and speaks one by one.

Media: new
Caption: Building a sentence in the talker
Note: VIDEO · 10s · tablet screen recording: talker on in a category, tap three symbols into the talker, drag one to a new place, remove one, tap Play, and each block lights up as it speaks. Screenshot 2026-11-08 at 12.09.36 1 is the still fallback.

#### The talker dropdown

Headline: The dropdown cuts down the need to navigate

One-liner: The talker has a dropdown with two tabs, Core words and Phrases.

With core words and phrases attached to the talker, a student can finish a whole sentence from any category, with all the essential, reusable parts to hand. Mo Speech comes with default phrases, and instructors can make their own to match their student's level.

Media: new
Caption: Core words and phrases, from any category
Note: VIDEO · 10s · tablet screen recording: talker on in Food, open the dropdown, tap "I want" on the Phrases tab, close it, tap "biscuit" on the board, open Core words and tap "please". Screenshot 2026-11-06 at 11.12.47 1 and Screenshot 2026-11-06 at 11.13.20 1 are the still fallbacks.

#### Sentences

Headline: Two kinds of sentence, block and fluent

One-liner: Sentences can be made from the talker, or with Create sentence.

A block sentence is saved from the talker, and plays block by block, with short pauses. A fluent sentence is made in Sentences or on Home. You type the sentence, Auto-match finds a symbol for each word, and it plays as one smooth sentence. You can fine-tune either kind in edit mode.

Media: new
Caption: Making a fluent sentence
Note: VIDEO · 10s · tablet screen recording: in Sentences, tap Create sentence, type "I want to go outside", Auto-match finds the symbols, save it, then tap it and it plays full screen as one sentence. Screenshot 2026-11-07 at 14.47.12 1 is the still fallback.

#### Tone

Headline: The same words, said with feeling

One-liner: Each sentence has three tones: angry, neutral and excited.

Tap a face and the whole sentence plays again in that tone. Tones also let a block sentence play back as one fluent sentence, without the pauses. Tones are a Max feature.

Media: new
Caption: Playing a sentence with the excited tone
Note: VIDEO · 10s · tablet screen recording: play a saved block sentence, it lights up block by block, then tap the excited face and it plays again as one excited sentence. Screenshot 2026-11-07 at 21.18.53 1 is the still fallback.

Group: Teaching

#### Instructor and student views

Headline: Views keep the adult and the student apart

One-liner: The instructor sees and controls everything. The student sees only what's right for them.

One Mo Speech account serves two very different people: the adult who sets things up, and the student who uses them. Keeping the student's view simple helps reduce cognitive overload, and lets the instructor introduce new concepts one step at a time.

Media: new
Caption: Switching to a student's view
Note: VIDEO · 10s · tablet screen recording: in the instructor view, open the view switcher and pick a student, and the theme, language and sidebar change to theirs, with fewer pages. Screenshot 2026-11-08 at 01.45.10 1 is the still fallback.

#### Modelling mode

Headline: The student taps their own way to the word

One-liner: Modelling teaches motor planning, so a student learns how to navigate to a symbol.

The instructor taps Model in a category and picks a word. Every device on the student's profile follows the same session live. The page dims, the next thing to tap lights up, and a pointer shows where it is. It can be repeated until the student learns where the symbol lives.

Media: new
Caption: A modelling session on the student's tablet
Note: VIDEO · 10s · tablet screen recording: the tablet goes to Home and dims, Categories lights up with a pointer, tap it, the Food tile lights up, tap it, "snack" lights up, tap it and it speaks. Screenshot 2026-11-08 at 02.06.54 1 is the still fallback.

#### Connected words

Headline: Hold a word to find the words that go with it

One-liner: Words can be connected to related words, like plurals and other forms, or words that simply go with them.

The Mo Speech admin adds connected words by hand, based on feedback from onboarded professionals. Hold a word for 2 seconds, and its connected words open in a card beside it.

Media: new
Caption: Holding "go" for its connected words
Note: VIDEO · 10s · tablet screen recording: open Core words in the talker dropdown, press and hold "go", a ring of glow builds, the card opens with "went" and "gone", tap "went" and it speaks and joins the talker. Screenshot 2026-11-08 at 02.14.41 1 is the still fallback.

Group: Making it yours

#### The symbol editor

Headline: Every symbol is made in one place

One-liner: The symbol editor is the main area for creating and saving symbols to use in categories, lists and sentences.

You can pick a symbol from the SymbolStix library, upload your own picture, or search Creative Commons image sites. You can also generate an AI image in one of four styles, or pick from My Images, a library of everything you've uploaded and created.

Media: new
Caption: Making a symbol with AI Generate
Note: VIDEO · 10s · tablet screen recording: open the symbol editor, go to AI Generate, type "red kite", choose Storybook, tap Generate, the picture lands in My Images, tap Add to symbol, then Save. Screenshot 2026-11-08 at 01.55.20 1 is the still fallback.

#### Languages

Headline: Every profile can have its own language

One-liner: The language is set in two places: the instructor's account, and each student's own setting on Pro or Max.

Languages on different profiles are independent of each other, so a student can have profiles in different languages, to encourage bilingual communication. The instructor has their own profile, to switch language as and when it suits them. Today that's English, Spanish and Hindi (preview).

Media: new
Caption: Switching to a student who speaks Hindi
Note: VIDEO · 10s · tablet screen recording: switch the view to a student set to Hindi, and the app's words, the symbol labels and the voice all change, then tap a symbol and it speaks in Hindi. image 8 and Screenshot 2026-11-07 at 14.27.57 1 are the still fallbacks.

Group: Running it

#### The admin dashboard

Headline: A back office for running Mo Speech

One-liner: The Mo Speech admin needs a dedicated dashboard to see user statistics, control themes and languages, and edit symbols.

Themes and languages can be published and unpublished. There's a pipeline to translate the symbol set and the UI. Symbols can be edited in each language and have connected words added. The dashboard lets future admin staff maintain Mo Speech without direct developer access.

Media: new
Caption: The admin dashboard
Note: VIDEO · 10s · laptop screen recording: the Overview numbers, then the Languages page, then Symbols, search "go" and open its connected words. Stay off the Users page, which shows email addresses. Screenshot 2026-11-08 at 02.24.15 1 is the still fallback.

## How I built it

Label: Build

### One designer, a team of agents

One-liner: I built a documentation system that lives in the repo. It guides Claude Code, and acts as context for every coding agent.

The CLAUDE.md file is the overarching index. It points to the docs, and holds the facts and rules every coding session must know, such as the stack, staging and backups.

Media: new
Caption: How the docs folder feeds every session
Note: DIAGRAM · docs folder flow (vertical)

#### Decision records

Being able to pivot quickly was an important part of this project. I made an ADR (architecture decision record) folder in my docs, and recorded every pivot in a Markdown file. It kept me up to date with the constant changes, and it gives the agent complete, accurate context to code with.

Media: Screenshot 2026-11-07 at 21.12.10 1
Caption: Every pivot, recorded as an ADR
Note: STILL · the existing Screenshot 2026-11-07 at 21.12.10 1 layer: the ADR folder in the docs.

#### Linear MCP

The Linear MCP helped me organise the development. It grouped all my issues, bugs and build phases into topics, which kept my build sessions on track.

Media: Screenshot 2026-11-07 at 22.05.40 1
Caption: Build phases and issues in Linear
Note: STILL · the existing Screenshot 2026-11-07 at 22.05.40 1 layer: the Mo Speech project in Linear.

#### Superpowers

Since adding the Superpowers skill, my sub-agent development has got much faster and more accurate. Planning a build triggers the brainstorming skill, which reads the real code for accurate insights. The plan-writing skill then writes detailed docs for sub-agents to build from. It's also saved me from thinking about when to commit.

Media: new
Caption: The Superpowers workflow
Note: DIAGRAM · Superpowers workflow

#### The figma-to-theme skill

I made my own skill for the animated themes. It reads the theme in Figma, writes the WebGL2 code, the theme file and a still picture, then runs its checks before it commits. I do the browser check myself, last.

Media: new
Caption: From a Figma design to a working theme
Note: DIAGRAM · figma-to-theme skill flow

# What's next

## What's next

Label: What's next

### Marketing comes next, then launch

The first step is a look and feel for the company: a warm, colourful palette from the theme tokens, a paper, grain or half-tone texture as the backdrop, and a cast of characters from the animated themes. The characters are for marketing only, not the app.

Then come the promo videos, filmed from the finished build, and the marketing site. After that, the full build replaces the MVP at the same address, and Mo Speech launches.

Media: none
