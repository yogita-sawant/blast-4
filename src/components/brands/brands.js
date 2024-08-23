import React from "react";
import "./brands.css";

function Brands() {
    return (
        <div>
            <div className="section-main-content">
                <div className="app-main-title">Who we are</div>
                <div className="brand-grid-container">
                    <div className="brand-grid-item">
                        <img src="/images/brands/brand-1.webp" alt="" className="brand-img" />
                        <img src="/images/brands/brand-2.webp" alt="" className="brand-img" />
                    </div>
                    <div className="brand-grid-item app-main-subtitle brand-des">Pacman created Blur, the top NFT marketplace protocol on Ethereum
                        with over 333,063 users and $7b worth of NFTs traded. Blur
                        distributed the 5th largest airdrop in Ethereum history.</div>
                    <div className="brand-grid-item">
                        <div style={{ display: "flex", flexDirection: "row", gap: '2rem' }}>
                            <img src="/images/brands/brand-3.webp" alt="" width="72px" style={{ width: '72px', height: '39px' }} />
                            <img src="/images/brands/brand-4.webp" alt="" style={{ width: '88px', height: '39px' }} />
                        </div>
                        <img src="/images/brands/brand-5.webp" alt="" className="brand-img" />
                        <img src="/images/brands/brand-6.webp" alt="" className="brand-img" />
                        <img src="/images/brands/brand-7.png" alt="" className="brand-img" />
                        <img src="/images/brands/brand-8.png" alt="" className="brand-img" />
                    </div>
                    <div className="brand-grid-item app-main-subtitle brand-des"> Our team members come from FAANG, Yale, MIT, Nanyang Technological
                        University, Seoul National University and have worked on some of the
                        largest protocols in Defi and Web3, primarily on Ethereum but also
                        on other chains like Solana as well.</div>
                    <div className="brand-grid-item">
                        <img src="/images/brands/brand-9.png" alt="" className="brand-img" />
                        <img src="/images/brands/brand-10.webp" alt="" className="brand-img" />
                    </div>
                    <div className="brand-grid-item app-main-subtitle brand-des"> Blast contributors have raised $20m from Paradigm, Standard Crypto,
                        eGirl Capital, Primitive Ventures, Andrew Kang, Hasu, Foobar, Blurr,
                        Will Price, Hsaka, Santiago Santos, Larry Cermak, Manifold, Jeff Lo,
                        and other cryptonatives.</div>
                </div>
                <img alt="" loading="lazy" src="/images/divider.png" className='graph-divider' />
            </div>
        </div>
    );
}

export default Brands;
