import '../Styles/Moderators.css';

export default function Moderators() {
    return (
        <div className="mods-container col al-ctr jc-ctr gp-24">
            <div className="mod-header row">
                <p>Meet the Mobs</p>
            </div>
            <div className="mod-container row gp-16 al-ctr jc-ctr">
                <div className="mod-one moderator itachi col al-ctr jc-ctr gp-24">
                    <img src="itachi.png" alt="" />
                    <p>itachideiyo</p>
                </div>
                <div className="mod-two moderator sahil al-ctr jc-ctr col gp-24">
                    <img src="sahil.png" alt="" />
                    <p>myagent</p>
                </div>
            </div>
        </div>
    )
}
