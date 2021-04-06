<Container>
  <Row>
    {voucherInternet.map((voucher) => (
      <Col>
        <Card>
          <div class="container mt-3">
            <div class="d-flex flex-column align-items-center">
              <h6>
                <Image
                  width={25}
                  height={25}
                  src="https://www.kaspersky.com/content/en-global/images/repository/isc/2020/9910/a-guide-to-qr-codes-and-how-to-scan-qr-codes-2.png"
                />
                Voucher Internet Desa PagerAji
                <Image
                  width={25}
                  height={25}
                  src="https://www.kaspersky.com/content/en-global/images/repository/isc/2020/9910/a-guide-to-qr-codes-and-how-to-scan-qr-codes-2.png"
                />
              </h6>
            </div>
            <div class="d-flex justify-content-center row">
              <div class="col-md-6">
                <div class="coupon p-3 bg-white">
                  <div class="row no-gutters">
                    <div class="col-md-4 border-right">
                      <div class="d-flex flex-column align-items-center">
                        <Image
                          width={100}
                          height={100}
                          src="https://www.kaspersky.com/content/en-global/images/repository/isc/2020/9910/a-guide-to-qr-codes-and-how-to-scan-qr-codes-2.png"
                        />
                        <span class="d-block">Scan QR Code</span>
                      </div>
                    </div>
                    <div class="col-md-8">
                      <div class="d-flex justify-content-center row">
                        <b>
                          <u>Masa aktif Paket {voucher.durasi} Jam </u>
                        </b>
                        <br />
                        <i>*jangan buang sebelum habis</i>
                        <br />
                        <Form>
                          <Form.Group as={Row} controlId="formPlaintextEmail">
                            <Form.Label column sm="4">
                              Username :
                            </Form.Label>
                            <Col sm="4">
                              <Form.Control
                                type="text"
                                value={voucher.username}
                              />
                            </Col>
                          </Form.Group>

                          <Form.Group
                            as={Row}
                            controlId="formPlaintextPassword"
                          >
                            <Form.Label column sm="4">
                              Password :
                            </Form.Label>
                            <Col sm="4">
                              <Form.Control
                                type="text"
                                value={voucher.password}
                              />
                            </Col>
                          </Form.Group>
                        </Form>
                      </div>
                      <p>
                        Masuk : <b>pageraji.despinlink.id</b>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </Col>
    ))}
  </Row>
</Container>;
