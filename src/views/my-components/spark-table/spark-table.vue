<template> 
     
    <iframe  ref='myframe' id="myframe" name='myframe' frameborder="0" scrolling="auto"  :src="iframeSrc" ></iframe>


</template>
<script>
//frameborder="0" scrolling="no"
import Cookies from "js-cookie";
export default {
  data() {
    return {
      iframeSrc: ""
    };
  },
  created() {
    this.iframeSrc='http://api.bdc.jieyue.com/platform_party/spark/SPARK.html?email=' +Cookies.get('userM') +'&password=111111' ;
    // this.iframeSrc='http://172.18.101.163:8080/platform_party/spark/SPARK.html?email=' +Cookies.get('userM') +'&password=111111' ;
    // this.iframeSrc='C:\Users\windows\Desktop\xxx.html?email=' +Cookies.get('user') +'&password=' + Cookies.get('passwordM')  ;
    // this.iframeSrc = Cookies.get("spark.submit") + "/login";
  },
  mounted() {

  },
  methods: {
    
  }
};
</script>
<style>
.workbench {
  width: 100%;
  height: 100%;
}
iframe {
  width: 100%;
  height: 100%;
}
</style>

