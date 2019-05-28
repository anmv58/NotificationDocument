define({ "api": [
  {
    "type": "Define",
    "url": "define_type_action",
    "title": "1. Các action và Code Message trong Notification",
    "name": "1__C_c_action_v__Code_Message_trong_Notification",
    "group": "Android",
    "version": "1.0.0",
    "description": "<p>Mã Action và Mã Code khi nhận notification</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "type",
            "optional": false,
            "field": "0",
            "description": "<p>thông báo liên quan trạng thái hành trình</p>"
          },
          {
            "group": "Parameter",
            "type": "type",
            "optional": false,
            "field": "1",
            "description": "<p>thông báo liên quan đến các chương trình (thưởng/ khuyến mại)</p>"
          },
          {
            "group": "Parameter",
            "type": "type",
            "optional": false,
            "field": "2",
            "description": "<p>thông báo liên quan đến số dư của Ví</p>"
          },
          {
            "group": "Parameter",
            "type": "action",
            "optional": false,
            "field": "OPEN_SCREEN",
            "description": "<p>thông báo kèm hành động mở màn hình</p>"
          },
          {
            "group": "Parameter",
            "type": "action",
            "optional": false,
            "field": "OPEN_WEB",
            "description": "<p>thông báo kèm hành động mở web view</p>"
          }
        ]
      }
    },
    "filename": "api/index.js",
    "groupTitle": "Android"
  },
  {
    "type": "Notification",
    "url": "receive_request.json",
    "title": "2. Nhận notification yêu cầu chuyến đi mới",
    "name": "2__Nh_n_notification_y_u_c_u_chuy_n__i_m_i",
    "group": "Android",
    "description": "<p>Noti được server trả về máy tài xế là có yêu cầu về chuyến đi mới, cần được tài xế xác nhận.</p>",
    "version": "1.0.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Message",
            "description": "<p>title của notification</p>"
          },
          {
            "group": "Success 200",
            "type": "float",
            "optional": false,
            "field": "sourceLatitude",
            "description": "<p>Vĩ độ của điểm đón (điểm đầu)</p>"
          },
          {
            "group": "Success 200",
            "type": "float",
            "optional": false,
            "field": "sourceLongitude",
            "description": "<p>Kinh độ của điểm đón (điểm đầu)</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "PassengerId",
            "description": "<p>Mã Id của khách hàng</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "PName",
            "description": "<p>Tên khách hàng</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "PPicName",
            "description": "<p>undefine</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "PFId",
            "description": "<p>undefine</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "PRating",
            "description": "<p>Điểm đánh giá của khách hàng (số sao)\\</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "PPhone",
            "description": "<p>Số điện thoại khách hàng</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "PPhoneC",
            "description": "<p>Mã quốc gia (Vn = 84)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "REQUEST_TYPE",
            "description": "<p>Loại chuyến đi (bike/ship/truck)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "tNoteDriver",
            "description": "<p>Ghi chú cho tài xế</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "iDurationRent",
            "description": "<p>undefine</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "PACKAGE_TYPE",
            "description": "<p>undefine</p>"
          },
          {
            "group": "Success 200",
            "type": "float",
            "optional": false,
            "field": "tEndLat",
            "description": "<p>Vĩ độ điểm cuối</p>"
          },
          {
            "group": "Success 200",
            "type": "float",
            "optional": false,
            "field": "tEndLong",
            "description": "<p>Kinh độ điểm cuối</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "PickUpAddress",
            "description": "<p>Địa chỉ điểm đón</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "DestAddress",
            "description": "<p>Địa chỉ điểm cuối</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "PaymentMode",
            "description": "<p>Phương thức thanh toán</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "distance",
            "description": "<p>Độ dài quãng đường chuyến đi</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "selectedCarTypeId",
            "description": "<p>Mã dịch vụ (152, 159, 160 ...)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "selectedTypeName",
            "description": "<p>Tên dịch vụ</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "vLogo",
            "description": "<p>name của ảnh đại diện dịch vụ</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "request_id",
            "description": "<p>Mã Id yêu cầu</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "totalFarenum",
            "description": "<p>Tổng giá cước chuyến đi</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "fareBaseDistance",
            "description": "<p>Giá cước dựa trên quãng đường</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "fareOfCommision",
            "description": "<p>Chiết khấu chuyến đi (myGo thu)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Notification-Example:",
          "content": "{\n    \"Message\": \"CabRequested\",\n       \"sourceLatitude\": 21.0068981,\n       \"sourceLongitude\": 105.8466658,\n       \"PassengerId\": 5565308,\n       \"PName\": \"Cong Phuong Dong Passenger\",\n       \"PPicName\": \"\",\n       \"PFId\": \"0\",\n       \"PRating\": 3,\n       \"PPhone\": \"0977212594\",\n       \"PPhoneC\": \"84\",\n       \"REQUEST_TYPE\": \"Ride\",\n       \"tNoteDriver\": \"\",\n       \"iDurationRent\": 0,\n       \"PACKAGE_TYPE\": \"\",\n       \"tEndLat\": 21.0838905,\n       \"tEndLong\": 105.8084823,\n       \"PickUpAddress\": \"18 Ngõ 30 Tạ Quang Bửu, Bách Khoa, Hai Bà Trưng, Hà Nội, Vietnam\",\n       \"DestAddress\": \"Phú Thượng, Tây Hồ, Hanoi, Vietnam\",\n       \"PaymentMode\": \"Cash\",\n       \"fTipDeliver\": 0,\n       \"bTipDeliver\": \"0\",\n       \"bTantayDeliver\": \"0\",\n       \"bKyDeliver\": \"0\",\n       \"vReceiverName\": \"\",\n       \"vReceiverMobile\": \"\",\n       \"vSenderName\": \"\",\n       \"vSenderMobile\": \"\",\n       \"tDetailFromAddr\": \"\",\n       \"tDetailToAddr\": \"\",\n       \"fCodDeliver\": \"\",\n       \"distance\": 13.828,\n       \"selectedCarTypeID\": 159,\n       \"SelectedTypeName\": \"VTP-GO-BIKE\",\n       \"vLogo\": \"1545994537_ic_car_HNI-GOBIKE.png\",\n       \"request_id\": 75986,\n       \"totalFareNum\": 64000,\n       \"fareBaseDistance\": 64000,\n       \"fareOfCommision\": 12800\n}",
          "type": "json"
        }
      ]
    },
    "filename": "api/index.js",
    "groupTitle": "Android"
  },
  {
    "type": "Notification",
    "url": "receive_accepted.json",
    "title": "3. Nhận notification khi TX chấp nhận yêu cầu chuyến đi mới",
    "name": "3__Nh_n_notification_khi_TX_ch_p_nh_n_y_u_c_u_chuy_n__i_m_i",
    "group": "Android",
    "description": "<p>Noti được server trả về máy Khách hàng khi tài xế chấp nhận chuyến đi</p>",
    "version": "1.0.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "action",
            "description": "<p>Mã hành động khi nhận Notification</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "driverId",
            "description": "<p>Mã Id của Tài xế</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>title của notification</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "tripId",
            "description": "<p>Mã Id chuyến đi</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "tripCode",
            "description": "<p>Mã chữ chuyến đi (ví dụ: GNT43W74)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "driverName",
            "description": "<p>Tên tài xế</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "driverPhone",
            "description": "<p>Số điện thoại tài xế</p>"
          },
          {
            "group": "Success 200",
            "type": "float",
            "optional": false,
            "field": "rating",
            "description": "<p>Điểm đánh giá của tài xế</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "appVersion",
            "description": "<p>Phiên bản ứng dụng (chắc của AppTX)</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "tripVertificationCode",
            "description": "<p>Not use/ undefine</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>(in data)            loại chuyến đi/ tài xế (deliver/rider)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Tiêu đề thông báo</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>Nội dung thông báo (hiển thị ở notification điện thoại)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Notification-Example:",
          "content": "{\n        \"action\": \"OPEN_SCREEN\",\n        \"data\": {\n            \"driverId\": 607759,\n            \"message\": \"CabRequestAccepted\",\n            \"tripId\": 5309,\n            \"tripCode\": \"GNT43W74\",\n            \"driverName\": \"C\\u00f4ng Ph\\u01b0\\u01a1ng \\u0110\\u00f4ng \",\n            \"driverPhone\": \"0977212594\",\n            \"rating\": 3.5,\n            \"appVersion\": \"0\",\n            \"tripVerificationCode\": 9399,\n            \"type\": \"Deliver\"\n        },\n        \"type\": \"0\",\n        \"notification\": {\n            \"title\": \"Giao hàng GNT43W74: Tìm thấy tài xế\",\n            \"content\": \"Đơn hàng GNT43W74 đã tìm thấy tài xế.\"\n        }\n    }",
          "type": "json"
        }
      ]
    },
    "filename": "api/index.js",
    "groupTitle": "Android"
  },
  {
    "type": "Notification",
    "url": "driver_arrived_notification.json",
    "title": "4. Nhận notification khi tài xế đã đến điểm đón",
    "name": "4__Nh_n_notification_khi_t_i_x_______n__i_m___n",
    "group": "Android",
    "description": "<p>Noti được server trả về máy Khách hàng khi tài xế đến điểm đón</p>",
    "version": "1.0.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "action",
            "description": "<p>Mã hành động khi nhận Notification</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>title của notification</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "driverName",
            "description": "<p>Tên tài xế</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "rideNo",
            "description": "<p>Số chuyến đi</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "tripId",
            "description": "<p>Mã Id chuyến đi</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "driverId",
            "description": "<p>Mã Id của Tài xế</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Tiêu đề thông báo</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>Nội dung thông báo (hiển thị ở notification điện thoại)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Notification-Example:",
          "content": "{\n        \"action\": \"OPEN_SCREEN\",\n        \"data\": {\n            \"message\": \"DriverArrived\",\n            \"driverName\": \"C\\u00f4ng Ph\\u01b0\\u01a1ng \\u0110\\u00f4ng \",\n            \"rideNo\": \"54604293\",\n            \"tripId\": \"5308\",\n            \"driverId\": 607759\n        },\n        \"notification\": {\n            \"title\": \"Xe máy : Đang đến\",\n            \"content\": \"Tài xế  đang đến.\"\n        }\n    }",
          "type": "json"
        }
      ]
    },
    "filename": "api/index.js",
    "groupTitle": "Android"
  },
  {
    "type": "Notification",
    "url": "complete_delivery_point.json",
    "title": "5. Nhận notification khi tài xế hoàn thành điểm giao",
    "name": "5__Nh_n_notification_khi_t_i_x__ho_n_th_nh__i_m_giao",
    "group": "Android",
    "description": "<p>Noti được server trả về máy khách hàng khi tài xế hoàn thành điểm giao</p>",
    "version": "1.0.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "driverId",
            "description": "<p>Mã Id của Tài xế</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>title của notification</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>(in data)            loại chuyến đi/ tài xế (deliver/rider)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "reason",
            "description": "<p>lý do (nếu giao thất bại)</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "tripId",
            "description": "<p>Mã id chuyến đi</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "PointState",
            "description": "<p>Trạng thái điểm giao</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "tripPointId",
            "description": "<p>Mã id điểm giao</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "rtdId",
            "description": "<p>Mã requestId (yêu cầu)</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "iTripId",
            "description": "<p>Mã id chuyến đi</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "tripPointOrder",
            "description": "<p>Thứ tự của điểm giao</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "receiveAddress",
            "description": "<p>Địa chỉ điểm giao</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "receiveUserName",
            "description": "<p>Tên người nhận</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "receiveUserPhone",
            "description": "<p>Số điện thoại người nhận</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "note",
            "description": "<p>ghi chú cho điểm giao</p>"
          },
          {
            "group": "Success 200",
            "type": "float",
            "optional": false,
            "field": "latitude",
            "description": "<p>Vĩ độ điểm giao</p>"
          },
          {
            "group": "Success 200",
            "type": "float",
            "optional": false,
            "field": "longtitude",
            "description": "<p>Kinh độ điểm giao</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "updateTime",
            "description": "<p>Thời điểm cập nhật trạng thái</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "state",
            "description": "<p>Mã trạng thái của điểm giao</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "feeCod",
            "description": "<p>Giá trị thu hộ Cod</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "parcelName",
            "description": "<p>tên hàng hóa</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "parcelPrice",
            "description": "<p>Giá trị hàng hóa</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "tripCode",
            "description": "<p>Mã chữ chuyến đi ( ví dụ: GNT43W74)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "driverName",
            "description": "<p>Tên tài xế</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "driverPhone",
            "description": "<p>Số điện thoại tài xế</p>"
          },
          {
            "group": "Success 200",
            "type": "float",
            "optional": false,
            "field": "rating",
            "description": "<p>điểm đánh giá của tài xế</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "driverAppVersion",
            "description": "<p>Phiên bản app của tài xế</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Tiêu đề thông báo</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>Nội dung thông báo (hiển thị ở notification điện thoại)</p>"
          }
        ]
      }
    },
    "filename": "api/index.js",
    "groupTitle": "Android"
  },
  {
    "type": "Notification",
    "url": "complete_order.json",
    "title": "6. Nhận notification khi tài xế hoàn thành chuyến đi",
    "name": "6__Nh_n_notification_khi_t_i_x__ho_n_th_nh_chuy_n__i",
    "group": "Android",
    "description": "<p>Noti được server trả về máy khách hàng khi tài xế hoàn thành chuyến đi</p>",
    "version": "1.0.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "action",
            "description": "<p>Mã hành động khi nhận Notification</p>"
          },
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "ShowTripFare",
            "description": "<p>true/false show giá cước</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "driverId",
            "description": "<p>Mã Id của Tài xế</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>title của notification</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "driverName",
            "description": "<p>Tên của Tài xế</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "driverPhone",
            "description": "<p>Số điện thoại của Tài xế</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "rideNo",
            "description": "<p>Số chuyến đi</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "tripId",
            "description": "<p>Mã Id chuyến đi</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "tripCode",
            "description": "<p>Mã chữ chuyến đi (ví dụ: GNQZ12AK)</p>"
          },
          {
            "group": "Success 200",
            "type": "float",
            "optional": false,
            "field": "rating",
            "description": "<p>Điểm đánh giá của Tài xế</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "tupe",
            "description": "<p>(in data ) loại chuyến đi/ tài xế (deliver/rider)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Mã loại Notification</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Tiêu đề thông báo</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>Nội dung thông báo (hiển thị ở notification điện thoại)</p>"
          }
        ]
      }
    },
    "filename": "api/index.js",
    "groupTitle": "Android"
  }
] });
