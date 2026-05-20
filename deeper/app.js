const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => Array.from(document.querySelectorAll(selector));

const MAX_TRAIL = 9;
const MAX_SAVED = 30;
const MAX_INVENTORY = 12;
const TOAST_MS = 2200;
const STORAGE_KEYS = {
  saved: "deeper.savedPlaces.v1",
  save: "deeper.save.v1",
  journal: "deeper.journal.v1",
  lastUrl: "deeper.lastUrl.v1"
};

const elements = {
  siteHeader: $(".site-header"),
  homePanel: $("#homePanel"),
  explorePanel: $("#explorePanel"),
  launchForm: $("#launchForm"),
  sparkInput: $("#sparkInput"),
  modeHelper: $("#modeHelper"),
  continueButton: $("#continueButton"),
  randomPortalButton: $("#randomPortalButton"),
  savedButton: $("#savedButton"),
  journalButton: $("#journalButton"),
  savedDialog: $("#savedDialog"),
  journalDialog: $("#journalDialog"),
  closeSavedButton: $("#closeSavedButton"),
  closeJournalButton: $("#closeJournalButton"),
  savedList: $("#savedList"),
  journalList: $("#journalList"),
  depthValue: $("#depthValue"),
  modeValue: $("#modeValue"),
  signalValue: $("#signalValue"),
  pocketValue: $("#pocketValue"),
  inventoryCount: $("#inventoryCount"),
  achievementCount: $("#achievementCount"),
  trailList: $("#trailList"),
  placeCard: $("#placeCard"),
  placeType: $("#placeType"),
  placeCode: $("#placeCode"),
  placeTitle: $("#placeTitle"),
  placeBody: $("#placeBody"),
  artifactHeading: $("#artifactHeading"),
  ruleHeading: $("#ruleHeading"),
  whisperHeading: $("#whisperHeading"),
  artifactText: $("#artifactText"),
  artifactSecretText: $("#artifactSecretText"),
  ruleText: $("#ruleText"),
  whisperText: $("#whisperText"),
  takeItemButton: $("#takeItemButton"),
  examineArtifactButton: $("#examineArtifactButton"),
  choiceGrid: $("#choiceGrid"),
  rerollButton: $("#rerollButton"),
  savePlaceButton: $("#savePlaceButton"),
  copyLinkButton: $("#copyLinkButton"),
  routeAnnouncer: $("#routeAnnouncer"),
  toast: $("#toast")
};

const modeMeta = {
  dream: {
    helper: "dream: rooms that remember you wrong",
    headings: ["left behind", "law of this sleep", "something mutters"]
  },
  museum: {
    helper: "museum: artifacts with opinions",
    headings: ["on the pedestal", "placard warning", "audio guide glitch"]
  },
  game: {
    helper: "game: side quests with no credits",
    headings: ["loot drop", "house rule", "NPC aside"]
  },
  cosmic: {
    helper: "cosmic: places measured in songs, not miles",
    headings: ["drifting nearby", "physics here", "transmission"]
  }
};

