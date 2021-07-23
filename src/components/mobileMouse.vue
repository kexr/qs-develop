<template>
    <article 
    class="rk-mobile-mouse"  
    @mousedown="down"
    @mousemove="move"
    @mouseup="end"
    ref="fu"
    >
		<slot></slot>
    </article>
</template>

<script>
export default {
    data(){
        return {
            flags: false,//控制使用
			position: {
				x: 0,
				y: 0
			},
			nx: '',
			ny: '',
			dx: '',
			dy: '',
			xPum: '',
			yPum: ''
        }
    },
    methods: {
        down(event) {
			this.flags = true;
            var touch;
            // 获取鼠标指针
			if (event.touches) {
				touch = event.touches[0];
			} else {
				touch = event;
            }
            // 获取鼠标指针对于浏览器页面的坐标
			this.position.x = touch.clientX;
            this.position.y = touch.clientY;
            // 获取目标元素边界的距离
			this.dx = this.$refs.fu.offsetLeft;
			this.dy = this.$refs.fu.offsetTop;
		},
		move(event) {
			if (this.flags) {
                var touch;
                // 获取鼠标指针
				if (event.touches) {
					touch = event.touches[0];
				} else {
					touch = event;
                }
                // 移动坐标 =  当前坐标 - 开始时坐标
				this.nx = touch.clientX - this.position.x;
                this.ny = touch.clientY - this.position.y;
                // 元素结束坐标 = 移动坐标 + 元素初始坐标
				this.xPum = this.dx + this.nx;
                this.yPum = this.dy + this.ny;
                // 赋值
				this.$refs.fu.style.left = this.xPum + 'px';
				this.$refs.fu.style.top = this.yPum + 'px';
				// // }
				//阻止页面的滑动默认事件
				document.addEventListener(
					'touchmove',
					function() {
						event.preventDefault();
					},
					false
				);
			}
		},
		//鼠标释放时候的函数
		end() {
			this.flags = false;
		}
    }
}
</script>

<style scoped>
    .rk-mobile-mouse {
        top: 50px;
        width: 100px;
        height: 100px;
        background-color: white;
        position: fixed;
    }
</style>