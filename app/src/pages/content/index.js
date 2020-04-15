import React, { Component } from 'react';
import axios from "axios";

class Conent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imgsrc:''
        }
    }
    componentDidMount(){
        this.getImgCode()
    }
    getImgCode() {
     
        // new Image
        axios({
          url: `http://172.16.53.169:8799/euip/Register/verifyCode2?vCodeTarget=17764526871`,
          headers: { "Content-Type": "application/octet-stream" },
          method: "get",
          responseType: "blob"
        })
          .then(res => {
            // console.log(res.headers.vcodecontext)
            //上下文验证
            let vCode = res.headers.vcodecontext;
            let blob = new Blob([res.data], { type: "application/octet-stream" });
            let src = URL.createObjectURL(blob);
            this.setState({
                imgsrc:src
            })
          })
          .catch(err => {
            console.log(err);
          });
  
       
        
       
      }
    render() { 
        return ( 
            <div className="">
                这是首页
                <img src={this.state.imgsrc} alt  width="100px" height="100px"/>
                <div id="ImgCode">

                </div>
            </div>
         );
    }
}
 
export default Conent;