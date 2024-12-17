<template>
  <view>
    <view class="container diy_view">
      <view>
        <view>
          <view class="">
            <uni-forms :modelValue="form"  v-if="is_view()">

              <uni-forms-item v-if="$check_field('get','product_number') || ($check_field('add','product_number') || $check_field('set','product_number'))" label="商品编号" name="product_number">
                            <uni-easyinput type="text" v-model="form['product_number']" v-if="user_group === '管理员' || (form['procurement_information_id'] && $check_field('set','product_number')) || (!form['procurement_information_id'] && $check_field('add','product_number'))" :disabled="disabledObj['product_number_isDisabled']" />
                <!-- 仅查看 -->
                <text v-else-if="$check_field('get','product_number')">
                  {{ form['product_number'] }}
                </text>
                          </uni-forms-item>
              <uni-forms-item v-if="$check_field('get','product_name') || ($check_field('add','product_name') || $check_field('set','product_name'))" label="商品名称" name="product_name">
                            <uni-easyinput type="text" v-model="form['product_name']" v-if="user_group === '管理员' || (form['procurement_information_id'] && $check_field('set','product_name')) || (!form['procurement_information_id'] && $check_field('add','product_name'))" :disabled="disabledObj['product_name_isDisabled']" />
                <!-- 仅查看 -->
                <text v-else-if="$check_field('get','product_name')">
                  {{ form['product_name'] }}
                </text>
                          </uni-forms-item>
              <uni-forms-item v-if="$check_field('get','purchase_date') || ($check_field('add','purchase_date') || $check_field('set','purchase_date'))" label="采购日期" name="purchase_date">
                    <uni-datetime-picker v-if="user_group === '管理员' || (form['procurement_information_id'] && $check_field('set','purchase_date')) || (!form['procurement_information_id'] && $check_field('add','purchase_date'))" v-model="form['purchase_date']" type="date" :disabled="disabledObj['purchase_date_isDisabled']" />
                <!-- 仅查看 -->
                <text v-else-if="$check_field('get','purchase_date')">
                  {{ form['purchase_date'] }}
                </text>
                  </uni-forms-item>
              <uni-forms-item v-if="$check_field('get','supplier') || ($check_field('add','supplier') || $check_field('set','supplier'))" label="供应商" name="supplier">
                    <uni-data-select
                  v-model="form.supplier"
                  :localdata="list_supplier"
                  :clear="!disabledObj['supplier_isDisabled']"
                  :disabled="disabledObj['supplier_isDisabled']"
                  v-if="user_group === '管理员' || (form['procurement_information_id'] && $check_field('set','supplier')) || (!form['procurement_information_id'] && $check_field('add','supplier'))"
                ></uni-data-select>
                <!-- 仅查看 -->
                <text v-else-if="$check_field('get','supplier')">
                  {{ form['supplier'] }}
                </text>
                  </uni-forms-item>
              <uni-forms-item v-if="$check_field('get','procurement_personnel') || ($check_field('add','procurement_personnel') || $check_field('set','procurement_personnel'))" label="采购人员" name="procurement_personnel">
                            <uni-easyinput type="text" v-model="form['procurement_personnel']" v-if="user_group === '管理员' || (form['procurement_information_id'] && $check_field('set','procurement_personnel')) || (!form['procurement_information_id'] && $check_field('add','procurement_personnel'))" :disabled="disabledObj['procurement_personnel_isDisabled']" />
                <!-- 仅查看 -->
                <text v-else-if="$check_field('get','procurement_personnel')">
                  {{ form['procurement_personnel'] }}
                </text>
                          </uni-forms-item>
              <uni-forms-item v-if="$check_field('get','purchase_quantity') || ($check_field('add','purchase_quantity') || $check_field('set','purchase_quantity'))" label="采购数量" name="purchase_quantity">
                            <uni-easyinput type="text" v-model="form['purchase_quantity']" v-if="user_group === '管理员' || (form['procurement_information_id'] && $check_field('set','purchase_quantity')) || (!form['procurement_information_id'] && $check_field('add','purchase_quantity'))" :disabled="disabledObj['purchase_quantity_isDisabled']" />
                <!-- 仅查看 -->
                <text v-else-if="$check_field('get','purchase_quantity')">
                  {{ form['purchase_quantity'] }}
                </text>
                          </uni-forms-item>
              <uni-forms-item v-if="$check_field('get','purchase_price') || ($check_field('add','purchase_price') || $check_field('set','purchase_price'))" label="采购价格" name="purchase_price">
                            <uni-easyinput type="text" v-model="form['purchase_price']" v-if="user_group === '管理员' || (form['procurement_information_id'] && $check_field('set','purchase_price')) || (!form['procurement_information_id'] && $check_field('add','purchase_price'))" :disabled="disabledObj['purchase_price_isDisabled']" />
                <!-- 仅查看 -->
                <text v-else-if="$check_field('get','purchase_price')">
                  {{ form['purchase_price'] }}
                </text>
                          </uni-forms-item>
              <uni-forms-item label="审核状态" name="examine_state">
                <uni-data-select
                    v-model="form['examine_state']"
                    :localdata="list_examine_state"
                    v-if="user_group === '管理员' || (form['examine_state'] && $check_examine()) || (!form['examine_state'] && $check_examine())"
                ></uni-data-select>
                <text v-else>{{form["examine_state"]}}</text>
              </uni-forms-item>
              <uni-forms-item label="审核回复" name="examine_reply">
                <uni-easyinput type="text" placeholder="请输入审核回复" v-model="form['examine_reply']"
                               v-if="user_group === '管理员' || (form['examine_reply'] && $check_examine()) || (!form['examine_reply'] && $check_examine())" />
                <!-- 仅查看 -->
                <text v-else>{{form["examine_reply"]}}</text>
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
      field: "procurement_information_id",
      url_add: "~/api/procurement_information/add?",
      url_set: "~/api/procurement_information/set?",
      url_get_obj: "~/api/procurement_information/get_obj?",
      url_upload: "~/api/procurement_information/upload?",

      query: {
        "procurement_information_id": 0,
      },

      form: {
            "product_number":  '', // 商品编号
                    "product_name":  '', // 商品名称
                    "purchase_date": this.$toTime(new Date().getTime(), "yyyy-MM-dd"),
                    "supplier":  '', // 供应商
                    "procurement_personnel":  '', // 采购人员
                    "purchase_quantity":  '', // 采购数量
                    "purchase_price":  '', // 采购价格
                        "examine_state": "未审核",
                    "examine_reply": "",
                    "procurement_information_id": 0, // ID
                
              },
          disabledObj:{
                        "product_number_isDisabled": false,
                                "product_name_isDisabled": false,
                                "purchase_date_isDisabled": false,
                                "supplier_isDisabled": false,
                                "procurement_personnel_isDisabled": false,
                                "purchase_quantity_isDisabled": false,
                                "purchase_price_isDisabled": false,
                                  },
                                                                                  // 供应商选项列表
          list_supplier: [],
                                                                                              list_examine_state:[{value:"未审核",text:"未审核"},{value:"已通过",text:"已通过"},{value:"未通过",text:"未通过"}],
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
            url: _self.$fullUrl('/api/procurement_information/upload?'),
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
            url: _self.$fullUrl('/api/procurement_information/upload?'),
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
                              if (this.form["purchase_date"] && JSON.stringify(this.form["purchase_date"]).indexOf("-")===-1) {
        this.form["purchase_date"] = this.$toTime(parseInt(this.form["purchase_date"]), "yyyy-MM-dd")
      }
                                          uni.db.del("form");
      return param;
    },
        
            
            
            /**
     * 获取供应商列表
     */
    async get_list_supplier() {
              var json = await this.$get("~/api/supplier_management/get_list?");
      if(json.result && json.result.list){
        json.result.list.map((o) => this.list_supplier.push({value:o.corporate_name,text:o.corporate_name}));
      }
      else if(json.error){
        console.error(json.error);
      }
        },
        
            
            
            
    
    /**
     * 获取对象之后
     * @param {Object} json
     * @param {Object} func
     */
    get_obj_after(json, func){
                              if (this.form["purchase_date"] && JSON.stringify(this.form["purchase_date"]).indexOf("-")===-1) {
        this.form["purchase_date"] = this.$toTime(parseInt(this.form["purchase_date"]),"yyyy-MM-dd")
      }
                                        },

    is_view(){
      var bl = this.user_group == "管理员";

      if(!bl){
        bl = this.$check_action('/procurement_information/table','add');
        console.log(bl ? "你有表格添加权限视作有添加权限" : "你没有表格添加权限");
      }
      if(!bl){
        bl = this.$check_action('/procurement_information/table','set');
        console.log(bl ? "你有表格添加权限视作有修改权限" : "你没有表格修改权限");
      }
      if(!bl){
        bl = this.$check_action('/procurement_information/view','add');
        console.log(bl ? "你有视图添加权限视作有添加权限" : "你没有视图添加权限");
      }
      if(!bl){
        bl = this.$check_action('/procurement_information/view','set');
        console.log(bl ? "你有视图修改权限视作有修改权限" : "你没有视图修改权限");
      }
      if(!bl){
        bl = this.$check_action('/procurement_information/view','get');
        console.log(bl ? "你有视图查询权限视作有查询权限" : "你没有视图查询权限");
      }

      console.log(bl ? "具有当前页面的查看权，请注意这不代表你有字段的查看权" : "无权查看当前页，请注意即便有字段查询权限没有页面查询权限也不行");

      return bl;
    },

  },
  created() {
                                this.get_list_supplier();
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
