import type { MediaBlockProps } from "@/app/components/v2/MediaBlock";
import type { StageProps } from "@/app/components/v2/Stage";
import type { SectionNavEntry } from "@/app/components/v2/StickySectionNav";

const img = (name: string) => `/images/v2/mo-speech/${name}.webp`;
const video = (name: string, alt: string, caption?: string): MediaBlockProps => ({
  kind: "video",
  src: `${process.env.NEXT_PUBLIC_MEDIA_BASE_URL ?? ""}/video/mo-speech/${name}.mp4`,
  poster: `/images/v2/mo-speech/posters/${name}.webp`,
  alt,
  caption,
});

export type Block =
  | { type: "body"; paragraphs: string[] }
  | { type: "media"; media: MediaBlockProps }
  | { type: "gallery"; label: string; slides: StageProps[]; caption?: string }
  | {
      type: "problems";
      cards: { label: string; title: string; body: string }[];
      images: { src: string; alt: string }[];
      caption: string;
    }
  | { type: "storyboard"; panels: { src: string; alt: string; caption: string }[]; caption: string }
  | { type: "stats"; items: { value: string; label: string }[] }
  | { type: "insights"; items: { label: string; title: string }[] }
  | { type: "subsection"; eyebrow?: string; title: string; lead?: string; blocks: Block[] }
  | { type: "featureGroup"; title: string; features: Extract<Block, { type: "subsection" }>[] };

export type CaseSection = {
  id: string;
  label: string;
  headline: string;
  lead?: string;
  blocks: Block[];
};

export const caseStudyHero = {
  title: "Mo Speech",
  oneLiner: "The modern AAC solution designed for families all across the world",
  meta: [
    { label: "Role", value: "Solo. Research, design and build" },
    { label: "Timeline", value: "MVP 2025 · Full build April to November 2026" },
    { label: "Tools", value: "Figma, Claude Code, Next.js, Convex" },
  ],
};

export const caseStudyNav: SectionNavEntry[] = [
  { id: "overview", label: "Overview" },
  {
    label: "The MVP",
    items: [
      { id: "the-problem", label: "The problem" },
      { id: "learning-modelling", label: "Learning modelling" },
      { id: "cutting-it-down", label: "Cutting it down" },
      { id: "storyboard-mvp", label: "Storyboard" },
      { id: "what-i-built", label: "What I built" },
      { id: "launch", label: "Launch" },
      { id: "what-i-learned", label: "What I learned" },
    ],
  },
  {
    label: "The full build",
    items: [
      { id: "the-aac-market", label: "The AAC market" },
      { id: "a-new-navigation", label: "A new navigation" },
      { id: "gestalt-language", label: "Gestalt language" },
      { id: "storyboard-full-build", label: "Storyboard" },
      { id: "look-and-feel", label: "Look and feel" },
      { id: "features", label: "Features" },
      { id: "how-i-built-it", label: "How I built it" },
    ],
  },
  { id: "whats-next", label: "What’s next" },
];

