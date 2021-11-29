import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import styles from './Index.module.scss'

import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators
  //   CarouselCaption
} from 'reactstrap'

const items = [
  {
    src: 'https://tamalesmexicanos.net/wp-content/uploads/2019/07/maxresdefault.jpg',
    altText: 'Tamales'
  },
  {
    src: 'http://cdn2.dineroenimagen.com/media/dinero/styles/xlarge/public/images/2019/02/tamales.jpg',
    altText: 'Tamales'
  },
  {
    src: 'https://i.ytimg.com/vi/eTQdHOx670c/sddefault.jpg#404_is_fine',
    altText: 'Tamales'
  }
]

const Index = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [animating, setAnimating] = useState(false)

  const next = () => {
    if (animating) return
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1
    setActiveIndex(nextIndex)
  }

  const previous = () => {
    if (animating) return
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1
    setActiveIndex(nextIndex)
  }

  const goToIndex = (newIndex) => {
    if (animating) return
    setActiveIndex(newIndex)
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} style={{ height: '300px', alignItems: 'center' }} />
      </CarouselItem>
    )
  })

  return (
    <div>
      <div className='container-fluid d-flex justify-content-center w-50 align-items-center'>
        <Carousel activeIndex={activeIndex} next={next} previous={previous}>
          <CarouselIndicators
            items={items}
            activeIndex={activeIndex}
            onClickHandler={goToIndex}
          />
          {slides}
          <CarouselControl
            direction='prev'
            directionText='Anterior'
            onClickHandler={previous}
          />
          <CarouselControl
            direction='next'
            directionText='Siguiente'
            onClickHandler={next}
          />
        </Carousel>
      </div>
      <br />
      <div className='container-fluid d-flex justify-content-center w-50 align-items-center'>
        <div className='row'>
          <h1 className={`${styles.h2t}`}>Tamales,
            <br />
            Una Tradición Familiar...
          </h1>
          <br />
          <div>

            <h3 style={{ fontWeight: 'bold' }}> Origen del tamal</h3>
            <br /><br />
            <p style={{ fontFamily: 'CrimsonText, helvetica, sans-serif' }}>Existen indicios de los tamales en<strong> Mesoamérica </strong>en la época <strong>prehispánica </strong>(entre el 8000 a.C.y 5000 a.C.) Existe evidencia de que las culturas predominantes en toda la región de Mesoamérica que llevaron el maíz a otras culturas y regiones también llevaron consigo platos y formas de cocinar el maíz.Como el tamal es un método sencillo de cocción del maíz, es posible que haya sido llevado desde esta región a América Central y del Sur.Sin embargo, según los arqueólogos Karl Taube, William Saturno y David Stuart los tamales podrían datar del año 100 a.C.Ellos encontraron referencias pictóricas en el Mural de San Bartolo, en <strong>Petén, Guatemala.</strong>Aunque los tamales pudieron haberse trasladado de un país a otro, no hay evidencia de donde a donde fue la migración del mismo, si fue de norte a sur.
              <br /><br />
              Los tamales son descritos en México por fray  <strong>Fray Bernardino de Sahagún,</strong>sn su Historia general de las cosas de Nueva España a principios del siglo XVI..

              <p style={{ fontStyle: 'italic' }}>   "Comían también tamales de muchas maneras; unos de ellos son blancos y a manera de pella, hechos no del todo redondos ni bien cuadrados… Otros tamales comían que son colorados..."</p>.
              <div>
                <img src='https://relatosehistorias.mx/sites/default/files/styles/relatos_750x420/public/cflorentino_iii_7r_g7033_raices_mapacheco_0.jpg?itok=x0jYzC00' />
              </div>
              La evidencia arqueológica muestra al tamal como parte de la vida cotidiana de algunas culturas de México en la época prehispánica, además de usarse en rituales religiosos, en ofrendas y tumbas.En la<strong> era precolombina,</strong> los <strong>mexicas</strong> comían tamales con estos ingredientes: pavo, flamenco, rana, ajolote, tuza, conejo, pescado, huevos de pavo, miel, frutas, calabaza y frijoles, así como sin relleno.Los tamales mexicas difieren de los tamales modernos por no contener grasa añadida.
              <br /><br />
              En el caso de los <strong>mayas,</strong> hay esculturas y pinturas de los periodos mayas clásico y postclásico temprano.En el Códice de Dresde se mencionan varios tipos de tamales: tamales de iguana, tamales de pavo, tamales de ciervo y tamales de pescado.
              <br /><br />
              Sahagún y otros autores hacen referencia al tamal no solo como comida de la gente común, sino de los nobles, de los sacerdotes en ceremonias especiales de <strong>ayuno.</strong>
            </p>
            <div>
              <img src='https://relatosehistorias.mx/sites/default/files/styles/relatos_750x420/public/cflorentino_i_26r_raices.jpg?itok=4gLy9WyN' />
            </div>
            <p style={{ fontFamily: 'CrimsonText, helvetica, sans-serif' }}>
              El tema sobre quién fue pionero del tamal es complejo debido a su gran variedad y desarrollo en diferentes culturas.Por dicho motivo se puede encontrar comentarios por ejemplo del historiador <strong>Humberto Rodríguez Pastor,</strong> el cual menciona que:
              <br /><br />
              <p style={{ fontStyle: 'italic' }}>"la palabra tamal se ha utilizado en exceso, tanto en lo muy parecido como hasta en lo que no corresponde.</p>
              En lo que respecta a las <strong>humitas, </strong>Humberto Rodríguez Pastor menciona que permitieron "la aparición del tamal peruano".Asimismo, Rodriguez comenta que la base principal de la humita vendría ser el "maíz fresco o choclo" y además, que se tiene conocimiento sobre su elaboración previa llegada de los españoles.El maíz para el consumo era muy importante en la época; su cultivo se desarrolló desde la época preincaica.Mogollón Alemán, Mery (2016).RECETAS CON ORIGEN.Perú: Editorial INDECOPI..Rodriguez afirma, que los procesos de elaboración del tamal, si se compara con su hermano prehispánico, tiene su similar más cercano en la humita.Cabe recalcar que durante el <strong>Tahuantinsuyo, </strong>la humita fue conocida en Perú, Colombia, Chile, Venezuela, Argentina, Bolivia, y otros países de Centroamérica.
              <br /><br />
              Por otro lado, es importante mencionar también a los españoles debido a que fueron innovadores y difusores debido a que le añadieron elementos de consumo habitual del viejo continente (a la masa que los peruanos elaboraban, los españoles le añadieron manteca y carne de cerdo).Humberto Rodríguez afirma que los españoles fueron los difusores del tamal donde llegaban (América Central, el Caribe, el tahuantinsuyo)
            </p>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Index
