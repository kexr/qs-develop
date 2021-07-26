import RkmodelTest from './modelTest'; // 抽屉弹框
import RkmobileMouse from './mobileMouse.vue' // 鼠标拖动组件
import RkmobileDrag from './mobileDrag.vue' // 拖动组件
import RkFooter from './footer.vue'
import RkHeader from './header.vue'
import RKconfigBorder from './configBorder.vue'

const components = {
    RkmodelTest,
    RkHeader,
    RkFooter,
    RkmobileMouse,
    RkmobileDrag,
    RKconfigBorder
}

export default {
    install: (vue) => {
        for(let key in components){
            vue.component(key, components[key]);
        }
    }
}

