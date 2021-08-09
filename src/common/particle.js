export function particle(img, canvas) {
    var canvas = document.getElementById(canvas),//$("#canvas"),
        ctx = canvas.getContext('2d'),
        winWidth = document.documentElement.clientWidth,
        winHeight = document.documentElement.clientHeight;

    canvas.width = winWidth;
    canvas.height = winHeight;

    var img = new Image();
    img.src = img;

    if (img.complete) {
        init()
    } else {
        img.onload = function () {
            init()
        }
    }

    var dotList = [];
    function init() {
        var imgW = img.width,
            imgH = img.height,
            sx = winWidth / 2 - imgW / 2,
            sy = winHeight / 2 - imgH / 2;


        ctx.drawImage(img, sx, sy);
        var imgData = ctx.getImageData(sx, sy, imgW, imgH);
        console.log(imgData);

        for (var x = 0; x < imgData.width; x += 6) {
            for (var y = 0; y < imgData.height; y += 6) {
                var i = (y * imgData.width + x) * 4;
                if (imgData.data[i + 3] > 128 && imgData.data[i] < 100) {
                    var dot = new Dot(x, y, 2);
                    dotList.push(dot);
                }
            }
        }

        draw();

    }




    function Dot(centerX, centerY, radius) {
        this.x = centerX;
        this.y = centerY;
        this.radius = radius;
    }



    function draw() {
        var imgW = img.width,
            imgH = img.height,
            sx = winWidth / 2 - imgW / 2,
            sy = winHeight / 2 - imgH / 2;

        ctx.clearRect(0, 0, winWidth, winHeight);

        ctx.fillStyle = "#000";

        for (var i = 0; i < dotList.length; i += 1) {
            curDot = dotList[i];
            ctx.save();
            ctx.beginPath();
            ctx.arc(sx + curDot.x, sy + curDot.y, curDot.radius, 0, 2 * Math.PI);
            ctx.fill();
            ctx.restore();
        }
    }
}