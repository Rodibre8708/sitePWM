import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <h1>Meu currículo</h1>
      <br />
      <a href="https://github.com/Rodibre8708" target="_blank">
        Perfil no GitHub
      </a>
      <br />
      <a href="https://www.linkedin.com/in/rodrigo-victor-beltr%C3%A3o-419713327/" target="_blank">
        Perfil no LinkedIn
      </a>
      <p>
      </p>
      <br />
      <h2>Sobre mim</h2>
      <p>
        Me chamo Rodrigo Victor Beltrão, sou estudante de Ciência da Computação na Universidade Católica de Pernambuco (UNICAP), com interesse em desenvolvimento de software e integração de hardware. Em busca por aprendizado, procuro aplicar meus conhecimentos e habilidades práticas em um ambiente profissional, contribuindo para soluções inovadoras e eficientes.
      </p>
      <br />
      <p>
        Este sou eu pequeno e emburrado:
      </p>
      <Image src="/eu.jpeg" alt="Minha foto" width={250} height={250} />
      <p>
      </p>
      <br />
      <h2>Habilidades</h2>
      <p>
        - Desenvolvimento de software (Python, C e Java)
      </p> 
      <p>
        - Montagem e manutenção de computadores
      </p>
      <p>
        - Criação de projetos eletrônicos (Arduino e Raspberry Pi)
      </p>
      <p>  
        - Banco de dados (SQL)
      </p> 
      <p> 
        - Resolução de problemas e trabalho em equipe
      </p>
      <p>
        - Microsoft Office
      </p>
      <br />
      <h2>Projetos acadêmicos</h2>
      <p>
        - Sistema integrado com Arduino para monitoramento de temperatura, umidade e ingestão de água
      </p> 
      <p>
        - Protótipo de aplicativo para avaliação da alimentação e prática de exercício físico e hábitos saudáveis
      </p>
      <br />
      <h2>Educação</h2>
      <p>
        UNICAP
      </p>
      <p>
        - Início: 2023.2
      </p> 
      <p>
        Colégio Equipe Recife 
      </p>
      <p>
        - 2006-2021
      </p> 
      <br />
      <h2>Idiomas</h2>
      <p>
        - Português fluente
      </p>
      <p>
        - Inglês avançado
      </p> 
      <p>
        - Espanhol básico
      </p>
      <br />
      <h2>Jogo da Forca</h2>
      <p>
        Se você chegou até aqui, clique no botão para jogar!
      </p>
      <Link href="/Forca">
        <button> Jogo da Forca</button>
      </Link>
    </>
  );
}