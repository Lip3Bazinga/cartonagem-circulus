"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ProductModal } from "@/components/ui/product-modal"

const products = [
  {
    title: "Embalagens para Alimentos",
    shortDescription: "Embalagens seguras e higiênicas para o setor alimentício",
    description: "O desenvolvimento de um produto requer inspiração e dedicação, principalmente quando se trata de um alimento, onde é preciso agradar o paladar do cliente. Quando se trata de uma embalagem para alimentos, os cuidados com a higiene são fundamentais, no que inclui a escolha dos materiais certos para esse fim, mas sem que ela perca a identidade do produto e da marca. Seja uma discreta embalagem para transporte de alimentos ou, uma embalagem toda trabalhada onde é possível comer o produto com os olhos, conte sempre com embalagens personalizadas para seu produto produzidas pela Cartonagem Circulu's.",
    thumbnail: "https://cartonagemcirculus.com.br/images/products/img1571922138.JPG",
    gallery: [
      "https://cartonagemcirculus.com.br/images/products/img1571922138.JPG",
      "https://cartonagemcirculus.com.br/images/products/img21571922138.JPG",
      "https://cartonagemcirculus.com.br/images/products/img31571922138.JPG"
    ],
  },
  {
    title: "Embalagens para Calçados",
    shortDescription: "Caixas de qualidade para o segmento calçadista",
    description: "As caixas não servem apenas para proteger ou guardar seu produto, mas também para levar a sua marca ao cliente. Uma caixa de qualidade indica um produto de qualidade. Temos a tradição na produção de embalagens para calçados com impressão offset, tanto na parte externa como interna. Qualidade e resistência em embalagens para seu calçado.",
    thumbnail: "https://cartonagemcirculus.com.br/images/products/img1571923522.JPG",
    gallery: [
      "https://cartonagemcirculus.com.br/images/products/img1571923522.JPG",
      "https://cartonagemcirculus.com.br/images/products/img21571923522.JPG",
      "https://cartonagemcirculus.com.br/images/products/img31571923522.JPG"
    ],
  },
  {
    title: "Embalagens para Utilidades Domésticas",
    shortDescription: "Embalagens que destacam seus produtos domésticos",
    description: "A crescente oferta de produtos de utilidades domésticas no mercado tem deixado os seus fabricantes cada vez mais preocupados com a melhora do faturamento. É nesse momento que uma boa embalagem consegue por si só apresentar o produto e promover a venda do mesmo. Sempre que precisar de embalagens de papel para utilidades domésticas com qualidade e sofisticação nas cores e acabamentos, escolha as embalagens da Cartonagem Circulu's.",
    thumbnail: "https://cartonagemcirculus.com.br/images/products/0866506001572900252.JPG",
    gallery: [
      "https://cartonagemcirculus.com.br/images/products/0866506001572900252.JPG",
      "https://cartonagemcirculus.com.br/images/products/img21572898169.jpg",
      "https://cartonagemcirculus.com.br/images/products/img31572898169.jpg"
    ],
  },
  {
    title: "Embalagens para Brinquedos",
    shortDescription: "Caixas coloridas e criativas para o setor de brinquedos",
    description: "Quando se trata de brinquedos, nada melhor do que os próprios consumidores, que são as crianças, para se encantarem com os produtos. Uma bela embalagem para brinquedos agrega muito valor ao produto, sendo capaz de agradar também aos pais no momento da compra. A Cartonagem Circulu's conta com os profissionais certos para a criação e desenvolvimento de embalagens para brinquedos.",
    thumbnail: "https://cartonagemcirculus.com.br/images/products/img1572900355.JPG",
    gallery: [
      "https://cartonagemcirculus.com.br/images/products/img1572900355.JPG",
      "https://cartonagemcirculus.com.br/images/products/img21572900355.JPG",
      "https://cartonagemcirculus.com.br/images/products/img31572900356.JPG"
    ],
  },
  {
    title: "Embalagens para Farmacêuticos e Cosméticos",
    shortDescription: "Sofisticação para produtos de alto valor",
    description: "Produtos farmacêuticos e cosméticos são produtos de alto valor, dessa forma, os mesmos precisam de embalagens sofisticadas e delicadas que chamam a atenção no ponto de venda. A Cartonagem Circulu's oferece soluções em embalagens para produtos farmacêuticos, de estética e cosméticos com cores vivas, acabamentos metalizados e com a resistência ideal para proteger o seu produto.",
    thumbnail: "https://cartonagemcirculus.com.br/images/products/img1572900424.JPG",
    gallery: [
      "https://cartonagemcirculus.com.br/images/products/img1572900424.JPG",
      "https://cartonagemcirculus.com.br/images/products/img21572900424.JPG",
      "https://cartonagemcirculus.com.br/images/products/img31572900424.JPG"
    ],
  },
  {
    title: "Embalagens para Ferramentas e Auto-peças",
    shortDescription: "Resistência e proteção para o setor automotivo",
    description: "Empresas que fabricam peças automotivas, acessórios e ferramentas usam diariamente uma grande quantidade e variedade de caixas para embalar seus produtos. Com a Cartonagem Circulu's, o fornecimento de embalagens acontece no momento certo, com a qualidade e resistência que seu produto precisa.",
    thumbnail: "https://cartonagemcirculus.com.br/images/products/img1572900639.JPG",
    gallery: [
      "https://cartonagemcirculus.com.br/images/products/img1572900639.JPG",
      "https://cartonagemcirculus.com.br/images/products/img21572900639.JPG",
      "https://cartonagemcirculus.com.br/images/products/img31572900640.JPG"
    ],
  },
  {
    title: "Embalagens para Produtos Fitoterápicos",
    shortDescription: "Embalagens especializadas para o setor fitoterápico",
    description: "Com grande experiência no mercado de embalagens, a Cartonagem Circulu's possui máquinas de alta tecnologia e profissionais altamente qualificados para produção de embalagens para produtos farmacêuticos e fitoterápicos.",
    thumbnail: "https://cartonagemcirculus.com.br/images/products/img1573563899.jpg",
    gallery: [
      "https://cartonagemcirculus.com.br/images/products/img1573563899.jpg"
    ],
  },
  {
    title: "Expositores (PDV)",
    shortDescription: "Displays e expositores para ponto de venda",
    description: "Conseguir colocar um produto em evidência no seu ponto de venda nem sempre é tarefa fácil. Para isso existem os expositores de ponto de venda (PDV), com cores vivas e imagens em grandes formatos, que conseguem chamar a atenção do cliente ao chegar em uma loja. Seja um expositor de piso ou balcão, ou seja uma urna promocional para fazer um sorteio de brindes para seus clientes, a Cartonagem Circulu's tem o expositor certo para lhe oferecer.",
    thumbnail: "https://cartonagemcirculus.com.br/images/products/img1573564050.jpg",
    gallery: [
      "https://cartonagemcirculus.com.br/images/products/img1573564050.jpg"
    ],
  },
  {
    title: "Embalagens para Vidros e Louças",
    shortDescription: "Proteção máxima para produtos frágeis",
    description: "A segurança de uma embalagem é fundamental quando se trata de um produto extremamente frágil e sofisticado como o vidro. Para isso são necessários vários testes e análises dos melhores materiais para o encaixe perfeito e proteção. Quando precisar de embalagens confiáveis para vidros e produtos frágeis, conte sempre com a qualidade e os acabamentos da Cartonagem Circulu's.",
    thumbnail: "https://cartonagemcirculus.com.br/images/products/img1634818037.jpg",
    gallery: [
      "https://cartonagemcirculus.com.br/images/products/img1634818037.jpg",
      "https://cartonagemcirculus.com.br/images/products/img21634818037.jpg",
      "https://cartonagemcirculus.com.br/images/products/img31634818037.jpg"
    ],
  },
  {
    title: "Embalagens para Panelas e Assadeiras",
    shortDescription: "Soluções para o segmento de utensílios de cozinha",
    description: "Para proteger e agregar valor a um produto, a qualidade e acabamento de uma embalagem contam bastante para que se possa chamar a atenção, principalmente quando este produto se encontra em grandes lojas de departamentos e centros comerciais. Nós da Cartonagem Circulu's possuímos os melhores acabamentos para destacar o seu produto.",
    thumbnail: "https://cartonagemcirculus.com.br/images/products/img1634819469.jpg",
    gallery: [
      "https://cartonagemcirculus.com.br/images/products/img1634819469.jpg",
      "https://cartonagemcirculus.com.br/images/products/img21634819469.jpg",
      "https://cartonagemcirculus.com.br/images/products/img31634819469.jpg"
    ],
  },
  {
    title: "Embalagens para Bebidas",
    shortDescription: "Embalagens funcionais e atrativas para bebidas",
    description: "O mercado de bebidas cresce a cada dia, assim como a diversidade de opções para agradar o gosto dos clientes. E o mais importante é poder contar com uma embalagem segura, que além de proteger, possa expor a qualidade e tradição do seu produto. Quando precisar de embalagens para bebidas e kits promocionais, conte sempre com as embalagens da Cartonagem Circulu's.",
    thumbnail: "https://cartonagemcirculus.com.br/images/products/img1634820412.jpg",
    gallery: [
      "https://cartonagemcirculus.com.br/images/products/img1634820412.jpg",
      "https://cartonagemcirculus.com.br/images/products/img21634820412.jpg",
      "https://cartonagemcirculus.com.br/images/products/img31634820412.jpg"
    ],
  },
  {
    title: "Embalagens para Metais Sanitários e Construção",
    shortDescription: "Robustez para o segmento da construção civil",
    description: "Embalagens resistentes e funcionais para metais sanitários e materiais de construção. A Cartonagem Circulu's oferece soluções que combinam proteção e apresentação profissional para o segmento da construção civil.",
    thumbnail: "https://cartonagemcirculus.com.br/images/products/img1634820534.jpg",
    gallery: [
      "https://cartonagemcirculus.com.br/images/products/img1634820534.jpg"
    ],
  },
]

