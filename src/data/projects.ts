/* ═══════════════════════════════════════════════════════════════
   PROJECTS — the work index (/work) and the case-study pages.

   All text is Dasha's own wording (from her READMEs, IM blog, and the
   copy she pasted in), only trimmed for length — nothing rewritten.
   `blurb` (the hover one-liner on /work) and `summary` (under the page
   title) are the same one-liner.

   Order = newest first.
   ═══════════════════════════════════════════════════════════════ */

import type { Project } from './types';

export const PROJECTS: Project[] = [
  {
    slug: 'the-party',
    title: 'The Party',
    year: '2026',
    role: 'design + build',
    tech: ['react', 'react three fiber', 'node/express', 'spotify oauth', 'groq llm'],
    blurb:
      'Your Spotify taste thrown as a party: top artists as 3D characters who roast each other via LLM-written dialogue',
    selected: true,
    thumb: '/work/theparty.gif', // hover preview rectangle
    previewSwatch: 'sw-1',
    links: { live: 'https://the-party-three.vercel.app/', code: 'https://github.com/dsshji/the-party' },
    caseStudy: {
      summary:
        'Your Spotify taste thrown as a party: top artists as 3D characters who roast each other via LLM-written dialogue',
      heroMedia: { type: 'video', src: '/work/theparty.mp4', alt: 'The Party — walkthrough', w: 1280, h: 606 }, // can't be embedded live (needs Spotify Premium login)
      why: [
        'This started as a “roast my music taste” idea.',
        'You log in with Spotify and the app pulls your top 5 artists and top 5 tracks from the last 6 months. Each artist is classified by genre, subgenre, and vibe tags, then paired off into allies, opposites, and outliers based on how those actually relate. The party then runs in phases: artists walk on and react to whoever’s already there, your top songs come on over real Spotify playback and the room reacts, the most popular artist gets called out, and a final toast gets undercut before the lights fade. All the dialogue is generated per-moment from the actual relationships, so no two parties are the same.',
      ],
      how: [
        'Frontend: React + Vite, React Three Fiber / drei for the 3D scene, React Router for the flow. Characters are a rigged chibi base with each artist’s photo textured onto the face & body; relationship-driven reaction animations per phase. Volumetric spotlights dim the stage and follow whoever’s speaking. Layered audio: an intro one-shot, a looping ambient bed, and the live Spotify track.',
        'Backend: Node + Express handling Spotify OAuth (JWT sessions with token refresh), stat/relationship processing, and the dialogue generation. Classification and dialogue run through Groq on two models — a bigger one for genre/vibe tagging and the relationship graph, a smaller/faster one for the per-moment dialogue. The relationship graph is fed back into the dialogue prompts so the writing is grounded in the specific room.',
      ],
      whatBroke: [
        'Spotify changed the API mid-build. Audio features, genres, and popularity were all deprecated or removed for new apps in late 2025 / early 2026, which killed the original plan of mapping audio stats to party behavior. The fix came with using the LLM to classify and tag artists and tracks by genre, subgenre, and vibe — the whole relationship system is built on this, so it turned out more expressive than it would be with plain genre tags.',
        'The whole thing is a state machine: phases, per-character arrival/settle tracking, spotlight targeting, and dialogue gating all wired up on one shared set of state for the visuals, the audio, and the reactions.',
        'First time with most of this stack — React, R3F, OAuth, Blender-to-glTF — a lot of it was learned on the way. The reaction animations and curtain work were the hardest.',
      ],
    },
  },

  {
    slug: 'steer-os34',
    title: 'STEER_OS34',
    year: '2026',
    role: 'concept · hardware · code',
    tech: ['arduino', 'p5.js', 'p5.sound', 'webserial'],
    blurb:
      'Arduino + p5.js generative audio-visual instrument. Steer an autonomous particle world and synth drone with physical knobs and buttons',
    selected: true,
    thumb: '/work/steeros.gif', // hover preview rectangle
    previewSwatch: 'sw-3',
    links: { live: null, code: 'https://github.com/dsshji/steer_os34_v1.2' },
    caseStudy: {
      summary:
        'Arduino + p5.js generative audio-visual instrument. Steer an autonomous particle world and synth drone with physical knobs and buttons',
      heroMedia: { type: 'video', src: '/work/steeros.mp4', alt: 'STEER_OS34 — walkthrough', w: 1280, h: 574 },
      why: [
        'The system is autonomous. The user doesn’t compose or perform; they conduct. Through knobs and buttons, they shape the conditions: density, tone, tension, space, freeze, wobble. Both the soundscape and the visual particle world respond simultaneously.',
      ],
      how: [
        'The Arduino side reads 3 potentiometers and 4 buttons and sends 7 comma-separated values over serial at 115200 baud. The p5.js side receives the values, updates a shared state, and drives two parallel systems.',
        'Audio engine: a drone layer (two detuned sawtooth oscillators → lowpass filter → reverb) plus a triggered note layer (3 oscillators, D Dorian scale, fired on particle collisions). Visual system: a particle world of drifting geometric shapes whose size, trail length, and stroke weight all respond to the knob values, with a CRT scanline effect and a typewriter terminal UI overlay. Both halves read from the same state, so one physical control affects audio and visuals simultaneously.',
      ],
      whatBroke: [
        'The part I’m SO PROUD of is actually the physical setup.',
        'I don’t really like how it looks, I believe I could have made it look 10 times better, but with the scarce amount of time and resources it turned out pretty well. The overall box is not really neat, but I think the way I managed to cover things is successful, and the handwriting with my shaky hands together looks quite well. I felt like I managed to maintain the aesthetic I was striving for with the design of the panel too: I intentionally left out the buttons on top, and ordered the caps that look very tech-y because it was a great alignment with Teenage Engineering designs, especially their PO series with buttons out.',
        'The part I think I did the best job on is what’s hidden inside the box. The wiring and making everything have contact with each other, working consistently and not crashing, as well as not being just super-glued to the surface, was extremely hard. I spent almost 10 hours on just this setup, and had to give up a lot of features that would elevate the design and idea because the hardware didn’t allow it.',
        'It was the hardest task throughout this semester for me and I’m happy I managed to do it all by myself with literally no help. I think it’s pretty impressive how something so simple and minimalistic has that huge messy wired system inside.',
      ],
    },
  },

  {
    slug: 'ladushki',
    title: 'Ladushki',
    year: '2026',
    role: 'design + build',
    tech: ['p5.js', 'ml5.js handpose', 'p5.sound'],
    blurb:
      'Camera-controlled browser game built with p5.js and ml5.js HandPose: mirror a pixel-art girl\'s clapping patterns or face the consequences',
    selected: true,
    thumb: '/work/ladushki.gif', // hover preview rectangle (13 MB — consider compressing)
    previewSwatch: 'sw-4',
    links: { live: 'https://editor.p5js.org/dsshji/full/_nVDok-Ie', code: 'https://github.com/dsshji/ladushki' },
    caseStudy: {
      summary:
        'Camera-controlled browser game built with p5.js and ml5.js HandPose: mirror a pixel-art girl\'s clapping patterns or face the consequences',
      heroMedia: null,
      why: [
        'As your mistake count rises, the girl gets angrier, her clapping speeds up, and the environment around her begins to distort — visually and sonically. What happens when she reaches the boiling point? Play and find out.',
      ],
      how: [
        'Hand tracking uses the ml5.js HandPose model. Open/closed palm state is determined by checking finger-tip keypoint positions relative to knuckles, with an additional check comparing the distance between the thumb and pinky tips to confirm a fully open, forward-facing palm.',
        'Background music speed and distortion intensity are mapped to the player’s anger level using p5.sound’s rate(), distortion.set(), and drywet() methods, creating a gradual, barely-noticeable sonic deterioration. Dialogue renders letter-by-letter with a typewriter effect, and at higher anger levels the dialogue box shakes using randomized translate() offsets. Sprites: Picrew → pixelated with Nano Banana → edited in Canva; music generated with Suno AI.',
      ],
      whatBroke: [
        'Throughout the development I ran into a lot of problems and small bugs, but one actually taught me a very useful trick.',
        'I had a lot of visual parts that required precise positioning, with different effects applied to them. The mode of displaying the object (rectMode, imageMode), aligning, the translating conditions etc. were different for many parts. However, when you assign imageMode in one place globally, then somewhere else you set another imageMode, and then in a third place you just use it expecting the default mode — the whole sketch turns to complete chaos. I had video aligned to another part of the screen, the textMode set to some weird value, font style disappearing, and the textbox moving out of the screen. I learned how to isolate the styles with push() / pop().',
        'What I’d work on: the final screamer is not scary enough. The concept was cuteness vs. creepiness, and making a scary screamer turned out to be a very hard job. I tested a few versions, asking my friends to play, and stopped on the current one because it was more unexpected: it appears mid-sentence as a stop-frame picture. The design could be better too — I can’t draw, so I used Picrew and editing AI for the assets. And the controls: while playing, the user only shows their hands, but to progress through the tutorial and ending they need to press keys. Maybe additional poses (like a peace sign?) instead.',
      ],
    },
  },

  {
    slug: 'glitching-cars',
    title: 'Glitching Cars',
    year: '2026',
    role: 'design + build',
    tech: ['p5.js', 'instance mode'],
    blurb:
      'ASCII/glitch art generator built with p5.js: 8 car images animated with pixelated characters renders',
    selected: true,
    thumb: '/work/glitchcars.gif', // hover preview rectangle
    previewSwatch: 'sw-2',
    links: {
      live: 'https://dsshji.github.io/glitching-cars/',
      code: 'https://github.com/dsshji/glitching-cars',
    },
    caseStudy: {
      summary:
        'ASCII/glitch art generator built with p5.js: 8 car images animated with pixelated characters renders',
      heroMedia: { type: 'embed', src: 'https://dsshji.github.io/glitching-cars/', alt: 'Glitching Cars — live' },
      why: [
        'ASCII as a way to glitch and abstract a familiar image until it’s barely a car — and the challenge of running many of these animations at once, independently, on a single page.',
      ],
      how: [
        'Each car gets its own p5.js sketch instance (instance mode), running independently inside a CSS grid. A Glitch class tracks moving square patches that sample the underlying image and redraw it as block/ASCII characters, with opacity fading in or out depending on the car’s current state. A simple state machine (fade / progress, toggled via CSS classes) decides which sketches are actively glitching at any moment, randomized every 7 seconds.',
      ],
      whatBroke: [
        'This was a light, fast project that grew out of one of my p5 sketches. Adjusting the glitches and the image drawing update so they don’t accumulate and litter the memory so the whole thing barely works was something I hadn’t thought of from the very beginning. I had to ponder it a lot, with an almost full code rebuild of the way the glitch draws, so the webpage with 8 sketches works flawlessly and with no slowing down.',
      ],
    },
  },

  {
    slug: 'photo-archive-tree',
    title: 'Photo Archive',
    year: '2026',
    role: 'design + build',
    tech: ['vanilla js', 'd3.js', 'indexeddb'],
    blurb:
      'Personal photo archive organized as a tree: browse and manage memories by category and era, visualized with D3.js, storage handled with IndexedDB',
    selected: true,
    thumb: '/work/photoarchive.gif', // hover preview rectangle
    previewSwatch: 'sw-1',
    links: { live: 'https://dsshji.github.io/photo-archive/', code: 'https://github.com/dsshji/photo-archive' },
    caseStudy: {
      summary:
        'Personal photo archive organized as a tree: browse and manage memories by category and era, visualized with D3.js, storage handled with IndexedDB',
      heroMedia: { type: 'embed', src: 'https://dsshji.github.io/photo-archive/', alt: 'Photo Archive — live' },
      why: [
        'Practice for more advanced web-development work, database management.',
        'Photos are organized hierarchically by era, place, or event rather than chronologically. You define the structure by adding paths like Moscow/Childhood or Travel/China, then attach photos to any node. Data lives entirely in the browser.',
      ],
      how: [
        'Vanilla JavaScript for the general tree data structure; D3.js for the visualization, zoom, pan, and transitions; IndexedDB for image storage and localStorage for the tree metadata — HTML and CSS, no frameworks. Add and delete eras as slash-separated paths, upload photos to any node, click a node to zoom in and view its photos, and the tree and images persist across sessions.',
      ],
      whatBroke: [
        'IndexedDB, localStorage, and overall database / storage management was the most difficult part for me: making it not share across users, not reset on page reload, and not persist when it shouldn’t. I hadn’t done any project managing storage, so learning it all through this small project by myself was very valuable. I had so many bugs and was often stuck with my head exploding from confusion. I can’t say the project turned out exactly how I wanted, but I definitely learnt a lot about storage management and web development with the backend.',
      ],
    },
  },

  {
    slug: 'commslab-portfolio',
    title: 'CommsLab Portfolio',
    year: '2026',
    role: 'design + build',
    tech: ['three.js', 'glb', 'vanilla js'],
    blurb:
      'Portfolio of my Communications Lab projects at NYU Abu Dhabi Spring 2026. Built with Three.js, pixel fonts, and a PSP aesthetic',
    selected: false,
    thumb: '/work/commslab.gif', // hover preview rectangle
    previewSwatch: 'sw-4',
    links: {
      live: 'https://dsshji.github.io/personal-website-commslab/',
      code: 'https://github.com/dsshji/personal-website-commslab',
    },
    caseStudy: {
      summary:
        'Portfolio of my Communications Lab projects at NYU Abu Dhabi Spring 2026. Built with Three.js, pixel fonts, and a PSP aesthetic',
      heroMedia: { type: 'embed', src: 'https://dsshji.github.io/personal-website-commslab/', alt: 'CommsLab Portfolio — live', w: 1560, h: 760 /* (optional cropX: px trimmed off each side → bigger site but hides the side menu)  ← w×h = the desktop window the site is laid out at, scaled down into the box. 1560 = narrowest width with all 4 cards in one row (1500 wraps); a smaller h = shorter box / less empty space under short pages. (Add wide: true to let a hero break out of the column.) */ },
      why: [
        'A personal portfolio website showcasing four works made throughout the Communications Lab semester. The concept is a retro y2k/PSP-inspired interface with pixel fonts and electric blue accents, designed to feel like a handheld console menu rather than a typical portfolio site. I wanted it minimalistic and focused: no distractions, just the works themselves presented with enough personality to feel intentional. Each project gets its own page with a matching 3D object rendered in Three.js: a Walkman for the audio story, a sketchbook for the comic, a VHS camera for the film.',
      ],
      how: [
        'Plain HTML, CSS, JavaScript with no frameworks. Three.js via CDN importmap renders a GLB model per project, matching its medium. A looping background soundtrack with a mute/unmute toggle persists across pages, with pixel-style UI (Press Start 2P and Pixelify Sans), a mouse cursor trail, and clickable 3D models that open the project. Hosted on GitHub Pages.',
      ],
      whatBroke: [
        'The trickiest part was Three.js. I relied mostly on the official manual to learn how to set it up, how to add a canvas and a scene, and then how to do a simple animation of floating and rotating. Since I haven’t done any advanced functions, the setup code in my project is mostly taken from the manual (and it is the same for ALL the JavaScript files for 3D models in my project). The canvas, basically the scene where the model renders, is got in JS using getElementById from a designated container in HTML, so the model can only use the space inside that container.',
      ],
    },
  },

  {
    slug: 'subway-chaser',
    title: 'Subway Chaser',
    year: '2025',
    role: 'team of 2 · my part: coins, obstacles, collision, score, double-jump',
    tech: ['processing', 'python'],
    blurb:
      'A 2D endless runner inspired by Subway Surfers, developed as a final project for Intro to Computer Science',
    selected: false,
    thumb: null,
    previewSwatch: 'sw-3',
    links: { live: null, code: 'https://github.com/asemaikauas/subway' },
    caseStudy: {
      summary:
        'A 2D endless runner inspired by Subway Surfers, developed as a final project for Intro to Computer Science',
      heroMedia: null, // TODO: push the demo video + add it here
      why: [
        'A 2D endless runner inspired by Subway Surfers I grew up on playing. Developed in a team as a final project for Intro to Computer Science on Processing (Python). We decided to rebuild the famous game in another plane while keeping most of the mechanics.',
      ],
      how: [
        'The player runs forward on three lanes, switching lanes, jumping, and sliding to avoid oncoming trains and barricades, while speeding up as the game progresses. The goal is to survive for as long as possible while collecting coins and using temporary superpowers that enhance movement. The game ends when the player hits an obstacle.',
        'My part was the coin system, obstacles, collision detection, score tracking, and the double-jump power-up; my teammate Assemay handled background scrolling, player physics, lane-switching, sound, and the flying power-up.',
      ],
      whatBroke: [
        'One of the main difficulties was making Jack run naturally. We had 6 sprites for the running and jumping state, but sequencing and pacing them to look natural was really difficult. I was constantly editing and adjusting sprites while my teammate was trying to sequence and pace them properly. We had more than 3 versions of Jack running before settling on the final and most successful one.',
        'This project was my first full-made game, even if small. It taught me a lot about how to build and structure the mechanics and game processes while sharing it with another person. It was also sprites-heavy, and making them all fit the game, look even on the screen, and adjusting the code to make the whole thing look natural was something I learnt a lot from.',
      ],
    },
  },
];

/** Home page shows only the flagged ones, newest first. */
export const SELECTED_PROJECTS = PROJECTS.filter((p) => p.selected);

/** Look up one project by slug (case-study route). */
export const getProject = (slug: string): Project | undefined =>
  PROJECTS.find((p) => p.slug === slug);
