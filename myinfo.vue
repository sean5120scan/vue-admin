<template>
	<div>	 
	  <div class="header">  	 
	  	<router-link to="/myself" slot="left" class="alink">
        <img src="../asset/icons/箭头.svg" alt="" class="leftArrow">
      </router-link>
        <p class="avata"><img :src="'http://localhost:8888/'+avatarImg" alt="" class="avatarImg"></p>
          <label for="file" id="lab"></label>
          <input type="file" accept="image/*" id="file" @change="uploadImg">  

	  </div>
	  <div>
	        <mt-field label="真实姓名" placeholder="请输入姓名"  type="username" v-model="username"></mt-field>
            <mt-field label="手机号" placeholder="手机号" type="tel" v-model="phone"></mt-field>
              <mt-cell title="性别"  is-link v-model="genderVal" value="" @click.native="showGender" ></mt-cell>
              <mt-cell title="出生年月"  is-link v-model="birthday" @click.native="showTime"  ></mt-cell>
              <mt-datetime-picker 
                v-model="birthday"
                ref="picker"
                type="date"
                @confirm="handleConfirm">          
              </mt-datetime-picker>
         <mt-actionsheet :actions="actions" v-model="sheetVisible"></mt-actionsheet> 
	     <mt-field label="收货地址" placeholder="请输入地址" type="username"  v-model="shippingAddress">
	  	 </mt-field>
	  </div>  
      <div> <mt-button size="large" type="danger" @click="submit" style="margin-top:20px;">提交</mt-button></div>
	</div>
</template>

<script>
import { Field } from 'mint-ui';
import { Header } from 'mint-ui';
import { Cell } from 'mint-ui';
import { Button } from 'mint-ui';
import { Radio } from 'mint-ui';
import { Actionsheet } from 'mint-ui';
import { DatetimePicker } from 'mint-ui';
import { Picker } from 'mint-ui';

export default{
 name:"myinfo",
data:function(){
return {  
    actions:[
               {name:"男",method:()=>{
               		// console.log(this.gender);
                   this.genderVal="男"

               }},
              {name:"女",method:()=>{

                   this.genderVal="女"

              }},
                {name:"保密",method:function(){
                	
                	this.genderVal="保密"
               }}
              ],
          sheetVisible:false,  
          genderVal:"",
          username:"",
          phone:"",
          birthday:"" ,
          shippingAddress:"",
          pickerValue:"",
          imgSrc:"", 
          file:"",
          avatarImg:""
   } 
 },
  created(){     
  //获取头像信息  
        this.$store.dispatch("getheadimg",{       
          $http:this.$http
        }).then((responese)=>{   
            if(responese.data.avatar){
                 this.avatarImg=responese.data.avatar
            }else{
                this.avatarImg = 'public/uploads/user/login.png'
            }
        });
   //获取个人信息    
       this.$store.dispatch("getPersonalInfo",
       {       
         $http:this.$http
       }).then((responese)=>{  
         console.log(responese.data) 
           if(responese.data){ 
              let date=responese.data.birthday
             // let birthdayFormat=date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getate()
             // this.birthday=birthdayFormat;
              this.shippingAddress=responese.data.shippingAddress;           
              this.genderVal=responese.data.gender;
           }
       })
  },
 methods:{  
      showGender(){           //显示性别弹层
          this.sheetVisible=true;           
      },
      showTime(){             //显示时间弹层
        this.$refs.picker.open(); 

      },
      handleConfirm(){   //关闭日期控件并获取日期数据
      	this.$refs.picker.close();
        let val=this.birthday.getFullYear()+"-"+(this.birthday.getMonth()+1)+"-"+this.birthday.getDate();
        this.birthday=val
      },
      submit(){          //提交信息    
          this.$store.dispatch("addInfo",{
             $http:this.$http,
             data:{
             	gender :this.genderVal,
             	birthday:this.birthday,
             	shippingAddress:this.shippingAddress 
             }
          }).then(function(responese){
              
              this.genderVal=responese.data.gender;
              this.birthday=responese.data.birthday;                          
          })
      },
      uploadImg(e){   //上传图头像
        this.file=e.target.files[0];     
        let fd=new FileReader();
        fd.readAsDataURL(this.file);
        fd.onload=()=>{         
            this.imgSrc=fd.result;
        };
       
        this.$store.dispatch("updateimg",{       
          $http:this.$http,
          avatar:e.target.files[0]
        })
      }
 }


}
</script>
<style scoped>

.header{height: 150px;background:#f90;}
.avata {width: 100%;border-radius: 50%;margin:0;text-align: center;padding-top:10px;}
.avata img{width: 100%;width: 100px; height: 100px;}
#file{position:absolute;top:-1000px;left:-1000px}
#lab{width:120px; height:120px; position: absolute;top:5px; left: 120px;z-index: 100}
.leftArrow{width:1.5rem;}
.alink{position: absolute;left: 10px;top:50px;}
.avatarImg{width: 100px;height: 100px;border-radius: 50%}
</style>