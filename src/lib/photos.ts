export const SITE = {
  name: "Alpenglow Fine Art",
  shortName: "Alpenglow",
  tagline: "Mountain light, made to last",
  artist: "Elias Ward",
  email: "studio@alpenglowfineart.com",
  phone: "(970) 555 0148",
  studio: "Ridgway, Colorado",
  instagram: "https://instagram.com/alpenglowfineart",
  designer: {
    label: "Designed By M-Webcraft Studio",
    url: "https://m-webcraftstudio.space-z.ai/",
  },
};

export type PhotoSize = {
  label: string;
  inches: string;
  price: number;
};

export type Photo = {
  slug: string;
  title: string;
  location: string;
  year: number;
  src: string;
  ratio: "landscape" | "portrait" | "square" | "pano";
  story: string;
  featured?: boolean;
};

const CDN = "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt";

export const PRINT_SIZES: PhotoSize[] = [
  { label: "Petite", inches: "12 x 18 in", price: 245 },
  { label: "Classic", inches: "16 x 24 in", price: 395 },
  { label: "Gallery", inches: "24 x 36 in", price: 645 },
  { label: "Statement", inches: "30 x 45 in", price: 945 },
  { label: "Oversize", inches: "40 x 60 in", price: 1545 },
];

export const PHOTOS: Photo[] = [
  {
    slug: "stillwater-gold",
    title: "Stillwater Gold",
    location: "Cascade Range, Washington",
    year: 2024,
    src: `${CDN}/35cbfede95a7.jpg`,
    ratio: "landscape",
    story:
      "The sky caught fire just as the sun cleared the ridge, and for a few minutes the whole basin burned with it. I made four frames before the color broke apart. This was the one worth keeping.",
    featured: true,
  },
  {
    slug: "moraine-morning",
    title: "Moraine Morning",
    location: "Banff, Alberta",
    year: 2023,
    src: `${CDN}/e61f549fc308.jpg`,
    ratio: "landscape",
    story:
      "Ten peaks and one very cold morning. I waited three days for the wind to lie down, and on the last morning the lake finally gave me this. By nine the water was choppy again and the moment was gone.",
    featured: true,
  },
  {
    slug: "first-light-at-alpenglow-ridge",
    title: "First Light at Alpenglow Ridge",
    location: "Sierra Nevada, California",
    year: 2024,
    src: `${CDN}/a30bbcf2e2b2.jpg`,
    ratio: "landscape",
    story:
      "Fresh snow fell the night before, and the pond below the peak froze still as glass. Autumn and winter in the same frame, for about twenty minutes. Photographs like this are why I hike in the dark.",
    featured: true,
  },
  {
    slug: "alpenglow-hour",
    title: "Alpenglow Hour",
    location: "Grand Teton National Park, Wyoming",
    year: 2023,
    src: `${CDN}/6367a000a87a.jpg`,
    ratio: "landscape",
    story:
      "This is the light the studio is named for. Alpenglow happens for a few minutes after the sun drops below the horizon, when the peaks catch it and the valley is already in shadow. Somebody built the driftwood teepee on the shore years ago and it keeps standing. The wind stayed down and the whole range turned the color of embers.",
    featured: true,
  },
  {
    slug: "valley-of-the-sleeping-giants",
    title: "Valley of the Sleeping Giants",
    location: "Wasatch Range, Utah",
    year: 2024,
    src: `${CDN}/2370b0a07426.jpg`,
    ratio: "pano",
    story:
      "A summer panorama stitched from seven frames. The trailhead sign says two miles. It feels a lot further at five in the morning with a tripod and a full pack on your back.",
  },
  {
    slug: "painted-meadow",
    title: "Painted Meadow",
    location: "Crested Butte, Colorado",
    year: 2023,
    src: `${CDN}/7f046587cf29.jpg`,
    ratio: "landscape",
    story:
      "Crested Butte calls itself the wildflower capital of Colorado, and on a day like this it is hard to argue. The paintbrush usually peaks in mid July, and that year it peaked exactly on schedule.",
    featured: true,
  },
  {
    slug: "evening-bloom",
    title: "Evening Bloom",
    location: "Mount Rainier, Washington",
    year: 2022,
    src: `${CDN}/5d2b14c4b0f1.jpg`,
    ratio: "landscape",
    story:
      "Indian paintbrush in the last light of the day, with the summit still holding winter snow in August. The flowers close up fast once the sun drops, so there is no waiting around for second chances.",
  },
  {
    slug: "green-ridge-morning",
    title: "Green Ridge Morning",
    location: "Gunnison Valley, Colorado",
    year: 2023,
    src: `${CDN}/bf2568705d76.jpg`,
    ratio: "landscape",
    story:
      "Rain the night before, and the whole meadow looked like it had been scrubbed clean. This is ranch country at its best, green up to the treeline with the hay still standing.",
  },
  {
    slug: "where-fall-begins",
    title: "Where Fall Begins",
    location: "Kebler Pass, Colorado",
    year: 2024,
    src: `${CDN}/4b0b299fe586.jpg`,
    ratio: "square",
    story:
      "The first hard frost of the season always turns the high groves before the valley floor. I drove up on a hunch that the color had started, and the hunch turned out better than I deserved.",
  },
  {
    slug: "aspen-cathedral",
    title: "Aspen Cathedral",
    location: "White River National Forest, Colorado",
    year: 2023,
    src: `${CDN}/33abe0236593.jpg`,
    ratio: "square",
    story:
      "A single aspen grove is really one living thing, every trunk sharing the same root system under the floor. Walking into this one in October feels like stepping into a room with golden walls.",
  },
  {
    slug: "snowmass-gold",
    title: "Snowmass Gold",
    location: "Snowmass Village, Colorado",
    year: 2024,
    src: `${CDN}/ad33d02a3899.jpg`,
    ratio: "landscape",
    story:
      "This ridge gets photographed thousands of times every fall, mostly from the road. The light you actually want only shows up in the last ten minutes before sunset, and you have to be uphill to catch it.",
    featured: true,
  },
  {
    slug: "the-walk-home",
    title: "The Walk Home",
    location: "Aspen, Colorado",
    year: 2022,
    src: `${CDN}/7e519b7ff4e3.jpg`,
    ratio: "landscape",
    story:
      "A ranch road I have walked a hundred times. That evening the leaves were at peak and still hanging on, which almost never happens. Two days later a storm took every single one of them.",
  },
  {
    slug: "autumn-in-layers",
    title: "Autumn in Layers",
    location: "Grand Mesa, Colorado",
    year: 2023,
    src: `${CDN}/e71a33ca0161.jpg`,
    ratio: "landscape",
    story:
      "Oak brush, aspen, spruce, and the first snow, all stacked one above the other. Autumn in the Rockies is less a season than a staircase, and you have to climb it to keep up.",
  },
  {
    slug: "backlit-aspens",
    title: "Backlit Aspens",
    location: "Steamboat Springs, Colorado",
    year: 2022,
    src: `${CDN}/9754ca16d083.jpg`,
    ratio: "landscape",
    story:
      "Pointing a camera straight into the sun is supposed to be a mistake. Nobody told the aspens. Some of my favorite frames came from breaking that rule on purpose.",
  },
  {
    slug: "old-gold",
    title: "Old Gold",
    location: "Ohio Creek, Colorado",
    year: 2023,
    src: `${CDN}/0402f3168dcd.jpg`,
    ratio: "square",
    story:
      "Late October, after most of the leaves have let go. What is left is bark and bone, and the low sun doing its best with what remains. There is a quiet in the groves then that September never has.",
  },
  {
    slug: "teton-country",
    title: "Teton Country",
    location: "Grand Teton National Park, Wyoming",
    year: 2024,
    src: `${CDN}/0f73f8af9eac.jpg`,
    ratio: "landscape",
    story:
      "The Tetons never slowly appear on the horizon. They step straight up out of the valley floor, six thousand feet of it, and they rearrange your sense of scale in about a second.",
  },
  {
    slug: "grazing-under-the-peaks",
    title: "Grazing Under the Peaks",
    location: "Grand Teton National Park, Wyoming",
    year: 2023,
    src: `${CDN}/5395b039933e.jpg`,
    ratio: "landscape",
    story:
      "The horses belonged to the ranch down the road, and they were far more interested in breakfast than in the sunrise. Which, when you think about it, is a fair way to live.",
    featured: true,
  },
  {
    slug: "moulton-at-dusk",
    title: "Moulton at Dusk",
    location: "Mormon Row, Wyoming",
    year: 2022,
    src: `${CDN}/36655edeb55c.jpg`,
    ratio: "landscape",
    story:
      "Probably the most photographed barn in America, and for good reason. I wanted it the other way around, though. Quiet, empty, nobody else around, lit from behind by a sky that was mostly finished.",
  },
  {
    slug: "storm-over-the-tetons",
    title: "Storm Over the Tetons",
    location: "Grand Teton National Park, Wyoming",
    year: 2024,
    src: `${CDN}/ac8998a19099.jpg`,
    ratio: "landscape",
    story:
      "Weather in the Tetons changes its mind every hour, so I stopped chasing clear skies a long time ago. This is what the range looks like when it means business, and I would not trade it for blue.",
  },
  {
    slug: "quiet-morning",
    title: "Quiet Morning",
    location: "Two Medicine, Montana",
    year: 2022,
    src: `${CDN}/873f187c3384.jpg`,
    ratio: "landscape",
    story:
      "No wind, no one else around, and a loon working the far shore. Some mornings the photograph is really just a souvenir of the quiet, and that is reason enough to keep it.",
  },
];

export const HERO_IMAGE = `${CDN}/35cbfede95a7.jpg`;
export const ARTIST_IMAGE = `${CDN}/d9e57abab210.jpg`;
export const ARTIST_FIELD_IMAGE = `${CDN}/d6a649165f0b.png`;
export const INTERIOR_ONE = `${CDN}/80cc2fd95a3c.jpg`;
export const INTERIOR_TWO = `${CDN}/0198a486530e.jpg`;
