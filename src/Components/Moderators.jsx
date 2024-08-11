import { useState } from 'react';
import '../Styles/Moderators.css';
import { extractColors } from 'extract-colors';
import { useEffect } from 'react';

function moderator({ name, img, color, displayname }) {
    console.log(color, name);
    return (
        <div className={`moderator ${name} col al-ctr jc-ctr gp-24`}
            style={{ backgroundColor: color }}
        >
            <img src={img} alt="" />
            <p>{displayname}</p>
        </div>
    )
}

export default function Moderators() {
    const mods = [
        { name: 'itachi', img: 'itachi.png', displayname: 'ItachiDeiyo' },
        { name: 'sahil', img: 'sahil.png', displayname: 'Myagent' }
    ]
    const [colors, setColors] = useState({
        itachi: null,
        sahil: null
    });
    useEffect(() => {
        function getColors() {
            extractColors('itachi.png').then((colors) => {
                setColors((prev) => {
                    return {
                        ...prev,
                        itachi: colors[0].hex
                    }
                })
            })
            extractColors('sahil.png').then((colors) => {
                setColors((prev) => {
                    return {
                        ...prev,
                        sahil: colors[0].hex
                    }
                })
            })
        }

        getColors();
    }, [colors.itachi, colors.sahil])
    return (
        <div className="mods-container col al-ctr jc-ctr gp-24">
            <div className="mod-header row">
                <p>Meet the Mobs</p>
            </div>

            <div className="mod-container row gp-16 al-ctr jc-ctr">
                {
                    mods.map((mod) => {
                        return moderator({ name: mod.name, img: mod.img, color: colors[mod.name], displayname: mod.displayname });
                    })
                }
                {/* <div className="mod-one moderator itachi col al-ctr jc-ctr gp-24">
                    <img src="itachi.png" alt="" />
                    <p>itachideiyo</p>
                </div>
                <div className="mod-two moderator sahil al-ctr jc-ctr col gp-24">
                    <img src="sahil.png" alt="" />
                    <p>myagent</p>
                </div> */}
            </div>
        </div>
    )
}
