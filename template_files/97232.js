
/* services-v2.9.9-hotfix8 | 2012/12/12 | 2012-12-20 00:36:19 -0500 */

/* 
    Begin ESI Processing 
*/



/* 
    End ESI Processing 
*/

var isPushDown = false;
if (window['console'] === undefined)
    window.console = { log: function(){} };
var isBad_FFox=false;
try{
if (navigator.userAgent.indexOf("Firefox")!=-1 && (navigator.platform == "MacIntel" || navigator.platform == "MacPPC")) {
        isBad_FFox = true;
}
function isEven(value){
    if (value%2 == 0) return true;
    return false;
}
function FF_Bug_resize() {
	try {
    	if (isBad_FFox) {
	        var width = window.innerWidth;
	        if (isEven(width)) window.resizeTo(width-1, window.outerHeight);
    	}
	} catch(e) {};
}
FF_Bug_resize();
if (window.addEventListener) window.addEventListener("resize", FF_Bug_resize,false);
} catch(e){};
console.log("mikenote:prod");
//static text begin
//Version detection begin this is static text
var isIE  = (navigator.appVersion.indexOf("MSIE") != -1) ? true : false;
var isWin = (navigator.appVersion.toLowerCase().indexOf("win") != -1) ? true : false;
var isOpera = (navigator.userAgent.indexOf("Opera") != -1) ? true : false;
function ControlVersion()
{
    var version =-1;var axo;var e;
    try {
        axo = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");
        version = axo.GetVariable("$version");
    } catch (e) {
    }
    return version;
}
// JavaScript helper required to detect Flash Player PlugIn version information
function GetSwfVer(){
    // NS/Opera version >= 3 check for Flash plugin in plugin array
    var flashVer = -1;
    
    if (navigator.plugins != null && navigator.plugins.length > 0) {
        if (navigator.plugins["Shockwave Flash 2.0"] || navigator.plugins["Shockwave Flash"]) {
            var swVer2 = navigator.plugins["Shockwave Flash 2.0"] ? " 2.0" : "";
            var flashDescription = navigator.plugins["Shockwave Flash" + swVer2].description;
            var descArray = flashDescription.split(" ");
            var tempArrayMajor = descArray[2].split(".");
            var versionMajor = tempArrayMajor[0];
            
            if (tempArrayMajor.length > 1) {
            	versionMajor = versionMajor + "." + tempArrayMajor[1];
            }
            else {
            	versionMajor = versionMajor + ".0";
            }
            
            flashVer = versionMajor;
        }
    }
    else if ( isIE && isWin ) {
        flashVer = ControlVersion();
    }   
    return flashVer;
}
function DetectFlashVer(reqMajorVer)
{
    versionStr = GetSwfVer();
    if (versionStr == -1 ) {
        return false;
    } else if (versionStr != 0) {
        if(isIE && isWin && !isOpera) {
            tempString        = versionStr.split(" ")[1];       
            versionArray      = tempString.split(",");
        } else {
            versionArray      = versionStr.split(".");
        }
        
        var version = versionArray[0];
        if (versionArray.length > 1) {
        	version = version + "." + versionArray[1];
        }
        
        if (parseFloat(version) >= parseFloat(reqMajorVer)) {
            return true;
        }
        return false;
    }
}

//version detection end


function cgGetName() {
    return glam.metrics.getRecordEventFunctionName();
}
var pUID = Math.ceil(Math.random()*100000);

function pictelaGenerateGuid() {
    var result,i,j;
    result='';
    for (j=0; j<32; j++) {
        if (j==8||j==12||j==16||j==20) {
            result=result+'-';
        }
        i=Math.floor(Math.random()*16).toString(16).toUpperCase();
        result=result+i;
    }
    return result;
}

function pictelaReadCookie(name) {
    var cookiename = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++)
    {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(cookiename) == 0) return c.substring(cookiename.length,c.length);
    }
    return null;
}

function pictelaSendCookie(name,value,duration) {
    //var cookieUrlCall = new Image();
    //cookieUrlCall.src = 'http://www.pictela.net/client/common/esi/cookies/write.esi?name='+name+'&value='+value+'&duration='+duration+'&cb='+Math.round(Math.random()*1000000);
    var cookieCall = document.createElement("script");
    cookieCall.setAttribute('async',true);
    cookieCall.type = 'text/javascript';
    cookieCall.src = 'http://www.pictela.net/client/common/esi/cookies/write.esi?name='+name+'&value='+value+'&duration='+duration+'&cb='+Math.round(Math.random()*1000000);

    document.getElementsByTagName('script')[0].parentNode.appendChild(cookieCall);
}


    /*
    This is not really commented out
    


        
        
        
    
    */
    var pictelaCliID = 'e4b1bad3-40cc-581f-df9d-650c6b699a1c';


// static ends//default creative tracking
var _default_creative = '';


var pictelaSID = pictelaGenerateGuid();
//perl flash var string
var ptela_flashvars_str = "preloaderImg=http%3A%2F%2Fmedia-aol.pictela.net%2Fassets%2Fimg%2Fb1%2Fe9%2Fimg-dmc_content-40069-300x400.jpg&syndicationId=97232&welcomeMat=&type=ad&adNetwork=AOL&width=300&height=1050&tp=int&tpfull=http%3A%2F%2Fint-t.pictela.net%2Ft.gif&clickThruUrl=http%3A%2F%2Fad.doubleclick.net%2Fclk%3B264599213%3B84226153%3Bl&globalClick=&skin=&svcs=www.pictela.net&trans=norm&videoAutoPlay=false&videoMute=false&photoAutoPlay=false&cb=2191c645aa1177c1365a57358b98c9fe&galleryOveride=www.pictela.net%2Fpublished%2Fgallery%2F97232.xml";

//syndicationId is part of the perl flash vars not as a single string
var syndicationId = 97232;
var ptela_pctVr = '4.0.0.2012.06.03';    

// full tracking pixel url
var ptela_tpfull = "http://int-t.pictela.net/t.gif";
var g_pct_clicktracker = typeof(this["g_pct_clicktracker"]) !== 'undefined' ? this["g_pct_clicktracker"] : '';
var g_pct_siteid = typeof(this["g_pct_siteid"]) !== 'undefined' ? this["g_pct_siteid"] : '';
var g_pct_impression = typeof(this["g_pct_impression"]) !== 'undefined' ? this["g_pct_impression"] : '';
var OOBClickTrack = typeof(this["OOBClickTrack"]) !== 'undefined' ? this["OOBClickTrack"] : '';
var g_pct_networkid = typeof(this["g_pct_networkid"]) !== 'undefined' ? this["g_pct_networkid"] : '';

/* */
ptela_tpfull = "http://int-t.pictela.net/t.gif";

/* */
function pictelaPixel(url){
			type = (typeof(type) === null || typeof(type) ==='undefined')?'unspecified': type;
			var pixel = new Image();
			try{
				pixel.src = url;
			}catch(e){
			}
};

function pictelaAnalCall() {
    var pictelaImpression = ptela_tpfull+"?SynID="+syndicationId+"&SID="+pictelaSID+"&CliID="+pictelaCliID+"&evtT=initEvent&evtInc=-1";
    pictelaImpression += '&networkID=' + g_pct_networkid ;
    pictelaImpression += "&epc="+new Date().getTime()+"&pctVr=" + ptela_pctVr;
    pictelaImpression += '&platform=desktop&sizeid=175';
	
	    /* */
    
    pictelaImpression = pictelaImpression + '&creativeLabel=';
    
    /* */
		

        /* */
    
        var thirdPartyPixel = "http://ad.doubleclick.net/ad/N4359.centro.netOX4600/B6818540.472;sz=1x1;ord={{{PICTELA_CACHEBUSTER}}}?"
        var PtelaRN=Math.floor(Math.random()*1000000000);
        document.createElement("img").src=thirdPartyPixel.replace(/{{{PICTELA_CACHEBUSTER}}}/g,PtelaRN);
    
    /* */
    


    if (typeof(g_pct_impression) == "string" && g_pct_impression !== "")
    {
        document.write('<div id="P3rdPartyTrack'+pUID+'" style="position:absolute; display:none; ">');
        document.write('<img border="0" src="'+ g_pct_impression+'"  />');
        document.write('</div>');
    }
			//document.write('<div id="PictelaTrack" style="position:absolute; display:none; "><img src="http://secure-us.imrworldwide.com/cgi-bin/m?ci=us-pictela&cg='+pictelaCliID+'&si='+pictelaSID+'&rnd='+syndicationId+"|"+pUID+'"/></div>');
	    return pictelaImpression; 
}


ptela_flashvars_str += "&DivID=pictela0&CliID="+pictelaCliID+"&SID="+pictelaSID+"&g_pct_clicktracker="+escape(g_pct_clicktracker)+"&g_pct_siteid="+escape(g_pct_siteid)+"&msTracking="+escape(OOBClickTrack)+ "&" + "jsVr=4" + "&";


	var _d = new Date();
	var _epc = _d.getTime();
    g_pct_networkid =  typeof(g_pct_networkid)!=='undefined'? g_pct_networkid : '';
    g_pct_clicktracker = typeof(g_pct_clicktracker)!=='undefined'? g_pct_clicktracker : '';

    var _url = 'http://www.pictela.net/client/defaultimage/id/97232?' +
               'SynID=97232&' +
               'evtInc=0&value=0&epc=' + _epc + '&AdSiteID=&networkID=' + g_pct_networkid + '&' +
               'appName=Global&appID=0&pctVr=' + ptela_pctVr  + '&appLocation=0&key2=0&action=backupInitEvent&key1=0&isEngagement=0&' +
               'SID=' + pictelaSID + '&' +
               'CliID=' + pictelaCliID;
    _url += '&platform=desktop&sizeid=175';

    var defaultCreativeClickUrl = 'http://www.pictela.net/client/defaultlink/id/97232?';
    defaultCreativeClickUrl += "appName=Global&appLocation=0&action=urlClick&key1=default&key2=&value=http%3A%2F%2Fad.doubleclick.net%2Fclk%3B264599213%3B84226153%3Bl";
    defaultCreativeClickUrl += "&isEngagement=1&pctVr=" + ptela_pctVr  + "&SynID=97232";
    defaultCreativeClickUrl += "&SID=" + pictelaSID + "&CliID=" + pictelaCliID + "&epc=" + new Date().getTime() + "&evtInc=0&" + "networkID=" + g_pct_networkid;
    defaultCreativeClickUrl += '&platform=desktop&sizeid=175';

				_url = _url + '&cb=2191c645aa1177c1365a57358b98c9fe';
		defaultCreativeClickUrl = defaultCreativeClickUrl + '&cb=2191c645aa1177c1365a57358b98c9fe';
		
	//-PS-310 : prepends third party click tracker to default creative url if it exists
	defaultCreativeClickUrl = g_pct_clicktracker + defaultCreativeClickUrl;
	
    var _default_creative = '<a href="' + defaultCreativeClickUrl + '" target="_blank" class="ffx"><img border="0" src="' + _url + '"  /></a>';

var pictelaDefault = _default_creative;
var pictelaMinFlashVersion = 9;
var coreSwfLoadTiming = '';
var coreSwfLoadDelay = 250;
var coreSwfLoaded = false;
var is_expandable = false;


this["randID"]=Math.floor(Math.random()*10000);
this["ptelaUID"] = syndicationId+""+randID;

