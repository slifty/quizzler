var numChks = 0;
function checkForComments(numChks,google_ads)
{
if (numChks > 8) {displayAdBig(google_ads)}
	else
	{if ($('table.Comments_Table').length < 1)
	     {setTimeout('checkForComments((++numChks),google_ads)',250);}
	     else
	     {if ($('table.Comments_Table > tbody > tr').length>10)
	     	{displayAdsInComments(google_ads)}
	     	else
	     	{displayAdBig(google_ads)}
	     }
	}
}
function displayAdsInComments(google_ads)
{for(i=0; i < google_ads.length; ++i) {
	if (i>1) 
		{var ad = '<div id="adSenseArticleBottom"'} else {var ad = '<tr><td colspan="2"><div id="adSenseArticleInline"'}
	ad+= ' class="adSense'+ad_version+'">\n\t<div class="adSenseDisplayHeader">Ads by Google<div class="adSenseWhatIs"';
	if (navigator.appName.search('Internet Explorer') > -1)
		{ad+= 'style="float:none;padding-left:8px;"'}
	ad+='><a href="http://www.boston.com/help/linksqa_text/" onClick="window.open(\'\',\'popupad\',\'width=400,height=400,resizable=yes,scrollbars=yes,toolbar=no,location=no,menubar=no,status=no\')" target="popupad">what\'s this?</a></div></div><div class = "adSenseDisplayContainer adSenseDisplayContainer'+ad_version+' ads1down">';
	ad+= '\n\t\t<div class="adSenseDisplayAd'+ad_version+'">\n\t\t\t\t<div><a target="_blank" href="' + google_ads[i].url + '" onmouseout="window.status=\'\'" onmouseover="window.status=\'go to ' + google_ads[i].visible_url + '\'" class="adSenseDisplayTopLine">'+ google_ads[i].line1 + '</a></div><div><a target="_blank" href="' + google_ads[i].url + '" onmouseout="window.status=\'\'" onmouseover="window.status=\'go to ' + google_ads[i].visible_url + '\'" style="text-decoration:none;color:#000000;';
	if (i<=1) {ad+='line-height:12px;'}
	ad+='" class="adSenseDisplayText">' + google_ads[i].line2 + ' ' + google_ads[i].line3 + '</a></div><div><a class="adSenseDisplayLink" target="_blank" href="' + google_ads[i].url + '" onmouseout="window.status=\'\'" onmouseover="window.status=\'go to ' + google_ads[i].visible_url + '\'">'+google_ads[i].visible_url + '</a></div>\n\t\t\t</div></div>\n\t</div>';
	if (i<=1)
		{ad+='</td></tr>';
		if (i==0){$('table.Comments_Table > tbody > tr:eq(8)').after(ad);}
			else{$('table.Comments_Table > tbody > tr:eq(15)').after(ad);}
		}
	}
$('#adSenseBottomDiv').html(ad);

}
function displayAdBig(google_ads)
{if (ad_slot == 'bottom')
	{var ad = '<div id="adSenseArticleBottom"'} else {var ad = '<div id="adSenseBigAd"'}
ad += ' class="adSense'+ad_version+'">\n\t<div class="adSenseDisplayHeader">Ads by Google<div class="adSenseWhatIs"';
if (navigator.appName.search('Internet Explorer') > -1)
	{ad += ' style="float:none;padding-left:8px;"';}
ad+='><a href="http://www.boston.com/help/linksqa_text/" onClick="window.open(\'\',\'popupad\',\'width=400,height=400,resizable=yes,scrollbars=yes,toolbar=no,location=no,menubar=no,status=no\')" target="popupad">what\'s this?</a></div></div><div class = "adSenseDisplayContainer adSenseDisplayContainer'+ad_version+' ads'+ google_ads.length +'down">';
for(i=0; i < google_ads.length; ++i) {
	ad += '\n\t\t<div class="adSenseDisplayAd'+ad_version+'">\n\t\t\t\t<div><a target="_blank" href="' + google_ads[i].url + '" onmouseout="window.status=\'\'" onmouseover="window.status=\'go to ' + google_ads[i].visible_url + '\'" class="adSenseDisplayTopLine">'+ google_ads[i].line1 + '</a></div><div>' + google_ads[i].line2 + ' ';
	if (ad_slot != 'bottom') {ad+='</div><div>'}
	ad+= google_ads[i].line3 + '</div><div><a class="adSenseDisplayLink" target="_blank" href="' + google_ads[i].url + '" onmouseout="window.status=\'\'" onmouseover="window.status=\'go to ' + google_ads[i].visible_url + '\'">'+google_ads[i].visible_url + '</a></div>\n\t\t\t</div>';
	if (ad_slot == 'tile1') {ad+='<div class="padBottom10"></div>'}
	}
ad += '\n\t\t<div class="padTop10"></div></div>\n\t</div>';
if (typeof jQuery != 'undefined' && ad_slot == 'bottom')
	{$('#adSenseBottomDiv').html(ad);}
	else
	{document.write(ad);}
}
function displayAdWide(google_ads)
	{ad = '<div id="adSenseLeader" class="adSense'+ad_version+'">\n\t<div class="adSenseDisplayHeader">Ads by Google<div class="adSenseWhatIs"';
	if (navigator.appName.search('Internet Explorer') > -1)
		{ad += 'style="float:none;padding-left:8px;"';}
	ad+='><a href="http://www.boston.com/help/linksqa_text/" onClick="window.open(\'\',\'popupad\',\'width=400,height=400,resizable=yes,scrollbars=yes,toolbar=no,location=no,menubar=no,status=no\')" target="popupad">what\'s this?</a></div></div><div class = "adSenseDisplayContainer">';
	for(i=0; i < google_ads.length; ++i) {
		ad += '\n\t\t<div class="adSenseDisplayAd'+ad_version+' ads'+ google_ads.length +'across">\n\t\t\t\t<div><a target="_blank" href="' + google_ads[i].url + '" onmouseout="window.status=\'\'" onmouseover="window.status=\'go to ' + google_ads[i].visible_url + '\'" class="adSenseDisplayTopLine">'+ google_ads[i].line1 + '</a></div><div>' + google_ads[i].line2 + '</div><div>' + google_ads[i].line3 + '</div>'
		if (google_ads[i].visible_url.length > 31 && google_ads.length == 3)
			{ad += '<div style="font-size:11px;">';}
			else
			{ad += '<div>';}
		ad +='<a target="_blank" href="' + google_ads[i].url + '" onmouseout="window.status=\'\'" onmouseover="window.status=\'go to ' + google_ads[i].visible_url + '\'" class="adSenseDisplayLink">'+google_ads[i].visible_url + '</a></div>\n\t\t\t</div>';
		}
	ad += '\n\t\t</div>\n\t</div>';
	document.write(ad);
	}
