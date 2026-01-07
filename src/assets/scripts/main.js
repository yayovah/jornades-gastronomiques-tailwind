/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';

/**
 * Write any other JavaScript below
 */

+( function() {
  const university = "UOC";
  console.log(`Hello, ${university}!`);
} )();

function clickNavListener(){
  const navBtn = document.getElementById("nav_btn");
  const closeNavBtn = document.getElementById("close_nav_btn");
  navBtn.addEventListener('click', toggleNav);
  closeNavBtn.addEventListener('click', toggleNav);
}

function toggleNav(){
  const navegador = document.getElementById("navegador");
  navegador.classList.toggle('hidden');
}

document.addEventListener('DOMContentLoaded', () => {
    clickNavListener();
});