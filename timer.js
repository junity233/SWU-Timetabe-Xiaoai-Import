/*
 * @Author: Junity
 * @Date: 2024-11-04 11:21:58
 * @LastEditors: Junity
 * @LastEditTime: 2024-11-04 11:35:04
 * @FilePath: \SWU-Timetabe-Xiaoai-Import\timer.js
 * @Description:
 *
 * Copyright (c) 2024 by Junity, All Rights Reserved.
 */
async function scheduleTimer({providerRes, parserRes} = {}) {
  // 返回时间配置JSON，所有项都为可选项，如果不进行时间配置，请返回空对象
  return {
    totalWeek: 20,  // 总周数：[1, 30]之间的整数
        startWithSunday:
            false,  // 是否是周日为起始日，该选项为true时，会开启显示周末选项
        showWeekend: false,  // 是否显示周末
        forenoon: 6,         // 上午课程节数：[1, 10]之间的整数
        afternoon: 5,        // 下午课程节数：[0, 10]之间的整数
        night: 3,            // 晚间课程节数：[0, 10]之间的整数
        sections: [
          {
            section: 1,  // 节次：[1, 30]之间的整数
            startTime: '08:00',  // 开始时间：参照这个标准格式5位长度字符串
            endTime: '08:45',  // 结束时间：同上
          },
          {
            section: 2,
            startTime: '08:55',
            endTime: '09:40',
          },
          {
            section: 3,
            startTime: '10:00',
            endTime: '10:45',
          },
          {
            section: 4,
            startTime: '10:55',
            endTime: '11:40',
          },
          {
            section: 5,
            startTime: '12:10',
            endTime: '12:55',
          },
          {
            section: 6,
            startTime: '13:05',
            endTime: '13:50',
          },
          {
            section: 7,
            startTime: '14:00',
            endTime: '14:45',
          },
          {
            section: 8,
            startTime: '14:55',
            endTime: '15:40',
          },
          {
            section: 9,
            startTime: '15:50',
            endTime: '16:35',
          },
          {
            section: 10,
            startTime: '16:55',
            endTime: '17:40',
          },
          {
            section: 11,
            startTime: '17:50',
            endTime: '18:35',
          },
          {
            section: 12,
            startTime: '19:20',
            endTime: '20:05',
          },
          {
            section: 13,
            startTime: '20:15',
            endTime: '21:00',
          },
          {
            section: 14,
            startTime: '21:10',
            endTime: '21:55',
          }
        ]  // 课程时间表，注意：总长度要和上边配置的节数加和对齐
  }
}