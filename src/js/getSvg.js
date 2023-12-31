export function getSvg(str) {
  let svg;

  switch (str) {
    case "Clear":
      svg = weatherSvg.sunny;
      break;
    case "Clouds":
      svg = weatherSvg.sunclouds;
      break;
    case "Rain":
      svg = weatherSvg.rain;
      break;
    case "Snow":
      svg = weatherSvg.snow;
      break;
    case "Mist":
      svg = weatherSvg.mist;
      break;
    case "Thunderstorm":
      svg = weatherSvg.thander;
      break;

    default:
      svg = weatherSvg.clouds;
  }

  return svg;
}

/*  
  Clear - clear sky
  Clouds - few clouds
  Rain - light rain
  Snow - light snow
  Mist - mist


 */
const weatherSvg = {
  sunny: `<svg version="1.1" id="sunGlobe" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
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
</svg>`,
  sunclouds: `<svg class="svg" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
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
</svg>`,
  rain: `<svg class="svg" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
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

</svg>`,
  thander: `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
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
</svg>`,
  snow: `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
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
</svg>`,
  mist: `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
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
</svg>`,
  clouds: `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
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
</svg>`,
};

/* <!-- ICONS START -->
<!-- CHUBBYSUN -->
<svg version="1.1" id="sunGlobe" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
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
</svg>
<!-- CHUBBYSUN END --> */

/* <!-- CHUBBYPARTLY SUN -->
<svg class="svg" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
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
</svg>
<!-- CHUBBYPARTLY SUN END-->
 */

/* <!-- CHUBBYPARTLY SUN RAIN -->
 <svg class="svg" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
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

</svg>
<!-- CHUBBYPARTLY SUN RAIN END -->
 */

/* <!-- CHUBBYPARTLYSUNTHUNDER-->
<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
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
</svg>
<!-- CHUBBYPARTLYSUNTHUNDER END-->
 */

/* <!-- CHUBBYCLOUDY -->
<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
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
</svg>
<!-- CHUBBYCLOUDY END -->
 */

