import React from "react";
import "./timeline.css";

function Timeline() {
    return (
        <>
            <div className="section-main-content">
                <div className="app-main-title">Airdrop timeline</div>
                <div className="app-main-subtitle">The Blast Community Airdrop is split between Early Access Members (50%) and Developers (50%).</div>
                <div className="timeline-sub-des">The Early Access airdrop is now live. You can earn airdrop points by bridging to Blast and inviting friends. Airdrop points can be redeemed in June.</div>
                <div className="timeline-img">
                    <div>
                        <img src="/images/time-desktop-view.webp" alt="" className="img-1" />
                        <img src="/images/time-mobile.webp" alt="" className="img-2" />
                    </div>
                </div>
                <div className="app-main-subtitle">The developer airdrop goes live in January when the Blast Testnet launches. Learn more in our <span className="highlight-text ">developer docs.</span></div>
                <div style={{ marginBottom: '3rem' }}>
                    <div className="invite-svg-1"><svg fill="#11140c" height="65" viewBox="0 0 1024 65" width="1024"><path d="M785.052 16.7089L800.381 1.51897L856.286 1.51898L870.262 12.9115L884.238 12.9115L884.689 1.51898L902.103 1.51898L902.272 8.10132L925.716 8.10133L925.716 1.51898L954.344 1.51899L1014 1.51899C1019.52 1.51899 1024 5.99615 1024 11.519L1024 65L0 64.9999L0.258424 51.8312C0.365297 46.3859 4.81012 42.0274 10.2565 42.0274L282.229 42.0275L350.758 -5.88567e-05L610.9 -3.61143e-05L625.778 16.7089L785.052 16.7089Z" fill="#11140c"></path></svg></div>
                    <div className="invite-content">
                        <div className="app-main-title">Have an Early Access invite?</div>
                        <div><button className="invite-btn">Claim your airdrop</button></div>
                        <div className="invite-link"><span>Click here</span> if you're a developer</div>
                    </div>
                    <div className="invite-svg-2"><svg fill="#11140c" height="55" viewBox="0 0 1024 55" width="1024" xmlns="http://www.w3.org/2000/svg"><path d="M357.918 40.3596L342.611 55L313.797 55L299.841 44.0197H285.884L285.434 55H268.044L267.876 48.6558L127.41 48.6558V55H98.8213L9.99998 54.9999C4.47714 54.9999 0 50.5227 0 44.9999L0 0L1024 0V1.56473C1024 7.08757 1019.52 11.5647 1014 11.5647L849.432 11.5647L781 54.2678L589.776 54.2678L574.919 40.3596L357.918 40.3596Z" fill="#11140c"></path></svg></div>
                </div>
            </div>
        </>
    );
}

export default Timeline;