this["ptela_Devil_data"+ptelaUID] = {"props":{"logo":{"url":"http:\/\/media-aol.pictela.net\/assets\/img\/13\/e6\/img-logo-40405-270x40.gif","type":"img","clickURL":"http:\/\/ad.doubleclick.net\/clk;264599213;84226153;l"},"footer":{"htmlText":"Learn more at <a href=\"http:\/\/ad.doubleclick.net\/clk;264647586;84226153;s\">bankofamerica.com\/Boston<\/a>","x":11},"globalColors":{"brand":"e21736"},"logo_foreground":{"url":"http:\/\/media-aol.pictela.net\/assets\/img\/8a\/64\/img-logo-40002-270x47.jpg","y":23,"swfWidth":270,"swfHeight":47,"clickURL":"http:\/\/ad.doubleclick.net\/clk;264599213;84226153;l","Scale":"NOSCALE"},"language":"English","languageHashes":"{ \t\"Sunday\":{spanish:\"Domingo\", french:\"Dimanche\"},  \t\"Monday\":{spanish:\"Lunes\", french:\"Lundi\"}, \t\"Tuesday\":{spanish:\"Martes\", french:\"Mardi\"}, \t\"Wednesday\":{spanish:\"Mi\u00e9rcoles\", french:\"Mercredi\"},  \t\"Thursday\":{spanish:\"Jueves\", french:\"Jeudi\"},  \t\"Friday\":{spanish:\"Viernes\", french:\"Vendredi\"},  \t\"Saturday\":{spanish:\"S\u00e1bado\", french:\"Samedi\"}, \t \t\"January\":{spanish:\"Enero\", french:\"Javier\"}, \t\"February\":{spanish:\"Febrero\", french:\"F\u00e9vrier\"}, \t\"March\":{spanish:\"Marzo\", french:\"Mars\"}, \t\"April\":{spanish:\"Abril\", french:\"Avril\"}, \t\"May\":{spanish:\"Mayo\", french:\"Mai\"}, \t\"June\":{spanish:\"Junio\", french:\"Juin\"}, \t\"July\":{spanish:\"Julio\", french:\"Juillet\"}, \t\"August\":{spanish:\"Agosto\", french:\"Ao\u00fbt\"}, \t\"September\":{spanish:\"Septiembre\", french:\"Septembre\"}, \t\"October\":{spanish:\"Octubre\", french:\"Octobre\"}, \t\"November\":{spanish:\"Noviembre\", french:\"Novembre\"}, \t\"December\":{spanish:\"Diciembre\", french:\"D\u00e9cembre\"}, \t \tweek:{spanish:\"semana\", french:\"semaine\"}, \tday :{spanish:\"day\", french:\"jour\"}, \thour:{spanish:\"hora\", french:\"heure\"}, \tminute:{spanish:\"minuto\", french:\"minute\"}, \tToday :{spanish:\"Hoy\", french:\"Aujourd'hui\"}, \tYesterday:{spanish:\"Ayer\", french:\"Hier\"}, \t\" and \":{spanish:\" y \", french:\" et \"}, \t\" ago \":{spanish:\" antes\", french:\"\"}, \tjustNow:{spanish:\"Ahora\", french:\"Maintenant\"}, \tlast:{spanish: \"Pasada\", french:\"Dernier\"}, \t\" at \":{spanish: \" a \", french:\" au \"}, \t \tNext:{spanish:\"Pr\u00f3ximo\", french:\"Suivant\"}, \t\"COLLAPSE\":{spanish: \" REDUCIR\", french:\" REDUIRE\"}, \t\"VIEW LARGER\":{spanish:\"  AGRANDAR\", french:\"AGRANDIR\"}, \t \t\"CLOSE [x]\":{english:\"CLOSE\", spanish:\"REDUCIR [x]\", french:\"FERMER [x]\"}, \t\"MORE VIDEOS\":{spanish:\"M\u00c1S VIDEOS\", french:\"PLUS DE VIDEOS\"} , Replay:{spanish:\"Repetir\",french:\"rejoicer\"}\t }","291244":{"app_load_timing":"post_doc_onload","title_txt":{"text":"Let us know what you think"}},"291246":{"app_load_timing":"post_doc_onload","playbutton_mc":{"arrow_mc":{"color":"FFFFFF"},"circle_mc":{"color":"FFFFFF"},"y":97},"thumbStuff":{"randomMax":1},"videoExpand":{"afterVideo":{"nextVideo_btn":{"arrow_mc":{"color":"FFFFFF"},"circle_mc":{"color":"FFFFFF"}},"replay_btn":{"circle_mc":{"color":"FFFFFF"},"replay_mc":{"color":"FFFFFF"}}},"closeButtonText":"<b>CLOSE<\/b>","videoControls_mc":{"playPause_mc":{"color":"FFFFFF"},"progressBar_mc":{"color":"FFFFFF"}}}},"291255":{"app_load_timing":"post_doc_onload","infoBox":{"backgroundAlpha":"0","buttonBackgroundColor":"FFFFFF"},"thumbStuff":{"randomMax":1}},"analytics":{"platform":"desktop","sizeid":"175"}},"apps":[{"asset_array_member_id":"291246","location":"1","asset_name":"Media Gallery","app_name":"Media Gallery","app_key":"galleryApp","app_src":"apps\/gallery.swf","internal_yn":"1","asset_detail_app_type_cd":"LARGE_DEVIL"},{"asset_array_member_id":"291244","location":"2","asset_name":"Standalone","app_name":"Standalone","app_key":"standaloneApp","app_src":"apps\/SwfLoaderApp.swf","internal_yn":"1","asset_detail_app_type_cd":"SMALL_DEVIL"},{"asset_array_member_id":"291255","location":"3","asset_name":"Gallery v3","app_name":"Gallery v3","app_key":"gallerySecondary_v3","app_src":"apps\/galleryV3.swf","internal_yn":"1","asset_detail_app_type_cd":"SMALL_DEVIL"}]};
this["ptela_Devil_data"+ptelaUID].xml = '<?xml version="1.0" encoding="UTF-8"?><pictela uid="97232">     <Assets action="">                                     <asset type="swf" order="1"  Scale="SCALETOFIT" Align="TC" domain="http://media-aol.pictela.net/"  parentAssetArrayMemberId="291244">     <title>Photo Title</title>     <filename><![CDATA[swf/swf-dmc_content_45547.swf?cb=e4bcc7012b3c1ba30231c637a196251c]]></filename>     <imageFile>         <baseFileName><![CDATA[assets/img/00/6a/img-dmc_content-42444]]></baseFileName>         <extension><![CDATA[jpg?cb=e4bcc7012b3c1ba30231c637a196251c]]></extension>     </imageFile>     <caption><![CDATA[]]></caption>     <clickThruUrl><![CDATA[]]></clickThruUrl>     <assetId>45547</assetId>     <assetArrayMemberId>294937</assetArrayMemberId>     <autoPlay>No</autoPlay>     </asset>                                                <asset type="photo" order="1"  domain="http://media-aol.pictela.net/assets/img/b1/e9/"  parentAssetArrayMemberId="291255">     <title>Photo Title</title>     <imageFile>         <baseFileName><![CDATA[img-dmc_content-40069]]></baseFileName>         <extension><![CDATA[jpg?cb=e4bcc7012b3c1ba30231c637a196251c]]></extension>     </imageFile>     <caption><![CDATA[ <a href="http://ad.doubleclick.net/clk;264647569;84226153;t" class="callToAction"><font color = "#e21736"><font size = "10"><b>See How</b></font></a>]]></caption>     <clickThruUrl><![CDATA[]]></clickThruUrl>     <assetId>40069</assetId>     <assetArrayMemberId>291262</assetArrayMemberId>     <autoPlay>No</autoPlay>     <props/>     </asset>                                                  <asset type="video" order="1"  domain="http://media-aol.pictela.net/assets/img/bc/23/"  parentAssetArrayMemberId="291246">     <smil>http://media-aol.pictela.net/vid/vid-clip-39982.smil</smil>     <imageThumb>         <baseFileName><![CDATA[img-dmc_content-39994]]></baseFileName>         <extension><![CDATA[jpg?cb=e4bcc7012b3c1ba30231c637a196251c]]></extension>     </imageThumb>     <caption><![CDATA[]]></caption>     <clickThruUrl><![CDATA[]]></clickThruUrl>     <assetId>39982</assetId>     <assetArrayMemberId>291247</assetArrayMemberId>     <autoPlay>No</autoPlay>     </asset>                                                <asset type="photo" order="2"  domain="http://media-aol.pictela.net/assets/img/56/8b/"  parentAssetArrayMemberId="291255">     <title>Photo Title</title>     <imageFile>         <baseFileName><![CDATA[img-dmc_content-40084]]></baseFileName>         <extension><![CDATA[jpg?cb=e4bcc7012b3c1ba30231c637a196251c]]></extension>     </imageFile>     <caption><![CDATA[ <a href="http://ad.doubleclick.net/clk;264647570;84226153;l" class="callToAction"><font color = "#e21736"><font size = "10"><b>See How</b></font></a>]]></caption>     <clickThruUrl><![CDATA[]]></clickThruUrl>     <assetId>40084</assetId>     <assetArrayMemberId>291263</assetArrayMemberId>     <autoPlay>No</autoPlay>     <props/>     </asset>                                                  <asset type="video" order="2"  domain="http://media-aol.pictela.net/assets/img/db/0f/"  parentAssetArrayMemberId="291246">     <smil>http://media-aol.pictela.net/vid/vid-clip-39988.smil</smil>     <imageThumb>         <baseFileName><![CDATA[img-dmc_content-40001]]></baseFileName>         <extension><![CDATA[jpg?cb=e4bcc7012b3c1ba30231c637a196251c]]></extension>     </imageThumb>     <caption><![CDATA[]]></caption>     <clickThruUrl><![CDATA[]]></clickThruUrl>     <assetId>39988</assetId>     <assetArrayMemberId>291253</assetArrayMemberId>     <autoPlay>No</autoPlay>     </asset>                                                <asset type="photo" order="3"  domain="http://media-aol.pictela.net/assets/img/82/84/"  parentAssetArrayMemberId="291255">     <title>Photo Title</title>     <imageFile>         <baseFileName><![CDATA[img-dmc_content-40072]]></baseFileName>         <extension><![CDATA[jpg?cb=e4bcc7012b3c1ba30231c637a196251c]]></extension>     </imageFile>     <caption><![CDATA[ <a href="http://ad.doubleclick.net/clk;264647572;84226153;n" class="callToAction"><font color = "#e21736"><font size = "10"><b>See How</b></font></a>]]></caption>     <clickThruUrl><![CDATA[]]></clickThruUrl>     <assetId>40072</assetId>     <assetArrayMemberId>291256</assetArrayMemberId>     <autoPlay>No</autoPlay>     <props/>     </asset>                                                  <asset type="video" order="3"  domain="http://media-aol.pictela.net/assets/img/25/86/"  parentAssetArrayMemberId="291246">     <smil>http://media-aol.pictela.net/vid/vid-clip-39983.smil</smil>     <imageThumb>         <baseFileName><![CDATA[img-dmc_content-39995]]></baseFileName>         <extension><![CDATA[jpg?cb=e4bcc7012b3c1ba30231c637a196251c]]></extension>     </imageThumb>     <caption><![CDATA[]]></caption>     <clickThruUrl><![CDATA[]]></clickThruUrl>     <assetId>39983</assetId>     <assetArrayMemberId>291248</assetArrayMemberId>     <autoPlay>No</autoPlay>     </asset>                                                <asset type="photo" order="4"  domain="http://media-aol.pictela.net/assets/img/9d/27/"  parentAssetArrayMemberId="291255">     <title>Photo Title</title>     <imageFile>         <baseFileName><![CDATA[img-dmc_content-40074]]></baseFileName>         <extension><![CDATA[jpg?cb=e4bcc7012b3c1ba30231c637a196251c]]></extension>     </imageFile>     <caption><![CDATA[ <a href="http://ad.doubleclick.net/clk;264647573;84226153;o" class="callToAction"><font color = "#e21736"><font size = "10"><b>See How</b></font></a>]]></caption>     <clickThruUrl><![CDATA[]]></clickThruUrl>     <assetId>40074</assetId>     <assetArrayMemberId>291257</assetArrayMemberId>     <autoPlay>No</autoPlay>     <props/>     </asset>                                                  <asset type="video" order="4"  domain="http://media-aol.pictela.net/assets/img/c4/13/"  parentAssetArrayMemberId="291246">     <smil>http://media-aol.pictela.net/vid/vid-clip-39984.smil</smil>     <imageThumb>         <baseFileName><![CDATA[img-dmc_content-39996]]></baseFileName>         <extension><![CDATA[jpg?cb=e4bcc7012b3c1ba30231c637a196251c]]></extension>     </imageThumb>     <caption><![CDATA[]]></caption>     <clickThruUrl><![CDATA[]]></clickThruUrl>     <assetId>39984</assetId>     <assetArrayMemberId>291249</assetArrayMemberId>     <autoPlay>No</autoPlay>     </asset>                                                <asset type="photo" order="5"  domain="http://media-aol.pictela.net/assets/img/0a/df/"  parentAssetArrayMemberId="291255">     <title>Photo Title</title>     <imageFile>         <baseFileName><![CDATA[img-dmc_content-45994]]></baseFileName>         <extension><![CDATA[jpg?cb=e4bcc7012b3c1ba30231c637a196251c]]></extension>     </imageFile>     <caption><![CDATA[ <a href="http://ad.doubleclick.net/clk;264647574;84226153;p" class="callToAction"><font color = "#e21736"><font size = "10"><b>See How</b></font></a>]]></caption>     <clickThruUrl><![CDATA[]]></clickThruUrl>     <assetId>45994</assetId>     <assetArrayMemberId>291258</assetArrayMemberId>     <autoPlay>No</autoPlay>     <props/>     </asset>                                                  <asset type="video" order="5"  domain="http://media-aol.pictela.net/assets/img/41/7c/"  parentAssetArrayMemberId="291246">     <smil>http://media-aol.pictela.net/vid/vid-clip-46042.smil</smil>     <imageThumb>         <baseFileName><![CDATA[img-dmc_content-45990]]></baseFileName>         <extension><![CDATA[jpg?cb=e4bcc7012b3c1ba30231c637a196251c]]></extension>     </imageThumb>     <caption><![CDATA[]]></caption>     <clickThruUrl><![CDATA[]]></clickThruUrl>     <assetId>46042</assetId>     <assetArrayMemberId>291251</assetArrayMemberId>     <autoPlay>No</autoPlay>     </asset>                                                <asset type="photo" order="6"  domain="http://media-aol.pictela.net/assets/img/e0/25/"  parentAssetArrayMemberId="291255">     <title>Photo Title</title>     <imageFile>         <baseFileName><![CDATA[img-dmc_content-40095]]></baseFileName>         <extension><![CDATA[jpg?cb=e4bcc7012b3c1ba30231c637a196251c]]></extension>     </imageFile>     <caption><![CDATA[ <a href="http://ad.doubleclick.net/clk;264647576;84226153;r" class="callToAction"><font color = "#e21736"><font size = "10"><b>See How</b></font></a>]]></caption>     <clickThruUrl><![CDATA[]]></clickThruUrl>     <assetId>40095</assetId>     <assetArrayMemberId>291259</assetArrayMemberId>     <autoPlay>No</autoPlay>     <props/>     </asset>                                                  <asset type="video" order="6"  domain="http://media-aol.pictela.net/assets/img/ba/26/"  parentAssetArrayMemberId="291246">     <smil>http://media-aol.pictela.net/vid/vid-clip-39985.smil</smil>     <imageThumb>         <baseFileName><![CDATA[img-dmc_content-39997]]></baseFileName>         <extension><![CDATA[jpg?cb=e4bcc7012b3c1ba30231c637a196251c]]></extension>     </imageThumb>     <caption><![CDATA[]]></caption>     <clickThruUrl><![CDATA[]]></clickThruUrl>     <assetId>39985</assetId>     <assetArrayMemberId>291250</assetArrayMemberId>     <autoPlay>No</autoPlay>     </asset>                                                <asset type="photo" order="7"  domain="http://media-aol.pictela.net/assets/img/dc/49/"  parentAssetArrayMemberId="291255">     <title>Photo Title</title>     <imageFile>         <baseFileName><![CDATA[img-dmc_content-40090]]></baseFileName>         <extension><![CDATA[jpg?cb=e4bcc7012b3c1ba30231c637a196251c]]></extension>     </imageFile>     <caption><![CDATA[ <a href="http://ad.doubleclick.net/clk;264647579;84226153;u" class="callToAction"><font color = "#e21736"><font size = "10"><b>See How</b></font></a>]]></caption>     <clickThruUrl><![CDATA[]]></clickThruUrl>     <assetId>40090</assetId>     <assetArrayMemberId>291261</assetArrayMemberId>     <autoPlay>No</autoPlay>     <props/>     </asset>                                                  <asset type="video" order="7"  domain="http://media-aol.pictela.net/assets/img/56/a9/"  parentAssetArrayMemberId="291246">     <smil>http://media-aol.pictela.net/vid/vid-clip-39987.smil</smil>     <imageThumb>         <baseFileName><![CDATA[img-dmc_content-39999]]></baseFileName>         <extension><![CDATA[jpg?cb=e4bcc7012b3c1ba30231c637a196251c]]></extension>     </imageThumb>     <caption><![CDATA[]]></caption>     <clickThruUrl><![CDATA[]]></clickThruUrl>     <assetId>39987</assetId>     <assetArrayMemberId>291252</assetArrayMemberId>     <autoPlay>No</autoPlay>     </asset>                                                <asset type="photo" order="8"  domain="http://media-aol.pictela.net/assets/img/6a/c6/"  parentAssetArrayMemberId="291255">     <title>Photo Title</title>     <imageFile>         <baseFileName><![CDATA[img-dmc_content-40093]]></baseFileName>         <extension><![CDATA[jpg?cb=e4bcc7012b3c1ba30231c637a196251c]]></extension>     </imageFile>     <caption><![CDATA[ <a href="http://ad.doubleclick.net/clk;264647583;84226153;p" class="callToAction"><font color = "#e21736"><font size = "10"><b>See How</b></font></a>]]></caption>     <clickThruUrl><![CDATA[]]></clickThruUrl>     <assetId>40093</assetId>     <assetArrayMemberId>291260</assetArrayMemberId>     <autoPlay>No</autoPlay>     <props/>     </asset>                                                  <asset type="video" order="8"  domain="http://media-aol.pictela.net/assets/img/60/74/"  parentAssetArrayMemberId="291246">     <smil>http://media-aol.pictela.net/vid/vid-clip-39989.smil</smil>     <imageThumb>         <baseFileName><![CDATA[img-dmc_content-40000]]></baseFileName>         <extension><![CDATA[jpg?cb=e4bcc7012b3c1ba30231c637a196251c]]></extension>     </imageThumb>     <caption><![CDATA[]]></caption>     <clickThruUrl><![CDATA[]]></clickThruUrl>     <assetId>39989</assetId>     <assetArrayMemberId>291254</assetArrayMemberId>     <autoPlay>No</autoPlay>     </asset>                                                <asset type="photo" order="9"  domain="http://media-aol.pictela.net/assets/img/a0/42/"  parentAssetArrayMemberId="291255">     <title>Photo Title</title>     <imageFile>         <baseFileName><![CDATA[img-dmc_content-45135]]></baseFileName>         <extension><![CDATA[jpg?cb=e4bcc7012b3c1ba30231c637a196251c]]></extension>     </imageFile>     <caption><![CDATA[ <a href="http://ad.doubleclick.net/clk;265134773;84226153;i" class="callToAction"><font color = "#e21736"><font size = "10"><b>See How</b></font></a>]]></caption>     <clickThruUrl><![CDATA[]]></clickThruUrl>     <assetId>45135</assetId>     <assetArrayMemberId>294824</assetArrayMemberId>     <autoPlay>No</autoPlay>     <props/>     </asset>                                                  <asset type="video" order="9"  domain="http://media-aol.pictela.net/assets/img/e9/43/"  parentAssetArrayMemberId="291246">     <smil>http://media-aol.pictela.net/vid/vid-clip-45124.smil</smil>     <imageThumb>         <baseFileName><![CDATA[img-dmc_content-45573]]></baseFileName>         <extension><![CDATA[jpg?cb=e4bcc7012b3c1ba30231c637a196251c]]></extension>     </imageThumb>     <caption><![CDATA[]]></caption>     <clickThruUrl><![CDATA[]]></clickThruUrl>     <assetId>45124</assetId>     <assetArrayMemberId>294758</assetArrayMemberId>     <autoPlay>No</autoPlay>     </asset>                                                <asset type="photo" order="10"  domain="http://media-aol.pictela.net/assets/img/07/24/"  parentAssetArrayMemberId="291255">     <title>Photo Title</title>     <imageFile>         <baseFileName><![CDATA[img-dmc_content-45137]]></baseFileName>         <extension><![CDATA[jpg?cb=e4bcc7012b3c1ba30231c637a196251c]]></extension>     </imageFile>     <caption><![CDATA[ <a href="http://ad.doubleclick.net/clk;265134771;84226153;g" class="callToAction"><font color = "#e21736"><font size = "10"><b>See How</b></font></a>]]></caption>     <clickThruUrl><![CDATA[]]></clickThruUrl>     <assetId>45137</assetId>     <assetArrayMemberId>294825</assetArrayMemberId>     <autoPlay>No</autoPlay>     <props/>     </asset>                                                  <asset type="video" order="10"  domain="http://media-aol.pictela.net/assets/img/43/7f/"  parentAssetArrayMemberId="291246">     <smil>http://media-aol.pictela.net/vid/vid-clip-45125.smil</smil>     <imageThumb>         <baseFileName><![CDATA[img-dmc_content-45123]]></baseFileName>         <extension><![CDATA[jpg?cb=e4bcc7012b3c1ba30231c637a196251c]]></extension>     </imageThumb>     <caption><![CDATA[]]></caption>     <clickThruUrl><![CDATA[]]></clickThruUrl>     <assetId>45125</assetId>     <assetArrayMemberId>294759</assetArrayMemberId>     <autoPlay>No</autoPlay>     </asset>                        </Assets> </pictela> ';


