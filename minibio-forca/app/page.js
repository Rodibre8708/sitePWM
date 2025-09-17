import Image from 'next/image';

export default function Home() {
  return (
    <>
      <h1>Mini Bio de Rodrigo Victor Beltrão</h1>
      <br />
      <a href="https://github.com/Rodibre8708" target="_blank">
        Meu GitHub
      </a>
      <br />
      <a href="https://www.linkedin.com/in/rodrigo-victor-beltr%C3%A3o-419713327/" target="_blank">
        Meu LinkedIn
      </a>
      <p>
      </p>
      <br />
      <p>
        Sou estudante de Ciência da Computação na Universidade Católica de Pernambuco.
      </p>
      <br />
      <p>
        Torço para o maior clube do mundo, o Sport Club do Recife!
      </p>
      <br />
      <p>
        Este sou eu pequeno e emburrado:
      </p>
      <Image src="/eu.jpeg" alt="Minha foto" width={250} height={250} />
    </>
  );
}