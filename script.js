// Image slider: projects with more than one image show one at a time.
// Click the left half of the image to go back, the right half to go forward.
document.querySelectorAll('.work-images').forEach(function (box) {
  var imgs = box.querySelectorAll('img');
  if (imgs.length < 2) return;

  box.classList.add('slider');
  var index = 0;
  var counter = document.createElement('p');
  counter.className = 'slider-counter';
  box.after(counter);

  function show(i) {
    index = (i + imgs.length) % imgs.length;
    imgs.forEach(function (img, n) { img.hidden = n !== index; });
    counter.textContent = (index + 1) + ' / ' + imgs.length;
  }

  box.addEventListener('click', function (e) {
    var rect = box.getBoundingClientRect();
    var x = e.clientX - rect.left;
    show(x < rect.width / 2 ? index - 1 : index + 1);
  });

  box.addEventListener('mousemove', function (e) {
    var rect = box.getBoundingClientRect();
    box.style.cursor = e.clientX - rect.left < rect.width / 2 ? 'w-resize' : 'e-resize';
  });

  show(0);
});