if(typeof(this["ptela_Devil_data"+ptelaUID].props.analytics) == "undefined"){
    this["ptela_Devil_data"+ptelaUID].props.analytics = {};
}
this["ptela_Devil_data"+ptelaUID].props.analytics.networkID =  typeof(g_pct_networkid)!=='undefined'? g_pct_networkid : '';

if(typeof(OOBClickTrack)=='string'){
    if(OOBClickTrack.length>0){
        this["ptela_Devil_data"+ptelaUID].props.analytics.OOBClickTrack =  OOBClickTrack;
    }
}

/* 
    Begin ESI Processing 
*/
var utidTrackingPixelUrl = ptela_tpfull+"?SynID="+syndicationId+"&SID="+pictelaSID+"&CliID="+pictelaCliID+"&evtT=utidTracker&evtInc=0";
    utidTrackingPixelUrl += '&networkID=' + g_pct_networkid ;
    utidTrackingPixelUrl += '&appName=Global&appLocation=0&isEngagement=0';
    utidTrackingPixelUrl += "&epc="+new Date().getTime()+"&pctVr=" + ptela_pctVr;
    utidTrackingPixelUrl += '&platform=desktop&sizeid=175';
    utidTrackingPixelUrl += '&key1=';

    
        pictelaPixel('http://tacoda.at.atwola.com/atx/sync/pictela/pkid/default?url='+escape(utidTrackingPixelUrl));
    
/* 
    End ESI Processing 
*/



/* */

if(typeof(this["ptela_Devil_data"+ptelaUID].props.request) == "undefined"){
    this["ptela_Devil_data"+ptelaUID].props.request = {};
}

var request_geo_attr = {};
 
request_geo_attr['county']='MIDDLESEX'; 
request_geo_attr['region_code']='MA'; 
request_geo_attr['asnum']='4543'; 
request_geo_attr['zip']='02138-02142+02238-02239'; 
request_geo_attr['continent']='NA'; 
request_geo_attr['long']='-71.1333'; 
request_geo_attr['city']='CAMBRIDGE'; 
request_geo_attr['areacode']='617'; 
request_geo_attr['dma']='506'; 
request_geo_attr['pmsa']='1120'; 
request_geo_attr['fips']='25017'; 
request_geo_attr['lat']='42.3933'; 
request_geo_attr['location_id']='0'; 
request_geo_attr['msa']='1122'; 
request_geo_attr['bw']='5000'; 
request_geo_attr['throughput']='vhigh'; 
request_geo_attr['georegion']='263'; 
request_geo_attr['country_code']='US'; 
request_geo_attr['timezone']='EST';
this["ptela_Devil_data"+ptelaUID].props.request.geo = request_geo_attr;

var request_qs_attr = {};

request_qs_attr['version']='2';
this["ptela_Devil_data"+ptelaUID].props.request.qs = request_qs_attr;

/* */



//evalOne Happens here


if(typeof(this["ptela_Devil_data"+ptelaUID].props.zIndex) == "undefined") {
	this["ptela_Devil_data"+ptelaUID].props.zIndex = 1000055;
}




var ptela_src = 'http://media-aol.pictela.net/devil/pictelaDevil.swf';


////////////////////////////
// DMC_SIZE_X_PIXELS: 300// DMC_SIZE_Y_PIXELS: 1050////////////////////////////



var ptelaswfholderInfo={h:1050, w:300};
var pictelaFlashOpenerExtra ="";
var pictelaFlashCloseExtra ="";
var pictelaTeaser ="";
this["ptela_extra"+ptelaUID] = {props:{}, apps:[]};

this["ptela_JS"+ptelaUID] ={doc:document, ptelaUID:ptelaUID};
var needFiF = false;



