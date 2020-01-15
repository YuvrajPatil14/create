
import React, { Component } from 'react';
//import QRCode from 'qrcode';
import QRCode from 'qrcode.react';

class Qr extends React.Component{
    constructor(props) {
        super(props);
      }
      
      downloadQR=(event)=>{
        const canvas = document.getElementById("123456");
        const pngUrl = canvas
          .toDataURL("image/png")
          .replace("image/png", "image/octet-stream");
        let downloadLink = document.createElement("a");
        downloadLink.href = pngUrl;
        downloadLink.download = "123456789.png";
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
      };
     
      render(){
        console.log(this.props.ip);
        return(
          <div className="DownloadQR">
            <QRCode
                id="123456"
                value={this.props.ip}
                size={290}
                level={"H"}
                includeMargin={true}
              />
              <a onClick={this.downloadQR}> Download QR </a>
          </div>
          
        );
      }
}




export default Qr;