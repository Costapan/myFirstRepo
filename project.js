console.log("Javascript Test");

function change() {
    const content = new XMLHttpRequest();
    content.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        let changedContent = content.responseText;
        document.getElementById("ajaxRequest").innerHTML = changedContent;
      }
    }
  };

content.open("GET", "https://api.github.com/users/Costapan/repos", true);
content.send();

  