///////////////////////////
// BEGIN TEMPLATE [new300x1050]
///////////////////////////

needFiF = true;
if(typeof this["ptela_Devil_data"+ptelaUID].props.float == "undefined") {
    this["ptela_Devil_data"+ptelaUID].props.float = true;
}
var ptelaswfInfo={h:1050, w:300, padL:0, padR:0};

var ptelaswfholderInfo={h:1050, w:300};

var bHasFullscreenMap = false;

this["ptela_extra"+ptelaUID].apps = [];
this["ptela_extra"+ptelaUID].apps[0] = {X:15, Y:70, h:460, w:270, appWidth:270, appHeight:460};
this["ptela_extra"+ptelaUID].apps[1] = {X:15, Y:546, h:219, w:270, appWidth:270, appHeight:219};
this["ptela_extra"+ptelaUID].apps[2] = {X:15, Y:781, h:219, w:270, appWidth:270, appHeight:219};

this["ptela_extra"+ptelaUID].props.boxes = [];
if(typeof i == "undefined") var i=0;
i=0;
this["ptela_extra"+ptelaUID].props.boxes[i] ={};
this["ptela_extra"+ptelaUID].props.boxes[i].x = 0;
this["ptela_extra"+ptelaUID].props.boxes[i].y = 0;
this["ptela_extra"+ptelaUID].props.boxes[i].height = 1050;
this["ptela_extra"+ptelaUID].props.boxes[i].width = 300;
this["ptela_extra"+ptelaUID].props.boxes[i].color = "border";
i++;
this["ptela_extra"+ptelaUID].props.boxes[i] ={};
this["ptela_extra"+ptelaUID].props.boxes[i].x = 1;
this["ptela_extra"+ptelaUID].props.boxes[i].y = 1;
this["ptela_extra"+ptelaUID].props.boxes[i].height = 1048;
this["ptela_extra"+ptelaUID].props.boxes[i].width = 298;
this["ptela_extra"+ptelaUID].props.boxes[i].color = "bkg";

i++;
this["ptela_extra"+ptelaUID].props.boxes[i] ={};
this["ptela_extra"+ptelaUID].props.boxes[i].x = 15;
this["ptela_extra"+ptelaUID].props.boxes[i].y = 545;
this["ptela_extra"+ptelaUID].props.boxes[i].height = 1;
this["ptela_extra"+ptelaUID].props.boxes[i].width = 270;
this["ptela_extra"+ptelaUID].props.boxes[i].color = "border";
i++;
this["ptela_extra"+ptelaUID].props.boxes[i] ={};
this["ptela_extra"+ptelaUID].props.boxes[i].x = 15;
this["ptela_extra"+ptelaUID].props.boxes[i].y = 780;
this["ptela_extra"+ptelaUID].props.boxes[i].height = 1;
this["ptela_extra"+ptelaUID].props.boxes[i].width = 270;
this["ptela_extra"+ptelaUID].props.boxes[i].color = "border";

// LEGACY GALLERY SETTINGS
this["ptela_extra"+ptelaUID].props.galleryApp = {};
this["ptela_extra"+ptelaUID].props.galleryApp.thumbStuff={};
this["ptela_extra"+ptelaUID].props.galleryApp.thumbStuff.thumb={};
this["ptela_extra"+ptelaUID].props.galleryApp.thumbStuff.thumb.showVideoPlayButton = true;
this["ptela_extra"+ptelaUID].props.galleryApp.thumbStuff.thumb.height = 60;
this["ptela_extra"+ptelaUID].props.galleryApp.thumbStuff.thumb.width = 60;
this["ptela_extra"+ptelaUID].props.galleryApp.thumbStuff.thumb.imageSize = "60x60";
this["ptela_extra"+ptelaUID].props.galleryApp.title_txt={};
this["ptela_extra"+ptelaUID].props.galleryApp.title_txt.width = 270;
this["ptela_extra"+ptelaUID].props.galleryApp.title_txt.height = 45;
this["ptela_extra"+ptelaUID].props.galleryApp.title_txt.x = -2;
this["ptela_extra"+ptelaUID].props.galleryApp.title_txt.y = 14;

this["ptela_extra"+ptelaUID].props.galleryApp.infoBox = {};
this["ptela_extra"+ptelaUID].props.galleryApp.infoBox.width = 270;
this["ptela_extra"+ptelaUID].props.galleryApp.infoBox.bottom = 0;
this["ptela_extra"+ptelaUID].props.galleryApp.infoBox.left = 0;

// V3 GALLERY SETTINGS
this["ptela_extra"+ptelaUID].props.galleryPrimary_v3 = {};
this["ptela_extra"+ptelaUID].props.galleryPrimary_v3.thumbStuff={};
this["ptela_extra"+ptelaUID].props.galleryPrimary_v3.thumbStuff.thumb={};
this["ptela_extra"+ptelaUID].props.galleryPrimary_v3.thumbStuff.thumb.showVideoPlayButton = true;
this["ptela_extra"+ptelaUID].props.galleryPrimary_v3.thumbStuff.thumb.height = 60;
this["ptela_extra"+ptelaUID].props.galleryPrimary_v3.thumbStuff.thumb.width = 60;
this["ptela_extra"+ptelaUID].props.galleryPrimary_v3.thumbStuff.thumb.imageSize = "60x60";
this["ptela_extra"+ptelaUID].props.galleryPrimary_v3.title_txt={};
this["ptela_extra"+ptelaUID].props.galleryPrimary_v3.title_txt.width = 270;
this["ptela_extra"+ptelaUID].props.galleryPrimary_v3.title_txt.height = 45;
this["ptela_extra"+ptelaUID].props.galleryPrimary_v3.title_txt.x = -2;
this["ptela_extra"+ptelaUID].props.galleryPrimary_v3.title_txt.y = 14;

this["ptela_extra"+ptelaUID].props.galleryPrimary_v3.infoBox = {};
this["ptela_extra"+ptelaUID].props.galleryPrimary_v3.infoBox.width = 270;
this["ptela_extra"+ptelaUID].props.galleryPrimary_v3.infoBox.bottom = 0;
this["ptela_extra"+ptelaUID].props.galleryPrimary_v3.infoBox.left = 0;

//V3 Secondary Gallery App
this["ptela_extra"+ptelaUID].props.gallerySecondary_v3 = {};
this["ptela_extra"+ptelaUID].props.gallerySecondary_v3.videoNoExpand = true;
this["ptela_extra"+ptelaUID].props.gallerySecondary_v3.x =0;
this["ptela_extra"+ptelaUID].props.gallerySecondary_v3.y =0;
this["ptela_extra"+ptelaUID].props.gallerySecondary_v3.mainImage={};
//trace(this["ptela_extra"+ptelaUID].props.gallerySecondary_v3.mainImage.imageSize = "300x400");
//this["ptela_extra"+ptelaUID].props.gallerySecondary_v3.mainImage.imageSize = "280x210";
this["ptela_extra"+ptelaUID].props.gallerySecondary_v3.mainImage.x = 0;
this["ptela_extra"+ptelaUID].props.gallerySecondary_v3.mainImage.y = 34;
this["ptela_extra"+ptelaUID].props.gallerySecondary_v3.mainImage.yNoTitle = 15;
this["ptela_extra"+ptelaUID].props.gallerySecondary_v3.mainImage.height = 145;
this["ptela_extra"+ptelaUID].props.gallerySecondary_v3.mainImage.heightSingle = 185;
this["ptela_extra"+ptelaUID].props.gallerySecondary_v3.mainImage.heightSingleNoTitle = 204;
this["ptela_extra"+ptelaUID].props.gallerySecondary_v3.mainImage.heightNoTitle = 164;
this["ptela_extra"+ptelaUID].props.gallerySecondary_v3.mainImage.width = 270;
this["ptela_extra"+ptelaUID].props.gallerySecondary_v3.mainImage.transSpeed = 0.25;

this["ptela_extra"+ptelaUID].props.gallerySecondary_v3.expandImage = "false";

this["ptela_extra"+ptelaUID].props.gallerySecondary_v3.playbutton_mc={};
this["ptela_extra"+ptelaUID].props.gallerySecondary_v3.playbutton_mc.width = 35;
this["ptela_extra"+ptelaUID].props.gallerySecondary_v3.playbutton_mc.height = 35;

this["ptela_extra"+ptelaUID].props.gallerySecondary_v3.videoExpand = {};
this["ptela_extra"+ptelaUID].props.gallerySecondary_v3.videoExpand.playBTN = {};
this["ptela_extra"+ptelaUID].props.gallerySecondary_v3.videoExpand.playBTN.width = 35;
this["ptela_extra"+ptelaUID].props.gallerySecondary_v3.videoExpand.playBTN.height = 35;

this["ptela_extra"+ptelaUID].props.gallerySecondary_v3.thumbStuff={};
this["ptela_extra"+ptelaUID].props.gallerySecondary_v3.thumbStuff.thumbsArea_mc={};
this["ptela_extra"+ptelaUID].props.gallerySecondary_v3.thumbStuff.thumbsArea_mc.x = 0;
this["ptela_extra"+ptelaUID].props.gallerySecondary_v3.thumbStuff.thumbsArea_mc.xArrows = 10;
this["ptela_extra"+ptelaUID].props.gallerySecondary_v3.thumbStuff.thumbsArea_mc.y = 189;
this["ptela_extra"+ptelaUID].props.gallerySecondary_v3.thumbStuff.thumbsArea_mc.height = 30;
this["ptela_extra"+ptelaUID].props.gallerySecondary_v3.thumbStuff.thumbsArea_mc.width = 270;
this["ptela_extra"+ptelaUID].props.gallerySecondary_v3.thumbStuff.thumbsArea_mc.widthArrows = 250;
this["ptela_extra"+ptelaUID].props.gallerySecondary_v3.thumbStuff.thumbsArea_mask={};
this["ptela_extra"+ptelaUID].props.gallerySecondary_v3.thumbStuff.thumbsArea_mask.x = 0;
this["ptela_extra"+ptelaUID].props.gallerySecondary_v3.thumbStuff.thumbsArea_mask.xArrows = 10;
this["ptela_extra"+ptelaUID].props.gallerySecondary_v3.thumbStuff.thumbsArea_mask.y = 189;
this["ptela_extra"+ptelaUID].props.gallerySecondary_v3.thumbStuff.thumbsArea_mask.height = 30;
this["ptela_extra"+ptelaUID].props.gallerySecondary_v3.thumbStuff.thumbsArea_mask.width = 270;
this["ptela_extra"+ptelaUID].props.gallerySecondary_v3.thumbStuff.thumbsArea_mask.widthArrows = 250;

this["ptela_extra"+ptelaUID].props.gallerySecondary_v3.thumbStuff.thumbsArea_mc.heightArrows = 30;
this["ptela_extra"+ptelaUID].props.gallerySecondary_v3.thumbStuff.thumbsArea_mask.heightArrows = 30;
this["ptela_extra"+ptelaUID].props.gallerySecondary_v3.thumbStuff.thumbsArea_mc.yArrows = 189;
this["ptela_extra"+ptelaUID].props.gallerySecondary_v3.thumbStuff.thumbsArea_mask.yArrows = 189;

this["ptela_extra"+ptelaUID].props.gallerySecondary_v3.thumbStuff.thumb={};
this["ptela_extra"+ptelaUID].props.gallerySecondary_v3.thumbStuff.thumb.showVideoPlayButton = true;
this["ptela_extra"+ptelaUID].props.gallerySecondary_v3.thumbStuff.thumb.height = 30;
this["ptela_extra"+ptelaUID].props.gallerySecondary_v3.thumbStuff.thumb.width = 30;//add to PMC
this["ptela_extra"+ptelaUID].props.gallerySecondary_v3.thumbStuff.thumb.imageSize = "30x30"; //add to PMC
this["ptela_extra"+ptelaUID].props.gallerySecondary_v3.thumbStuff.thumb.spacing = 10; //add to PMC
this["ptela_extra"+ptelaUID].props.gallerySecondary_v3.thumbStuff.thumb.spacingArrows = 6.5;//add to PMC
this["ptela_extra"+ptelaUID].props.gallerySecondary_v3.thumbStuff.thumb.needArrowsNum = 8;//add to PMC
this["ptela_extra"+ptelaUID].props.gallerySecondary_v3.thumbStuff.thumb.template ={};
this["ptela_extra"+ptelaUID].props.gallerySecondary_v3.thumbStuff.thumb.template.on_mc ={};
this["ptela_extra"+ptelaUID].props.gallerySecondary_v3.thumbStuff.thumb.template.on_mc.color ="brand";
this["ptela_extra"+ptelaUID].props.gallerySecondary_v3.thumbStuff.arrows={};
this["ptela_extra"+ptelaUID].props.gallerySecondary_v3.thumbStuff.prev_btn ={};
this["ptela_extra"+ptelaUID].props.gallerySecondary_v3.thumbStuff.prev_btn.x = 0;
this["ptela_extra"+ptelaUID].props.gallerySecondary_v3.thumbStuff.prev_btn.y = 189;
this["ptela_extra"+ptelaUID].props.gallerySecondary_v3.thumbStuff.prev_btn.width = 10;
this["ptela_extra"+ptelaUID].props.gallerySecondary_v3.thumbStuff.prev_btn.height = 30;

