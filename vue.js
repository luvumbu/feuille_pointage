var head = new Vue({
  el: '#head',
  data: {    
    title:"Bokonzi"
  }
})

var header = new Vue({
  el: '#header',
  data: {
    
    
  }
})

var section = new Vue({
  el: '#section',
  data: {
    w50p:"w50p",
    key_time_rest:"",    
    key_time_end:"",
    key_time_begin:"",    
    key_total_time:"",
    key_date:"",    
    info_time_rest:false,
    info_time_end:false,
    info_time_begin:false,
    result:""
  } , 
  methods: {
    time_rest(event) {
      this.key_time_rest= parseFloat(event.target.value) ;      
      this.info_time_rest=true;
      document.getElementById("exclamation_rest").className="";
      if(this.info_time_begin==true && this.info_time_end==true){
        
        this.key_time_begin= parseFloat(this.key_time_begin) ;
        this.key_time_end= parseFloat(this.key_time_end) ;
        this.result=this.key_time_end-this.key_time_begin-this.key_time_rest;
        if(this.result<1){
          this.result=false;
        }      
      }
  },
  time_end(event) {
    this.key_time_end= parseFloat(event.target.value) ;
    this.info_time_end=true;
    document.getElementById("exclamation_end").className="";
    this.key_time_begin= parseFloat(this.key_time_begin) ;
    this.key_time_end= parseFloat(this.key_time_end) ;
    this.result=this.key_time_end-this.key_time_begin-this.key_time_rest;
    if(this.result<0){
      this.result=false;
    }

},
time_begin(event) {
  console.log(event.target.value) ; 
  this.key_time_begin= parseFloat(event.target.value) ;
  this.info_time_begin=true;
  document.getElementById("exclamation_begin").className="";
  this.key_time_begin= parseFloat(this.key_time_begin) ;
  this.key_time_end= parseFloat(this.key_time_end) ;
  this.result=this.key_time_end-this.key_time_begin-this.key_time_rest;
  if(this.result<1){
    this.result=false;
  }
} ,
time_date(event) {
  this.key_date =event.target.value;
  document.getElementById("time_date").className="";
}

},
 
})

var footer = new Vue({
  el: '#footer',
  data: {
    
  }
})
 