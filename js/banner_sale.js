(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.Image = function() {
	this.initialize(img.Image);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,516,480);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(120.6,90.5,2.08,2.08);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ3, new cjs.Rectangle(0,0,241.3,181), null);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AFrCPQgUgSAAggIAAggQAAggAUgSQAUgRAlAAQAlAAAVARQATASABAgIAAAgQgBAggTASQgVARglABQglgBgUgRgAGSBBIAAAYQAAAQASAAQATAAAAgQIAAgYQAAgQgTAAQgSAAAAAQgAhyCCQgggegBg1IAAhdQABg1AggeQAhgeA6gBQA6ABAgAeQAhAeAAA1IAABdQAAA1ghAeQggAeg6ABQg6gBghgegAgyhKQgKAIAAAQIAABlQAAAQAKAJQAKAJARgBQASABAJgJQAKgJAAgQIAAhlQAAgQgKgIQgJgJgSAAQgRAAgKAJgACzCaQgJAAgDgFQgCgGAFgHIDKkRQAHgLAGgDQAGgCAPAAIApAAQAKAAABAGQADAEgFAIIjJERQgIALgGADQgGACgQAAgAkBCaQgKAAgFgEQgDgEAAgKIAAi0IgdARQgLAFgGgCQgHgCgFgJIgUglQgFgJADgFQABgFAJgGIBVgwQAIgFAFgCQAEgBAJAAIAaAAQALAAAEAEQADAEAAALIAAEOQAAAKgDAEQgEAEgLAAgAnfBMQgKAAgDgEQgFgEAAgKIAAglQAAgKAFgEQADgEAKAAIBlAAQALAAADAEQAEAEAAAKIAAAlQAAAKgEAEQgEAEgKAAgACUgKQgVgRABggIAAggQgBggAVgSQATgTAlAAQAmAAAUATQAUASAAAgIAAAgQAAAggUARQgUARgmAAQglAAgTgRgAC6hYIAAAZQAAAQASAAQATAAAAgQIAAgZQAAgQgTAAQgSAAAAAQg");
	this.shape.setTransform(96.5,31.2,1.94,1.94);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ2, new cjs.Rectangle(0,0,193.1,62.3), null);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAdDJQgLgKAAgSIAAgYQAAgSALgKQALgKATAAQAeAAAKAYQABAFgFACIgOAFQgGACgCgFQgDgJgLAAQgPAAAAAOIAAAZQAAAOAPAAQALAAADgJQACgGAGACIAOAFQAFACgBAGQgKAXgeAAQgTAAgLgKgAidDJQgLgKAAgSIAAgYQAAgSALgKQALgKAUAAQAUAAALAKQALAKAAASIAAAYQAAASgLAKQgLAKgUAAQgUAAgLgKgAiNCUIAAAbQAAANAPAAQAPAAAAgNIAAgbQAAgNgPAAQgPAAAAANgAhIDQIgHgOQgDgFAFgDQAHgEAEgGQAEgJAAgRIAAgfQAAgGAGAAIA4AAQAGAAAAAGIAABVQAAAFgGAAIgOAAQgFAAAAgFIAAhDIgRAAIAAANQAAAbgIAPQgGALgOAHIgDABQgDAAgCgDgADDDRQgGAAAAgFIAAhVQAAgGAGAAIA5AAQAGAAAAAGIAAAMQAAAGgGAAIgkAAIAAAMIAdAAQAFAAAAAGIAAAMQAAAGgFAAIgdAAIAAANIAlAAQAGAAAAAFIAAANQAAAFgGAAgACGDRQgFAAAAgFIAAhDIgVAAQgFAAAAgGIAAgMQAAgGAFAAIBDAAQAGAAAAAGIAAAMQAAAGgGAAIgUAAIAABDQAAAFgGAAgAi9DRQgGAAgBgBQgCAAgCgEIgNgWIgNAWIgDAEIgIABIgQAAQgHAAAEgFIAbgsIgagpQgDgGAGAAIAQAAQAIAAADAFIAMAVIAMgVQADgFAIAAIARAAQAGAAgDAGIgbApIAcAsQAEAFgHAAgAhaAvQgJAAgBgGIgEgJIgdAAIgDAJQgCAGgIAAIgOAAQgGAAADgFIAfhVQABgFAGAAIAPAAQAFAAACAFIAfBVQADAFgHAAgAh3gRIgCAMIgFAPIAQAAIgFgOIgDgTIgBAAgAjAAvQgGAAAAgGIAAgfIgaAAIAAAfQAAAGgGAAIgPAAQgGAAAAgGIAAhTQAAgGAGAAIAPAAQAGAAAAAGIAAAeIAaAAIAAgeQAAgGAGAAIAPAAQAGAAAAAGIAABTQAAAGgGAAgACzhyQgGAAAAgGIAAhUQAAgGAGAAIAPAAQAGAAAAAGIAAAXIAQAAQAQAAAJAIQAKAJAAAQQAAAQgKAJQgJAJgQAAgADIiKIANAAQAKAAAAgKQAAgKgKAAIgNAAgAB2hyQgGAAAAgGIAAhCIgUAAQgGAAAAgGIAAgMQAAgGAGAAIBDAAQAGAAAAAGIAAAMQAAAGgGAAIgUAAIAABCQAAAGgGAAgABMhyQgIAAgCgGIgDgKIgdAAIgDAKQgCAGgIAAIgOAAQgGAAACgGIAfhVQACgFAFAAIAQAAQAFAAACAEIAfBWQACAGgGAAgAAvi0IgCANIgFAQIARAAIgFgQQgCgFAAgIIgBgGIgBAAgAgYhyQgGAAAAgGIAAgaIgOABQgmAAAAgmIAAgVQAAgGAGAAIAPAAQAGAAAAAGIAAAVQAAANAPAAIAKgBIAAghQAAgGAGAAIAPAAQAGAAAAAGIAABUQAAAGgGAAgAiYhyQgGAAAAgGIAAhUQAAgGAGAAIA4AAQAGAAAAAGIAAAMQAAAGgGAAIgjAAIAAAMIAcAAQAGAAAAAFIAAAMQAAAGgGAAIgcAAIAAANIAlAAQAFAAAAAGIAAAMQAAAGgFAAgAjBhyQgFAAAAgGIAAhCIgaAAIAABCQAAAGgGAAIgPAAQgGAAAAgGIAAhUQAAgGAGAAIBEAAQAFAAAAAGIAABUQAAAGgFAAg");
	this.shape.setTransform(52,42.5,2.01,2.01);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ1, new cjs.Rectangle(0,0,104,85), null);


