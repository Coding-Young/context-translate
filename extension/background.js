var translate = {}
translate.google = function(q) {
		var tar = encodeURI('https://translate.google.com/?sl=auto&tl=ko&text='+q+'&op=translate');
		window.open(tar, '_blank', 'whale-sidebar');
};

translate.papago = function(q) {
		var tar = encodeURI('https://papago.naver.com/?sk=auto&tk=ko&st='+q);
		window.open(tar, '_blank', 'whale-sidebar');
};

translate.kakaoi = function(q) {
		var tar = encodeURI('https://search.daum.net/search?q='+q+' 한국어로');
		var win = window.open(tar, '_blank', 'whale-sidebar');

};

translate.bing = function(q) {
		var tar = encodeURI('https://www.bing.com/translator?from=auto&to=ko&text='+q);
		window.open(tar, '_blank', 'whale-sidebar');
};


chrome.contextMenus.create({
    title: `우클릭 번역`,
    contexts: [`selection`],
    onclick: run
});

function run(info){
whale.storage.sync.get({
    Ser: 'papago'
  }, function(items) {
   translate[items.Ser](info.selectionText);
});
}