/* <!-- MOON -->
<svg version="1.1" id="sunGlobe" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve">
<radialGradient id="chubbyMoon_1_" cx="61.5" cy="38.1667" r="71.3092" gradientUnits="userSpaceOnUse">
	<stop  offset="0.4082" style="stop-color:#D3D0B2"/>
	<stop  offset="0.42" style="stop-color:#C5C4A0"/>
</radialGradient>
<ellipse id="chubbyMoon" fill="url(#chubbyMoon_1_)" stroke="#58595B" stroke-width="0.5" stroke-miterlimit="10" stroke-opacity="7.000000e-002" cx="50" cy="49.2" rx="27.3" ry="26.5"/>
<radialGradient id="mooncrater_2_" cx="213.1896" cy="228.9649" r="71.3092" gradientTransform="matrix(0.2761 0 0 0.2761 -4.5736 -17.9305)" gradientUnits="userSpaceOnUse">
	<stop  offset="0.385" style="stop-color:#C2B99D"/>
	<stop  offset="0.4082" style="stop-color:#B5AA86"/>
</radialGradient>
<ellipse id="mooncrater" fill="url(#mooncrater_2_)" stroke="#58595B" stroke-width="0.5" stroke-miterlimit="10" stroke-opacity="7.000000e-002" cx="51.1" cy="48.3" rx="7.5" ry="7.3"/>
<radialGradient id="mooncrater_4_" cx="193.2701" cy="181.016" r="71.3092" gradientTransform="matrix(7.215338e-002 0 0 7.215340e-002 25.6009 15.7241)" gradientUnits="userSpaceOnUse">
	<stop  offset="0.385" style="stop-color:#C2B99D"/>
	<stop  offset="0.4082" style="stop-color:#B5AA86"/>
</radialGradient>
<ellipse id="mooncrater_1_" fill="url(#mooncrater_4_)" stroke="#58595B" stroke-width="0.5" stroke-miterlimit="10" stroke-opacity="7.000000e-002" cx="38.7" cy="29.6" rx="2" ry="1.9"/>
<radialGradient id="mooncrater_6_" cx="374.2563" cy="167.1567" r="71.3092" gradientTransform="matrix(0.1198 0 0 0.1198 13.506 8.4935)" gradientUnits="userSpaceOnUse">
	<stop  offset="0.385" style="stop-color:#C2B99D"/>
	<stop  offset="0.4082" style="stop-color:#B5AA86"/>
</radialGradient>
<ellipse id="mooncrater_3_" fill="url(#mooncrater_6_)" stroke="#58595B" stroke-width="0.5" stroke-miterlimit="10" stroke-opacity="7.000000e-002" cx="57" cy="29.8" rx="3.3" ry="3.2"/>
<radialGradient id="mooncrater_14_" cx="463.2536" cy="274.3521" r="71.3092" gradientTransform="matrix(0.1405 0 0 0.1405 6.587 5.366)" gradientUnits="userSpaceOnUse">
	<stop  offset="0.385" style="stop-color:#C2B99D"/>
	<stop  offset="0.4082" style="stop-color:#B5AA86"/>
</radialGradient>
<ellipse id="mooncrater_5_" fill="url(#mooncrater_14_)" stroke="#58595B" stroke-width="0.5" stroke-miterlimit="10" stroke-opacity="7.000000e-002" cx="70" cy="45.4" rx="3.8" ry="3.7"/>
<radialGradient id="mooncrater_15_" cx="179.6487" cy="280.2852" r="71.3092" gradientTransform="matrix(0.1712 0 0 0.1712 2.2486 -2.7871)" gradientUnits="userSpaceOnUse">
	<stop  offset="0.385" style="stop-color:#C2B99D"/>
	<stop  offset="0.4082" style="stop-color:#B5AA86"/>
</radialGradient>
<ellipse id="mooncrater_8_" fill="url(#mooncrater_15_)" stroke="#58595B" stroke-width="0.5" stroke-miterlimit="10" stroke-opacity="7.000000e-002" cx="31" cy="47.1" rx="4.7" ry="4.5"/>
<radialGradient id="mooncrater_16_" cx="229.7374" cy="376.3218" r="71.3092" gradientTransform="matrix(0.1135 0 0 0.1135 12.8171 17.5574)" gradientUnits="userSpaceOnUse">
	<stop  offset="0.385" style="stop-color:#C2B99D"/>
	<stop  offset="0.4082" style="stop-color:#B5AA86"/>
</radialGradient>
<ellipse id="mooncrater_9_" fill="url(#mooncrater_16_)" stroke="#58595B" stroke-width="0.5" stroke-miterlimit="10" stroke-opacity="7.000000e-002" cx="37.6" cy="61.5" rx="3.1" ry="3"/>
<radialGradient id="mooncrater_17_" cx="415.0933" cy="434.7574" r="71.3092" gradientTransform="matrix(0.1135 0 0 0.1135 12.8171 17.5574)" gradientUnits="userSpaceOnUse">
	<stop  offset="0.385" style="stop-color:#C2B99D"/>
	<stop  offset="0.4082" style="stop-color:#B5AA86"/>
</radialGradient>
<ellipse id="mooncrater_11_" fill="url(#mooncrater_17_)" stroke="#58595B" stroke-width="0.5" stroke-miterlimit="10" stroke-opacity="7.000000e-002" cx="58.6" cy="68.2" rx="3.1" ry="3"/>
</svg>
<!-- MOON END --> */

