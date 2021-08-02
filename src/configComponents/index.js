import RkTitleOne from './titleOne.vue'
import RkFlexRow from './flexRow.vue'
import RkFlexCol from './flexCol.vue'
import RkTextp from './text-p.vue'
import RkImage from './image.vue'

const components = {
    RkTitleOne,
    RkFlexRow,
    RkFlexCol,
    RkTextp,
    RkImage
}

export default {
    install: (vue) => {
        for(let key in components){
            vue.component(key, components[key]);
        }
    }
}