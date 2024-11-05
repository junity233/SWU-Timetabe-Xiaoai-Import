/*
 * @Author: Junity
 * @Date: 2024-11-04 11:21:43
 * @LastEditors: Junity
 * @LastEditTime: 2024-11-04 11:26:15
 * @FilePath: \SWU-Timetabe-Xiaoai-Import\provider.js
 * @Description: 
 * 
 * Copyright (c) 2024 by Junity, All Rights Reserved. 
 */
async function scheduleHtmlProvider() {
  const type = document.querySelector('#shcPDF').dataset['type'];
  return `<div id="type">${type}</div>${
      document
          .querySelector(type === 'list' ? '#kblist_table' : '#kbgrid_table_0')
          .outerHTML}`;
}