/* <!-- CLOUDY NIGHT -->
<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve">
<g id="Layer_4">
	<radialGradient id="chubbyMoon_1_" cx="73.25" cy="20.1667" r="71.3092" gradientUnits="userSpaceOnUse">
		<stop  offset="0.4082" style="stop-color:#D3D0B2"/>
		<stop  offset="0.42" style="stop-color:#C5C4A0"/>
	</radialGradient>
		<ellipse id="chubbyMoon" fill="url(#chubbyMoon_1_)" stroke="#58595B" stroke-width="0.5" stroke-miterlimit="10" stroke-opacity="7.000000e-002" cx="61.8" cy="31.2" rx="27.3" ry="26.5"/>
		<radialGradient id="mooncrater_2_" cx="248.5072" cy="171.0079" r="71.3092" gradientTransform="matrix(0.2761 0 0 0.2761 -4.5736 -17.9305)" gradientUnits="userSpaceOnUse">
		<stop  offset="0.385" style="stop-color:#C2B99D"/>
		<stop  offset="0.4082" style="stop-color:#B5AA86"/>
	</radialGradient>
		<ellipse id="mooncrater" fill="url(#mooncrater_2_)" stroke="#58595B" stroke-width="0.5" stroke-miterlimit="10" stroke-opacity="7.000000e-002" cx="60.9" cy="32.3" rx="7.5" ry="7.3"/>
		<radialGradient id="mooncrater_4_" cx="328.3989" cy="-40.7337" r="71.3092" gradientTransform="matrix(7.215338e-002 0 0 7.215340e-002 25.6009 15.7241)" gradientUnits="userSpaceOnUse">
		<stop  offset="0.385" style="stop-color:#C2B99D"/>
		<stop  offset="0.4082" style="stop-color:#B5AA86"/>
	</radialGradient>
	
		<ellipse id="mooncrater_1_" fill="url(#mooncrater_4_)" stroke="#58595B" stroke-width="0.5" stroke-miterlimit="10" stroke-opacity="7.000000e-002" cx="48.5" cy="13.6" rx="2" ry="1.9"/>
		<radialGradient id="mooncrater_6_" cx="455.6206" cy="33.6355" r="71.3092" gradientTransform="matrix(0.1198 0 0 0.1198 13.506 8.4935)" gradientUnits="userSpaceOnUse">
		<stop  offset="0.385" style="stop-color:#C2B99D"/>
		<stop  offset="0.4082" style="stop-color:#B5AA86"/>
	</radialGradient>
		<ellipse id="mooncrater_3_" fill="url(#mooncrater_6_)" stroke="#58595B" stroke-width="0.5" stroke-miterlimit="10" stroke-opacity="7.000000e-002" cx="66.7" cy="13.8" rx="3.3" ry="3.2"/>
		<radialGradient id="mooncrater_7_" cx="532.6715" cy="160.4353" r="71.3092" gradientTransform="matrix(0.1405 0 0 0.1405 6.587 5.366)" gradientUnits="userSpaceOnUse">
		<stop  offset="0.385" style="stop-color:#C2B99D"/>
		<stop  offset="0.4082" style="stop-color:#B5AA86"/>
	</radialGradient>
		<ellipse id="mooncrater_5_" fill="url(#mooncrater_7_)" stroke="#58595B" stroke-width="0.5" stroke-miterlimit="10" stroke-opacity="7.000000e-002" cx="79.8" cy="29.4" rx="3.8" ry="3.7"/>
		<radialGradient id="mooncrater_10_" cx="236.5847" cy="186.8517" r="71.3092" gradientTransform="matrix(0.1712 0 0 0.1712 2.2486 -2.7871)" gradientUnits="userSpaceOnUse">
		<stop  offset="0.385" style="stop-color:#C2B99D"/>
		<stop  offset="0.4082" style="stop-color:#B5AA86"/>
	</radialGradient>
		<ellipse id="mooncrater_8_" fill="url(#mooncrater_10_)" stroke="#58595B" stroke-width="0.5" stroke-miterlimit="10" stroke-opacity="7.000000e-002" cx="40.8" cy="31.1" rx="4.7" ry="4.5"/>
		<radialGradient id="mooncrater_12_" cx="315.6328" cy="235.365" r="71.3092" gradientTransform="matrix(0.1135 0 0 0.1135 12.8171 17.5574)" gradientUnits="userSpaceOnUse">
		<stop  offset="0.385" style="stop-color:#C2B99D"/>
		<stop  offset="0.4082" style="stop-color:#B5AA86"/>
	</radialGradient>
		<ellipse id="mooncrater_9_" fill="url(#mooncrater_12_)" stroke="#58595B" stroke-width="0.5" stroke-miterlimit="10" stroke-opacity="7.000000e-002" cx="47.3" cy="45.5" rx="3.1" ry="3"/>
		<radialGradient id="mooncrater_13_" cx="500.9887" cy="293.8005" r="71.3092" gradientTransform="matrix(0.1135 0 0 0.1135 12.8171 17.5574)" gradientUnits="userSpaceOnUse">
		<stop  offset="0.385" style="stop-color:#C2B99D"/>
		<stop  offset="0.4082" style="stop-color:#B5AA86"/>
	</radialGradient>
<ellipse id="mooncrater_11_" fill="url(#mooncrater_13_)" stroke="#58595B" stroke-width="0.5" stroke-miterlimit="10" stroke-opacity="7.000000e-002" cx="68.4" cy="52.2" rx="3.1" ry="3"/>
</g>
<g id="smallcloud">
<path id="XMLID_3_" fill="#5BCAEB" stroke="#6D6E71" stroke-width="0.5" stroke-miterlimit="10" stroke-opacity="8.000000e-002" d="
		M19,39.9c0,0,5.7,1.7,7-1.2c5.4,3,9.1,0.6,11.5,0c0.5,2.3,6.1,1.2,6.1,1.2s10.7-2.6,9.9-11.7c0,0-1.9-12.4-14-10
		c0,0-9.7-9.5-18.6,2.5c0,0-9-0.5-10.3,10C10.6,30.7,10.9,37.8,19,39.9z"/>
</g>
<g id="bigCloud">
<path id="XMLID_9_" fill="#F4F4F4" stroke="#515251" stroke-width="0.5" stroke-miterlimit="10" stroke-opacity="8.000000e-002" d="	M22.3,65.5c0,0-8.9-2.9-9.3-12.8s10-11.3,11.4-10.1c0,0,2.5-8.4,10.1-8.6c0,0,3.5-13.4,17.8-13.1c0,0,15.6-0.8,17.9,16.4
c0,0,12.9-1,13.4,15.1c0,0-1.4,10.9-11.9,13.1c0,0-12,2-13.8-2.3c-0.2,2.1-15,6-19.6,0C33.8,68.4,22.3,65.5,22.3,65.5z"/>
</g>
</svg>
<!-- CLOUDY NIGHT --> */

