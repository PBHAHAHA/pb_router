import { App } from "vue";
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

function setupElementPlus(app: App) {
    app.use(ElementPlus)
}

export default setupElementPlus