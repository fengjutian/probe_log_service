import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { resolve } from 'path';
import { existsSync, mkdirSync, writeFileSync, appendFileSync, createWriteStream } from 'fs';
import * as csv from '@fast-csv/format';
import * as XLSX from 'xlsx';

interface log {
  id: string;
  key: number;
  value: string;
}

@Controller('log')
export class LogController {

  @Get('/get')
  async getLog() {
    return 'hello log';
  }

  @Post('/upload')
  async getUploadLog(@Body() logInfo: log) {

    

    return {"status": 200};


    const dbFoldName = 'db';
    const dbFileName = 'db/log.csv';
    const isExistDB = existsSync(dbFoldName);

    let arrayData = [
      ['name', 'age'],
      ['zhangsan', 20],
      ['lisi', 21],
      ['wangwu', 22],
      ['zhaoliu', 23],
      ['sunqi', 24],
    ];

    let jsonData = [{
        name: 'zhangsan1',
        age: 30,
    }, {
      name: "lisi1",
      age: 31
    }, {
      name: "wangwu1",
      age: 32
    }, {
      name: "zhaoliu1",
      age: 33
    }, {
      name: "sunqi1",
      age: 34,
      length: "hello"
    }];
    
    // 将数据转成workSheet
    let jsonWorkSheet = XLSX.utils.json_to_sheet([logInfo]);
    // 构造workBook
    let workBook = {
      SheetNames: ['Sheet1'],
      Sheets: {
        'Sheet1': jsonWorkSheet,
      }
    };
    // 将workBook写入文件
    XLSX.writeFile(workBook, "mySheetName.xlsx");

    console.log('到这里。。。。');

    if (isExistDB) {
      // appendFileSync(dbFileName, 'world');
    } else {
      mkdirSync(dbFoldName, { recursive: true });


      // writeFileSync(dbFileName, 'hello');
    }

    console.log('logInfo', logInfo, isExistDB);
    return logInfo;
  }
}
