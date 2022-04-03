import {
    Link
} from "react-router-dom";

import { Image, Row, Col, Navbar, Nav, Button, Container } from 'react-bootstrap'
import icon_di from './images/icon_di.png'
import icon_tw from './images/icon_tw.png'
import icon_os from './images/opensea.png'
import logo from './images/logo.png'

const Navigation = ({ web3Handler, account }) => {
    return (
        <Row className="px-5 py-5" style={{
            backgroundColor: '#07081d'
        }}>
            <Col className="d-none d-sm-block col-5 text-light">
                <Row className="mb-3">
                    <Image src={logo} className="float-left" style={{
                    width: "150px"
                    }}/>
                </Row>
                <Row>
                    <div className="d-flex align-items-start">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/about">About</Nav.Link>
                        <Nav.Link as={Link} to="/best-moments">Best Moments</Nav.Link>
                        <Nav.Link as={Link} to="/family">Family</Nav.Link>
                        <Nav.Link as={Link} to="/faq">FAQ</Nav.Link>
                    </div>
                </Row>
            </Col>
            <Col className="col-12 col-sm-7 col-md-7 col-lg-7 col-xl-7">
                <div className="float-end">
                    <a href="https://twitter.com/" target="_blank" className="btn">
                        <Image src={icon_tw} width="30" height="30" className="image"/>
                    </a>
                    <a href="https://discord.gg/" target="_blank" className="btn">
                        <Image src={icon_di} width="30" height="30" className="image"/>
                    </a>
                    <a href="https://opensea.io/" target="_blank" className="btn">
                        <Image src={icon_os} width="30" height="30" className="image"/>
                    </a>
                    {account ? (
                        <Nav.Link
                            href={`https://etherscan.io/address/${account}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="button nav-button btn-sm mx-4">
                            <Button variant="outline-light">
                                {account.slice(0, 5) + '...' + account.slice(38, 42)}
                            </Button>

                        </Nav.Link>
                    ) : (
                        <Button onClick={web3Handler} variant="outline-light">Connect Wallet</Button>
                    )}
                </div>
            </Col>
        </Row>
    )

}

export default Navigation;