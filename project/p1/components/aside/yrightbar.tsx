import React, { Component } from 'react';

import Ylist from './ylist';

export default class YrightBar extends Component<any,any> {

  constructor(props){
    super(props);
    const {tabs}=this.props;
    tabs[0].active='active';
    this.state=({
      tabs:tabs,
      currentTab:{
        left:0
      }
    });
  };

  switchTab=(index)=>{
    let tabs=this.state.tabs;
    let currentTab=this.state.currentTab;
    tabs.map((v,k)=>{
      v.active='';
      if(index==k){
        v.active='active';
        currentTab={
          left:64*k
        };
      }
    });
    this.setState({
      tabs:tabs,
      currentTab:currentTab
    });
  };

  render() {

    let that=this;
    const {tabs,currentTab}=this.state;

    return (
      <section className="right-bar">
        <div className="y-rightbar-wrap">
          <ul className="y-tab">
            {
              tabs.map((v,k)=>{
                return(
                  // 注意that的使用!!!
                  <li key={`tab${k}`} className={v.active} onClick={that.switchTab.bind(that,k)}><i className={v.tabIcon}></i></li>
                )
              })
            }
            <span className="y-tab-act" style={currentTab}></span>
          </ul>
          {
            tabs.map((v,k)=>{
              return(
                <Ylist key={`tabpage${k}`} tab={v} list={this.props.tabList} />
              )
            })
          }
        </div>
      </section>
    );
  }
}
