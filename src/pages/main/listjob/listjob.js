import React, { Component } from "react";
import { Button, Col, Row, InputGroup, FormControl, Form, Image } from "react-bootstrap";
import styles from "../listjob/listjob.module.css";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import NavbarComponent from "../../../components/Navbar/Navbar";
import FooterComponent from "../../../components/Footer/Footer";
import logo1 from "../../../assets/images/logo1.png"
import seacrh from "../../../assets/img/search (1) 1.png";
import Cards from "../../../components/CardList/CardList"
class Landing extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLanding: true,
    };
  }

  render() {
    const settings = {
      dots: true,
      autoplay: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1
    };
    return (
      <>
        <NavbarComponent />
        <div className={`${styles.contentWrapper}`}>
          <h1>Rekomendasi Pekerjaan Untuk Anda</h1>
          <Form>
            <Row xs={12}>
              <Col xs={5}>
                <div
                  className={`d-flex justify-content-center ${styles.imagePart}`}
                >
                  <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1">  <img alt="" src={seacrh} className={styles.imgSearch} /></InputGroup.Text>
                    <FormControl
                      placeholder="Jabatan"
                      aria-label="Jabatan"
                      aria-describedby="basic-addon1"
                    />
                  </InputGroup>
                </div>
              </Col>
              <Col xs={5} className={styles.box1}>
                <div
                  className={`d-flex justify-content-center ${styles.imagePart}`}
                >
                  <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1">  <img alt="" src={seacrh} className={styles.imgSearch} /></InputGroup.Text>
                    <FormControl
                      placeholder="Lokasi"
                      aria-label="Lokasi"
                      aria-describedby="basic-addon1"
                    />
                  </InputGroup>
                </div>
              </Col>
              <Col xs={1} className={styles.box2}>
                <Button
                  className={styles.btn1}
                >
                  Search
                </Button>
              </Col>
            </Row>
          </Form>
          <br />
          <br />
          <br />
          <br />

          <Row >
            <Col xs={3} className={styles.cardz}>
              <Cards />
              <br />
              <Cards />
              <br />
              <Cards />
              <br />
            </Col>
            <Col xs={9} >
              <div className={styles.scroll}>
                <br />
                <div className={styles.centerr}>
                  <Image
                    variant="center"
                    src={logo1}
                    style={{ width: "250px", height: "100px" }}
                  />
                  <h3 >Salesman GT (General Trade)</h3>
                  <h4 >PT MTH Global Investama</h4>
                  <h6 >Jakarta Barat</h6>
                  <hr />
                </div>

                <br />
                <br />
                <div className={styles.marginleft}>
                  <h5 >Deskripsi Pekerjaan</h5>
                  <p className={styles.subjudul}>Tanggung jawab pekerjaan:</p>
                  <ul>
                    <li>Responsibility in maintaining existing client and identifying new client.</li>
                    <li>Execute day to day work with current and potential customers to offer product.</li>
                    <li>Update customer database and visit customer in order to retain long term customer relationship.</li>
                    <li>Build new relationship with potential customer which lead to customer satisfaction and generate orders and sales.</li>
                    <li>Coordinate with Internal Admin & Finance team regarding to process purchase order and payment status customer.</li>
                    <li>Other duties that being assigned to.</li>
                  </ul>
                  <p className={styles.subjudul}>Kualifikasi Pekerjaan:</p>
                  <ul>
                    <li>Hold Bachelor Degree (S1) of any major.</li>
                    <li>Fresh graduate and maximum 3 years work experience preferred from commodity trading are welcome to apply.</li>
                    <li>Proficient in Microsoft Office.</li>
                    <li>Fluent in English both oral and written.</li>
                    <li>Have good interpersonal skill</li>
                    <li>Good analytical thinking, good priority setting and communication skills.</li>
                    <li>Team player, proactive, and highly motivated.</li>
                  </ul>
                  <p className={styles.subjudul}>Location:</p>
                  <ul>
                    <p className={styles.font}>Chandra Asri Jakarta Office</p>
                  </ul>
                  <h5>Informasi Tambahan</h5>
                  <Row>
                    <Col>
                      <p className={styles.subjudul}>Tingkat Pekerjaan</p>
                      <p className={styles.font}>Lulusan baru/Pengalaman kerja kurang dari 1 tahun</p>
                    </Col>
                    <Col>
                      <p className={styles.subjudul}>Kualifikasi</p>
                      <p className={styles.font}>Sarjana (S1)</p>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <p className={styles.subjudul}>Jenis Pekerjaan</p>
                      <p className={styles.font}>Penuh Waktu</p>
                    </Col>
                    <Col>
                      <p className={styles.subjudul}>Spesialisasi Pekerjaan</p>
                      <p className={styles.font}>Penjualan / Pemasaran, Penjualan - Korporasi</p>
                    </Col>
                  </Row>
                  <h5>Tentang Perusahaan</h5>
                  <p className={styles.font}>PT Chandra Asri Petrochemical Tbk (CAP) is the largest petrochemical company and vertically integrated in Indonesia. CAP is the largest petrochemical producer and integrated in Indonesia and the only one in Indonesia, which operates the Naphtha Cracker. CAP produces Olefins (Ethylene, Propylene and derivatives products such as Py - Gas and Mixed C4) and Polyolefins (Polyethylene, Ethylene derivative products, and polypropylene, propylene derivative products), and Styrene Monomer and its derivative products such as Ethyl Benzene, Toluene and Benzene Toluene mixtures. CAP is the only domestic producer of Ethylene and Styrene Monomer and one of the two domestic manufacturers that produce propylene and polyethylene in Indonesia and the Company's products is the basic ingredient of production of various consumer and industrial products.
                    In addition to PT Styrindo Mono Indonesia, CAP also has another subsidiary, PT Petrochemicals Butadiene Indonesia (PBI) which is the first Butadiene plant in Indonesia. PBI produces Butadiene which is the Synthetic Butadiene Rubbers raw material that used for tires and materials for the manufacture of gloves and rubber footwear .
                    CAP also collaborated with world - class tire company to work on the factory synthetic rubber which is managed by a subsidiary that is PT Indonesia Synthetic Rubber (SRI) .
                  </p>
                  <h5>
                    Informasi Tambahan Perusahaan
                  </h5>
                  <Row>
                    <Col>
                      <p className={styles.subjudul}>No. Registrasi</p>
                      <p className={styles.font}>-</p>
                    </Col>
                    <Col>
                      <p className={styles.subjudul}>Ukuran Perusahaan</p>
                      <p className={styles.font}>2001 - 5000 pekerja</p>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <p className={styles.subjudul}>Waktu Proses Lamaran</p>
                      <p className={styles.font}>27 Hari</p>
                    </Col>
                    <Col>
                      <p className={styles.subjudul}>Industri</p>
                      <p className={styles.font}>Bahan Kimia/Pupuk/Pestisida</p>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <p className={styles.subjudul}>Tunjangan dan Lain-lain</p>
                      <p className={styles.font}>Asuransi Gigi, Asuransi kesehatan, Olahraga (contoh: pusat kebugaran), Waktu regular, Senin - Jumat, Bisnis (contoh: Kemeja)</p>
                    </Col>
                    <Col>
                      <p className={styles.subjudul}>Lokasi</p>
                      <p className={styles.font}>BWisma Barito Pacific 5A, Jakarta Barat</p>
                    </Col>
                  </Row>
                  <h5>
                    Foto perusahaan
                  </h5>
                </div>
                <Slider {...settings}>
                  <Image
                    variant="center"
                    src={logo1}
                    style={{ width: "250px", height: "100px" }}
                  />
                  <Image
                    variant="center"
                    src={logo1}
                    style={{ width: "250px", height: "100px" }}
                  />
                  <Image
                    variant="center"
                    src={logo1}
                    style={{ width: "250px", height: "100px" }}
                  />
                  <Image
                    variant="center"
                    src={logo1}
                    style={{ width: "250px", height: "100px" }}
                  />
                  <Image
                    variant="center"
                    src={logo1}
                    style={{ width: "250px", height: "100px" }}
                  />
                </Slider>
              </div>
            </Col>
          </Row>
        </div>
        <FooterComponent />
      </>
    );
  }
}

export default Landing;
