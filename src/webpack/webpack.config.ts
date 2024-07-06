import path from "path"
import HtmlWebpackPlugin from "html-webpack-plugin"
import webpack from "webpack"
import type {Configuration as DevServerConfiguration} from "webpack-dev-server"

type mode = "production" | "development"

interface EnvVariables {
    mode: mode
    port: number
}

export default (env: EnvVariables) => {
    const isDev = env.mode === "development"

    const config: webpack.Configuration = {
        mode: env.mode ?? "development",
        entry: path.resolve(__dirname, "src", "index.tsx"),
        output: { //для определения папки, куда все создастся
            path: path.resolve(__dirname, "build"),
            filename: "[name].[contenthash].bundle.js",
            clean: true //удаление существующего перед сборкой
        },
        plugins: [
            //автоматически добавляет скрипт в html файл
            new HtmlWebpackPlugin({template: path.resolve(__dirname, "public", "index.html")}),
            //показывает процент готовности во время сборки
            new webpack.ProgressPlugin()
        ].filter(Boolean),
        module: {
            rules: [
                {
                    test: /\.tsx?$/, //регулярка файлов, которые будут обрабатываться
                    use: "ts-loader", //название лоадера
                    exclude: /node_modules/, //то, чот не надо обрабатывать
                }
            ]
        },
        resolve: {
            extensions: [".tsx", ".ts", ".js"] // нужно, чтобы при импортах не писать расширение
        },
        devtool: isDev && "inline-source-map", //карты исходного кода, чтобы отслеживать, где произошли ошибки
        devServer: isDev ? { //девсервак, чтобы каждый раз не билдить ручками
            port: env.port ?? 5000,
            open: true,
        }: undefined,
    }
    return config
}