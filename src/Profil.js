import React from 'react';
import { 
    Card,
    CardBody,
    FormGroup,
    Label,
    Input,
    Form,
    Button,
    CardFooter
} from 'reactstrap';
import axios from 'axios';
import Avatar from 'react-avatar-edit'


class Profil extends React.Component{
    constructor(props){
        super(props);
        const src = './img/avatar.jpg'
        this.state = {
            data:[],
            checked: 'checked',
            preview: null,
            src
        };
        this.onCrop = this.onCrop.bind(this)
        this.onClose = this.onClose.bind(this)
    }

    onClose() {
        this.setState({preview: null})
    }
      
    onCrop(preview) {
        this.setState({preview})
    }

    componentDidMount(){
        this.getData();
    }

    getData(){
        axios.get('http://192.168.100.101:3030/getData').then(res=>{
            this.setState({data:res.data});
        });
    }
     
    updateData=ev=>{
        var id = ev.target.getAttribute('data-key');
        var data = this.state.data.find(x=>x._id===id);
        this.props.onUpdateView('form', data);
    }
    
    render(){
        var data = this.state.data.map((item, i)=>{
            var stateL = '';
            var stateP = '';
            if(item.jk == 'L'){
                stateL = 'checked';
            }

            if(item.jk == 'P'){
                 stateP = 'checked'
            }
            
            return(
                <div>
                <div className='text-center'>
                <Avatar
                  width={390}
                  height={295}
                  onCrop={this.onCrop}
                  onClose={this.onClose}
                  src={this.state.src}
                />
                    <img src={this.state.preview} alt="Preview" /><br></br>
                    {/* <img src={require("./img/"+item.gambar)} style={{width:"200px", height:"200px"}}/> */}
                <Button style={{width:"130px", backgroundColor:"#4169E1"}}>Ubah foto</Button>
                </div><br></br>
                <Card>
                <CardBody>
                    <Form>
                    <FormGroup>
                            <Label>Nama : </Label>
                            <Input type="text" value={item.nama} onChange={ev=>this.setState({nama:ev.target.value})}/>
                        </FormGroup>
                        <FormGroup>
                            <Label>Jenis Kelamin :</Label>
                        </FormGroup>
                        
                        <FormGroup check>
                            <Label check>
                                 <Input type="radio" name="jk" id='L' value={item.jk} checked={stateL} onClick={ev=>this.setState({jk:'L'})}/>Laki - Laki
                            </Label>
                        </FormGroup>
                        <FormGroup check>
                            <Label check>
                                 <Input type="radio" name="jk" id='P' value={item.jk} checked={stateP} onClick={ev=>this.setState({jk:'P'})}/>Perempuan
                            </Label>
                        </FormGroup><br></br>
                        <FormGroup>
                            <Label>Email : </Label>
                            <Input type="email" value={item.email} placeholder="Masukan Email" onChange={ev=>this.setState({email:ev.target.value})}/>
                        </FormGroup>
                    </Form>
                </CardBody>
                <CardFooter>
                    <Button data-key={item._id} onClick={this.updateData} id="button" style={{width:"120px", float:"right", backgroundColor:"#4169E1"}}>Simpan</Button>
                </CardFooter>
            </Card>
            </div>
           )
            
        });
        return(
            <div className="container"><br></br>
            <h1 className="text-center" id="judul">Profil</h1>
            <hr id="garis2"></hr><br></br>
             {data}
            </div>
        )
    }
}
export default Profil;