(lib.Path = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#006DDA").s().p("Aq6H/IAAjXQEAlFFmjQQFsjWGjg7IAAP9g");
	this.shape.setTransform(69.9,51.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path, new cjs.Rectangle(0,0,139.8,102.3), null);


(lib.ClipGroup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Aq6PTIAA+lIV1AAIAAelg");
	mask.setTransform(106.6,99.2);

	// Слой 3
	this.instance = new lib.Image();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.414,0.414);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(36.7,1.3,139.8,195.8), null);


// stage content:
(lib.banner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 8
	this.instance = new lib.Символ3();
	this.instance.parent = this;
	this.instance.setTransform(-171.7,166.2,1,1,0,0,0,120.7,90.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(68).to({x:-133,y:162.8},0).wait(1).to({regX:120.6,x:-92.8},0).wait(1).to({x:-52.6},0).wait(1).to({x:-12.3},0).wait(1).to({x:27.9},0).wait(1).to({x:68.2},0).wait(1).to({x:108.4},0).wait(1).to({x:148.6},0).wait(27));

	// Слой 5
	this.instance_1 = new lib.Символ1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(358.9,133.3,1,1,0,0,0,52,42.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({x:350.8},0).wait(1).to({x:342.7},0).wait(1).to({x:334.5},0).wait(1).to({x:326.4},0).wait(1).to({x:318.3},0).wait(1).to({x:310.2},0).wait(1).to({x:302},0).wait(1).to({x:293.9},0).wait(1).to({x:285.8},0).wait(1).to({x:277.7},0).wait(1).to({x:269.5},0).wait(1).to({x:261.4},0).wait(1).to({x:253.3},0).wait(1).to({x:245.2},0).wait(1).to({x:237},0).wait(1).to({x:228.9},0).wait(43).to({y:133.1},0).wait(1).to({x:244.1},0).wait(1).to({x:259.3},0).wait(1).to({x:274.5},0).wait(1).to({x:289.8},0).wait(1).to({x:305},0).wait(1).to({x:320.2},0).wait(1).to({x:335.4},0).wait(1).to({x:350.7},0).to({_off:true},1).wait(34));

	// Слой 7
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AFrCPQgUgSAAggIAAggQAAggAUgSQAUgRAlAAQAlAAAVARQATASABAgIAAAgQgBAggTASQgVARglABQglgBgUgRgAGSBBIAAAYQAAAQASAAQATAAAAgQIAAgYQAAgQgTAAQgSAAAAAQgAhyCCQgggegBg1IAAhdQABg1AggeQAhgeA6gBQA6ABAgAeQAhAeAAA1IAABdQAAA1ghAeQggAeg6ABQg6gBghgegAgyhKQgKAIAAAQIAABlQAAAQAKAJQAKAJARgBQASABAJgJQAKgJAAgQIAAhlQAAgQgKgIQgJgJgSAAQgRAAgKAJgACzCaQgJAAgDgFQgCgGAFgHIDKkRQAHgLAGgDQAGgCAPAAIApAAQAKAAABAGQADAEgFAIIjJERQgIALgGADQgGACgQAAgAkBCaQgKAAgFgEQgDgEAAgKIAAi0IgdARQgLAFgGgCQgHgCgFgJIgUglQgFgJADgFQABgFAJgGIBVgwQAIgFAFgCQAEgBAJAAIAaAAQALAAAEAEQADAEAAALIAAEOQAAAKgDAEQgEAEgLAAgAnfBMQgKAAgDgEQgFgEAAgKIAAglQAAgKAFgEQADgEAKAAIBlAAQALAAADAEQAEAEAAAKIAAAlQAAAKgEAEQgEAEgKAAgACUgKQgVgRABggIAAggQgBggAVgSQATgTAlAAQAmAAAUATQAUASAAAgIAAAgQAAAggUARQgUARgmAAQglAAgTgRgAC6hYIAAAZQAAAQASAAQATAAAAgQIAAgZQAAgQgTAAQgSAAAAAQg");
	this.shape.setTransform(403.4,328.3,1.94,1.94);

	this.instance_2 = new lib.Символ2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(403.4,328.4,1,1,0,0,0,96.5,31.2);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[]},10).to({state:[{t:this.instance_2}]},7).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[]},1).wait(34));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(17).to({_off:false},0).wait(1).to({x:384.8},0).wait(1).to({x:366.2},0).wait(1).to({x:347.6},0).wait(1).to({x:328.9},0).wait(1).to({x:310.3},0).wait(1).to({x:291.7},0).wait(1).to({x:273.1},0).wait(1).to({x:254.5},0).wait(1).to({x:235.9},0).wait(1).to({x:217.2},0).wait(1).to({x:198.6},0).wait(1).to({x:180},0).wait(1).to({x:161.4},0).wait(29).to({y:328.3},0).wait(1).to({y:344},0).wait(1).to({y:359.8},0).wait(1).to({y:375.5},0).wait(1).to({y:391.3},0).wait(1).to({y:407},0).wait(1).to({y:422.8},0).wait(1).to({y:438.5},0).wait(1).to({y:454.3},0).to({_off:true},1).wait(34));

	// Слой 6
	this.instance_3 = new lib.Path();
	this.instance_3.parent = this;
	this.instance_3.setTransform(326.9,466.8,2.1,2.1,0,0,0,70,51.1);
	this.instance_3.alpha = 0.801;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({regX:69.9,x:304,y:446,alpha:0.8},0).wait(1).to({x:281.3,y:425.2},0).wait(1).to({x:258.6,y:404.4},0).wait(1).to({x:235.9,y:383.7},0).wait(1).to({x:213.3,y:362.9},0).wait(1).to({x:190.6,y:342.1},0).wait(1).to({x:167.9,y:321.4},0).wait(1).to({x:145.3,y:300.6},0).wait(51).to({regX:70,x:147.1,alpha:0.801},0).wait(1).to({regX:69.9,scaleX:3.53,scaleY:3.53,x:146.7,alpha:0.8},0).wait(1).to({scaleX:4.95,scaleY:4.95,x:146.5},0).wait(1).to({scaleX:6.38,scaleY:6.38,x:146.2},0).wait(1).to({scaleX:7.8,scaleY:7.8,x:146,y:300.7},0).wait(1).to({scaleX:9.23,scaleY:9.23,x:145.8},0).wait(1).to({scaleX:10.65,scaleY:10.65,x:145.6,y:300.6},0).wait(1).to({scaleX:12.08,scaleY:12.08,x:145.4,y:300.7},0).wait(1).to({scaleX:13.5,scaleY:13.5,x:145.2},0).wait(35));

	// sale
	this.instance_4 = new lib.ClipGroup();
	this.instance_4.parent = this;
	this.instance_4.setTransform(147.5,203.1,2.1,2.1,0,0,0,106.9,99.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(102));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-146.4,198.1,792.3,580.1);
// library properties:
lib.properties = {
	width: 292,
	height: 408,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/Image.png", id:"Image"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;