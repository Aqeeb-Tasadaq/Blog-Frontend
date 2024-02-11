import React, { useState, useEffect } from "react";
import Title from './features/title'
import Layout from '../../global/layout'
import Business from "./features/Business";
import Sports from "./features/Sports";
import Health from "./features/Health";
import Science from "./features/Science";
import Others from "./features/Others";




const BlogListing = () => {
  const [activeTab, setActiveTab] = useState('tab1');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  
  return (
    <div>
      <Title/>

        <div>
        <section className="post_section">
      <div className="page_width">
        <div className="categoryNav">
        <h2 className={activeTab === 'tab1' ? 'active' : ''} onClick={() => handleTabClick('tab1')}>
            Business
        </h2>
        <h2 className={activeTab === 'tab2' ? 'active' : ''}  onClick={() => handleTabClick('tab2')}>
            Sports
        </h2>
        <h2 className={activeTab === 'tab3' ? 'active' : ''} onClick={() => handleTabClick('tab3')}>
            Health
        </h2>
        <h2 className={activeTab === 'tab4' ? 'active' : ''} onClick={() => handleTabClick('tab4')}>
            Science
        </h2>
        <h2 className={activeTab === 'tab5' ? 'active' : ''} onClick={() => handleTabClick('tab5')}>
            Others
        </h2>
        </div>

      <div className="tab-content">
        {activeTab === 'tab1' && <div><Business/></div>}
        {activeTab === 'tab2' && <div><Sports/></div>}
        {activeTab === 'tab3' && <div><Health/></div>}
        {activeTab === 'tab4' && <div><Science/></div>}
        {activeTab === 'tab5' && <div><Others/></div>}
      </div>
      
      </div>
      </section>
    </div>
      {/* <MainComponent/>
    <Title/>
    <BlogBanner/>
    <Posts/>
    <Advertisement/> */}
    </div>
  )
}

export default BlogListing