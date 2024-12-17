<template>
  <view>
    <view class="container diy_view">
      <view>
        <view>
          <view class="">
            <uni-forms :modelValue="form"  v-if="is_view()">

              <uni-forms-item v-if="$check_field('get','corporate_name') || ($check_field('add','corporate_name') || $check_field('set','corporate_name'))" label="公司名称" name="corporate_name">
                            <uni-easyinput type="text" v-model="form['corporate_name']" v-if="user_group === '管理员' || (form['supplier_management_id'] && $check_field('set','corporate_name')) || (!form['supplier_management_id'] && $check_field('add','corporate_name'))" :disabled="disabledObj['corporate_name_isDisabled']" />
                <!-- 仅查看 -->
                <text v-else-if="$check_field('get','corporate_name')">
                  {{ form['corporate_name'] }}
                </text>
                          </uni-forms-item>
              <uni-forms-item v-if="$check_field('get','company_location') || ($check_field('add','company_location') || $check_field('set','company_location'))" label="公司地点" name="company_location">
                            <uni-easyinput type="text" v-model="form['company_location']" v-if="user_group === '管理员' || (form['supplier_management_id'] && $check_field('set','company_location')) || (!form['supplier_management_id'] && $check_field('add','company_location'))" :disabled="disabledObj['company_location_isDisabled']" />
                <!-- 仅查看 -->
                <text v-else-if="$check_field('get','company_location')">
                  {{ form['company_location'] }}
                </text>
                          </uni-forms-item>
              <uni-forms-item v-if="$check_field('get','person_in_charge') || ($check_field('add','person_in_charge') || $check_field('set','person_in_charge'))" label="负责人" name="person_in_charge">
                            <uni-easyinput type="text" v-model="form['person_in_charge']" v-if="user_group === '管理员' || (form['supplier_management_id'] && $check_field('set','person_in_charge')) || (!form['supplier_management_id'] && $check_field('add','person_in_charge'))" :disabled="disabledObj['person_in_charge_isDisabled']" />
                <!-- 仅查看 -->
                <text v-else-if="$check_field('get','person_in_charge')">
                  {{ form['person_in_charge'] }}
                </text>
                          </uni-forms-item>
              <uni-forms-item v-if="$check_field('get','contact_information') || ($check_field('add','contact_information') || $check_field('set','contact_information'))" label="联系方式" name="contact_information">
                            <uni-easyinput type="text" v-model="form['contact_information']" v-if="user_group === '管理员' || (form['supplier_management_id'] && $check_field('set','contact_information')) || (!form['supplier_management_id'] && $check_field('add','contact_information'))" :disabled="disabledObj['contact_information_isDisabled']" />
                <!-- 仅查看 -->
                <text v-else-if="$check_field('get','contact_information')">
                  {{ form['contact_information'] }}
                </text>
                          </uni-forms-item>
              <uni-forms-item v-if="$check_field('get','main_products') || ($check_field('add','main_products') || $check_field('set','main_products'))" label="主要产品" name="main_products">
                            <uni-easyinput type="text" v-model="form['main_products']" v-if="user_group === '管理员' || (form['supplier_management_id'] && $check_field('set','main_products')) || (!form['supplier_management_id'] && $check_field('add','main_products'))" :disabled="disabledObj['main_products_isDisabled']" />
                <!-- 仅查看 -->
                <text v-else-if="$check_field('get','main_products')">
                  {{ form['main_products'] }}
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
      field: "supplier_management_id",
      url_add: "~/api/supplier_management/add?",
      url_set: "~/api/supplier_management/set?",
      url_get_obj: "~/api/supplier_management/get_obj?",
      url_upload: "~/api/supplier_management/upload?",

      query: {
        "supplier_management_id": 0,
      },

      form: {
            "corporate_name":  '', // 公司名称
                    "company_location":  '', // 公司地点
                    "person_in_charge":  '', // 负责人
                    "contact_information":  '', // 联系方式
                    "main_products":  '', // 主要产品
                                "supplier_management_id": 0, // ID
                
              },
          disabledObj:{
                        "corporate_name_isDisabled": false,
                                "company_location_isDisabled": false,
                                "person_in_charge_isDisabled": false,
                                "contact_information_isDisabled": false,
                                "main_products_isDisabled": false,
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
            url: _self.$fullUrl('/api/supplier_management/upload?'),
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
            url: _self.$fullUrl('/api/supplier_management/upload?'),
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
        bl = this.$check_action('/supplier_management/table','add');
        console.log(bl ? "你有表格添加权限视作有添加权限" : "你没有表格添加权限");
      }
      if(!bl){
        bl = this.$check_action('/supplier_management/table','set');
        console.log(bl ? "你有表格添加权限视作有修改权限" : "你没有表格修改权限");
      }
      if(!bl){
        bl = this.$check_action('/supplier_management/view','add');
        console.log(bl ? "你有视图添加权限视作有添加权限" : "你没有视图添加权限");
      }
      if(!bl){
        bl = this.$check_action('/supplier_management/view','set');
        console.log(bl ? "你有视图修改权限视作有修改权限" : "你没有视图修改权限");
      }
      if(!bl){
        bl = this.$check_action('/supplier_management/view','get');
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
