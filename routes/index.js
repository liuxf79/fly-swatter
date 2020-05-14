const router = require("koa-router")();
var http = require("../utils/http");

router.get("/", async (ctx, next) => {

  //get query params 
  // let { params } = ctx.query;

  //get data from api
  // let result = await http.get(`https://exmple.com/api?params=${params}`);

  let dataSet = [
    {
      title: "第一行",
      text: '第一行内容',
    },
    {
      title: "第二行",
      text: "第二行内容",
    },
  ];
  //renderring page with remote data
  await ctx.render("index", {
    title: "demo",
    detail: dataSet,
  });
});

module.exports = router;
