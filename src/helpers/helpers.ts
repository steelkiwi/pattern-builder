import {RGBColor} from 'react-color'

export const getRGBAString = (color: RGBColor): string => {
    const {r,g,b,a} = color;
    return `rgba(${r},${g},${b},${a})`
};

export const downloadURI = (uri: string, name: string): void => {
    const link = document.createElement('a');
    link.download = name;
    link.href = uri;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};

export const handleCursorOver = (): void => {
    document.body.style.cursor = 'move'
};

export const handleCursorOut = (): void => {
    document.body.style.cursor = 'default'
};