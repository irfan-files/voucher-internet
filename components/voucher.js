import React from "react";
import { Card, Col, Container, Form, Row, Table } from "react-bootstrap";

function Voucher({ voucher }) {
  return (
    <div className="voucher">
      <div class="row bg-white border-voucher ">
        <div style={{ paddingLeft: 15, paddingRight: 15 }}>
          <div
            class="d-flex align-items-center round-square"
            style={{
              blockSize: 40,
            }}
          >
            <b style={{ paddingLeft: 5, paddingRight: 5 }}>
              <img
                width={20}
                height={20}
                src="https://www.kaspersky.com/content/en-global/images/repository/isc/2020/9910/a-guide-to-qr-codes-and-how-to-scan-qr-codes-2.png"
              />
              <a style={{ color: "white", fontSize: 12 }}>
                Voucher Internet Desa PagerAji
              </a>
              <img
                width={20}
                height={20}
                src="https://www.kaspersky.com/content/en-global/images/repository/isc/2020/9910/a-guide-to-qr-codes-and-how-to-scan-qr-codes-2.png"
              />
            </b>
          </div>
        </div>
        <div>
          <div class="flex-container mt-3 " style={{ fontSize: 12 }}>
            <div class="d-flex justify-content-start row">
              <div class="col-md-12">
                <div style={{ paddingLeft: 10 }}>
                  <div class="row no-gutters">
                    <div>
                      <div class="d-flex flex-column align-items-center">
                        <img
                          width={75}
                          height={75}
                          src="https://www.kaspersky.com/content/en-global/images/repository/isc/2020/9910/a-guide-to-qr-codes-and-how-to-scan-qr-codes-2.png"
                        />
                        <span class="align-items-center">Scan QR Code</span>
                      </div>
                    </div>
                    <div class="col">
                      <b>
                        <u style={{ fontSize: 13 }}>
                          Masa Aktif Paket {voucher.durasi} Jam{" "}
                        </u>
                        <p style={{ fontSize: 9 }}>
                          *jangan buang sebelum habis
                        </p>
                      </b>
                      <Table
                        borderless
                        style={{
                          fontSize: 12,
                          paddingRight: 10,
                        }}
                      >
                        <tr>
                          <td>Username:</td>
                          <td class="border-voucher"> {voucher.username}</td>
                        </tr>
                        <tr>
                          <td>Password:</td>
                          <td class="border-voucher">{voucher.password}</td>
                        </tr>
                      </Table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="d-flex justify-content-center"
            style={{
              backgroundColor: "blue",
              blockSize: 35,
              color: "white",
            }}
          >
            <p>
              Masuk : <b>pageraji.despinlink.id</b>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Voucher;
