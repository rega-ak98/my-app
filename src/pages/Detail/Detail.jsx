import { Box} from '@mui/system';
import React, { useEffect, useState } from 'react';
import FormPencarian from '../../components/FormPencarian/FormPencarian';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/NavBar/Navbar';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import { useParams } from 'react-router-dom';


function Detail(){

    const { id } = useParams();
  const [dataDetail, setDataDetail] = useState([])

  useEffect(() => {
    handleDetail();
  }, [id])

  const handleDetail = async () =>{
    try {
      const res = await axios(`https://rent-cars-api.herokuapp.com/customer/car/${id}`);
      setDataDetail(res.data)
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div style={{ minHeight: '100vh' }}>
    <Navbar />
    <Box sx={{ minHeight: 150, backgroundColor: '#F1F3FF;', fontFamily:['Halvetica'] }}></Box>
    <FormPencarian />
    <Container maxWidth="xl" sx={{ display: 'flex', justifyContent: 'center' }}>
        <Card sx={{marginY:"3%" }}>
          <CardContent>
          <p>Include</p>
        <ul>
            <li>Apa saja yang termasuk dalam paket misal durasi max 12 jam</li>
            <li>Sudah termasuk bensin selama 12 jam</li>
            <li>Sudah termasuk Tiket Wisata</li>
            <li>sudah termasuk pajak</li>
        </ul>
        <p>Exclude</p>
        <ul>
            <li>Tidak termasuk biaya makan sopir Rp.75.000/hari</li>
            <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp.20.000/jam</li>
            <li>Tidak termasuk akomodasi penginapan</li>
        </ul>
        <p><strong>Refund, Reschedule, Overtime</strong></p>
        <ul>
            <li>Tidak termasuk biaya makan sopir Rp.75.000/hari</li>
            <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp.20.000/jam</li>
            <li>Tidak termasuk akomodasi penginapan</li>
            <li>Tidak termasuk biaya makan sopir Rp.75.000/hari</li>
            <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp.20.000/jam</li>
            <li>Tidak termasuk akomodasi penginapan</li>
            <li>Tidak termasuk biaya makan sopir Rp.75.000/hari</li>
            <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp.20.000/jam</li>
            <li>Tidak termasuk akomodasi penginapan</li>
        </ul>
          </CardContent>
          <CardActions sx={{justifyContent:'flex-end'}}>
        <Button color="success" variant="contained"  >Lanjutkan Pembayaran</Button>
      </CardActions>
            </Card>
            <Card sx={{maxWidth:"350", marginY:"3%" }}>
                <CardMedia
                        component="img"
                        height="200"
                        image={dataDetail.image}
                        alt="img-car" 
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    {dataDetail.name}
                    </Typography>
                    <p><img src="../images/fi_users.png" alt="" style={{marginRight:'2%'}}/>4 orang
                    <img src="../images/fi_settings.png" alt="" style={{marginLeft:'3%', marginRight:'2%',}}/>Manual
                    <img src="../images/fi_calendar.png" alt="" style={{marginLeft:'3%', marginRight:'2%',}}/>Tahun 2020</p>
                    <p>Total <span style={{marginLeft:'50%'}}><strong>Rp.{dataDetail.price}</strong></span></p>
                </CardContent>
                <CardActions>
                <Button color="success" variant="contained" fullWidth>Lanjurkan Pembayaran</Button>
            </CardActions>
            </Card>
    </Container>
    <Footer />
  </div>
);
}

export default Detail;