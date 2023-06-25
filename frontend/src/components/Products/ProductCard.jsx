import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Link, useNavigate  } from 'react-router-dom'
import { CardActionArea } from '@mui/material';
import { useDispatch } from 'react-redux';
import { getSelectedProduct } from '../../store/Features/ProductSlice';
import { baseUrl } from '../Common/common';



const ProductCard = (props) =>  {

  const dispatch = useDispatch()

  const HandleBooknow = () => {
      dispatch(getSelectedProduct(props.items));
  }

  const arrayBufferToBase64 = (buffer) => {
    var binary = '';
    var bytes = [].slice.call(new Uint8Array(buffer));
    bytes.forEach((b) => binary += String.fromCharCode(b));
    return window.btoa(binary);
  };


  return (
    <Link to={`/product/${props.id}`} className='link-btn'>
      <Card className="product-card">
            <CardActionArea>
              <CardMedia
                component="img"
                height="180"
                image={`data:${props.image.contentType};base64,${arrayBufferToBase64(props.image.data.data)}`}
                alt="green iguana"
                className="product-image"
              />
              <CardContent>
                <p className='category-title'>{props.category}</p>
                <Typography gutterBottom variant="h5" component="div" className='product-name'>
                  {props.name}
                </Typography>
                <p className='item-price'>Planning Fee <br></br><span>₹{props.fee}</span></p>
                <div className="product-items">
                  { props.items.slice(0,4).map((item) =>(<p className='product-item'>{item}</p>)) }
                </div>
                <div className="card-btn-wrapper mt-3">
                <Link to={`/contact`} className='link-btn'><button className='product-card-btn' onClick={HandleBooknow}>Book now</button></Link>
                  <button className='product-card-btn2'> <Link to={`/product/${props.id}`} className='link-btn'>More Details </Link></button>
                </div>
              </CardContent>
            </CardActionArea>
      </Card>
    </Link>
  );
}
export default ProductCard