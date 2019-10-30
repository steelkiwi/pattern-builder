import {RGBColor} from 'react-color'

export const getRGBAString = (color: RGBColor): string => {
  const {r, g, b, a = 1} = color;
  return `rgba(${r},${g},${b},${a})`
};

// TODO: Add SSR Support
export const downloadURI = (uri: string, name: string): void => {
  try {
    const link = document.createElement('a');
    link.download = name;
    link.href = uri;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } catch (err) {
    throw new Error('React-background-pattern-generator: We cannot support SSR yet')
  }
};

export const handleCursorOverIcon = (): void => {
  document.body.style.cursor = 'move'
};

export const handleCursorOutIcon = (): void => {
  document.body.style.cursor = 'default'
};