this["ptela_extra"+ptelaUID].props.gallerySecondary_v3.thumbStuff.next_btn ={};
this["ptela_extra"+ptelaUID].props.gallerySecondary_v3.thumbStuff.next_btn.x = 260;
this["ptela_extra"+ptelaUID].props.gallerySecondary_v3.thumbStuff.next_btn.y = 189;
this["ptela_extra"+ptelaUID].props.gallerySecondary_v3.thumbStuff.next_btn.width = 10;
this["ptela_extra"+ptelaUID].props.gallerySecondary_v3.thumbStuff.next_btn.height = 30;

this["ptela_extra"+ptelaUID].props.gallerySecondary_v3.title_txt={};
this["ptela_extra"+ptelaUID].props.gallerySecondary_v3.title_txt.width = 270;
this["ptela_extra"+ptelaUID].props.gallerySecondary_v3.title_txt.height = 22;
this["ptela_extra"+ptelaUID].props.gallerySecondary_v3.title_txt.x = -2;
this["ptela_extra"+ptelaUID].props.gallerySecondary_v3.title_txt.y = 8;

this["ptela_extra"+ptelaUID].props.gallerySecondary_v3.infoBox = {};
this["ptela_extra"+ptelaUID].props.gallerySecondary_v3.infoBox.width = 270;
this["ptela_extra"+ptelaUID].props.gallerySecondary_v3.infoBox.bottom = 0;
this["ptela_extra"+ptelaUID].props.gallerySecondary_v3.infoBox.left = 0;

// SECONDARY VIDEO GALLERY SETTINGS
this["ptela_extra"+ptelaUID].props.videoApp = {};
this["ptela_extra"+ptelaUID].props.videoApp.mainImage = {};

this["ptela_extra"+ptelaUID].props.videoApp.thumbStuff={};
this["ptela_extra"+ptelaUID].props.videoApp.thumbStuff.thumb={};
this["ptela_extra"+ptelaUID].props.videoApp.thumbStuff.thumb.imageSize = "77x51";
this["ptela_extra"+ptelaUID].props.videoApp.mainImage.height = 185;
this["ptela_extra"+ptelaUID].props.videoApp.mainImage.heightSingle = 185;
this["ptela_extra"+ptelaUID].props.videoApp.mainImage.heightNoTitle = 202;
this["ptela_extra"+ptelaUID].props.videoApp.mainImage.heightSingleNoTitle = 202;
this["ptela_extra"+ptelaUID].props.videoApp.mainImage.y = 34;
this["ptela_extra"+ptelaUID].props.videoApp.mainImage.yNoTitle = 16;

this["ptela_extra"+ptelaUID].props.videoApp.title_txt = {};
this["ptela_extra"+ptelaUID].props.videoApp.title_txt.x = -2;
this["ptela_extra"+ptelaUID].props.videoApp.title_txt.y = 8;

this["ptela_extra"+ptelaUID].props.videoApp.thumbStuff.thumb.height = 52;
this["ptela_extra"+ptelaUID].props.videoApp.thumbStuff.thumb.width = 69;
this["ptela_extra"+ptelaUID].props.videoApp.thumbStuff.thumb.imageSize = "69x52";
this["ptela_extra"+ptelaUID].props.videoApp.thumbStuff.thumbsArea_mc={};
this["ptela_extra"+ptelaUID].props.videoApp.thumbStuff.thumbsArea_mc.x = 201;
this["ptela_extra"+ptelaUID].props.videoApp.thumbStuff.thumbsArea_mc.xArrows = 201;
this["ptela_extra"+ptelaUID].props.videoApp.thumbStuff.thumbsArea_mc.y = 35;
this["ptela_extra"+ptelaUID].props.videoApp.thumbStuff.thumbsArea_mc.height = 165;
this["ptela_extra"+ptelaUID].props.videoApp.thumbStuff.thumbsArea_mc.width = 69;
this["ptela_extra"+ptelaUID].props.videoApp.thumbStuff.thumbsArea_mc.widthArrows = 69;
this["ptela_extra"+ptelaUID].props.videoApp.thumbStuff.thumbsArea_mask={};
this["ptela_extra"+ptelaUID].props.videoApp.thumbStuff.thumbsArea_mask.x = 0;
this["ptela_extra"+ptelaUID].props.videoApp.thumbStuff.thumbsArea_mask.xArrows = 0;
this["ptela_extra"+ptelaUID].props.videoApp.thumbStuff.thumbsArea_mask.y = 35;
this["ptela_extra"+ptelaUID].props.videoApp.thumbStuff.thumbsArea_mask.height = 165;
this["ptela_extra"+ptelaUID].props.videoApp.thumbStuff.thumbsArea_mask.width = 270;
this["ptela_extra"+ptelaUID].props.videoApp.thumbStuff.thumbsArea_mask.widthArrows = 270;

this["ptela_extra"+ptelaUID].props.videoApp.thumbStuff.prev_btn ={};
this["ptela_extra"+ptelaUID].props.videoApp.thumbStuff.prev_btn.x = 201;
this["ptela_extra"+ptelaUID].props.videoApp.thumbStuff.prev_btn.y = 35;
this["ptela_extra"+ptelaUID].props.videoApp.thumbStuff.prev_btn.width = 69;
//this["ptela_extra"+ptelaUID].props.videoApp.thumbStuff.prev_btn.height = 40;

this["ptela_extra"+ptelaUID].props.videoApp.thumbStuff.next_btn ={};
this["ptela_extra"+ptelaUID].props.videoApp.thumbStuff.next_btn.x = 201;
//this["ptela_extra"+ptelaUID].props.videoApp.thumbStuff.next_btn.y = 220;
this["ptela_extra"+ptelaUID].props.videoApp.thumbStuff.next_btn.width = 69;
//this["ptela_extra"+ptelaUID].props.videoApp.thumbStuff.next_btn.height = 40;

this["ptela_extra"+ptelaUID].props.videoApp.infoBox = {};
this["ptela_extra"+ptelaUID].props.videoApp.infoBox.width = 270;
this["ptela_extra"+ptelaUID].props.videoApp.infoBox.bottom = 0;
this["ptela_extra"+ptelaUID].props.videoApp.infoBox.left = 0;

// PRIMARY NEW MEDIA GALLERY SETTINGS
this["ptela_extra"+ptelaUID].props.LargeNewMediaGallery = {};

this["ptela_extra"+ptelaUID].props.LargeNewMediaGallery.appTitleShouldUseDevilH2Style  = false;

this["ptela_extra"+ptelaUID].props.LargeNewMediaGallery.thumbStuff={};
this["ptela_extra"+ptelaUID].props.LargeNewMediaGallery.thumbStuff.randomMax=4;

this["ptela_extra"+ptelaUID].props.LargeNewMediaGallery.title_txt = {};
this["ptela_extra"+ptelaUID].props.LargeNewMediaGallery.title_txt.x = -2;
//this["ptela_extra"+ptelaUID].props.LargeNewMediaGallery.title_txt.y = 14; // BASE CODE HANDLES THIS
this["ptela_extra"+ptelaUID].props.LargeNewMediaGallery.titleAreaHeight = 45;
this["ptela_extra"+ptelaUID].props.LargeNewMediaGallery.titleContentGutter = 15;

this["ptela_extra"+ptelaUID].props.LargeNewMediaGallery.navPosition  = "bottom";
this["ptela_extra"+ptelaUID].props.LargeNewMediaGallery.navLayoutIsHorizontal = true;
this["ptela_extra"+ptelaUID].props.LargeNewMediaGallery.navLength = 270; //THE CODE WILL NOT BE DEPENDENT OF THIS LINE
this["ptela_extra"+ptelaUID].props.LargeNewMediaGallery.thumbnailWidth = 60;
this["ptela_extra"+ptelaUID].props.LargeNewMediaGallery.thumbnailHeight = 60;
this["ptela_extra"+ptelaUID].props.LargeNewMediaGallery.thumbnailTriangleSize = 30;
//this["ptela_extra"+ptelaUID].props.LargeNewMediaGallery.navMinThumbnailGutter = 2;
this["ptela_extra"+ptelaUID].props.LargeNewMediaGallery.thumbnailThumbnailMinGutter = 2;
this["ptela_extra"+ptelaUID].props.LargeNewMediaGallery.thumbnailStrokeThickness = 3;
this["ptela_extra"+ptelaUID].props.LargeNewMediaGallery.navButtonsThickness = 11;
this["ptela_extra"+ptelaUID].props.LargeNewMediaGallery.navButtonThumbnailGutter = 1;

//Non Expanded
this["ptela_extra"+ptelaUID].props.LargeNewMediaGallery.widthOfScreen = 270;
this["ptela_extra"+ptelaUID].props.LargeNewMediaGallery.heightOfScreen = 460;
this["ptela_extra"+ptelaUID].props.LargeNewMediaGallery.widthOfScreenWithTitle = 270;
this["ptela_extra"+ptelaUID].props.LargeNewMediaGallery.heightOfScreenWithTitle = 415;
this["ptela_extra"+ptelaUID].props.LargeNewMediaGallery.widthOfScreenWithNav = 270;
this["ptela_extra"+ptelaUID].props.LargeNewMediaGallery.heightOfScreenWithNav = 390;
this["ptela_extra"+ptelaUID].props.LargeNewMediaGallery.widthOfScreenWithNavWithTitle = 270;
this["ptela_extra"+ptelaUID].props.LargeNewMediaGallery.heightOfScreenWithNavWithTitle = 345;

//Expanded
this["ptela_extra"+ptelaUID].props.LargeNewMediaGallery.expansionIsAllowed = true;
this["ptela_extra"+ptelaUID].props.LargeNewMediaGallery.widthOfExpandedScreen = 613;
this["ptela_extra"+ptelaUID].props.LargeNewMediaGallery.heightOfExpandedScreen = 460;
this["ptela_extra"+ptelaUID].props.LargeNewMediaGallery.widthOfExpandedScreenWithTitle = 553;
this["ptela_extra"+ptelaUID].props.LargeNewMediaGallery.heightOfExpandedScreenWithTitle = 415;
this["ptela_extra"+ptelaUID].props.LargeNewMediaGallery.widthOfExpandedScreenWithNav = 520;
this["ptela_extra"+ptelaUID].props.LargeNewMediaGallery.heightOfExpandedScreenWithNav = 390;
this["ptela_extra"+ptelaUID].props.LargeNewMediaGallery.widthOfExpandedScreenWithNavWithTitle = 460;
this["ptela_extra"+ptelaUID].props.LargeNewMediaGallery.heightOfExpandedScreenWithNavWithTitle = 345;
// END PRIMARY NEW MEDIA GALLERY SETTINGS

// SECONDARY NEW MEDIA GALLERY SETTINGS
this["ptela_extra"+ptelaUID].props.SecondaryGallery = {};
this["ptela_extra"+ptelaUID].props.SecondaryGallery.hideNavWhenExpanded  = true;

this["ptela_extra"+ptelaUID].props.SecondaryGallery.thumbStuff={};
this["ptela_extra"+ptelaUID].props.SecondaryGallery.thumbStuff.randomMax=7;


this["ptela_extra"+ptelaUID].props.SecondaryGallery.topMarginIfNoTitle = 15;

this["ptela_extra"+ptelaUID].props.SecondaryGallery.title_txt = {};
this["ptela_extra"+ptelaUID].props.SecondaryGallery.title_txt.x = -2;
//this["ptela_extra"+ptelaUID].props.SecondaryGallery.title_txt.y = 8; // BASE CODE WILL HANDLE THIS
this["ptela_extra"+ptelaUID].props.SecondaryGallery.titleAreaHeight = 34;
this["ptela_extra"+ptelaUID].props.SecondaryGallery.titleContentGutter = 10;