const banks = {
  dream: {
    places: [
      "mirror orchard",
      "sleep station",
      "paper moon",
      "clock garden",
      "velvet elevator",
      "rain chapel",
      "hall of almost-asleep",
      "subway that only runs at 3:07",
      "laundry room of lost names",
      "balcony overlooking yesterday"
    ],
    beings: [
      "moth librarian",
      "brass gardener",
      "quiet giant",
      "fox with star maps",
      "choir of umbrellas",
      "sleepwalker with a crown",
      "child made of thunder",
      "tailor of borrowed faces"
    ],
    objects: [
      "key made of fog",
      "book that hums",
      "jar of tomorrow",
      "map with moving streets",
      "lantern full of tiny tides",
      "pillow that remembers arguments",
      "mirror with a late reflection",
      "spoon that stirs dreams"
    ],
    rules: [
      "Names become doors when spoken twice.",
      "Every shadow points toward a memory.",
      "Questions are lighter than answers here.",
      "Sleeping here does not mean closing your eyes.",
      "If you recognize the furniture, it is not yours.",
      "The ceiling is optional after the third visit."
    ],
    signals: ["hushed", "glowing", "drowsy", "silver", "impossible"]
  },
  museum: {
    places: [
      "gallery of lost seconds",
      "archive below the stairs",
      "forbidden exhibit",
      "cabinet of unfinished maps",
      "hall of almosts",
      "atrium of borrowed weather",
      "gift shop for vanished empires",
      "restoration room with no staff"
    ],
    beings: [
      "curator of echoes",
      "security guard made of dust",
      "painting that blinks",
      "ticket taker from 1890",
      "docent who speaks in footnotes",
      "statue that keeps receipts"
    ],
    objects: [
      "cracked planet model",
      "mask that remembers faces",
      "receipt from the future",
      "fossilized laugh",
      "black glass compass",
      "visitor log with your handwriting",
      "audio guide that skips ahead",
      "velvet rope that moves on its own"
    ],
    rules: [
      "Do not read the plaques after midnight.",
      "Every artifact adds one minute to the building.",
      "The exits rearrange for repeat visitors.",
      "Nothing behind glass is as contained as it looks.",
      "Flash photography wakes the older rooms."
    ],
    signals: ["cataloged", "marble", "dusty", "uncanny", "sealed"]
  },
  game: {
    places: [
      "neon dungeon",
      "tiny dragon market",
      "arcade below the ocean",
      "boss room with no boss",
      "checkpoint shrine",
      "tutorial that went feral",
      "inventory swamp",
      "speedrun cathedral"
    ],
    beings: [
      "merchant crab",
      "sleepy dragon",
      "glitched knight",
      "oracle vending machine",
      "frog pilot",
      "speedrun ghost",
      "tutorial NPC who quit",
      "merchant who only trades rumors"
    ],
    objects: [
      "coin that buys luck",
      "pocket storm",
      "helmet of bad ideas",
      "sword called maybe",
      "map cartridge",
      "save crystal with fingerprints",
      "quest marker in a jar",
      "button labeled definitely not"
    ],
    rules: [
      "Every item has a secret use three rooms later.",
      "The smallest enemy knows the biggest shortcut.",
      "Saving here changes the weather.",
      "The tutorial lies only when it is trying to help.",
      "Loot has feelings and remembers who opened the chest."
    ],
    signals: ["charged", "rare", "pixel", "lucky", "boss-level"]
  },
  cosmic: {
    places: [
      "moon library",
      "asteroid conservatory",
      "black hole cafe",
      "station at the edge of sleep",
      "planet of unlocked doors",
      "observatory of unread messages",
      "dock where comets refuel",
      "library shelf between two stars"
    ],
    beings: [
      "astronaut ghost",
      "nebula whale",
      "robot monk",
      "star cartographer",
      "alien child with a radio",
      "satellite that learned manners",
      "comet shepherd",
      "gravity clerk"
    ],
    objects: [
      "teacup full of constellations",
      "gravity bell",
      "postcard from the void",
      "helmet recording dreams",
      "orbiting seed",
      "telescope pointed inward",
      "matchbox full of eclipses",
      "radio tuned to tomorrow"
    ],
    rules: [
      "Distance is measured in songs.",
      "Gravity listens when you whisper.",
      "Every orbit leaves a sentence behind.",
      "The stars here are not above you. They are waiting their turn.",
      "No one exits a constellation by the same line they entered."
    ],
    signals: ["stellar", "cold", "radio", "ancient", "wide-awake"]
  }
};

const universal = {
  moods: ["curious", "haunted", "playful", "bright", "secret", "electric", "ancient", "tiny", "vast", "soft", "muffled", "sideways", "patient", "glitchy", "tender", "overexposed"],
  textures: ["glass", "brass", "paper", "velvet", "neon", "fossilized", "rain-stained", "clockwork", "honeyed", "static"],
  verbs: ["enter", "follow", "unlock", "listen to", "trade with", "wake", "decode", "befriend", "borrow", "open", "investigate", "approach", "peer into", "trace", "disturb", "consult", "descend toward"],
  endings: [
    "behind the blue door",
    "under the humming floor",
    "where the lights bend",
    "inside the next question",
    "past the sleeping sign",
    "through the little storm",
    "below the backwards stairs",
    "beside the impossible window",
    "where the wallpaper ends",
    "through the polite silence",
    "into the warm static",
    "where the floor remembers footsteps",
    "past the door with no frame"
  ],
  whispers: [
    "Go deeper, but bring a question.",
    "The next page is already dreaming about you.",
    "Do not trust rooms with perfect symmetry.",
    "If the path loops, look for the thing that changed.",
    "The small door is larger on the inside.",
    "The elevator only descends if you stop pressing the button.",
    "Someone already opened the next room. They left their hesitation behind.",
    "This place keeps receipts.",
    "The interesting door is the one with no handle.",
    "If you hear applause, you went too far.",
    "The map is honest. The map is wrong.",
    "Leave one question unanswered. The room uses it as fuel.",
    "Not all loops are accidents.",
    "The smallest object is doing the most work.",
    "You are not lost. You are being sorted.",
    "Gravity is optional but rude about it.",
    "The exit marked emergency is never the emergency.",
    "Count the corners. If there are five, stay.",
    "Your spark is still ahead of you.",
    "The machine prefers visitors who hesitate, then click anyway."
  ]
};

const accents = [
  ["#ff6fd8", "#62e8ff"],
  ["#8f7cff", "#ffd36a"],
  ["#8dffb3", "#62e8ff"],
  ["#ff9f6e", "#8f7cff"],
  ["#e879f9", "#38bdf8"],
  ["#ffd36a", "#ff6fd8"]
];

const achievements = [
  { id: "first_threshold", title: "First Threshold", test: (save) => save.stats.roomsVisited >= 1 },
  { id: "deep_diver", title: "Deep Diver", test: (save) => save.stats.maxDepth >= 10 },
  { id: "mode_tourist", title: "Mode Tourist", test: (save) => save.stats.modesVisited.length >= 4 },
  { id: "curator", title: "Curator", test: (save) => save.inventory.length >= 5 },
  { id: "rare_sighting", title: "Rare Sighting", test: (save) => save.stats.rareRoomsFound >= 1 },
  { id: "loop_watcher", title: "Loop Watcher", test: (save) => save.stats.rerollsUsed >= 5 }
];

