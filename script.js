function downloadFile() {
    let url = document.getElementById("scribdUrl").value;
    let status = document.getElementById("status");

    if (!url.includes("thuvien.seadrop.info/#explorer&sidf")) {
        status.style.color = "red";
        status.innerText = "Invalid URL! Please enter a valid link.";
        return;
    }

    status.style.color = "green";
    status.innerText = "Processing your download...";

    // Fake download response (thực tế cần backend để xử lý)
    setTimeout(() => {
        status.innerText = "Download ready!";
    }, 2000);
}
