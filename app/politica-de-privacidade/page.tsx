import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"
import { Footer } from "@/components/footer"

const PAGE_TITLE = "Política de Privacidade | Cartonagem Circulu's"
const PAGE_DESCRIPTION =
  "Política de Privacidade e proteção de dados pessoais da Cartonagem Circulu's, em conformidade com a Lei Geral de Proteção de Dados (LGPD)."

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: {
    canonical: '/politica-de-privacidade/',
  },
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: "Cartonagem Circulu's" }],
  },
  twitter: {
    card: 'summary_large_image',
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: ['/og-image.png'],
  },
}

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white">
      <header className="border-b border-[#E5E5E5]">
        <div className="container mx-auto px-6 py-5 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/logo-circulus-completo.png"
              alt="Circulus Logo"
              width={110}
              height={80}
              className="w-[110px] h-auto object-contain"
            />
          </Link>
          <Link
            href="/"
            className="flex items-center gap-2 text-sm text-[#606060] hover:text-[#C0111F] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar ao site
          </Link>
        </div>
      </header>

      <article className="container mx-auto px-6 py-16 max-w-3xl">
        <span className="text-[#C0111F] text-sm font-semibold uppercase tracking-widest mb-3 block">
          Proteção de Dados
        </span>
        <h1 className="text-3xl md:text-4xl font-bold text-[#0D0D0D] mb-4">
          Política de Privacidade
        </h1>
        <p className="text-sm text-[#6E6E6E] mb-10">Última atualização: 09 de setembro de 2026</p>

        <div className="prose-legal space-y-10 text-[#404040] leading-relaxed">
          <section>
            <p>
              A <strong>Cartonagem Circulu&apos;s</strong> ("nós") respeita a privacidade dos visitantes e usuários
              deste site (<strong>cartonagemcirculus.com.br</strong>) e se compromete a proteger os dados pessoais
              tratados em conformidade com a Lei nº 13.709/2018 — Lei Geral de Proteção de Dados Pessoais (LGPD).
              Esta política explica quais dados coletamos, para quê, por quanto tempo e quais são os seus direitos.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0D0D0D] mb-3">1. Quais dados coletamos</h2>
            <p className="mb-3">Coletamos dados pessoais apenas nas seguintes situações, todas voluntárias:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Formulário de Contato:</strong> nome, e-mail, telefone, segmento de atuação e o conteúdo da
                mensagem enviada, usados para responder ao seu pedido de orçamento ou informação.
              </li>
              <li>
                <strong>Canal de Comunicação (Compliance):</strong> quando você opta por se identificar, coletamos
                nome, e-mail e o relato enviado; relatos anônimos não coletam nome ou e-mail. Caso deseje se
                candidatar a uma vaga, você pode anexar voluntariamente um currículo (PDF ou Word).
              </li>
              <li>
                <strong>Cookies e ferramentas de análise:</strong> ao aceitar cookies no banner exibido na primeira
                visita, coletamos dados de navegação (páginas visitadas, tempo de permanência, origem do acesso) por
                meio do Google Tag Manager e Google Analytics.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0D0D0D] mb-3">2. Para que usamos os seus dados</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Responder a solicitações de contato, orçamento e dúvidas comerciais;</li>
              <li>Tratar relatos, dúvidas e sugestões recebidos pelo Canal de Comunicação, com o devido sigilo;</li>
              <li>Avaliar candidaturas espontâneas enviadas por meio de currículo anexado;</li>
              <li>Entender como o site é utilizado, para melhorar conteúdo, navegação e desempenho;</li>
              <li>Cumprir obrigações legais e regulatórias aplicáveis.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0D0D0D] mb-3">3. Base legal para o tratamento</h2>
            <p>
              Tratamos seus dados com base no <strong>consentimento</strong> (formulários e cookies não essenciais),
              no <strong>legítimo interesse</strong> em responder contatos comerciais e manter um canal de
              comunicação institucional, e, quando aplicável, no cumprimento de <strong>obrigação legal ou
              regulatória</strong>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0D0D0D] mb-3">4. Cookies</h2>
            <p className="mb-3">Utilizamos as seguintes categorias de cookies:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Cookies necessários:</strong> essenciais para o funcionamento básico do site (ex.: lembrar
                sua escolha sobre o banner de cookies). Não podem ser desativados.
              </li>
              <li>
                <strong>Cookies de análise (Google Tag Manager / Google Analytics):</strong> usados para entender o
                comportamento de navegação de forma agregada. Só são carregados após o seu consentimento explícito
                no banner de cookies. Você pode revogar esse consentimento a qualquer momento limpando os dados de
                navegação do seu navegador ou nas configurações de cookies deste site.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0D0D0D] mb-3">5. Compartilhamento de dados</h2>
            <p>
              Não vendemos nem alugamos seus dados pessoais. Compartilhamos dados apenas com prestadores de serviço
              estritamente necessários à operação do site e dos canais de contato (ex.: provedor de envio de
              e-mail e hospedagem), sempre sob obrigações contratuais de confidencialidade e segurança, e com
              autoridades públicas quando exigido por lei.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0D0D0D] mb-3">6. Retenção dos dados</h2>
            <p>
              Mantemos os dados coletados pelo tempo necessário para cumprir a finalidade para a qual foram
              coletados (ex.: atendimento ao contato comercial ou tratamento do relato de compliance), observados
              prazos legais e regulatórios aplicáveis, após o que são eliminados ou anonimizados.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0D0D0D] mb-3">7. Seus direitos como titular</h2>
            <p className="mb-3">Nos termos da LGPD, você pode solicitar a qualquer momento:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Confirmação da existência de tratamento e acesso aos seus dados;</li>
              <li>Correção de dados incompletos, inexatos ou desatualizados;</li>
              <li>Anonimização, bloqueio ou eliminação de dados desnecessários ou tratados em desconformidade;</li>
              <li>Portabilidade dos dados a outro fornecedor de serviço;</li>
              <li>Revogação do consentimento e eliminação dos dados tratados com base nele;</li>
              <li>Informação sobre com quem compartilhamos seus dados.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0D0D0D] mb-3">8. Como exercer seus direitos</h2>
            <p>
              Para exercer qualquer um desses direitos ou tirar dúvidas sobre esta política, entre em contato pelo
              e-mail{" "}
              <a href="mailto:dp@cartonagemcirculus.com.br" className="text-[#C0111F] hover:underline">
                dp@cartonagemcirculus.com.br
              </a>{" "}
              ou pelo{" "}
              <a href="#compliance" className="text-[#C0111F] hover:underline">
                Canal de Comunicação
              </a>{" "}
              disponível no site.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0D0D0D] mb-3">9. Segurança da informação</h2>
            <p>
              Adotamos medidas técnicas e administrativas razoáveis para proteger seus dados pessoais contra acesso
              não autorizado e situações de destruição, perda, alteração, comunicação ou difusão indevida.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0D0D0D] mb-3">10. Alterações desta política</h2>
            <p>
              Esta Política de Privacidade pode ser atualizada periodicamente para refletir mudanças em nossas
              práticas ou na legislação aplicável. A data da última atualização está indicada no topo desta página.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0D0D0D] mb-3">11. Contato</h2>
            <p>
              <strong>Cartonagem Circulu&apos;s</strong>
              <br />
              Av. Alberto Pulicano, 4701 — Distrito Industrial — Franca/SP — Brasil
              <br />
              E-mail (proteção de dados):{" "}
              <a href="mailto:dp@cartonagemcirculus.com.br" className="text-[#C0111F] hover:underline">
                dp@cartonagemcirculus.com.br
              </a>
              <br />
              Telefone: (16) 3713-0500
            </p>
          </section>
        </div>
      </article>

      <Footer />
    </main>
  )
}