let currentPlace = null;
let toastTimer = null;
let lastFocusedBeforeDialog = null;

function hashString(input) {
  let hash = 2166136261;
  for (let index = 0; index < input.length; index += 1) {
    hash ^= input.charCodeAt(index);
    hash = Math.imul(hash, 16777619);
  }
  return hash >>> 0;
}

function makeRng(seed) {
  let value = seed >>> 0;
  return () => {
    value += 0x6d2b79f5;
    let next = value;
    next = Math.imul(next ^ (next >>> 15), next | 1);
    next ^= next + Math.imul(next ^ (next >>> 7), next | 61);
    return ((next ^ (next >>> 14)) >>> 0) / 4294967296;
  };
}

function pick(rng, list) {
  return list[Math.floor(rng() * list.length)];
}

function clampString(value, max) {
  return String(value ?? "").slice(0, max);
}

function clampNumber(value, min, max) {
  const parsed = Number.parseInt(value, 10);
  if (!Number.isFinite(parsed)) return min;
  return Math.min(Math.max(parsed, min), max);
}

function titleCase(text) {
  return text.replace(/\b[a-z]/g, (letter) => letter.toUpperCase());
}

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
    .slice(0, 72);
}

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function rollTier(seed, depth, reroll) {
  const rng = makeRng(hashString(`tier:${seed}:${depth}:${reroll}`));
  const roll = rng();
  if (roll < 0.01) return "legendary";
  if (roll < 0.05) return "rare";
  if (roll < 0.2) return "uncommon";
  return "common";
}

function composeName(rng, bank) {
  const pattern = pick(rng, ["bank", "texture-place", "place-ending", "mood-place"]);
  const place = pick(rng, bank.places);
  if (pattern === "bank") return place;
  if (pattern === "texture-place") return `${pick(rng, universal.textures)} ${place}`;
  if (pattern === "place-ending") return `${place} ${pick(rng, universal.endings)}`;
  return `${pick(rng, universal.moods)} ${place}`;
}

function makeItem(object, mode, seed, code) {
  return {
    id: `${slugify(object)}-${code}`,
    name: object,
    mode,
    tags: object.split(/\s+/).filter((word) => word.length > 3),
    placeCode: code,
    seed
  };
}

function buildExaminations(rng, object, being, signal) {
  return [
    `The ${object} shows a reflection of ${being}, but the reflection is three rooms ahead.`,
    `A ${signal} line appears along its edge: ${pick(rng, universal.whispers).toLowerCase()}`,
    `When you turn it over, the underside says: ${pick(rng, universal.endings)}.`
  ];
}

function getParams() {
  const params = new URLSearchParams(window.location.search);
  const mode = banks[params.get("mode")] ? params.get("mode") : "dream";
  const trail = (params.get("trail") || "")
    .split("|")
    .filter(Boolean)
    .slice(-MAX_TRAIL)
    .map((item) => clampString(item, 90));

  return {
    seed: clampString(params.get("seed"), 120),
    mode,
    depth: clampNumber(params.get("depth") || "0", 0, 999),
    spark: clampString(params.get("spark") || "", 80),
    trail,
    reroll: clampString(params.get("reroll") || "0", 8),
    pocket: clampString(params.get("pocket") || "", 80)
  };
}

function navigateToPlace({ seed, mode, depth, spark, trail, reroll = "0", pocket = "" }) {
  const params = new URLSearchParams({
    seed: clampString(seed, 120),
    mode: banks[mode] ? mode : "dream",
    depth: String(clampNumber(depth, 0, 999)),
    spark: clampString(spark, 80),
    trail: trail.slice(-MAX_TRAIL).join("|"),
    reroll: String(reroll),
    pocket: clampString(pocket, 80)
  });
  window.history.pushState({}, "", `?${params.toString()}`);
  renderFromUrl({ focusTitle: true, scrollToPlace: true });
}

function randomSeed(prefix = "portal") {
  return `${prefix}-${Date.now()}-${Math.floor(Math.random() * 999999)}`;
}

