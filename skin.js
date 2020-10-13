// Garden Gnome Software - Skin
// Object2VR 3.1.7/10775
// Filename: Wald Modell Skin.ggsk
// Generated Di 13. Okt 12:47:52 2020

function object2vrSkin(player,base) {
	var me=this;
	var flag=false;
	var nodeMarker=new Array();
	var activeNodeMarker=new Array();
	this.player=player;
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	var basePath="";
	// auto detect base path
	if (base=='?') {
		var scripts = document.getElementsByTagName('script');
		for(var i=0;i<scripts.length;i++) {
			var src=scripts[i].src;
			if (src.indexOf('skin.js')>=0) {
				var p=src.lastIndexOf('/');
				if (p>=0) {
					basePath=src.substr(0,p+1);
				}
			}
		}
	} else
	if (base) {
		basePath=base;
	}
	this.elementMouseDown=new Array();
	this.elementMouseOver=new Array();
	var cssPrefix='';
	var domTransition='transition';
	var domTransform='transform';
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	var i;
	for(i=0;i<prefixes.length;i++) {
		if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
			cssPrefix='-' + prefixes[i].toLowerCase() + '-';
			domTransition=prefixes[i] + 'Transition';
			domTransform=prefixes[i] + 'Transform';
		}
	}
	
	this.player.setMargins(0,0,0,0);
	
	this.updateSize=function(startElement) {
		var stack=new Array();
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	
	parameterToTransform=function(p) {
		var hs='translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
		return hs;
	}
	
	this.findElements=function(id,regex) {
		var r=new Array();
		var stack=new Array();
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this.addSkin=function() {
		this._r=document.createElement('div');
		this._r.ggId="r";
		this._r.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._r.ggVisible=true;
		this._r.className='ggskin ggskin_svg';
		this._r.ggType='svg';
		hs ='position:absolute;';
		hs+='left: 555px;';
		hs+='top:  254px;';
		hs+='width: 40px;';
		hs+='height: 36px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._r.setAttribute('style',hs);
		this._r__img=document.createElement('img');
		this._r__img.className='ggskin ggskin_svg';
		this._r__img.setAttribute('src',basePath + 'images/r.svg');
		this._r__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 40px;height: 36px;-webkit-user-drag:none;');
		this._r__img['ondragstart']=function() { return false; };
		this._r.appendChild(this._r__img);
		this._r.onclick=function () {
			me.player.changeViewState("3",0);
			flag=(me._r2.style.visibility=='hidden');
			me._r2.style[domTransition]='none';
			me._r2.style.visibility=flag?'inherit':'hidden';
			me._r2.ggVisible=flag;
		}
		this.divSkin.appendChild(this._r);
		this._r2=document.createElement('div');
		this._r2.ggId="r2";
		this._r2.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._r2.ggVisible=false;
		this._r2.className='ggskin ggskin_svg';
		this._r2.ggType='svg';
		hs ='position:absolute;';
		hs+='left: 555px;';
		hs+='top:  254px;';
		hs+='width: 40px;';
		hs+='height: 36px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		this._r2.setAttribute('style',hs);
		this._r2__img=document.createElement('img');
		this._r2__img.className='ggskin ggskin_svg';
		this._r2__img.setAttribute('src',basePath + 'images/r2.svg');
		this._r2__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 40px;height: 36px;-webkit-user-drag:none;');
		this._r2__img['ondragstart']=function() { return false; };
		this._r2.appendChild(this._r2__img);
		this._r2.onclick=function () {
			me.player.changeViewState("0",0);
			flag=(me._r2.style.visibility=='hidden');
			me._r2.style[domTransition]='none';
			me._r2.style.visibility=flag?'inherit':'hidden';
			me._r2.ggVisible=flag;
		}
		this.divSkin.appendChild(this._r2);
		this._f=document.createElement('div');
		this._f.ggId="f";
		this._f.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._f.ggVisible=true;
		this._f.className='ggskin ggskin_svg';
		this._f.ggType='svg';
		hs ='position:absolute;';
		hs+='left: 556px;';
		hs+='top:  180px;';
		hs+='width: 40px;';
		hs+='height: 36px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._f.setAttribute('style',hs);
		this._f__img=document.createElement('img');
		this._f__img.className='ggskin ggskin_svg';
		this._f__img.setAttribute('src',basePath + 'images/f.svg');
		this._f__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 40px;height: 36px;-webkit-user-drag:none;');
		this._f__img['ondragstart']=function() { return false; };
		this._f.appendChild(this._f__img);
		this._f.onclick=function () {
			me.player.changeViewState("2",0);
			flag=(me._f2.style.visibility=='hidden');
			me._f2.style[domTransition]='none';
			me._f2.style.visibility=flag?'inherit':'hidden';
			me._f2.ggVisible=flag;
		}
		this.divSkin.appendChild(this._f);
		this._f2=document.createElement('div');
		this._f2.ggId="f2";
		this._f2.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._f2.ggVisible=false;
		this._f2.className='ggskin ggskin_svg';
		this._f2.ggType='svg';
		hs ='position:absolute;';
		hs+='left: 556px;';
		hs+='top:  180px;';
		hs+='width: 40px;';
		hs+='height: 36px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		this._f2.setAttribute('style',hs);
		this._f2__img=document.createElement('img');
		this._f2__img.className='ggskin ggskin_svg';
		this._f2__img.setAttribute('src',basePath + 'images/f2.svg');
		this._f2__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 40px;height: 36px;-webkit-user-drag:none;');
		this._f2__img['ondragstart']=function() { return false; };
		this._f2.appendChild(this._f2__img);
		this._f2.onclick=function () {
			me.player.changeViewState("0",0);
			flag=(me._f2.style.visibility=='hidden');
			me._f2.style[domTransition]='none';
			me._f2.style.visibility=flag?'inherit':'hidden';
			me._f2.ggVisible=flag;
		}
		this.divSkin.appendChild(this._f2);
		this._t=document.createElement('div');
		this._t.ggId="t";
		this._t.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._t.ggVisible=true;
		this._t.className='ggskin ggskin_svg';
		this._t.ggType='svg';
		hs ='position:absolute;';
		hs+='left: 555px;';
		hs+='top:  114px;';
		hs+='width: 40px;';
		hs+='height: 36px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._t.setAttribute('style',hs);
		this._t__img=document.createElement('img');
		this._t__img.className='ggskin ggskin_svg';
		this._t__img.setAttribute('src',basePath + 'images/t.svg');
		this._t__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 40px;height: 36px;-webkit-user-drag:none;');
		this._t__img['ondragstart']=function() { return false; };
		this._t.appendChild(this._t__img);
		this._t.onclick=function () {
			me.player.changeViewState("1",0);
			flag=(me._t2.style.visibility=='hidden');
			me._t2.style[domTransition]='none';
			me._t2.style.visibility=flag?'inherit':'hidden';
			me._t2.ggVisible=flag;
		}
		this.divSkin.appendChild(this._t);
		this._t2=document.createElement('div');
		this._t2.ggId="t2";
		this._t2.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._t2.ggVisible=false;
		this._t2.className='ggskin ggskin_svg';
		this._t2.ggType='svg';
		hs ='position:absolute;';
		hs+='left: 555px;';
		hs+='top:  114px;';
		hs+='width: 40px;';
		hs+='height: 36px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		this._t2.setAttribute('style',hs);
		this._t2__img=document.createElement('img');
		this._t2__img.className='ggskin ggskin_svg';
		this._t2__img.setAttribute('src',basePath + 'images/t2.svg');
		this._t2__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 40px;height: 36px;-webkit-user-drag:none;');
		this._t2__img['ondragstart']=function() { return false; };
		this._t2.appendChild(this._t2__img);
		this._t2.onclick=function () {
			me.player.changeViewState("0",0);
			flag=(me._t2.style.visibility=='hidden');
			me._t2.style[domTransition]='none';
			me._t2.style.visibility=flag?'inherit':'hidden';
			me._t2.ggVisible=flag;
		}
		this.divSkin.appendChild(this._t2);
		this.divSkin.ggUpdateSize=function(w,h) {
			me.updateSize(me.divSkin);
		}
		this.divSkin.ggViewerInit=function() {
		}
		this.divSkin.ggLoaded=function() {
		}
		this.divSkin.ggReLoaded=function() {
		}
		this.divSkin.ggLoadedLevels=function() {
		}
		this.divSkin.ggReLoadedLevels=function() {
		}
		this.divSkin.ggEnterFullscreen=function() {
		}
		this.divSkin.ggExitFullscreen=function() {
		}
		this.skinTimerEvent();
	};
	this.hotspotProxyClick=function(id) {
	}
	this.hotspotProxyOver=function(id) {
	}
	this.hotspotProxyOut=function(id) {
	}
	this.changeActiveNode=function(id) {
		var newMarker=new Array();
		var i,j;
		var tags=me.player.userdata.tags;
		for (i=0;i<nodeMarker.length;i++) {
			var match=false;
			if ((nodeMarker[i].ggMarkerNodeId==id) && (id!='')) match=true;
			for(j=0;j<tags.length;j++) {
				if (nodeMarker[i].ggMarkerNodeId==tags[j]) match=true;
			}
			if (match) {
				newMarker.push(nodeMarker[i]);
			}
		}
		for(i=0;i<activeNodeMarker.length;i++) {
			if (newMarker.indexOf(activeNodeMarker[i])<0) {
				if (activeNodeMarker[i].ggMarkerNormal) {
					activeNodeMarker[i].ggMarkerNormal.style.visibility='inherit';
				}
				if (activeNodeMarker[i].ggMarkerActive) {
					activeNodeMarker[i].ggMarkerActive.style.visibility='hidden';
				}
				if (activeNodeMarker[i].ggDeactivate) {
					activeNodeMarker[i].ggDeactivate();
				}
			}
		}
		for(i=0;i<newMarker.length;i++) {
			if (activeNodeMarker.indexOf(newMarker[i])<0) {
				if (newMarker[i].ggMarkerNormal) {
					newMarker[i].ggMarkerNormal.style.visibility='hidden';
				}
				if (newMarker[i].ggMarkerActive) {
					newMarker[i].ggMarkerActive.style.visibility='inherit';
				}
				if (newMarker[i].ggActivate) {
					newMarker[i].ggActivate();
				}
			}
		}
		activeNodeMarker=newMarker;
	}
	this.skinTimerEvent=function() {
		setTimeout(function() { me.skinTimerEvent(); }, 10);
	};
	this.addSkin();
};