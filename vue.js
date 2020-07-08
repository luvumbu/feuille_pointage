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
    key_time_rest:false,    
    key_time_end:false,
    key_time_begin:false,    
    key_total_time:false,
    key_nom:false,
    key_prenom:false,
    key_date:false,  
    key_intervention:false,
    key_entreprise:false,  
    info_time_rest:false,
    info_time_end:false,
    info_time_begin:false,
    result:false,
    key_change_all:0,
    x:0,
    y:0
  } , 
  methods: {
    time_rest(event) {
      this.key_change_all++;
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
    this.key_change_all++;
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
  this.key_change_all++;
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
} ,time_date(event) {
  this.key_change_all++;
  this.key_date =event.target.value;
  document.getElementById("time_date").className="";
}
,intervention(event) {
  this.key_change_all++;
  this.key_intervention =event.target.value;
  // document.getElementById("time_date").className="";
  if(event.target.value!=""){
    document.getElementById("intervention").className="";
    this.key_intervention=event.target.value;
  }else {
    document.getElementById("intervention").className="fas fa-exclamation-triangle";
  }  
}

,entreprise(event) {
  this.key_change_all++;
  this.key_entreprise =event.target.value;
  // document.getElementById("time_date").className="";
  if(event.target.value!=""){
    document.getElementById("entreprise").className="";
    this.key_entreprise=event.target.value;
  }else {
    document.getElementById("entreprise").className="fas fa-exclamation-triangle";
  }  
}
,nom(event) {
  this.key_change_all++;
  this.key_nom=event.target.value;
 
 if(event.target.value!=""){
document.getElementById("alert_nom").className="";
 }
 else{
document.getElementById("alert_nom").className="fas fa-exclamation-triangle";
 }
 
}
,prenom(event) {
  this.key_change_all++;
  this.key_prenom=event.target.value;
  if(event.target.value!=""){
document.getElementById("alert_prenom").className="";
   
  }
  else{
    document.getElementById("alert_prenom").className="fas fa-exclamation-triangle";
  }  
 },
 actionall() {
  this.key_change_all++;
   consol.log("action all ok");
 }
} ,

watch:{
  key_change_all:function(){    
       toto=0;
     

    if(this.key_nom!=false){
      toto++;
    }
    if(this.key_prenom!=false){
      toto++;
    }
    if(this.result!=false){
      toto++;
    }
    if(this.info_time_rest!=false){
      toto++;
    }
    if(this.info_time_end!=false){
      toto++;
    }
    if(this.info_time_begin!=false){
      toto++;
    }
    if(this.key_date!=false){
      toto++;
    }
    if(this.key_nom!=false){
      toto++;
    }
    
    if(toto==8 && this.result!=false){
     // document.getElementById("submity").className="btn btn-primary";
     document.getElementById("submit_btn").className="btn btn-primary";
    }
    else {
      
      document.getElementById("submit_btn").className="display_none";
    }

  }

}
})

var footer = new Vue({
  el: '#footer',
  data: {
    
  }
})



 
