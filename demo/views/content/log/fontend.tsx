import * as React from 'react';

import './fontend.less';

var data={
	'ui':['UI','UX','UED','Material Design'],
	'canvas':['css3','webGL','canvas','SVG'],
	'css':['css','less','sass'],
	'html5':['html5','localStorage','service Worker','web RTC','web VR'],
	'javascript':['ECMAScript6','ECMAScript7','typescript','babel','WebAssembly'],
	'MV*':['angular','react','vue','polymer','ember'],
	'SAM':['SAM','Rxjs','Redux'],
	'nodejs':['nodejs','express','mongodb','PM2','socket.IO'],
	'http':['http/2','restful','fetch','json'],
	'manage':['npm','yarn','git','GitHub','Docker'],
	'develop':['webpack','gulp','sublime','markdown'],
	'webapp':['渐进式PWA','微信小程序','html5 API','css3 animation'],
	'hybrid':['Cordova','Ionic','React Native'],
	'desktop':['Electron','NW.js'],
};

export default class Fontend extends React.Component<any,any> {

  render() {
    return(
    	<div className="fontend">
	    	<article>
	    		<h2><i className="fa fa-info"></i> 2016回顾 <img src={require('../../../styles/images/usr.jpg')} /></h2>
		    	{
		    		Object.keys(data).map((v,k)=>{
		    			return (
		    				<ul key={`row-${k}`} className={`color${k}`}>
		    					<li className="fe-title">{v}</li>
		    					{
		    						data[v].map((sv,sk)=>{
		    							return (
		    								<li key={`point-${sk}`}>{sv}</li>
		    							)
		    						})
		    					}
		    				</ul>
		    			)
		    		})
		    	}
		    	<ul>
		    		
		    	</ul>
	    	</article>
    	</div>
    )
  }
}