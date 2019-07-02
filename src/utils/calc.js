export const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

export const randomFloat = (min, max) => Math.random() * (max - min) + min

export const randomMinusOrPlus = () => (Math.random() > 0.5 ? -1 : 1)

export const mapRange = (value, start1, stop1, start2, stop2) =>
  start2 + (stop2 - start2) * ((value - start1) / (stop1 - start1))

export const lerp = (a, b, n) => (1 - n) * a + n * b
