import React from 'react';
import { motion } from 'framer-motion';
import { deleteItem } from '../../redux/cartSlice';
import { useDispatch } from 'react-redux';

const Tr = ({item}) => {
    const dispatch = useDispatch();

    const deleteProduct = () => {
        dispatch(deleteItem(item.id));
    }

    return (
        <tr>
            <td>
                <img src={item.imgUrl} alt="" />
            </td>
            <td>{item.productName}</td>
            <td>${item.price}</td>
            <td>{item.quantity}px</td>
            <td>
                <motion.i whileTap={{scale: 1.2}} 
                    className="ri-delete-bin-line"
                    onClick={deleteProduct}>

                </motion.i>
            </td>
        </tr>
    );
}

export default Tr;