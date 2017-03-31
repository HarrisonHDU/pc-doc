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
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "110001",
            "description": "<p>产品节点无法参与</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "120001",
            "description": "<p>产品无法购买</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "130001",
            "description": "<p>预约额度超过产品剩余额度</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "130002",
            "description": "<p>最迟打款日期晚于产品的最迟打款日期</p> "
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
    "url": "/",
    "title": "订单小进度类型",
    "name": "OrderSubType",
    "group": "Constant",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "101",
            "description": "<p>等待管理员审核</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "102",
            "description": "<p>管理员审核不通过</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "103",
            "description": "<p>等待麦策审核</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "104",
            "description": "<p>麦策审核不通过</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "105",
            "description": "<p>待申领合同</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "106",
            "description": "<p>待资料报单</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "107",
            "description": "<p>合同已寄出（在资料报单之前）</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "108",
            "description": "<p>合同已寄出（在资料报单之后）</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "109",
            "description": "<p>等待资料报单审核</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "110",
            "description": "<p>待重新资料报单</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "111",
            "description": "<p>待合同寄还</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "112",
            "description": "<p>等待项目成立</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "113",
            "description": "<p>待分成确认</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "114",
            "description": "<p>等待麦策确认订单结束</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "115",
            "description": "<p>订单结束</p> "
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
    "url": "/",
    "title": "订单大进度类型",
    "name": "OrderType",
    "group": "Constant",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "1",
            "description": "<p>预约中</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "2",
            "description": "<p>合同申领</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "3",
            "description": "<p>资料报单</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "4",
            "description": "<p>合同寄还</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "5",
            "description": "<p>项目成立</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "6",
            "description": "<p>分成确认</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "7",
            "description": "<p>订单完成</p> "
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
    "url": "/",
    "title": "产品状态",
    "name": "ProductStatus",
    "group": "Constant",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "0",
            "description": "<p>待观察</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "1",
            "description": "<p>观察中</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "2",
            "description": "<p>众筹中</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "3",
            "description": "<p>已成立</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "4",
            "description": "<p>已结束</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "-1",
            "description": "<p>淘汰</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "-2",
            "description": "<p>众筹失败</p> "
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
    "type": "post",
    "url": "/api/orders/:product_id",
    "title": "创建订单",
    "name": "CreateOrder",
    "group": "Order",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>string</p> ",
            "optional": false,
            "field": "name",
            "description": "<p>姓名</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "precontract_amount",
            "description": "<p>预约额度/万</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>string</p> ",
            "optional": false,
            "field": "estimate_pay_time",
            "description": "<p>预计打款时间</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "[{\n    \"precontract_amount\": 300,  # 预约额度\n    \"name\": \"客户姓名\",\n    \"estimate_pay_time\": \"2017-10-23\"\n}]",
          "type": "json"
        }
      ]
    },
    "filename": "../purchasing_consortia/frontend/order.py",
    "groupTitle": "Order"
  },
  {
    "type": "get",
    "url": "/api/orders/:order_no",
    "title": "订单详情",
    "name": "OrderDetail",
    "group": "Order",
    "version": "1.0.0",
    "filename": "../purchasing_consortia/frontend/order.py",
    "groupTitle": "Order",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"order_no\": \"201708123301\",\n    \"user\": {\n        \"id\": 100094,\n        \"name\": \"理财师A\"\n    },\n    \"product\": {\n        \"id\": 1000001,\n        \"name\": \"产品名称\"\n    },\n    \"self\": true,       # 是否是当前登录者创建的\n    \"customer_name\": \"客户名称\",\n    \"estimate_pay_time\": \"2017-03-22\",  # 预计打款日\n    \"actual_pay_time\": \"2017-03-30\",    # 实际打款日\n    \"created_time\": \"2017-03-01T15:33:22\",  # 订单创建时间\n    \"profit_info\": \"分成说明\",\n    \"precontract_amount\": 300,          # 金额\n    \"currency\": 1,                      # 1:人民币,2:美元\n    \"type\": 1,                          # 订单当前大进度类型\n    \"sub_type\": 1,                      # 订单当前小进度类型\n    \"last_news\": \"最新进度\",\n    \"timeline\": [{                      # 时间线\n        \"name\": \"资料报单\",\n        \"status\": 1     # 进度状态 0:待进行,1:进行中,2:已结束,3:失败\n    }],\n    \"history\": [{                       # 订单动态历史\n        \"timestamp\": \"2017-04-12\",\n        \"event\": \"订单已创建，正在等待公司审核\"\n    }]\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/orders",
    "title": "订单列表",
    "name": "OrderList",
    "group": "Order",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>int</p> ",
            "optional": true,
            "field": "type",
            "description": "<p>类型1:等待审核,2:合同寄还,3:资料报单,4:合同寄还,5:分成确认。不传表示所有订单</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>int</p> ",
            "optional": true,
            "field": "product_id",
            "description": "<p>产品ID</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>int</p> ",
            "optional": true,
            "field": "page",
            "description": "<p>第几页</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>int</p> ",
            "optional": true,
            "field": "per_page",
            "description": "<p>每页数量</p> "
          }
        ]
      }
    },
    "filename": "../purchasing_consortia/frontend/order.py",
    "groupTitle": "Order",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"order_no\": \"201708123301\",\n    \"user\": {\n        \"id\": 100094,\n        \"name\": \"理财师A\"\n    },\n    \"product\": {\n        \"id\": 1000001,\n        \"name\": \"产品名称\"\n    },\n    \"self\": true,       # 是否是当前登录者创建的\n    \"customer_name\": \"客户名称\",\n    \"estimate_pay_time\": \"2017-03-22\",  # 预计打款日\n    \"actual_pay_time\": \"2017-03-30\",    # 实际打款日\n    \"created_time\": \"2017-03-01T15:33:22\",  # 订单创建时间\n    \"profit_info\": \"分成说明\",\n    \"precontract_amount\": 300,          # 金额\n    \"currency\": 1,                      # 1:人民币,2:美元\n    \"type\": 1,                          # 订单当前大进度类型\n    \"sub_type\": 1,                      # 订单当前小进度类型\n    \"last_news\": \"最新进度\",\n    \"timeline\": [{                      # 时间线\n        \"name\": \"资料报单\",\n        \"status\": 1     # 进度状态 0:待进行,1:进行中,2:已结束,3:失败\n    }],\n    \"history\": [{                       # 订单动态历史\n        \"timestamp\": \"2017-04-12\",\n        \"event\": \"订单已创建，正在等待公司审核\"\n    }]\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "patch",
    "url": "/api/products/activity/:node_id",
    "title": "参与/取消参与产品节点活动",
    "name": "ParticipateNode",
    "group": "Product",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>bool</p> ",
            "optional": false,
            "field": "participate",
            "description": "<p>参与/取消</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>string</p> ",
            "optional": true,
            "field": "name",
            "description": "<p>姓名</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>string</p> ",
            "optional": true,
            "field": "mobile",
            "description": "<p>联系方式</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"participate\": true,\n    \"name\": \"小明\",\n    \"mobile\": \"15068975727\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "../purchasing_consortia/frontend/product.py",
    "groupTitle": "Product"
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
          "content": "{\n    \"id\": 1,\n    \"brief_name\": \"产品简称\",\n    \"full_name\": \"产品全称\",\n    \"profit_type\": 1,       # 收益类型 0：固定， 1：浮动\n    \"status\": 1,            # 产品状态 0: 待上架 ，1：筹备中,2:众筹中,3:已成立,4:已结束,-1:预审失败,-2:众筹失败\n    \"minimum_size\": 12,     # 最小募集规模/万\n    \"maximum_size\": 33,     # 最大募集规模/万\n    \"current_precontract_size\": 12, # 当前预约额度/万\n    \"last_pay_time\": \"2017-12-3\",   # 最迟打款日期\n    \"minimum_subscription_size\": 10,    # 起够金额\n    \"strategy\": \"产品策略\",\n    \"fund_manager\": \"管理人\",\n    \"start_date\": \"2017-12-16T16:00:00\",    # 产品成立日\n    \"end_date\": \"2017-12-16T16:00:00\",    # 产品结束日\n    \"open_date\": \"2017-12-16T16:00:00\":     # 产品开放日\n    \"dividend_type\": \"分红方式\"\n    \"close_time\": \"封闭期\",\n    \"other_time_point\": \"其他时间节点\",\n    \"collect_account_name\": \"募集账户名\",\n    \"collect_account\": \"募集账号\",\n    \"bank_name\": \"开户行\",\n    \"remit_remark\": \"打款备注\",\n    \"invest_info\": \"投资方向\",\n    \"risk_info\": \"风控措施\",\n    \"fee_info\": \"产品费用\",\n    \"fee_sale\": \"销售费用\",\n    \"currency\": 1,      # 1:人民币, 2:美元\n    \"contract_file\": \"/api/file/3\",    # 合同文件\n    \"images\": [\"http://address1\", \"http://address2\"],   # 配图\n    \"tags\": \"tag1,tag2\",    # 标签\n    \"features\": [{\"text\": \"特点1\", \"image\": \"http://xxxx.jpg\"}],  # 产品特点\n    \"relevant_files\": [{\n        \"name\": \"相关文件1\",\n        \"url\": \"/api/file/3\"\n    }]\n    \"remark\": \"备注\",\n    \"max_prospective_earning\": 0.334,   # 最高预期年化收益\n    \"duration\": 23,             # 期限\n    \"surplus_time\": 2344444,    # 剩余时间/sec\n    \"surplus_size\": 23,         # 剩余额度/万\n    \"followed\": false,          # 是否关注\n    \"profit_interval\": [{       # 收益区间\n        \"condition_ceiling\": 133,   # 金额上限\n        \"condition_floor\": 21,      # 金额下线\n        \"dividends_percentage\": 0.063,  # 分成比例\n        \"prospective_earning\": 0.02 # 预期年化收益\n    }],\n    \"major_timeline\": [             # 产品流程\n          {\n            \"cnt\": 0,               # 子流程数量\n            \"name\": \"项目完成\",     # 进度名称\n            \"nodes\": [],            # 子流程\n            \"status\": 0             # 进度状态 0:待进行,1:进行中,2:已结束,3:失败\n          },\n          {\n            \"cnt\": 0,\n            \"name\": \"售中服务\",\n            \"nodes\": [],\n            \"status\": 0\n          },\n          {\n            \"cnt\": 0,\n            \"name\": \"开始采购\",\n            \"nodes\": [],\n            \"status\": 0\n          },\n          {\n            \"cnt\": 0,\n            \"name\": \"尽调研究\",\n            \"nodes\": [],\n            \"status\": 0\n          },\n          {\n            \"cnt\": 0,\n            \"name\": \"项目录入\",\n            \"nodes\": [\n              {\n                \"content\": \"gCBO8i4aj3fk\",      # 进度内容\n                \"created_time\": \"2017-03-22T17:08:20\",\n                \"id\": 2,\n                \"open_status\": true,            # 节点是否开放\n                \"participation_status\": 0       # 用户参与状态, 0:待审核，1:审核通过, 2:未参与\n                \"status\": 0             # 进度状态 0:待进行,1:进行中,2:已结束,3:失败\n              }\n            ],\n            \"status\": 1,\n            \"time\": \"2017-03-22T17:08:20\"       # 时间\n          }\n    ]\n}",
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
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "status",
            "description": "<p>产品状态 1:观察中,2:采购中,3:往期产品</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>int</p> ",
            "optional": true,
            "field": "page",
            "description": "<p>第几页</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>int</p> ",
            "optional": true,
            "field": "per_page",
            "description": "<p>每页数量</p> "
          }
        ]
      }
    },
    "filename": "../purchasing_consortia/frontend/product.py",
    "groupTitle": "Product",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"id\": 1,\n    \"brief_name\": \"产品简称\",\n    \"full_name\": \"产品全称\",\n    \"profit_type\": 1,       # 收益类型 0：固定， 1：浮动\n    \"status\": 1,            # 产品状态 0: 待上架 ，1：筹备中,2:众筹中,3:已成立,4:已结束,-1:预审失败,-2:众筹失败\n    \"minimum_size\": 12,     # 最小募集规模/万\n    \"maximum_size\": 33,     # 最大募集规模/万\n    \"current_precontract_size\": 12, # 当前预约额度/万\n    \"last_pay_time\": \"2017-12-3\",   # 最迟打款日期\n    \"minimum_subscription_size\": 10,    # 起够金额\n    \"strategy\": \"产品策略\",\n    \"fund_manager\": \"管理人\",\n    \"start_date\": \"2017-12-16T16:00:00\",    # 产品成立日\n    \"end_date\": \"2017-12-16T16:00:00\",    # 产品结束日\n    \"open_date\": \"2017-12-16T16:00:00\":     # 产品开放日\n    \"dividend_type\": \"分红方式\"\n    \"close_time\": \"封闭期\",\n    \"other_time_point\": \"其他时间节点\",\n    \"collect_account_name\": \"募集账户名\",\n    \"collect_account\": \"募集账号\",\n    \"bank_name\": \"开户行\",\n    \"remit_remark\": \"打款备注\",\n    \"invest_info\": \"投资方向\",\n    \"risk_info\": \"风控措施\",\n    \"fee_info\": \"产品费用\",\n    \"fee_sale\": \"销售费用\",\n    \"currency\": 1,      # 1:人民币, 2:美元\n    \"contract_file\": \"/api/file/3\",    # 合同文件\n    \"images\": [\"http://address1\", \"http://address2\"],   # 配图\n    \"tags\": \"tag1,tag2\",    # 标签\n    \"features\": [{\"text\": \"特点1\", \"image\": \"http://xxxx.jpg\"}],  # 产品特点\n    \"relevant_files\": [{\n        \"name\": \"相关文件1\",\n        \"url\": \"/api/file/3\"\n    }]\n    \"remark\": \"备注\",\n    \"max_prospective_earning\": 0.334,   # 最高预期年化收益\n    \"duration\": 23,             # 期限\n    \"surplus_time\": 2344444,    # 剩余时间/sec\n    \"surplus_size\": 23,         # 剩余额度/万\n    \"followed\": false,          # 是否关注\n    \"profit_interval\": [{       # 收益区间\n        \"condition_ceiling\": 133,   # 金额上限\n        \"condition_floor\": 21,      # 金额下线\n        \"dividends_percentage\": 0.063,  # 分成比例\n        \"prospective_earning\": 0.02 # 预期年化收益\n    }],\n    \"major_timeline\": [             # 产品流程\n          {\n            \"cnt\": 0,               # 子流程数量\n            \"name\": \"项目完成\",     # 进度名称\n            \"nodes\": [],            # 子流程\n            \"status\": 0             # 进度状态 0:待进行,1:进行中,2:已结束,3:失败\n          },\n          {\n            \"cnt\": 0,\n            \"name\": \"售中服务\",\n            \"nodes\": [],\n            \"status\": 0\n          },\n          {\n            \"cnt\": 0,\n            \"name\": \"开始采购\",\n            \"nodes\": [],\n            \"status\": 0\n          },\n          {\n            \"cnt\": 0,\n            \"name\": \"尽调研究\",\n            \"nodes\": [],\n            \"status\": 0\n          },\n          {\n            \"cnt\": 0,\n            \"name\": \"项目录入\",\n            \"nodes\": [\n              {\n                \"content\": \"gCBO8i4aj3fk\",      # 进度内容\n                \"created_time\": \"2017-03-22T17:08:20\",\n                \"id\": 2,\n                \"open_status\": true,            # 节点是否开放\n                \"participation_status\": 0       # 用户参与状态, 0:待审核，1:审核通过, 2:未参与\n                \"status\": 0             # 进度状态 0:待进行,1:进行中,2:已结束,3:失败\n              }\n            ],\n            \"status\": 1,\n            \"time\": \"2017-03-22T17:08:20\"       # 时间\n          }\n    ]\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/api/sms",
    "title": "发送短信",
    "name": "SendSms",
    "group": "Sms",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>string</p> ",
            "optional": false,
            "field": "mobile",
            "description": "<p>手机号</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "type",
            "description": "<p>类型,1:验证码</p> "
          }
        ]
      }
    },
    "filename": "../purchasing_consortia/frontend/sms.py",
    "groupTitle": "Sms"
  },
  {
    "type": "get",
    "url": "/",
    "title": "非分页返回的结构",
    "name": "NormalStructure",
    "group": "Structure",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"data\": {},\n    \"ec\": 0,\n    \"msg\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../purchasing_consortia/apidoc.py",
    "groupTitle": "Structure"
  },
  {
    "type": "get",
    "url": "/",
    "title": "分页返回的结构",
    "name": "PageStructure",
    "group": "Structure",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"data\": {\n        \"has_next\": false,\n        \"has_prev\": false,\n        \"items\": [],\n        \"page\": 1,\n        \"total\": 100\n    },\n    \"ec\": 0,\n    \"msg\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../purchasing_consortia/apidoc.py",
    "groupTitle": "Structure"
  },
  {
    "type": "post",
    "url": "/api/user",
    "title": "用户注册",
    "name": "RegisterUser",
    "group": "User",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>string</p> ",
            "optional": false,
            "field": "mobile",
            "description": "<p>手机号</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>string</p> ",
            "optional": false,
            "field": "code",
            "description": "<p>验证码</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>string</p> ",
            "optional": false,
            "field": "password",
            "description": "<p>密码</p> "
          }
        ]
      }
    },
    "filename": "../purchasing_consortia/frontend/user.py",
    "groupTitle": "User"
  }
] });