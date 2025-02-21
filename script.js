function downloadFile() {
    let url = document.getElementById("scribdUrl").value.trim();
    let status = document.getElementById("status");

    // Kiểm tra xem URL có đúng định dạng hay không
    let match = url.match(/thuvien\.seadrop\.info\/#explorer&sidf=([^\/]+)/);

    if (!match || !match[1]) {
        status.style.color = "red";
        status.innerText = "Invalid URL! Please enter a valid link.";
        return;
    }

    let xxxx = match[1]; // Trích xuất giá trị XXXX từ URL
    let newUrl = `https://thuvien.seadrop.info/?explorer/index/fileOut&path={source:${xxxx}}/`;

    status.style.color = "green";
    status.innerText = "Redirecting...";

    // Chuyển hướng đến URL mới
    setTimeout(() => {
        window.location.href = newUrl;
    }, 1000);
}
