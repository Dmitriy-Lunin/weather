(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();function g(s){let t;switch(s){case"Clear":t=l.sunny;break;case"Clouds":t=l.sunclouds;break;case"Rain":t=l.rain;break;case"Snow":t=l.snow;break;case"Mist":t=l.mist;break;case"Thunderstorm":t=l.thander;break;default:t=l.clouds}return t}const l={sunny:`<svg version="1.1" id="sunGlobe" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
  viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve">
<g id="sunrays">
 <radialGradient id="XMLID_4_" cx="51.1566" cy="21.1667" r="4.7267" gradientUnits="userSpaceOnUse">
   <stop  offset="0.3333" style="stop-color:#FBD25A"/>
   <stop  offset="0.7581" style="stop-color:#FAD45D"/>
   <stop  offset="1" style="stop-color:#F5E16E"/>
 </radialGradient>
 
   <path id="XMLID_3_" fill="url(#XMLID_4_)" stroke="#6D6E71" stroke-width="0.5" stroke-miterlimit="10" stroke-opacity="7.000000e-002" d="
   M56.1,25.3h-9.7c0,0-1.2-6.1,0-7.4c1.2-1.3,8.9-1,9.7,0C56.8,18.9,56.1,25.3,56.1,25.3z"/>
 <radialGradient id="XMLID_12_" cx="71.2457" cy="29.7708" r="6.0292" gradientUnits="userSpaceOnUse">
   <stop  offset="0.3333" style="stop-color:#FBD25A"/>
   <stop  offset="0.7581" style="stop-color:#FAD45D"/>
   <stop  offset="1" style="stop-color:#F5E16E"/>
 </radialGradient>
 
   <path id="XMLID_5_" fill="url(#XMLID_12_)" stroke="#6D6E71" stroke-width="0.5" stroke-miterlimit="10" stroke-opacity="7.000000e-002" d="
   M71.8,35.8l-6.6-7.1c0,0,3.7-5,5.4-5.1s6.8,5.8,6.6,7.1C77.1,32,71.8,35.8,71.8,35.8z"/>
 <radialGradient id="XMLID_13_" cx="79.016" cy="49.1667" r="4.757" gradientUnits="userSpaceOnUse">
   <stop  offset="0.3333" style="stop-color:#FBD25A"/>
   <stop  offset="0.7581" style="stop-color:#FAD45D"/>
   <stop  offset="1" style="stop-color:#F5E16E"/>
 </radialGradient>
 
   <path id="XMLID_6_" fill="url(#XMLID_13_)" stroke="#6D6E71" stroke-width="0.5" stroke-miterlimit="10" stroke-opacity="7.000000e-002" d="
   M75.1,54.2l-0.3-9.7c0,0,6.1-1.3,7.4-0.2c1.3,1.1,1.2,8.9,0.3,9.7C81.5,54.8,75.1,54.2,75.1,54.2z"/>
 <radialGradient id="XMLID_14_" cx="70.2457" cy="69.6002" r="6.0234" gradientUnits="userSpaceOnUse">
   <stop  offset="0.3333" style="stop-color:#FBD25A"/>
   <stop  offset="0.7581" style="stop-color:#FAD45D"/>
   <stop  offset="1" style="stop-color:#F5E16E"/>
 </radialGradient>
 
   <path id="XMLID_7_" fill="url(#XMLID_14_)" stroke="#6D6E71" stroke-width="0.5" stroke-miterlimit="10" stroke-opacity="7.000000e-002" d="
   M64.3,70.7l6.4-7.2c0,0,5.3,3.2,5.5,4.9c0.2,1.7-5.2,7.3-6.4,7.2C68.5,75.6,64.3,70.7,64.3,70.7z"/>
 
   <radialGradient id="XMLID_15_" cx="50.7987" cy="78.0712" r="4.7789" gradientTransform="matrix(0.998 -6.322496e-002 6.322496e-002 0.998 -4.8396 3.3703)" gradientUnits="userSpaceOnUse">
   <stop  offset="0.3333" style="stop-color:#FBD25A"/>
   <stop  offset="0.7581" style="stop-color:#FAD45D"/>
   <stop  offset="1" style="stop-color:#F5E16E"/>
 </radialGradient>
 
   <path id="XMLID_8_" fill="url(#XMLID_15_)" stroke="#6D6E71" stroke-width="0.5" stroke-miterlimit="10" stroke-opacity="7.000000e-002" d="
   M45.8,74.2l9.7-0.2c0,0,1.3,6.1,0.2,7.4c-1.1,1.3-8.9,1.2-9.7,0.2C45.2,80.6,45.8,74.2,45.8,74.2z"/>
 <radialGradient id="XMLID_16_" cx="30.5864" cy="70.2252" r="6.0153" gradientUnits="userSpaceOnUse">
   <stop  offset="0.3333" style="stop-color:#FBD25A"/>
   <stop  offset="0.7581" style="stop-color:#FAD45D"/>
   <stop  offset="1" style="stop-color:#F5E16E"/>
 </radialGradient>
 
   <path id="XMLID_9_" fill="url(#XMLID_16_)" stroke="#6D6E71" stroke-width="0.5" stroke-miterlimit="10" stroke-opacity="7.000000e-002" d="
   M29.3,64.3l7.3,6.3c0,0-3.1,5.4-4.8,5.6s-7.4-5-7.3-6.3C24.6,68.6,29.3,64.3,29.3,64.3z"/>
 <radialGradient id="XMLID_44_" cx="21.0871" cy="50" r="4.8093" gradientUnits="userSpaceOnUse">
   <stop  offset="0.3333" style="stop-color:#FBD25A"/>
   <stop  offset="0.7581" style="stop-color:#FAD45D"/>
   <stop  offset="1" style="stop-color:#F5E16E"/>
 </radialGradient>
 
   <path id="XMLID_10_" fill="url(#XMLID_44_)" stroke="#6D6E71" stroke-width="0.5" stroke-miterlimit="10" stroke-opacity="7.000000e-002" d="
   M24.8,44.8l0.6,9.6c0,0-6,1.5-7.4,0.5c-1.4-1.1-1.5-8.8-0.6-9.6C18.3,44.4,24.8,44.8,24.8,44.8z"/>
 <radialGradient id="XMLID_45_" cx="29.9614" cy="29.0073" r="6.019" gradientUnits="userSpaceOnUse">
   <stop  offset="0.3333" style="stop-color:#FBD25A"/>
   <stop  offset="0.7581" style="stop-color:#FAD45D"/>
   <stop  offset="1" style="stop-color:#F5E16E"/>
 </radialGradient>
 
   <path id="XMLID_11_" fill="url(#XMLID_45_)" stroke="#6D6E71" stroke-width="0.5" stroke-miterlimit="10" stroke-opacity="7.000000e-002" d="
   M36,28.6L28.7,35c0,0-4.9-3.8-4.9-5.6c0-1.7,6.1-6.6,7.3-6.3C32.4,23.3,36,28.6,36,28.6z"/>
</g>
<radialGradient id="XMLID_46_" cx="50" cy="49.1667" r="26.8776" gradientUnits="userSpaceOnUse">
 <stop  offset="0.3333" style="stop-color:#E3BF4C"/>
 <stop  offset="0.7473" style="stop-color:#F4CE52"/>
 <stop  offset="1" style="stop-color:#F5E16E"/>
</radialGradient>
<ellipse id="XMLID_1_" fill="url(#XMLID_46_)" stroke="#58595B" stroke-width="0.5" stroke-miterlimit="10" stroke-opacity="7.000000e-002" cx="50" cy="49.2" rx="27.3" ry="26.5"/>
</svg>`,sunclouds:`<svg class="svg" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
  viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve">
<g id="totalSun">
<g id="sunRays">
 <radialGradient id="XMLID_4_" cx="51.1566" cy="21.1667" r="4.7267" gradientUnits="userSpaceOnUse">
   <stop  offset="0.3333" style="stop-color:#FBD25A"/>
   <stop  offset="0.7581" style="stop-color:#FAD45D"/>
   <stop  offset="1" style="stop-color:#F5E16E"/>
 </radialGradient>
 
   <path id="XMLID_3_" fill="url(#XMLID_4_)" stroke="#6D6E71" stroke-width="0.5" stroke-miterlimit="10" stroke-opacity="7.000000e-002" d="
   M56.1,25.3h-9.7c0,0-1.2-6.1,0-7.4c1.2-1.3,8.9-1,9.7,0C56.8,18.9,56.1,25.3,56.1,25.3z"/>
 <radialGradient id="XMLID_12_" cx="71.2457" cy="29.7708" r="6.0292" gradientUnits="userSpaceOnUse">
   <stop  offset="0.3333" style="stop-color:#FBD25A"/>
   <stop  offset="0.7581" style="stop-color:#FAD45D"/>
   <stop  offset="1" style="stop-color:#F5E16E"/>
 </radialGradient>
 
   <path id="XMLID_5_" fill="url(#XMLID_12_)" stroke="#6D6E71" stroke-width="0.5" stroke-miterlimit="10" stroke-opacity="7.000000e-002" d="
   M71.8,35.8l-6.6-7.1c0,0,3.7-5,5.4-5.1s6.8,5.8,6.6,7.1C77.1,32,71.8,35.8,71.8,35.8z"/>
 <radialGradient id="XMLID_13_" cx="79.016" cy="49.1667" r="4.757" gradientUnits="userSpaceOnUse">
   <stop  offset="0.3333" style="stop-color:#FBD25A"/>
   <stop  offset="0.7581" style="stop-color:#FAD45D"/>
   <stop  offset="1" style="stop-color:#F5E16E"/>
 </radialGradient>
 
   <path id="XMLID_6_" fill="url(#XMLID_13_)" stroke="#6D6E71" stroke-width="0.5" stroke-miterlimit="10" stroke-opacity="7.000000e-002" d="
   M75.1,54.2l-0.3-9.7c0,0,6.1-1.3,7.4-0.2c1.3,1.1,1.2,8.9,0.3,9.7C81.5,54.8,75.1,54.2,75.1,54.2z"/>
 <radialGradient id="XMLID_14_" cx="70.2457" cy="69.6002" r="6.0234" gradientUnits="userSpaceOnUse">
   <stop  offset="0.3333" style="stop-color:#FBD25A"/>
   <stop  offset="0.7581" style="stop-color:#FAD45D"/>
   <stop  offset="1" style="stop-color:#F5E16E"/>
 </radialGradient>
 
   <path id="XMLID_7_" fill="url(#XMLID_14_)" stroke="#6D6E71" stroke-width="0.5" stroke-miterlimit="10" stroke-opacity="7.000000e-002" d="
   M64.3,70.7l6.4-7.2c0,0,5.3,3.2,5.5,4.9c0.2,1.7-5.2,7.3-6.4,7.2C68.5,75.6,64.3,70.7,64.3,70.7z"/>
 
   <radialGradient id="XMLID_15_" cx="50.7987" cy="78.0712" r="4.7789" gradientTransform="matrix(0.998 -6.322496e-002 6.322496e-002 0.998 -4.8396 3.3703)" gradientUnits="userSpaceOnUse">
   <stop  offset="0.3333" style="stop-color:#FBD25A"/>
   <stop  offset="0.7581" style="stop-color:#FAD45D"/>
   <stop  offset="1" style="stop-color:#F5E16E"/>
 </radialGradient>
 
   <path id="XMLID_8_" fill="url(#XMLID_15_)" stroke="#6D6E71" stroke-width="0.5" stroke-miterlimit="10" stroke-opacity="7.000000e-002" d="
   M45.8,74.2l9.7-0.2c0,0,1.3,6.1,0.2,7.4c-1.1,1.3-8.9,1.2-9.7,0.2C45.2,80.6,45.8,74.2,45.8,74.2z"/>
 <radialGradient id="XMLID_16_" cx="30.5864" cy="70.2252" r="6.0153" gradientUnits="userSpaceOnUse">
   <stop  offset="0.3333" style="stop-color:#FBD25A"/>
   <stop  offset="0.7581" style="stop-color:#FAD45D"/>
   <stop  offset="1" style="stop-color:#F5E16E"/>
 </radialGradient>
 
   <path id="XMLID_9_" fill="url(#XMLID_16_)" stroke="#6D6E71" stroke-width="0.5" stroke-miterlimit="10" stroke-opacity="7.000000e-002" d="
   M29.3,64.3l7.3,6.3c0,0-3.1,5.4-4.8,5.6s-7.4-5-7.3-6.3C24.6,68.6,29.3,64.3,29.3,64.3z"/>
 <radialGradient id="XMLID_44_" cx="21.0871" cy="50" r="4.8093" gradientUnits="userSpaceOnUse">
   <stop  offset="0.3333" style="stop-color:#FBD25A"/>
   <stop  offset="0.7581" style="stop-color:#FAD45D"/>
   <stop  offset="1" style="stop-color:#F5E16E"/>
 </radialGradient>
 
   <path id="XMLID_10_" fill="url(#XMLID_44_)" stroke="#6D6E71" stroke-width="0.5" stroke-miterlimit="10" stroke-opacity="7.000000e-002" d="
   M24.8,44.8l0.6,9.6c0,0-6,1.5-7.4,0.5c-1.4-1.1-1.5-8.8-0.6-9.6C18.3,44.4,24.8,44.8,24.8,44.8z"/>
 <radialGradient id="XMLID_45_" cx="29.9614" cy="29.0073" r="6.019" gradientUnits="userSpaceOnUse">
   <stop  offset="0.3333" style="stop-color:#FBD25A"/>
   <stop  offset="0.7581" style="stop-color:#FAD45D"/>
   <stop  offset="1" style="stop-color:#F5E16E"/>
 </radialGradient>
 
   <path id="XMLID_11_" fill="url(#XMLID_45_)" stroke="#6D6E71" stroke-width="0.5" stroke-miterlimit="10" stroke-opacity="7.000000e-002" d="
   M36,28.6L28.7,35c0,0-4.9-3.8-4.9-5.6c0-1.7,6.1-6.6,7.3-6.3C32.4,23.3,36,28.6,36,28.6z"/>
<radialGradient id="XMLID_46_" cx="50" cy="49.1667" r="26.8776" gradientUnits="userSpaceOnUse">
 <stop  offset="0.3333" style="stop-color:#E3BF4C"/>
 <stop  offset="0.7473" style="stop-color:#F4CE52"/>
 <stop  offset="1" style="stop-color:#F5E16E"/>
</radialGradient>
<ellipse id="XMLID_1_" fill="url(#XMLID_46_)" stroke="#58595B" stroke-width="0.5" stroke-miterlimit="10" stroke-opacity="7.000000e-002" cx="50" cy="49.2" rx="27.3" ry="26.5"/>
</g>
</g>
<g id="smallcloud">
 
   <path id="XMLID_3_" fill="#5BCAEB" stroke="#6D6E71" stroke-width="0.5" stroke-miterlimit="10" stroke-opacity="8.000000e-002" d="
   M19,39.9c0,0,5.7,1.7,7-1.2c5.4,3,9.1,0.6,11.5,0c0.5,2.3,6.1,1.2,6.1,1.2s10.7-2.6,9.9-11.7c0,0-1.9-12.4-14-10
   c0,0-9.7-9.5-18.6,2.5c0,0-9-0.5-10.3,10C10.6,30.7,10.9,37.8,19,39.9z"/>
</g>
<g id="bigCloud">
 
   <path id="XMLID_9_" fill="#F4F4F4" stroke="#515251" stroke-width="0.5" stroke-miterlimit="10" stroke-opacity="8.000000e-002" d="
   M22.3,65.5c0,0-8.9-2.9-9.3-12.8s10-11.3,11.4-10.1c0,0,2.5-8.4,10.1-8.6c0,0,3.5-13.4,17.8-13.1c0,0,15.6-0.8,17.9,16.4
   c0,0,12.9-1,13.4,15.1c0,0-1.4,10.9-11.9,13.1c0,0-12,2-13.8-2.3c-0.2,2.1-15,6-19.6,0C33.8,68.4,22.3,65.5,22.3,65.5z"/>
</g>
</svg>`,rain:`<svg class="svg" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
  viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve">
  <g id="totalSun">
  <g id="sunRays">
 <radialGradient id="XMLID_4_" cx="51.1566" cy="21.1667" r="4.7267" gradientUnits="userSpaceOnUse">
   <stop  offset="0.3333" style="stop-color:#FBD25A"/>
   <stop  offset="0.7581" style="stop-color:#FAD45D"/>
   <stop  offset="1" style="stop-color:#F5E16E"/>
 </radialGradient>
 
   <path id="XMLID_3_" fill="url(#XMLID_4_)" stroke="#6D6E71" stroke-width="0.5" stroke-miterlimit="10" stroke-opacity="7.000000e-002" d="
   M56.1,25.3h-9.7c0,0-1.2-6.1,0-7.4c1.2-1.3,8.9-1,9.7,0C56.8,18.9,56.1,25.3,56.1,25.3z"/>
 <radialGradient id="XMLID_12_" cx="71.2457" cy="29.7708" r="6.0292" gradientUnits="userSpaceOnUse">
   <stop  offset="0.3333" style="stop-color:#FBD25A"/>
   <stop  offset="0.7581" style="stop-color:#FAD45D"/>
   <stop  offset="1" style="stop-color:#F5E16E"/>
 </radialGradient>
 
   <path id="XMLID_5_" fill="url(#XMLID_12_)" stroke="#6D6E71" stroke-width="0.5" stroke-miterlimit="10" stroke-opacity="7.000000e-002" d="
   M71.8,35.8l-6.6-7.1c0,0,3.7-5,5.4-5.1s6.8,5.8,6.6,7.1C77.1,32,71.8,35.8,71.8,35.8z"/>
 <radialGradient id="XMLID_13_" cx="79.016" cy="49.1667" r="4.757" gradientUnits="userSpaceOnUse">
   <stop  offset="0.3333" style="stop-color:#FBD25A"/>
   <stop  offset="0.7581" style="stop-color:#FAD45D"/>
   <stop  offset="1" style="stop-color:#F5E16E"/>
 </radialGradient>
 
   <path id="XMLID_6_" fill="url(#XMLID_13_)" stroke="#6D6E71" stroke-width="0.5" stroke-miterlimit="10" stroke-opacity="7.000000e-002" d="
   M75.1,54.2l-0.3-9.7c0,0,6.1-1.3,7.4-0.2c1.3,1.1,1.2,8.9,0.3,9.7C81.5,54.8,75.1,54.2,75.1,54.2z"/>
 <radialGradient id="XMLID_14_" cx="70.2457" cy="69.6002" r="6.0234" gradientUnits="userSpaceOnUse">
   <stop  offset="0.3333" style="stop-color:#FBD25A"/>
   <stop  offset="0.7581" style="stop-color:#FAD45D"/>
   <stop  offset="1" style="stop-color:#F5E16E"/>
 </radialGradient>
 
   <path id="XMLID_7_" fill="url(#XMLID_14_)" stroke="#6D6E71" stroke-width="0.5" stroke-miterlimit="10" stroke-opacity="7.000000e-002" d="
   M64.3,70.7l6.4-7.2c0,0,5.3,3.2,5.5,4.9c0.2,1.7-5.2,7.3-6.4,7.2C68.5,75.6,64.3,70.7,64.3,70.7z"/>
 
   <radialGradient id="XMLID_15_" cx="50.7987" cy="78.0712" r="4.7789" gradientTransform="matrix(0.998 -6.322496e-002 6.322496e-002 0.998 -4.8396 3.3703)" gradientUnits="userSpaceOnUse">
   <stop  offset="0.3333" style="stop-color:#FBD25A"/>
   <stop  offset="0.7581" style="stop-color:#FAD45D"/>
   <stop  offset="1" style="stop-color:#F5E16E"/>
 </radialGradient>
 
   <path id="XMLID_8_" fill="url(#XMLID_15_)" stroke="#6D6E71" stroke-width="0.5" stroke-miterlimit="10" stroke-opacity="7.000000e-002" d="
   M45.8,74.2l9.7-0.2c0,0,1.3,6.1,0.2,7.4c-1.1,1.3-8.9,1.2-9.7,0.2C45.2,80.6,45.8,74.2,45.8,74.2z"/>
 <radialGradient id="XMLID_16_" cx="30.5864" cy="70.2252" r="6.0153" gradientUnits="userSpaceOnUse">
   <stop  offset="0.3333" style="stop-color:#FBD25A"/>
   <stop  offset="0.7581" style="stop-color:#FAD45D"/>
   <stop  offset="1" style="stop-color:#F5E16E"/>
 </radialGradient>
 
   <path id="XMLID_9_" fill="url(#XMLID_16_)" stroke="#6D6E71" stroke-width="0.5" stroke-miterlimit="10" stroke-opacity="7.000000e-002" d="
   M29.3,64.3l7.3,6.3c0,0-3.1,5.4-4.8,5.6s-7.4-5-7.3-6.3C24.6,68.6,29.3,64.3,29.3,64.3z"/>
 <radialGradient id="XMLID_44_" cx="21.0871" cy="50" r="4.8093" gradientUnits="userSpaceOnUse">
   <stop  offset="0.3333" style="stop-color:#FBD25A"/>
   <stop  offset="0.7581" style="stop-color:#FAD45D"/>
   <stop  offset="1" style="stop-color:#F5E16E"/>
 </radialGradient>
 
   <path id="XMLID_10_" fill="url(#XMLID_44_)" stroke="#6D6E71" stroke-width="0.5" stroke-miterlimit="10" stroke-opacity="7.000000e-002" d="
   M24.8,44.8l0.6,9.6c0,0-6,1.5-7.4,0.5c-1.4-1.1-1.5-8.8-0.6-9.6C18.3,44.4,24.8,44.8,24.8,44.8z"/>
 <radialGradient id="XMLID_45_" cx="29.9614" cy="29.0073" r="6.019" gradientUnits="userSpaceOnUse">
   <stop  offset="0.3333" style="stop-color:#FBD25A"/>
   <stop  offset="0.7581" style="stop-color:#FAD45D"/>
   <stop  offset="1" style="stop-color:#F5E16E"/>
 </radialGradient>
 
   <path id="XMLID_11_" fill="url(#XMLID_45_)" stroke="#6D6E71" stroke-width="0.5" stroke-miterlimit="10" stroke-opacity="7.000000e-002" d="
   M36,28.6L28.7,35c0,0-4.9-3.8-4.9-5.6c0-1.7,6.1-6.6,7.3-6.3C32.4,23.3,36,28.6,36,28.6z"/>
   <radialGradient id="XMLID_46_" cx="50" cy="49.1667" r="26.8776" gradientUnits="userSpaceOnUse">
     <stop  offset="0.3333" style="stop-color:#E3BF4C"/>
     <stop  offset="0.7473" style="stop-color:#F4CE52"/>
     <stop  offset="1" style="stop-color:#F5E16E"/>
   </radialGradient>
 <ellipse id="XMLID_1_" fill="url(#XMLID_46_)" stroke="#58595B" stroke-width="0.5" stroke-miterlimit="10" stroke-opacity="7.000000e-002" cx="50" cy="49.2" rx="27.3" ry="26.5"/>
</g>
</g>
<g id="rain">
 <path class="raindrop" id="drop1" fill="url(#XMLID_17_)" stroke="#000000" stroke-width="0.5" stroke-miterlimit="10" stroke-opacity="0.5" d="
   M33.8,67.2c0,0-10.4,14.3,0,14.3C44.4,81.5,33.8,67.2,33.8,67.2z"/>
 <linearGradient id="XMLID_17_" gradientUnits="userSpaceOnUse" x1="43.5804" y1="74.1052" x2="52.9097" y2="74.1052">
   <stop  offset="0.4718" style="stop-color:#5CCAEB"/>
   <stop  offset="0.5339" style="stop-color:#51B1CD"/>
 </linearGradient>
 <path class="raindrop" id="drop2" fill="url(#XMLID_17_)" stroke="#000000" stroke-width="0.5" stroke-miterlimit="10" stroke-opacity="0.5" d="
   M48.2,67c0,0-10.4,14.3,0,14.3C58.8,81.3,48.2,67,48.2,67z"/>
 <path class="raindrop" id="drop3" fill="url(#XMLID_17_)" stroke="#000000" stroke-width="0.5" stroke-miterlimit="10" stroke-opacity="0.5" d="
   M62.4,67c0,0-10.4,14.3,0,14.3C73,81.3,62.4,67,62.4,67z"/>
</g>
<g id="bigCloud">
   <path id="XMLID_1_" fill="#F4F4F4" stroke="#515251" stroke-width="0.5" stroke-miterlimit="10" stroke-opacity="8.000000e-002" d="
   M22.3,65.5c0,0-8.9-2.9-9.3-12.8s10-11.3,11.4-10.1c0,0,2.5-8.4,10.1-8.6c0,0,3.5-13.4,17.8-13.1c0,0,15.6-0.8,17.9,16.4
   c0,0,12.9-1,13.4,15.1c0,0-1.4,10.9-11.9,13.1c0,0-12,2-13.8-2.3c-0.2,2.1-15,6-19.6,0C33.8,68.4,22.3,65.5,22.3,65.5z"/>
</g>

</svg>`,thander:`<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
  viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve">
<!--
<g id="sunRays">
 <radialGradient id="XMLID_4_" cx="51.1566" cy="21.1667" r="4.7267" gradientUnits="userSpaceOnUse">
   <stop  offset="0.3333" style="stop-color:#FBD25A"/>
   <stop  offset="0.7581" style="stop-color:#FAD45D"/>
   <stop  offset="1" style="stop-color:#F5E16E"/>
 </radialGradient>
 
   <path id="XMLID_3_" fill="url(#XMLID_4_)" stroke="#6D6E71" stroke-width="0.5" stroke-miterlimit="10" stroke-opacity="7.000000e-002" d="
   M56.1,25.3h-9.7c0,0-1.2-6.1,0-7.4c1.2-1.3,8.9-1,9.7,0C56.8,18.9,56.1,25.3,56.1,25.3z"/>
 <radialGradient id="XMLID_12_" cx="71.2457" cy="29.7708" r="6.0292" gradientUnits="userSpaceOnUse">
   <stop  offset="0.3333" style="stop-color:#FBD25A"/>
   <stop  offset="0.7581" style="stop-color:#FAD45D"/>
   <stop  offset="1" style="stop-color:#F5E16E"/>
 </radialGradient>
 
   <path id="XMLID_5_" fill="url(#XMLID_12_)" stroke="#6D6E71" stroke-width="0.5" stroke-miterlimit="10" stroke-opacity="7.000000e-002" d="
   M71.8,35.8l-6.6-7.1c0,0,3.7-5,5.4-5.1s6.8,5.8,6.6,7.1C77.1,32,71.8,35.8,71.8,35.8z"/>
 <radialGradient id="XMLID_13_" cx="79.016" cy="49.1667" r="4.757" gradientUnits="userSpaceOnUse">
   <stop  offset="0.3333" style="stop-color:#FBD25A"/>
   <stop  offset="0.7581" style="stop-color:#FAD45D"/>
   <stop  offset="1" style="stop-color:#F5E16E"/>
 </radialGradient>
 
   <path id="XMLID_6_" fill="url(#XMLID_13_)" stroke="#6D6E71" stroke-width="0.5" stroke-miterlimit="10" stroke-opacity="7.000000e-002" d="
   M75.1,54.2l-0.3-9.7c0,0,6.1-1.3,7.4-0.2c1.3,1.1,1.2,8.9,0.3,9.7C81.5,54.8,75.1,54.2,75.1,54.2z"/>
 <radialGradient id="XMLID_14_" cx="70.2457" cy="69.6002" r="6.0234" gradientUnits="userSpaceOnUse">
   <stop  offset="0.3333" style="stop-color:#FBD25A"/>
   <stop  offset="0.7581" style="stop-color:#FAD45D"/>
   <stop  offset="1" style="stop-color:#F5E16E"/>
 </radialGradient>
 
   <path id="XMLID_7_" fill="url(#XMLID_14_)" stroke="#6D6E71" stroke-width="0.5" stroke-miterlimit="10" stroke-opacity="7.000000e-002" d="
   M64.3,70.7l6.4-7.2c0,0,5.3,3.2,5.5,4.9c0.2,1.7-5.2,7.3-6.4,7.2C68.5,75.6,64.3,70.7,64.3,70.7z"/>
 
   <radialGradient id="XMLID_15_" cx="50.7987" cy="78.0712" r="4.7789" gradientTransform="matrix(0.998 -6.322496e-002 6.322496e-002 0.998 -4.8396 3.3703)" gradientUnits="userSpaceOnUse">
   <stop  offset="0.3333" style="stop-color:#FBD25A"/>
   <stop  offset="0.7581" style="stop-color:#FAD45D"/>
   <stop  offset="1" style="stop-color:#F5E16E"/>
 </radialGradient>
 
   <path id="XMLID_8_" fill="url(#XMLID_15_)" stroke="#6D6E71" stroke-width="0.5" stroke-miterlimit="10" stroke-opacity="7.000000e-002" d="
   M45.8,74.2l9.7-0.2c0,0,1.3,6.1,0.2,7.4c-1.1,1.3-8.9,1.2-9.7,0.2C45.2,80.6,45.8,74.2,45.8,74.2z"/>
 <radialGradient id="XMLID_16_" cx="30.5864" cy="70.2252" r="6.0153" gradientUnits="userSpaceOnUse">
   <stop  offset="0.3333" style="stop-color:#FBD25A"/>
   <stop  offset="0.7581" style="stop-color:#FAD45D"/>
   <stop  offset="1" style="stop-color:#F5E16E"/>
 </radialGradient>
 
   <path id="XMLID_9_" fill="url(#XMLID_16_)" stroke="#6D6E71" stroke-width="0.5" stroke-miterlimit="10" stroke-opacity="7.000000e-002" d="
   M29.3,64.3l7.3,6.3c0,0-3.1,5.4-4.8,5.6s-7.4-5-7.3-6.3C24.6,68.6,29.3,64.3,29.3,64.3z"/>
 <radialGradient id="XMLID_44_" cx="21.0871" cy="50" r="4.8093" gradientUnits="userSpaceOnUse">
   <stop  offset="0.3333" style="stop-color:#FBD25A"/>
   <stop  offset="0.7581" style="stop-color:#FAD45D"/>
   <stop  offset="1" style="stop-color:#F5E16E"/>
 </radialGradient>
 
   <path id="XMLID_10_" fill="url(#XMLID_44_)" stroke="#6D6E71" stroke-width="0.5" stroke-miterlimit="10" stroke-opacity="7.000000e-002" d="
   M24.8,44.8l0.6,9.6c0,0-6,1.5-7.4,0.5c-1.4-1.1-1.5-8.8-0.6-9.6C18.3,44.4,24.8,44.8,24.8,44.8z"/>
 <radialGradient id="XMLID_45_" cx="29.9614" cy="29.0073" r="6.019" gradientUnits="userSpaceOnUse">
   <stop  offset="0.3333" style="stop-color:#FBD25A"/>
   <stop  offset="0.7581" style="stop-color:#FAD45D"/>
   <stop  offset="1" style="stop-color:#F5E16E"/>
 </radialGradient>
 
   <path id="XMLID_11_" fill="url(#XMLID_45_)" stroke="#6D6E71" stroke-width="0.5" stroke-miterlimit="10" stroke-opacity="7.000000e-002" d="
   M36,28.6L28.7,35c0,0-4.9-3.8-4.9-5.6c0-1.7,6.1-6.6,7.3-6.3C32.4,23.3,36,28.6,36,28.6z"/>
<radialGradient id="XMLID_46_" cx="50" cy="49.1667" r="26.8776" gradientUnits="userSpaceOnUse">
 <stop  offset="0.3333" style="stop-color:#E3BF4C"/>
 <stop  offset="0.7473" style="stop-color:#F4CE52"/>
 <stop  offset="1" style="stop-color:#F5E16E"/>
</radialGradient>
<ellipse id="XMLID_1_" fill="url(#XMLID_46_)" stroke="#58595B" stroke-width="0.5" stroke-miterlimit="10" stroke-opacity="7.000000e-002" cx="50" cy="49.2" rx="27.3" ry="26.5"/>
</g>


<g id="raindrops">
 <linearGradient id="XMLID_30_" gradientUnits="userSpaceOnUse" x1="29.1887" y1="74.3552" x2="38.518" y2="74.3552">
   <stop  offset="0.4718" style="stop-color:#5CCAEB"/>
   <stop  offset="0.5339" style="stop-color:#51B1CD"/>
 </linearGradient>
 <path id="drop1" fill="url(#XMLID_30_)" d="M33.8,67.2c0,0-10.4,14.3,0,14.3C44.4,81.5,33.8,67.2,33.8,67.2z"/>
 <linearGradient id="XMLID_31_" gradientUnits="userSpaceOnUse" x1="59.7054" y1="74.3552" x2="69.0347" y2="74.3552">
   <stop  offset="0.4718" style="stop-color:#5CCAEB"/>
   <stop  offset="0.5339" style="stop-color:#51B1CD"/>
 </linearGradient>
 <path id="drop2" fill="url(#XMLID_31_)" d="M64.3,67.2c0,0-10.4,14.3,0,14.3C74.9,81.5,64.3,67.2,64.3,67.2z"/>
</g>
-->
<g id="thunder">
 <polygon fill="#FAC73F" points="45.6,61.5 39.4,77.6 47.6,77.4 43.1,91.9 44.3,91.9 59.3,73.5 51.4,73.4 58.7,61.5 	"/>
</g>
<g id="smallcloud">
 
   <path id="XMLID_3_" fill="#F4F4F4" stroke="#6D6E71" stroke-width="0.5" stroke-miterlimit="10" stroke-opacity="8.000000e-002" d="
   M19,39.9c0,0,5.7,1.7,7-1.2c5.4,3,9.1,0.6,11.5,0c0.5,2.3,6.1,1.2,6.1,1.2s10.7-2.6,9.9-11.7c0,0-1.9-12.4-14-10
   c0,0-9.7-9.5-18.6,2.5c0,0-9-0.5-10.3,10C10.6,30.7,10.9,37.8,19,39.9z"/>
</g>
<g id="bigClouds">
 
   <path id="XMLID_16_" fill="#F4F4F4" stroke="#515251" stroke-width="0.5" stroke-miterlimit="10" stroke-opacity="8.000000e-002" d="
   M22.3,65.5c0,0-8.9-2.9-9.3-12.8s10-11.3,11.4-10.1c0,0,2.5-8.4,10.1-8.6c0,0,3.5-13.4,17.8-13.1c0,0,15.6-0.8,17.9,16.4
   c0,0,12.9-1,13.4,15.1c0,0-1.4,10.9-11.9,13.1c0,0-12,2-13.8-2.3c-0.2,2.1-15,6-19.6,0C33.8,68.4,22.3,65.5,22.3,65.5z"/>
</g>
</svg>`,snow:`<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
  viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve">
<g id="snowflakes">
 <g id="flake3">
   <path fill="#5BCAEB" d="M72,78.1c0.6,0.6,0.6,1.6,0,2.2l0,0c-0.6,0.6-1.6,0.6-2.2,0l-8.7-8.7C60.5,71,60.3,70,61,69.3
     s1.7-0.4,2.3,0.2L72,78.1z"/>
   <path fill="#5BCAEB" d="M63.1,80.3c-0.6,0.6-1.6,0.6-2.2,0l0,0c-0.6-0.6-0.6-1.6,0-2.2l8.7-8.7c0.6-0.6,1.7-0.8,2.3-0.2
     c0.7,0.7,0.4,1.7-0.2,2.3L63.1,80.3z"/>
   <path fill="#5BCAEB" d="M60.2,76.3c-0.9,0-1.5-0.7-1.5-1.5l0,0c0-0.9,0.7-1.5,1.5-1.5h12.3c0.9,0,1.8,0.6,1.8,1.5
     c0,0.9-0.9,1.5-1.8,1.5H60.2z"/>
   <path id="XMLID_8_" fill="#5BCAEB" d="M68,81c0,0.9-0.7,1.5-1.5,1.5l0,0c-0.9,0-1.5-0.7-1.5-1.5V68.8c0-0.9,0.6-1.8,1.5-1.8
     c0.9,0,1.5,0.9,1.5,1.8V81z"/>
 </g>
 <g id="flake2">
   <path fill="#5BCAEB" d="M53.5,78.1c0.6,0.6,0.6,1.6,0,2.2l0,0c-0.6,0.6-1.6,0.6-2.2,0l-8.7-8.7C42,71,41.8,70,42.5,69.3
     c0.7-0.7,1.7-0.4,2.3,0.2L53.5,78.1z"/>
   <path fill="#5BCAEB" d="M44.6,80.3c-0.6,0.6-1.6,0.6-2.2,0l0,0c-0.6-0.6-0.6-1.6,0-2.2l8.7-8.7c0.6-0.6,1.7-0.8,2.3-0.2
     c0.7,0.7,0.4,1.7-0.2,2.3L44.6,80.3z"/>
   <path fill="#5BCAEB" d="M41.7,76.3c-0.9,0-1.5-0.7-1.5-1.5l0,0c0-0.9,0.7-1.5,1.5-1.5H54c0.9,0,1.8,0.6,1.8,1.5
     c0,0.9-0.9,1.5-1.8,1.5H41.7z"/>
   <path id="XMLID_17_" fill="#5BCAEB" d="M49.5,81c0,0.9-0.7,1.5-1.5,1.5l0,0c-0.9,0-1.5-0.7-1.5-1.5V68.8c0-0.9,0.6-1.8,1.5-1.8
     c0.9,0,1.5,0.9,1.5,1.8V81z"/>
 </g>
 <g id="flake1">
   <path fill="#5BCAEB" d="M35.1,78.1c0.6,0.6,0.6,1.6,0,2.2l0,0c-0.6,0.6-1.6,0.6-2.2,0l-8.7-8.7c-0.6-0.6-0.8-1.7-0.2-2.3
     c0.7-0.7,1.7-0.4,2.3,0.2L35.1,78.1z"/>
   <path fill="#5BCAEB" d="M26.3,80.3c-0.6,0.6-1.6,0.6-2.2,0l0,0c-0.6-0.6-0.6-1.6,0-2.2l8.7-8.7c0.6-0.6,1.7-0.8,2.3-0.2
     c0.7,0.7,0.4,1.7-0.2,2.3L26.3,80.3z"/>
   <path fill="#5BCAEB" d="M23.4,76.3c-0.9,0-1.5-0.7-1.5-1.5l0,0c0-0.9,0.7-1.5,1.5-1.5h12.3c0.9,0,1.8,0.6,1.8,1.5
     c0,0.9-0.9,1.5-1.8,1.5H23.4z"/>
   <path fill="#5BCAEB" d="M31.1,81c0,0.9-0.7,1.5-1.5,1.5l0,0c-0.9,0-1.5-0.7-1.5-1.5V68.8c0-0.9,0.6-1.8,1.5-1.8s1.5,0.9,1.5,1.8
     V81z"/>
 </g>
</g>
<g id="bigCloudSnow">
 
   <path id="XMLID_1_" fill="#F4F4F4" stroke="#515251" stroke-width="0.5" stroke-miterlimit="10" stroke-opacity="8.000000e-002" d="
   M22.3,65.5c0,0-8.9-2.9-9.3-12.8s10-11.3,11.4-10.1c0,0,2.5-8.4,10.1-8.6c0,0,3.5-13.4,17.8-13.1c0,0,15.6-0.8,17.9,16.4
   c0,0,12.9-1,13.4,15.1c0,0-1.4,10.9-11.9,13.1c0,0-12,2-13.8-2.3c-0.2,2.1-15,6-19.6,0C33.8,68.4,22.3,65.5,22.3,65.5z"/>
</g>
</svg>`,mist:`<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
  viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve">
<g id="bigCloud">
 
   <path id="XMLID_1_" fill="#F4F4F4" stroke="#515251" stroke-width="0.5" stroke-miterlimit="10" stroke-opacity="8.000000e-002" d="
   M22.3,65.5c0,0-8.9-2.9-9.3-12.8s10-11.3,11.4-10.1c0,0,2.5-8.4,10.1-8.6c0,0,3.5-13.4,17.8-13.1c0,0,15.6-0.8,17.9,16.4
   c0,0,12.9-1,13.4,15.1c0,0-1.4,10.9-11.9,13.1c0,0-12,2-13.8-2.3c-0.2,2.1-15,6-19.6,0C33.8,68.4,22.3,65.5,22.3,65.5z"/>
</g>
<g id="mistrays">
                       <path id="ray1" fill="none" stroke="#5BCAEB" stroke-width="3.5" stroke-linecap="round" stroke-miterlimit="10" d="M46,56.3H20.6"/>
                       <path id="ray3" fill="none" stroke="#5BCAEB" stroke-width="3.5" stroke-linecap="round" stroke-miterlimit="10" d="M49.6,75.7H22.8"/>
                       <path id="ray4" fill="none" stroke="#5BCAEB" stroke-width="3.5" stroke-linecap="round" stroke-miterlimit="10" d="M75.1,75.7H57"/>
                       <path id="ray5" fill="none" stroke="#5BCAEB" stroke-width="3.5" stroke-linecap="round" stroke-miterlimit="10" d="M66.1,65.6H49.2"/>
                       <path id="ray6" fill="none" stroke="#5BCAEB" stroke-width="3.5" stroke-linecap="round" stroke-miterlimit="10" d="M28.1,65h13.1"/>
                       <path id="ray7" fill="none" stroke="#5BCAEB" stroke-width="3.5" stroke-linecap="round" stroke-miterlimit="10" d="M67,56.3h12.3"/>
                       <path id="ray2" fill="none" stroke="#5BCAEB" stroke-width="3.5" stroke-linecap="round" stroke-miterlimit="10" d="M53.9,56.3H58"/>
                   </g>
</svg>`,clouds:`<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
  viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve">
<g id="smallcloud">
 
   <path id="XMLID_3_" fill="#5BCAEB" stroke="#6D6E71" stroke-width="0.5" stroke-miterlimit="10" stroke-opacity="8.000000e-002" d="
   M19,39.9c0,0,5.7,1.7,7-1.2c5.4,3,9.1,0.6,11.5,0c0.5,2.3,6.1,1.2,6.1,1.2s10.7-2.6,9.9-11.7c0,0-1.9-12.4-14-10
   c0,0-9.7-9.5-18.6,2.5c0,0-9-0.5-10.3,10C10.6,30.7,10.9,37.8,19,39.9z"/>
</g>
<g id="bigCloud">
 
   <path id="XMLID_1_" fill="#F4F4F4" stroke="#515251" stroke-width="0.5" stroke-miterlimit="10" stroke-opacity="8.000000e-002" d="
   M22.3,65.5c0,0-8.9-2.9-9.3-12.8s10-11.3,11.4-10.1c0,0,2.5-8.4,10.1-8.6c0,0,3.5-13.4,17.8-13.1c0,0,15.6-0.8,17.9,16.4
   c0,0,12.9-1,13.4,15.1c0,0-1.4,10.9-11.9,13.1c0,0-12,2-13.8-2.3c-0.2,2.1-15,6-19.6,0C33.8,68.4,22.3,65.5,22.3,65.5z"/>
</g>
</svg>`},h="/weather/images/low-temperature.svg",w="/weather/images/high-temperature.svg",L="/weather/images/low-humidity.svg",E="/weather/images/high-humidity.svg",F="/weather/images/tornado.svg",x="/weather/images/wind-warning.svg",I="/weather/images/wind.svg",X="/weather/images/fresh-wind.svg",C=document.querySelector("#condition-main"),y=document.querySelector("#condition-svg"),B=document.querySelector("#condition-description"),D=document.querySelector("#temp-img"),A=document.querySelector("#temp-main"),G=document.querySelector("#temp-max"),U=document.querySelector("#temp-min"),S=document.querySelector("#temp-feeling"),v=document.querySelector("#location-header"),z=document.querySelector("#location-description"),O=document.querySelector("#humidity-valu"),_=document.querySelector("#humidity-img"),b=document.querySelector("#wind-speed-value"),n=document.querySelector("#wind-speed-img");function T(s,t){console.log(s),console.log(t);let r=t.weather[0].main;C.innerText=r,y.innerHTML="",y.insertAdjacentHTML("afterbegin",g(r));let i=t.weather[0].description;B.innerText=i;let e=Math.round(t.main.temp);e<0?D.src=h:D.src=w,A.innerText=`${e}°С`;let o=t.main.temp_max;G.innerText=`max ${o}°`;let c=t.main.temp_min;U.innerText=`min ${c}°`;let u=t.main.feels_like;S.innerText=`feels like: ${u}°`;let M=s.name;v.innerText=M;let p=s.country??" ",a=s.state??" ";(a==="Republic of Crimea"||a==="Donetsk Oblast"||a==="Luhansk Oblast")&&(p=" "),z.innerText=`${p} ${a}`;let f=t.main.humidity;O.innerText=`${f}%`,f<=50?_.src=L:_.src=E;let d=t.wind.speed;b.innerText=`${d} m/s`,d>20?n.src=F:d>10?n.src=x:d>5?n.src=I:n.src=X}const m="c82852e43ae91e3b411096fa431c6a0d",q=document.querySelector("#form"),k=document.querySelector("#input");q.onsubmit=H;async function H(s){s.preventDefault();const t=k.value.trim();if(k.value="",!t)return;const r=await $(t);if(!r)return;const{lat:i,lon:e}=r[0],o=await V(i,e);o&&T(r[0],o)}async function $(s){const t=`http://api.openweathermap.org/geo/1.0/direct?q=${s}&limit=5&appid=${m}`;return await(await fetch(t)).json()}async function V(s,t){const r=`https://api.openweathermap.org/data/2.5/weather?lat=${s}&lon=${t}&appid=${m}&units=metric`;return await(await fetch(r)).json()}