function buildBody({ rng, safeMode, title, being, sceneObject, depth, spark, trail, pocket, tier }) {
  const prior = trail.at(-1);
  const lines = [];
  if (depth === 0) {
    lines.push(`You arrive at ${title.toLowerCase()}. The air tastes like a page still loading.`);
    lines.push("This is the first threshold. Something in the walls just learned your name.");
  } else if (depth > 12) {
    lines.push(`The machine recognizes you now. ${title} feels less like a room and more like a memory you never had.`);
    lines.push(`A ${being} waits beside the ${sceneObject}, calm in the way storms are calm from far away.`);
  } else {
    lines.push(`${title} opens around you. A ${being} pretends to be furniture near a ${sceneObject} that will not stop pulsing.`);
    lines.push(`You are ${depth} layers down. The last exit folded itself into the wallpaper.`);
  }

  if (prior && rng() > 0.45) {
    lines.push(`Something from ${prior.toLowerCase()} followed you here as ${pick(rng, ["a hum", "a stain", "a name", "a small weather system"])}.`);
  }
  if (pocket) {
    lines.push(`The ${pocket.replaceAll("-", " ")} in your pocket turns warm and points at the next wrong door.`);
  }
  if (spark && depth > 3 && rng() > 0.55) {
    lines.push(`Your first spark, "${spark}", is still somewhere ahead of you.`);
  }
  if (tier !== "common") {
    lines.push(`This is a ${tier} room. The machine is trying to act casual about it.`);
  }
  if (safeMode === "game" && depth > 0) {
    lines.push("Quest log updated, though nobody admits writing the quest.");
  }
  if (safeMode === "museum") {
    lines.push("A tiny placard insists this room was acquired under suspicious circumstances.");
  }
  return lines.join(" ");
}

function buildArtifact(rng, object, being) {
  const templates = [
    `Under a label that says do not touch: a ${object}. When you lean closer, a tiny label appears: "${pick(rng, universal.endings)}."`,
    `Someone left a ${object} here like they meant to come back. It warms in your pocket when you hesitate.`,
    `The ${object} is not listed on any map. It hums when your cursor gets near.`,
    `A ${being} slides a ${object} toward you without making eye contact.`
  ];
  return pick(rng, templates);
}

function buildWhisper(rng, being, object, rule, signal) {
  const templates = [
    () => `"${pick(rng, universal.whispers)}"`,
    () => `"The ${object} repeats: ${pick(rng, universal.endings)}."`,
    () => `"${being} says: ${rule.toLowerCase()}"`,
    () => `"${signal} signal: ${pick(rng, universal.whispers).toLowerCase()}"`
  ];
  return pick(rng, templates)();
}

function buildChoices({ rng, seed, bank, mode, depth, reroll, rule, signal, being, item, trail, isLoop }) {
  const allModes = Object.keys(banks);
  const exitTypes = ["place", "being", "object", "rule", "signal"];
  const choices = Array.from({ length: 4 }, (_, index) => {
    const exitType = pick(rng, exitTypes);
    const ending = pick(rng, universal.endings);
    const verb = pick(rng, universal.verbs);
    const target = pick(rng, [...bank.places, ...bank.objects, ...bank.beings]);
    const otherMode = pick(rng, allModes.filter((candidate) => candidate !== mode));
    const nextMode = rng() < 0.1 ? otherMode : mode;
    const labelByType = {
      place: `${titleCase(verb)} the ${target}`,
      being: `Ask the ${being} about the ${item.name}`,
      object: `Investigate the ${target}`,
      rule: `Obey the rule: ${rule.replace(/\.$/, "").slice(0, 42)}`,
      signal: `Follow the ${signal} signal`
    };
    return {
      label: labelByType[exitType],
      hint: `${titleCase(ending)}. Layer ${depth + 1}.`,
      seed: slugify(`${seed}:${exitType}:${index}:${target}:${reroll}`) || randomSeed("choice"),
      nextMode
    };
  });

  if (trail.length >= 3) {
    choices[0] = {
      label: `Return toward ${trail[trail.length - 3]}`,
      hint: `The loop notices. Layer ${depth + 1}.`,
      seed: slugify(`${seed}:loop:${trail[trail.length - 3]}:${reroll}`),
      nextMode: mode
    };
  }

  if (isLoop) {
    choices[1] = {
      label: "Break the loop before it learns your route",
      hint: `The room blinks first. Layer ${depth + 1}.`,
      seed: slugify(`${seed}:break-loop:${depth}:${reroll}`),
      nextMode: mode
    };
  }

  return choices;
}

