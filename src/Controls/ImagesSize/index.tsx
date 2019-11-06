import React from 'react'

interface Props {
    imageSize: number;
    changeImageSize: (value: number) => void
}


const ImagesSize:React.FC<Props> = ({imageSize, changeImageSize}) => {
    const setValueHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        changeImageSize(Number(e.target.value))
    };
    return (
        <div>
            <input value={imageSize} onChange={setValueHandler} type="number"/>
        </div>
    )
};

export default ImagesSize