function displayAdTall(google_ads)
	{ad = '<div id="adSenseSky" class="adSenseOrange"';
	ad+='>\n\t<div class="adSenseDisplayHeader">Ads by Google<div class="adSenseWhatIs"';
	if (navigator.appName.search('Internet Explorer') > -1)
		{ad += 'style="float:none;padding-left:8px;"';}
	ad+='><a href="http://www.boston.com/help/linksqa_text/" onClick="window.open(\'\',\'popupad\',\'width=400,height=400,resizable=yes,scrollbars=yes,toolbar=no,location=no,menubar=no,status=no\')" target="popupad">what\'s this?</a></div></div><div class = "adSenseDisplayContainer">';
	for(i=0; i < google_ads.length; ++i) {
		ad += '\n\t\t<div class="adSenseDisplayAdOrange" ';
		if (navigator.appName.search('Internet Explorer') > -1)
			{ad += 'style="width:158px;" ';}
		ad +='>\n\t\t\t\t<div><a target="_blank" href="' + google_ads[i].url + '" onmouseout="window.status=\'\'" onmouseover="window.status=\'go to ' + google_ads[i].visible_url + '\'" class="adSenseDisplayTopLine">'+ google_ads[i].line1 + '</a></div><div>' + google_ads[i].line2 + ' ' + google_ads[i].line3 + '</div><div><a target="_blank" href="' + google_ads[i].url + '" onmouseout="window.status=\'\'" onmouseover="window.status=\'go to ' + google_ads[i].visible_url + '\'" class="adSenseDisplayLink">'+google_ads[i].visible_url + '</a></div>\n\t\t\t</div>';
		}
	ad += '\n\t\t</div>\n\t</div>';	
	document.write(ad);
	}

