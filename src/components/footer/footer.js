import React from "react";
import "./footer.css";

function Footer() {
    return (
        <div className="app-end-img-section" >
            <div className="footer-main-section">
                <div className="footer-content" >
                    <div style={{ display: "flex", gap: "0.5rem" }}>
                        <div
                            style={{
                                height: "7px",
                                width: "63px",
                                backgroundColor: "rgb(117 131 93/1)",
                            }}
                        ></div>
                    </div>

                    <div style={{ display: "flex", gap: "0.5rem" }}>
                        <div
                            style={{
                                height: "7px",
                                width: "3px",
                                backgroundColor: "rgb(117 131 93/1)",
                            }}
                        ></div>
                        <div
                            style={{
                                height: "7px",
                                width: "3px",
                                backgroundColor: "rgb(117 131 93/1)",
                            }}
                        ></div>
                        <div
                            style={{
                                height: "7px",
                                width: "3px",
                                backgroundColor: "rgb(117 131 93/1)",
                            }}
                        ></div>
                    </div>

                    <div className="footer-text"> TVL / $1,407,222,695</div>

                    <div style={{ display: "flex", gap: "0.5rem" }}>
                        <div
                            style={{
                                height: "7px",
                                width: "3px",
                                backgroundColor: "rgb(117 131 93/1)",
                            }}
                        ></div>
                        <div
                            style={{
                                height: "7px",
                                width: "3px",
                                backgroundColor: "rgb(117 131 93/1)",
                            }}
                        ></div>
                        <div
                            style={{
                                height: "7px",
                                width: "23px",
                                backgroundColor: "rgb(117 131 93/1)",
                            }}
                        ></div>
                    </div>

                    <div className="footer-text"> Total Users / 1,785,250</div>
                    <div style={{ display: "flex", gap: "0.5rem" }}>
                        <div
                            style={{
                                height: "7px",
                                width: "23px",
                                backgroundColor: "rgb(117 131 93/1)",
                            }}
                        ></div>
                        <div
                            style={{
                                height: "7px",
                                width: "3px",
                                backgroundColor: "rgb(117 131 93/1)",
                            }}
                        ></div>
                    </div>
                    <div className="footer-text"> Airdrop Live</div>
                </div>
            </div>
            {/* <img
                alt=""
                loading="lazy"
                className="bottom-left-img"
                src="/images/header/footer-bottom-left.svg"
            /> */}

            <img
                alt=""
                loading="lazy"
                className="bottom-left-img desktop-img"
                src="/images/header/footer-bottom-left.svg"
            />
            <img
                alt=""
                loading="lazy"
                className="bottom-left-img mobile-img"
                src="/images/header/footer-bottom-left-res.svg"
            />
            <img
                alt=""
                loading="lazy"
                className="bottom-right-img"
                src="/images/header/footer-bottom-right.svg"
            />
        </div>
    );
}

export default Footer;
