
var artTaxonomy;
var jsonURL;
var tweetTextSolo = ' person Tweeted this';
var tweetTextMulti = ' people Tweeted this';
var preTweetText = 'Be the first to Tweet this!';
var primary_id='toolsNavEmail';
function switchPrintOn(){
doc.getElementById("toolsNavEmail").style.display="block";
doc.getElementById("toolsNavEmailOn").style.display="none";
doc.getElementById("toolsNavPrint").style.display="none";
doc.getElementById("toolsNavPrintOn").style.display="block";
doc.getElementById("toolsNavSingle").style.display="block";
doc.getElementById("toolsNavSingleOn").style.display="none";
doc.getElementById("toolsNavReprints").style.display="";
doc.getElementById("toolsNavReprintsOn").style.display="";
doc.getElementById("toolsNavShare").style.display="block";
doc.getElementById("toolsNavShareOn").style.display="none";
doc.getElementById("toolsNavComments").style.display="none";
doc.getElementById("toolsNavCommentsOn").style.display="none";
doc.getElementById("toolsComments").style.display="none";
doc.getElementById("toolsShare").style.display="none";
doc.getElementById("toolsEmail").style.display="none";
doc.getElementById("toolsNavBlank").style.border='none';
doc.getElementById("footToolsMain").style.border='none';
doc.getElementById("toolsNavPrintOn").style.background='#ebf4fb';
doc.getElementById("toolsNavPrintOn").style.borderBottom='1px dotted #3f5f9c';
doc.location.replace(pfURL);
primary_id = 'toolsNavPrint';
}

function switchSingleOn(){
if(doc.getElementById("toolsNavEmail")){
	doc.getElementById("toolsNavEmail").style.display="block";
	doc.getElementById("toolsNavEmailOn").style.display="none";
	doc.getElementById("toolsNavPrint").style.display="block";
	doc.getElementById("toolsNavPrintOn").style.display="none";
	doc.getElementById("toolsNavSingle").style.display="none";
	doc.getElementById("toolsNavSingleOn").style.display="block";
	doc.getElementById("toolsNavReprints").style.display="";
	doc.getElementById("toolsNavReprintsOn").style.display="";
	doc.getElementById("toolsNavShare").style.display="block";
	doc.getElementById("toolsNavShareOn").style.display="none";
	doc.getElementById("toolsNavComments").style.display="none";
	doc.getElementById("toolsNavCommentsOn").style.display="none";
	doc.getElementById("toolsComments").style.display="none";
	doc.getElementById("toolsShare").style.display="none";
	doc.getElementById("toolsEmail").style.display="none";
	doc.getElementById("toolsNavBlank").style.border='none';
	doc.getElementById("footToolsMain").style.border='none';
	doc.getElementById("toolsNavSingleOn").style.background='#ebf4fb';
	doc.getElementById("toolsNavSingleOn").style.borderBottom='1px dotted #3f5f9c';
	doc.location.replace(singlepage);
	primary_id = 'toolsNavSingle';
}else{
	location.replace('http://' + document.location.host + document.location.pathname + '?page=full');
}
}

function switchReprintsOn(){
popup=window.open('http://www.globereprints.com/','reprints',''); popup.focus(); return false;
}

function switchShareOn(){
doc.getElementById("toolsNavEmail").style.display="block";
doc.getElementById("toolsNavEmailOn").style.display="none";
doc.getElementById("toolsNavPrint").style.display="block";
doc.getElementById("toolsNavPrintOn").style.display="none";
doc.getElementById("toolsNavSingle").style.display="block";
doc.getElementById("toolsNavSingleOn").style.display="none";
doc.getElementById("toolsNavReprints").style.display="";
doc.getElementById("toolsNavReprintsOn").style.display="";
doc.getElementById("toolsNavShare").style.display="none";
doc.getElementById("toolsNavShareOn").style.display="block";
doc.getElementById("toolsNavComments").style.display="none";
doc.getElementById("toolsNavCommentsOn").style.display="none";
doc.getElementById("toolsComments").style.display="none";
doc.getElementById("toolsShare").style.display="block";
doc.getElementById("toolsEmail").style.display="none";
doc.getElementById("toolsNavBlank").style.borderBottom='1px dotted #3f5f9c';
doc.getElementById("toolsShare").style.border='1px dotted #3f5f9c';
doc.getElementById("toolsShare").style.borderTop='0px';
doc.getElementById("toolsNavShareOn").style.background='#ebf4fb';
doc.getElementById("footToolsMain").style.background='#ebf4fb';
doc.getElementById("toolsNavShareOn").style.borderBottom='1px solid #ebf4fb';
doc.getElementById("listShare").style.display="block";
primary_id = 'toolsNavShare';
}

