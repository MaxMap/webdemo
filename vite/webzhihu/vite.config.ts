import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import styleImport from 'vite-plugin-style-import'
import ViteComponents, { ElementPlusResolver } from 'vite-plugin-components'
// https://vitejs.dev/config/
export default defineConfig({
    server: {
        host: '0.0.0.0'
    },
    plugins: [vue(),
        //按需导入element-plus组件
        ViteComponents({
            customComponentResolvers: [ElementPlusResolver()],
        }),
        styleImport({
            libs: [
                // 按需加载vxe-table
                {
                    libraryName: "vxe-table",
                    esModule: true,
                    resolveComponent: name => `vxe-table/es/${name}`,
                    resolveStyle: name => `vxe-table/es/${name}/style.css`
                }
            ]
        })]
})
