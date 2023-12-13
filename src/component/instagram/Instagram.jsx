import { useEffect, useState } from "react";

const Instagram = () => {
    const [img, setImg] = useState([]);
    useEffect(() => {
        fetch('./instagra.json')
            .then(res => res.json())
            .then(data => setImg(data))
    }, [])
    return (
        <div>
            {
                img.map(aimg=> console.log(aimg))
            }
        </div>
    );
};

export default Instagram;