this["ptela_extra"+ptelaUID].props.SecondaryGallery.navPosition  = "bottom";
this["ptela_extra"+ptelaUID].props.SecondaryGallery.navLayoutIsHorizontal = true;
this["ptela_extra"+ptelaUID].props.SecondaryGallery.navLength = 270; //THE CODE WILL NOT BE DEPENDENT OF THIS LINE
this["ptela_extra"+ptelaUID].props.SecondaryGallery.thumbnailWidth = 30;
this["ptela_extra"+ptelaUID].props.SecondaryGallery.thumbnailHeight = 30;
this["ptela_extra"+ptelaUID].props.SecondaryGallery.thumbnailTriangleSize = 15;
//this["ptela_extra"+ptelaUID].props.SecondaryGallery.navMinThumbnailGutter = 5;
this["ptela_extra"+ptelaUID].props.SecondaryGallery.thumbnailThumbnailMinGutter = 5;
this["ptela_extra"+ptelaUID].props.SecondaryGallery.thumbnailStrokeThickness = 3;
this["ptela_extra"+ptelaUID].props.SecondaryGallery.navButtonsThickness = 10;
this["ptela_extra"+ptelaUID].props.SecondaryGallery.navButtonThumbnailGutter = 5;

//Non Expanded
this["ptela_extra"+ptelaUID].props.SecondaryGallery.widthOfScreen = 270;
this["ptela_extra"+ptelaUID].props.SecondaryGallery.heightOfScreen = 204;
this["ptela_extra"+ptelaUID].props.SecondaryGallery.widthOfScreenWithTitle = 270;
this["ptela_extra"+ptelaUID].props.SecondaryGallery.heightOfScreenWithTitle = 185;
this["ptela_extra"+ptelaUID].props.SecondaryGallery.widthOfScreenWithNav = 270;
this["ptela_extra"+ptelaUID].props.SecondaryGallery.heightOfScreenWithNav = 165;
this["ptela_extra"+ptelaUID].props.SecondaryGallery.widthOfScreenWithNavWithTitle = 270;
this["ptela_extra"+ptelaUID].props.SecondaryGallery.heightOfScreenWithNavWithTitle = 145;

//Expanded
this["ptela_extra"+ptelaUID].props.SecondaryGallery.expansionIsAllowed = false;
this["ptela_extra"+ptelaUID].props.SecondaryGallery.widthOfExpandedScreen = 270;
this["ptela_extra"+ptelaUID].props.SecondaryGallery.heightOfExpandedScreen = 204;
this["ptela_extra"+ptelaUID].props.SecondaryGallery.widthOfExpandedScreenWithTitle = 270;
this["ptela_extra"+ptelaUID].props.SecondaryGallery.heightOfExpandedScreenWithTitle = 185;
this["ptela_extra"+ptelaUID].props.SecondaryGallery.widthOfExpandedScreenWithNav = 270;
this["ptela_extra"+ptelaUID].props.SecondaryGallery.heightOfExpandedScreenWithNav = 204;
this["ptela_extra"+ptelaUID].props.SecondaryGallery.widthOfExpandedScreenWithNavWithTitle = 270;
this["ptela_extra"+ptelaUID].props.SecondaryGallery.heightOfExpandedScreenWithNavWithTitle = 185;
// END SECONDARY NEW MEDIA GALLERY SETTINGS


// SECONDARY PHOTO GALLERY SETTINGS
this["ptela_extra"+ptelaUID].props.photoApp = {};
this["ptela_extra"+ptelaUID].props.photoApp.mainImage={};

this["ptela_extra"+ptelaUID].props.photoApp.mainImage.height = 185;
this["ptela_extra"+ptelaUID].props.photoApp.mainImage.heightSingle = 185;
this["ptela_extra"+ptelaUID].props.photoApp.mainImage.heightNoTitle = 204;
this["ptela_extra"+ptelaUID].props.photoApp.mainImage.heightSingleNoTitle = 204;
this["ptela_extra"+ptelaUID].props.photoApp.mainImage.y = 34;
this["ptela_extra"+ptelaUID].props.photoApp.mainImage.yNoTitle = 15;

this["ptela_extra"+ptelaUID].props.photoApp.title_txt = {};
this["ptela_extra"+ptelaUID].props.photoApp.title_txt.x = -2;
this["ptela_extra"+ptelaUID].props.photoApp.title_txt.y = 8;

this["ptela_extra"+ptelaUID].props.photoApp.infoBox = {};
this["ptela_extra"+ptelaUID].props.photoApp.infoBox.width = 270;
this["ptela_extra"+ptelaUID].props.photoApp.infoBox.bottom = 0;
this["ptela_extra"+ptelaUID].props.photoApp.infoBox.left = 0;
// END PHOTO APP SETTINGS


// MAPQUEST SETTINGS
this["ptela_extra"+ptelaUID].props.mapquest = {};
this["ptela_extra"+ptelaUID].props.mapquest.title_txt = {};
this["ptela_extra"+ptelaUID].props.mapquest.title_txt.x = -2;
this["ptela_extra"+ptelaUID].props.mapquest.title_txt.y = 8;
this["ptela_extra"+ptelaUID].props.mapquest.collapseMarginBelowTitle = false;

if (bHasFullscreenMap) {
    this["ptela_extra"+ptelaUID].props.mapquest.scrollableListCellOverrideHTMLAttributes = true;
}


// FACEBOOK SETTINGS
this["ptela_extra"+ptelaUID].props.facebook ={};
this["ptela_extra"+ptelaUID].props.facebook.title_txt = {};
this["ptela_extra"+ptelaUID].props.facebook.title_txt.x = -2;
this["ptela_extra"+ptelaUID].props.facebook.title_txt.y = 8;

this["ptela_extra"+ptelaUID].props.facebook.scrollbarTrackColor = "e5e5e5";

this["ptela_extra"+ptelaUID].props.facebook.collapseMarginBelowTitle = false;


// STANDALONE APP SETTINGS
this["ptela_extra"+ptelaUID].props.standaloneApp = {};
this["ptela_extra"+ptelaUID].props.standaloneApp.title_txt = {};
this["ptela_extra"+ptelaUID].props.standaloneApp.title_txt.x = -2;
this["ptela_extra"+ptelaUID].props.standaloneApp.title_txt.y = 8;

this["ptela_extra"+ptelaUID].props.standaloneApp.collapseMarginBelowTitle = false;


// TWITTER SETTINGS
this["ptela_extra"+ptelaUID].props.twitter ={};
this["ptela_extra"+ptelaUID].props.twitter.title_txt = {};
this["ptela_extra"+ptelaUID].props.twitter.title_txt.x = -2;
this["ptela_extra"+ptelaUID].props.twitter.title_txt.y = 8;

this["ptela_extra"+ptelaUID].props.twitter.collapseMarginBelowTitle = false;


// COUPON SETTINGS
this["ptela_extra"+ptelaUID].props.coupon ={};
this["ptela_extra"+ptelaUID].props.coupon.title_txt = {};
this["ptela_extra"+ptelaUID].props.coupon.title_txt.x = -2;
this["ptela_extra"+ptelaUID].props.coupon.title_txt.y = 8;

this["ptela_extra"+ptelaUID].props.coupon.collapseMarginBelowTitle = false;


// RSS READER SETTINGS
this["ptela_extra"+ptelaUID].props.rssReader ={};
this["ptela_extra"+ptelaUID].props.rssReader.title_txt = {};
this["ptela_extra"+ptelaUID].props.rssReader.title_txt.x = -2;
this["ptela_extra"+ptelaUID].props.rssReader.title_txt.y = 8;

this["ptela_extra"+ptelaUID].props.rssReader.ruleAtTopNotBottom = true;
this["ptela_extra"+ptelaUID].props.rssReader.showStationaryRuleAboveFeed = true;
this["ptela_extra"+ptelaUID].props.rssReader.showStationaryRuleBelowFeed = true;

this["ptela_extra"+ptelaUID].props.rssReader.scrollbarTrackColor = "e5e5e5";

this["ptela_extra"+ptelaUID].props.rssReader.collapseMarginBelowTitle = false;


// CTA READER SETTINGS
this["ptela_extra"+ptelaUID].props.CtaReaderApp ={};
this["ptela_extra"+ptelaUID].props.CtaReaderApp.title_txt = {};
this["ptela_extra"+ptelaUID].props.CtaReaderApp.title_txt.x = -2;
this["ptela_extra"+ptelaUID].props.CtaReaderApp.title_txt.y = 8;

this["ptela_extra"+ptelaUID].props.CtaReaderApp.ruleAtTopNotBottom = true;
this["ptela_extra"+ptelaUID].props.CtaReaderApp.showStationaryRuleAboveFeed = true;
this["ptela_extra"+ptelaUID].props.CtaReaderApp.showStationaryRuleBelowFeed = true;

this["ptela_extra"+ptelaUID].props.CtaReaderApp.scrollbarTrackColor = "e5e5e5";

this["ptela_extra"+ptelaUID].props.CtaReaderApp.collapseMarginBelowTitle = false;


// PROFILER SETTINGS
this["ptela_extra"+ptelaUID].props.profiler ={};

this["ptela_extra"+ptelaUID].props.profiler.appWidth = 270; //swf designed for devil
this["ptela_extra"+ptelaUID].props.profiler.appHeight = 219;//swf designed for devil

this["ptela_extra"+ptelaUID].props.profiler.title_txt = {};
this["ptela_extra"+ptelaUID].props.profiler.title_txt.x = -2;
this["ptela_extra"+ptelaUID].props.profiler.title_txt.y = 8;

this["ptela_extra"+ptelaUID].props.profiler.collapseMarginBelowTitle = false;

this["ptela_extra"+ptelaUID].props.profiler.titleAreaHeight = 30;

this["ptela_extra"+ptelaUID].props.profiler.thumbWidth = 24;
this["ptela_extra"+ptelaUID].props.profiler.thumbHeight = 24;
this["ptela_extra"+ptelaUID].props.profiler.detailWidth = 226;
this["ptela_extra"+ptelaUID].props.profiler.detailHeight = 120;
this["ptela_extra"+ptelaUID].props.profiler.endSmallWidth = 262;
this["ptela_extra"+ptelaUID].props.profiler.endSmallHeight = 158;
this["ptela_extra"+ptelaUID].props.profiler.endLargeWidth = 270;
this["ptela_extra"+ptelaUID].props.profiler.endLargeHeight = 158;

this["ptela_extra"+ptelaUID].props.profiler.topRuleY = 39;


// QUIZ 2.0 SETTINGS
this["ptela_extra"+ptelaUID].props.quiz ={};

this["ptela_extra"+ptelaUID].props.quiz.appWidth = 270; //swf designed for devil
this["ptela_extra"+ptelaUID].props.quiz.appHeight = 219;//swf designed for devil

this["ptela_extra"+ptelaUID].props.quiz.title_txt = {};
this["ptela_extra"+ptelaUID].props.quiz.title_txt.x = -2;
this["ptela_extra"+ptelaUID].props.quiz.title_txt.y = 8;

this["ptela_extra"+ptelaUID].props.quiz.collapseMarginBelowTitle = false;

this["ptela_extra"+ptelaUID].props.quiz.titleAreaHeight = 30;

this["ptela_extra"+ptelaUID].props.quiz.thumbWidth = 24;
this["ptela_extra"+ptelaUID].props.quiz.thumbHeight = 24;
this["ptela_extra"+ptelaUID].props.quiz.detailWidth = 226;
this["ptela_extra"+ptelaUID].props.quiz.detailHeight = 120;
this["ptela_extra"+ptelaUID].props.quiz.endSmallWidth = 262;
this["ptela_extra"+ptelaUID].props.quiz.endSmallHeight = 158;
this["ptela_extra"+ptelaUID].props.quiz.endLargeWidth = 270;
this["ptela_extra"+ptelaUID].props.quiz.endLargeHeight = 158;

this["ptela_extra"+ptelaUID].props.quiz.topRuleY = 39;


// POLL 2.0 SETTINGS
this["ptela_extra"+ptelaUID].props.poll ={};

//this["ptela_extra"+ptelaUID].props.poll.appWidth = 270; //swf designed for devil
//this["ptela_extra"+ptelaUID].props.poll.appHeight = 219;//swf designed for devil

this["ptela_extra"+ptelaUID].props.poll.title_txt = {};
this["ptela_extra"+ptelaUID].props.poll.title_txt.x = -2;
this["ptela_extra"+ptelaUID].props.poll.title_txt.y = 8;

