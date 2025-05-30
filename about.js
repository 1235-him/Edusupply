function showValue(valueId) {
  document.getElementById('values-list').classList.add('hidden');
  document.getElementById('value-details').classList.remove('hidden');

  const panels = document.querySelectorAll('.value-panel');
  panels.forEach(panel => panel.classList.add('hidden'));

  document.getElementById(valueId).classList.remove('hidden');
}

function goBack() {
  document.getElementById('values-list').classList.remove('hidden');
  document.getElementById('value-details').classList.add('hidden');

  const panels = document.querySelectorAll('.value-panel');
  panels.forEach(panel => panel.classList.add('hidden'));
}