function switchEmailOn(){
doc.getElementById("toolsNavEmail").style.display="none";
doc.getElementById("toolsNavEmailOn").style.display="block";
doc.getElementById("toolsNavPrint").style.display="block";
doc.getElementById("toolsNavPrintOn").style.display="none";
doc.getElementById("toolsNavSingle").style.display="block";
doc.getElementById("toolsNavSingleOn").style.display="none";
doc.getElementById("toolsNavReprints").style.display="";
doc.getElementById("toolsNavReprintsOn").style.display="";
doc.getElementById("toolsNavShare").style.display="block";
doc.getElementById("toolsNavShareOn").style.display="none";
doc.getElementById("toolsNavComments").style.display="none";
doc.getElementById("toolsNavCommentsOn").style.display="none";
doc.getElementById("toolsComments").style.display="none";
doc.getElementById("toolsShare").style.display="none";
doc.getElementById("toolsEmail").style.display="block";
doc.getElementById("toolsEmail").style.borderTop='none';
doc.getElementById("toolsEmail").style.border='1px dotted #3f5f9c';
doc.getElementById("toolsEmail").style.borderTop='0px';
doc.getElementById("toolsNavBlank").style.borderBottom='1px dotted #3f5f9c';
doc.getElementById("toolsNavEmailOn").style.background='#ebf4fb';
doc.getElementById("toolsNavEmailOn").style.borderBottom='1px dotted #3f5f9c';
doc.getElementById("footToolsMain").style.background='#ebf4fb';
doc.getElementById("toolsNavEmailOn").style.borderBottom='1px solid #ebf4fb';
primary_id = 'toolsNavEmail';
}

// article page
var cpgnum=0,images_dynamic=[],isScraper=false;
var dDomain = "" + document.domain; var dLocation = "" + document.location; var dPath = dLocation.split(dDomain);
function articlePaginate(){if(sById){var pg=doc.URL.match(/page=(\w+)/);if(pg)pg=pg[1];else pg=1;if(pg=='full')return;cpgnum=pg-0;var cpg=doc.getElementById('page'+cpgnum);cpg.className='showPage';if(cpgnum!=1){var acon=doc.getElementById('article');if(acon)acon.className='subpage';cspan=doc.createElement('SPAN');cspan.className='pginfo';cspan.appendChild(doc.createTextNode('Page '+cpgnum+' of '+articlepgs+' --'));cpg.insertBefore(cspan,cpg.firstChild);}var agraphs=doc.getElementById('articleGraphs');agraphs.className='hidePages';var clink=doc.getElementById('link'+cpgnum),prev=doc.getElementById('prev'),next=doc.getElementById('next');clink.parentNode.className='numberActive';if(!asep)asep='?';if(cpgnum==1)prev.className='hide';else{var plink=doc.createElement('A');plink.appendChild(doc.createTextNode('Previous'));plink.href=articleurl+asep+'page='+(cpgnum-1);prev.appendChild(plink);}if(cpgnum==articlepgs)next.className='hide';else{var npg=cpgnum+1,cspan=doc.createElement('SPAN'),clink=doc.createElement('A'),nlink=doc.createElement('A');nlink.appendChild(doc.createTextNode('Next'));nlink.href=articleurl+asep+'page='+npg;next.insertBefore(nlink,next.firstChild);clink.appendChild(doc.createTextNode('Continued...'));clink.href=articleurl+asep+'page='+npg;cspan.className='continued';cspan.appendChild(clink);var cpgs=cpg.getElementsByTagName('P');cpgs[cpgs.length-1].appendChild(cspan);}var apaginate=doc.getElementById('pagination');apaginate.className='show'}}

