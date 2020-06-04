//二维码schema
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const QRCodeSchema = new Schema({
//   _id会自动生成
    _allreadyUsed:{ //是否已经扫码且使用
        type:Boolean,
        default:false
    },
    userId:{ //为了数据分析 表关联
        type:Schema.Types.ObjectId,
        ref:"User"
    }, 
    scanned:{ //状态码 有没有扫过
        type:Boolean, 
        default:false //扫完之后变成true
    },
    status:{
        //二维码所有的状态
        type:Number,
        default:0/*0未确定（还没有被扫） 1确定授权 -1 取消授权 */
    },
    url:String, //生成url的类型
    userInfo:{ 
        type:Object,
        default:{}
    },
    createdAt:{  //生成时间
        type:Date,
        default: Date.now
    },
    expireAt:{ //过期时间
        type:Date
    }
})
module.exports = mongoose.model('QRCode',QRCodeSchema)