import { atom } from 'recoil';

export const currentTrackIdState = atom({
  key: 'currentTrackIdState',
  default: "19w0DqO4ZIlhiAYg6GMXkJ",
});

export const isPlayingState = atom({
  key: 'isPlayingState',
  default: false,
});