function embedArticleContent(){if(sById){var cpg=(cpgnum)?doc.getElementById('page'+cpgnum):doc.getElementById('articleGraphs');if(!cpg)return;var graphs=cpg.getElementsByTagName('P');if(!graphs)return;var glen=graphs.length,tpos=0;var atools=doc.getElementById('relatedContent'),amore=doc.getElementById('relatedContent');if(atools||amore){var tpos=(glen>1)?1:0,tpg=graphs[tpos],aembed=doc.createElement('DIV');aembed.id='articleEmbed';if(atools){var atoolsc=atools.cloneNode(true),atext=doc.createElement('DIV');atext.className='toolsHeader';atoolsc.className='embed';atext.appendChild(doc.createTextNode('Article Tools'));aembed.appendChild(atoolsc);}if(!amore){var amorec=amore.cloneNode(true);amorec.className='embed';aembed.appendChild(amorec);}tpg.parentNode.insertBefore(aembed,tpg);}var amid=doc.getElementById('articleBodyMiddle');var mpos=tpos+4;if(amid&&(glen>mpos+1)){var article=doc.getElementById('article'),mpg=graphs[mpos];mpg.parentNode.insertBefore(amid,mpg);}}}

function displayEmbed(){
if(document.location.search.indexOf("comments=all")==-1){
  if (doc.getElementById('relatedPhoto')) 
    var relImg = doc.getElementById('relatedPhoto').innerHTML; 
  else 
    {relImg = '0'}; 
  if (doc.getElementById('relatedBox')) 
    var relBox = doc.getElementById('relatedBox').innerHTML; 
  else 
  {relBox = '0'}; 
  if (doc.getElementById('relatedGlobe'))
    var relGlobe = doc.getElementById('relatedGlobe').innerHTML;
  else
    {relGlobe = '0'};
  if ((relBox != '0') || (relImg != '0') || (relGlobe != '0')){doc.getElementById('articleEmbed').style.display='block';}else{};}
}

function findPosY(obj) {
    var curtop = 0;
    if(obj.offsetParent)
        while(1)
	    {
		curtop += obj.offsetTop;
		if(!obj.offsetParent)
		    break;
		obj = obj.offsetParent;
	    } else if(obj.y) {
        curtop += obj.y;
    }
    return curtop;
}


function bdc_showCompanionAd(adstring){
	var div = document.createElement('div');
	div.setAttribute('id', 'bdc_videoCompanionAd');
	var iframe = document.createElement('iframe');
	iframe.setAttribute('id', 'bdc_vcaIFrame');
	iframe.setAttribute('name', 'bdc_vcaIFrame');
	iframe.setAttribute('scrolling', 'no');
	iframe.setAttribute('frameborder', '0');
	div.appendChild(iframe);
	document.getElementById('Col2Top').appendChild(div);
	var doc = null;
	if(iframe.contentDocument){
	doc = iframe.contentDocument;
	} else if(iframe.contentWindow) {
	doc = iframe.contentWindow.document;
	} else if(iframe.document) {
	doc = iframe.document;
	}
	
	
	var targetY = findPosY($('#bdc_bcFlash')[0]);	 
	targetY = targetY - 200;
	if (jQuery.browser.msie == true){
	targetY -= 10;
	}
	doc.open();
	doc.write('<html><head><style type="text/css">body{margin:0px; padding:0px; background: #121212;}<'+'/style><body margin="0" padding="0" 	bgcolor="#121212"><center>'+adstring+'</center><'+'/body><'+'/html>');
	doc.close();
	$('#bdc_videoCompanionAd').css('margin-top', targetY);
	$('#bdc_videoCompanionAd').slideDown(1000);
}

