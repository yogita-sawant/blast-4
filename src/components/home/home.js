import React from "react";
import "./home.css";

function Home() {
    return (
        <div className="main-content">
            <div className="graphic">
                <img src="/images/home-img-1.webp" alt="" />
            </div>
            <div className="text-content">
                <h1 className="app-main-title">Blast is the L2 that helps you earn</h1>
                <p className="app-main-subtitle">
                    The only Ethereum L2 with native yield for ETH and stablecoins.
                </p>
                <div className="backed-by">
                    <span>BACKED BY</span>
                    <div className="logos">
                        <img
                            src="/images/home-img-2.webp"
                            alt="Paradigm"
                            className="paradigm-img"
                        />
                        <img
                            src="/images/home-img-3.webp"
                            alt="Standard Crypto"
                            className="standard-img"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