this["ptela_extra"+ptelaUID].props.poll.collapseMarginBelowTitle = false;

this["ptela_extra"+ptelaUID].props.poll.titleAreaHeight = 30;

this["ptela_extra"+ptelaUID].props.poll.thumbWidth = 24;
this["ptela_extra"+ptelaUID].props.poll.thumbHeight = 24;
this["ptela_extra"+ptelaUID].props.poll.detailWidth = 226;
this["ptela_extra"+ptelaUID].props.poll.detailHeight = 120;
this["ptela_extra"+ptelaUID].props.poll.endSmallWidth = 262;
this["ptela_extra"+ptelaUID].props.poll.endSmallHeight = 158;
this["ptela_extra"+ptelaUID].props.poll.endLargeWidth = 270;
this["ptela_extra"+ptelaUID].props.poll.endLargeHeight = 158;

this["ptela_extra"+ptelaUID].props.poll.topRuleY = 39;


// SCROLLABLE CONTENT - ISI SETTINGS
this["ptela_extra"+ptelaUID].props.ScrollableContentApp ={};
this["ptela_extra"+ptelaUID].props.ScrollableContentApp.title_txt = {};
this["ptela_extra"+ptelaUID].props.ScrollableContentApp.title_txt.x = -2;
this["ptela_extra"+ptelaUID].props.ScrollableContentApp.title_txt.y = 8;

this["ptela_extra"+ptelaUID].props.ScrollableContentApp.collapseMarginBelowTitle = false;///////////////////////////
// END TEMPLATE [new300x1050]
///////////////////////////







document.write('<div id="PictelaTracker" style="position:absolute; display:none; "><img border="0" src="'+ pictelaAnalCall()+'"  /></div>');
ptela_flashvars_str += "&DivID=pictela0&CliID="+pictelaCliID+"&SID="+pictelaSID+"&g_pct_clicktracker="+escape(g_pct_clicktracker)+"&g_pct_siteid="+escape(g_pct_siteid)+"&msTracking="+escape(OOBClickTrack);
ptela_flashvars_str += "&ptelaUID="+ptelaUID+"&";

var pictelaFlash  ="";
var isInIFrame = (window.location != window.parent.location) ? true : false;


var pictelaFlashHolderOpen  = "";
var pictelaFlashHolderClose  = "";
var pictelaCoreHolderOpen = '<div id="ptelacoreholder' + ptelaUID + '">';
var pictelaCoreHolderClose = '</div>';
var pictelaFlash  = "";

//evalTwo Happens here


var isIE7 =(navigator.userAgent.toLowerCase().indexOf('msie 7') != -1);
var ieDocMode = 0;
try{
	if(document.documentMode == 7) {
		isIE7 = true;
	}
	ieDocMode = document.documentMode;
}catch(e){};

var isIE8 =(navigator.userAgent.toLowerCase().indexOf('msie 8') != -1);
var isIE9 =(navigator.userAgent.toLowerCase().indexOf('msie 9') != -1);

var isIE6 = ((navigator.userAgent.toLowerCase().indexOf('msie 6') != -1) || ((isIE8 ||isIE9) && (ieDocMode<7)));

var dataAtr_txt = 'data="http://media-cdn.pictela.net/extra/fake.swf"';
if(isIE9 || ieDocMode==9) dataAtr_txt = '';

var no_flash = '';
/*
*/
no_flash = "";

/*
*/

if (!no_flash && DetectFlashVer(pictelaMinFlashVersion)) {
	pictelaFlashHolderOpen +=pictelaFlashOpenerExtra;
	pictelaFlashHolderOpen += '<div id="ptelaswfholder'+ptelaUID+'" style="z-index:'+this["ptela_Devil_data"+ptelaUID].props.zIndex+'; overflow:hidden; background:none;  height:'+ptelaswfholderInfo.h+'px !important;width:'+ptelaswfholderInfo.w+'px !important; padding:0; margin:0; position:relative; text-align:right;">';
	pictelaFlashHolderClose += '</div>';
	pictelaFlashHolderClose += pictelaFlashCloseExtra;

	pictelaFlash += '<div id="ptelaswf'+ptelaUID+'" style="vertical-align:top; padding-left:' +ptelaswfInfo.padL+ 'px !important; padding-right:' +ptelaswfInfo.padR+ 'px !important;   margin:0; position:relative; display:block; height:' +ptelaswfInfo.h+ 'px !important; width:' +ptelaswfInfo.w+ 'px !important;">';
	if (navigator.userAgent.indexOf("Firefox")==-1) {
        if (isIE8 || isIE9) {
            ptelaswfInfo.w = Math.floor(ptelaswfInfo.w) + .5;
        }
		pictelaFlash += '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" style="outline:none;width:' +ptelaswfInfo.w+ 'px !important;height:' +ptelaswfInfo.h+ 'px !important;" align="top" width="' +ptelaswfInfo.w+ '" height="' +ptelaswfInfo.h+ '"  type="application/x-shockwave-flash" id="ptela'+ptelaUID+'" name="ptela'+ptelaUID+'" '+dataAtr_txt +'>';
		pictelaFlash += '<param name="movie" value="'+ptela_src+'" /><param value="transparent" name="wmode"><param value="true" name="allowFullScreen"><param value="always" name="allowScriptAccess"><param value="high" name="quality"><param value="'+ptela_flashvars_str+'" name="flashvars">';
	}
	if(!isIE) { 
		pictelaFlash += '<embed style="outline:none;width:' +ptelaswfInfo.w+ 'px !important;height:' +ptelaswfInfo.h+ 'px !important;" src="'+ptela_src+'" quality="high" width="' +ptelaswfInfo.w+ '" height="' +ptelaswfInfo.h+ '" name="ptelaFF'+ptelaUID+'" id="ptelaFF'+ptelaUID+'" align="top" allowScriptAccess="always" allowFullScreen="true" type="application/x-shockwave-flash" pluginspage="http://www.adobe.com/go/getflashplayer"   wmode="transparent" flashvars="'+ptela_flashvars_str+'" />';
	}
	if (navigator.userAgent.indexOf("Firefox")==-1) {
		pictelaFlash += '</object>';
	}
	pictelaFlash += '<div id="pictelaLikeButton'+ptelaUID+'" style="display:none;"></div></div>';
} else {
	pictelaFlash = pictelaDefault;
    pictelaTeaser = '';
}

function findPos(obj) {
	var curleft = curtop = 0;
	if (obj.offsetParent) {
		curleft = obj.offsetLeft;
		curtop = obj.offsetTop;
		while (obj = obj.offsetParent) {
			curleft += obj.offsetLeft;
			curtop += obj.offsetTop;
		}
	}
	return [curleft,curtop];
}

function addP_AfterWinLoad() {
    pictelaPageLoad0 = 'YES';
}

function loadCoreSwf()
{
    if (!coreSwfLoaded)
    {
        var pictelaCoreContainer = null;
        try
        {
            pictelaCoreContainer = window.top.document.getElementById('ptelacoreholder' + ptelaUID);

            if (pictelaCoreContainer == null)
            {
                throw new Exception();  //-could not get element from window top, so just fail over to catch clause
            }
        }
        catch (e)
        {
            pictelaCoreContainer = this.document.getElementById('ptelacoreholder' + ptelaUID);
        }

        if (pictelaCoreContainer != null)
        {
            pictelaCoreContainer.innerHTML += pictelaFlash;
        }

        coreSwfLoaded = true;
    }
}

var checkHasLoaded = setInterval(function(){

    var docState = null;
    try
    {
        docState = window.top.document.readyState;
    }
    catch (e)
    {
        docState = this.document.readyState;
    }

    if (docState === 'complete')
    {
        clearInterval(checkHasLoaded);
        loadCoreSwf();
    }

}, 1000);

if(typeof this["ptela_Devil_data"+ptelaUID].props.float !== "undefined") {
	if(this["ptela_Devil_data"+ptelaUID].props.float == true) {
		if(isIE7 || isIE6) {
		delete(this["ptela_Devil_data"+ptelaUID].props.float);
		} else {
		var str = '<embed style="';
		pictelaFlash = pictelaFlash.split(str).join(str+'float:right !important;');
        pictelaTeaser = pictelaTeaser.split(str).join(str+'float:right !important;');
		str = '00" style="';
		pictelaFlash = pictelaFlash.split(str).join(str+'float:right !important;');
        pictelaTeaser = pictelaTeaser.split(str).join(str+'float:right !important;');

		str = '!important;" src="';
		pictelaFlash = pictelaFlash.split(str).join('!important;width:720px '+str);
        pictelaTeaser = pictelaTeaser.split(str).join('!important;width:720px '+str);

		str = '!important;" align="top"';
		pictelaFlash = pictelaFlash.split(str).join('!important;width:720px '+str);
        pictelaTeaser = pictelaTeaser.split(str).join('!important;width:720px '+str);

		}
	} else {	
		delete(this["ptela_Devil_data"+ptelaUID].props.float);
	}
}

var ptela_inAOLWebMail = false;
var ptela_ad_site_id = null;
try{
	ptela_ad_site_id = window.frameElement.parentNode.ownerDocument.defaultView.ad_site_id;
	if(ptela_ad_site_id === 'AOLWebmail' || ptela_inAOLWebMail){
		ptela_inAOLWebMail = (typeof(window.frameElement)!='undefined' && window.frameElement!==null);
	}
}catch(e){
	ptela_ad_site_id = null;
	ptela_inAOLWebMail = false;
}

this["ptela_extra"+ptelaUID].props.standaloneApp = {};
this["ptela_extra"+ptelaUID].props.standaloneApp.title_txt = {};
this["ptela_extra"+ptelaUID].props.standaloneApp.title_txt.x = -2;
this["ptela_extra"+ptelaUID].props.standaloneApp.title_txt.y = 5;//evalThree Happens here

