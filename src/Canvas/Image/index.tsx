import React from 'react'
import { Image } from 'react-konva'
import useImage from 'use-image'

interface Props {
    width: number
    height: number
    onMouseOver:() => void
    onMouseOut:() => void
    link: string
}


const Img:React.FC<Props> = (props) => {
    const [image] = useImage(props.link);
    return (
        <Image
            {...props}
            image={image}
        />
    );
};

export default Img;