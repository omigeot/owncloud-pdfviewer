

var pdfBoxShown=false;
$(document).ready(function() {
	images={};//image cache
	var overlay=$('<div id="pdfbox_overlay"/>');
	$( 'body' ).append(overlay);
	var container=$('<div id="pdfbox"/>');
	$( 'body' ).append(container);
	overlay.click(hidePDFbox);
	if(typeof FileActions!=='undefined'){
		FileActions.register('application/pdf','View','',function(filename){
			viewPDF($('#dir').val(),filename,1);
		});
		FileActions.setDefault('application/pdf','View');
	}
});

function viewPDF(dir,file,npage){
	'use strict';
	var location=OC.filePath('files','ajax','download.php')+'?files='+file+'&dir='+dir;
	open('https://ssl.fait.ch/owncloud/apps/files_pdfviewer/js/pdfjs/web/viewer.html?file='+window.btoa(location));
}

function pdfnext(dir,file,npage){
	alert('next!');
	setTimeOut(function(){
		viewPDF(dir,file,npage+1);
	},100);
}
function hidePDFbox(event){
	if(pdfBoxShown){
		event.stopPropagation();
		$('#pdfbox_overlay').hide();
		$('#pdfbox').hide();
		pdfBoxShown=false;
	}
}
