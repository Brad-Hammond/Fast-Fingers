// Event listener for how to play button
document.getElementById("howToPlayButton").addEventListener("click", () => {
  // Call function
  displayHowToPlayModal();
});
// Function
function displayHowToPlayModal() {
  // Create a modal element
  const modal = document.createElement("div");
  modal.classList.add("modal");

  // html content
  const howToPlayModalContent = `
        <div class="modal-content">
            <h2>How to Play</h2>
            <p>Welcome to Fast Fingers!</p>
            <p>To play, simply press the play button and start typing in the text field.</p>
            <p>Once you start typing, your timer will start.</p>
            <p>Your goal is to type as fast and accuratley as possible.</p>
            <p>Once you've finished typing, your scores will be displayed.</p>
            <p>Once finished, you can press the try again button to replay with a different quote</p>
            <p>Good luck and have fun!</p>
        </div>
    `;

  // Set the content of the modal
  modal.innerHTML = howToPlayModalContent;

  // Append the modal to the document body
  document.body.appendChild(modal);

  // Add an event listener to close the modal when clicked outside of it
  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.remove();
    }
  });
}
