import React from 'react';
import Select from 'react-select';
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

//  const options = [
//      { value: 'action', label: 'Action' },
//      { value: 'komedi', label: 'Komedi' },
//      { value: 'petualangan', label: 'Petualangan' },
//      { value: 'drama', label: 'Drama' },
//      { value: 'horror', label: 'Horror' },
//      { value: 'science fiction', label: 'Science Fiction' },
//      { value: 'musikal', label: 'Musikal' },
//      { value: 'perang', label: 'Perang' },
//      { value: 'romantis', label: 'Romantis' },
//      { value: 'fantasi', label: 'Fantasi' },
//      { value: 'animasi', label: 'Animasi' },
//      { value: 'dokumenter', label: 'Dokumenter' },
//    ];

class Add extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            id:'',
            link:'',
            judul:'',
            keterangan:'',
            selectedOption: null
        };
       
    }

//      handleChange = selectedOption => {
//        this.setState(
//           { selectedOption },
//          () => console.log(`Option selected:`, this.state.selectedOption)
//      );
//  };
  
    componentDidMount(){
        if(this.props.data!=null){
            this.setState(this.props.data);
        }
    }


    kirim=(ev)=>{
        var url = 'http://192.168.100.101:3030/addVideo';
      
        axios.post(url, this.state).then(res=>{
            if(res=="sukses"){
                this.setState({ id:'', link:'', judul:'', keterangan:'',});
            }
        })

    }
     

    render(){
        const { selectedOption } = this.state;
        return(
            <div className="container"><br></br>
            <h1 className="text-center" id="judul">Tambah Video</h1>
            <hr id="garis"></hr><br></br>
            <Card>
                <CardBody>
                    <Form>
                        <FormGroup>
                            <Label>Id : </Label>
                            <Input type="text" value={this.state.id} placeholder="Masukan Id Video" onChange={ev=>this.setState({id:ev.target.value})}/>
                        </FormGroup>
                        <FormGroup>
                            <Label>Link : </Label>
                            <Input type="text" value={this.state.link} placeholder="Masukan Link Video" onChange={ev=>this.setState({link:ev.target.value})}/>
                        </FormGroup>
                         {/* <FormGroup>
                            <Label>Genre : </Label>
                            <Select
                               value={selectedOption}
                               onChange={this.handleChange}
                               options={options}
                               isMulti
                            />
                        </FormGroup>  */}
                        <FormGroup>
                            <Label>Judul : </Label>
                            <Input type="text" value={this.state.judul} placeholder="Masukan Judul Video" onChange={ev=>this.setState({judul:ev.target.value})}/>
                        </FormGroup>
                        <FormGroup>
                            <Label>Keterangan : </Label>
                            <Input type="textarea" style={{height:"150px"}} value={this.state.keterangan} placeholder="Masukan Keterangan Video" onChange={ev=>this.setState({keterangan:ev.target.value})}/>
                        </FormGroup>
                    </Form>
                </CardBody>
                <CardFooter>
                    <Button onClick={this.kirim} id="button" style={{width:"120px", float:"right", backgroundColor:"#4169E1"}}>Kirim</Button>
                </CardFooter>
            </Card><br></br>
            <i>Keterangan :</i>
            <p>1. Masukan id yang terdapat pada url video youtube anda.
                  Contoh : https://www.youtube.com/watch?v=<b>"FlsCjmMhFmw"</b> (tanpa tanda kutip).
            </p>
            </div>
        )
    }
}
export default Add;