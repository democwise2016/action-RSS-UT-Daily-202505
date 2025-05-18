const ItemFiltersPreset = require('./app/config/ItemFiltersPreset.js')
const CONFIG = require('../config-json.js')

let feedList = [

  {
    title: '志祺七七 X 圖文不符',
    feedID: 'shasha77',
    homepageURL: 'https://www.youtube.com/channel/UCiWXd0nmBjlKROwzMyPV-Nw',
    itemFilters: [
      ItemFiltersPreset.between3minTo30Min,
      (item) => { return (item.title.endsWith('｜志祺七七')) }
    ] // 霸道總裁攀岩開會、網紅天天搞小團體...《絕世網紅》劇情超浮誇？《 志祺今天不讀稿 》EP010｜志祺七七
  },
  {
    title: 'Jer仔',
    feedID: 'jer965',
    homepageURL: 'https://www.youtube.com/channel/UClkSKv9-Geah2gwYu7e9jFw',
    itemFilters: [
      ItemFiltersPreset.between3minTo30Min,
    ] // 霸道總裁攀岩開會、網紅天天搞小團體...《絕世網紅》劇情超浮誇？《 志祺今天不讀稿 》EP010｜志祺七七
  },
  {
    title: '攝徒日記Fun TV',
    feedID: 'funtv8964',
    homepageURL: 'https://www.youtube.com/channel/UCvTe3Z7TZsjGzUERx4Ce6zA',
    itemFilters: ItemFiltersPreset.between3minTo30Min,
  },
  {
    title: '公子沈',
    feedID: 'gongzishen',
    homepageURL: 'https://www.youtube.com/channel/UCrGSFNEBmCN0rqhATZels2Q',
    itemFilters: ItemFiltersPreset.between3minTo30Min,
  },
  
  {
    title: 'AI-最佳拍檔',
    feedID: 'AI-bestpartners',
    homepageURL: 'https://www.youtube.com/channel/UCGWYKICLOE8Wxy7q3eYXmPA',
    itemFilters: ItemFiltersPreset.between3minTo30Min,
  },
  {
    title: '老鵝特搜',
    feedID: 'omgoosetw-news',
    // thumbnailBorderColor: true,
    homepageURL: 'https://www.youtube.com/channel/UC_iwP8I13JnL54BypRCzldw',
    itemFilters: [
      ItemFiltersPreset.between3minTo30Min,
      (item) => { return (item.title.indexOf('｜老鵝特搜') > -1) }
    ],
    options: {
      maxItems: 3
    }
  },
]

// 

// --------------------------------------

if (CONFIG.debug) {
  feedList = [
    {
      title: '志祺七七 X 圖文不符',
      feedID: 'shasha77',
      homepageURL: 'https://www.youtube.com/channel/UCiWXd0nmBjlKROwzMyPV-Nw',
      itemFilters: [
        ItemFiltersPreset.between3minTo30Min,
        (item) => { return (item.title.endsWith('｜志祺七七')) }
      ], // 霸道總裁攀岩開會、網紅天天搞小團體...《絕世網紅》劇情超浮誇？《 志祺今天不讀稿 》EP010｜志祺七七
      maxItems: 3
    },
  ]
}


module.exports = feedList
