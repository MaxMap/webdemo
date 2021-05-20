(function() {
    let dataobj = function(option) {
        this.el = document.getElementById(option.el);
        this.min = this.el.getElementsByTagName('div'); //获取子集
        this.colmun = option.colmun; //展示列数
        this.gap = option.gap; //列宽
        this.itemwidth = (this.el.offsetWidth - this.gap * (this.colmun - 1)) / this.colmun; //定义每个子集宽度
        this.heightArr = []; //获取第一层高度
        this.init(); //初始化
    }
    dataobj.prototype.init = function() {
        let item = null;
        for (let i = 0; i < this.min.length; i++) {
            item = this.min[i];
            item.style.width = this.itemwidth + 'px'; //赋予子集宽度
            if (i < this.colmun) { //下标0-4
                item.style.top = '0px';
                item.style.left = i * (this.itemwidth + this.gap) + 'px';
                this.heightArr.push(item.offsetHeight);
            } else {
                let minIdx = getminix(this.heightArr); //获取最小高度；
                item.style.left = this.min[minIdx].offsetLeft + 'px';
                item.style.top = this.heightArr[minIdx] + this.gap + 'px';

                this.heightArr[minIdx] += item.offsetHeight + this.gap;
            }
        }
    }


    function getminix(arr) {
        return arr.indexOf(Math.min.apply(null, arr));
    }

    window.dataobj = dataobj;
})();