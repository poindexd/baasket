// Custom Easing
jQuery.extend(jQuery.easing,{easeInOutMaterial:function(e,n,r,t,u){return(n/=u/2)<1?t/2*n*n+r:t/4*((n-=2)*n*n+2)+r}});