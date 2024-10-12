import {TextStyle} from 'react-native';

function createTypography<
  T extends Record<
    string,
    {
      fontSize: number;
      fontWeight: TextStyle['fontWeight'];
      lineHeight: TextStyle['lineHeight'];
      letterSpacing: TextStyle['letterSpacing'];
    }
  >,
>(value: T): T {
  return value;
}

const typography = createTypography({
  'display.large': {
    fontSize: 57,
    fontWeight: 400,
    lineHeight: 64,
    letterSpacing: -0.25,
  },
  'display.medium': {
    fontSize: 45,
    fontWeight: 400,
    lineHeight: 52,
    letterSpacing: 0,
  },
  'display.small': {
    fontSize: 36,
    fontWeight: 400,
    lineHeight: 44,
    letterSpacing: 0,
  },
  'headline.large': {
    fontSize: 32,
    fontWeight: 400,
    lineHeight: 40,
    letterSpacing: 0,
  },
  'headline.medium': {
    fontSize: 28,
    fontWeight: 400,
    lineHeight: 36,
    letterSpacing: 0,
  },
  'headline.small': {
    fontSize: 24,
    fontWeight: 400,
    lineHeight: 32,
    letterSpacing: 0,
  },
  'body.large': {
    fontSize: 16,
    fontWeight: 400,
    lineHeight: 24,
    letterSpacing: 0.5,
  },
  'body.medium': {
    fontSize: 14,
    fontWeight: 400,
    lineHeight: 20,
    letterSpacing: 0.25,
  },
  'body.small': {
    fontSize: 12,
    fontWeight: 400,
    lineHeight: 16,
    letterSpacing: 0.4,
  },
  'label.large': {
    fontSize: 14,
    fontWeight: 500,
    lineHeight: 20,
    letterSpacing: 0.1,
  },
  'label.medium': {
    fontSize: 12,
    fontWeight: 500,
    lineHeight: 16,
    letterSpacing: 0.5,
  },
  'label.small': {
    fontSize: 11,
    fontWeight: 500,
    lineHeight: 16,
    letterSpacing: 0.5,
  },
  'title.large': {
    fontSize: 22,
    fontWeight: 400,
    lineHeight: 28,
    letterSpacing: 0,
  },
  'title.medium': {
    fontSize: 16,
    fontWeight: 500,
    lineHeight: 24,
    letterSpacing: 0.15,
  },
  'title.small': {
    fontSize: 14,
    fontWeight: 500,
    lineHeight: 20,
    letterSpacing: 0.1,
  },
});

export type TypographyVariant = keyof typeof typography;

export default typography;
