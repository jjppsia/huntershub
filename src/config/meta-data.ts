export type MetadataConfig = typeof metaDataConfig

export const metaDataConfig = {
  name: "Hunter's Hub Inc.",
  description:
    "Hunter's Hub Incorporated is a sourcing and headhunting company that caters to numerous clients in a multitude of industries, and has a wide-range of candidate selections to suit any of our clients' needs.",
  keywords: [
    "Hunter's Hub",
    "Hunter's Hub Inc.",
    'Recruitment',
    'Headhunting',
    'Headhunting services',
    'Recruitment agency',
    'Talent acquisition',
  ],
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
}
