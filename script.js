let detailsContainer = document.querySelector(".details");
let resultContainer = document.querySelector(".reslut");
let avatarImageGet = document.querySelector("#avatarbtn");
let fullNameGet = document.querySelector("#fullname");
let emailGet = document.querySelector("#email");
let githubUserGet = document.querySelector("#github-username");
// Spans
let usernameShown = document.querySelector("#usernameshown");
let emailShown = document.querySelector("#emailshown");
// Ticket
let avatarImage = document.querySelector("#avatar");
let nameofuser = document.querySelector("#nameofuser");
let nameofusergithub = document.querySelector("#usernamegithub");
// Counter
let id = document.querySelector("#id");
let generateBtn = document.querySelector("#generate");
//iconupload
let uploadIcon = document.querySelector("#icon-upload");
// Replace image when user selects a file
avatarImageGet.addEventListener("change", (e) => {
    uploadIcon.src = URL.createObjectURL(e.target.files[0]);
});
// Replace image when user selects a file
avatarImageGet.addEventListener("change", (e) => {
    avatarImage.src = URL.createObjectURL(e.target.files[0]);
});
function generateTicket() {
    // Check if all required fields are filled
    if (
        avatarImageGet.value == "" ||
        fullNameGet.value == "" ||
        emailGet.value == "" ||
        githubUserGet.value == ""
    ) {
        Swal.fire("Please Write Details!");
    } else {
        // Retrieve the counter from LocalStorage or start from 0
        let counter = localStorage.getItem("counter") || 0;
        counter = parseInt(counter) + 1; // Increment the counter
        localStorage.setItem("counter", counter); // Save the updated counter
        id.innerHTML = "#" + counter; // Update the displayed ID

        // Update other ticket details
        usernameShown.innerHTML = fullNameGet.value;
        emailShown.innerHTML = emailGet.value;
        nameofuser.innerHTML = usernameShown.innerHTML;
        if (!githubUserGet.value.startsWith("@")) {
            nameofusergithub.innerHTML = "@" + githubUserGet.value;
        } else {
            nameofusergithub.innerHTML = githubUserGet.value;
        }
        // Switch views
        detailsContainer.style.display = "none";
        resultContainer.style.display = "flex";
    }
}
