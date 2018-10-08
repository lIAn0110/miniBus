// [站点] 
// 广丰-上饶 && 上饶-广丰
const gf2srSites = ['广丰白鹤畈车站', '芦林汽车站', '三官殿', '洋口', '昆山居', '青桥', '子坞','三条杠', '王家山', '老体育中心', '上饶日报社(信江桥头)', '步行街桥头', '渡口(胜利桥头)', '老火车站', '上饶客运中心']
const sr2gfSites = ['广丰白鹤畈车站', '芦林汽车站', '三官殿', '洋口', '昆山居', '青桥', '子坞','三条杠', '王家山', '老体育中心', '上饶日报社(信江桥头)', '步行街桥头', '渡口(胜利桥头)', '老火车站', '上饶客运中心'].reverse()

// 广丰-火车站 && 火车站-广丰
const gf2hczSites = ['广丰白鹤畈车站', '洋口', '上饶火车站站前大道', '上饶火车站(汽车东站)']
const hcz2gfSites = ['广丰白鹤畈车站', '洋口', '上饶火车站站前大道', '上饶火车站(汽车东站)'].reverse()

// [经纬度] 
// 广丰-上饶 && 上饶-广丰
const gf2srPois = [
    {latitude: '28.451060', longitude: '118.199057'},
    {latitude: '28.438318', longitude: '118.169977'},
    {latitude: '28.425603', longitude: '118.146662'},
    {latitude: '28.399698', longitude: '118.115525'},
    {latitude: '28.403609', longitude: '118.093129'},
    {latitude: '28.404947', longitude: '118.073087'},
    {latitude: '28.408064', longitude: '118.060780'},
    {latitude: '28.411613', longitude: '118.048434'},
    {latitude: '28.434407', longitude: '118.012809'},
    {latitude: '28.452522', longitude: '117.990841'},
    {latitude: '28.446368', longitude: '117.981386'},
    {latitude: '28.447359', longitude: '117.969599'},
    {latitude: '28.452076', longitude: '117.966535'},
    {latitude: '28.460376', longitude: '117.975272'}
]
const sr2gfPois = [
    {latitude: '28.451060', longitude: '118.199057'},
    {latitude: '28.438318', longitude: '118.169977'},
    {latitude: '28.425603', longitude: '118.146662'},
    {latitude: '28.399698', longitude: '118.115525'},
    {latitude: '28.403609', longitude: '118.093129'},
    {latitude: '28.404947', longitude: '118.073087'},
    {latitude: '28.408064', longitude: '118.060780'},
    {latitude: '28.411613', longitude: '118.048434'},
    {latitude: '28.434407', longitude: '118.012809'},
    {latitude: '28.452522', longitude: '117.990841'},
    {latitude: '28.446368', longitude: '117.981386'},
    {latitude: '28.447359', longitude: '117.969599'},
    {latitude: '28.452076', longitude: '117.966535'},
    {latitude: '28.460376', longitude: '117.975272'}
].reverse()

// 广丰-火车站 && 火车站-广丰
const gf2hczPois = [
    {latitude: '28.451060', longitude: '118.199057'},
    {latitude: '28.399698', longitude: '118.115525'},
    {latitude: '28.479637', longitude: '118.017419'},
    {latitude: '28.495167', longitude: '118.012322'}
]
const hcz2gfPois = [
    {latitude: '28.451060', longitude: '118.199057'},
    {latitude: '28.399698', longitude: '118.115525'},
    {latitude: '28.479637', longitude: '118.017419'},
    {latitude: '28.495167', longitude: '118.012322'}
].reverse()


// 线路配置
let busLineConfig = {
    sr2gf: {
        lineId: 6,
        sites: sr2gfSites,
        pois: sr2gfPois
    },
    gf2sr: {
        lineId: 7,
        sites: gf2srSites,
        pois: gf2srPois
    },
    hcz2gf: {
        lineId: 8,
        sites: hcz2gfSites,
        pois: hcz2gfPois
    },
    gf2hcz: {
        lineId: 9,
        sites: gf2hczSites,
        pois: gf2hczPois
    }
}
// 请求地址
let resBaseUrl = 'http://jxsr.36596.cn/'
// 请求参数
let queryBusStr = '?c=weixin&a=ajaxlinepoi'

module.exports = {
    busLineConfig,
    resBaseUrl,
    queryBusStr
}

