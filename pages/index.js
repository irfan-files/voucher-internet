import { ReactFragment } from "react";
import react from "react";
import {
  Card,
  CardGroup,
  Col,
  Container,
  Form,
  Row,
  Image,
  Badge,
} from "react-bootstrap";
import styles from "../styles/Home.module.css";
import Voucher from "../components/voucher";

const voucherInternet = [
  {
    username: "sdafasfas",
    password: "sdasas",
    durasi: "24",
  },

  {
    username: "sdafasfas",
    password: "sdasasfasfa",
    durasi: "24",
  },
  {
    username: "sdafasfas",
    password: "sdasasfasfa",
    durasi: "24",
  },
  {
    username: "sdafasfas",
    password: "sdasasfasfa",
    durasi: "24",
  },
  {
    username: "sdafasfas",
    password: "sdasasfasfa",
    durasi: "24",
  },
  {
    username: "sdafasfas",
    password: "sdasasfasfa",
    durasi: "24",
  },
  {
    username: "sdafasfas",
    password: "sdasasfasfa",
    durasi: "24",
  },
  {
    username: "sdafasfas",
    password: "sdasasfasfa",
    durasi: "24",
  },
  {
    username: "sdafasfas",
    password: "sdasasfasfa",
    durasi: "24",
  },
  {
    username: "sdafasfas",
    password: "sdasasfasfa",
    durasi: "24",
  },
  {
    username: "sdafasfas",
    password: "sdasasfasfa",
    durasi: "24",
  },
  {
    username: "sdafasfas",
    password: "sdasasfasfa",
    durasi: "24",
  },
  {
    username: "sdafasfas",
    password: "sdasasfasfa",
    durasi: "24",
  },
  {
    username: "sdafasfas",
    password: "sdasasfasfa",
    durasi: "24",
  },
  {
    username: "sdafasfas",
    password: "sdasasfasfa",
    durasi: "24",
  },
  {
    username: "sdafasfas",
    password: "sdasasfasfa",
    durasi: "24",
  },
  {
    username: "sdafasfas",
    password: "sdasasfasfa",
    durasi: "24",
  },
  {
    username: "sdafasfas",
    password: "sdasasfasfa",
    durasi: "24",
  },
  {
    username: "sdafasfas",
    password: "sdasasfasfa",
    durasi: "24",
  },
  {
    username: "sdafasfas",
    password: "sdasasfasfa",
    durasi: "24",
  },
];

export default function Home() {
  return (
    <>
      <div className="container-voucher sheet-a4" id="list-voucher">
        {voucherInternet.map((vc) => (
          <Voucher voucher={vc} />
        ))}
      </div>
    </>
  );
}
