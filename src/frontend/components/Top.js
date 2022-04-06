import { Image, Row, Col } from 'react-bootstrap'
import slimes from './images/slimes.gif'
import logo from './images/logo.png'

const Top = () => {
    return (
        <Row>
            <Row className="mt-5 p-3">
                <Col className="col-12 col-lg-6">
                    <img src={slimes} alt="Presentation image" className="rounded" style={{
                            border: "20px solid #0d1730"
                        }}/>
                </Col>
                <Col className="col-12 col-lg-6 text-light">
                    <Row className="my-4">
                        <Image src={logo} className="d-flex align-items-start" style={{
                            width: "300px"
                        }}/>
                    </Row>
                    <Row className="my-5">
                        <p style={{
                            textAlign: "left",
                            fontSize: "20px"
                        }}>
                            100 unique collectible Slimes with proof of ownership stored on the Ethereum blockchain. Block Slimes are "Non-Fungible Tokens" on Ethereum, and each Block Slime was created as an ERC-721 standard token, that powers most digital art and collectibles.
                        </p>
                    </Row>
                </Col>
            </Row>
            <Row className="p-3 text-light" style={{
                            fontSize: "25px"
            }}>
                <Col className="col-12 col-lg-6 col-xl-3 mb-4">
                    <div className="mx-4 py-4" style={{
                        background: "#0d1730"
                    }}>
                        <h3>Items</h3>
                        <h2>100</h2>
                    </div>
                </Col>
                <Col className="col-12 col-lg-6 col-xl-3 mb-4">
                    <div className="mx-4 py-4" style={{
                        background: "#0d1730"
                    }}>
                        <h3>Owners</h3>
                        <h2>0</h2>
                    </div>
                </Col>
                <Col className="col-12 col-lg-6 col-xl-3 mb-4">
                    <div className="mx-4 py-4" style={{
                        background: "#0d1730"
                    }}>
                        <h3>Floor</h3>
                        <h2>0.000 ETH</h2>
                    </div>
                </Col>
                <Col className="col-12 col-lg-6 col-xl-3 mb-4">
                    <div className="mx-4 py-4" style={{
                        background: "#0d1730"
                    }}>
                        <h3>Volume Traded</h3>
                        <h2>0.000 ETH</h2>
                    </div>
                </Col>
            </Row>
        </Row>
    );
}
export default Top