export const caseStudySections: CaseSection[] = [
  {
    id: "overview",
    label: "Overview",
    headline: "AAC gives a voice to people who can’t speak",
    blocks: [
      {
        type: "body",
        paragraphs: [
          "Mo Speech is an AAC app born out of my own experiences as a father of a non-verbal autistic child, who was given a device by his school. AAC stands for Augmentative and Alternative Communication, which covers all the tools and strategies used to supplement or replace speech for people with communication difficulties.",
          "When someone is first introduced to AAC, the first step is called modelling. The instructor points to an object in real life, then shows their student how to navigate to its symbol in the app, so the student builds the motor planning they need for independent use.",
        ],
      },
      {
        type: "media",
        media: {
          kind: "still",
          src: img("overview-home"),
          alt: "The full Mo Speech app on its Home screen, with the Resource Library and shortcut cards",
          background: "gallery",
          caption: "Home in the full Mo Speech app",
        },
      },
    ],
  },
  {
    id: "the-problem",
    label: "Problem",
    headline: "“We don’t have an iPad, so we can’t use it.”",
    blocks: [
      {
        type: "body",
        paragraphs: [
          "After attending numerous coffee mornings at my son’s school, I began to realise AAC was getting a negative reputation amongst the parents. Some parents thought it was great, but quite a few were bewildered by the modelling process. I found the root of the problem in the app’s navigation.",
          "Each page has symbols, and buttons that look like symbols but open other pages. When you know where something is, it’s easy. Learning where new symbols live is very hard, especially in a real-life moment where speed matters. It’s hard for parents to work out, let alone teach to their children.",
        ],
      },
      {
        type: "problems",
        cards: [
          {
            label: "Problem 1",
            title:
              "Many leading AAC companies choose one operating system, which alienates families depending on who made their hardware.",
            body: "This was by far the most common complaint. Either parents couldn’t afford an iPad as Proloquo2Go is only available from the App Store, or they had an iPad and couldn’t afford the costly yearly subscription.",
          },
          {
            label: "Problem 2",
            title:
              "Navigating AAC apps isn’t intuitive, because the information architecture doesn’t flow like other modern software.",
            body: "Parents that were able to get funding were often confused about how it works. Because it doesn’t flow like any modern software we are used to. Navigating and editing boards was another major pain point.",
          },
          {
            label: "Problem 3",
            title: "Modelling is difficult, and it’s commonly known as an area where new users struggle.",
            body: "This is the most important stage for independent AAC usage and it is connected to the navigational issue. If parents are struggling to get around the app how can they teach their children?",
          },
        ],
        images: [
          { src: img("problem-platforms"), alt: "The Apple iOS and Android logos" },
          { src: img("problem-software"), alt: "YouTube’s sidebar navigation, as an example of familiar modern software" },
          { src: img("problem-modelling"), alt: "An AAC screen asking the instructor to choose a symbol to model" },
        ],
        caption: "Three problems I kept hearing about",
      },
    ],
  },
  {
    id: "learning-modelling",
    label: "Research",
    headline: "Some children took to it like water",
    blocks: [
      {
        type: "body",
        paragraphs: [
          "After listening to so many people with the same problems, I also saw the other side, where students took to it like water. I attended training sessions arranged by therapists and teachers who were AAC advocates, and learnt that modelling is how AAC leads to independent use.",
          "The same problems were still there, though. So I started to ideate on how I could solve them through better UI and UX.",
        ],
      },
      {
        type: "gallery",
        label: "Slides from the AAC training session",
        caption: "Some slides from the AAC training session",
        slides: [
          { src: img("training-1"), alt: "Training slide titled Modelling Without Expectation", background: "plainStrong" },
          { src: img("training-2"), alt: "Training slide titled What does Modelling look like?, with six ways to model", background: "plainStrong" },
          { src: img("training-3"), alt: "Quote saying a communication device doesn’t make you a communicator, any more than a piano makes you a musician", background: "plainStrong" },
          { src: img("training-4"), alt: "Illustrated examples of an adult narrating what a child is doing" },
          { src: img("training-5"), alt: "Training slide titled The Problem with Prompting" },
          { src: img("training-6"), alt: "Training slide titled The problem with physical prompting" },
        ],
      },
    ],
  },
  {
    id: "cutting-it-down",
    label: "Define",
    headline: "Finding the symbol was the hardest part, so I built that first",
    lead: "The MVP became a symbol exposure tool, to reaffirm symbol meanings outside the modelling session.",
    blocks: [
      {
        type: "body",
        paragraphs: [
          "I started thinking about voice search, text search and how to organise categories. Then I decided to cut it down and make a Minimum Viable Product. The idea was to productise the biggest pain point and launch it fast.",
          "That pain point was searching for the right symbol quickly enough to match the moment. The MVP was purely about search, with no navigation at all.",
        ],
      },
      {
        type: "gallery",
        label: "First ideas for search, voice and categories",
        caption: "First ideas for search, voice and categories",
        slides: [
          { src: img("sketch-1"), alt: "Early phone design with text and voice search buttons", background: "gallery" },
          { src: img("sketch-2"), alt: "Early phone design listening for a spoken word", background: "gallery" },
          { src: img("sketch-3"), alt: "Early phone design with symbols grouped by category", background: "gallery" },
        ],
      },
    ],
  },
  {
    id: "storyboard-mvp",
    label: "Ideate",
    headline: "A word, in the moment",
    lead: "The symbol has to come up while the child is still looking at the dog.",
    blocks: [
      {
        type: "storyboard",
        caption: "A word at the park",
        panels: [
          { src: img("sb1-panel-01-park-points"), alt: "At the park, a child points at a dog", caption: "He points. I need the word, now." },
          { src: img("sb1-panel-02-mic-dog"), alt: "A parent holds up a phone and says dog into the mic", caption: "Phone out, mic on, I say “dog”." },
          { src: img("sb1-panel-03-tap-tile-v2"), alt: "A finger taps the dog symbol on the phone", caption: "The symbol appears. One tap plays it." },
          { src: img("sb1-panel-04-fullscreen-v3"), alt: "The dog symbol fills the phone screen", caption: "Play it, and it fills the screen." },
          { src: img("sb1-panel-05-looks-dog-v2"), alt: "The child looks from the phone to the dog", caption: "He looks from the phone to the dog." },
          { src: img("sb1-panel-06-small-dog"), alt: "The phone plays the symbols for small and dog", caption: "Then “small dog”, played in order." },
        ],
      },
    ],
  },
  {
    id: "what-i-built",
    label: "Prototype",
    headline: "Say it, see it",
    lead: "Find a symbol by voice or by typing, then play it full screen.",
    blocks: [
      { type: "media", media: video("mvp-landing", "Scrolling through the Mo Speech MVP landing page", "The Mo Speech MVP landing page") },
      {
        type: "subsection",
        title: "Voice search",
        lead: "It’s a one-button hit. Tap the mic and say the word.",
        blocks: [
          { type: "body", paragraphs: ["This was a key feature, because parents and caregivers could now search for any symbol without the AAC navigation issues. Tapping a symbol adds it to the top line, so sequences of words can be built up."] },
          { type: "media", media: video("mvp-voice", "Searching for a symbol by voice in the MVP", "Voice search in the MVP") },
        ],
      },
      {
        type: "subsection",
        title: "Type to search",
        lead: "Type any word, and the results appear as you type.",
        blocks: [
          { type: "body", paragraphs: ["The results come from a library of 58,000 SymbolStix symbols. Tap a symbol to add it to your sequence, and its audio plays automatically. So the user can choose to search by typing or by voice."] },
          { type: "media", media: video("mvp-text", "Typing a word to search for symbols in the MVP", "Typing a word in the MVP") },
        ],
      },
      {
        type: "subsection",
        title: "Full-screen playback",
        lead: "Isolating and enlarging images improves visual focus.",
        blocks: [
          { type: "body", paragraphs: ["Tap the play button to go full screen. Your symbol sequence plays one symbol at a time, with synchronised audio."] },
          { type: "media", media: video("mvp-fullscreen", "A symbol sequence playing full screen in the MVP", "Playing a sequence full screen") },
        ],
      },
    ],
  },
  {
    id: "launch",
    label: "Test",
    headline: "166 sign-ups in three months",
    lead: "Plus 2 therapists with custom access.",
    blocks: [
      {
        type: "body",
        paragraphs: [
          "I started posting several times a week on LinkedIn and in Facebook groups. Most of the feedback was good.",
          "I did get some pushback about the wording. I was using “AAC” in the copy, but there was no motor planning involved. I acted fast and changed the marketing to call the app a “symbol exposure” tool.",
        ],
      },
      {
        type: "stats",
        items: [
          { value: "166", label: "sign-ups in three months" },
          { value: "2", label: "therapists with custom access" },
        ],
      },
      {
        type: "gallery",
        label: "Posts on LinkedIn and Facebook",
        caption: "Posts on LinkedIn and Facebook",
        slides: [
          { src: img("launch-post-1"), alt: "LinkedIn post on how quickly families can start using symbols with Mo Speech", background: "gallery" },
          { src: img("launch-post-2"), alt: "LinkedIn post about building voice search and testing it with my son", background: "gallery" },
          { src: img("launch-post-3"), alt: "LinkedIn post about changing the app’s wording after a therapist’s feedback", background: "gallery" },
          { src: img("launch-post-4"), alt: "LinkedIn post about a conversation with my son using Mo Speech beside his iPad", background: "gallery" },
          { src: img("launch-post-5"), alt: "LinkedIn post explaining why I built Mo Speech", background: "gallery" },
          { src: img("launch-post-6"), alt: "LinkedIn post introducing Mo Speech to a speech and language group", background: "gallery" },
        ],
      },
      {
        type: "media",
        media: {
          kind: "still",
          src: img("launch-admin-redacted"),
          alt: "MVP admin dashboard showing 166 total users, with account details blurred",
          bleed: true,
          caption: "The MVP admin dashboard, 166 users",
        },
      },
    ],
  },
  {
    id: "what-i-learned",
    label: "Iterate",
    headline: "“It isn’t AAC.” They were right.",
    lead: "The main criticism was that Mo Speech wasn’t AAC, and it didn’t teach motor planning.",
    blocks: [
      {
        type: "body",
        paragraphs: [
          "With the MVP, I built a live product and got real user feedback. It also got me thinking about how to solve the navigation issue, so Mo Speech could become a real AAC app that competes with the best apps on the market.",
        ],
      },
    ],
  },
  {
    id: "the-aac-market",
    label: "Research",
    headline: "Every app hides its navigation among the symbols",
    blocks: [
      {
        type: "body",
        paragraphs: [
          "To look deeper into the navigation problem so many people were complaining about, I analysed the top three AAC apps on the market: TD Snap, Awaaz and Proloquo2Go. Their layouts are all very similar. In a way that’s a good thing, because those layouts are assumed to work, with a lot of research behind them.",
          "The main issue I found is that there’s no one dedicated place for navigation. Sometimes, to find the right symbol, you have to go into folders within folders, which leaves a longer breadcrumb trail to get back.",
        ],
      },
      {
        type: "insights",
        items: [
          { label: "Insight 1", title: "Folders and symbols can be hard to tell apart." },
          { label: "Insight 2", title: "There’s no central place for navigation, and the folders live among the symbols." },
          { label: "Insight 3", title: "Current AAC users seem to be wizards on YouTube, so they already find their way around its standard dashboard navigation." },
        ],
      },
      {
        type: "gallery",
        label: "TD Snap, Awaaz and Proloquo2Go",
        caption: "TD Snap, Awaaz and Proloquo2Go",
        slides: [
          { src: img("market-td-snap"), alt: "The TD Snap AAC app’s grid of symbols" },
          { src: img("market-awaaz"), alt: "The Awaaz AAC app’s grid of symbols" },
          { src: img("market-proloquo2go"), alt: "The Proloquo2Go AAC app’s grid of symbols" },
        ],
      },
    ],
  },
  {
    id: "a-new-navigation",
    label: "Define",
    headline: "A dashboard, like the apps they already use",
    lead: "The only way to find out if it would work was to build it and test it.",
    blocks: [
      {
        type: "body",
        paragraphs: [
          "With these insights, I began to ask myself why a modern AAC app couldn’t use the dashboard framing of modern software. I wanted the new navigation to be as simple as possible. My wireframes had only Home, Search and Categories on the sidebar, and each category had a mode switch for lists, sentences and boards.",
          "After building a working prototype, I made a major architectural decision. Lists and sentences got their own place on the sidebar, and their own folders, because in practice a list or sentence doesn’t always fit a category. I made the final design in Figma, then used Claude Design to add some polish.",
        ],
      },
      {
        type: "gallery",
        label: "From wireframe to final design",
        caption: "From wireframe to final design",
        slides: [
          { src: img("nav-1"), alt: "Wireframe of the Categories page with a sidebar" },
          { src: img("nav-2"), alt: "Wireframe of a category’s symbol board" },
          { src: img("nav-3"), alt: "Wireframe of a category’s lists" },
          { src: img("nav-4"), alt: "Figma design of the Categories page in colour" },
          { src: img("nav-5"), alt: "The design being refined in Claude Design" },
          { src: img("nav-6"), alt: "Final design of the Categories page" },
        ],
      },
    ],
  },
  {
    id: "gestalt-language",
    label: "Test",
    headline: "Sentences are built from chunks, like Lego",
    lead: "Several words baked into one tappable phrase would mean a lot less cognitive load.",
    blocks: [
      {
        type: "body",
        paragraphs: [
          "Once the new navigation was working, I gave a live demo of an early version to one of the Speech and Language Therapists onboarded from the MVP. That session is where the ideas for phrases and connected words came from.",
          "Afterwards I started researching Gestalt Language Processing. Many autistic children learn whole phrases first, then break them into reusable chunks and build their own sentences from the pieces. Reading it was a profound moment, because I could picture it as a feature I’d use, with sentences built like blocks of Lego.",
        ],
      },
      {
        type: "media",
        media: {
          kind: "still",
          src: img("gestalt-reading"),
          alt: "Reading material about Gestalt Language Processing",
          caption: "Reading about Gestalt Language Processing",
        },
      },
    ],
  },
  {
    id: "storyboard-full-build",
    label: "Ideate",
    headline: "Show me where it lives",
    lead: "The student finds the word on their own tablet, while the instructor watches from their phone.",
    blocks: [
      {
        type: "storyboard",
        caption: "Modelling a snack in the kitchen",
        panels: [
          { src: img("sb2-panel-01-phone-model"), alt: "An instructor taps Model on a phone and picks snack", caption: "I tap Model and pick “snack”." },
          { src: img("sb2-panel-02-home-dims-v6"), alt: "The student’s tablet dims with one button glowing", caption: "Their tablet dims. One button glows." },
          { src: img("sb2-panel-03-food-drink-v4"), alt: "The student taps Categories, then Food and Drink", caption: "They tap Categories, then Food & Drink." },
          { src: img("sb2-panel-04-finds-snack"), alt: "The student finds the snack symbol as the instructor watches", caption: "They find “snack” themselves. I watch it live." },
          { src: img("sb2-panel-05-top-line"), alt: "The snack symbol lands in the top line of the tablet", caption: "“Snack” lands in the top line. They play it." },
          { src: img("sb2-panel-06-excited-face"), alt: "The student taps the excited face to change the tone", caption: "Then they tap the excited face." },
        ],
      },
    ],
  },
  {
    id: "look-and-feel",
    label: "Design",
    headline: "Made to be looked at for a long time",
    lead: "Movement in a continuous loop may encourage users to stay on their device, and make learning their AAC more fun.",
    blocks: [
      {
        type: "body",
        paragraphs: [
          "I wanted Mo Speech to look better than anything already on the market, and to be a visual treat for every user, wherever they are on the spectrum, or if they’re not on it at all.",
        ],
      },
      {
        type: "subsection",
        title: "Default themes",
        blocks: [
          {
            type: "body",
            paragraphs: [
              "I designed six default themes in Figma, three light and three dark, to make sure everything worked together. Then I used the Figma MCP, which lets Claude Code read and write my Figma file, to turn my variables into switchable tokens in the code.",
            ],
          },
          {
            type: "gallery",
            label: "The six default themes",
            caption: "The six default themes, three light and three dark",
            slides: [1, 2, 3, 4, 5, 6].map((n) => ({
              src: img(`theme-${n}`),
              alt: `Mo Speech in default theme ${n} of 6`,
              background: "gallery" as const,
            })),
          },
          {
            type: "media",
            media: {
              kind: "still",
              src: img("theme-variables"),
              alt: "The Mo Speech theme variables in Figma",
              caption: "The theme variables in Figma",
            },
          },
        ],
      },
      {
        type: "subsection",
        title: "Animated themes",
        blocks: [
          {
            type: "body",
            paragraphs: [
              "A common autistic trait is a fascination with repetitive movement, so I designed four animated themes where the background moves in an endless loop. They’re Water, Clouds, Space and Electric Midnight. Two are on Pro, and all four are on Max.",
              "I designed them with Figma shaders, then converted them to WebGL2. I made a skill for the whole process, so new themes can be added quickly and accurately.",
            ],
          },
          { type: "media", media: video("animated-themes", "A compilation of the four animated Mo Speech themes", "A compilation of all the animated themes") },
        ],
      },
    ],
  },
  {
    id: "features",
    label: "Prototype",
    headline: "Everything a sentence needs, one tap away",
    blocks: [
      {
        type: "featureGroup",
        title: "Building a sentence",
        features: [
          {
            type: "subsection",
            eyebrow: "The talker",
            title: "The talker is where a sentence comes together",
            lead: "The talker is a holding area for symbols, and you can turn it on or off. When it’s on, a tapped symbol goes there.",
            blocks: [
              { type: "body", paragraphs: ["You can tap symbols or phrases into the talker, then delete and reorder them to make a sentence. A sentence made in the talker can be saved as a block sentence. When it plays, each block lights up and speaks one by one."] },
              { type: "media", media: video("talker", "Building a sentence in the talker", "Building a sentence in the talker") },
            ],
          },
          {
            type: "subsection",
            eyebrow: "The talker dropdown",
            title: "The dropdown cuts down the need to navigate",
            lead: "The talker has a dropdown with two tabs, Core words and Phrases.",
            blocks: [
              { type: "body", paragraphs: ["With core words and phrases attached to the talker, a student can finish a whole sentence from any category, with all the essential, reusable parts to hand. Mo Speech comes with default phrases, and instructors can make their own to match their student’s level."] },
              { type: "media", media: video("talker-dropdown", "Opening the talker dropdown for core words and phrases", "Core words and phrases, from any category") },
            ],
          },
          {
            type: "subsection",
            eyebrow: "Sentences",
            title: "Two kinds of sentence, block and fluent",
            lead: "Sentences can be made from the talker, or with Create sentence.",
            blocks: [
              { type: "body", paragraphs: ["A block sentence is saved from the talker, and plays block by block, with short pauses. A fluent sentence is made in Sentences or on Home. You type the sentence, Auto-match finds a symbol for each word, and it plays as one smooth sentence. You can fine-tune either kind in edit mode."] },
              { type: "media", media: video("sentences", "Typing a fluent sentence and matching symbols to it", "Making a fluent sentence") },
            ],
          },
          {
            type: "subsection",
            eyebrow: "Tone",
            title: "The same words, said with feeling",
            lead: "Each sentence has three tones: angry, neutral and excited.",
            blocks: [
              { type: "body", paragraphs: ["Tap a face and the whole sentence plays again in that tone. Tones also let a block sentence play back as one fluent sentence, without the pauses. Tones are a Max feature."] },
              { type: "media", media: video("tone", "Playing a sentence in the excited tone", "Playing a sentence with the excited tone") },
            ],
          },
        ],
      },
      {
        type: "featureGroup",
        title: "Teaching",
        features: [
          {
            type: "subsection",
            eyebrow: "Instructor and student views",
            title: "Views keep the adult and the student apart",
            lead: "The instructor sees and controls everything. The student sees only what’s right for them.",
            blocks: [
              { type: "body", paragraphs: ["One Mo Speech account serves two very different people: the adult who sets things up, and the student who uses them. Keeping the student’s view simple helps reduce cognitive overload, and lets the instructor introduce new concepts one step at a time without touching the student’s device."] },
              { type: "media", media: video("views", "Switching from the instructor’s view to a student’s view", "Switching to a student’s view") },
            ],
          },
          {
            type: "subsection",
            eyebrow: "Modelling mode",
            title: "The student taps their own way to the word",
            lead: "Modelling teaches motor planning, so a student learns how to navigate to a symbol.",
            blocks: [
              { type: "body", paragraphs: ["The instructor taps Model in a category and picks a word. Every device on the student’s profile follows the same session live. The page dims, the next thing to tap lights up, and a pointer shows where it is. It can be repeated until the student learns where the symbol lives."] },
              { type: "media", media: video("modelling", "A modelling session guiding the student on a tablet", "A modelling session on the student’s tablet") },
            ],
          },
          {
            type: "subsection",
            eyebrow: "Connected words",
            title: "Hold a word to find the words that go with it",
            lead: "Words can be connected to related words, like plurals and other forms, or words that simply go with them.",
            blocks: [
              { type: "body", paragraphs: ["The Mo Speech admin adds connected words by hand, based on feedback from onboarded professionals. Hold a word for 2 seconds, and its connected words open in a card beside it."] },
              { type: "media", media: video("connected-words", "Holding the word go to open its connected words", "Holding “go” for its connected words") },
            ],
          },
        ],
      },
      {
        type: "featureGroup",
        title: "Making it yours",
        features: [
          {
            type: "subsection",
            eyebrow: "The symbol editor",
            title: "Every symbol is made in one place",
            lead: "The symbol editor is the main area for creating and saving symbols to use in categories, lists and sentences.",
            blocks: [
              { type: "body", paragraphs: ["You can pick a symbol from the SymbolStix library, upload your own picture, or search Creative Commons image sites. You can also generate an AI image in one of four styles, or pick from My Images, a library of everything you’ve uploaded and created."] },
              { type: "media", media: video("symbol-editor", "Making a symbol with AI Generate in the symbol editor", "Making a symbol with AI Generate") },
            ],
          },
          {
            type: "subsection",
            eyebrow: "Languages",
            title: "Every profile can have its own language",
            lead: "The language is set in two places: the instructor’s account, and each student’s own setting on Pro or Max.",
            blocks: [
              { type: "body", paragraphs: ["Languages on different profiles are independent of each other, so a student can have profiles in different languages, to encourage bilingual communication. The instructor has their own profile, to switch language as and when it suits them. Today that’s English, Spanish and Hindi (preview)."] },
              { type: "media", media: video("languages", "Switching to a student who speaks Hindi", "Switching to a student who speaks Hindi") },
            ],
          },
        ],
      },
      {
        type: "featureGroup",
        title: "Running it",
        features: [
          {
            type: "subsection",
            eyebrow: "The admin dashboard",
            title: "A back office for running Mo Speech",
            lead: "The Mo Speech admin needs a dedicated dashboard to see user statistics, control themes and languages, and edit symbols.",
            blocks: [
              { type: "body", paragraphs: ["Themes and languages can be published and unpublished. There’s a pipeline to translate the symbol set and the UI. Symbols can be edited in each language and have connected words added. The dashboard lets future admin staff maintain Mo Speech without direct developer access."] },
              { type: "media", media: video("admin", "Moving through the admin dashboard’s themes, languages and symbols", "The admin dashboard") },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "how-i-built-it",
    label: "Build",
    headline: "One designer, a team of agents",
    lead: "I built a documentation system that lives in the repo. It guides Claude Code, and acts as context for every coding agent.",
    blocks: [
      {
        type: "body",
        paragraphs: [
          "The CLAUDE.md file is the overarching index. It points to the docs, and holds the facts and rules every coding session must know, such as the stack, staging and backups.",
        ],
      },
      {
        type: "media",
        media: { kind: "diagram", src: img("diagram-docs"), alt: "Diagram of the docs folder feeding every coding session", caption: "How the docs folder feeds every session" },
      },
      {
        type: "subsection",
        title: "Decision records",
        blocks: [
          { type: "body", paragraphs: ["Being able to pivot quickly was an important part of this project. I made an ADR (architecture decision record) folder in my docs, and recorded every pivot in a Markdown file. It kept me up to date with the constant changes, and it gives the agent complete, accurate context to code with."] },
          { type: "media", media: { kind: "still", src: img("build-adr"), alt: "A folder of architecture decision records in Markdown", caption: "Every pivot, recorded as an ADR" } },
        ],
      },
      {
        type: "subsection",
        title: "Linear MCP",
        blocks: [
          { type: "body", paragraphs: ["The Linear MCP helped me organise the development. It grouped all my issues, bugs and build phases into topics, which kept my build sessions on track."] },
          { type: "media", media: { kind: "still", src: img("build-linear"), alt: "A Linear board of Mo Speech issues in Backlog, Done and Canceled columns", caption: "Build phases and issues in Linear" } },
        ],
      },
      {
        type: "subsection",
        title: "Superpowers",
        blocks: [
          { type: "body", paragraphs: ["Since adding the Superpowers skill, my sub-agent development has got much faster and more accurate. Planning a build triggers the brainstorming skill, which reads the real code for accurate insights. The plan-writing skill then writes detailed docs for sub-agents to build from. It’s also saved me from thinking about when to commit."] },
          { type: "media", media: { kind: "diagram", src: img("diagram-superpowers"), alt: "Diagram of the Superpowers workflow from brainstorming to sub-agents", caption: "The Superpowers workflow" } },
        ],
      },
      {
        type: "subsection",
        title: "The figma-to-theme skill",
        blocks: [
          { type: "body", paragraphs: ["I made my own skill for the animated themes. It reads the theme in Figma, writes the WebGL2 code, the theme file and a still picture, then runs its checks before it commits. I do the browser check myself, last."] },
          { type: "media", media: { kind: "diagram", src: img("diagram-figma-to-theme"), alt: "Diagram of the steps from a Figma design to a working theme", caption: "From a Figma design to a working theme" } },
        ],
      },
    ],
  },
  {
    id: "whats-next",
    label: "What’s next",
    headline: "Marketing comes next, then launch",
    blocks: [
      {
        type: "body",
        paragraphs: [
          "The first step is a look and feel for the company: a warm, colourful palette from the theme tokens, a paper, grain or half-tone texture as the backdrop, and a cast of characters from the animated themes. The characters are for marketing only, not the app.",
          "Then come the promo videos, filmed from the finished build, and the marketing site. After that, the full build replaces the MVP at the same address, and Mo Speech launches.",
        ],
      },
    ],
  },
];
