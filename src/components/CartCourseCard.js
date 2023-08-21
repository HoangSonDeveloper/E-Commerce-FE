import React from 'react'
import Star from './Star'
import { Button } from 'antd'
import { CloseSquareOutlined } from '@ant-design/icons'
const CartCourseCart = ({ item, onRemoveCourse }) => {



    const handleRemoveCourse = (id) => {
        onRemoveCourse(id)
    }

    return (
        <div style={{ display: "flex", position: 'relative', marginBottom: 24, height: 160, overflow: 'hidden' }}>
            <div style={{}}>
                <img
                    style={{
                        objectFit: 'cover',
                        objectPosition: 'center',
                        width: 160,
                        height: '100%',
                        borderRadius: 20
                    }}
                    className="h-60 w-full object-cover object-center "
                    src={item.image}
                    alt={item.name}
                />
            </div>

            <div style={{ marginLeft: 16 }}>
                <p
                    style={{
                        fontSize: 16,
                        fontWeight: 700,
                        color: '#303233',
                        marginTop: 4,
                        marginBottom: 6
                    }}
                >
                    {item.name}
                </p>
                <p
                    style={{
                        fontWeight: 300,
                        fontSize: 12,
                        marginTop: 2,
                        color: '#303233'
                    }}
                >
                    Lecture: {item.lecturer}
                </p>
                <p
                    style={{
                        fontWeight: 300,
                        fontSize: 12,
                        color: '#303233'
                    }}>
                    {item.desc}
                </p>
                <div
                    style={{
                        display: "flex",
                        alignItems: 'center',
                        height: 20
                    }}>
                    <Star rating={item.rating} />
                    <p style={{ marginLeft: 8 }}>({item.rating})</p>
                </div>
                <p
                    style={{
                        color: '#AE0606',
                        fontSize: 20,
                        fontWeight: 700,
                        marginTop: 10,
                        marginBottom: 10
                    }}>
                    $ {item.price}
                </p>
                <Button
                    type='text'
                    style={{
                        position: 'absolute',
                        bottom: 0,
                        right: 0,
                        border: 'none',
                        background: 'transparent',
                        cursor: 'pointer',
                        padding: 4,
                    }}
                    icon={<CloseSquareOutlined />}
                    onClick={() => handleRemoveCourse(item.id)}
                />
            </div>
        </div>
    )
}
export default CartCourseCart