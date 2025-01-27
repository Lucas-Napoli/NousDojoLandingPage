import {
  Users,
  Calendar,
  ShoppingBag,
  Award,
  Instagram,
  Facebook,
  Youtube,
} from "lucide-react";
import backImage from "./images/back.jpg";
import logo from "./images/LogoNous.png";
import video from "./videos/jiu-jitsu.mp4";
import kitsune from "./images/kitsune.jpeg";
import hotaru from "./images/hotaru.png";
import karasu from "./images/karasu .png";
import kuma from "./images/kuma.png";
import jiujitsu from "./images/jiu01.jpeg";
import avancado from "./images/jiu02.jpeg";
import premiacoes from "./images/campeao.png";
import metodo from "./images/metodo.jpg";
import casaco from "./images/casaco.jpeg";
import acessorios from "./images/acessorios.jpeg";
import kimono from "./images/kimono.jpg";
function App() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <img
            src={backImage}
            alt="Jiu-jitsu training"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative z-10">
          <nav className="container mx-auto px-6 py-6 flex items-center justify-between text-white">
            <h1 className="text-2xl font-bold flex items-center gap-2">
              <img
                src={logo}
                alt="Logo Nous"
                className="w-10 h-10 object-contain"
              />
              Nous Dojo
            </h1>
            <div className="flex items-center gap-8">
              <a href="#about" className="hover:text-blue-400 transition">
                Sobre
              </a>
              <a href="#team" className="hover:text-blue-400 transition">
                Equipe
              </a>
              <a href="#classes" className="hover:text-blue-400 transition">
                Aulas
              </a>
              <a href="#products" className="hover:text-blue-400 transition">
                Produtos
              </a>
              <button className="bg-blue-600 px-6 py-2 rounded-full hover:bg-blue-700 transition">
                Entre em contato
              </button>
            </div>
          </nav>

          <div className="container mx-auto px-6 h-screen flex flex-col justify-center items-center text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">
              Transforme sua vida através do Jiu-Jitsu
            </h2>
            <div className="w-full max-w-lg">
              <video
                src={video}
                controls
                className="w-full rounded-lg shadow-lg"
              >
                Seu navegador não suporta a tag de vídeo.
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-blue-600 font-bold mb-4 flex items-center justify-center gap-2">
              <Users className="w-5 h-5" />
              Nous Dojo
            </h3>
            <h2 className="text-4xl font-bold mb-4">Stefano Correa</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Professor de Jiu-jitsu com mais de 16 anos de experiência, tendo
              passado por diversas academias pelo Brasil e mundo, como EUA,
              Portugal, Italia, Londres, Espanha, Escocia e Abu Dhabi.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                name: "Premiações",
                role: "Renomado competidor, com (entre diversos outros) 2x campeão Europeu, 2x campeão Sul-americano, 2x campeão Brasileiro e multi campeão internacional",
                image: premiacoes,
              },
              {
                name: "Método",
                role: "Stefano pautou sua vitoriosa caminhada de amor pelo ensino e respeito pela luta ao desenvolvimento da sua própria metodologia de ensino, misturando a tradição das bases do jiu-jitsu com a contextualização das necessidades da sociedade atual.",
                image: metodo,
              },
            ].map((instructor, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-lg"
                style={{ maxWidth: "700px", margin: "0 auto" }} // Centraliza e define largura máxima
              >
                <img
                  src={instructor.image}
                  alt={instructor.name}
                  className="w-full h-90 object-cover" // Aumenta a altura da imagem
                />
                <div className="p-8">
                  {" "}
                  {/* Adiciona mais espaçamento interno */}
                  <h4 className="text-2xl font-bold mb-4">
                    {instructor.name}
                  </h4>{" "}
                  {/* Títulos maiores */}
                  <p className="text-gray-600 text-lg">
                    {instructor.role}
                  </p>{" "}
                  {/* Texto maior */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Classes Section */}
      <section id="classes" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-blue-600 font-bold mb-4 flex items-center justify-center gap-2">
              <Calendar className="w-5 h-5" />
              HORÁRIOS
            </h3>
            <h2 className="text-4xl font-bold mb-4">Nossas Aulas</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Oferecemos aulas para todas as idades e níveis de experiência
            </p>
          </div>

          {/* Kids Classes */}
          <div className="mb-20">
            <h3 className="text-3xl font-bold mb-8 text-center">Nous Kids</h3>
            <div className="flex flex-wrap justify-center gap-8">
              {[
                {
                  title: "Kuma team",
                  description:
                    "Desenvolvimento motor e social através de jogos e brincadeiras",
                  schedule: "Seg e quarta 19h",
                  image: kuma,
                },
                {
                  title: "Karasu team",
                  description: "Introdução às técnicas básicas do Jiu-Jitsu",
                  schedule: "Seg e quarta 09h",
                  image: karasu,
                },
                {
                  title: "Kitsune team",
                  description:
                    "Treinamento avançado e preparação para competições",
                  schedule: "Terça e quinta 18h",
                  image: kitsune,
                },
                {
                  title: "Hotaru team",
                  description:
                    "Treinamento avançado e preparação para competições",
                  schedule: "Terça e quinta 19h",
                  image: hotaru,
                },
              ].map((classInfo, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg overflow-hidden shadow-lg flex flex-col items-center"
                  style={{ width: "300px", height: "450px" }} // Define largura e altura fixas
                >
                  <img
                    src={classInfo.image}
                    alt={classInfo.title}
                    className="w-full h-52 object-cover" // Ajusta altura da imagem
                  />
                  <div className="p-6 flex flex-col justify-between flex-grow">
                    <h4 className="text-2xl font-bold mb-2 text-center">
                      {classInfo.title}
                    </h4>
                    <p className="text-gray-600 mb-4 text-center">
                      {classInfo.description}
                    </p>
                    <p className="text-blue-600 font-semibold text-center">
                      {classInfo.schedule}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Adult Classes */}
          <div>
            <h3 className="text-3xl font-bold mb-8 text-center">Nous adulto</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Jiu-jitsu",
                  description: "Desenvolvimento técnico e tático",
                  schedule:
                    "Durante toda a semana - consultar horarios através de nosso contato",
                  image: jiujitsu,
                },
                {
                  title: "Jiu-jitsu Avançado",
                  description: "Preparação para competição",
                  schedule:
                    "Durante toda a semana - consultar horarios através de nosso contato",
                  image: avancado,
                },
              ].map((classInfo, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg overflow-hidden shadow-lg"
                  style={{ maxWidth: "700px", margin: "0 auto" }} // Limita a largura e centraliza
                >
                  <img
                    src={classInfo.image}
                    alt={classInfo.title}
                    className="w-full h-80 object-cover" // Altura da imagem aumentada
                  />
                  <div className="p-8">
                    {" "}
                    {/* Adiciona mais espaço interno */}
                    <h4 className="text-2xl font-bold mb-4">
                      {classInfo.title}
                    </h4>{" "}
                    {/* Título maior */}
                    <p className="text-gray-600 mb-6">
                      {classInfo.description}
                    </p>{" "}
                    {/* Espaçamento maior */}
                    <p className="text-blue-600 font-semibold text-lg">
                      {classInfo.schedule}
                    </p>{" "}
                    {/* Texto maior */}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-blue-600 font-bold mb-4 flex items-center justify-center gap-2">
              <ShoppingBag className="w-5 h-5" />
              PRODUTOS
            </h3>
            <h2 className="text-4xl font-bold mb-4">
              Equipamentos e Vestuário
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Equipamentos de alta qualidade para sua prática
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Kimono Nous dojo",
                price: "R$ 499,90",
                image: kimono,
              },
              {
                name: "Blusa de frio Nous",
                price: "R$ 89,90",
                image: casaco,
              },
              {
                name: "Garrafas personalizadas",
                price: "R$ 149,90",
                image: acessorios,
              },
            ].map((product, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-lg"
                style={{ width: "300px", height: "450px", margin: "0 auto" }}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover" // Aumenta a altura da imagem
                />
                <div className="p-6 flex flex-col justify-between h-full">
                  <h4 className="text-2xl font-bold mb-4 text-center">
                    {product.name}
                  </h4>
                  <p className="text-blue-600 font-bold text-xl text-center">
                    {product.price}
                  </p>
                  <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
                    Comprar
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Award className="w-6 h-6" />
                Nous Dojo
              </h4>
              <p className="text-gray-400">
                Caminhamos pela nossa melhor versão!
              </p>
            </div>
            <div>
              <h5 className="font-bold mb-4">Contato</h5>
              <p className="text-gray-400">
                Celso Goncalves Dias - 160
                <br />
                Itu - SP
                <br />
                Tel: (11) 97312-8330
                <br />
                Email: exemplo@gmail.com
              </p>
            </div>
            <div>
              <h5 className="font-bold mb-4">Horário</h5>
              <p className="text-gray-400">
                Segunda a Sexta: 6h - 21h
                <br />
                Sábado: 8h - 12h
                <br />
                Domingo: Fechado
              </p>
            </div>
            <div>
              <h5 className="font-bold mb-4">Redes Sociais</h5>
              <div className="flex gap-4">
                <a href="#" className="hover:text-blue-400 transition">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="#" className="hover:text-blue-400 transition">
                  <Facebook className="w-6 h-6" />
                </a>
                <a href="#" className="hover:text-blue-400 transition">
                  <Youtube className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Nous dojo. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