function outbrain_switcher() {
	if (channel == 'cars_news') {
		$('.ob_dual_left').css('float','right');
		$('.ob_dual_right').css('margin-left','-20px');
		$('.ob_rec').css('float','right');
		$('.ob_sl').css('margin-left','-10px');
		} else {
		if ((typeof BosDMA !='undefined') && (spsplit[1]=='sports')) {
			if (!BosDMA) {
				$('.ob_dual_left').css('float','right');
				$('.ob_dual_right').css('margin-left','-20px');
				$('.ob_rec').css('float','right');
				$('.ob_sl').css('margin-left','-10px');
				} 
			}
		}
	}

function google_ad_request_done(google_ads) {
	outbrain_switcher(channel);
	var ad = '';
	var i;
	if (typeof(ad_slot) == 'undefined')
		{ad_slot = 'top';}
	if (google_ads.length == 0) {
	switch(ad_slot){
		case 'top':oas_name="TOP";break;
		case 'bigad1':oas_name="CENTRAL";break;
		case 'bigad2':oas_name="VENDOR";break;
		case 'footer':oas_name="FOOTER";break;
		case 'sky':oas_name="RIGHT1";break;
		case 'sky2':oas_name="RIGHT2";break;
		case 'tile1':oas_name="TILE1";break;
		}
	document.write('<!--- start of www.boston.com/remnant/google_()_247RealMediaAdTag ---><scr'+'ipt LANGUAGE="Javascr'+'ipt1.1" SRC="http://rmedia.boston.com/RealMedia/ads/adstream_jx.ads/www.boston.com/remnant/google/@'+oas_name+'"></scr'+'ipt>	  <scr'+'ipt LANGUAGE="JavaScript"> <!--if (parseFloat(navigator.appVersion) == 0){ document.write('+"'"+'<IFRAME WIDTH=1 HEIGHT=1 MARGINWIDTH=0 MARGINHEIGHT=0 HSPACE=0 VSPACE=0 FRAMEBORDER=0 SCROLLING=no BORDERCOLOR="#000000" SRC="http://rmedia.boston.com/RealMedia/ads/adstream_sx.ads/www.boston.com/remnant/google/@'+oas_name+'"></IFRAME>'+"'"+');} // --> </scr'+'ipt><noscr'+'ipt><A HREF="http://rmedia.boston.com/RealMedia/ads/click_nx.ads/www.boston.com/remnant/google/@'+oas_name+'?x"><IMG SRC="http://rmedia.boston.com/RealMedia/ads/adstream_nx.ads/www.boston.com/remnant/google/@'+oas_name+'"></a></noscr'+'ipt> <!--- end of www.boston.com/remnant/google_()_247RealMediaAdTag --->');
	  return;
	}
	if (google_ad.type == "image") {
	  var image_url = google_ad.image_url;
	  if (image_url.indexOf('http') == -1) {
		image_url = 'http://' + image_url;
		}
	  if (ad_slot == 'sky'||ad_slot == 'sky2')
	  {ad += '<div id="adSenseSky">';}
	  else
	  {ad += '<div id="adSenseImage">';}
	  ad += '<div><a href="' + google_ad.url +'" target="_top" title="go to ' + google_ad.visible_url +'" class="adSenseDisplayImage"><img border="0" src="' + image_url +'"width="' + google_ad.image_width +'"height="' + google_ad.image_height + '"/></a></div></div>';
	  document.write(ad);
	  } 
	
	else if (google_ad.type == "html") {
	ad += '<div id="adSenseHTML">'+google_ad.snippet+'</div>'; 
	document.write(ad);
	}
	
	else if (google_ad.type == "flash") {
	ad += '<div id="adSenseFlash"><OBJECT classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,0,0" WIDTH="' + google_ad.image_width + '" HEIGHT="' + google_ad.image_height + '"><PARAM NAME="movie" VALUE="' + google_ad.image_url + '"><PARAM NAME="quality" VALUE="high"><PARAM NAME="AllowScriptAccess" VALUE="never"><EMBED src="' + google_ad.image_url + '" WIDTH="' + google_ad.image_width + '" HEIGHT="' + google_ad.image_height + '" TYPE="application/x-shockwave-flash" AllowScriptAccess="never" PLUGINSPAGE="http://www.macromedia.com/go/getflashplayer"></EMBED></OBJECT></div>';
	document.write(ad);
	}
	else {	
		if (ad_slot == 'top' || ad_slot == 'footer')
		{
		displayAdWide(google_ads);}	
		else if (ad_slot == 'sky'|| ad_slot == 'sky2')
			{displayAdTall(google_ads);}
		else if (ad_slot == 'bottom' && document.location.search.indexOf("comments=all")!=-1)
			{checkForComments(0,google_ads);}
		else
			{displayAdBig(google_ads);}
	}
}
if (typeof jQuery == 'undefined') {
document.write('<scr'+'ipt type="text/javascript" src="http://cache.boston.com/universal/js/jquery-1.3.2.min.js"></scr'+'ipt>');
}
if (typeof OAS_sitepage == 'undefined')
	{var OAS_sitepage = 'remnant', OAS_sitepage = '', page_type = '';}

