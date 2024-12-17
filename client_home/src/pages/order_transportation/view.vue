<template>
  <view>
    <view class="container diy_view">
      <view>
        <view>
          <view class="">
            <uni-forms :modelValue="form"  v-if="is_view()">

              <uni-forms-item v-if="$check_field('get','product_number') || ($check_field('add','product_number') || $check_field('set','product_number'))" label="商品编号" name="product_number">
                            <uni-easyinput type="text" v-model="form['product_number']" v-if="user_group === '管理员' || (form['order_transportation_id'] && $check_field('set','product_number')) || (!form['order_transportation_id'] && $check_field('add','product_number'))" :disabled="disabledObj['product_number_isDisabled']" />
                <!-- 仅查看 -->
                <text v-else-if="$check_field('get','product_number')">
                  {{ form['product_number'] }}
                </text>
                          </uni-forms-item>
              <uni-forms-item v-if="$check_field('get','product_name') || ($check_field('add','product_name') || $check_field('set','product_name'))" label="商品名称" name="product_name">
                            <uni-easyinput type="text" v-model="form['product_name']" v-if="user_group === '管理员' || (form['order_transportation_id'] && $check_field('set','product_name')) || (!form['order_transportation_id'] && $check_field('add','product_name'))" :disabled="disabledObj['product_name_isDisabled']" />
                <!-- 仅查看 -->
                <text v-else-if="$check_field('get','product_name')">
                  {{ form['product_name'] }}
                </text>
                          </uni-forms-item>
              <uni-forms-item v-if="$check_field('get','salesman') || ($check_field('add','salesman') || $check_field('set','salesman'))" label="销售人员" name="salesman">
                            <uni-easyinput type="text" v-model="form['salesman']" v-if="user_group === '管理员' || (form['order_transportation_id'] && $check_field('set','salesman')) || (!form['order_transportation_id'] && $check_field('add','salesman'))" :disabled="disabledObj['salesman_isDisabled']" />
                <!-- 仅查看 -->
                <text v-else-if="$check_field('get','salesman')">
                  {{ form['salesman'] }}
                </text>
                          </uni-forms-item>
              <uni-forms-item v-if="$check_field('get','customer_name') || ($check_field('add','customer_name') || $check_field('set','customer_name'))" label="客户姓名" name="customer_name">
                            <uni-easyinput type="text" v-model="form['customer_name']" v-if="user_group === '管理员' || (form['order_transportation_id'] && $check_field('set','customer_name')) || (!form['order_transportation_id'] && $check_field('add','customer_name'))" :disabled="disabledObj['customer_name_isDisabled']" />
                <!-- 仅查看 -->
                <text v-else-if="$check_field('get','customer_name')">
                  {{ form['customer_name'] }}
                </text>
                          </uni-forms-item>
              <uni-forms-item v-if="$check_field('get','contact_number') || ($check_field('add','contact_number') || $check_field('set','contact_number'))" label="联系电话" name="contact_number">
                            <uni-easyinput type="text" v-model="form['contact_number']" v-if="user_group === '管理员' || (form['order_transportation_id'] && $check_field('set','contact_number')) || (!form['order_transportation_id'] && $check_field('add','contact_number'))" :disabled="disabledObj['contact_number_isDisabled']" />
                <!-- 仅查看 -->
                <text v-else-if="$check_field('get','contact_number')">
                  {{ form['contact_number'] }}
                </text>
                          </uni-forms-item>
              <uni-forms-item v-if="$check_field('get','delivery_tools') || ($check_field('add','delivery_tools') || $check_field('set','delivery_tools'))" label="配送工具" name="delivery_tools">
                            <uni-easyinput type="text" v-model="form['delivery_tools']" v-if="user_group === '管理员' || (form['order_transportation_id'] && $check_field('set','delivery_tools')) || (!form['order_transportation_id'] && $check_field('add','delivery_tools'))" :disabled="disabledObj['delivery_tools_isDisabled']" />
                <!-- 仅查看 -->
                <text v-else-if="$check_field('get','delivery_tools')">
                  {{ form['delivery_tools'] }}
                </text>
                          </uni-forms-item>
              <uni-forms-item v-if="$check_field('get','drivers_name') || ($check_field('add','drivers_name') || $check_field('set','drivers_name'))" label="司机姓名" name="drivers_name">
                            <uni-easyinput type="text" v-model="form['drivers_name']" v-if="user_group === '管理员' || (form['order_transportation_id'] && $check_field('set','drivers_name')) || (!form['order_transportation_id'] && $check_field('add','drivers_name'))" :disabled="disabledObj['drivers_name_isDisabled']" />
                <!-- 仅查看 -->
                <text v-else-if="$check_field('get','drivers_name')">
                  {{ form['drivers_name'] }}
                </text>
                          </uni-forms-item>
              <uni-forms-item v-if="$check_field('get','contact_information') || ($check_field('add','contact_information') || $check_field('set','contact_information'))" label="联系方式" name="contact_information">
                            <uni-easyinput type="text" v-model="form['contact_information']" v-if="user_group === '管理员' || (form['order_transportation_id'] && $check_field('set','contact_information')) || (!form['order_transportation_id'] && $check_field('add','contact_information'))" :disabled="disabledObj['contact_information_isDisabled']" />
                <!-- 仅查看 -->
                <text v-else-if="$check_field('get','contact_information')">
                  {{ form['contact_information'] }}
                </text>
                          </uni-forms-item>
              <uni-forms-item v-if="$check_field('get','route_delivery') || ($check_field('add','route_delivery') || $check_field('set','route_delivery'))" label="路线配送" name="route_delivery">
                            <uni-easyinput type="text" v-model="form['route_delivery']" v-if="user_group === '管理员' || (form['order_transportation_id'] && $check_field('set','route_delivery')) || (!form['order_transportation_id'] && $check_field('add','route_delivery'))" :disabled="disabledObj['route_delivery_isDisabled']" />
                <!-- 仅查看 -->
                <text v-else-if="$check_field('get','route_delivery')">
                  {{ form['route_delivery'] }}
                </text>
                          </uni-forms-item>
              <uni-forms-item v-if="$check_field('get','transportation_remarks') || ($check_field('add','transportation_remarks') || $check_field('set','transportation_remarks'))" label="运输备注" name="transportation_remarks">
                    <uni-easyinput type="textarea" v-model="form['transportation_remarks']" v-if="user_group === '管理员' || (form['order_transportation_id'] && $check_field('set','transportation_remarks')) || (!form['order_transportation_id'] && $check_field('add','transportation_remarks'))" :disabled="disabledObj['transportation_remarks_isDisabled']" />
                <!-- 仅查看 -->
                <text v-else-if="$check_field('get','transportation_remarks')">
                  {{ form['transportation_remarks'] }}
                </text>
                  </uni-forms-item>


            </uni-forms>
            <view class="form_button">
              <button size="mini" type="primary" @click="submit()" class="primary_btn">提交</button>
              <button size="mini" @click="cancel()">取消</button>
            </view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import mixin from "@/libs/mixins/page.js";

