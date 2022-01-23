//粒子系统基类
export function Particale({ warp, imgsUrl, radius }) {
    this.warp = warp;		//画布
    this.ctx = warp.getContext('2d');
    this.imgsUrl = imgsUrl;	//图片地址数组
    this.imgsObj = [];		//图片对象数组
    this.radius = radius;	//粒子半径
    this.index = 0;			//当前图片下标
    this.initz = 300;
    this.dots = [];
    this.init();
}

//添加原型属性
Particale.prototype = {
    constructor: Particale,
    init: function () {
        //画布居中
        //限制小球半径
        if (this.warp.width > 500 || this.warp.height > 300)
            this.radius >= 4 ? this.radius = this.radius : this.radius = 4;
        else
            this.radius >= 2 ? this.radius = this.radius : this.radius = 2;

        let promiseArr = this.imgsUrl.map(imgUrl => {
            return new Promise((resolve, reject) => {
                let imgObj = new Image();
                imgObj.src = require('@/assets/img/head/六花.jpg');
                imgObj.onload = () => {
                    this.imgsObj.push(imgObj);
                    console.log(this.imgsObj)
                    resolve();
                };
                
            });
        });
        //图片全部加载完毕开始绘制
        Promise.all(promiseArr).then(() => {
            this.picLoop();
        });
    },
    picLoop: function () {
        this.dots = [];
        this.drawPic();			//绘制当前图片
        this.toParticle();		//得到像素点
        this.combineAnimate();	//合成图像
        this.index === this.imgsUrl.length - 1 ? this.index = 0 : this.index++;  //下标移动到下一张图片
    },
    drawPic: function () {
        //清除画布
        this.ctx.clearRect(0, 0, this.warp.width, this.warp.height);
        let imgObj = this.imgsObj[this.index];

        //限制图片大小
        imgObj.height = this.warp.height;
        imgObj.width = this.warp.width;

        //绘制图片到canvas
        this.ctx.drawImage(imgObj, this.warp.width / 2 - imgObj.width / 2, this.warp.height / 2 - imgObj.height / 2, imgObj.width, imgObj.height);

    },
    toParticle: function () {
        //得到像素
        let imageData = this.ctx.getImageData(0, 0, this.warp.width, this.warp.height);
        let data = imageData.data;

        for (let x = 0; x < imageData.width; x += this.radius * 2) {
            for (let y = 0; y < imageData.height; y += this.radius * 2) {
                let i = (x + y * this.warp.width) * 4;
                if (data[i + 3] !== 0 && data[i] !== 255 && data[i + 1] !== 255 && data[i + 2] !== 255) {
                    let dot = {
                        x: x,												//图片x轴坐标
                        y: y,												//	  y轴坐标
                        z: 0,												//	  z轴坐标
                        r: data[i],											//	  rgba
                        g: data[i + 1],										//	  rgba
                        b: data[i + 2],										//	  rgba
                        a: 1,												//	  rgba
                        ix: Math.random() * this.warp.width, 				//初始化x轴坐标
                        iy: Math.random() * this.warp.height, 				//		y轴坐标
                        iz: Math.random() * this.initz * 2 - this.initz, 	//		z轴坐标
                        ir: 255,											//		rgba
                        ig: 255,											//		rgba
                        ib: 255,											//		rgba
                        ia: 0,												//		rgba
                        tx: Math.random() * this.warp.width, 				//目标x轴坐标
                        ty: Math.random() * this.warp.height, 				//	  y轴坐标
                        tz: Math.random() * this.initz * 2 - this.initz, 	//	  z轴坐标
                        tr: 255,											//	  rgba
                        tg: 255,											//	  rgba
                        tb: 255,											//	  rgba
                        ta: 0,												//	  rgba
                    };
                    this.dots.push(dot);
                }
            }
        }
    },
    combineAnimate: function () {
        let combined = false;
        this.ctx.clearRect(0, 0, this.warp.width, this.warp.height);
        this.dots.map(dot => {
            if (Math.abs(dot.ix - dot.x) < 0.1 && Math.abs(dot.iy - dot.y) < 0.1 && Math.abs(dot.iz - dot.z) < 0.1) {
                dot.ix = dot.x;
                dot.iy = dot.y;
                dot.iz = dot.z;
                dot.ir = dot.r;
                dot.ig = dot.g;
                dot.ib = dot.b;
                dot.ia = dot.a;
                combined = true;
            } else {
                dot.ix += (dot.x - dot.ix) * 0.07;
                dot.iy += (dot.y - dot.iy) * 0.07;
                dot.iz += (dot.z - dot.iz) * 0.07;
                dot.ir += (dot.r - dot.ir) * 0.3;
                dot.ig += (dot.g - dot.ig) * 0.3;
                dot.ib += (dot.b - dot.ib) * 0.3;
                dot.ia += (dot.a - dot.ia) * 0.1;
                combined = false;
            }

            return this.drowDot(dot);
        });


        if (!combined) {
            requestAnimationFrame(() => {
                return this.combineAnimate();
            });
        } else {
            setTimeout(() => {
                return this.separateAnimate();
            }, 1500);
        }
    },
    separateAnimate: function () {
        let separated = false;
        this.ctx.clearRect(0, 0, this.warp.width, this.warp.height);
        this.dots.map(dot => {
            if (Math.abs(dot.ix - dot.tx) < 0.1 && Math.abs(dot.iy - dot.ty) < 0.1 && Math.abs(dot.iz - dot.tz) < 0.1) {
                dot.ix = dot.tx;
                dot.iy = dot.ty;
                dot.iz = dot.tz;
                dot.ir = dot.tr;
                dot.ig = dot.tg;
                dot.ib = dot.tb;
                dot.ia = dot.ta;
                separated = true;
            } else {
                dot.ix += (dot.tx - dot.ix) * 0.07;
                dot.iy += (dot.ty - dot.iy) * 0.07;
                dot.iz += (dot.tz - dot.iz) * 0.07;
                dot.ir += (dot.tr - dot.ir) * 0.02;
                dot.ig += (dot.tg - dot.ig) * 0.02;
                dot.ib += (dot.tb - dot.ib) * 0.02;
                dot.ia += (dot.ta - dot.ia) * 0.03;
                separated = false;
            }

            return this.drowDot(dot);
        });


        if (!separated) {
            requestAnimationFrame(() => {
                return this.separateAnimate();
            });
        } else {
            setTimeout(() => {
                return this.picLoop();		//间接递归，使用尾递归优化
            }, 100);
        }
    },
    drowDot: function (dot) {
        let scale = this.initz / (this.initz + dot.iz);
        this.ctx.save();
        this.ctx.beginPath();
        this.ctx.fillStyle = `rgba(${Math.floor(dot.ir)}, ${Math.floor(dot.ig)}, ${Math.floor(dot.ib)}, ${dot.ia})`;
        this.ctx.arc(this.warp.width / 2 + (dot.ix - this.warp.width / 2) * scale, this.warp.height / 2 + (dot.iy - this.warp.height / 2) * scale, this.radius * scale, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.closePath();
        this.ctx.restore();
    },
}