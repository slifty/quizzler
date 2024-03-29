shareifyHandlers = {
    twitter: {
        /* We have to hash some global handlers so that
         * we don't constantly redefine the handler in the 
         * $.each loop in the shareify function.
         */
        handlers: {},
        set: function(k, f) {
            var l = k.length;
            if(k.charAt(l-1) != '/' && k.indexOf('?') == -1){k=k+'/';}
            if(k.indexOf('http://') !== 0) { k='http://'+k; }
            shareifyHandlers.twitter.handlers[k] = f;
        },
        get: function(k) {
            return shareifyHandlers.twitter.handlers[k];
        },
        rcv: function(data) {
            shareifyHandlers.twitter.get(data.url)(data);
        }
    }
};
 
(function( $ ){

    $.fn.shareify = function(options) {
        var opts = options || {};
        
        var permalink_wrap = "<a class=\"shareify_link\" title=\"Permalink\" href=\"{share_url}\" target=\"_blank\"></a>";
        var permalink_html = [
            "<div class=\"shareify_div\">",
                "<img src=\"", opts.image_dir, "permalink.png\"/>",
            "</div>",
            "<div class=\"shareify_count\">",
                "Link",
            "</div>",
        ].join("");

        var twitter_wrap =  "<a title=\"Share on Twitter\" href=\"http://twitter.com/share?url={share_url}&text={message}&via={twitter_nick}\" target=\"_blank\" onclick=\"window.open(this.href); return false\"></a>";
        var twitter_html = [
            "<div class=\"shareify_div\">",
                "<img style=\"width:23px; height:16px;\" src=\"", opts.image_dir, "twitter_bird.jpg\" />",
            "</div>",
        ].join("");

        var facebook_wrap = "<a title=\"Share on Facebook\" href=\"http://www.facebook.com/sharer.php?u={share_url}&src=sp\" target=\"_blank\" onclick=\"window.open(this.href, 'fbook', 'width=600,height=400,screenX='+Math.round(screen.width/2-300)+',screenY='+Math.round(screen.height/2-200)+',resizable=yes,scrollbars=yes,toolbar=no,location=no,menubar=no,status=no'); return false\"></a>";
        
            
        
        var facebook_html = [
            "<div class=\"shareify_div\">",
                "<img src=\"", "http://cache.boston.com/universal/site_graphics/share_fbshare.png\" />",
            "</div>",
        ].join("");

        var count_html = [
			"<div class=\"shareify_count\">",
				"<div class=\"shareify_count_number\">{share_count}</div>",
			"</div>"	
        ].join("");

        var count_up = function(e) {
            var eso = $(this);
            var count_div = $(".shareify_count_number", eso);
            if(!count_div.data("has_clicked")) {
                var count = count_div.html();
                if(count) {
                    count = parseInt(count, 10) + 1;
                }
                else {
                    count = 1;
                }
                count_div.html(count);
                count_div.data("has_clicked", true);
            }
        };

        var document_url = document.location.href;
        document_url = (document_url.indexOf("?") > 0) ? document_url.substring(0, document_url.indexOf("?")) : document_url;
        return this.each(function() {
            var $this = $(this);

            /* 
             * Tries to set the options from the div JSON. Will default to options {} passed in or null.
             */
            var twitter_nick = $this.attr("twitter_nick") || opts.twitter_nick || "";
            var share_type = $this.attr("share_type") || opts.share_type || null;
            var url = $this.attr("share_url") || opts.share_url || document_url || "";
            var message = $this.attr("message") || opts.message || "";
            if(!share_type) {
                return false;
            }

            switch(share_type){
                case 'permalink':
                    var html= permalink_html;
                    var wrap_html = permalink_wrap.replace("{share_url}", url);
                    $this.wrap(wrap_html);
                    $this.html(html);
                    break;
                case 'twitter':
                    var html = twitter_html;
                    var wrap_html = twitter_wrap.replace("{message}", encodeURIComponent(message));
                    wrap_html = wrap_html.replace("{share_url}", escape(url));
                    wrap_html = wrap_html.replace("{twitter_nick}", twitter_nick);
                    $this.wrap(wrap_html);
                    $this.html(html);


                    shareifyHandlers.twitter.set(url, function(data) {
                        var count = 0;
                        if(data) {
                            count = data.count || 0;
                        }
                        //var a = $($this).parent('a');
                        $this.append(count_html.replace("{share_count}", count));
                    });
                    $.ajax({
                        url: ["http://urls.api.twitter.com/1/urls/count.json?url=", url].join(""),
                        dataType: 'jsonp',
                        jsonpCallback: "shareifyHandlers.twitter.rcv"
                    });
                    $this.click(count_up);
                    break;
                case 'facebook':
                    url = escape(url);
                    var html = facebook_html;
                    var wrap_html = facebook_wrap.replace("{share_url}", url);
                    $this.wrap(wrap_html);
                    $this.html(html);
                    // Thankfully, Facebook doesn't cache the callback name,
                    // so we can let jQuery deal with handling the callbacks 
                    // for us.
                    $.getJSON(
                        ["http://api.facebook.com/restserver.php?method=links.getStats&urls=", url, "&format=json&callback=?"].join(""),
                        function(data) {
                            var count = 0;
                            if(data) {
                                count = data[0].total_count || 0;
                            }
                            //var a = $($this).parent('a');
                            if( !$this.find( ".shareify_count" ).length) {
                                $this.append(count_html.replace("{share_count}", count));
                            } 
                        }
                    );
                    $this.click(count_up);
                    break;
                default:
                    break;
            }
        });
    };
})( jQuery );
