import { useState, useEffect } from 'react'
import { ethers } from "ethers"
import { Image, Row, Col, Card, Button } from 'react-bootstrap'
import slime from './images/slime.png'
import logo from './images/logo.png'

const Top = ({ marketplace, nft }) => {
    const [loading, setLoading] = useState(false)
    const [items, setItems] = useState([])
    const loadMarketplaceItems = async () => {
        // Load all unsold items
        const itemCount = await marketplace.itemCount()
        let items = []
        for (let i = 1; i <= itemCount; i++) {
            const item = await marketplace.items(i)
            if (!item.sold) {
                // get uri url from nft contract
                const uri = await nft.tokenURI(item.tokenId)
                // use uri to fetch the nft metadata stored on ipfs 
                const response = await fetch(uri)
                const metadata = await response.json()
                // get total price of item (item price + fee)
                const totalPrice = await marketplace.getTotalPrice(item.itemId)
                // Add item to items array
                items.push({
                    totalPrice,
                    itemId: item.itemId,
                    seller: item.seller,
                    name: metadata.name,
                    description: metadata.description,
                    image: metadata.image
                })
            }
        }
        setLoading(false)
        setItems(items)
    }

    const buyMarketItem = async (item) => {
        await (await marketplace.purchaseItem(item.itemId, { value: item.totalPrice })).wait()
        loadMarketplaceItems()
    }

    useEffect(() => {
        loadMarketplaceItems()
    }, [])

    if (loading) return (
        <main style={{ padding: "1rem 0" }}>
        <h2>Loading...</h2>
        </main>
    )

    return (
        <Row>
            <Row className="mt-5 p-3">
                <Col className="col-12 col-lg-6">
                    <img src={slime} alt="Presentation image" className="rounded" style={{
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
                            100 unique collectible Slimes with proof of ownership stored on the Ethereum blockchain. Featured on New York Times, CNBC, and Bloomberg. Block Slimes are "Non-Fungible Tokens" on Ethereum, and each Block Slime was created as an ERC-721 standard token, that powers most digital art and collectibles.
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
                        <h2>62</h2>
                    </div>
                </Col>
                <Col className="col-12 col-lg-6 col-xl-3 mb-4">
                    <div className="mx-4 py-4" style={{
                        background: "#0d1730"
                    }}>
                        <h3>Floor</h3>
                        <h2>3.475 ETH</h2>
                    </div>
                </Col>
                <Col className="col-12 col-lg-6 col-xl-3 mb-4">
                    <div className="mx-4 py-4" style={{
                        background: "#0d1730"
                    }}>
                        <h3>Volume Traded</h3>
                        <h2>51,316 ETH</h2>
                    </div>
                </Col>
            </Row>
        </Row>
        // <div className="flex justify-center">
        //     {items.length > 0 ?
        //         <div className="px-5 container">
        //             <Row xs={1} md={2} lg={4} className="g-4 py-5">
        //                 {items.map((item, idx) => (
        //                     <Col key={idx} className="overflow-hidden">
        //                         <Card>
        //                             <Card.Img variant="top" src={item.image} />
        //                             <Card.Body color="secondary">
        //                             <Card.Title>{item.name}</Card.Title>
        //                             <Card.Text>
        //                                 {item.description}
        //                             </Card.Text>
        //                             </Card.Body>
        //                             <Card.Footer>
        //                             <div className='d-grid'>
        //                                 <Button onClick={() => buyMarketItem(item)} variant="primary" size="lg">
        //                                     Buy for {ethers.utils.formatEther(item.totalPrice)} ETH
        //                                 </Button>
        //                             </div>
        //                             </Card.Footer>
        //                         </Card>
        //                     </Col>
        //                 ))}
        //             </Row>
        //         </div>
        //     : (
        //         <main style={{ padding: "1rem 0" }}>
        //             <h2>No listed assets</h2>
        //         </main>
        //     )}
        // </div>
    );
}
export default Top