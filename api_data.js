define({ "api": [
  {
    "type": "get",
    "url": "/",
    "title": "错误码",
    "name": "ErrorCode",
    "group": "Constant",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "0",
            "description": "<p>成功</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "100001",
            "description": "<p>未知错误</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "100002",
            "description": "<p>参数错误</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "100003",
            "description": "<p>用户未登录</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "100004",
            "description": "<p>无权限访问</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "100005",
            "description": "<p>资源不存在</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../purchasing_consortia/apidoc.py",
    "groupTitle": "Constant"
  },
  {
    "type": "get",
    "url": "/api/file/:fid",
    "title": "访问文件",
    "name": "AccessFile",
    "group": "File",
    "version": "1.0.0",
    "filename": "../purchasing_consortia/frontend/file.py",
    "groupTitle": "File"
  },
  {
    "type": "get",
    "url": "/api/file/token",
    "title": "获取OSS授权token",
    "name": "GetOssToken",
    "group": "File",
    "version": "1.0.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"ec\": 0,\n    \"message\": \"Success\",\n    \"data\": {\n        \"token\": \"9ksadd9dsdsaf9a=s9\",\n        \"access_key_id: \"STS.16IIP1f43HeTD93kZV6a\",\n        \"access_key_secret\": \"aipzne684tZdwAE2jd3J8LSdPwqsu9ccl7bFjdr1\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "../purchasing_consortia/frontend/file.py",
    "groupTitle": "File"
  },
  {
    "type": "post",
    "url": "/api/file",
    "title": "上传文件",
    "name": "UploadFile",
    "group": "File",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>string</p> ",
            "optional": false,
            "field": "name",
            "description": "<p>文件名</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>string</p> ",
            "optional": false,
            "field": "md5",
            "description": "<p>OSS上的文件的md5值</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "size",
            "description": "<p>文件大小</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>bool</p> ",
            "optional": false,
            "field": "is_pub",
            "defaultValue": "false",
            "description": "<p>是否公开访问</p> "
          }
        ]
      }
    },
    "filename": "../purchasing_consortia/frontend/file.py",
    "groupTitle": "File"
  },
  {
    "type": "get",
    "url": "/api/products/:id",
    "title": "产品详情",
    "name": "ProductDetail",
    "group": "Product",
    "version": "1.0.0",
    "filename": "../purchasing_consortia/frontend/product.py",
    "groupTitle": "Product",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"id\": 1,\n    \"brief_name\": \"产品简称\",\n    \"full_name\": \"产品全称\",\n    \"profit_type\": 1,       # 收益类型 0：固定， 1：浮动\n    \"status\": 1,            # 产品状态 0: 待上架 ，1：筹备中,2:众筹中,3:已成立,4:已结束,-1:预审失败,-2:众筹失败\n    \"minimum_size\": 12,     # 最小募集规模/万\n    \"maximum_size\": 33,     # 最大募集规模/万\n    \"current_precontract_size\": 12, # 当前预约额度/万\n    \"last_pay_time\": \"2017-12-3\",   # 最迟打款日期\n    \"minimum_subscription_size\": 10,    # 起够金额\n    \"strategy\": \"产品策略\",\n    \"fund_manager\": \"管理人\",\n    \"start_date\": \"2017-12-16T16:00:00\",    # 产品成立日\n    \"end_date\": \"2017-12-16T16:00:00\",    # 产品结束日\n    \"open_date\": \"2017-12-16T16:00:00\":     # 产品开放日\n    \"dividend_type\": \"分红方式\"\n    \"close_time\": \"封闭期\",\n    \"other_time_point\": \"其他时间节点\",\n    \"collect_account_name\": \"募集账户名\",\n    \"collect_account\": \"募集账号\",\n    \"bank_name\": \"开户行\",\n    \"remit_remark\": \"打款备注\",\n    \"invest_info\": \"投资方向\",\n    \"risk_info\": \"风控措施\",\n    \"fee_info\": \"产品费用\",\n    \"fee_sale\": \"销售费用\",\n    \"contract_file\": \"/api/file/3\",    # 合同文件\n    \"images\": [\"http://address1\", \"http://address2\"],   # 配图\n    \"tags\": \"tag1,tag2\",    # 标签\n    \"remark\": \"备注\",\n    \"max_prospective_earning\": 0.334,   # 最高预期年化收益\n    \"max_duration\": 23,         # 最高预期年化收益对应的期限\n    \"surplus_time\": 2344444,    # 剩余时间/sec\n    \"surplus_size\": 23,         # 剩余额度/万\n    \"followed\": false,          # 是否关注\n    \"profit_interval\": [{       # 收益区间\n        \"condition_ceiling\": 133,   # 金额上限\n        \"condition_floor\": 21,      # 金额下线\n        \"dividends_percentage\": 0.063,  # 分成比例\n        \"duration\": 21,             # 期限\n        \"prospective_earning\": 0.02 # 预期年化收益\n    }],\n    \"major_timeline\": [             # 产品流程\n          {\n            \"cnt\": 0,               # 子流程数量\n            \"name\": \"项目完成\",     # 进度名称\n            \"nodes\": [],            # 子流程\n            \"status\": 0             # 进度状态 0:待进行,1:进行中,2:已结束,3:失败\n          },\n          {\n            \"cnt\": 0,\n            \"name\": \"售中服务\",\n            \"nodes\": [],\n            \"status\": 0\n          },\n          {\n            \"cnt\": 0,\n            \"name\": \"开始采购\",\n            \"nodes\": [],\n            \"status\": 0\n          },\n          {\n            \"cnt\": 0,\n            \"name\": \"尽调研究\",\n            \"nodes\": [],\n            \"status\": 0\n          },\n          {\n            \"cnt\": 0,\n            \"name\": \"项目录入\",\n            \"nodes\": [\n              {\n                \"content\": \"gCBO8i4aj3fk\",      # 进度内容\n                \"created_time\": \"2017-03-22T17:08:20\",\n                \"id\": 2,\n                \"open_status\": true,            # 节点是否开放\n                \"participation_status\": 0       # 用户参与状态, 0:待审核，1:审核通过, 2:未参与\n              }\n            ],\n            \"status\": 1,\n            \"time\": \"2017-03-22T17:08:20\"       # 时间\n          }\n    ]\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/products",
    "title": "产品列表",
    "name": "Products",
    "group": "Product",
    "version": "1.0.0",
    "filename": "../purchasing_consortia/frontend/product.py",
    "groupTitle": "Product",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"id\": 1,\n    \"brief_name\": \"产品简称\",\n    \"full_name\": \"产品全称\",\n    \"profit_type\": 1,       # 收益类型 0：固定， 1：浮动\n    \"status\": 1,            # 产品状态 0: 待上架 ，1：筹备中,2:众筹中,3:已成立,4:已结束,-1:预审失败,-2:众筹失败\n    \"minimum_size\": 12,     # 最小募集规模/万\n    \"maximum_size\": 33,     # 最大募集规模/万\n    \"current_precontract_size\": 12, # 当前预约额度/万\n    \"last_pay_time\": \"2017-12-3\",   # 最迟打款日期\n    \"minimum_subscription_size\": 10,    # 起够金额\n    \"strategy\": \"产品策略\",\n    \"fund_manager\": \"管理人\",\n    \"start_date\": \"2017-12-16T16:00:00\",    # 产品成立日\n    \"end_date\": \"2017-12-16T16:00:00\",    # 产品结束日\n    \"open_date\": \"2017-12-16T16:00:00\":     # 产品开放日\n    \"dividend_type\": \"分红方式\"\n    \"close_time\": \"封闭期\",\n    \"other_time_point\": \"其他时间节点\",\n    \"collect_account_name\": \"募集账户名\",\n    \"collect_account\": \"募集账号\",\n    \"bank_name\": \"开户行\",\n    \"remit_remark\": \"打款备注\",\n    \"invest_info\": \"投资方向\",\n    \"risk_info\": \"风控措施\",\n    \"fee_info\": \"产品费用\",\n    \"fee_sale\": \"销售费用\",\n    \"contract_file\": \"/api/file/3\",    # 合同文件\n    \"images\": [\"http://address1\", \"http://address2\"],   # 配图\n    \"tags\": \"tag1,tag2\",    # 标签\n    \"remark\": \"备注\",\n    \"max_prospective_earning\": 0.334,   # 最高预期年化收益\n    \"max_duration\": 23,         # 最高预期年化收益对应的期限\n    \"surplus_time\": 2344444,    # 剩余时间/sec\n    \"surplus_size\": 23,         # 剩余额度/万\n    \"followed\": false,          # 是否关注\n    \"profit_interval\": [{       # 收益区间\n        \"condition_ceiling\": 133,   # 金额上限\n        \"condition_floor\": 21,      # 金额下线\n        \"dividends_percentage\": 0.063,  # 分成比例\n        \"duration\": 21,             # 期限\n        \"prospective_earning\": 0.02 # 预期年化收益\n    }],\n    \"major_timeline\": [             # 产品流程\n          {\n            \"cnt\": 0,               # 子流程数量\n            \"name\": \"项目完成\",     # 进度名称\n            \"nodes\": [],            # 子流程\n            \"status\": 0             # 进度状态 0:待进行,1:进行中,2:已结束,3:失败\n          },\n          {\n            \"cnt\": 0,\n            \"name\": \"售中服务\",\n            \"nodes\": [],\n            \"status\": 0\n          },\n          {\n            \"cnt\": 0,\n            \"name\": \"开始采购\",\n            \"nodes\": [],\n            \"status\": 0\n          },\n          {\n            \"cnt\": 0,\n            \"name\": \"尽调研究\",\n            \"nodes\": [],\n            \"status\": 0\n          },\n          {\n            \"cnt\": 0,\n            \"name\": \"项目录入\",\n            \"nodes\": [\n              {\n                \"content\": \"gCBO8i4aj3fk\",      # 进度内容\n                \"created_time\": \"2017-03-22T17:08:20\",\n                \"id\": 2,\n                \"open_status\": true,            # 节点是否开放\n                \"participation_status\": 0       # 用户参与状态, 0:待审核，1:审核通过, 2:未参与\n              }\n            ],\n            \"status\": 1,\n            \"time\": \"2017-03-22T17:08:20\"       # 时间\n          }\n    ]\n}",
          "type": "json"
        }
      ]
    }
  }
] });