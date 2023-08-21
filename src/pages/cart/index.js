import React from "react";
import { CancelIcon, GoogleIcon } from "@/components/Icons";
import { Button } from 'antd'
import { useRouter } from "next/navigation";
import { CloseOutlined } from '@ant-design/icons'
import { useState, useEffect } from "react";
import CartCourseCart from "@/components/CartCourseCard";
import Container from "@/components/Container";


const Cart = () => {


    const course = [
        {
            id: 1,
            lecturer: "Michael Jackson",
            name: "NestJs - Discovering The Power",
            image: "https://res.cloudinary.com/dwgr16gij/image/upload/v1688767148/image/pfydn6pxjif31opw0acz.jpg",
            price: 22,
            desc: "Build full featured backend APIs with Nest, TypeORM, and Typescript. Includes testing!",
            rating: 9.5
        },
        {
            id: 2,
            lecturer: "Xi Jinping",
            name: "Javascript - Zero To Hero",
            image: "https://res.cloudinary.com/dwgr16gij/image/upload/v1688767147/image/rdsve88qvxg2rzhjxqps.png",
            price: 11,
            desc: "The modern JavaScript course for everyone! Master JavaScript with projects, challenges and theory.",
            rating: 10
        },
        {
            id: 3,
            lecturer: "Will Amsterdam",
            name: "Angular - The Complete Guide (2023)",
            image: "https://res.cloudinary.com/dwgr16gij/image/upload/v1688767147/image/ji0cozfalhqrzx5ogrvq.jpg",
            price: 33,
            desc: "Master Angular (formerly Angular2) and build awesome, reactive web apps!",
            rating: 9.5
        }
    ]
    const originPrice = 99

    const [cartList, setCartList] = useState(course)
    console.log("cartList:", cartList)

    const router = useRouter()
    const [coupon, setCoupon] = useState("")
    const [appliedCoupon, setAppliedCoupon] = useState(false);

    const totalPrice = cartList.reduce((total, course) => total + course.price, 0)
    const totalCourse = cartList.length;


    const handleCancelCoupon = () => {
        setCoupon('');
        setAppliedCoupon(false);
    };
    const handleAddCoupon = () => {
        setAppliedCoupon(true);
    };
    const handleRemoveCourse = (id) => {
        //setCartList(prevCartList => prevCartList.filter((item) => item.id !== id));
        const newList = cartList.filter((i) => i.id !== id)
        setCartList([...newList])
    }
    //console.log('newStateList: ', newStateList);

    console.dir(handleRemoveCourse)


    return (
        <Container>
            <div
                style={{
                    display: "flex",
                    width: '100%',
                    paddingTop: 50,
                    overflow: 'hidden'
                }}
            >
                {/* Card List */}
                <div style={{ width: 643, marginLeft: 78 }}>
                    <h1 style={{ marginBottom: 6 }}>Cart</h1>
                    <p style={{ marginBottom: 16, marginTop: 0 }}>
                        View {totalCourse} courses in your cart
                    </p>
                    <div style={{ height: 0.5, backgroundColor: '#e0e0e0', width: '100%', marginBottom: 20 }}> </div>
                    <div>

                        {
                            cartList.map((item) => (
                                <CartCourseCart key={cartList.id} item={item} onRemoveCourse={handleRemoveCourse} />
                            ))}
                    </div>
                </div>

                {/* Total Price */}
                <div style={{ width: 'calc(100%-643px)', paddingLeft: 104 }}>
                    <p style={{ fontSize: 24, fontWeight: 700, color: '#727272', marginBottom: 20 }}>
                        Total:
                    </p>
                    <p style={{ fontSize: 48, fontWeight: 700, marginBottom: 16, marginTop: 0 }}>
                        ${totalPrice}
                    </p>
                    <p style={{ fontSize: 16, fontWeight: 500, color: '#727272', textDecorationLine: 'line-through', marginBottom: 14, marginTop: 0 }}>
                        ${originPrice}
                    </p>
                    <button
                        style={{
                            height: 36,
                            width: 278,
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: 8,
                            borderColor: '#555FD9',
                            background: '#555FD9',
                            fontWeight: 700,
                            color: 'white',
                            cursor: 'pointer',
                            //":hover": { cursor: "pointer", background: '#515abd' }
                        }}
                        //onMouseOver={thisbackgroundColor = '#515abd'}
                        onClick={() => router.push("/checkout")}
                    >
                        Checkout
                    </button>
                    <div style={{ height: 0.5, backgroundColor: '#e0e0e0', width: 278, marginTop: 20, marginBottom: 20 }}> </div>
                    <div>
                        <p style={{ fontSize: 16, fontStyle: 'italic' }}>
                            <span style={{ fontWeight: 'bold', color: '#555FD9' }}>Have coupons? </span>
                            Add your coupon
                            <span style={{ fontWeight: 'bold', color: '#555FD9' }}> here:</span>
                        </p>
                    </div>

                    <div style={{ display: "flex", alignItems: 'center', height: 20, color: '#727272', fontSize: 16 }}>
                        {
                            appliedCoupon && coupon != "" && (
                                <div style={{ display: "flex" }}>
                                    <Button
                                        type="text"
                                        icon={<CloseOutlined />}
                                        onClick={(handleCancelCoupon)}>
                                    </Button>
                                    <div style={{ display: "flex" }}>Applied
                                        <div style={{ fontWeight: 'bold', textDecoration: 'underline', marginLeft: 6 }}>
                                            {coupon}
                                        </div>
                                    </div>
                                </div>
                            )

                        }
                    </div>
                    <div >
                        <input
                            type="text"
                            placeholder="Add coupon"
                            value={coupon}
                            onChange={e => setCoupon(e.target.value)}
                            style={{
                                paddingLeft: 8,
                                width: 174,
                                height: 40,
                                alignItems: 'center',
                                borderRadius: 12,
                                border: '2px solid  #555FD9'
                            }}
                        />
                        <button
                            onClick={handleAddCoupon}
                            style={{
                                width: 86,
                                height: 40,
                                marginLeft: 6,
                                justifyContent: 'center',
                                alignContent: 'center',
                                borderRadius: 8,
                                background: '#555FD9',
                                borderColor: '#555FD9',
                                fontWeight: 700,
                                color: 'white',
                                cursor: 'pointer'
                            }}
                        >
                            Apply
                        </button>
                    </div>
                </div>


            </div >
        </Container>
    )
}

export default Cart;
