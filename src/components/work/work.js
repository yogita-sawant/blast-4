import React from 'react';
import './work.css';

function Work() {
    const workItems = [
        {
            imgSrc: "/images/work/card-1.png",
            title: "Auto rebasing",
            description: "Users transact in ETH. Dapps are built around ETH. Blast was designed from the ground up so that ETH itself is natively rebasing on the L2."
        },
        {
            imgSrc: "/images/work/card-2.png",
            title: "L1 Staking",
            description: "Blast only became possible this year following Ethereum's Shanghai upgrade. ETH yield from L1 staking, initially Lido, is automatically transferred to users via rebasing ETH on the L2."
        },
        {
            imgSrc: "/images/work/card-3.png",
            title: "T-Bill Yield",
            description: "Users who bridge stablecoins receive USDB, Blast's auto-rebasing stablecoin. The yield for USDB comes from MakerDAO's on-chain T-Bill protocol. USDB can be redeemed for DAI when bridging back to Ethereum."
        }
    ];

    return (
        <>
            <div className='section-main-content'>
                <div className='app-main-title'>How Blast works</div>
                <div className="work-container">
                    {workItems.map((item, index) => (
                        <div className="work-col" key={index}>
                            <div className="work-card">
                                <img src={item.imgSrc} alt="" />
                                <div className="work-content">
                                    <h3>{item.title}</h3>
                                    <p>{item.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='work-bottom-text'>In the future, the Blast community will have the power to supplement, or even fully replace, Lido and MakerDAO with Blast-native solutions or other third party protocols.</div>
                <img alt="" loading="lazy" src="/images/divider.png" className='graph-divider' />
            </div>
        </>
    );
}

export default Work;
