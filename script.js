$(document).ready(function () {
  var envelope = $("#envelope");
  var btn_open = $("#open");
  var btn_reset = $("#reset");
  var music = document.getElementById("music");

  envelope.click(function () {
    open();
  });

  btn_open.click(function () {
    open();
  });

  btn_reset.click(function () {
    close();
  });

  function open() {
    envelope.addClass("open").removeClass("close");
    
    // пуска музиката
    music.play();
  }

  function close() {
    envelope.addClass("close").removeClass("open");
    
    // спира музиката и връща отначало
    music.pause();
    music.currentTime = 0;
  }
});