function createPlace({ seed, mode, depth, spark, trail, reroll, pocket }) {
  const safeMode = banks[mode] ? mode : "dream";
  const bank = banks[safeMode];
  const rng = makeRng(hashString(`${seed}:${safeMode}:${depth}:${spark}:${trail.join(">")}:${reroll}:${pocket}`));
  const mood = pick(rng, universal.moods);
  const place = composeName(rng, bank);
  const being = pick(rng, bank.beings);
  const sceneObject = pick(rng, bank.objects);
  let foundObject = pick(rng, bank.objects);
  if (foundObject === sceneObject) foundObject = pick(rng, bank.objects);
  const rule = pick(rng, bank.rules);
  let signal = pick(rng, bank.signals);
  const code = hashString(seed || randomSeed("empty")).toString(16).slice(0, 6).padStart(6, "0");
  const tier = rollTier(seed, depth, reroll);
  const item = makeItem(foundObject, safeMode, seed, code);
  const isLoop = trail.includes(title) || seed.includes("loop");
  const titlePatterns = [
    () => `The ${titleCase(mood)} ${titleCase(place)}`,
    () => `The ${titleCase(place)} Where ${titleCase(being)} Wait`,
    () => `Room ${code}: ${titleCase(place)}`,
    () => `The ${titleCase(foundObject)} Room`
  ];
  let title = depth === 0 && spark ? titleCase(spark) : pick(rng, titlePatterns)();
  let type = depth > 20 ? "basement of the internet" : depth > 8 ? "deep layer" : pick(rng, ["hidden room", "portal", "strange exhibit", "side quest", "living map", "threshold"]);
  let accent = pick(rng, accents);

  if (tier === "uncommon") type = "glimmering chamber";
  if (tier === "rare") {
    type = "rare chamber";
    signal = "rare";
    accent = ["#ffd36a", "#ff6fd8"];
  }
  if (tier === "legendary") {
    title = `The Legendary ${title.replace(/^The /, "")}`;
    type = "legendary nexus";
    signal = "legendary";
    accent = ["#ffd36a", "#8dffb3"];
  }
  if (isLoop) {
    type = "loop room";
    signal = "looped";
    accent = ["#ff9f6e", "#ffd36a"];
  }

  const nextTrail = [...trail, title].slice(-MAX_TRAIL);
  let body = buildBody({ rng, safeMode, title, being, sceneObject, depth, spark, trail, pocket, tier });
  if (isLoop) {
    body += " You have been here before, but the furniture has moved one inch closer to the exit.";
  }
  const artifact = buildArtifact(rng, foundObject, being);
  const whisper = buildWhisper(rng, being, foundObject, rule, signal);
  const choices = buildChoices({ rng, seed, bank, mode: safeMode, depth, reroll, rule, signal, being, item, trail, isLoop });
  const examinations = buildExaminations(rng, foundObject, being, signal);
  const secretExit = hashString(`secret:${seed}:${depth}`) % 5 === 0;

  if (tier === "rare" || tier === "legendary") {
    choices.push({
      label: "Open the small door with no frame",
      hint: `A hidden exit wakes up. Layer ${depth + 1}.`,
      seed: slugify(`${seed}:hidden:${tier}:${reroll}`),
      nextMode: safeMode
    });
  }

  return {
    seed,
    mode: safeMode,
    depth,
    spark,
    pocket,
    trail: nextTrail,
    title,
    type,
    code,
    signal,
    tier,
    reroll,
    body,
    artifact,
    rule,
    whisper,
    choices,
    accent,
    item,
    examinations,
    secretExit,
    isLoop
  };
}

function defaultSave() {
  return {
    version: 1,
    inventory: [],
    achievements: {},
    visitedRooms: [],
    stats: {
      roomsVisited: 0,
      maxDepth: 0,
      modesVisited: [],
      rareRoomsFound: 0,
      rerollsUsed: 0
    }
  };
}

function loadSave() {
  try {
    const raw = JSON.parse(localStorage.getItem(STORAGE_KEYS.save) || "{}");
    return {
      ...defaultSave(),
      ...raw,
      stats: { ...defaultSave().stats, ...(raw.stats || {}) },
      inventory: Array.isArray(raw.inventory) ? raw.inventory.slice(0, MAX_INVENTORY) : [],
      achievements: raw.achievements && typeof raw.achievements === "object" ? raw.achievements : {},
      visitedRooms: Array.isArray(raw.visitedRooms) ? raw.visitedRooms.slice(-250) : []
    };
  } catch {
    return defaultSave();
  }
}

function saveGame(save) {
  localStorage.setItem(STORAGE_KEYS.save, JSON.stringify(save));
}

function updateSave(mutator) {
  const save = loadSave();
  mutator(save);
  checkAchievements(save);
  saveGame(save);
  updateProgressUi(save);
  return save;
}

function checkAchievements(save) {
  achievements.forEach((achievement) => {
    if (!save.achievements[achievement.id] && achievement.test(save)) {
      save.achievements[achievement.id] = { title: achievement.title, unlockedAt: new Date().toISOString() };
      showToast(`achievement: ${achievement.title}`);
    }
  });
}

function recordRoomVisit(place) {
  updateSave((save) => {
    const visitId = `${place.code}:${place.depth}:${place.reroll || "0"}`;
    if (!save.visitedRooms.includes(visitId)) {
      save.visitedRooms.push(visitId);
      save.visitedRooms = save.visitedRooms.slice(-250);
      save.stats.roomsVisited += 1;
      save.stats.maxDepth = Math.max(save.stats.maxDepth, place.depth);
      if (!save.stats.modesVisited.includes(place.mode)) save.stats.modesVisited.push(place.mode);
      if (place.tier === "rare" || place.tier === "legendary") save.stats.rareRoomsFound += 1;
    }
  });
}

function updateProgressUi(save = loadSave()) {
  elements.inventoryCount.textContent = `${save.inventory.length}/${MAX_INVENTORY}`;
  elements.achievementCount.textContent = Object.keys(save.achievements).length;
}

function renderFromUrl(options = {}) {
  const params = getParams();
  if (!params.seed) {
    currentPlace = null;
    elements.siteHeader.classList.remove("exploring");
    elements.homePanel.classList.remove("hidden");
    elements.explorePanel.classList.add("hidden");
    document.title = "Deeper | Infinite Curiosity Machine";
    updateContinueButton();
    return;
  }

  currentPlace = createPlace(params);
  renderPlace(currentPlace, options);
}

