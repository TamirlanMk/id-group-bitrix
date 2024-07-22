import {resolve} from 'path'
import {defineConfig} from 'vite'

const fontExtensions = ['ttf','woff', 'woff2'];
const assetsExtensions = ['jpeg','png', 'jpg', 'svg'];

export default defineConfig({
    root: './src',
    base: './',
    css: {
        devSourcemap: true,
    },
    build: {
        base: './',
        emptyOutDir: false,
        outDir: '../build/',
        rollupOptions: {
            // lib: {
            //     // Could also be a dictionary or array of multiple entry points
            //     entry: resolve(__dirname, 'lib/main.js'),
            //     name: 'Swiper',
            //     // the proper extensions will be added
            //     fileName: 'my-lib',
            // },
            input: {
                main: resolve(__dirname, 'src/index.html')
                // For add new page, change path and page name
                // pages: resolve(__dirname, 'src/pages/index.html'),
            },
            output: {
                entryFileNames: `js/[name].js`,
                assetFileNames: chunk => {
                    const splitedChunk = chunk.name.split('.')
                    const chunkExtension = splitedChunk[splitedChunk.length - 1]

                    if (fontExtensions.includes(chunkExtension)) {
                        return 'fonts/[name].[ext]'
                    }

                    if (assetsExtensions.includes(chunkExtension)) {
                        return 'assets/[name].[ext]'
                    }

                    return 'css/[name].[ext]'
                },
            }
        }
    },
});