export function ProductsSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      })
    }
  }

  const openModal = (product: typeof products[0]) => {
    setSelectedProduct(product)
    setIsModalOpen(true)
  }

  return (
    <>
      <section
        ref={sectionRef}
        id="produtos"
        className="relative py-24 md:py-32 bg-white overflow-hidden"
      >
        <div className="container mx-auto px-6">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <span className="text-[#C0111F] text-sm font-semibold tracking-widest uppercase mb-4 block">
              Nossos Produtos
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0D0D0D] tracking-tight">
              CONHEÇA NOSSOS PRODUTOS
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[#606060] text-lg mb-12 max-w-2xl"
          >
            Soluções completas em embalagens personalizadas para cada segmento do seu negócio.
          </motion.p>

          {/* Scroll Navigation */}
          <div className="hidden md:flex items-center justify-end gap-2 mb-6">
            <button
              onClick={() => scroll("left")}
              className="p-3 rounded-full bg-white border border-[#E5E5E5] shadow-sm hover:shadow-md hover:border-[#C0111F] transition-all group"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5 text-[#606060] group-hover:text-[#C0111F] transition-colors" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="p-3 rounded-full bg-white border border-[#E5E5E5] shadow-sm hover:shadow-md hover:border-[#C0111F] transition-all group"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5 text-[#606060] group-hover:text-[#C0111F] transition-colors" />
            </button>
          </div>

          {/* Horizontal Scroll Container */}
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto hide-scrollbar snap-x snap-mandatory pb-4"
          >
            {products.map((product, index) => (
              <motion.div
                key={product.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="flex-shrink-0 w-[300px] md:w-[350px] snap-start"
              >
                <div className="bg-white rounded-2xl h-full border border-[#E5E5E5] shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col group">
                  {/* Image */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-[#F5F5F5]">
                    <img
                      src={product.thumbnail}
                      alt={product.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  
                  {/* Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-lg font-bold text-[#0D0D0D] mb-2 group-hover:text-[#C0111F] transition-colors duration-300">
                      {product.title}
                    </h3>
                    <p className="text-[#606060] text-sm mb-6 flex-grow line-clamp-2">
                      {product.shortDescription}
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-col gap-3">
                      <Button
                        variant="outline"
                        onClick={() => openModal(product)}
                        className="w-full border-[#C0111F] text-[#C0111F] hover:bg-[#C0111F]/5 transition-all duration-300"
                      >
                        Ver Detalhes
                      </Button>
                      <Button
                        asChild
                        className="w-full bg-[#C0111F] hover:bg-[#a00e1a] text-white transition-all duration-300"
                      >
                        <a href="#contato">Solicitar Orçamento</a>
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Modal */}
      <ProductModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  )
}
