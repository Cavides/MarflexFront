import React from "react";
import "./politicadevol.css";

import Header from "../../Components/Header/Header";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

function PoliticaDevol() {
  return (
    <div>
      <Header />
      <Navbar />

      <div className="polDev-container">
        {/* titulo */}
        <div className="polDev__title">
          <h1>Políticas de devoluciones y garantías</h1>
        </div>

        <br />

        <div className="polDev__subtitle">
          <b>Política de devolución</b>
        </div>
        <div className="polDev__description">
          <p>
            El cambio o devolución de un producto adquirido en MARFLEX, puede
            solicitarse dentro de los primeros cinco (5) días calendario
            siguientes a la fecha de la entrega, a través del correo electrónico
            contacto@marflex.com. <br />
            <br /> Por favor ten en cuenta que: Para realizar cualquier cambio o
            devolución de productos adquiridos en MARFLEX, te sugerimos
            presentar la factura o guía de despacho, con el fin de facilitar el
            proceso. El producto debe venir en su empaque original (con
            catálogos y accesorios), sin ningún grado de utilización y sin haber
            sido armado (en caso que el producto lo requiera).
            <br />
            <br /> En ningún caso se acepta la devolución o cambio de productos
            de uso personal como: Colchones, toallas, sábanas, almohadas y
            lencería de cama. Si deseas realizar cambio de los productos
            adquiridos a través de nuestra página web, te aclaramos que los
            costos de transporte serán asumidos por ti y deberás entregar el
            producto en las bodegas del fabricante del producto que compraste.
            Solo será reembolsado el valor total del producto. Lo anterior no
            afecta las garantías legales y demás derechos reconocidos al
            consumidor por la legislación vigente. En caso de solicitarse el
            cambio por un producto de mayor valor al efectivamente pagado y/o
            características diferentes, el cliente deberá pagar el valor del
            excedente que resultare necesario para cubrir el precio del nuevo
            producto.
            <br />
            <br /> No se harán devoluciones sobre productos en promoción. <br />
            <br /> MARFLEX S.A.S. efectuará la devolución del dinero al cliente
            dentro de los 20 días calendario siguientes a la recepción y
            verificación de la mercancía devuelta. El crédito será aplicado a la
            tarjeta de crédito utilizada en el pedido. Si el pago fue hecho en
            efectivo o por cheque, el reembolso será a una cuenta bancaria que
            sea autorizada por escrito por el comprador. Si el pago fue por
            transferencia electrónica, la devolución se hará a la misma cuenta.
          </p>
        </div>
        <br />
        <div className="polDev__subtitle">
          <b>Garantías</b>
        </div>

        <div className="polDev__description">
          <p>
            Las garantías de Producto varían según su naturaleza y definición
            aplicada a la ley. La mercancía está cubierta con la garantía del
            fabricante, no existen otras garantías. Cada fabricante especifica
            la duración de la garantía de sus productos. Las garantías se
            inician al momento de comprar los muebles y por eso se necesita la
            factura de compra para reclamar la garantía, en caso de que no
            exista un comprobante de compra será usada la fecha de fabricación
            del producto como fecha de inicio para la garantía.
            <br />
            <br /> Las garantías sobre productos permiten a MARFLEX S.A.S.
            reparar y/o reemplazar el producto siempre y cuando MARFLEX S.A.S. lo
            considere. No se harán devoluciones de dinero sobre garantías.
            <br />
            <br /> Tenga en cuenta las siguientes políticas de garantía:
          </p>
          <br/>
          <ul>
            <li>
              <p>
                Se debe presentar la factura al momento de solicitar una
                garantía, en caso de no tenerla puede solicitar el certificado
                de compra.
              </p>
            </li>

            <li>
              <p>
                Para tramitar la garantía de un producto instalado se programará
                una visita técnica de verificación.
              </p>
            </li>

            <li>
              <p>
                Si resulta procedente la garantía del producto, se efectuará la
                reparación totalmente gratuita de los defectos del bien y se
                suministrarán oportunamente los repuestos requeridos. Si el
                producto no admite reparación, se procederá a la devolución del
                precio pagado o cambio del producto.
              </p>
            </li>

            <li>
              <p>
                Si el producto estuviera en un lugar diferente al de la compra,
                el cliente deberá asumir los costos de transporte para hacer
                efectiva la garantía.
              </p>
            </li>

            <li>
              <p>
                La garantía no es válida cuando; a la fecha de solicitud de la
                garantía ya haya expirado el término de garantía otorgado por el
                fabricante; cuando el producto tenga un daño ocasionado por
                terceros; cuando hubo uso indebido del producto por parte del
                consumidor; cuando el consumidor no atendió las instrucciones de
                instalación, uso o mantenimiento indicados en el manual de
                producto y en la garantía.
              </p>
            </li>
          </ul>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default PoliticaDevol;
