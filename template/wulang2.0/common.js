(function(a){if(!a.Common){a.Common={}}$.extend(a.Common,{timer:function(g,f){var d={name:"TIMER#0000",interval:1000,immediately:true};if(f){$.extend(d,f)}if(typeof g!=="function"){throw new Error("您没有为Timer指定有效的执行函数。")}var e=null;var c=0;var b={start:function(){if(e!=null){clearInterval(e);e=null}var h=function(){c+=1;g(b)};e=setInterval(h,d.interval);if(d.immediately){h()}},stop:function(){if(e!=null){clearInterval(e);e=null}},getCounter:function(){return c}};return b}})})(LETV);(function(a){if(!a.UI){a.UI={}}$.extend(a.UI,{simpleTab:function(d,h){var f={tabs:".j-tab",tabsFor:".j-for",switchClass:"on",switchEvent:"mouseover",onInit:function(){},onSwitch:function(){}};if(h){$.extend(f,h)}var i=$(d);var c=$(f.tabs,i);var g=$(f.tabsFor,i);var e=0;var b={switchTab:function(j){c.removeClass(f.switchClass);c.eq(j).addClass(f.switchClass);g.removeClass(f.switchClass);g.eq(j).addClass(f.switchClass).find("img[data-src]").trigger("do-load");f.onSwitch(b,j)}};c.each(function(j,k){$(k).bind(f.switchEvent,function(l){if(e!=j){b.switchTab(j);e=j}});if($(k).hasClass(f.switchClass)){e=j}});f.onInit(b);b.switchTab(e);return b},slider:function(g,f){var d={stepSize:1,clipSize:1,sliderFinder:".j-silder",sliderItemFinder:".j-item",sliderItemWidth:0,sliderItemCount:0,mode:"default",goMode:"left",onInit:function(s,r){},onSlidBegin:function(s,r){},onSlidEnd:function(s,r){}};if(f){$.extend(d,f)}var i=$(g);var m=$(d.sliderFinder,i);var q=$(d.sliderItemFinder,i);var b=d.sliderItemCount>0?d.sliderItemCount:q.size();var k=d.sliderItemWidth>0?d.sliderItemWidth:q.outerWidth(true);var e=false;var l=false;var j=0;var c=function(r){switch(d.goMode){case"left":return{left:r*k*-1};case"top":return{top:r*k*-1};case"marginLeft":return{marginLeft:r*k*-1};case"marginTop":return{marginTop:r*k*-1};default:return{left:r*k*-1}}};if(b>d.clipSize){if(d.mode==="round"){m.append(q.clone(true));m.append(q.clone(true));e=true;l=true;q=$(d.sliderItemFinder,i)}else{var h=0;var n=b-d.clipSize;if(j>=n){j=n;l=false}else{l=true}if(j<=h){j=0;e=false}else{e=true}}}else{e=false;l=false}m.find("img[data-src]").each(function(){var r=this;r.loaded=false;var s=$(r).attr("src","").addClass("loading").one("do-load",function(){if(r.loaded){return}$("<img />").bind("load",function(){s.attr("src",s.attr("data-src"));r.loaded=true}).attr("src",s.attr("data-src"))})});var o=null;var p={gotoIndex:function(r){d.onSlidBegin(p,{index:r});m.animate(c(r),{queue:false,complete:function(){j=r;clearTimeout(o);o=setTimeout(function(){d.onSlidEnd(p,{index:r})},100)}});for(var s=r;s<r+d.stepSize;s++){q.eq(s).find("img[data-src]").trigger("do-load")}},gotoNextStep:function(){var s=j+d.stepSize;if(d.mode==="round"){var r=b*3-d.clipSize;if(s>r){j=j-b;m.css(c(j));s=j+d.stepSize}}else{var r=b-d.clipSize;if(s>=r){s=r;l=false}else{l=true}e=true}this.gotoIndex(s);return l},gotoPreStep:function(){var r=j-d.stepSize;if(d.mode==="round"){if(r<0){j=j+b;m.css(c(j));r=j-d.stepSize}}else{if(r<=0){r=0;e=false}else{e=true}l=true}this.gotoIndex(r);return e},isPreEnable:function(){return e},isNextEnable:function(){return l}};p.gotoIndex(0);d.onInit(p,{});return p}})})(LETV);