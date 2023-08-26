/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx71bf60e884844e92',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '502dbfdb3a4cb4a8d5a4adcbf0fca4f3',

  PROVINCE: '上海',
  CITY: '宝山区',

  USERS: [
    {
      // 想要发送的人的名字
      name: '老婆',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oByAH6V4iWvnxlMrK3cfcbvrhFS0',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: '	8F3MNbGIZYuwCWj5eSO0hKoYjw7TbmOeRalMsXIKu1k',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '02-03',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '老婆', year: '2000', date: '02-03',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '老婆', year: '2000', date: '02-03',
        },
        {
          type: '节日', name: '恋爱纪念日', year: '2022', date: '10-14',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2022-09-08' },
        // 结婚纪念日
        { keyword: 'marry_day', date: '2022-09-09' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'deAr3XBKqApycmAlvOGPpBVYfi3Hn_WexQTIbDiqXUw',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oByAH6bpFqlQd3bh86kdvSomvq7g',
    }
  ],

}

module.exports = USER_CONFIG

