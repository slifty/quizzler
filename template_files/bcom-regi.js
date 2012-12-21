var bcom_cookie = {
  
  get: function(the_cookie){ // Returns value of the_cookie
    
    var cookie_array = document.cookie.split(';'),
    this_cookie, cookie_name, cookie_value, i;
    for(i=0; i<cookie_array.length; i++){
      this_cookie   = cookie_array[i].split('=');
      cookie_name   = $.trim(this_cookie[0]);
      cookie_value  = $.trim(this_cookie[1]);
      if( cookie_name == the_cookie ){
        return unescape(cookie_value);
      }
    }
    return false; 
    
  },
  
  set: function(cookie_name, value, expiration_days, escape_this){ // Sets a cookie
    
    var expiry_date = new Date();
    expiry_date.setDate(expiry_date.getDate() + expiration_days);
    //var the_cookie = escape(value) + ((expiration_days == null) ? '' : '; expires='+expiry_date.toUTCString()) + '; path=/';
    // Not escaping cookie value lets login redirect work as intended
    var the_cookie = value + ((expiration_days == null) ? '' : '; expires='+expiry_date.toUTCString()) + '; path=/';
    document.cookie = cookie_name + '=' + the_cookie + ';domain=.boston.com';
    
  }
  
}


var bcom_regi = {
  
  max_count: 5, // Max pathCnt cookie value before redirect
  
  valid_ref: [ // Array of valid referral URLs
    'google.com',
    'search.yahoo.com'
  ],
  
  page_status: function(){ // Determines whether page is behind the regi wall
  
    // We check against a meta tag so we don't have to wait for document.ready()
    var regi_status = $("#regi-wall-meta").attr("content");
    regi_status = regi_status == 'non-exempt' ? true : false;
    return regi_status;
    
  },
  
  check_ref: function(){ // Checks referrer URL against valid referrers

    var ref_domain  = document.referrer.split('/')[2],
    valid_ref   = bcom_regi.valid_ref, i;
    
    for(i=0; i<valid_ref.length; i++){
      
      if( ref_domain == valid_ref ){
        return true;
      }
      
    }
    return false
    
  },
  
  check_login: function(){
    
    // Check for pathAuth cookie - if one exists, do nothing
    if( !bcom_cookie.get('pathAuth') ){
      // Store value of pathCnt cookie
      var path_count = bcom_cookie.get('pathCnt');
      path_count = path_count == false ? 0 : parseInt(path_count);
      // Check referer against exceptions
      if( !bcom_regi.check_ref() ){
        // Check to see if user has hit the max count
        if( path_count <= bcom_regi.max_count ){
          // Increment pathCnt cookie by 1, then do nothing
          path_count++;
          bcom_cookie.set('pathCnt', path_count);
        }else{
          // User has hit the max count, redirect to login page
          document.location = 'https://www.boston.com/Boston/eom/SysConfig/WebPortal/Boston/Framework/regi/regi-login-register.jsp';
        }
      } else {
        // User is coming from a referer, increase pathCnt cookie by 1
        path_count++;
        bcom_cookie.set('pathCnt', path_count);
      }
    }
    
  }

};

// No document.ready() because we want this to run ASAP
// Script only relies on one meta tag, which will always be loaded before the script

// Set the pathUrl cookie
bcom_cookie.set('pathUrl', document.location.href);

// Check wall status of the page
if( bcom_regi.page_status() ){
  // Check user status
  bcom_regi.check_login();
}