// OutBrain 
var OB_permalink = '';
var OB_widgetId = 'AR_1';
var OB_Template = 'bostonglobe';
var OB_demoMode = false;
var OBITm = '1266547296170';
var OB_langJS = 'http://widgets.outbrain.com/lang_en.js';
function runOutBrain()
{
    OB_permalink = OutbrainPermaLink;
    // TODO: Why are we doing nothing if if passes this test? Why not test for the
    // opposite and then just do everything in the if block?
    if(document.location.search.indexOf('comments=all') != -1) {}
    else {
	if(typeof(OB_Script) != 'undefined')
	    OutbrainStart();
	else {
	    var OB_Script = true;
	    var str = '<script src=\"http:\/\/widgets.outbrain.com\/outbrainWidget.js\" type=\"text\/javascript\"><\/script>';
	    document.write(str);
	}
    }
}

if (!artTaxonomy)
    artTaxonomy = [null,null];

if ($.inArray('Community/Stories to inspire', artTaxonomy) == 0){
	OAS_query='keyword=inspire';
}


$(function(){
	var counter = $('.hideMe #bdc_digg span.db-count');
        var inpageCounter = $('#bdc_digg span.db-count');
        var num = counter.text();
	inpageCounter.html( num == '0' ? 'Submit to Digg' : (num == '1' ? '1 person Dugg this' : num + ' people Dugg this' ));
    });

$(function(){
$.getJSON(jsonURL, function(data) {

        if (data.count == 1)
	    $('#tweetCount').html(data.count + tweetTextSolo);
        else
	    if (data.count > 1)
		$('#tweetCount').html(data.count + tweetTextMulti);
	    else
		$('#tweetCount').html(preTweetText);
    });
    });


// Enable print styles
$(function () {

  $('#sharePrint a').addClass('print-js').attr('href', '#').click(function () {
    print();
    return false;
  });

});

// create comma-separated list of artcats for OAS
if (typeof artCats!="undefined")
  var OAS_query = "keywords=" + artCats.join();

/*
*	Text sizing (Moved from bcom_textsize_supersizeMe.js)
*/
function fontsizeup() {
  active = getActiveStyleSheet();
  switch (active) {
    case 'A-' : 
      setActiveStyleSheet('A');
      break;
    case 'A' : 
      setActiveStyleSheet('A+');
      break;
    case 'A+' : 
      setActiveStyleSheet('A++');
      break;
    case 'A++' :
      break;
    default :
      setActiveStyleSheet('A+');
      break;
  }
}

function fontsizedown() {
  active = getActiveStyleSheet();
  switch (active) {
    case 'A++' : 
      setActiveStyleSheet('A+');
      break;
    case 'A+' : 
      setActiveStyleSheet('A');
      break;
    case 'A' : 
      setActiveStyleSheet('A-');
      break;
    case 'A-' : 
       break;
    default :
      setActiveStyleSheet('A-');
      break;
  }
}

function setActiveStyleSheet(title) {
  var i, a, main;
  for(i=0; (a = document.getElementsByTagName("link")[i]); i++) {
    if(a.getAttribute("rel").indexOf("style") != -1 && a.getAttribute("title")) {
      a.disabled = true;
      if(a.getAttribute("title") == title) a.disabled = false;
    }
  }
}

function getActiveStyleSheet() {
  var i, a;
  for(i=0; (a = document.getElementsByTagName("link")[i]); i++) {
    if(a.getAttribute("rel").indexOf("style") != -1 && a.getAttribute("title") && !a.disabled) return a.getAttribute("title");
  }
  return null;
}

$(document).ready(function(){

	/*
	*	Load Scripts with LAB.js
	*/
	var switchTo5x = false; // this is defined for ShareThis
	$LAB
	.script('http://w.sharethis.com/button/buttons.js')
	.wait(function(){
		stLight.options({publisher:'f4e524da-6618-45aa-87e1-ac7fc4ea555e'});
	}) 
	.script('/r/SysConfig/WebPortal/Boston/Framework/js/lib/jquery.shareify.js')
	.wait(function(){
		$(".share_button").shareify({'image_dir': 'img/'});
	});

});

// Removed checkComm() from inline <body onload="">
// There is probably a much better way to do this.
$(window).load(function(){
	checkComm();
});
