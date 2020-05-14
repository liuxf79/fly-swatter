const router = require('koa-router')()
const puppeteer = require('puppeteer')

router.prefix('/api')

router.get('/capture', async (ctx, next)=> {
  let {params} = ctx.query
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(`http://localhost:3000?params=${params}`, {
    waitUntil: "networkidle2",
  });
  const image = await page.$eval("details", (ele) => {
    return ele.innerHTML;
  });

  await browser.close();
  ctx.body = {
    code:100,
    msg:'创建完成',
    data:{
      img:image
    }
  }
})


module.exports = router