function renderPlace(place, options = {}) {
  const save = loadSave();
  elements.siteHeader.classList.add("exploring");
  elements.homePanel.classList.add("hidden");
  elements.explorePanel.classList.remove("hidden");
  elements.depthValue.textContent = place.depth;
  elements.modeValue.textContent = place.mode;
  elements.signalValue.textContent = place.signal;
  elements.pocketValue.textContent = place.pocket ? place.pocket.replaceAll("-", " ") : "nothing";
  elements.placeType.textContent = place.tier === "common" ? place.type : `${place.tier} ${place.type}`;
  elements.placeCode.textContent = `room id ${place.code}`;
  elements.placeTitle.textContent = place.title;
  elements.placeBody.textContent = place.body;
  elements.artifactText.textContent = place.artifact;
  elements.ruleText.textContent = place.rule;
  elements.whisperText.textContent = place.whisper;
  elements.artifactSecretText.classList.add("hidden");
  elements.artifactSecretText.textContent = "";
  elements.examineArtifactButton.textContent = "examine";
  elements.takeItemButton.disabled = save.inventory.some((item) => item.id === place.item.id) || save.inventory.length >= MAX_INVENTORY;
  elements.takeItemButton.textContent = save.inventory.some((item) => item.id === place.item.id) ? "artifact kept" : "take artifact";

  const headings = modeMeta[place.mode].headings;
  elements.artifactHeading.textContent = headings[0];
  elements.ruleHeading.textContent = headings[1];
  elements.whisperHeading.textContent = headings[2];

  document.title = `${place.title} | Deeper`;
  document.body.dataset.mode = place.mode;
  document.body.dataset.tier = place.tier;
  document.documentElement.style.setProperty("--accent-a", place.accent[0]);
  document.documentElement.style.setProperty("--accent-b", place.accent[1]);
  document.documentElement.style.setProperty("--depth-factor", Math.min(place.depth / 20, 1).toFixed(2));

  elements.placeCard.className = `place-card tier-${place.tier}`;
  if (place.isLoop) elements.placeCard.classList.add("is-loop");
  if (!prefersReducedMotion()) {
    elements.placeCard.classList.remove("is-entering");
    void elements.placeCard.offsetWidth;
    elements.placeCard.classList.add("is-entering");
  }

  renderTrail(place.trail);
  renderChoices(place);
  recordRoomVisit(place);
  rememberLastUrl();
  appendJournal(place);
  updateProgressUi();
  elements.routeAnnouncer.textContent = `${place.title}, ${place.depth} layers down.`;

  if (options.scrollToPlace) scrollToPlace();
  if (options.focusTitle) elements.placeTitle.focus({ preventScroll: true });
}

function renderTrail(trail) {
  elements.trailList.innerHTML = "";
  trail.forEach((item, index) => {
    const li = document.createElement("li");
    li.textContent = item;
    if (index === trail.length - 1) li.classList.add("is-current");
    elements.trailList.appendChild(li);
  });
}

function renderChoices(place) {
  elements.choiceGrid.innerHTML = "";
  place.choices.forEach((choice, index) => {
    const button = document.createElement("button");
    button.className = "choice-card";
    button.type = "button";
    button.dataset.shortcut = String(index + 1);
    button.innerHTML = `<strong>${escapeHtml(choice.label)}</strong><span>${escapeHtml(choice.hint)}</span><em>${index + 1}</em>`;
    button.addEventListener("click", () => chooseExit(place, choice));
    elements.choiceGrid.appendChild(button);
  });
}

function revealSecretExit(place) {
  if (!place.secretExit || place.choices.some((choice) => choice.secret)) return;
  place.choices.push({
    label: "Crawl through the small door under the artifact",
    hint: `A secret path opens. Layer ${place.depth + 1}.`,
    seed: slugify(`${place.seed}:artifact-secret:${place.code}`),
    nextMode: place.mode,
    secret: true
  });
  renderChoices(place);
  showToast("secret exit revealed");
}

function chooseExit(place, choice) {
  navigator.vibrate?.(8);
  const nextPocket = slugify(place.item.name);
  navigateToPlace({
    seed: choice.seed,
    mode: choice.nextMode || place.mode,
    depth: place.depth + 1,
    spark: place.spark || place.title,
    trail: place.trail,
    reroll: "0",
    pocket: nextPocket
  });
}

function scrollToPlace() {
  elements.placeCard.scrollIntoView({
    behavior: prefersReducedMotion() ? "auto" : "smooth",
    block: "start"
  });
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (char) => {
    const entities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      "\"": "&quot;",
      "'": "&#039;"
    };
    return entities[char];
  });
}

function showToast(message) {
  clearTimeout(toastTimer);
  elements.toast.textContent = message;
  elements.toast.classList.add("visible");
  toastTimer = setTimeout(() => elements.toast.classList.remove("visible"), TOAST_MS);
}

