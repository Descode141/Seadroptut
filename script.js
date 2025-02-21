document.getElementById("downloadBtn").addEventListener("click", function () {
    let urls = document.getElementById("scribdUrls").value.trim();
    let status = document.getElementById("status");

    if (!urls) {
        status.style.color = "red";
        status.innerText = "Please enter at least one URL!";
        return;
    }

    // Tách URL thành từng dòng, loại bỏ khoảng trắng thừa
    let urlList = urls.split("\n").map(url => url.trim()).filter(url => url !== "");

    let validUrls = [];

    urlList.forEach(url => {
        let match = url.match(/thuvien\.seadrop\.info\/\#explorer&sidf=([^\/]+)/);
        if (match && match[1]) {
            let xxxx = match[1]; // Lấy giá trị XXXX
            let newUrl = `https://thuvien.seadrop.info/?explorer/index/fileOut&path={source:${xxxx}}/`;
            validUrls.push(newUrl);
        }
    });

    if (validUrls.length === 0) {
        status.style.color = "red";
        status.innerText = "No valid URLs found!";
        return;
    }

    status.style.color = "green";
    status.innerText = "Processing downloads...";

    // Tự động mở từng link trong tab mới
    validUrls.forEach((fileUrl, index) => {
        setTimeout(() => {
            window.open(fileUrl, "_blank");
        }, index * 1000); // Mỗi file mở cách nhau 1 giây tránh bị chặn
    });
});

// Toggle hướng dẫn sử dụng
document.getElementById("toggleGuide").addEventListener("click", function () {
    let guide = document.getElementById("guideContent");
    guide.style.display = guide.style.display === "none" ? "block" : "none";
});
