import { Image, Row, Col } from 'react-bootstrap'
import icon_di from './images/icon_di.png'
import icon_tw from './images/icon_tw.png'
import icon_os from './images/opensea.png'
import logo from './images/logo.png'

const Footer = () => {
    return (
        <Row className="mt-5 p-3">
            <Col className="mr-5 col-2 mycontent-left">
                <Row  style={{
                        textAlign: "left",
                        fontSize: "18px"
                    }}>
                    <a href="/" style={{ color: "#80d554", fontWeight: "bold", textDecoration: "none" }}>Home</a>
                    <br />
                    <a href="/" style={{ color: "#579c32", textDecoration: "none" }}>Terms & Conditions</a>
                    <br />
                    <a href="/" style={{ color: "#579c32", textDecoration: "none" }}>Smart Contracts</a>
                </Row>
                <Row className="mt-5">
                    <div style={{
                            textAlign: "left",
                            whiteSpace: "nowrap",
                            textOverflow: "ellipsis"
                        }}>
                        <a href="https://twitter.com/" target="_blank" style={{ paddingRight: "15px" }}>
                            <Image src={icon_tw} width="30" height="30" className="image"/>
                        </a>
                        <a href="https://discord.gg/" target="_blank" style={{ paddingRight: "15px" }}>
                            <Image src={icon_di} width="30" height="30" className="image"/>
                        </a>
                        <a href="https://opensea.io/" target="_blank" style={{ paddingRight: "15px" }}>
                            <Image src={icon_os} width="30" height="30" className="image"/>
                        </a>
                    </div>
                </Row>
            </Col>
            <Col className="ml-5 text-light">
                <Row className="my-4">
                    <Image src={logo} className="d-flex align-items-start" style={{
                        width: "250px"
                    }}/>
                </Row>
                <Row className="my-5">
                    <p style={{
                        textAlign: "left",
                        fontSize: "18px",
                        color: "#579c32"
                    }}>
                        ©2022 Slime Blocks. All rights reserved.
                    </p>
                </Row>
            </Col>
        </Row>
    );
}
export default Footer