function safeSameOriginPath(url) {
  if (!url) return null;
  try {
    const parsed = new URL(url, window.location.origin);
    if (parsed.origin !== window.location.origin) return null;
    if (!["http:", "https:"].includes(parsed.protocol)) return null;
    return `${parsed.pathname}${parsed.search}`;
  } catch {
    return null;
  }
}

function normalizeSavedPlace(raw) {
  if (!raw || typeof raw !== "object") return null;
  const url = safeSameOriginPath(raw.url);
  if (!url) return null;
  return {
    title: clampString(raw.title || "Untitled room", 120),
    depth: clampNumber(raw.depth || "0", 0, 999),
    mode: banks[raw.mode] ? raw.mode : "dream",
    url,
    savedAt: clampString(raw.savedAt || new Date().toISOString(), 40)
  };
}

function getSavedPlaces() {
  try {
    const parsed = JSON.parse(localStorage.getItem(STORAGE_KEYS.saved) || "[]");
    if (!Array.isArray(parsed)) return [];
    return parsed.map(normalizeSavedPlace).filter(Boolean).slice(0, MAX_SAVED);
  } catch {
    return [];
  }
}

function setSavedPlaces(places) {
  localStorage.setItem(STORAGE_KEYS.saved, JSON.stringify(places.slice(0, MAX_SAVED)));
}

function saveCurrentPlace() {
  if (!currentPlace) return;
  const safeUrl = safeSameOriginPath(window.location.href);
  if (!safeUrl) return;
  const places = getSavedPlaces().filter((place) => place.url !== safeUrl);
  places.unshift({
    title: currentPlace.title,
    depth: currentPlace.depth,
    mode: currentPlace.mode,
    url: safeUrl,
    savedAt: new Date().toISOString()
  });
  setSavedPlaces(places);
  showToast("room pocketed. only you can find it again.");
}

function renderSavedPlaces() {
  const places = getSavedPlaces();
  elements.savedList.innerHTML = "";
  if (places.length === 0) {
    const empty = document.createElement("div");
    empty.className = "empty-state";
    empty.textContent = "Your pockets are empty. Go deeper, then keep the rooms that follow you home.";
    elements.savedList.appendChild(empty);
    return;
  }

  places.forEach((place) => {
    const item = document.createElement("div");
    item.className = "saved-item";
    const text = document.createElement("div");
    const title = document.createElement("strong");
    title.textContent = place.title;
    const meta = document.createElement("span");
    meta.textContent = `${place.mode} mode, ${place.depth} layers down`;
    const link = document.createElement("a");
    link.href = place.url;
    link.textContent = "open";
    text.append(title, meta);
    item.append(text, link);
    elements.savedList.appendChild(item);
  });
}

function getJournalEntries() {
  try {
    const parsed = JSON.parse(localStorage.getItem(STORAGE_KEYS.journal) || "[]");
    return Array.isArray(parsed) ? parsed.slice(-80).reverse() : [];
  } catch {
    return [];
  }
}

function appendJournal(place) {
  const safeUrl = safeSameOriginPath(window.location.href);
  if (!safeUrl) return;
  const entries = getJournalEntries().reverse();
  const entryId = `${place.code}:${place.depth}:${safeUrl}`;
  if (entries.at(-1)?.id === entryId) return;
  entries.push({
    id: entryId,
    title: place.title,
    depth: place.depth,
    mode: place.mode,
    tier: place.tier,
    url: safeUrl,
    visitedAt: new Date().toISOString()
  });
  localStorage.setItem(STORAGE_KEYS.journal, JSON.stringify(entries.slice(-80)));
}

function renderJournal() {
  const entries = getJournalEntries();
  elements.journalList.innerHTML = "";
  if (entries.length === 0) {
    const empty = document.createElement("div");
    empty.className = "empty-state";
    empty.textContent = "No rooms in the journal yet. Open a door and the machine will start taking notes.";
    elements.journalList.appendChild(empty);
    return;
  }

  entries.forEach((entry) => {
    const item = document.createElement("div");
    item.className = "saved-item";
    const text = document.createElement("div");
    const title = document.createElement("strong");
    title.textContent = entry.title;
    const meta = document.createElement("span");
    meta.textContent = `${entry.mode} mode, ${entry.depth} layers down${entry.tier !== "common" ? `, ${entry.tier}` : ""}`;
    const link = document.createElement("a");
    link.href = entry.url;
    link.textContent = "reopen";
    text.append(title, meta);
    item.append(text, link);
    elements.journalList.appendChild(item);
  });
}

function rememberLastUrl() {
  const safeUrl = safeSameOriginPath(window.location.href);
  if (safeUrl) localStorage.setItem(STORAGE_KEYS.lastUrl, safeUrl);
}

function updateContinueButton() {
  const lastUrl = localStorage.getItem(STORAGE_KEYS.lastUrl);
  elements.continueButton.classList.toggle("hidden", !safeSameOriginPath(lastUrl));
}

