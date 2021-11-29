// import React, { useState } from 'react'
// import styles from './ShoppingCar.module.scss'
// import 'bootstrap/dist/css/bootstrap.min.css'

// import { Link, useLocation } from 'react-router-dom'

// import {
//   Badge,
//   Dropdown,
//   DropdownItem,
//   DropdownToggle,
//   DropdownMenu
// } from 'reactstrap'

// const ShoppingCar = ({ emptyCart, cartItems }) => {
//   const [dropdown, setDropdown] = useState(false)
//   const totalPrice = Object.values(cartItems).reduce(
//     (sum, item) => sum + parseInt(item.price),
//     0
//   )
//   const totalItems = Object.values(cartItems).reduce(
//     (sum, item) => sum + parseInt(item.qty),
//     0
//   )

//   const openCloseDropdown = () => {
//     setDropdown(!dropdown)
//   }
//   // let cantidad = 0;
//   // let total = 0;
//   // for (let val in cartItems) {
//   //   total += parseInt(cartItems[val].price);
//   //   cantidad += cartItems[val].qty;
//   // }

//   return (
//     <>
//       <Dropdown isOpen={dropdown} toggle={openCloseDropdown}>
//         <DropdownToggle caret>
//           Dropdown
//         </DropdownToggle>
//         <DropdownMenu>
//           <DropdownItem header>
//             Productos
//           </DropdownItem>
//           <DropdownItem divider />
//           {cartItems.map((item) => {
//             const { _id, name, img, price } = item
//             return (
//               <DropdownItem>
//                 <Badge>{item.length}</Badge>
//               </DropdownItem>
//             )
//           })}
//         </DropdownMenu>
//       </Dropdown>
//     </>
//   )
// }

// export default ShoppingCar
