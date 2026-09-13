"use strict";var l=function(t,n){return function(){try{return n||t((n={exports:{}}).exports,n),n.exports}catch(o){throw (n=0, o)}};};var _=l(function(S,b){
var R=require('@stdlib/strided-base-reinterpret-complex128/dist'),f=5;function D(t,n,o,w,q,x,c,y,O,C){var i,v,u,r,e,a,m,z,j,p,s;if(t<=0)return y;if(i=R(n,0),v=R(q,0),u=R(y,0),r=w*2,e=c*2,a=C*2,m=o*2,z=x*2,j=O*2,o===1&&x===1&&O===1){if(p=t%f,p>0)for(s=0;s<p;s++)u[a]=i[r]-v[e],u[a+1]=i[r+1]-v[e+1],r+=m,e+=z,a+=j;if(t<f)return y;for(s=p;s<t;s+=f)u[a]=i[r]-v[e],u[a+1]=i[r+1]-v[e+1],u[a+2]=i[r+2]-v[e+2],u[a+3]=i[r+3]-v[e+3],u[a+4]=i[r+4]-v[e+4],u[a+5]=i[r+5]-v[e+5],u[a+6]=i[r+6]-v[e+6],u[a+7]=i[r+7]-v[e+7],u[a+8]=i[r+8]-v[e+8],u[a+9]=i[r+9]-v[e+9],r+=f*2,e+=f*2,a+=f*2;return y}for(s=0;s<t;s++)u[a]=i[r]-v[e],u[a+1]=i[r+1]-v[e+1],r+=m,e+=z,a+=j;return y}b.exports=D
});var g=l(function(T,d){
var E=require('@stdlib/strided-base-stride2offset/dist'),F=_();function G(t,n,o,w,q,x,c){return F(t,n,o,E(t,o),w,q,E(t,q),x,c,E(t,c))}d.exports=G
});var A=l(function(U,k){
var H=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),h=g(),I=_();H(h,"ndarray",I);k.exports=h
});var J=require("path").join,K=require('@stdlib/utils-try-require/dist'),L=require('@stdlib/assert-is-error/dist'),P=A(),M,B=K(J(__dirname,"./native.js"));L(B)?M=P:M=B;module.exports=M;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
