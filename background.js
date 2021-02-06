function translate(info) {
	var tar = encodeURI('https://translate.google.com/?sl=auto&tl=ko&text='+info.selectionText+'&op=translate');
	window.open(tar, '_blank', 'whale-sidebar');
}

chrome.contextMenus.create({
    title: `우클릭 번역`,
    contexts: [`selection`],
    onclick: translate
});