/* <!-- CLOUDY NIGHT RAIN -->
<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve">
<g id="Layer_5">
	<radialGradient id="chubbyMoon_1_" cx="69.25" cy="24.1667" r="71.3092" gradientUnits="userSpaceOnUse">
		<stop  offset="0.4082" style="stop-color:#D3D0B2"/>
		<stop  offset="0.42" style="stop-color:#C5C4A0"/>
	</radialGradient>
	
		<ellipse id="chubbyMoon" fill="url(#chubbyMoon_1_)" stroke="#58595B" stroke-width="0.5" stroke-miterlimit="10" stroke-opacity="7.000000e-002" cx="57.8" cy="35.2" rx="27.3" ry="26.5"/>
	
		<radialGradient id="mooncrater_2_" cx="241.2625" cy="178.2525" r="71.3092" gradientTransform="matrix(0.2761 0 0 0.2761 -4.5736 -17.9305)" gradientUnits="userSpaceOnUse">
		<stop  offset="0.385" style="stop-color:#C2B99D"/>
		<stop  offset="0.4082" style="stop-color:#B5AA86"/>
	</radialGradient>
	
		<ellipse id="mooncrater" fill="url(#mooncrater_2_)" stroke="#58595B" stroke-width="0.5" stroke-miterlimit="10" stroke-opacity="7.000000e-002" cx="58.9" cy="34.3" rx="7.5" ry="7.3"/>
	
		<radialGradient id="mooncrater_4_" cx="300.6801" cy="-13.015" r="71.3092" gradientTransform="matrix(7.215338e-002 0 0 7.215340e-002 25.6009 15.7241)" gradientUnits="userSpaceOnUse">
		<stop  offset="0.385" style="stop-color:#C2B99D"/>
		<stop  offset="0.4082" style="stop-color:#B5AA86"/>
	</radialGradient>
	
		<ellipse id="mooncrater_1_" fill="url(#mooncrater_4_)" stroke="#58595B" stroke-width="0.5" stroke-miterlimit="10" stroke-opacity="7.000000e-002" cx="46.5" cy="15.6" rx="2" ry="1.9"/>
	
		<radialGradient id="mooncrater_6_" cx="438.9305" cy="50.3256" r="71.3092" gradientTransform="matrix(0.1198 0 0 0.1198 13.506 8.4935)" gradientUnits="userSpaceOnUse">
		<stop  offset="0.385" style="stop-color:#C2B99D"/>
		<stop  offset="0.4082" style="stop-color:#B5AA86"/>
	</radialGradient>
	
		<ellipse id="mooncrater_3_" fill="url(#mooncrater_6_)" stroke="#58595B" stroke-width="0.5" stroke-miterlimit="10" stroke-opacity="7.000000e-002" cx="64.7" cy="15.8" rx="3.3" ry="3.2"/>
	
		<radialGradient id="mooncrater_14_" cx="518.4319" cy="174.6749" r="71.3092" gradientTransform="matrix(0.1405 0 0 0.1405 6.587 5.366)" gradientUnits="userSpaceOnUse">
		<stop  offset="0.385" style="stop-color:#C2B99D"/>
		<stop  offset="0.4082" style="stop-color:#B5AA86"/>
	</radialGradient>
	
		<ellipse id="mooncrater_5_" fill="url(#mooncrater_14_)" stroke="#58595B" stroke-width="0.5" stroke-miterlimit="10" stroke-opacity="7.000000e-002" cx="77.8" cy="31.4" rx="3.8" ry="3.7"/>
	
		<radialGradient id="mooncrater_15_" cx="224.9055" cy="198.5309" r="71.3092" gradientTransform="matrix(0.1712 0 0 0.1712 2.2486 -2.7871)" gradientUnits="userSpaceOnUse">
		<stop  offset="0.385" style="stop-color:#C2B99D"/>
		<stop  offset="0.4082" style="stop-color:#B5AA86"/>
	</radialGradient>
	
		<ellipse id="mooncrater_8_" fill="url(#mooncrater_15_)" stroke="#58595B" stroke-width="0.5" stroke-miterlimit="10" stroke-opacity="7.000000e-002" cx="38.8" cy="33.1" rx="4.7" ry="4.5"/>
	
		<radialGradient id="mooncrater_16_" cx="298.0132" cy="252.9846" r="71.3092" gradientTransform="matrix(0.1135 0 0 0.1135 12.8171 17.5574)" gradientUnits="userSpaceOnUse">
		<stop  offset="0.385" style="stop-color:#C2B99D"/>
		<stop  offset="0.4082" style="stop-color:#B5AA86"/>
	</radialGradient>
	
		<ellipse id="mooncrater_9_" fill="url(#mooncrater_16_)" stroke="#58595B" stroke-width="0.5" stroke-miterlimit="10" stroke-opacity="7.000000e-002" cx="45.3" cy="47.5" rx="3.1" ry="3"/>
	
		<radialGradient id="mooncrater_17_" cx="483.3691" cy="311.4201" r="71.3092" gradientTransform="matrix(0.1135 0 0 0.1135 12.8171 17.5574)" gradientUnits="userSpaceOnUse">
		<stop  offset="0.385" style="stop-color:#C2B99D"/>
		<stop  offset="0.4082" style="stop-color:#B5AA86"/>
	</radialGradient>
	
		<ellipse id="mooncrater_11_" fill="url(#mooncrater_17_)" stroke="#58595B" stroke-width="0.5" stroke-miterlimit="10" stroke-opacity="7.000000e-002" cx="66.4" cy="54.2" rx="3.1" ry="3"/>
</g>
<g id="raindrops">
	<linearGradient id="droplet1" gradientUnits="userSpaceOnUse" x1="30.1887" y1="74.3552" x2="39.518" y2="74.3552">
		<stop  offset="0.4718" style="stop-color:#5CCAEB"/>
		<stop  offset="0.5339" style="stop-color:#51B1CD"/>
	</linearGradient>
	<path id="drop1" fill="url(#droplet1)" d="M34.8,67.2c0,0-10.4,14.3,0,14.3C45.4,81.5,34.8,67.2,34.8,67.2z"/>
	<linearGradient id="droplet2" gradientUnits="userSpaceOnUse" x1="43.5804" y1="74.3552" x2="52.9097" y2="74.3552">
		<stop  offset="0.4718" style="stop-color:#5CCAEB"/>
		<stop  offset="0.5339" style="stop-color:#51B1CD"/>
	</linearGradient>
	<path id="drop2" fill="url(#droplet2)" d="M48.2,67.2c0,0-10.4,14.3,0,14.3C58.8,81.5,48.2,67.2,48.2,67.2z"/>
	<linearGradient id="droplet3" gradientUnits="userSpaceOnUse" x1="57.7054" y1="74.3552" x2="67.0347" y2="74.3552">
		<stop  offset="0.4718" style="stop-color:#5CCAEB"/>
		<stop  offset="0.5339" style="stop-color:#51B1CD"/>
	</linearGradient>
	<path id="drop3" fill="url(#droplet3)" d="M62.3,67.2c0,0-10.4,14.3,0,14.3C72.9,81.5,62.3,67.2,62.3,67.2z"/>
</g>
<g id="bigCloud">
	
		<path id="XMLID_17_" fill="#F4F4F4" stroke="#515251" stroke-width="0.5" stroke-miterlimit="10" stroke-opacity="8.000000e-002" d="
		M22.3,65.5c0,0-8.9-2.9-9.3-12.8s10-11.3,11.4-10.1c0,0,2.5-8.4,10.1-8.6c0,0,3.5-13.4,17.8-13.1c0,0,15.6-0.8,17.9,16.4
		c0,0,12.9-1,13.4,15.1c0,0-1.4,10.9-11.9,13.1c0,0-12,2-13.8-2.3c-0.2,2.1-15,6-19.6,0C33.8,68.4,22.3,65.5,22.3,65.5z"/>
</g>
</svg>
<!-- CLOUDY NIGHT RAIN END --> */

