import React from "react";
import { portText } from "@/constants";
import Image from "next/image";

const Port = () => {
  return (
    <section id="port">
      <div className="port__inner">
        <h2 className="port__title">
          portfolio <em>포폴 작업물</em>
        </h2>

        <div className="port__wrap">
          {portText.map((port, key)=>{
            return (
              <article className="port__item p1" key={key}>
                <span className="num">{port.num}.</span>
                <a href={port.code} className="link" target="_blank" rel="noreferrer noopener">
                  <Image src={port.img} alt={port.name} width={400} height={300} style={{width:"100%", height: "auto"}} />
                </a>
                <h3 className="title">{port.title}</h3>
                <p className="desc">{port.desc}</p>
                <a href={port.view} target="_blank" className="site" rel="noreferrer noopener">사이트 보기</a>
              </article>
            )
          })}
          

        </div>

      </div>
    </section>
  )
}

export default Port