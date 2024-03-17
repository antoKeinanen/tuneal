export type OkQueueResponse = CurrentlyPlaying & Queue;

interface ImageObject {
  url: string;
  height: number | null;
  width: number | null;
}

interface Restrictions {
  reason: "market" | "product" | "explicit";
}

interface SimplifiedArtistObject {
  external_urls: {
    spotify: string;
  };
  href: string;
  id: string;
  name: string;
  type: "artist";
  uri: string;
}

interface Album {
  album_type: "album" | "single" | "compilation";
  total_tracks: number;
  available_markets: string[];
  external_urls: {
    spotify: string;
  };
  href: string;
  images: ImageObject[];
  name: string;
  release_date: string;
  release_date_precision: "year" | "month" | "day";
  restrictions?: Restrictions;
  type: "album";
  artists: SimplifiedArtistObject[];
}

interface ArtistObject {
  external_urls: {
    spotify?: string;
  };
  followers: {
    href: string | null;
    total?: number;
  };
  genres?: string[];
  href?: string;
  id?: string;
  images: ImageObject[];
  name?: string;
  popularity?: number;
  type?: "artist";
  uri?: string;
}

interface TrackObject {
  album: Album;
  artists: ArtistObject[];
  available_markets: string[];
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_ids: {
    isrc: string;
    ean: string;
    upc: string;
  };
  external_urls: {
    spotify: string;
  };
  href: string;
  id: string;
  is_playable: boolean;
  linked_from: unknown;
  restrictions: Restrictions;
  name: string;
  popularity: number;
  preview_url: string;
  track_number: number;
  type: "track";
  uri: string;
  is_local: boolean;
}

interface ResumePoint {
  fully_played: boolean;
  resume_position_ms: number;
}

interface CopyRightObject {
  text: string;
  type: "C" | "P";
}

interface ShowObject {
  available_markets: string[];
  copyrights: CopyRightObject[];
  description: string;
  html_description: string;
  explicit: boolean;
  external_urls: {
    spotify: string;
  };
  href: string;
  images: ImageObject[];
  is_externally_hosted: boolean;
  languages: string[];
  media_type: string;
  name: string;
  type: "show";
  uri: string;
  total_episodes: number;
}

interface EpisodeObject {
  audio_preview_url: string | null;
  description: string;
  html_description: string;
  duration_ms: number;
  explicit: boolean;
  external_urls: {
    spotify: string;
  };
  href: string;
  id: string;
  images: ImageObject[];
  is_externally_hosted: boolean;
  is_playable: boolean;
  language?: string;
  languages: string[];
  name: string;
  release_date: string;
  release_date_precision: "year" | "month" | "day";
  resume_point: ResumePoint;
  type: "episode";
  uri: string;
  restrictions: Restrictions;
  show: ShowObject;
}

type CurrentlyPlaying = TrackObject | EpisodeObject | null;

type Queue = (TrackObject | EpisodeObject)[];
