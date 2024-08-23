import React from 'react';
import './graph.css';

function Graph() {

    return (
        <>
            <div className='section-main-content'>
                <div className='app-main-title'>Other L2s don't have yield, so the value of your assets depreciate over time.</div>
                <div className='app-main-subtitle'>Blast is the first L2 that incorporates native yield. Your balance on Blast compounds automatically.
                </div>
                <div>
                    <img alt="" loading="lazy" src="/images/graph/blast-graph.webp" className='graph-img' />
                </div>
                <div className='graph-content'>
                    <div className='graph-content-1'>
                        <span>Blast yield comes from ETH staking and RWA protocols. The yield from these decentralized protocols is passed back to Blast users automatically. The default interest rate on other L2s is 0%. On Blast, it's 3.4% for ETH and 7% for stablecoins.</span>
                    </div>
                    <div className='graph-content-1'>
                        <span>Our goal as contributors is to grow the on-chain economy with the highest-yield L2 possible. Community members who join our mission will have the opportunity to earn the Blast Airdrop. The first stage of the airdrop is [now live].</span>
                    </div>
                </div>
                <img alt="" loading="lazy" src="/images/divider.png" className='graph-divider' />
            </div>
        </>
    );
}

export default Graph;
