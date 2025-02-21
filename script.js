document.getElementById("downloadBtn").addEventListener("click", function () {
    let url = document.getElementById("scribdUrl").value.trim();
    let status = document.getElementById("status");

    // Kiểm tra URL hợp lệ
    let match = url.match(/thuvien\.seadrop\.info\/#explorer&sidf=([^\/]+)/);

    if (!match || !match[1]) {
        status.style.color = "red";
        status.innerText = "Invalid URL! Please enter a valid link.";
        return;
    }

    let xxxx = match[1]; // Lấy giá trị XXXX
    let newUrl = `https://thuvien.seadrop.info/?explorer/index/fileOut&path={source:${xxxx}}/`;

    status.style.color = "green";
    status.innerText = "Redirecting...";

    // Chuyển hướng sau 1 giây
    setTimeout(() => {
        window.location.href = newUrl;
    }, 1000);
});

// Toggle hướng dẫn sử dụng
document.getElementById("toggleGuide").addEventListener("click", function () {
    let guide = document.getElementById("guideContent");
    guide.style.display = guide.style.display === "none" ? "block" : "none";
});
