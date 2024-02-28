import mongoose from 'mongoose';

const AnimeSchema = new mongoose.Schema({
  id: Number,
  code: String,
  ruName: String || null,
  enName: String || null,
  announce: String || null,
  status: String || null,
  updated: Number || null,
  lastChange: Number || null,
  type: String || null,
  genres: [String] || null,
  team: {
    voice: [String] || null,
    translator: [String] || null,
    editing: [String] || null,
    decor: [String] || null,
    timing: [String] || null,
  },
  season: {
    string: String || null,
    year: Number || null,
    weekDay: Number || null,
  },
  description: String || null,
  inFavorites: Number || null,
  blocked: {
    blocked: Boolean || null,
    bakanim: Boolean || null,
  },
  player: {
    host: String || null,
    episodes: {
      first: Number || null,
      last: Number || null,
      string: String || null,
    },
    list: [
      {
        episode: Number || null,
        uuid: String || null,
        createdTimestamp: Number || null,
        preview: String || null,
        skips: {
          opening: [Number] || null,
          ending: [Number] || null,
        },
        hls: {
          fhd: String || null,
          hd: String || null,
          sd: String || null,
        },
      },
    ],
    rutube: Object || null,
  },
  torrents: {
    episodes: {
      first: Number || null,
      last: Number || null,
      string: String || null,
    },
    list: [
      {
        torrentId: Number || null,
        episodes: {
          first: Number || null,
          last: Number || null,
          string: String || null,
        },
        quality: {
          string: String || null,
          type: String || null,
          resolution: String || null,
          encoder: String || null,
          lqAudio: String || null,
        },
        leechers: Number || null,
        seeders: Number || null,
        downloads: Number || null,
        totalSize: Number || null,
        sizeString: String || null,
        url: String || null,
        magnet: String || null,
        uploadedTimestamp: Number || null,
        hash: String || null,
        metadata: String || null,
        rawBase64File: String || null,
      },
    ],
  },
});

export default mongoose.model('Anime', AnimeSchema);
