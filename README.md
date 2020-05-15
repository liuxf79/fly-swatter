# swatter
## backend capture html with base64 response
1. 用于通过html+css渲染页面后的截图，相比直接后端通过坐标绘制的图，更加易于调试
2. 通过ejs 模板渲染后，使用html2canvas 截图，并使用puppeteer获取截图后canvas创建的base64图片，返回给前端。
3. 可通过 http://example:3000/ 查看html及截图后的效果，方便编辑
4. 通过 http://example:3000/api/capture 接口获取 base64的图片

### 项目安装插件(由于 puppeteer 需要安装chrome插件，建议使用cnpm)
npm i

### 项目运行(3000端口）
npm start

### 项目结构说明
1. routes/index.js 获取页面渲染数据
2. views/index.ejs 编辑要截图页面
3. routes/api.js 编辑获取结果格式
