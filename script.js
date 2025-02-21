document.getElementById("downloadBtn").addEventListener("click", function () {
    let urls = document.getElementById("scribdUrl").value.trim().split(/\s+/); // Tách URL bằng dấu xuống dòng hoặc dấu cách
    let status = document.getElementById("status");

    if (urls.length === 0 || urls[0] === "") {
        status.style.color = "red";
        status.innerText = "Invalid URL! Please enter at least one valid link.";
        return;
    }

    let validUrls = [];

    urls.forEach(url => {
        let match = url.match(/thuvien\.seadrop\.info\/#explorer&sidf=(\d+)/);
        if (match) {
            let fileId = match[1]; // Lấy giá trị XXXX
            let newUrl = `https://thuvien.seadrop.info/?explorer/index/fileOut&path={source:${fileId}}/`;
            validUrls.push(newUrl);
        }
    });

    if (validUrls.length === 0) {
        status.style.color = "red";
        status.innerText = "No valid URLs found!";
        return;
    }

    status.style.color = "green";
    status.innerText = `Redirecting ${validUrls.length} files...`;

    // Mở từng file trong tab mới
    setTimeout(() => {
        validUrls.forEach(link => {
            window.open(link, "_blank");
        });
    }, 1000);
});

// Toggle hướng dẫn sử dụng
document.getElementById("toggleGuide").addEventListener("click", function () {
    let guide = document.getElementById("guideContent");
    guide.style.display = guide.style.display === "none" ? "block" : "none";
});