function takeCurrentItem() {
  if (!currentPlace) return;
  updateSave((save) => {
    if (save.inventory.some((item) => item.id === currentPlace.item.id)) return;
    if (save.inventory.length >= MAX_INVENTORY) {
      showToast("your pockets are full");
      return;
    }
    save.inventory.push({
      ...currentPlace.item,
      acquiredAt: new Date().toISOString(),
      acquiredDepth: currentPlace.depth
    });
    showToast(`${currentPlace.item.name} added to your pockets`);
  });
  renderPlace(currentPlace);
}

function examineCurrentArtifact() {
  if (!currentPlace) return;
  const index = clampNumber(elements.examineArtifactButton.dataset.index || "0", 0, 99);
  const line = currentPlace.examinations[index % currentPlace.examinations.length];
  elements.artifactSecretText.textContent = line;
  elements.artifactSecretText.classList.remove("hidden");
  elements.examineArtifactButton.dataset.index = String(index + 1);
  elements.examineArtifactButton.textContent = index >= 1 ? "examine again" : "examine deeper";
  if (currentPlace.secretExit && index >= 1) revealSecretExit(currentPlace);
}

function selectedMode() {
  const selected = document.querySelector("input[name='mode']:checked");
  return selected ? selected.value : "dream";
}

function startJourney(spark, mode) {
  navigateToPlace({
    seed: slugify(`${spark}-${randomSeed("start")}`),
    mode,
    depth: 0,
    spark,
    trail: [],
    reroll: "0",
    pocket: ""
  });
}

elements.launchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const spark = elements.sparkInput.value.trim() || "the first impossible door";
  startJourney(spark, selectedMode());
});

elements.randomPortalButton.addEventListener("click", () => {
  const modes = Object.keys(banks);
  const mode = modes[Math.floor(Math.random() * modes.length)];
  startJourney("the unmarked door", mode);
});

elements.rerollButton.addEventListener("click", () => {
  if (!currentPlace) return;
  updateSave((save) => {
    save.stats.rerollsUsed += 1;
  });
  navigateToPlace({
    seed: currentPlace.seed,
    mode: currentPlace.mode,
    depth: currentPlace.depth,
    spark: currentPlace.spark,
    trail: currentPlace.trail.slice(0, -1),
    reroll: String(clampNumber(getParams().reroll || "0", 0, 9999) + 1),
    pocket: currentPlace.pocket
  });
});

elements.savePlaceButton.addEventListener("click", saveCurrentPlace);
elements.takeItemButton.addEventListener("click", takeCurrentItem);
elements.examineArtifactButton.addEventListener("click", examineCurrentArtifact);

elements.copyLinkButton.addEventListener("click", async () => {
  try {
    if (navigator.share) {
      await navigator.share({ title: document.title, url: window.location.href });
      showToast("door shared");
      return;
    }
    await navigator.clipboard.writeText(window.location.href);
    showToast("door copied. paste it anywhere.");
  } catch {
    showToast("could not copy this door");
  }
});

elements.savedButton.addEventListener("click", () => {
  lastFocusedBeforeDialog = document.activeElement;
  renderSavedPlaces();
  elements.savedDialog.showModal();
  elements.closeSavedButton.focus();
});

elements.journalButton.addEventListener("click", () => {
  lastFocusedBeforeDialog = document.activeElement;
  renderJournal();
  elements.journalDialog.showModal();
  elements.closeJournalButton.focus();
});

elements.closeSavedButton.addEventListener("click", () => elements.savedDialog.close());
elements.closeJournalButton.addEventListener("click", () => elements.journalDialog.close());
elements.savedDialog.addEventListener("close", () => lastFocusedBeforeDialog?.focus?.());
elements.journalDialog.addEventListener("close", () => lastFocusedBeforeDialog?.focus?.());
elements.savedDialog.addEventListener("click", (event) => {
  if (event.target === elements.savedDialog) elements.savedDialog.close();
});
elements.journalDialog.addEventListener("click", (event) => {
  if (event.target === elements.journalDialog) elements.journalDialog.close();
});

$$("input[name='mode']").forEach((radio) => {
  radio.addEventListener("change", () => {
    elements.modeHelper.textContent = modeMeta[selectedMode()].helper;
  });
});

$$(".demo-stack button").forEach((button) => {
  button.addEventListener("click", () => {
    startJourney(button.dataset.spark, button.dataset.mode || "dream");
  });
});

elements.continueButton.addEventListener("click", () => {
  const lastUrl = safeSameOriginPath(localStorage.getItem(STORAGE_KEYS.lastUrl));
  if (!lastUrl) return;
  window.history.pushState({}, "", lastUrl);
  renderFromUrl({ focusTitle: true, scrollToPlace: true });
});

document.addEventListener("keydown", (event) => {
  if (!currentPlace || event.metaKey || event.ctrlKey || event.altKey) return;
  if (event.key >= "1" && event.key <= "5") {
    const choice = currentPlace.choices[Number(event.key) - 1];
    if (choice) chooseExit(currentPlace, choice);
  }
  if (event.key.toLowerCase() === "r") elements.rerollButton.click();
  if (event.key.toLowerCase() === "s") elements.savePlaceButton.click();
});

window.addEventListener("popstate", () => renderFromUrl({ focusTitle: true }));

updateProgressUi();
updateContinueButton();
renderFromUrl();
