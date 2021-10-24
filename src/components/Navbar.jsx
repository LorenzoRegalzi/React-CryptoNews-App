/* eslint-disable no-unused-vars */
import React, {useState, useEffect } from 'react'
import { Button, Menu, Typography, Avatar } from 'antd';
import { Link } from 'react-router-dom';
import { HomeOutlined, HeatMapOutlined,MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined } from '@ant-design/icons'
import logo from '../images/logo.svg'


const Navbar = () => {

    const [activeMenu, setActivemenu] = useState(true);
    const [screenSize, setScreenSize] = useState(null);

    useEffect(() => {
        
        const handleResize = () => setScreenSize(window.innerWidth);
        
        console.log('window.innerWidth' , window.innerWidth)

        handleResize();

        return () => window.removeEventListener('resize', handleResize)
    }, [])

    useEffect(() => {
        console.info('UseEffect detect screen size of:', screenSize);
        if(screenSize < 768) {
            setActivemenu(false);
        } else {
            setActivemenu(true);
        }
    }, [screenSize])




    return (
        <div className="nav-container">
            <div className="logo-container">
                <Avatar src={logo} size="large" />
                <Typography.Title level={2} className="logo">
                    <Link to="/">Crytoverse</Link>
                </Typography.Title>
                <Button className="menu-control-container" onClick={() => setActivemenu(!activeMenu)}>
                    <MenuOutlined/>
                </Button>
            </div>
            {activeMenu && (
                <Menu theme="dark">
                    <Menu.Item icon={<HomeOutlined/>}>
                        <Link to="/">Home</Link>
                    </Menu.Item>
                    <Menu.Item icon={<FundOutlined/>}>
                        <Link to="/cryptocurrencies">Cryptocurrencies</Link>
                    </Menu.Item>
                    <Menu.Item icon={<MoneyCollectOutlined/>}>
                        <Link to="/exchanges">Exchanges</Link>
                    </Menu.Item>
                    <Menu.Item icon={<HomeOutlined/>}>
                        <Link to="/news">News</Link>
                    </Menu.Item>
                </Menu>
            )}
        </div>
    )
}

export default Navbar
