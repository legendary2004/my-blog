$(".progress .progress-bar").each(function () {
    $(this).animate(
      {
        width: $(this).attr("aria-valuenow") + "%",
      },
      2000
    );
    $(this).text($(this).attr("aria-valuenow") + "%");
  });

  (function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(botton.dataset.id).classList.add("active");
        })
    });
})();