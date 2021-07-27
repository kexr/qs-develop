import RkTitleOne from './titleOne.vue'
import RkFlexRow from './flexRow.vue'
import RkFlexCol from './flexCol.vue'
import RkTextp from './text-p.vue'

const components = {
    RkTitleOne,
    RkFlexRow,
    RkFlexCol,
    RkTextp
}

export default {
    install: (vue) => {
        for(let key in components){
            vue.component(key, components[key]);
        }
    }
}