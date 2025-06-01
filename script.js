function addRecommendation() {
  const message = document.getElementById("new_recommendation").value.trim();
  const name = document.getElementById("recommender_name").value.trim();

  if (message === "") {
    alert("Please enter a recommendation message!");
    return;
  }

  const container = document.getElementById("all_recommendations");
  const newDiv = document.createElement("div");
  newDiv.className = "recommendation";
  newDiv.innerHTML = `<span>&#8220;</span> ${message} <br><strong>${name}</strong> <span>&#8221;</span>`;

  container.appendChild(newDiv);
  document.getElementById("new_recommendation").value = "";
  document.getElementById("recommender_name").value = "";

  showPopup(true);
}

function showPopup(value) {
  const popup = document.getElementById("popup");
  popup.style.display = value ? "block" : "none";
}
