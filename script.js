document.getElementById("downloadBtn").addEventListener("click", function () {
    let urlInput = document.getElementById("scribdUrl");
    let url = urlInput.value.trim();
    let status = document.getElementById("status");

    // Kiểm tra URL hợp lệ
    let match = url.match(/thuvien\.seadrop\.info\/#explorer&sidf=([^\/]+)/);

    if (!match || !match[1]) {
        status.style.color = "red";
        status.innerText = "❌ Invalid URL! Please enter a valid link.";
        return;
    }

    let xxxx = match[1]; // Lấy giá trị XXXX
    let newUrl = `https://thuvien.seadrop.info/?explorer/index/fileOut&path={source:${xxxx}}/`;

    status.style.color = "green";
    status.innerText = "✅ Redirecting...";

    // Xóa tooltip mặc định
    urlInput.blur(); 

    // Chuyển hướng sau 1 giây
    setTimeout(() => {
        window.location.href = newUrl;
    }, 1000);
});

// Toggle hướng dẫn sử dụng (hiệu ứng mượt mà)
document.getElementById("toggleGuide").addEventListener("click", function () {
    let guide = document.getElementById("guideContent");
    
    if (guide.style.display === "none" || guide.style.display === "") {
        guide.style.display = "block";
        guide.style.opacity = "0";
        setTimeout(() => { guide.style.opacity = "1"; }, 100);
    } else {
        guide.style.opacity = "0";
        setTimeout(() => { guide.style.display = "none"; }, 300);
    }
});
