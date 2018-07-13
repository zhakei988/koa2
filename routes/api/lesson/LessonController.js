class LessonController {
  // 用户注册
  static async classauth(ctx) {
      // await ……
      var url = 'https://apilesson.hexun.com/api/classauth/199773'
      var arr={
        result:1,
        data:'null'
      }
      if(ctx.params=='')
      {
        arr.errorMessage='参数验证错误！'
      }else
      {
        arr.data={
          nickName: "%E4%B8%80%E4%BA%8C%E4%B8%89%E5%9B%9B%E4%BA%94%E5%85%AD%E4%B8%83%E5%85%AB%E4%B9%9Dk",
        }
      }
      ctx.body=arr
  }
}
module.exports= LessonController;