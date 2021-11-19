import axios from "axios"
import jsSHA from "jssha"

function getAuthorizationHeader() {
   //  填入自己 ID、KEY 開始
      let AppID = process.env.REACT_APP_TDX_ID ;
      let AppKey = process.env.REACT_APP_TDX_KEY ;
   //  填入自己 ID、KEY 結束
      let GMTString = new Date().toGMTString();
      let ShaObj = new jsSHA('SHA-1', 'TEXT', {
         hmacKey: { value: AppKey, format: "TEXT" },
     });
     ShaObj.update('x-date: ' + GMTString);
     let HMAC = ShaObj.getHMAC('B64');
     let Authorization = `hmac username="${AppID}", algorithm="hmac-sha1", headers="x-date", signature="${HMAC}"`;
     return { 'Authorization': Authorization, 'X-Date': GMTString }; 
}

export const getAllAttractions = (url) => {
   let category = ""
   switch (url)  {
      case "/attraction":
         category = "ScenicSpot";  
         break;   
      case "/restaurant":
         category = "Restaurant";  
         break;   
      case "/hotel":
         category = "Hotel"; 
         break;
      case "/activity":
         category = "Activity"; 
         break;
      default:
         category = "ScenicSpot";  
         break;  
   }
   return axios.get(`https://ptx.transportdata.tw/MOTC/v2/Tourism/${category}?$top=16&$format=JSON`,
   {
      headers: getAuthorizationHeader()
   }
   )
}

export const getClasses = (city, id) => {
   const eq = " eq ";
   return axios.get(`https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot/${city}?$filter=ID${eq}'${id}'&$format=JSON`,
   {
      headers: getAuthorizationHeader()
   }
   )
}

// Mapbox
var mymap = L.map('mapid').setView([51.505, -0.09], 13);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1Ijoib2xpdmlhbGluMjEiLCJhIjoiY2t3NjAycDNqYzJmODJ1cTFkOHV1bjU1eiJ9.jkt13ByA3vPqOwF-K6aTbA'
}).addTo(mymap);

// 標記 icon
var marker = L.marker([51.5, -0.09]).addTo(mymap)
 .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
.openPopup();