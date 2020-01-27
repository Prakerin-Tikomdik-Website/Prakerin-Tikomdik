import React from 'react';
import {
  Card, CardText, CardBody,
  CardTitle, CardSubtitle, Col, Row
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Youtube from 'react-youtube-embed';
import axios from 'axios';


class Video extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
       viddata: []
       
    }
  }
  componentDidMount(){
    this.getData();
}


getData(){
    axios.get('http://192.168.100.101:3030/getVideo').then(res=>{
        this.setState({viddata:res.data});
    });
}
  render() {
    var data = this.state.viddata.map(x => {
    var obj =  x.video.map(y =>{
      var ketbaru = y.keterangan.substr(0, 30);
        return (
          <Col md="4">
          <a href={y.link} id="link">
          <Card id="card">
           <Youtube id={y.id}/>
          <CardBody>
            <CardTitle id="title"><b>{y.judul}</b></CardTitle>
            <CardSubtitle>{x.nama}</CardSubtitle>
            <CardText>{ketbaru + " ..."}</CardText>
          </CardBody>
        </Card><br></br>
        </a>
        </Col>
        );
      })
     return obj;
  })
    return (
      <div className="container"><br></br>
      <h1 className="text-center" id="judul">List Video</h1> 
      <hr id="garis3"></hr><br></br>
            <Row style={{"float": "left"}}>
               {data}
            </Row>
      </div>
    );
    
  }
}

export default Video;
