// Variable selector
// let howToPlayModal = document.getElementById("howToPlayButton");

// Add event listener to the "How to Play" button
document.getElementById("howToPlayButton").addEventListener("click", () => {
  // Display the how-to-play modal
  displayHowToPlayModal();
});

// Function to display the "How to Play" modal
function displayHowToPlayModal() {
  // Create a modal element
  const modal = document.createElement("div");
  modal.classList.add("modal");

  // Content for the "How to Play" modal
  const howToPlayModalContent = `
        <div class="modal-content">
            <h2>How to Play</h2>
            <p>Welcome to Fast Fingers!</p>
            <p>To play, simply type the given text in the input field.</p>
            <p>Your goal is to type as accurately and quickly as possible.</p>
            <p>Once you've finished typing, your scores will be displayed.</p>
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