var spsplit=OAS_sitepage.split('/');
if(spsplit.length>2) {var section=spsplit[1]+'_'+spsplit[2]}
else {var section=spsplit[1]}

if (typeof ad_slot !="undefined" && ad_slot != 'bottom')
{// display logic
if (section =='travel_NET') {section='travel_newengland'}
else if (spsplit[1]=='bostonworks') {spsplit[1]='jobs'}
else if (spsplit[2]=='redsox') {section='sports_baseball'}
else if (spsplit[2]=='patriots') {section='sports_football'}
else if (spsplit[2]=='celtics') {section='sports_basketball'}
else if (spsplit[2]=='bruins') {section='sports_hockey'}
else if (spsplit[2]=='hyperlocal') {section='yourtown'}
else if (spsplit[2]=='dining') {section='ae_restaurants'}
else if (spsplit[2]=='family') {section='lifestyle_moms'}
else if (spsplit[2]=='health') {section='news_health'}
else if (spsplit[2]=='globe') {section='news_local'}
else if (spsplit[2]=='facebook') {section='yourboston'}
else if (spsplit[1]=='yourlife') {section='lifestyle_'+spsplit[2];spsplit[1]='lifestyle';}
var validchannels = "ae|ae_arts|ae_books|ae_movies|ae_music|ae_restaurants|ae_tv|business|business_finance|business_technology|cars|homepage|jobs|lifestyle|lifestyle_fashion|lifestyle_food|lifestyle_moms|lifestyle_weddings|news|news_education|news_health|news_local|news_nation|news_world|newsglobe|realestate|sports|sports_baseball|sports_basketball|sports_football|sports_highschool|sports_hockey|thingstodo|travel|travel_boston|travel_getaways|travel_newengland|yourtown|yourboston";
var channel = validchannels.match(section);
//backup tries
if (channel==null) {channel = validchannels.match(spsplit[1])}
if (channel==null) {channel = 'other'}

var google_ad_channel=''+channel +'_'+ad_slot+','+channel;

if (ad_slot == 'top' || ad_slot == 'bigad1' || ad_slot == 'sky')
	{google_ad_channel+=',pos_above_the_fold,ros_above_the_fold';
	if (ad_slot == 'sky') {google_ad_channel+=',ros_right1'}
	switch(spsplit[1]){
	case 'lifestyle':google_ad_channel+=',Lifestyle_Display';break;
	case 'business':google_ad_channel+=',Business_Display';break;
	case 'news':google_ad_channel+=',News_Display';break;
	case 'thingstodo':google_ad_channel+=',Things_to_do_display';break;
	case 'ae':google_ad_channel+=',A&E_Display';break;
	case 'sports':google_ad_channel+=',Sports_Display';
	}
	if (channel == 'business_finance'|| channel== 'business_technology')
		{google_ad_channel+=','+channel+'_above_the_fold'}
	}
else	{google_ad_channel+=',pos_below_the_fold,ros_below_the_fold'
	if (ad_slot == 'sky2') {google_ad_channel+=',ros_right2'}
	}

}
else
{if (OAS_sitepage.search("article")) {
	var suffix='_article';
	}
	else if (OAS_sitepage.search("gallery")) {
	var suffix='_gallery';
	}
	else {
	var suffix='_other';
	}

// adjust a couple of names
if (section =='travel_NET') {section='travel_newengland'}
else if (spsplit[1]=='bostonworks') {spsplit[1]='jobs'}
else if (spsplit[2]=='redsox') {section='sports_baseball'}
else if (spsplit[2]=='patriots') {section='sports_football'}
else if (spsplit[2]=='celtics') {section='sports_basketball'}
else if (spsplit[2]=='bruins') {section='sports_hockey'}
else if (spsplit[2]=='hyperlocal') {section='yourtown'}
else if (spsplit[2]=='dining') {section='ae_restaurants'}
else if (spsplit[2]=='family') {section='lifestyle_moms'}
else if (spsplit[2]=='health') {section='news_health'}
else if (spsplit[1]=='yourlife') {section='lifestyle_'+spsplit[2];spsplit[1]='lifestyle';}
var validchannels = "news|news_local|news_globe|news_nation|news_health|news_science|news_world|news_politics|news_education|business|business_finance|business_technology|sports|sports_baseball|sports_football|sports_basketball|sports_hockey|sports_soccer|sports_college|sports_highschool|lifestyle|lifestyle_home|lifestyle_green|lifestyle_food|lifestyle_relationships|lifestyle_weddings|lifestyle_moms|lifestyle_fashion|lifestyle_photos|ae|ae_restaurants|ae_music|ae_movies|ae_celebrity|ae_tv|ae_books|ae_arts|thingstodo|travel|travel_newengland|travel_boston|travel_getaways|cars|cars_news|cars_research|jobs|realestate|realestate_news|yourtown|obituaries|weather";
var channel = validchannels.match(section);

//backup tries
if (channel==null) {channel = validchannels.match(spsplit[1])}
if (channel==null || channel=="") {channel = 'other'}
var google_ad_channel=channel+suffix,google_hints='',ad_test='';
//odd cases
if (spsplit[2]=='bigpicture') {google_ad_channel = 'bigpicture';}
else if (spsplit[1]=='weather') {google_ad_channel = 'weather';}
else if (document.location.search.indexOf("comments=all")!=-1) {google_ad_channel +=", community_comments,test10";}
else if (document.location.href.indexOf("forums.html")!=-1) {google_ad_channel ="community_forums";}
else if (OAS_sitepage == 'remnant') {google_hints=parent.document.title;}
}
if (ad_slot == 'top')
	{google_image_size = '728x90';google_max_num_ads = 3;google_ad_type='text';google_ad_client = 'ca-boston_display'}