if(typeof(this["ptela_Devil_data"+ptelaUID].props.forceDefaultCreative)!=='undefined' && this["ptela_Devil_data"+ptelaUID].props.forceDefaultCreative ==='YES'){
    document.write(pictelaDefault);
}else if (ptela_inAOLWebMail) {
	//console.log("createing div for" + ptelaUID);
	var winFrame = window.frameElement;
	var winFrameParent= winFrame.parentNode;
	var winFrameDoc = winFrameParent.ownerDocument;
	var winFrameParentWin = winFrameDoc.defaultView;
	for (var hash in this){
		if(hash.search(/ptela/i)!==-1){
			winFrameParentWin[hash] = this[hash];
			//try{console.log(hash);}catch(e){}
		}
	}
	//console.log({winFrameParentWin : winFrameParentWin});
	winFrameParentWin["fif"+ptelaUID] = window.frameElement;
	if(window.addEventListener)
		window.addEventListener('beforeunload',  function () {try{winFrameDoc.body.removeChild(winFrameDoc.getElementById("ptelaswfholder"+ptelaUID));}catch(e){};}, false);
	if(window.attachEvent)
		window.attachEvent('onbeforeunload', function () {try{winFrameDoc.body.removeChild(winFrameDoc.getElementById("ptelaswfholder"+ptelaUID));}catch(e){};});
	var array = findPos(winFrameParentWin["fif"+ptelaUID]);
	//winFrameParentWin["ptela_Devil_data"+ptelaUID] = this["ptela_Devil_data"+ptelaUID];
	
	this["ptela_JS"+ptelaUID].doc = winFrameDoc;
	//winFrameParentWin["ptela_extra"+ptelaUID] = this["ptela_extra"+ptelaUID];
	//winFrameParentWin["ptela_JS"+ptelaUID] = this["ptela_JS"+ptelaUID];
	winFrameParentWin.pictelaReadCookie = pictelaReadCookie;

	winFrameParentWin.syndicationId = syndicationId;
	winFrameParentWin.ptelaUID = ptelaUID;
	var watchdiv = winFrameDoc.createElement('Div'); 
	watchdiv.setAttribute('id', "ptelawatcher"+ptelaUID); 
	watchdiv.style.cssText += ";width:"+ptelaswfholderInfo.w+"px !important;height:"+ptelaswfholderInfo.h+"px !important; margin:auto !important;";
	//if(typeof(this["ptela_Devil_data"+ptelaUID].props.goIntoParentDiv) == "undefined") {
	winFrameParentWin["fif"+ptelaUID].style.display = "none";
	winFrameParent.appendChild(watchdiv);
	//this["ptelaCreateDiv"+ptelaUID] = winFrameDoc.createElement('Div'); 
	winFrameParentWin["ptelaCreateDiv"+ptelaUID] = winFrameDoc.createElement('Div');
	//this["ptelaCreateDiv"+ptelaUID].setAttribute('id', "ptelaswfholder"+ptelaUID); 
	winFrameParentWin["ptelaCreateDiv"+ptelaUID].setAttribute('id', "ptelaswfholder"+ptelaUID);
	var CreateDivCssText =" ; ";
	CreateDivCssText += "width:"+ptelaswfholderInfo.w+"px !important;";
	CreateDivCssText +=  "height:"+ptelaswfholderInfo.h+"px !important;";
	CreateDivCssText +=  "padding:0  !important;";
	CreateDivCssText +=  "margin:0  !important;";
	CreateDivCssText +=  "z-index:" +winFrameParentWin["ptela_Devil_data"+ptelaUID].props.zIndex+ "!important;";
	CreateDivCssText +=  "position:absolute  !important;";
	CreateDivCssText +=  "overflow:hidden  !important;";
	if(typeof(winFrameParentWin["ptela_Devil_data"+ptelaUID].props.goIntoParentDiv) == "undefined") {
		CreateDivCssText +=  "left:"+array[0]+"px !important;";
		CreateDivCssText +=  "top:"+array[1]+"px !important;";
	}
	CreateDivCssText +=  "display:block !important;";
	winFrameParentWin["ptelaCreateDiv"+ptelaUID].innerHTML = pictelaTeaser + pictelaCoreHolderOpen + pictelaFlash + pictelaCoreHolderClose;
	if(typeof(winFrameParentWin["ptela_Devil_data"+ptelaUID].props.goIntoParentDiv) != "undefined") {
		winFrameParentWin["fif"+ptelaUID].style.display = "none";
		CreateDivCssText +=  "position:relative !important;";
		
		var wrapperdiv = winFrameDoc.createElement('Div'); 
		wrapperdiv.setAttribute('id', "ptelawrapperer"+ptelaUID); 
		var wrapperCssText = ";width:"+ptelaswfholderInfo.w+"px !important;height:";
		if(isPushDown) {
			wrapperCssText += "auto";
		} else {
			wrapperCssText += ptelaswfholderInfo.h+"px";
		}
		wrapperCssText += " !important; margin:auto;";
		
		wrapperdiv.style.cssText += wrapperCssText;
		winFrameParent.appendChild(wrapperdiv);
		wrapperdiv.appendChild(winFrameParentWin["ptelaCreateDiv"+ptelaUID]);
				//evalFour Happens here
        
	}
} else if (typeof inDapIF !== "undefined" && needFiF) {
	console.log("createing div for" + ptelaUID);
	window.top["fif"+ptelaUID] = window.frameElement;

    if (window.top.addEventListener) {
        window.top.addEventListener('load', addP_AfterWinLoad, false);
    } else if (window.top.attachEvent) {
        window.top.attachEvent('onload', addP_AfterWinLoad);
    }

	if(window.addEventListener)
		window.addEventListener('beforeunload',  function () {try{window.top.document.body.removeChild(window.top.document.getElementById("ptelaswfholder"+ptelaUID));}catch(e){};}, false);
	if(window.attachEvent)
		window.attachEvent('onbeforeunload', function () {try{window.top.document.body.removeChild(window.top.document.getElementById("ptelaswfholder"+ptelaUID));}catch(e){};});
	var array = findPos(window.top["fif"+ptelaUID]);
	window.top["ptela_Devil_data"+ptelaUID] = this["ptela_Devil_data"+ptelaUID];

	this["ptela_JS"+ptelaUID].doc = window.top.document;
	window.top["ptela_extra"+ptelaUID] = this["ptela_extra"+ptelaUID];
	window.top["ptela_JS"+ptelaUID] = this["ptela_JS"+ptelaUID];
	window.top.pictelaReadCookie = pictelaReadCookie;

	window.top.syndicationId = syndicationId;
	window.top.ptelaUID = ptelaUID;
	var watchdiv = window.top.document.createElement('Div'); 
	watchdiv.setAttribute('id', "ptelawatcher"+ptelaUID); 
	watchdiv.style.cssText += ";width:"+ptelaswfholderInfo.w+"px !important;height:"+ptelaswfholderInfo.h+"px !important; margin:auto !important;";
	if(typeof(this["ptela_Devil_data"+ptelaUID].props.goIntoParentDiv) == "undefined") {
		window.top["fif"+ptelaUID].style.display = "none";
		window.top["fif"+ptelaUID].parentNode.appendChild(watchdiv);
	}
	this["ptelaCreateDiv"+ptelaUID] = window.top.document.createElement('Div'); 
	window.top["ptelaCreateDiv"+ptelaUID] = this["ptelaCreateDiv"+ptelaUID];
	this["ptelaCreateDiv"+ptelaUID].setAttribute('id', "ptelaswfholder"+ptelaUID); 
	var CreateDivCssText =" ; ";
	CreateDivCssText += "width:"+ptelaswfholderInfo.w+"px !important;";
	CreateDivCssText +=  "height:"+ptelaswfholderInfo.h+"px !important;";
	CreateDivCssText +=  "padding:0  !important;";
	CreateDivCssText +=  "margin:0  !important;";
	CreateDivCssText +=  "z-index:" +this["ptela_Devil_data"+ptelaUID].props.zIndex+ "!important;";
	CreateDivCssText +=  "position:absolute  !important;";
	CreateDivCssText +=  "overflow:hidden  !important;";
	if(typeof(this["ptela_Devil_data"+ptelaUID].props.goIntoParentDiv) == "undefined") {
        CreateDivCssText +=  "left:"+array[0]+"px !important;";
        CreateDivCssText +=  "top:"+array[1]+"px !important;";
	}
	CreateDivCssText +=  "display:block !important;";

    if (coreSwfLoadTiming == 'onload') {
        this["ptelaCreateDiv"+ptelaUID].innerHTML = pictelaTeaser + pictelaCoreHolderOpen + pictelaCoreHolderClose;

        if (window.addEventListener)
            window.top.addEventListener('load',loadCoreSwf,false);
        else if (window.attachEvent)
            window.top.attachEvent('onload',loadCoreSwf);

    } else {
        this["ptelaCreateDiv"+ptelaUID].innerHTML = pictelaTeaser + pictelaCoreHolderOpen + pictelaFlash + pictelaCoreHolderClose;
        coreSwfLoaded = true;
    }

	if(typeof(this["ptela_Devil_data"+ptelaUID].props.goIntoParentDiv) != "undefined") {
		window.top["fif"+ptelaUID].style.display = "none";
		CreateDivCssText +=  "position:relative !important;";
		
		var wrapperdiv = window.top.document.createElement('Div'); 
		wrapperdiv.setAttribute('id', "ptelawrapperer"+ptelaUID); 
		var wrapperCssText = ";width:"+ptelaswfholderInfo.w+"px !important;height:";
		if(isPushDown) {
			wrapperCssText += "auto";
		} else {
			wrapperCssText += ptelaswfholderInfo.h+"px";
		}
		wrapperCssText += " !important; margin:auto;";
		
		wrapperdiv.style.cssText += wrapperCssText;
		window.top["fif"+ptelaUID].parentNode.appendChild(wrapperdiv);
		wrapperdiv.appendChild(this["ptelaCreateDiv"+ptelaUID]);
				//evalFour Happens here
        
	} else {
		var str ='window.top.ptela_JS'+ptelaUID+'.ptela_onresize = function() {'
		//str+='console.log('+ptelaUID+');';
		str+='var array = findPos(window.top.document.getElementById("ptelawatcher'+ptelaUID+'"));';
		str+='window.top.ptelaCreateDiv'+ptelaUID+'.style.cssText+= ";left:"+array[0]+"px !important;top:"+array[1]+"px !important;";';
	//	str+='console.log("madit");';
		str+='}';
		console.log(str);
		eval(str);
		
		str ='window.top.ptela_JS'+ptelaUID+'.watchMove = function() { window.top.ptela_JS'+ptelaUID+'.ptela_onresize();';
		str +=	'setTimeout(window.top.ptela_JS'+ptelaUID+'.watchMove, 1000);';
		str+='}';
		console.log(str);
		eval(str);
		if (window.top.addEventListener){
			window.top.addEventListener('resize', window.top["ptela_JS"+ptelaUID].ptela_onresize, false); 
		} else if (window.attachEvent){
			window.top.attachEvent('onresize', window.top["ptela_JS"+ptelaUID].ptela_onresize);
		}
		top.document.body.appendChild(this["ptelaCreateDiv"+ptelaUID]);	
		window.top["ptela_JS"+ptelaUID].watchMove();
		        
//evalFive Happens here
	}
	this["ptelaCreateDiv"+ptelaUID].style.cssText +=";"+CreateDivCssText; 
} else {
    if(isInIFrame) {
        if(needFiF) {
            document.write(pictelaDefault);
        } else {
            if (coreSwfLoadTiming == 'onload')
            {
                document.write(pictelaFlashHolderOpen + pictelaTeaser + pictelaCoreHolderOpen + pictelaCoreHolderClose + pictelaFlashHolderClose);

                setTimeout("addP_AfterWinLoad()",coreSwfLoadDelay);
                setTimeout("loadCoreSwf()",coreSwfLoadDelay);
            }
            else
            {
                document.write(pictelaFlashHolderOpen + pictelaTeaser + pictelaCoreHolderOpen + pictelaFlash + pictelaCoreHolderClose + pictelaFlashHolderClose);
                coreSwfLoaded = true;
            }
        }
    } else {
        if(typeof(pictelaPageLoad0) =="undefined") {
            var pictelaPageLoad0 = 'NO';
        }

        if (window.addEventListener){
            window.addEventListener('load', addP_AfterWinLoad, false);
        } else if (window.attachEvent){
            window.attachEvent('onload', addP_AfterWinLoad);
        }

        function addLoadEvent(func) {
            var oldonload = window.onload;
            if (typeof window.onload != 'function')  window.onload = func;
            else
            {
                window.onload = function()
                {
                    func();
                    oldonload();
                }
            }
        }
        addLoadEvent(addP_AfterWinLoad);

        if (coreSwfLoadTiming == 'onload') {
            if (ptelawintop["ptela_Devil_data"+ptelaUID].props.expandDirection == "top") {
                document.write(pictelaFlashHolderOpen + pictelaCoreHolderOpen + pictelaCoreHolderClose + pictelaTeaser + pictelaFlashHolderClose);
                var coreHolder = document.getElementById("ptelacoreholder"+ptelaUID);
                coreHolder.style.display = "none";
            }
            else document.write(pictelaFlashHolderOpen + pictelaTeaser + pictelaCoreHolderOpen + pictelaCoreHolderClose + pictelaFlashHolderClose);

            if (window.addEventListener)
                window.addEventListener('load',loadCoreSwf,false);
            else if (window.attachEvent)
                window.attachEvent('onload',loadCoreSwf);
        }
        else {
            document.write(pictelaFlashHolderOpen + pictelaTeaser + pictelaCoreHolderOpen + pictelaFlash + pictelaCoreHolderClose + pictelaFlashHolderClose);
            coreSwfLoaded = true;
        }

                //evalSix Happens here

        document.close();
    }
}
try{
	if(typeof(window.top["ptela_JS"+ptelaUID].ptela_checkExpand) != "undefined"){
		if (window.addEventListener){
			window.top.addEventListener('load', function(){window.top["ptela_JS"+ptelaUID].ptela_checkExpand()}, false); 
		} else if (window.attachEvent){
		//	window.top.attachEvent('onload', function(){window.top["ptela_JS"+ptelaUID].ptela_checkExpand()});
		}
	}
} catch(e){
	try{
		if(typeof(winFrameParentWin["ptela_JS"+ptelaUID].ptela_checkExpand) != "undefined"){
			if (winFrameParentWin.addEventListener){
				winFrameParentWin.addEventListener('load', function(){winFrameParentWin["ptela_JS"+ptelaUID].ptela_checkExpand()}, false); 
			} else if (winFrameParentWin.attachEvent){
			//	window.top.attachEvent('onload', function(){window.top["ptela_JS"+ptelaUID].ptela_checkExpand()});
			}
		}
	}catch(e){
		//console.log({msg:'catch2', e: e});
	}
	//console.log({msg:'catch1', e: e});
};


document.write("<scr"+"ipt src='http://amch.questionmarket.com/adsc/d981144/42/997819/randm.js' type='text/javascript'></scr"+"ipt>");
//evalEND Happens here
