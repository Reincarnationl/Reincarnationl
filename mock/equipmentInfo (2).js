const BasicInfo = {
    valuenum:"2101XXX",
    valuetime:"2021-10-05 12:00",
    valuename :"发电机01XLL",
    valuearea:"XX-A区"
};
const today = [0.9, 0.6, 0.7 ,0.65, 0.6, 0.55, 0.35,0.03,0.03, 0.03, 0.03, 0.03,0.03];
// const today = "test";
const yesterday = [0.1, 0.5, 0.2 ,0.6, 0.5, 0.7, 0.6,0.23,0.63, 0.53, 0.73, 0.90,0.33];
const fewdays = [1.0, 0.6, 0.7 ,0.15, 0.16, 0.35, 0.65,0.93,0.23, 0.13, 0.43, 0.03,0.03];
const useTime = '200.2h';


module.exports=[{
    url: '/vue-element-admin/equipmentInfo/giveBasicInfo',
    type: 'post',
    response: config => {
        return {
          code: 20000,
          data: {  
            BasicInfo : BasicInfo
          }
        }
      }
},
{
    url: '/vue-element-admin/equipmentInfo/giveUsageToday',
    type: 'post',
    response: config => {
        return {
          code: 20000,
          data: {  
            today : today
          }
        }
      }
},
{
    url: '/vue-element-admin/equipmentInfo/giveUsageYesterday',
    type: 'post',
    response: config => {
        return {
          code: 20000,
          data: {  
            yesterday : yesterday
          }
        }
      }
},
{
    url: '/vue-element-admin/equipmentInfo/giveUsageFewdays',
    type: 'post',
    response: config => {
        return {
          code: 20000,
          data: {  
            fewdays : fewdays
          }
        }
      }
},
{
    url: '/vue-element-admin/equipmentInfo/giveBootTime',
    type: 'post',
    response: config => {
        return {
          code: 20000,
          data: {  
            useTime : useTime
          }
        }
      }
}]