export default {
  mixins: [mixin],
  data() {
    return {
      field: "order_transportation_id",
      url_add: "~/api/order_transportation/add?",
      url_set: "~/api/order_transportation/set?",
      url_get_obj: "~/api/order_transportation/get_obj?",
      url_upload: "~/api/order_transportation/upload?",

      query: {
        "order_transportation_id": 0,
      },

      form: {
            "product_number":  '', // 商品编号
                    "product_name":  '', // 商品名称
                    "salesman":  '', // 销售人员
                    "customer_name":  '', // 客户姓名
                    "contact_number":  '', // 联系电话
                    "delivery_tools":  '', // 配送工具
                    "drivers_name":  '', // 司机姓名
                    "contact_information":  '', // 联系方式
                    "route_delivery":  '', // 路线配送
                    "transportation_remarks":  '', // 运输备注
                                "order_transportation_id": 0, // ID
                
              },
          disabledObj:{
                        "product_number_isDisabled": false,
                                "product_name_isDisabled": false,
                                "salesman_isDisabled": false,
                                "customer_name_isDisabled": false,
                                "contact_number_isDisabled": false,
                                "delivery_tools_isDisabled": false,
                                "drivers_name_isDisabled": false,
                                "contact_information_isDisabled": false,
                                "route_delivery_isDisabled": false,
                                "transportation_remarks_isDisabled": false,
                                  },
                                                                                                                                                                                                                              }
  },
  methods: {
    changeLog(v,value){
      this.form[value] = v
    },
    /**
     * 上传文件
     * @param {Object} param文件参数
     */
    change_file(key_name){
      var _self = this;
      // 选择图像方法
      uni.chooseFile({
        count: 1,
        sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
        sourceType: ['album'], //从相册选择
        success: function(res) {
          const tempFilePaths = res.tempFilePaths;
          const uploadTask = uni.uploadFile({
            url: _self.$fullUrl('/api/order_transportation/upload?'),
            filePath: tempFilePaths[0],
            name: 'file',
            formData: {
              'i_want_to_customize': 'test'
            },
            header: {
              'x-auth-token': _self.$store.state.user.token
            },
            success: function(uploadFileRes) {
              var filename = JSON.parse(uploadFileRes.data).result.url
              _self.form[key_name] = filename
            }
          });

          uploadTask.onProgressUpdate(function(res) {
            _self.percent = res.progress;
            console.log('上传进度' + res.progress);
            console.log('已经上传的数据长度' + res.totalBytesSent);
            console.log('预期需要上传的数据总长度' + res.totalBytesExpectedToSend);
          });
        },
        error: function(e) {
          console.log(e);
        }
      });
    },
    /**
     * 上传图片
     * @param {Object} param文件参数
     */
    change_img(key_name){
      var _self = this;
      _self.upload_img_flag = false
      // 选择图像方法
      uni.chooseImage({
        count: 1,
        sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
        sourceType: ['album'], //从相册选择
        success: function(res) {
          const tempFilePaths = res.tempFilePaths;
          const uploadTask = uni.uploadFile({
            url: _self.$fullUrl('/api/order_transportation/upload?'),
            filePath: tempFilePaths[0],
            name: 'file',
            formData: {
              'i_want_to_customize': 'test'
            },
            header: {
              'x-auth-token': _self.$store.state.user.token
            },
            success: function(uploadFileRes) {
              var filename = JSON.parse(uploadFileRes.data).result.url
              _self.form[key_name] = filename
            }
          });

          uploadTask.onProgressUpdate(function(res) {
            _self.percent = res.progress;
            console.log('上传进度' + res.progress);
            console.log('已经上传的数据长度' + res.totalBytesSent);
            console.log('预期需要上传的数据总长度' + res.totalBytesExpectedToSend);
          });
        },
        error: function(e) {
          console.log(e);
        }
      });
    },
    /**
     * 获取对象后获取缓存表单
     * @param {Object} json
     * @param {Object} func
     */
    get_obj_before(param){
      var form = uni.db.get("form");
      if (form) {
        delete(form.examine_state)
        delete(form.examine_reply)
        this.obj = uni.push(this.obj ,form);
        this.form = uni.push(this.form ,form);
      }
      var arr = []
      for (let key in form) {
        arr.push(key)
      }
      for (var i=0;i<arr.length;i++){
        this.disabledObj[arr[i] + '_isDisabled'] = true
      }
                                                                                      uni.db.del("form");
      return param;
    },
        
            
            
            
            
            
            
            
            
            
    
    /**
     * 获取对象之后
     * @param {Object} json
     * @param {Object} func
     */
    get_obj_after(json, func){
                                                                                    },

    is_view(){
      var bl = this.user_group == "管理员";

      if(!bl){
        bl = this.$check_action('/order_transportation/table','add');
        console.log(bl ? "你有表格添加权限视作有添加权限" : "你没有表格添加权限");
      }
      if(!bl){
        bl = this.$check_action('/order_transportation/table','set');
        console.log(bl ? "你有表格添加权限视作有修改权限" : "你没有表格修改权限");
      }
      if(!bl){
        bl = this.$check_action('/order_transportation/view','add');
        console.log(bl ? "你有视图添加权限视作有添加权限" : "你没有视图添加权限");
      }
      if(!bl){
        bl = this.$check_action('/order_transportation/view','set');
        console.log(bl ? "你有视图修改权限视作有修改权限" : "你没有视图修改权限");
      }
      if(!bl){
        bl = this.$check_action('/order_transportation/view','get');
        console.log(bl ? "你有视图查询权限视作有查询权限" : "你没有视图查询权限");
      }

      console.log(bl ? "具有当前页面的查看权，请注意这不代表你有字段的查看权" : "无权查看当前页，请注意即便有字段查询权限没有页面查询权限也不行");

      return bl;
    },

  },
  created() {
                                                                                  },
}
</script>

