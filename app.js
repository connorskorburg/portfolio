document.getElementById('hamburger').addEventListener('click', () => {
  document.getElementById('mobile-nav').style.display = 'block';
});

document.getElementById('close').addEventListener('click', () => {
  document.getElementById('mobile-nav').style.display = 'none';
})

const btns = document.querySelectorAll('#mobile-nav section a');

btns.forEach(btn => {
  btn.addEventListener('click', () => {
    document.getElementById('mobile-nav').style.display = 'none';
  })
});
