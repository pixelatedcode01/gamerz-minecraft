import { useState } from 'react';
import '../Styles/MainHeader.css';
import '@material/web/ripple/ripple.js';

function ActionButton({ item, handleActionClick }) {
    return (
        <a href={item?.link} target='_blank'>
            <div className={`${item.class[0]} button ${item.active ? 'active' : ''} row al-ctr jc-ctr gp-12`}
            onMouseOver={() => handleActionClick(item.id)}
            >
                <md-ripple></md-ripple>
                {
                    item.url ?
                        <img className={item.class[1]} src={item?.url} alt="" />
                        :
                        <span className={`material-symbols-rounded ${item.class[1]}`}>{item.icon}</span>
                }
                <div className="tooltip row">
                    <p>{item.name}</p>
                </div>
            </div>
        </a>
    )

}

export default function MainHeader() {
    const [actions, setActions] = useState([
        {
            id: 1,
            name: 'Join Discord Server',
            class: ['join-discord', 'discord-logo'],
            url: 'discord-logo.svg',
            link: 'https://discord.gg/AyUcdMCg',
            active: false
        },
        {
            id: 2,
            name: 'Support',
            class: ['support', 'support-icon'],
            icon: 'volunteer_activism',
            link: '',
            active: false
        }

    ]);
    function handleActionClick(id) {
        let newActions = actions.map((item) => {
            if (item.id === id) {
                item.active = !item.active;
            }
            return item;
        })
        setActions(newActions);
    }
    return (
        <div className="main-heading-container col al-ctr jc-ctr gp-4">
            <div className="title row">
                <p className='heading'>GAMER</p>
            </div>
            <div className="sub-title row">
                <p className='sub-heading'>Minecraft Server</p>
            </div>
            <div className="navigation row gp-16">
                {
                    actions.map((item) => (
                        <ActionButton key={item.id} item={item} handleActionClick={handleActionClick} />
                    ))
                }
                {/* <a href="https://discord.gg/AyUcdMCg" target='_blank'>
                    <div className="join-discord button active row al-ctr jc-ctr gp-12">
                        <md-ripple></md-ripple>
                        <img className="discord-logo" src="discord-logo.svg" alt="" />
                        <div className="tooltip row" tabIndex={1}>
                            <p>Join Discord Server</p>
                        </div>
                    </div>
                </a> */}
                {/* <div className="support button row al-ctr jc-ctr gp-12">
                    <md-ripple></md-ripple>
                    <span className="material-symbols-rounded support-icon">volunteer_activism</span>
                    <div className="tooltip row" tabIndex={1}>
                        <p>Support</p>
                    </div>
                </div> */}
            </div>
        </div>
    )
}
