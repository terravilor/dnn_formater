var Formater = {
	width : '1270px',
	elements : ['.cpanel_left', '.top_space', '.logo_top', '.menu_left', '.bread_left', '.center_bg', '.tag_left', '.linkscontainer_left', '.bot_left', '.bot_pad'],
	init : function() {
		var _width = Formater.width;
		var _els = Formater.elements;

		for (var i = 0; i < _els.length; i++) {
			var item = $(_els[i]);
			item.css('width', _width);
		}
	}
};

Formater.init();