/* <!-- CHUBBYCLOUD RAIN -->
  <svg class="svg" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve">
<g id="rain">
	<path class="raindrop" id="drop1" fill="url(#XMLID_19_)" stroke="#000000" stroke-width="0.5" stroke-miterlimit="10" stroke-opacity="0.5" d="
		M33.8,67.2c0,0-10.4,14.3,0,14.3C44.4,81.5,33.8,67.2,33.8,67.2z"/>
	<path class="raindrop" id="drop2" fill="url(#XMLID_19_)" stroke="#000000" stroke-width="0.5" stroke-miterlimit="10" stroke-opacity="0.5" d="
		M48.2,67c0,0-10.4,14.3,0,14.3C58.8,81.3,48.2,67,48.2,67z"/>
	<linearGradient id="XMLID_19_" gradientUnits="userSpaceOnUse" x1="57.7887" y1="74.1052" x2="67.118" y2="74.1052">
		<stop  offset="0.4718" style="stop-color:#5CCAEB"/>
		<stop  offset="0.5339" style="stop-color:#51B1CD"/>
	</linearGradient>
	<path class="raindrop" id="drop3" fill="url(#XMLID_19_)" stroke="#000000" stroke-width="0.5" stroke-miterlimit="10" stroke-opacity="0.5" d="
		M62.4,67c0,0-10.4,14.3,0,14.3C73,81.3,62.4,67,62.4,67z"/>
</g>
<g id="bigCloudRain">
	
		<path id="XMLID_1_" fill="#F4F4F4" stroke="#515251" stroke-width="0.5" stroke-miterlimit="10" stroke-opacity="8.000000e-002" d="
		M22.3,65.5c0,0-8.9-2.9-9.3-12.8s10-11.3,11.4-10.1c0,0,2.5-8.4,10.1-8.6c0,0,3.5-13.4,17.8-13.1c0,0,15.6-0.8,17.9,16.4
		c0,0,12.9-1,13.4,15.1c0,0-1.4,10.9-11.9,13.1c0,0-12,2-13.8-2.3c-0.2,2.1-15,6-19.6,0C33.8,68.4,22.3,65.5,22.3,65.5z"/>
</g>
</svg>
<!-- CHUBBYCLOUD RAIN END --> */

/* <!-- CHUBBYCLOUD SNOW -->
<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
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
</svg>
<!--CHUBBYCLOUD SNOW END--> */

/* <!-- CHUBBYMISTCLOUDS -->
<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
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
</svg>
<!-- CHUBBYMISTCLOUDS END -->  */

/* <!-- CHUBBYCLOUD -->
<svg class="svg" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve">
<g id="bigCloudRain">
	
		<path id="XMLID_1_" fill="#F4F4F4" stroke="#515251" stroke-width="0.5" stroke-miterlimit="10" stroke-opacity="8.000000e-002" d="
		M22.3,65.5c0,0-8.9-2.9-9.3-12.8s10-11.3,11.4-10.1c0,0,2.5-8.4,10.1-8.6c0,0,3.5-13.4,17.8-13.1c0,0,15.6-0.8,17.9,16.4
		c0,0,12.9-1,13.4,15.1c0,0-1.4,10.9-11.9,13.1c0,0-12,2-13.8-2.3c-0.2,2.1-15,6-19.6,0C33.8,68.4,22.3,65.5,22.3,65.5z"/>
</g>
</svg>
<!-- CHUBBYCLOUD END -->
<!--ICONS END--> */
