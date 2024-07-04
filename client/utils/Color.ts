const tintColorLight = '#0a7ea4';
const tintColorDark = '#fff';

interface IColor {
  text: string;
  background: string;
  tint: string;
  icon: string;
  tabIconDefault: string;
  tabIconSelected: string;
  tikadiBorderColor: string;
  tikadiCircleBg: string;
  tikadiShadowColor: string;
}

export const Colors: { light: IColor; dark: IColor } = {
  light: {
    text: '#11181C',
    background: '#fff',
    tint: tintColorLight,
    icon: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: tintColorLight,
    tikadiBorderColor: '#181818',
    tikadiCircleBg: '#c7c7c7',
    tikadiShadowColor: '#000',
  },
  dark: {
    text: '#ECEDEE',
    background: '#151718',
    tint: tintColorDark,
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,
    tikadiBorderColor: '#a8a8a8',
    tikadiCircleBg: '#434343',
    tikadiShadowColor: '#fff',
  },
};
