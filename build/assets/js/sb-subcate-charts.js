Chart.defaults.global.defaultFontFamily='-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif',Chart.defaults.global.defaultFontColor="#292b2c";
Chart.defaults.global.legend.display = false;
var ctx=document.getElementById("myPieChart"),myPieChart=new Chart(ctx,{type:"pie",data:{labels:[" Delay"," In Progress"],datasets:[{data:[10,30],backgroundColor:["#ff6384","#2aada5"]}]}}), ctx=document.getElementById("myPieChart2"),myPieChart=new Chart(ctx,{type:"pie",data:{labels:[" Delay"," In Progress"],datasets:[{data:[50,10],backgroundColor:["#ff6384","#2aada5"]}]}}), ctx=document.getElementById("myPieChart3"),myPieChart=new Chart(ctx,{type:"pie",data:{labels:[" Delay"," In Progress"],datasets:[{data:[27,15],backgroundColor:["#ff6384","#2aada5"]}]}}), ctx=document.getElementById("myPieChart4"),myPieChart=new Chart(ctx,{type:"pie",data:{labels:[" Delay"," In Progress"],datasets:[{data:[30,19],backgroundColor:["#ff6384","#2aada5"]}]}}), ctx=document.getElementById("myPieChart5"),myPieChart=new Chart(ctx,{type:"pie",data:{labels:[" Delay"," In Progress"],datasets:[{data:[8,38],backgroundColor:["#ff6384","#2aada5"]}]}});

