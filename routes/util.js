class util{
    static setCallBack(ctx,val){
        const url= ctx.url,nval='';
        if(url.indexOf('callback')>-1)
        {
            const reg = new RegExp('(^|&)callback=([^&]*)(&|$)', 'i');
            var r = url.match(reg);
            val = 'callback('+val+')';
        }
        nval=val;
        return nval
    }
    static err(txt) {
        var arr={
            result:0,
            errorMessage:txt
        }
        return arr;
    }
    static async httpstatus(ctx) {
        const er='';
        switch (ctx.status) {
            case 404:
            er = this.setCallBack(ctx,this.err('request 404'));
            console.log(er)
            ctx.body=er;
              break;
            case 500:
            er = this.setCallBack(ctx,this.err('request 500'));
            console.log(er)
            ctx.body=er;
              break;
          }
    }
}
module.exports= util;