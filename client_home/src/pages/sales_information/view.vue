<template>
  <view>
    <view class="container diy_view">
      <view>
        <view>
          <view class="">
            <uni-forms :modelValue="form"  v-if="is_view()">

              <uni-forms-item v-if="$check_field('get','product_number') || ($check_field('add','product_number') || $check_field('set','product_number'))" label="商品编号" name="product_number">
                            <uni-easyinput type="text" v-model="form['product_number']" v-if="user_group === '管理员' || (form['sales_information_id'] && $check_field('set','product_number')) || (!form['sales_information_id'] && $check_field('add','product_number'))" :disabled="disabledObj['product_number_isDisabled']" />
                <!-- 仅查看 -->
                <text v-else-if="$check_field('get','product_number')">
                  {{ form['product_number'] }}
                </text>
                          </uni-forms-item>
              <uni-forms-item v-if="$check_field('get','product_name') || ($check_field('add','product_name') || $check_field('set','product_name'))" label="商品名称" name="product_name">
                            <uni-easyinput type="text" v-model="form['product_name']" v-if="user_group === '管理员' || (form['sales_information_id'] && $check_field('set','product_name')) || (!form['sales_information_id'] && $check_field('add','product_name'))" :disabled="disabledObj['product_name_isDisabled']" />
                <!-- 仅查看 -->
                <text v-else-if="$check_field('get','product_name')">
                  {{ form['product_name'] }}
                </text>
                          </uni-forms-item>
              <uni-forms-item v-if="$check_field('get','salesman') || ($check_field('add','salesman') || $check_field('set','salesman'))" label="销售人员" name="salesman">
                            <uni-easyinput type="text" v-model="form['salesman']" v-if="user_group === '管理员' || (form['sales_information_id'] && $check_field('set','salesman')) || (!form['sales_information_id'] && $check_field('add','salesman'))" :disabled="disabledObj['salesman_isDisabled']" />
                <!-- 仅查看 -->
                <text v-else-if="$check_field('get','salesman')">
                  {{ form['salesman'] }}
                </text>
                          </uni-forms-item>
              <uni-forms-item v-if="$check_field('get','commodity_price') || ($check_field('add','commodity_price') || $check_field('set','commodity_price'))" label="商品价格" name="commodity_price">
                            <uni-easyinput type="text" v-model="form['commodity_price']" v-if="user_group === '管理员' || (form['sales_information_id'] && $check_field('set','commodity_price')) || (!form['sales_information_id'] && $check_field('add','commodity_price'))" :disabled="disabledObj['commodity_price_isDisabled']" />
                <!-- 仅查看 -->
                <text v-else-if="$check_field('get','commodity_price')">
                  {{ form['commodity_price'] }}
                </text>
                          </uni-forms-item>
              <uni-forms-item v-if="$check_field('get','sales_date') || ($check_field('add','sales_date') || $check_field('set','sales_date'))" label="销售日期" name="sales_date">
                    <uni-datetime-picker v-if="user_group === '管理员' || (form['sales_information_id'] && $check_field('set','sales_date')) || (!form['sales_information_id'] && $check_field('add','sales_date'))" v-model="form['sales_date']" type="date" :disabled="disabledObj['sales_date_isDisabled']" />
                <!-- 仅查看 -->
                <text v-else-if="$check_field('get','sales_date')">
                  {{ form['sales_date'] }}
                </text>
                  </uni-forms-item>
              <uni-forms-item v-if="$check_field('get','sales_volumes') || ($check_field('add','sales_volumes') || $check_field('set','sales_volumes'))" label="销售数量" name="sales_volumes">
                            <uni-easyinput type="text" v-model="form['sales_volumes']" v-if="user_group === '管理员' || (form['sales_information_id'] && $check_field('set','sales_volumes')) || (!form['sales_information_id'] && $check_field('add','sales_volumes'))" :disabled="disabledObj['sales_volumes_isDisabled']" />
                <!-- 仅查看 -->
                <text v-else-if="$check_field('get','sales_volumes')">
                  {{ form['sales_volumes'] }}
                </text>
                          </uni-forms-item>
              <uni-forms-item v-if="$check_field('get','sales_amount') || ($check_field('add','sales_amount') || $check_field('set','sales_amount'))" label="销售金额" name="sales_amount">
                            <uni-easyinput type="text" v-model="form['sales_amount']" v-if="user_group === '管理员' || (form['sales_information_id'] && $check_field('set','sales_amount')) || (!form['sales_information_id'] && $check_field('add','sales_amount'))"  @focus="set_sales_amount()" :disabled="disabledObj['sales_amount_isDisabled']" />
                <!-- 仅查看 -->
                <text v-else-if="$check_field('get','sales_amount')">
                  {{ form['sales_amount'] }}
                </text>
                          </uni-forms-item>
              <uni-forms-item v-if="$check_field('get','customer_name') || ($check_field('add','customer_name') || $check_field('set','customer_name'))" label="客户姓名" name="customer_name">
                            <uni-easyinput type="text" v-model="form['customer_name']" v-if="user_group === '管理员' || (form['sales_information_id'] && $check_field('set','customer_name')) || (!form['sales_information_id'] && $check_field('add','customer_name'))" :disabled="disabledObj['customer_name_isDisabled']" />
                <!-- 仅查看 -->
                <text v-else-if="$check_field('get','customer_name')">
                  {{ form['customer_name'] }}
                </text>
                          </uni-forms-item>
              <uni-forms-item v-if="$check_field('get','contact_information') || ($check_field('add','contact_information') || $check_field('set','contact_information'))" label="联系方式" name="contact_information">
                            <uni-easyinput type="text" v-model="form['contact_information']" v-if="user_group === '管理员' || (form['sales_information_id'] && $check_field('set','contact_information')) || (!form['sales_information_id'] && $check_field('add','contact_information'))" :disabled="disabledObj['contact_information_isDisabled']" />
                <!-- 仅查看 -->
                <text v-else-if="$check_field('get','contact_information')">
                  {{ form['contact_information'] }}
                </text>
                          </uni-forms-item>
              <uni-forms-item v-if="$check_field('get','sales_remarks') || ($check_field('add','sales_remarks') || $check_field('set','sales_remarks'))" label="销售备注" name="sales_remarks">
                    <uni-easyinput type="textarea" v-model="form['sales_remarks']" v-if="user_group === '管理员' || (form['sales_information_id'] && $check_field('set','sales_remarks')) || (!form['sales_information_id'] && $check_field('add','sales_remarks'))" :disabled="disabledObj['sales_remarks_isDisabled']" />
                <!-- 仅查看 -->
                <text v-else-if="$check_field('get','sales_remarks')">
                  {{ form['sales_remarks'] }}
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
      field: "sales_information_id",
      url_add: "~/api/sales_information/add?",
      url_set: "~/api/sales_information/set?",
      url_get_obj: "~/api/sales_information/get_obj?",
      url_upload: "~/api/sales_information/upload?",

      query: {
        "sales_information_id": 0,
      },

      form: {
            "product_number":  '', // 商品编号
                    "product_name":  '', // 商品名称
                    "salesman":  '', // 销售人员
                    "commodity_price":  '', // 商品价格
                    "sales_date": this.$toTime(new Date().getTime(), "yyyy-MM-dd"),
                    "sales_volumes":  0 , // 销售数量
                    "sales_amount":  '', // 销售金额
                    "customer_name":  '', // 客户姓名
                    "contact_information":  '', // 联系方式
                    "sales_remarks":  '', // 销售备注
                                "sales_information_id": 0, // ID
                
              },
          disabledObj:{
                        "product_number_isDisabled": false,
                                "product_name_isDisabled": false,
                                "salesman_isDisabled": false,
                                "commodity_price_isDisabled": false,
                                "sales_date_isDisabled": false,
                                                    "sales_amount_isDisabled": false,
                                "customer_name_isDisabled": false,
                                "contact_information_isDisabled": false,
                                "sales_remarks_isDisabled": false,
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
            url: _self.$fullUrl('/api/sales_information/upload?'),
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
            url: _self.$fullUrl('/api/sales_information/upload?'),
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
                                              if (this.form["sales_date"] && JSON.stringify(this.form["sales_date"]).indexOf("-")===-1) {
        this.form["sales_date"] = this.$toTime(parseInt(this.form["sales_date"]), "yyyy-MM-dd")
      }
                                                  uni.db.del("form");
      return param;
    },
        
            
            
            
            
            
            
                            set_sales_amount(){
      this.form.sales_amount = parseFloat(this.form.commodity_price) * parseFloat(this.form.sales_volumes)
      let r = /^\+?[1-9][0-9]*$/; // 正整数
      if(!r.test(this.form.sales_amount) ){
        this.form.sales_amount = this.form.sales_amount.toFixed(2);
      }
    },
                                
            
            
    
    /**
     * 获取对象之后
     * @param {Object} json
     * @param {Object} func
     */
    get_obj_after(json, func){
                                              if (this.form["sales_date"] && JSON.stringify(this.form["sales_date"]).indexOf("-")===-1) {
        this.form["sales_date"] = this.$toTime(parseInt(this.form["sales_date"]),"yyyy-MM-dd")
      }
                                                },

    is_view(){
      var bl = this.user_group == "管理员";

      if(!bl){
        bl = this.$check_action('/sales_information/table','add');
        console.log(bl ? "你有表格添加权限视作有添加权限" : "你没有表格添加权限");
      }
      if(!bl){
        bl = this.$check_action('/sales_information/table','set');
        console.log(bl ? "你有表格添加权限视作有修改权限" : "你没有表格修改权限");
      }
      if(!bl){
        bl = this.$check_action('/sales_information/view','add');
        console.log(bl ? "你有视图添加权限视作有添加权限" : "你没有视图添加权限");
      }
      if(!bl){
        bl = this.$check_action('/sales_information/view','set');
        console.log(bl ? "你有视图修改权限视作有修改权限" : "你没有视图修改权限");
      }
      if(!bl){
        bl = this.$check_action('/sales_information/view','get');
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