<style scoped>
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.avatar-uploader .el-upload:hover {
  border-color: #409EFF;
}

.form_button{
  padding-bottom: 15px;
  display: flex;
}
.form_button button{
  width: 40%;
}
.query_select{
  border-color: rgb(229, 229, 229);
  background-color: rgb(255, 255, 255);
  border-radius: 4px;
  box-sizing: border-box;
  flex: 1;
  width: 100%;
  line-height: 2;
  font-size: 14px;
  height: 2.4em;
  min-height: 2.4em;
  display: block;
  outline:none;
}

.query_option{
  width: 100%;
}

.btn_add_img{
  color: #D3D3D3;
  text-align: center;
  border: 1px solid #eee;
  height: 5rem;
  width: 5rem;
  position: relative;
}
.btn_add_img text{
  font-size: 35px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
}
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}

.form_button {
  padding-bottom: 15px;
  display: flex;
}
.form_button button {
  width: 40%;
}
.query_select {
  border-color: rgb(229, 229, 229);
  background-color: rgb(255, 255, 255);
  border-radius: 4px;
  box-sizing: border-box;
  flex: 1;
  width: 100%;
  line-height: 2;
  font-size: 14px;
  height: 2.4em;
  min-height: 2.4em;
  display: block;
  outline: none;
}

.query_option {
  width: 100%;
}

.btn_add_img {
  color: #d3d3d3;
  text-align: center;
  border: 1px solid #eee;
  height: 5rem;
  width: 5rem;
  position: relative;
}
.btn_add_img text {
  font-size: 35px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
/*新样式*/
.uni-forms{
padding-top:1rem;
}
.uni-forms-item {
	padding: 6px 10px;
    background: #f8f6fc;
}
.uni-forms .is-input-border{
	border: 0;
}
.container{
	    -webkit-box-shadow: 0px 0px 0px #888888;
	    box-shadow: 0px 0px 0px #888888;
}
.form_button .primary_btn{
		background-color: #22B8B8;
		color: #FFFFFF;
	}
</style>