else if (ad_slot == 'footer')
	{google_image_size = '728x90';google_max_num_ads = 3;google_ad_type='text';google_ad_client = 'ca-boston_display'}
else if (ad_slot == 'sky'||ad_slot =='sky2')
	{google_image_size = '160x600';google_max_num_ads = 6;google_ad_type='text';google_ad_client = 'ca-boston_display'}
else if (ad_slot == 'bottom')
	{google_max_num_ads = 3;google_ad_type='text';google_ad_client = 'ca-boston_js';
	if (page_type=='section_folder' && OAS_sitepage.search('blog') < 0)
		{google_max_num_ads = 1}
	}
else if (ad_slot == 'tile1') 
	{google_max_num_ads = 6;google_ad_type='text';google_ad_client = 'ca-boston_display'}
else {google_image_size = '300x250';google_max_num_ads = 3;google_ad_type='text';google_ad_client = 'ca-boston_display'}
if (ad_slot == 'bigad1' && channel=='homepage') {google_ad_type='image'}
//constants/
var google_ad_output = 'js', google_language = 'en', google_encoding = 'utf8', google_safe = 'high', google_hints = '', google_ad_section = 'default',ad_version='Orange';

switch(section){
case 'weather':google_hints='Travel';break;
case 'lifestyle_food':google_hints='recipes';break;
case 'bigpicture':google_hints='photography';break;
case 'yourtown':if (typeof trustedTown !="undefined") {google_hints=trustedTown + ', MA';}break;
case 'homepage':google_hints='boston,news';
}
z = Math.random();
if ((z < .25) && typeof artCats!='undefined' && typeof artCatsSecond!='undefined' && artCats.length && artCatsSecond.length) {google_ad_channel +=',test4';google_hints+=artCats.join()+","+artCatsSecond.join()+","+document.title.replace(' - ',' ').replace(' Boston.com','').replace(' The Boston Globe','');}
else if ((z < .50) && typeof artCats!='undefined' && typeof artCatsSecond!='undefined' && artCats.length && artCatsSecond.length) {google_ad_channel +=',test5';google_hints+=artCats.join()+","+artCatsSecond.join();}
else if (z < .75) {google_ad_channel +=',test6';google_hints+=document.title.replace(' - ',' ').replace(' Boston.com','').replace(' The Boston Globe','');}
else {google_ad_channel +=',test1';}
if ((z < .5) && (ad_slot == 'tile1')) {google_ad_channel +=',test7';ad_version+=' ads3bigdown';google_max_num_ads = 5;}
else if (ad_slot == 'tile1') {google_ad_channel +=',test8';}