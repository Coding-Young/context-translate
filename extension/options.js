function save_options() {
  var ser  = document.getElementById('service').value;

  whale.storage.sync.set({
    Ser: ser}, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = '설정을 저장했습니다.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}

function restore_options() {
  whale.storage.sync.get({
    Ser: 'papago'
  }, function(items) {
    document.getElementById('service').value = items.Ser;
  });
}

function warn() {
	var txt = document.getElementById('warn')
	if(document.getElementById('service').value=='kakaoi'){
		txt.textContent = '주의: 카카오 i 번역의 경우 URL 쿼리의 양식을 확인할 수 없어 다음 검색을 이용하는 식으로 구현했습니다. 이에 따라 이용에 조금 불편함이 있을 수 있습니다. 개선 방법이 있는 경우 https://github.com/Coding-Young/context-translate/issues/new로 문의하세요.';
	}
	else{
		txt.textContent='';
	}
}

document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
    save_options);
document.getElementById('service').addEventListener('change',warn);

