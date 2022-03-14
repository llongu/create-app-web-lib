define({ "api": [
  {
    "type": "all",
    "url": "/updateApiDoc",
    "title": "",
    "name": "updateApiDoc",
    "description": "<p>访问该接口可直接创建或更新api文档</p>",
    "group": "api_文档更新接口",
    "version": "1.0.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>状态码.  0  成功</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>提示信息</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n            code: 1000,\n            msg: \"apidoc更新成功\",\n            data: {\n                text: `请访问 localhost:7002/public/apidoc/index.html`,\n            },\n        }",
          "type": "json"
        }
      ]
    },
    "filename": "app/controller/updateApiDoc.js",
    "groupTitle": "api_文档更新接口",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:7002/api/updateApiDoc"
      }
    ]
  },
  {
    "type": "get",
    "url": "/modify_password",
    "title": "修改密码",
    "name": "modify_password",
    "description": "<p>修改密码</p>",
    "group": "个人中心",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "passWord",
            "description": "<p>密码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "n_passWord",
            "description": "<p>新密码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "c_passWord",
            "description": "<p>再次输入新密码</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:7002/api/api/modify_password"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>状态码.  1000  成功</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>提示信息</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n     \"code\":0,\n     \"msg\":\"操作成功\",\n     \"data\":{}",
          "type": "json"
        }
      ]
    },
    "filename": "app/controller/personal.js",
    "groupTitle": "个人中心"
  },
  {
    "type": "get",
    "url": "/updata_userInfo",
    "title": "修改用户信息",
    "name": "updata_userInfo",
    "description": "<p>修改用户信息</p>",
    "group": "个人中心",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userName",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "ident_type",
            "description": "<p>用户标识 1普通 2超管</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:7002/api/api/updata_userInfo"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>状态码.  1000  成功</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>提示信息</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n     \"code\":0,\n     \"msg\":\"操作成功\",\n     \"data\":{}",
          "type": "json"
        }
      ]
    },
    "filename": "app/controller/personal.js",
    "groupTitle": "个人中心"
  },
  {
    "type": "get",
    "url": "/userInfo",
    "title": "用户信息",
    "name": "userInfo",
    "description": "<p>用户信息</p>",
    "group": "个人中心",
    "version": "1.0.0",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:7002/api/api/userInfo"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>状态码.  1000  成功</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>提示信息</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n     \"code\":0,\n     \"msg\":\"操作成功\",\n     \"data\":{\n             \"userName\": \"\",\n             \"phone\": 18282702074,\n             \"ident_type\":2 //身份标识 1 普通 2 超管\n           }",
          "type": "json"
        }
      ]
    },
    "filename": "app/controller/personal.js",
    "groupTitle": "个人中心"
  },
  {
    "type": "post",
    "url": "/regist",
    "title": "",
    "name": "/regist",
    "description": "<p>注册</p>",
    "group": "注册",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>手机号 1开头 11位</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "passWord",
            "description": "<p>密码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userName",
            "description": "<p>用户名</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:7002/api/regist"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>状态码.  1000  成功</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>提示信息</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n     \"code\":0,\n     \"msg\":\"操作成功\",\n     \"data\":{}\n }",
          "type": "json"
        }
      ]
    },
    "filename": "app/controller/user.js",
    "groupTitle": "注册"
  },
  {
    "type": "post",
    "url": "/userManage/createUser",
    "title": "新增用户",
    "name": "createUser",
    "description": "<p>新增用户</p>",
    "group": "用户管理",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": ""
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userName",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>手机号</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "ident_type",
            "description": "<p>身份标识</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:7002/api/userManage/createUser"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>状态码.  1000  成功</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>提示信息      默认创建的密码 520520</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n     \"code\":0,\n     \"msg\":\"操作成功\",\n     \"data\":{}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/controller/userManage.js",
    "groupTitle": "用户管理"
  },
  {
    "type": "post",
    "url": "/userManage/deleteUser",
    "title": "删除用户信息",
    "name": "deleteUser",
    "description": "<p>删除用户信息</p>",
    "group": "用户管理",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": ""
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ident_type",
            "description": "<p>身份标识</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>_id</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:7002/api/userManage/deleteUser"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>状态码.  1000  成功</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>提示信息</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n     \"code\":0,\n     \"msg\":\"操作成功\",\n     \"data\":{}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/controller/userManage.js",
    "groupTitle": "用户管理"
  },
  {
    "type": "post",
    "url": "/userManage/editUserInfo",
    "title": "编辑用户信息",
    "name": "editUserInfo",
    "description": "<p>编辑用户信息</p>",
    "group": "用户管理",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": ""
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userName",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>手机号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ident_type",
            "description": "<p>身份标识</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>_id</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:7002/api/userManage/editUserInfo"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>状态码.  1000  成功</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>提示信息</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n     \"code\":0,\n     \"msg\":\"操作成功\",\n     \"data\":{}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/controller/userManage.js",
    "groupTitle": "用户管理"
  },
  {
    "type": "get",
    "url": "/userManage/userInfo",
    "title": "用户信息",
    "name": "userInfo",
    "description": "<p>用户信息</p>",
    "group": "用户管理",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": ""
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>id</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "ident_type",
            "description": "<p>身份标识</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:7002/api/userManage/userInfo"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>状态码.  1000  成功</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>提示信息</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n     \"code\":0,\n     \"msg\":\"操作成功\",\n     \"data\":{\n                \"_id\": \"60d1b29165fc2e3a8cf8920f\",\n                \"userName\": \"\",\n                \"phone\": 18282702074,\n                \"ident_type\": 2,\n           }",
          "type": "json"
        }
      ]
    },
    "filename": "app/controller/userManage.js",
    "groupTitle": "用户管理"
  },
  {
    "type": "get",
    "url": "/userManage/userList",
    "title": "用户列表",
    "name": "userList",
    "description": "<p>用户列表</p>",
    "group": "用户管理",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": ""
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "current",
            "description": "<p>页码</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "pageSize",
            "description": "<p>每页条数</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "ident_type",
            "description": "<p>用户标识 1普通 2超管</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:7002/api/userManage/userList"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>状态码.  1000  成功</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>提示信息</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n     \"code\":0,\n     \"msg\":\"操作成功\",\n     \"data\":{\n       \"list\": [\n                {\n                \"_id\": \"60d1b29165fc2e3a8cf8920f\",\n                \"userName\": \"\",\n                \"phone\": 18282702074,\n                \"ident_type\": 2,\n                 }\n               ],\n                \"pagination\": {\n                \"current\": 1,\n                \"pageSize\": 10,\n                \"total\": 1\n                }\n           }",
          "type": "json"
        }
      ]
    },
    "filename": "app/controller/userManage.js",
    "groupTitle": "用户管理"
  },
  {
    "type": "post",
    "url": "/login",
    "title": "",
    "name": "/login",
    "description": "<p>登录</p>",
    "group": "登录",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>手机号 1开头 11位</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "passWord",
            "description": "<p>密码</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:7002/api/login"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>状态码.  1000  成功</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>提示信息</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n     \"code\":0,\n     \"msg\":\"操作成功\",\n     \"data\":{\n           \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXNzV29yZCI6IjUyMDUyMCIsInBob25lIjoiMTgyODI3MDIwNzQiLCJ1aWQiOiJhZG1pbjYwY2Q1NWI1YjQ3ZjlkMzllYzJmZDViZSIsImlhdCI6MTYyNDI1ODkyNiwiZXhwIjoxNjI0MzQ1MzI2fQ.oUiMqxp3D3EIdJzW0JDrf8pF2LAOgndw4pQoRRyyVyw\"\n      }\n }",
          "type": "json"
        }
      ]
    },
    "filename": "app/controller/user.js",
    "groupTitle": "登录"
  },
  {
    "type": "post",
    "url": "/components/add",
    "title": "新增",
    "name": "add",
    "description": "<p>列表新增</p>",
    "group": "组件库管理",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": ""
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>模板名称</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "npmName",
            "description": "<p>npm包名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "npmLink",
            "description": "<p>npm链接</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "version",
            "description": "<p>版本</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "platformType",
            "description": "<p>必须为Web H5','Web PC','Wechat Mini Program','App Hybrid' 中一个</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "farmeworkType",
            "description": "<p>技术框架</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "installCommand",
            "description": "<p>安装命令</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "startCommand",
            "description": "<p>启动命令</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:7002/api/components/add"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>状态码.  1000  成功</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>提示信息</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t\t\t\"code\": 1000,\n\t\t\t\"data\": {\n\t\t\t\t\"result\": true\n       \t\t },\n\t\t\t\"msg\": \"操作成功\"\n\t\t}",
          "type": "json"
        }
      ]
    },
    "filename": "app/controller/componentsManage.js",
    "groupTitle": "组件库管理"
  },
  {
    "type": "post",
    "url": "/components/delete",
    "title": "删除 (批量)",
    "name": "delete",
    "description": "<p>列表删除</p>",
    "group": "组件库管理",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": ""
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String|Array[String]",
            "optional": false,
            "field": "id",
            "description": "<p>模板id:   &quot;id&quot; || [&quot;id1&quot;,&quot;id2&quot;]</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:7002/api/components/delete"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>状态码.  1000  成功</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>提示信息</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t\t\t\"code\": 1000,\n\t\t\t\"data\": {\n\t\t\t\t\"result\": true\n       \t\t },\n\t\t\t\"msg\": \"操作成功\"\n\t\t}",
          "type": "json"
        }
      ]
    },
    "filename": "app/controller/componentsManage.js",
    "groupTitle": "组件库管理"
  },
  {
    "type": "get",
    "url": "/components/query",
    "title": "列表查询",
    "name": "query",
    "description": "<p>列表查询</p>",
    "group": "组件库管理",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": ""
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pageSize",
            "description": "<p>分页大小 默认10  可选</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "current",
            "description": "<p>分页位置 默认1 可选</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>组件名称   可选</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:7002/api/components/query"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>状态码.  1000  成功</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>提示信息</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   {\n\t\t\t\"code\": 1000,\n\t\t\t\"data\": {\n\t\t\t\t\"result\": {\n\t\t\t\t\"list\": [\n                {\n                    \"_id\": \"60d191f68d33976184c7e89b\",\n                    \"name\": \"H5组件库\",\n                    \"npmName\": \"jyj-wx-h5\",\n                    \"npmLink\": \"www.baidu.com\",\n                    \"version\": \"1.0.0\",\n                    \"platformType\": \"Web H5\",\n                    \"farmeworkType\": \"vue\",\n                    \"installCommand\": \"npm i\",\n                    \"startCommand\": \"npm start\",\n                    \"createAuthor\": \"ll\",\n                    \"editor\": \"ll\",\n                    \"createTime\": \"1624347126573\",\n                    \"changeTime\": \"1624347126573\",\n                }\n            ],\n            \"pagination\": {\n                \"current\": 1,\n                \"pageSize\": 10,\n                \"total\": 2\n            }\n       \t }\n\t\t},\n\t\t\t\"msg\": \"操作成功\"\n\t\t}",
          "type": "json"
        }
      ]
    },
    "filename": "app/controller/componentsManage.js",
    "groupTitle": "组件库管理"
  },
  {
    "type": "post",
    "url": "/components/update",
    "title": "编辑",
    "name": "update",
    "description": "<p>列表编辑</p>",
    "group": "组件库管理",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": ""
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>模板id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>模板名称</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "npmName",
            "description": "<p>npm包名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "npmLink",
            "description": "<p>npm链接</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "version",
            "description": "<p>版本</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "platformType",
            "description": "<p>必须为Web H5','Web PC','Wechat Mini Program','App Hybrid' 中一个</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "farmeworkType",
            "description": "<p>技术框架</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "installCommand",
            "description": "<p>安装命令</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "startCommand",
            "description": "<p>启动命令</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:7002/api/components/update"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>状态码.  1000  成功</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>提示信息</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t\t\t\"code\": 1000,\n\t\t\t\"data\": {\n\t\t\t\t\"result\": true\n       \t\t },\n\t\t\t\"msg\": \"操作成功\"\n\t\t}",
          "type": "json"
        }
      ]
    },
    "filename": "app/controller/componentsManage.js",
    "groupTitle": "组件库管理"
  },
  {
    "type": "post",
    "url": "/cli/add",
    "title": "新增",
    "name": "add",
    "description": "<p>列表新增</p>",
    "group": "脚手架模板管理",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": ""
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>模板名称</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "npmName",
            "description": "<p>npm包名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "npmLink",
            "description": "<p>npm链接</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "version",
            "description": "<p>版本</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "platformType",
            "description": "<p>必须为Web H5','Web PC','Wechat Mini Program','App Hybrid' 中一个</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "farmeworkType",
            "description": "<p>技术框架</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "installCommand",
            "description": "<p>安装命令</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "startCommand",
            "description": "<p>启动命令</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:7002/api/cli/add"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>状态码.  1000  成功</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>提示信息</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t\t\t\"code\": 1000,\n\t\t\t\"data\": {\n\t\t\t\t\"result\": true\n       \t\t },\n\t\t\t\"msg\": \"操作成功\"\n\t\t}",
          "type": "json"
        }
      ]
    },
    "filename": "app/controller/cliManage.js",
    "groupTitle": "脚手架模板管理"
  },
  {
    "type": "post",
    "url": "/cli/delete",
    "title": "删除 (批量)",
    "name": "delete",
    "description": "<p>列表删除</p>",
    "group": "脚手架模板管理",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": ""
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String|Array[String]",
            "optional": false,
            "field": "id",
            "description": "<p>模板id:   &quot;id&quot; || [&quot;id1&quot;,&quot;id2&quot;]</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:7002/api/cli/delete"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>状态码.  1000  成功</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>提示信息</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t\t\t\"code\": 1000,\n\t\t\t\"data\": {\n\t\t\t\t\"result\": true\n       \t\t },\n\t\t\t\"msg\": \"操作成功\"\n\t\t}",
          "type": "json"
        }
      ]
    },
    "filename": "app/controller/cliManage.js",
    "groupTitle": "脚手架模板管理"
  },
  {
    "type": "get",
    "url": "/cli/query",
    "title": "列表查询",
    "name": "query",
    "description": "<p>列表查询</p>",
    "group": "脚手架模板管理",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": ""
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pageSize",
            "description": "<p>分页大小 默认10  可选</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "current",
            "description": "<p>分页位置 默认1 可选</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>模板名称   可选</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:7002/api/cli/query"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>状态码.  1000  成功</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>提示信息</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   {\n\t\t\t\"code\": 1000,\n\t\t\t\"data\": {\n\t\t\t\t\"result\": {\n\t\t\t\t\"list\": [\n                {\n                    \"_id\": \"60d191f68d33976184c7e89b\",\n                    \"name\": \"test\",\n                    \"npmName\": \"jyj-wx-h5\",\n                    \"npmLink\": \"www.baidu.com\",\n                    \"version\": \"1.0.0\",\n                    \"platformType\": \"Web H5\",\n                    \"farmeworkType\": \"vue\",\n                    \"installCommand\": \"npm i\",\n                    \"startCommand\": \"npm start\",\n                    \"createAuthor\": \"ll\",\n                    \"editor\": \"ll\",\n                    \"createTime\": \"1624347126573\",\n                    \"changeTime\": \"1624347126573\",\n                }\n            ],\n            \"pagination\": {\n                \"current\": 1,\n                \"pageSize\": 10,\n                \"total\": 2\n            }\n       \t }\n\t\t},\n\t\t\t\"msg\": \"操作成功\"\n\t\t}",
          "type": "json"
        }
      ]
    },
    "filename": "app/controller/cliManage.js",
    "groupTitle": "脚手架模板管理"
  },
  {
    "type": "post",
    "url": "/cli/update",
    "title": "编辑",
    "name": "update",
    "description": "<p>列表编辑</p>",
    "group": "脚手架模板管理",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": ""
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>模板id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>模板名称</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "npmName",
            "description": "<p>npm包名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "npmLink",
            "description": "<p>npm链接</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "version",
            "description": "<p>版本</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "platformType",
            "description": "<p>必须为Web H5','Web PC','Wechat Mini Program','App Hybrid' 中一个</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "farmeworkType",
            "description": "<p>技术框架</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "installCommand",
            "description": "<p>安装命令</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "startCommand",
            "description": "<p>启动命令</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:7002/api/cli/update"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>状态码.  1000  成功</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>提示信息</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t\t\t\"code\": 1000,\n\t\t\t\"data\": {\n\t\t\t\t\"result\": true\n       \t\t },\n\t\t\t\"msg\": \"操作成功\"\n\t\t}",
          "type": "json"
        }
      ]
    },
    "filename": "app/controller/cliManage.js",
    "groupTitle": "脚手架模板管理"
  },
  {
    "type": "get",
    "url": "/home",
    "title": "示例接口",
    "name": "home",
    "description": "<p>这是示例接口</p>",
    "group": "首页模块",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "testId",
            "description": "<p>测试id，默认0,字符串类型，没有不传</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": ""
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:7002/api/home"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>状态码.  0  成功</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>提示信息</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n     \"status\":0,\n     \"msg\":\"成功\",\n     \"data\":{\n         text: 'Hello world'\n      }\n }",
          "type": "json"
        }
      ]
    },
    "filename": "app/controller/home.js",
    "groupTitle": "首页模块"
  }
] });
