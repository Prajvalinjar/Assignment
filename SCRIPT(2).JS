function collectBio() {
    
    let name = prompt("Please enter your name:");
    if (!name) {
        alert("Name cannot be empty!");
        return;
    }

    let profession = prompt("Please enter your profession:");
    if (!profession) {
        alert("Profession cannot be empty!");
        return;
    }
    let skills = prompt("Please enter your skils:");
    if (!skills) {
        alert("Skills cannot be empty!");
        return;
    }
    let profilePicUrl = prompt("Please enter the URL of your profile picture:");
    if (!profilePicUrl) {
        alert("Profile picture URL cannot be empty!");
        return;
    }

  
    alert(`Name: ${name}\nProfession: ${profession}\nProfile Picture URL: ${profilePicUrl}`);
    console.log(`Name: ${name}`);
    console.log(`Profession: ${profession}`);
    console.log(`Profile Picture URL: ${profilePicUrl}`);

    document.getElementById("name").innerText = `Name: ${name}`;
    document.getElementById("profession").innerText = `Profession: ${profession}`;
    document.getElementById("Skills").innerText = `Skills: ${skills}`;
    const profilePic = document.getElementById("profile-pic");
    profilePic.src = profilePicUrl;
    profilePic.style.display = "block"; 
}

collectBio();


document.getElementById("update-bio").addEventListener("click", collectBio);