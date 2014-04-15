var _glc;
var glcp;
var glcspt;
var glcpath;
CloudFlare.define(
    'clickdesk', ['clickdesk/config'],
    function (config) {

	try{
        console.log(config);
		console.log(config.widget_id);
		
		_glc =_glc || []; _glc.push(config.widget_id);
		glcpath = (('https:' == document.location.protocol) ? 'https://my.clickdesk.com/clickdesk-ui/browser/' : 
			'http://my.clickdesk.com/clickdesk-ui/browser/');
		glcp = (('https:' == document.location.protocol) ? 'https://' : 'http://');
		glcspt = document.createElement('script'); glcspt.type = 'text/javascript'; 
			glcspt.async = true; glcspt.src = glcpath + 'livechat-new-unminified.js';
		var s = document.getElementsByTagName('script')[0];s.parentNode.insertBefore(glcspt, s);
	}
	catch(err){
	console.log(err);
	}
    }
);