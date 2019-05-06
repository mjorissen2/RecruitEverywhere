import React, { Component } from 'react';
import './App.css';


export default class Component1 extends Component {

  // This component doesn't use any properties

  render() {
    // eslint-disable-next-line no-unused-vars
    let baseStyle = {};
    // eslint-disable-next-line no-unused-vars
    let layoutFlowStyle = {};
    
    const style_elBackground = {
        width: '100%',
        height: '100%',
     };
    const style_elBackground_outer = {
        backgroundColor: '#f6f6f6',
     };
    const style_elText = {
        color: 'rgba(0, 0, 0, 0.8500)',
        textAlign: 'left',
     };
    const style_elText2 = {
        color: 'rgba(0, 0, 0, 0.8500)',
        textAlign: 'left',
     };
    
    return (
      <div className="Component1" style={baseStyle}>
        <div className="background">
          <div className='appBg containerMinHeight elBackground' style={style_elBackground_outer}>
            <div style={style_elBackground} />
          
          </div>
          
        </div>
        <div className="layoutFlow">
          <div className='baseFont elText'>
            <div style={style_elText}>
              <div>{this.props.locStrings.TextBlock}</div>
            </div>
          
          </div>
          
          <div className='baseFont elText2'>
            <div style={style_elText2}>
              <div><div dangerouslySetInnerHTML={{__html: this.props.locStrings.component1_text2_367723.replace(/\n/g, '<br>')}}></div></div>
            </div>
          
          </div>
          
        </div>
      </div>
    )
  }
  

}
