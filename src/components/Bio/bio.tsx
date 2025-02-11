import Image from "next/image";

export default function Bio() {
  return (
    <div className="bg-white text-black py-16 px-96 gap-12 flex w-full">
      <Image
        src="/fotografo.jpg"
        alt="Bio"
        width={500}
        height={100}
        className=""
      />
      <div className="flex flex-col items-start gap-6">
        <div className="flex flex-col">
          <span className="font-bold text-4xl">Olá, Sou Julio Tomita</span>
          <span className=" text-xl">
            Experiência em Fotografia com mais de 40 anos de atuação.
          </span>
        </div>
        <div className="flex flex-col">
          <span className=" text-xl">
            Olá, me chamo Júlio Tomita e sou fotógrafo com ampla experiência em
            fotografar diversos setores. Minha paixão é criar imagens que
            destacam os momentos mais importantes para as pessoas. Com mais de
            quatro décadas de experiência no ramo da fotografia, tenho o prazer
            de servir a pessoas de inúmeros nichos, ajudando-as a alcançar
            memórias excepcionais.
          </span>
        </div>
      </div>
    </div>
  );
}
