/*
	BostonGlobe.com UCG comments for Movable Type blogs
	June, 2012
	Jesse Weisbeck
*/

//document.cookie = "pathAuth=5abdb915-31d7-4395-8868-69933f5dd730; expires=Thu, 2 Aug 2013 20:47:11 UTC; path=/"; // FPO 

// nerf a function called checkComm() in bcom-article-tools.js that was in pluck scripts and is now gone. Gone, I say!
function checkComm(){
	return;
}

(function(win, $, undefined) {
	var doc = win.document,
		docElem = doc.documentElement,
		firstTime = true;

	ugc = {}; // localize to this closure for now. No current need to expose any parts of ugc to global scope
	
	var queryArray = window.location.search.substr(1).split('&');
	for ( var i = 0; i < queryArray.length; i++) {
	    var queryTerm = queryArray[i],
	    termArray = queryTerm.split('=');
	    if ( termArray[0] == 'commPage' ) {
	        ugc.pageNum = termArray[1];
	    }
	}
	ugc.pageNum = !ugc.pageNum ? 1 : ugc.pageNum;
	var srch = window.location.search;
	// we want to expose some shit to the world, in case other modules want to use it. ugc.comment object is all private, not this guy
	ugc.globals = {
		topic: 0,
		page: document.location.href.search('comments=all') !== -1 ? "comments" : "article",
		baseUrl: "/eom/SysConfig/WebPortal/BostonGlobe/Framework/skins/components/newcomments/grab_comments.jsp",
		apiUrl: "/ugc/",
		paginateBy: 25,
		offset: 0,

		/*(typeof $("#aComments").attr('data-sort') == "undefined" && window.location.search.search('sort') == -1)
				? 'OLDEST_CREATE_DT'
				: $("#aComments").attr('data-sort'), // default, yo */

		paginate: '', // in ugc.article.fetch, pass 'paginate' string to force append of comments. Load new batch of comments is default
		userAlias: '',
		cmtFormMarkup: [
			'<div class="Comments_Container" id="Comments_OuterContainer"></div>',
				'<div id="CommentsContainer" class="Comments_Container">',
					'<form method="POST" action="/" class="new-comment-form">',
						'<p>  <span class="logout-link"><span class="comment-user-name"></span> (not you? <a href="http://www.boston.com/?__goto=logout">Log out</a>)</span></p>',
						'<div class="Comments_AddHeading">',
					    'Add a comment <span class="Comments_MaxLengthText">(max 3000 characters)</span>',
						'<span class="Comments_Error" id="CommentError"></span>',
					    '</div>',
						'<div class="Comments_AddTextarea">',
							'<textarea name="body" id="comment-body" class="richtext"></textarea>',
						'</div>',
			    		'<div class="Comments_Submit">',
							'<input type="submit" value="Submit" id="post-comment">',
						'</div>',
					'</form>',
				'</div>'
			].join(''),
		cmtFormMarkupDeactivated: [
			'<div class="Comments_Container" id="Comments_OuterContainer"></div>',
			'<div id="CommentsContainer" class="Comments_Container">',
				'<p class="deactivated">We have de-activated your account.<br/> If you have questions, e-mail <a href="mailto:feedback@boston.com">feedback@boston.com.</a></p>',
			'</div>'
		].join(''),
		replyMarkup: [
			'<div class="comment new-reply">',
            	'<div class="pluck-username"><b></b>',
            		'<form action="#" class="submit-comment-form" method="post">',
						'<div class="Comments_AddHeading">Add a reply <span class="Comments_MaxLengthText">(max 3000 characters)</span><span class="Comments_Error" id="CommentError"></span></div>',
            			'<fieldset>',
            				'<textarea type="text" id="reply-textarea" class="add-reply-comment richtext" name="comment"></textarea>',
            				'<div class="button-holder"><button class="send-reply-comment">Submit</button>',
							'<button class="cancel-reply-link cancel-reply">Cancel</button></div>',
            			'</fieldset>',
						'<div style="text-align: right; " id="pPolicy">Your comment is ',
						'subject to the rules of our <a href="http://www.boston.com/community/forums/rules">Posting Policy</a> <br>This comment may appear on your public ',
						'profile. <a href="http://www.boston.com/help/public_profile_faq">Public Profile FAQ</a> </div>',
            		'</form>',
            	'</div>',
			'</div>'
		].join(''),
		abuseMarkup: [
			'<div class="comment abuse-form">',
				'<span class="arrow-up"></span>',
				'<h4>Report abuse</h4>',
				'<form action="#">',
					'<div class="abuse-options">',
						'<select>',
							'<option value="OBSCENITY_VULGARITY">Obscenity or vulgarity</option>',
							'<option value="HATE_SPEECH">Hate speech</option>',
							'<option value="PERSONAL_ATTACK">Personal attack</option>',
							'<option value="ADVERTISING_SPAM">Advertising spam</option>',
							'<option value="COPYRIGHT_PLAGIARISM">Copyright or plagarism</option>',
							'<option value="OTHER">Other</option>',
						'</select>',
						'<div class="button-holder"><button class="send-abuse-report">Report abuse</button></div>',
						'<a href="#" class="cancel-abuse-report">Cancel</a>',
					'</div>',
					'<div class="abuse-comment">',
						'<textarea type="text" id="abuse-textarea" class="add-abuse-comment" name="abuse-comment" placeholder="Comment (optional)"></textarea>',
					'</div>',
				'</form>',
			'</div>'
		].join(''),	
		paginationBtn: [
			'<div class="more-pagination">',
				'<a href="#" class="pagination-button paginate-arrow">Show more comments</a>',
			'</div>'
		].join(''),
		summaryUIMarkup: function(pageOrInline) {
			if( ugc.globals.page === "article" ){
				return [
					'<tr valign="top" class="summary">',
						'<td class="comments-icon"><img style="padding-right:4px;" src="http://cache.boston.com/jobs/i/comments.jpg"/></td><td id="rCommentsHead"><H4>READER COMMENTS &raquo;</h4>',
							//'<h4>READER COMMENTS</h4>',
						//'</td>',	
						//'<td>',	
							'<ul class="comments-article-meta">',
								'<li><a href="'+ window.location.href.split("?")[0] +'?comments=all#readerComm">View comments (<span id="cmHeaderCount"></span>) &raquo;</a></li>',
								'<li> | </li>',
								'<li><a href="'+ window.location.href.split("?")[0] +'?comments=all#addComm">Comment on this story &raquo;</a></li>',
							'</ul>',
						'</td>',
						'<td align="right" id="rCommentsSort">&nbsp;</td>',
					'</tr>'
				].join('');
								
			} else if ( ugc.globals.page === "comments" ){
				var sort = $("#aComments").attr('data-sort');
				return [
					'<tr valign="top" class="summary">',
						'<td id="rCommentsHead">',
							'<a name="readerComm">',
							'</a><h4>READER COMMENTS (<span id="cmHeaderCount"></span>)</h4>',
						'</td>',
					'</tr>',
					'<tr class="sorts">',
							'<td align="right" id="rCommentsSort">Sort: ',
							'<a href="#" class="sort-links '+((sort == "NEWEST_CREATE_DT")?"current-sort":"")+'" data-sort="NEWEST_CREATE_DT">Latest first</a> |',
							' <a href="#" data-sort="OLDEST_CREATE_DT" class="sort-links '+((sort == "OLDEST_CREATE_DT")?"current-sort":"")+'">Chrono order</a>  | ',
							'<a href="#" data-sort="MOST_LIKES" class="sort-links'+((sort == "MOST_LIKES")?"current-sort":"")+'">Most liked</a>',
						'</td>',
					'</tr>'
				].join('');
            }
        },
		reasonForm: function () {
            var form = [
            '<div class="modal">',
              '<form class="admin-reason">',
                '<div class="heading">Reason for this action?<a href="#" class="close-modal" data-action="close">&times;</a></div>',
                '<div class="form-section">',
                  '<textarea name="body"></textarea>',
                '</div>',
                '<div class="form-section submit">',
                  '<input type="submit" class="btn" value="Save"/>',
                '</div>',
              '</form>',
            '</div>'
            ].join('');
            return $(form);
        },
		loggedIn: (function() {
			// STUB ... TK: add a pathAuth cookie check, or check in Movable Type somehow?
			var forceAuth = ( document.location.href.search('loggedin=false') !== -1 ? 0 : 1 );
			
			if( forceAuth === 0 ) return false;
			
			return document.cookie.indexOf( 'pathAuth=') !== -1 ? true : false;
		})()
	};
	function goToUgcProfileUrl() {
	  var pathAuth = getCookie("pathAuth");
	  if (!pathAuth) return;
	  $.getJSON("/ugc/user/regiauthtoken/" + getCookie("pathAuth"), function(user, textStatus, jqXHR) {
		window.location.href = "/community/user/" + user.id
	  });
	  return false;
	}

	// Core comment object
	// - Stores program's state
	// - Does a fetch for comments or replies
	// - Manages ui elements
	ugc.comment = function( topic ) {
		var self = this;
		self.querystring = "";
		self.thread = topic;
		self.behavior;
		self.totalToShow = 25; // this is a running total that gets incremented (in amounts of 25 comments) by the paginated fetch
		self.offset = 0; // track offset privately so pagination offset doesn't have a side effect of alterting the global offset. No, I don't know what I'm doing anymore why do you ask?
		self.commentCount = 0;

		function _init( ui ){

			// Perform DOM-ready work
			if( ugc.globals.page === "comments"){
				// Show only a preview of article body by DOM'ming out all but the 'firstgraf' & linking back to 'full' article
				var url = window.location.href;
				$('.articlePluckHidden').hide();
				$('.firstGraph').after('<div id="viewFulArt"><a href="'+ url.split('?')[0] +'">&lt; Read Full Article</a></div>');			
			}
			
			var $userAlias = $('#mc a');
			var userName = $userAlias.text().split("'")[0] || $userAlias.text(); 
			var $alias = $userAlias.text( userName );
			ugc.globals.userAlias = $('<span>').append( $alias.clone() ).html();
			
			var pageOrInline = ($('#aComments').attr('data-pgFmt')=="page")? 'page': $('#aComments').attr('data-pgFmt', 'inline');
			
			ugc.globals.offset = (typeof window.location.search.split('page=')[1] != "undefined")
							? window.location.search.split('page=')[1].split('&')[0]
							: 1;

			// If on comments page, add a class to meta-data summary table so it can be styled differently than article page
			ugc.globals.page === "comments" ? $('#comments-meta').addClass('comments-table-style') : null;
					
			// Define sort value
			ugc.globals.sort = (function(){
				var s = "";
				if(srch.search("sort") > 0) {
					var start = srch.search("sort"),
						finish= srch.substr(start).search(/&|$/),
						srchVal=srch.substr(start,finish).split('=')[1];
					return srchVal;
				}
				else if(typeof $('#aComments').attr('data-sort') != "undefined"){
					return $('#aComments').attr('data-sort');
				}
			})();
			
			// cache commonly reused DOM elements in jQuery
			self.cmtWrapper = $('#aComments');
			self.parentCommentWrapper; // this element is xhr'd into DOM on initial js load of comments. Can't set it here bc it doesn't exist yet!
			self.loginForm = $('#commLoginForm');
			self.commentsMeta = $('#comments-meta');
			self.cmtFormWrapper = $('#Comments_Container1wrap').hide();

			// add comments UI summary header row markup (depending on what page we're on)
			self.commentsMeta.append( ugc.globals.summaryUIMarkup("page") );

			_appendCounts(); // counts go on both article and comments page, and don't require an auth check

			self.behavior = ui;
			self.behavior.prototype = self;

			self.behavior.actionHandlers(); // adds "live" handlers to all possible comment API interactions (all handlers are click bc WTF using jquery v1.3.2)
			self.behavior.sortHandler();	 // adds click handlers for sort links. This only needs to be applied once on comments load
			
			$.ajaxSetup({
			  cache: false
			});
		
				
		};
		
		function _commentFormControl(){
			if( !ugc.globals.loggedIn ) {
				//self.loginForm.css('display', 'block'); // Phase 2 implementation. For phase 1 we just link to the login page.
				
				if( !$('.comment-login-prompt').length ){
					$('#articleComments').after('<table id="comments-meta" class="comment-login-prompt"><tbody><tr valign="top" class="summary"><td width=609><h4 style="padding: .5em 0; text-align: center;"><a href="http://www.boston.com/eom/SysConfig/WebPortal/Boston/Framework/regi/login.jsp">Please log in to comment &raquo;</a></h4></td></tr></tbody></table>');
				}
				
				// remove all interactions
				//$('.comment-tools, .view-more').remove();

			} else if( ugc.globals.loggedIn ) {
				
				self.cmtFormWrapper.show(); // don't ask, just ... don't ask. Previous pluck grossness side-effects
				
				// Delete current form, if there is one, and show comment form anew
				var $formWrapper = self.cmtFormWrapper.find('#Comments_Container1');
				
				if( $formWrapper.children().length ){
					tinyMCE.get( "comment-body" ).setContent("");
					return;
					// tinyMCE.execCommand('mceRemoveControl',false, 'comment-body');
					// $formWrapper.empty();
				}
				self.cmtFormWrapper.css( "background-color", "#ecf4ff");
				
				var currentUserIsActive = $('#comments').attr('data-user-active');
				if ( currentUserIsActive === 'false' ) {
					$formWrapper.append( ugc.globals.cmtFormMarkupDeactivated );
				} else {
					$formWrapper.append( ugc.globals.cmtFormMarkup );
					$('#pPolicy').show(); // don't ask, just ... don't ask
				}
				
				
				
				var c = document.cookie, 
					cc = c.substr(c.search("PSyncHint")),
					c1 = cc.search("=")+1;
					ccc= cc.substr(c1,cc.search(';')-c1); // this is the userName.
				
				$formWrapper.find(".comment-user-name").html('<a href="#" >'+ccc+'</a>').on('click', goToUgcProfileUrl);
				
				self.behavior.submitHandler( '#post-comment', {
					body: $('#comment-body')
				}, "comment");
				
				// show MORE pagination button (if we didn't already append it), but only if there's more than 25 comments
				var pgFmt =$("#aComments").attr("data-pgFmt");
				//var pgFmt =	window.location.search.split('pgFmt=')[1].split(/[&#]/);
				if(pgFmt=="inline" && !$('.more-pagination').length && self.commentCount > ugc.globals.paginateBy ) {
					self.cmtWrapper.after( ugc.globals.paginationBtn );
					self.behavior.moreHandler();
				}
				else if(pgFmt=="page" && ! $('.pagination').length && self.commentCount > ugc.globals.paginateBy) {
					var pageSelectors = pagination()
					self.cmtWrapper.after( pageSelectors );
				}
				if(typeof window['tinyMCE'] != "undefined" && tinyMCE.get("comment-body") != null) {
					tinyMCE.execCommand('mceAddControl', false, 'comment-body');
				}
			}			
		};

		function pagination(){ // data
			var pageNum = (typeof window.location.search.split('page=')[1] != "undefined")
							? Number(window.location.search.split('page=')[1].split('&')[0])
							: 1,
				totalComments = $("#comments").attr('total'),
				totalPages = Math.ceil(totalComments / 25),
				pgFirst,pgLast,paginator = $('<ul/>'),pgDiv = $('<div class="pagination">').append(paginator);
			ugc.globals.offset = pageNum;
			if( totalPages < 10 ) {
				pgFirst = 1, pgLast = totalPages;
			}
			else if(totalPages - 8 < pageNum) {
				pgFirst = totalPages - 9, pgLast = totalPages;
			}
			else{
				pgFirst = Math.max(1,pageNum-1), pgLast = pgFirst + 9;
			}
			if(pageNum > 1){
				paginator.append('<li><a href="?comments=all&page=1&sort='+ugc.globals.sort+'">First</a></li><li><a href="?comments=all&page='+(pageNum-1)+'"><<</a></li>');
			}
			for(var i= pgFirst; i <= pgLast; i++) {
				var li = $('<li><a href="?comments=all&page='+i+'&sort='+ugc.globals.sort+'">'+i+'</a></li>')
				if(i == pageNum) li.addClass('active');
				li.appendTo(paginator);
			}
			if(pageNum < totalPages){
				paginator.append('<li><a href="?comments=all&page='+(pageNum+1)+'&sort='+ugc.globals.sort+'">>></a></li><li><a href="?comments=all&page='+totalPages+'">Last</a></li>');
			}
			return pgDiv;
		}


		function _appendComments( data, paginate ){
			$('.more-pagination')
				.find('.pagination-button')
					.text('Show more comments')
					.addClass('paginate-arrow')
				.end()
				.fadeTo(100, '1');
				
			// if no data was returned, hide pagination button bc we're now showing all the comments
			// NB: 'Show fewer' button TK in next iteration
			if( $(data).children().length <= 1 ) {
				
				$('#articleComments .pagination-button')
					.text('Currently showing all comments')
					.removeClass('paginate-arrow')
					.end();
			}
			
			// default is to freshly reload all comments. Must explicitly pass 'paginate' string to perform true append
			if( paginate !== "paginate" ) self.cmtWrapper.children('div').remove(); // empty any comments that might presently be there

			if( $('#comments').length && !self.parentCommentWrapper ) self.parentCommentWrapper = $('#comments');
				
			if( $('#comments').length ){
				self.parentCommentWrapper.append( data ? $(data).hide().fadeIn(500) : '' );
				return false;
			} 

			self.cmtWrapper.append( data ? $(data).hide().fadeIn(500) : '' );
		};
		
		function _appendReplies( data, el, paginate ){
			// data is html fragment of replies
			// el is the parent comment element. Add replies after that
			// paginate is used to append or remove replies in the reply pagination action
			

			$(el).find('.new-reply').fadeOut('fast').remove(); // remove the reply form out of DOM.
			
			var chillunBottom = ( $(el).offset().top + $(el).next().height() ) - 50;
			
			if( paginate === "open") {
				$(el).find(".children").remove();
				$(el).append( $('<div data-reply-count="' + $(data).size() + '" class="newcom children"><div class="replies-hed">Replies</div>' + data + '</div>').hide().fadeIn(500) );
			} else {
				$(el).find('.children').append( data );
			}
			
			//$(el).next().height() > 200 ? $('html, body').animate({scrollTop: chillunBottom}, 700) : null; 
			$('html, body').animate({scrollTop: chillunBottom}, 700);
			
		};
		
		function _appendCounts(){
			//$.getJSON( ugc.globals.apiUrl + 'topic/id/' + ugc.globals.topic, function(d) {
				self.commentCount = ugc.totalComments;
				$('#cmBlogCount, #cmHeaderCount').append( self.commentCount );
				
				if( $('#artShareTools').length ){
					$('#artShareTools').append('<li id="shareComments"><a href="?comments=all#readerComm" id="commentCount">Comments (<span id="cCount">'+ self.commentCount +'</span>)</a></li>');
				}
				
			//});
		};
		
		function _buildQueryString( paramObject ){
			var str = "&";
			if( paramObject ){
				for(p in paramObject){
					str += p + "=" + paramObject[p] + '&';
				}
			}
			return str.slice(0, str.length-1);
		};
		
		// Generic comments and replies fetch
		function _fetch( queryparams, paginate, el ) {	
			
			self.querystring = _buildQueryString( queryparams );
			
			// Methode jsp proxy url format: ${serviceURI}/comments/h/topic/${topic}?offset=${offset}&limit=${limit}&sort=${query}
			
			$.get( ugc.globals.baseUrl + '?topic=' + self.thread + self.querystring, function(data) {
												
				ugc.globals.page === "comments" && queryparams.req === "getParentComments" ? _appendComments( data, paginate ) : null; // comments page check is a double-check
				
				ugc.globals.page === "comments" && queryparams.req === "getReplies" ?  _appendReplies( data, el, paginate ) : null;
				
				if( data ) _commentFormControl();
				
				if(queryparams.req == "getReplies"){
					var p = $(".comment[data-thread="+self.thread+"]");
					p.find('.children').append('<a href="#" class="hide-replies">Hide replies</a>')
				}
				
				self.thread = ugc.globals.topic; // reset local thread id to the article's topic id every time a fetch occurs
				
				// general ui resets
				$('.view-more').addClass('paginate-arrow'); 
				
				if(firstTime){
					//add TinyMCE script
					var bodyId = document.body.id;
					if(bodyId == "story" || bodyId == "wirestory"){
						tinyMCEInit();
					} else {
						$.getScript("http://cache.boston.com/universal/tinymce/tiny_mce.js", function(data, textStatus, jqxhr) {
							tinyMCEInit();
						});
					}
					firstTime = false;
				}
			});
		};

		return {
			init: _init,
			fetch: _fetch		
		};
	};

	// Event behaviors for all interactions	
	ugc.behavior = function() {
		var self = this; // this object's prototype is assigned to ugc.comments' at DOM ready, so this can access all it's properties	
		
		// Handles comments and demerits. Could handle replies/like/dislikes, but currently doesn't
		function _submitHandler( el, data, type) {
			
			// POST. comment//abuse (demerit) event handlers
			$( el ).click(function(e) {	
				var postData = {}, reloadComments = true, params;
				if(typeof(window['tinyMCE']) != "undefined"){
					window['tinyMCE'].triggerSave(true,true) //formerly (true,true);
				}
								
				for( d in data){
					if( d === "body") { 
						postData[d] = data[d].val();
						if( !postData[d].length ){
							alert('Please add a comment first.');
							return false;
						}
					} else {
						postData[d] = data[d];
					}
				}				
			
				// POST data params for 'comment', 'reply' and 'demerit'
				if( type === "comment"){
					params = 'comment/topic/' + ugc.globals.topic;
					self.totalToShow = 0;
					ugc.globals.sort = "NEWEST_CREATE_DT";
					_updateSortControls();
					// waiting spinner for ui feedback
					self.cmtFormWrapper.fadeTo(50, .2);
					$('#wait').css({
						display: 'block',
						bottom: '150px',
						left: '50%',
						marginLeft: '0',
						marginTop: '0'
					});
					 
					$('html,body').animate({scrollTop:self.cmtWrapper.offset().top-100}, 500); // scroll user to top of comments, where his/her comment will appear
					
				} else if ( type === "demerit" && $(e.target).hasClass('send-abuse-report')){ // demerit is the abuse form

					postData.demeritType = el.find('option').filter(':selected').val();
					postData.body = el.find('#abuse-textarea').val();
					
					var ia = el.parents('.comment').eq(0).attr("data-thread");
						
					params = 'demerit/' + postData.demeritType + '/user/' + postData.userId + '/ia/' + ia;
					reloadComments = false;					
				} else {
					return false;
				}
				$('#post-comment').attr('disabled','disabled')
				$(document).ajaxError( function(e, xhr, settings, exception) {
			      if ( xhr.status == 403 ) {
			        var banned_words = xhr.responseText,
			            message = 'Please remove the following banned word(s) from your post and re-submit: \r',
			            banned_array = banned_words.split(',');
			        for ( var i = 0; i < banned_array.length; i++) {
			          message += '- ' + banned_array[i] + '\r';
			        }
			        alert( message );
			        $('#post-comment').removeAttr('disabled');
			      }
    			});
				$.ajax({
					url: ugc.globals.apiUrl +  params,
					dataType: 'json',
					type: 'POST',
					data: postData, // two potential properties: 'body' and 'parent'. If parent is present, POST will be treated as a reply by the service.
					success: function(d) {
						// if sort is chrono, set offset to be last page.
						var pgFmt =$("#aComments").attr("data-pgFmt");
						if (pgFmt == "page"){
							// set offset to be last page.
							// change paginator
						}
						if( reloadComments ){
							ugc.article.fetch({
								offset: (ugc.globals.offset-1)*ugc.globals.paginateBy,
								limit: ugc.globals.paginateBy,
								sort: ugc.globals.sort,
								req: 'getParentComments'
							});
						}
						
						if( $('.new-reply').length ) $('.new-reply').remove();
						if( $('.abuse-form').length ) $('.abuse-form').remove();
						if(typeof window["tinyMCE"] != "undefined"){
							if(typeof data['parent'] != "undefined" && data['parent'] != null){
								var replyTextArea = tinyMCE.get("reply-textarea");
								if (typeof replyTextArea != "undefined"){
									replyTextArea.setContent("");
								}
							} else {
								var tinyTextarea = tinyMCE.get( "comment-body" );
								if (typeof tinyTextArea != "undefined"){
									tinyTextarea.setContent("");
								}
							}
						} else if(typeof data['parent'] != undefined && data['parent'] != null) {
							$("textarea#comment-body").val("");
						} else {
							$("textarea#reply-textarea").val("")
						}
									
						$('#wait').hide();
						self.cmtFormWrapper.fadeTo(50, 1);
						$('#post-comment').removeAttr('disabled');
						var comCountDiv = $('#cmBlogCount, #cmHeaderCount, #cCount');
						comCountDiv.html(Number(comCountDiv.html())+1);
					},
					error: function(e){
			
						$('#wait').hide();
						self.cmtFormWrapper.fadeTo(50, 1);
	         	//		var message = 'Please remove the following banned word(s) from your post and re-submit: \r',
	          	//		banned_array = banned_words.split(',');
	        	//		for ( var i = 0; i < banned_array.length; i++) {
	          	//			message += '- ' + banned_array[i] + '\r';
	        	//		}
	        	//		alert( message );
	      		//
				//		// after error, re-enable submit button
						$('#post-comment').removeAttr('disabled');
				//			
					}
				});
				e.preventDefault();
			});
		};
		
		/* 
			Sort click handlers
			- Not cumulative
			- Not context-aware of current comments
			- Just dumps all comments and reloads new 25 (default limit), sorted by whatever criteria was selected
		*/
		function _addSortHandler(){
			$('.sort-links').click(function(e) {
				
				$('.comment').fadeTo(50, .2);
				
				ugc.globals.sort = $(e.target).attr('data-sort');
											
				ugc.article.fetch({
					offset: '0',
					limit: '25',
					sort: ugc.globals.sort,
					req: 'getParentComments'
					
				});
				
				_updateSortControls();
				
				e.preventDefault();
			});

		};
		
		/*
			More click handler for PAGINATION - only added once, when the page loads
			1. Uses global OFFSET and default LIMIT values
		*/
		function _addMoreHandler(){
			$('.more-pagination').click(function( e ) {
				$(this)
					.find('.pagination-button')
					.text('Loading ...')
					.removeClass('paginate-arrow')
					.end()
					.fadeTo(100, '.4');
				
				self.offset += ugc.globals.paginateBy; // updated internally by comment object, so we can grab updated value here
	
				ugc.article.fetch({
					offset: self.offset,
					limit: ugc.globals.paginateBy,
					sort: ugc.globals.sort,
					req: 'getParentComments'
				}, 'paginate');	
				
				self.totalToShow = self.offset + ugc.globals.paginateBy;

				e.preventDefault();		
			});

			
		};
		
		/*
			Put event handlers on reply/like/dislike/abuse links
			1. $.delegate/live not available, bc we're using jquery 1.3.x
			2. Make it a jquery plugin so it can chain onto comments fetch methods for quasi-dynamic event handler management 
		*/
		function _actionHandlers() {			
			// Reply <a> link in tools row
			$('.comment-reply').live("click", function(e) {
				if($('#reply-textarea').length){
					if(typeof window['tinyMCE'] != "undefined"){
						tinyMCE.get( "reply-textarea" ).setContent("");
						tinyMCE.execCommand('mceRemoveControl', false, 'reply-textarea');
					} else {
						$('#reply-textarea').val("");
					}
				}
				if(tinyMCE.get('reply-textarea')) {
					tinyMCE.execCommand('mceRemoveControl', false, 'reply-textarea');
				}
				if( $('.new-reply').length ){
					$('.new-reply').remove();
				}
				if( $('.abuse-form').length ){
					$('.abuse-form').remove();
				}
				
				var $el = $(this),
					$commentTools = $el.parents('.comment-tools');

				// add empty reply form to DOM
				$commentTools.after( $(ugc.globals.replyMarkup).hide().fadeIn(400) );
				
				tinyMCE.execCommand('mceAddControl', false, 'reply-textarea');
				var $newReplyMarkup = $commentTools.next();
				
				// bind a link to close the form
				$('.cancel-reply-link').click(function(e) {
					$('.new-reply').remove();
					tinyMCE.execCommand('mceRemoveControl', false, 'reply-textarea');
					$(this).unbind();
					e.preventDefault();
				});

				// REPLY form submit action
				var replySubmit = $newReplyMarkup.find('.send-reply-comment');
				
				replySubmit.click(function(e) {
					if(typeof(window['tinyMCE']) != "undefined"){
						window['tinyMCE'].triggerSave(true,true);
					}
					replySubmit.attr("disabled","disabled")
					var replyBody = $newReplyMarkup.find('.add-reply-comment').val(),
						postData = {
							body: replyBody,
							parent: $(e.target).parents('div[data-thread]').attr('data-thread') // particular comment's thread id
						};
						
					if( replyBody === "" ){
						alert('Please add a reply first.');
						return false;
					}
					
					$.ajax({
						url: ugc.globals.apiUrl +  'comment/topic/' + ugc.globals.topic,
						//dataType: 'json',
						type: 'POST',
						data: postData, // two potential properties: 'body' and 'parent'. If parent is present, POST will be treated as a reply by the service.
						dataType: 'json',
						success: function(d) {
							$parentWrapper = $commentTools.parents(".parent.comment")[0];
							replySubmit.removeAttr('disabled');
							self.thread = $el.parents('.comment').attr('data-thread'); // set local thread to the reply's id
							if(typeof window['tinyMCE'] != 'undefined'){
								var tinyTextarea = tinyMCE.get( "reply-textarea" );
      							tinyTextarea.setContent("");
      						} else { $('textarea#reply-textarea').val('');}
							ugc.article.fetch({
								offset: '0',
								req: 'getReplies'
							}, 'open', $parentWrapper);
						},
						error: function(d) { replySubmit.removeAttr('disabled'); }
					});
					e.preventDefault();
					
				});
									
				e.preventDefault();
			});
			
			
			// Replies pagination handler
			$('.children').live("click", function(e) {
				if( !$(e.target).hasClass('view-more') ) return false; // other handlers live inside '.children' div, so don't interrupt their event assignments
									
				self.thread = $(this).parent().attr('data-thread');
				var $parentWrapper =  $(this).parents(".parent.comment")[0];
				$(e.target)
					.text('Loading ...')
					.addClass('paginate-arrow')
					.fadeTo(100, '.4');

				ugc.article.fetch({
					offset: '0',
					req: 'getReplies'
				}, 'open', $parentWrapper);
				
				e.preventDefault();
			});
			
							
			// like + dislike handler
			$('.comment-like').live("click", function(e) {
				handleLikeDislike(this, e);

				e.preventDefault();
			});
			
			$('.comment-dislike').live("click", function(e) {
				handleLikeDislike(this, e);
				e.preventDefault();
			});
			
			function handleLikeDislike(clickedEl, e){
				var dataAttr = $(clickedEl).find("span")[0].attributes[0],
					count = dataAttr.value;
									
				var $el = $(e.target).closest('a'), // e.target is <i>action</i>, go to parent to collect the <a> element
					threadId = $el.parents('div[data-thread]').attr('data-thread'),
					action = $el.hasClass('comment-like') ? "like" : "dislike",
					$el = $el.find('span'),
					val = $el.text()*1; // coerce string to number
					$el.attr("disabled","disabled");									
				$.ajax({
					url: ugc.globals.apiUrl + action + '/comment/' + threadId,
					type: 'POST',
					success: function(d) {
						// UPDATE THE LIKE/DISLIKE COUNT
						$el.html( val + 1 ).hide().fadeIn('fast');
					},
					error: function (request, status, error) {
					   	if(request.status == "403") {
					   		alert('Sorry, you can '+ action +' just once.');
					   	}
					   	else { $el.removeAttr('disabled'); }
					}
				});

			}
			
							
			// Abuse handler
			$('.comment-abuse').live("click", function(e) {
				if( $('.abuse-form').length ) $('.abuse-form').remove(); // don't allow ui to show more than 1 abuse form at a time
				if( $('.new-reply').length ) $('.new-reply').remove();
				
				var $comment = $(this),
					userId = $(this).parents('.parent').find('cite').attr('data-userid');
		
				$comment.parents('ul').after( $(ugc.globals.abuseMarkup).hide().fadeIn(400) );
				
				//$abuseButton = $('.send-abuse-report');
				$abuseButton = $('.abuse-form');
				
				
				$('.cancel-abuse-report').click(function(e) {
					$('.abuse-form').remove();
					$(this).unbind();
					e.preventDefault();
				});
				
				// SUBMIT ABUSE HANDLER params: el, data, type
				_submitHandler( $abuseButton, {
					userId: userId,
					demeritType: ''					
				}, "demerit");

				e.preventDefault();
				
			});

			// adminstuffs....

			$('.block-user').live("click", function(event) {
				event.preventDefault();
				block_user(event);
				
			});
			$('.unblock-user').live("click", function(event) {
				event.preventDefault();
				unblock_user(event);
			});
			$('.block-post').live("click", function(event) {
				event.preventDefault();
				block_post(event);
			});
			$('.unblock-post').live("click", function(event) {
				event.preventDefault();
				unblock_post(event);
			});
			
			$(".hide-replies").live("click", function(event){
				event.preventDefault();
				var link = $(event.currentTarget);
				var cDiv = link.parents(".children").find('.comment').hide().end();
				link.removeClass('hide-replies').addClass('show-replies').html("Show replies");
				$('html, body').animate({scrollTop: cDiv.offset().top-150}, 700)
			});
			$(".show-replies").live("click", function(event){
				event.preventDefault();
				var link = $(event.currentTarget);
				link.parents(".children").find('.comment').show();
				link.removeClass('show-replies').addClass('hide-replies').html("Hide replies");
			});
            
            $('a[data-action=close]').live('click', function(e) {
              e.preventDefault();
              $('.modal').remove();
            });
			
			function block_user(event){
			    var $this = $(event.currentTarget),
			    	$parent_li = $this.parents('div.comment').eq(0),
			    	user_id = $parent_li.find('cite').eq(0).attr('data-userid'),
                    $form = ugc.globals.reasonForm();
                $form.appendTo('body').submit(function(event) {
                    event.preventDefault();
                    var form_data = $('.admin-reason textarea[name=body]').serializeArray();
    				// Post with id
    				$.post('/ugc/user/id/'+user_id+'/blocked/TRUE', form_data, function(data){
    					$this.text('Unblock user').removeClass('block-user').addClass('unblock-user');
                        $('.modal').remove();
    				});
			    });
            }
			  
			function unblock_user(event){
			    var $this = $(event.currentTarget),
			    	$parent_li = $this.parents('div.comment').eq(0),
			    	user_id = $parent_li.find('cite').eq(0).attr('data-userid'),
                    $form = ugc.globals.reasonForm();
                $form.appendTo('body').submit(function(event) {
                    event.preventDefault();
                    var form_data = $('.admin-reason textarea[name=body]').serializeArray();
    				// Post with id
    				$.post('/ugc/user/id/'+user_id+'/blocked/FALSE', form_data, function(data){
    					$this.text('Block user').removeClass('unblock-user').addClass('block-user');
                        $('.modal').remove();
    				});
                });
			}
			  
			function block_post(event){
			    var $this = $(event.currentTarget),
			    	$parent_li = $this.parents('div.comment').eq(0),
			    	thread_id = $parent_li.attr('data-thread'),
                    $form = ugc.globals.reasonForm();
                $form.appendTo('body').submit(function(event) {
                    event.preventDefault();
                    var form_data = $('.admin-reason textarea[name=body]').serializeArray();
    				// Post with id
    				$.post('/ugc/interaction/id/'+thread_id+'/approvalstatus/BLOCKED', form_data, function(data){
    					$this.text('Unblock post').removeClass('block-post').addClass('unblock-post');
                        $('.modal').remove();
    				});
                });
			}
			  
			function unblock_post(event){
			    var $this = $(event.currentTarget),
			    	$parent_li = $this.parents('div.comment').eq(0),
			    	thread_id = $parent_li.attr('data-thread'),
                    $form = ugc.globals.reasonForm();
                    
                $form.appendTo('body').submit(function(event) {
                    event.preventDefault();
                    var form_data = $('.admin-reason textarea[name=body]').serializeArray();
    				// Post with id
    				$.post('/ugc/interaction/id/'+thread_id+'/approvalstatus/UNMODERATED', form_data, function(data){
    					$this.text('Block post').removeClass('unblock-post').addClass('block-post');
                        $('.modal').remove();
    				});
                });
			}
			  
			  // .... end of adminstuffs 
								
		}
		
		function _updateSortControls(){
			$('.current-sort').removeClass('current-sort');
			$('a[data-sort='+ ugc.globals.sort +']').addClass('current-sort');
		};
		
		return {
			submitHandler: 		_submitHandler,
			actionHandlers: 	_actionHandlers,
			sortHandler: 		_addSortHandler,
			moreHandler: 		_addMoreHandler
		};
	};



	//DOM READY KICK OFF
	ugc.startCommenting = function(){				
		$(function(){
			
			if (!$('#articleComments').length || $('#articleComments[data-disabled]').length){
				$('#Comments_Container1wrap').hide()
				return;
			}
			
			ugc.uiState = ugc.behavior(); // all the click handlers and behavior 'state'. Needs DOM ready to attach	
			ugc.article.init( ugc.uiState );
			if(window.location.href.search("comments=all") <= 0) { return false; }
			if ( ugc.globals.page === "comments"){
				var page = (typeof window.location.search.split('page=')[1] != 'undefined')
							? window.location.search.split('page=')[1].split('&')[0]
							: 1,
					commentOffset = (page-1) * 25,
					pgFmt = ($("#aComments").attr('data-pgFmt')=="page")?"page":"inline";
				ugc.article.fetch({
					offset: commentOffset,
					pgFmt: pgFmt,
					limit: '25',
					sort: ugc.globals.sort,
					req: 'getParentComments'
				});

			}				
		});
		
	};


	// Get or create a 'topic' in the UGC service, and instantiates new comment object for current article
	// creates ugc.article from ugc.coment
	ugc.makeArticleComments = function( uuid ) {
	
		$.ajax({
			url: ugc.globals.apiUrl + 'topic/uuid/' + uuid,
			type: 'GET',
			dataType: 'json',
			success: function(d) {
				// yay, there's a topic id in the service!
				ugc.globals.topic = d.id;
				ugc.totalComments = d.comments;
				ugc.article = ugc.comment( ugc.globals.topic );
				ugc.startCommenting();
			},	
			error: function(d) {		
				// If 404, there's no topic id, so go create a new one in the service!
				$.ajax({
					url: ugc.globals.apiUrl + 'topic/uuid/' + uuid,
					type: 'POST',
					dataType: 'json',
					data: {
						site: 'bcom',
						title: $('title').text(),
						topicType: 'article'
					},
					success: function(d) {
						// set topic id that service just created
						ugc.globals.topic = d.id;
						ugc.totalComments = d['comments'] || 0 ;
						ugc.article = ugc.comment( ugc.globals.topic );
						ugc.startCommenting();
					}
				});

			}
		});

	};
	
 	function tinyMCEInit() {
	$(function(){ // Set up tinyMCE 
		tinyMCE.baseURL = 'http://' + window.location.host + '/js/lib/tiny_mce';
		tinyMCE.init({
			mode : "specific_textareas",
			editor_selector : "richtext",
			theme: "advanced",
			skin: "comments",
			theme_advanced_buttons1: "",
			theme_advanced_buttons2: "",
			theme_advanced_buttons3: "",
			theme_advanced_path: false,
			theme_advanced_statusbar_location: "none"
		});
	});
}
	
	// start a new comments object for this article
	ugc.makeArticleComments( uuid );


	
})(this, jQuery);
