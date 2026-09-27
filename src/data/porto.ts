/**
 * /porto/visit-porto — "So you're coming to Porto?", the city guide, ported
 * from the Google Sites original (https://www.neteinstein.org/porto/visit-porto
 * — crawl snapshot in `.crawl/report.json`). The hero title and lead and the closing
 * trivia live in `src/content/pages/visit-porto.mdx`.
 *
 * Copy is verbatim, quirks included ("Desert or Snack", "tradicional",
 * "Salt Mae", the "ask for advice on which fish" note under "Meat Heaven").
 * Venues the original left unlinked (or linked to an empty href) have no
 * `href`. Groups and subgroups follow the original's heading structure and
 * order; their ids are the page's jump-list anchors.
 */
import type { PlaceGroup, PortoIntro } from './types';

import heroRooftopView from '../assets/porto/visit-porto/hero-rooftop-view.webp';
import francesinha from '../assets/porto/visit-porto/francesinha.webp';
import pernil from '../assets/porto/visit-porto/pernil.webp';
import posta from '../assets/porto/visit-porto/posta.webp';
import hamAndSerraCheese from '../assets/porto/visit-porto/ham-and-serra-cheese.webp';
import bifana from '../assets/porto/visit-porto/bifana.webp';
import quail from '../assets/porto/visit-porto/quail.webp';
import cachorrinhos from '../assets/porto/visit-porto/cachorrinhos.webp';
import portaDezanove from '../assets/porto/visit-porto/porta-dezanove.webp';
import pregoNoPao from '../assets/porto/visit-porto/prego-no-pao.webp';
import roastChicken from '../assets/porto/visit-porto/roast-chicken.webp';
import oBuraco from '../assets/porto/visit-porto/o-buraco.webp';
import rojoes from '../assets/porto/visit-porto/rojoes.webp';
import panadoNoPao from '../assets/porto/visit-porto/panado-no-pao.webp';
import paoComChourico from '../assets/porto/visit-porto/pao-com-chourico.webp';
import roastOctopus from '../assets/porto/visit-porto/roast-octopus.webp';
import medievalTavern from '../assets/porto/visit-porto/medieval-tavern.webp';
import mauritaniaMatosinhos from '../assets/porto/visit-porto/mauritania-matosinhos.webp';
import grilledFish from '../assets/porto/visit-porto/grilled-fish.webp';
import grilledSteaks from '../assets/porto/visit-porto/grilled-steaks.webp';
import casaDePastoDaPalmeira from '../assets/porto/visit-porto/casa-de-pasto-da-palmeira.webp';
import pakistaniCurry from '../assets/porto/visit-porto/pakistani-curry.webp';
import veganFrancesinha from '../assets/porto/visit-porto/vegan-francesinha.webp';
import cultOfPita from '../assets/porto/visit-porto/cult-of-pita.webp';
import veganBurger from '../assets/porto/visit-porto/vegan-burger.webp';
import daterraBuffet from '../assets/porto/visit-porto/daterra-buffet.webp';
import terrarea from '../assets/porto/visit-porto/terrarea.webp';
import berryWrap from '../assets/porto/visit-porto/berry-wrap.webp';
import veganDonuts from '../assets/porto/visit-porto/vegan-donuts.webp';
import mistu from '../assets/porto/visit-porto/mistu.webp';
import cantinhoDoAvillez from '../assets/porto/visit-porto/cantinho-do-avillez.webp';
import terminal4450 from '../assets/porto/visit-porto/terminal-4450.webp';
import steakhouseDaMaia from '../assets/porto/visit-porto/steakhouse-da-maia.webp';
import casaDeChaDaBoaNova from '../assets/porto/visit-porto/casa-de-cha-da-boa-nova.webp';
import capelaWineBar from '../assets/porto/visit-porto/capela-wine-bar.webp';
import catraio from '../assets/porto/visit-porto/catraio.webp';
import letraria from '../assets/porto/visit-porto/letraria.webp';
import rotaDoCha from '../assets/porto/visit-porto/rota-do-cha.webp';
import catCafe from '../assets/porto/visit-porto/cat-cafe.webp';
import megaFrancesinha from '../assets/porto/visit-porto/mega-francesinha.webp';
import hotWingsChallenge from '../assets/porto/visit-porto/hot-wings-challenge.webp';
import pastelDeNata from '../assets/porto/visit-porto/pastel-de-nata.webp';
import padariaRibeiro from '../assets/porto/visit-porto/padaria-ribeiro.webp';
import eclairs from '../assets/porto/visit-porto/eclairs.webp';
import jesuitas from '../assets/porto/visit-porto/jesuitas.webp';
import pavlova from '../assets/porto/visit-porto/pavlova.webp';
import mixpaoCroissants from '../assets/porto/visit-porto/mixpao-croissants.webp';
import banoffee from '../assets/porto/visit-porto/banoffee.webp';
import brunch from '../assets/porto/visit-porto/brunch.webp';
import sundaesAndCrepe from '../assets/porto/visit-porto/sundaes-and-crepe.webp';
import clerigos from '../assets/porto/visit-porto/clerigos.webp';
import aliados from '../assets/porto/visit-porto/aliados.webp';
import palacioDaBolsa from '../assets/porto/visit-porto/palacio-da-bolsa.webp';
import livrariaLello from '../assets/porto/visit-porto/livraria-lello.webp';
import saoBentoStation from '../assets/porto/visit-porto/sao-bento-station.webp';
import pracaDosLeoes from '../assets/porto/visit-porto/praca-dos-leoes.webp';
import ribeira from '../assets/porto/visit-porto/ribeira.webp';
import jardimBotanico from '../assets/porto/visit-porto/jardim-botanico.webp';
import majesticCafe from '../assets/porto/visit-porto/majestic-cafe.webp';
import funicularDosGuindais from '../assets/porto/visit-porto/funicular-dos-guindais.webp';
import portoCathedral from '../assets/porto/visit-porto/porto-cathedral.webp';
import miradouroDasFontainhas from '../assets/porto/visit-porto/miradouro-das-fontainhas.webp';
import palacioDeCristalGardens from '../assets/porto/visit-porto/palacio-de-cristal-gardens.webp';
import palacioDeCristalTurret from '../assets/porto/visit-porto/palacio-de-cristal-turret.webp';
import alfandegaDoPorto from '../assets/porto/visit-porto/alfandega-do-porto.webp';
import serralves from '../assets/porto/visit-porto/serralves.webp';
import portoTram from '../assets/porto/visit-porto/porto-tram.webp';
import casaDaMusica from '../assets/porto/visit-porto/casa-da-musica.webp';
import mcdonaldsAliados from '../assets/porto/visit-porto/mcdonalds-aliados.webp';
import ponteDLuis from '../assets/porto/visit-porto/ponte-d-luis.webp';
import serraDoPilar from '../assets/porto/visit-porto/serra-do-pilar.webp';
import wow from '../assets/porto/visit-porto/wow.webp';
import gaiaCableCar from '../assets/porto/visit-porto/gaia-cable-car.webp';
import parqueDaCidade from '../assets/porto/visit-porto/parque-da-cidade.webp';
import casteloDoQueijo from '../assets/porto/visit-porto/castelo-do-queijo.webp';
import matosinhosBeach from '../assets/porto/visit-porto/matosinhos-beach.webp';
import piscinaDasMares from '../assets/porto/visit-porto/piscina-das-mares.webp';
import cannedFishFactory from '../assets/porto/visit-porto/canned-fish-factory.webp';
import axeThrowing from '../assets/porto/visit-porto/axe-throwing.webp';
import laserTag from '../assets/porto/visit-porto/laser-tag.webp';
import racingSimulator from '../assets/porto/visit-porto/racing-simulator.webp';
import vrNeonRoom from '../assets/porto/visit-porto/vr-neon-room.webp';
import vrArena from '../assets/porto/visit-porto/vr-arena.webp';
import laserMaze from '../assets/porto/visit-porto/laser-maze.webp';
import lavaRun from '../assets/porto/visit-porto/lava-run.webp';
import miniGolf from '../assets/porto/visit-porto/mini-golf.webp';
import bouldering from '../assets/porto/visit-porto/bouldering.webp';
import golfSimulator from '../assets/porto/visit-porto/golf-simulator.webp';
import trampolines from '../assets/porto/visit-porto/trampolines.webp';
import bridgeClimb from '../assets/porto/visit-porto/bridge-climb.webp';
import escapeRooms from '../assets/porto/visit-porto/escape-rooms.webp';
import sixBridgesCruise from '../assets/porto/visit-porto/six-bridges-cruise.webp';
import douroRiverCruise from '../assets/porto/visit-porto/douro-river-cruise.webp';
import speedboat from '../assets/porto/visit-porto/speedboat.webp';
import quizGame from '../assets/porto/visit-porto/quiz-game.webp';
import bubbleFootball from '../assets/porto/visit-porto/bubble-football.webp';
import paintball from '../assets/porto/visit-porto/paintball.webp';
import kartsIndoor from '../assets/porto/visit-porto/karts-indoor.webp';
import kartsOutdoor from '../assets/porto/visit-porto/karts-outdoor.webp';
import dinnerWithTheAssassin from '../assets/porto/visit-porto/dinner-with-the-assassin.webp';
import regatta from '../assets/porto/visit-porto/regatta.webp';
import beABand from '../assets/porto/visit-porto/be-a-band.webp';

export const portoIntro: PortoIntro = {
  heroCaption: "Here is a wonderful view of what you'll see (from Mindera's Office).",
  hero: {
    image: heroRooftopView,
    alt: 'A rooftop terrace with a parasol and picnic tables, looking out over the rooftops of Porto',
  },
  recommendTitle: "Below you'll find places in Porto that I recommend to:",
  recommend: [
    { text: 'eat mostly traditional food', emphasis: 'mostly', group: 'where-to-eat' },
    { text: 'have a drink', group: 'have-a-drink' },
    { text: 'visit and get to know the city', group: 'what-to-visit' },
    {
      text: 'or do an activity to have fun by yourself or with a group',
      group: 'fun-team-building',
    },
  ],
  history: 'This list was first published in 2023 and has been updated monthly.',
  support: [
    'If this was useful to you (and you think it makes sense), encourage me to keep updating it with a small gift, via ',
    { label: 'Revolut', href: 'http://revolut.me/neteinstein' },
    ' or the icon below.',
  ],
  jumpTitle: 'Let me give you a glimpse of what you can find:',
  jumpHint: '(click below to jump to that section!)',
  jumpExtras: [
    // The quiz photo repeats the Quiz Game card's, so it is decorative here.
    { label: 'Quiz Game', href: '#quiz-game', photo: { image: quizGame, alt: '' } },
  ],
  supportMessage: 'Thanks for this, here are a few bucks!',
  triviaLabel: 'Trivia:',
};

export const portoGuide: PlaceGroup[] = [
  {
    id: 'where-to-eat',
    title: 'Where to eat?',
    cover: { image: francesinha, alt: '' },
    subgroups: [
      {
        id: 'no-food-restrictions',
        title: 'No food restrictions',
        places: [
          {
            id: 'francesinha',
            title: 'Francesinha',
            notes: [
              'Book in advance, since several are in high demand.',
              '(If you still have room: at Brasão, ask for the cookie cake for dessert. Nice variety of beers as well.)',
            ],
            venues: [
              {
                name: 'Brasão Coliseu',
                href: 'https://www.tripadvisor.pt/Restaurant_Review-g189180-d12248008-Reviews-Brasao_Coliseu-Porto_Porto_District_Northern_Portugal.html',
                note: '(classy)',
              },
              {
                name: 'Bufete Fase',
                href: 'https://www.google.com/maps/place/Bufete+Fase/@41.1552237,-8.6108613,17z/data=!4m14!1m7!3m6!1s0xd2464fbd2c3ee6b:0xb84be9d7fc43009e!2zU2FpIEPDo28!8m2!3d41.153907!4d-8.6078894!16s%2Fg%2F11byp65qr8!3m5!1s0xd2464f7639b5dcf:0xc579e24c9243c0fc!8m2!3d41.156327!4d-8.60472!16s%2Fg%2F1thqj0tq?hl=en',
                note: '(old school)',
              },
              {
                name: 'Taberna Londrina',
                href: 'https://www.google.com/maps/place/Taberna+Londrina+Porto+%28Ceuta%29/@41.1500984,-8.6120399,17z/data=!3m1!5s0xd2464e2cfa752a9:0xc5eea5380851e0da!4m14!1m7!3m6!1s0xd2464fbd2c3ee6b:0xb84be9d7fc43009e!2zU2FpIEPDo28!8m2!3d41.153907!4d-8.6078894!16s%2Fg%2F11byp65qr8!3m5!1s0xd24655d84844489:0xad795c0f06f02ae0!8m2!3d41.1484246!4d-8.6140847!16s%2Fg%2F11frnn5hyq?hl=en',
              },
              {
                name: 'Camada',
                href: 'https://www.google.pt/maps/place/Camada+Porto+Boavista/@41.156957,-8.6328729,17z/data=!3m1!4b1!4m5!3m4!1s0xd2465bf50cb55ed:0x116bbd97c7dbe1c3!8m2!3d41.156953!4d-8.6306842?hl=pt-PT',
                note: '(Braga like sauce)',
                joiner: 'Or',
              },
            ],
            photos: [
              {
                image: francesinha,
                alt: 'A francesinha sandwich topped with a fried egg, sitting in a pool of orange sauce',
              },
            ],
          },
          {
            id: 'pernil',
            title: '“Pernil”',
            venues: [
              {
                name: 'Antunes',
                href: 'https://www.tripadvisor.com/Restaurant_Review-g189180-d2405498-Reviews-Antunes-Porto_Porto_District_Northern_Portugal.html',
              },
            ],
            photos: [
              {
                image: pernil,
                alt: 'Roast pork leg with potatoes and grated carrot in a clay dish, garnished with parsley and an orange slice',
              },
            ],
          },
          {
            id: 'posta',
            title: '“Posta” or “Sernelha”',
            venues: [
              {
                name: 'Sai Cão',
                href: 'https://www.tripadvisor.com/Restaurant_Review-g189180-d7342223-Reviews-Sai_Cao-Porto_Porto_District_Northern_Portugal.html',
              },
            ],
            photos: [
              {
                image: posta,
                alt: 'A grilled beef steak with chips, rice and salad on a white plate',
              },
            ],
          },
          {
            id: 'ham-and-serra-cheese',
            title: 'Ham and “Serra” Cheese',
            venues: [
              {
                name: 'Casa Guedes',
                href: 'https://www.tripadvisor.pt/Restaurant_Review-g189180-d2093056-Reviews-Casa_Guedes_Tradicional-Porto_Porto_District_Northern_Portugal.html',
              },
              {
                name: 'A Badalhoca',
                href: 'https://www.tripadvisor.pt/Restaurant_Review-g189180-d6856331-Reviews-A_Badalhoca-Porto_Porto_District_Northern_Portugal.html',
                joiner: 'Or',
              },
            ],
            photos: [
              {
                image: hamAndSerraCheese,
                alt: 'A crusty sandwich filled with sliced roast pork and melted Serra cheese',
              },
            ],
          },
          {
            id: 'bifana',
            title: 'Bifana or Quail',
            notes: ['Slightly spicy and super tasty'],
            venues: [
              {
                name: 'Conga',
                href: 'https://www.tripadvisor.pt/Restaurant_Review-g189180-d3544221-Reviews-Conga-Porto_Porto_District_Northern_Portugal.html',
                note: 'Tip: Ask for the real hot sauce',
              },
              {
                name: 'O Astro',
                href: 'https://www.tripadvisor.pt/Restaurant_Review-g189180-d7360791-Reviews-O_Astro_Cervejaria_Petisqueira-Porto_Porto_District_Northern_Portugal.html',
                joiner: 'Or',
              },
            ],
            photos: [
              {
                image: bifana,
                alt: 'A bifana: a soft bread roll filled with thin slices of marinated pork',
              },
              { image: quail, alt: 'A whole roasted quail in an orange sauce on a white plate' },
            ],
          },
          {
            id: 'cachorrinhos',
            title: 'Cachorrinhos da Batalha',
            subtitle: '(Little hot dogs)',
            venues: [
              {
                name: 'Gazela',
                href: 'https://www.tripadvisor.pt/Restaurant_Review-g189180-d4341238-Reviews-Gazela_Cachorrinhos_da_Batalha-Porto_Porto_District_Northern_Portugal.html',
              },
            ],
            photos: [
              {
                image: cachorrinhos,
                alt: 'Cachorrinhos, thin toasted hot-dog sandwiches cut into pieces, with a plate of chips',
              },
            ],
          },
          {
            id: 'traditional-portuguese-food',
            title: 'Traditional Portuguese Food',
            venues: [
              {
                name: 'Porta Dezanove',
                href: 'https://www.facebook.com/profile.php?id=100063611710285',
              },
            ],
            photos: [
              {
                image: portaDezanove,
                alt: 'Fried pastries on a slate board next to a small pan of stew',
              },
            ],
          },
          {
            id: 'prego-no-pao',
            title: 'Prego no Pão',
            venues: [
              {
                name: 'Mirandas Kaffe',
                href: 'https://www.tripadvisor.pt/Restaurant_Review-g189180-d12317533-Reviews-Mirandas_Kaffe-Porto_Porto_District_Northern_Portugal.html',
              },
            ],
            photos: [
              {
                image: pregoNoPao,
                alt: 'A prego: a pink-centred beef steak in a crusty bread roll',
              },
            ],
          },
          {
            id: 'chicken',
            title: 'Do you like anything and everything chicken-related?',
            notes: [
              'Welcome to “Peter of the Chickens!”',
              'Ask for a “Canja” (chicken soup) and chicken for X people!',
            ],
            venues: [
              {
                name: 'Pedro dos Frangos',
                href: 'https://www.tripadvisor.pt/Restaurant_Review-g189180-d1981719-Reviews-Restaurante_Pedro_dos_Frangos-Porto_Porto_District_Northern_Portugal.html',
              },
            ],
            photos: [
              { image: roastChicken, alt: 'Rows of chickens roasting on spits over hot charcoal' },
            ],
          },
          {
            id: 'portuguese-food',
            title: 'Portuguese food',
            venues: [
              {
                name: 'O Buraco',
                href: 'https://www.tripadvisor.pt/Restaurant_Review-g189180-d2419164-Reviews-O_Buraco-Porto_Porto_District_Northern_Portugal.html',
              },
            ],
            photos: [
              {
                image: oBuraco,
                alt: 'A table of Portuguese dishes: fried fish with lemon, a stew, bread and a pot of soup',
              },
            ],
          },
          {
            id: 'rojoes',
            title: 'Rojões',
            venues: [
              { name: 'Casa Presuntos “Xico”' },
              {
                name: 'Casa Expresso',
                href: 'https://www.tripadvisor.pt/Restaurant_Review-g189180-d8114433-Reviews-Casa_Expresso-Porto_Porto_District_Northern_Portugal.html',
                joiner: 'or',
              },
            ],
            photos: [{ image: rojoes, alt: 'Rojões, chunks of fried pork, in a bread roll' }],
          },
          {
            id: 'panado-no-pao',
            title: 'Panado no Pão',
            venues: [
              {
                name: 'Tasca do Luís. Panados & Cia',
                href: 'https://www.tripadvisor.pt/Restaurant_Review-g189180-d25436030-Reviews-Tasca_do_Luis_Panados_Cia-Porto_Porto_District_Northern_Portugal.html',
              },
            ],
            photos: [{ image: panadoNoPao, alt: 'A large breaded pork cutlet in a bread roll' }],
          },
          {
            id: 'pao-com-chourico',
            title: 'Pão com chouriço',
            venues: [
              {
                name: 'Bó Tá Quente',
                href: 'https://www.tripadvisor.com/Restaurant_Review-g189180-d33253824-Reviews-Bo_Ta_Quente-Porto_Porto_District_Northern_Portugal.html',
              },
            ],
            photos: [
              {
                image: paoComChourico,
                alt: 'Pão com chouriço, bread baked with chorizo inside, in front of a handwritten chalkboard menu',
              },
            ],
          },
          {
            id: 'traditional-portuguese-food-2',
            title: 'Traditional Portuguese food',
            venues: [{ name: 'Pote Velho' }, { name: 'Taberna Santo António', joiner: 'or' }],
            photos: [
              {
                image: roastOctopus,
                alt: 'Roast octopus with potatoes, peppers, onion and olives',
              },
            ],
          },
          {
            id: 'medieval-tavern',
            title: 'Medieval Tavern',
            notes: ['(per reservation only)'],
            venues: [
              { name: 'O Caldeirão', href: 'https://www.facebook.com/Tabernamedievalocaldeirao/' },
            ],
            photos: [
              {
                image: medievalTavern,
                alt: 'A group of friends at a long wooden table in a medieval-themed tavern, with clay jugs and bowls',
              },
            ],
          },
          {
            id: 'seafood',
            title: 'Seafood',
            venues: [{ name: 'Mauritania Matosinhos', href: 'https://mauritaniamatosinhos.pt/' }],
            photos: [
              {
                image: mauritaniaMatosinhos,
                alt: 'A long restaurant counter with bar stools and shelves of bottles',
              },
            ],
          },
          {
            id: 'fish-octopus-squid',
            title: 'Fish / Octopus / Squid',
            notes: ['(ask the staff for advice on which fish to order)'],
            venues: [
              { name: 'Tito 2' },
              {
                name: 'Salta ó Muro',
                href: 'https://www.tripadvisor.pt/Restaurant_Review-g652092-d1105493-Reviews-Restaurante_Salta_o_Muro-Matosinhos_Porto_District_Northern_Portugal.html',
                joiner: 'Or',
              },
            ],
            photos: [{ image: grilledFish, alt: 'Grilled fish opened flat, with lemon slices' }],
          },
          {
            id: 'meat-heaven',
            title: 'Meat Heaven',
            notes: ['(ask the staff for advice on which cut to order)'],
            venues: [
              {
                name: 'Central Churrasco',
                href: 'https://www.google.com/maps/place/Central+Churrasco/@41.1830674,-8.6964892,16.02z/data=!4m6!3m5!1s0xd246f2fb1db84d9:0x58eeaab33dba88de!8m2!3d41.185028!4d-8.6947879!16s%2Fg%2F11b6_hvm5x',
              },
            ],
            photos: [{ image: grilledSteaks, alt: 'Thick grilled beef steaks served on a plate' }],
          },
          {
            id: 'out-of-the-ordinary-food',
            title: 'Out of the ordinary food',
            venues: [
              {
                name: 'Casa de Pasto da Palmeira',
                href: 'https://www.tripadvisor.pt/Restaurant_Review-g189180-d2328286-Reviews-Casa_de_Pasto_da_Palmeira-Porto_Porto_District_Northern_Portugal.html',
              },
            ],
            photos: [
              {
                image: casaDePastoDaPalmeira,
                alt: 'Overhead view of a table full of small sharing plates',
              },
            ],
          },
        ],
      },
      {
        id: 'halal',
        title: 'Halal',
        places: [
          {
            id: 'pakistani-food',
            title: 'Pakistani food',
            venues: [
              {
                name: 'Turmeric Restaurant حلال Halal',
                href: 'https://www.google.com/maps/place/Turmeric+Restaurant+%D8%AD%D9%84%D8%A7%D9%84+Halal%E2%80%AD/@41.1490326,-8.6115811,17z/data=!3m1!4b1!4m6!3m5!1s0xd2465df794d6e81:0x5de0ef683e23edad!8m2!3d41.1490326!4d-8.6090062!16s%2Fg%2F11l6lmq491?entry=ttu',
              },
            ],
            photos: [
              {
                image: pakistaniCurry,
                alt: 'A curry in a copper serving bowl topped with fresh coriander',
              },
            ],
          },
        ],
      },
      {
        id: 'vegan',
        title: 'Vegan',
        places: [
          {
            id: 'vegan-francesinha',
            title: 'Francesinha',
            venues: [
              {
                name: 'Lado B',
                href: 'https://www.tripadvisor.pt/Restaurant_Review-g189180-d3139493-Reviews-Lado_B_Coliseu-Porto_Porto_District_Northern_Portugal.html',
              },
            ],
            photos: [
              {
                image: veganFrancesinha,
                alt: 'A vegan francesinha covered in melted cheese and orange sauce in a white bowl',
              },
            ],
          },
          {
            id: 'middle-eastern-street-food',
            title: 'Middle Eastern Street Food',
            venues: [{ name: 'Cult of Pita', href: 'https://www.cultofpita.com/' }],
            photos: [
              {
                image: cultOfPita,
                alt: 'Hands reaching over a table full of pitas, salads and dips',
              },
            ],
          },
          {
            id: 'vegan-hamburgers',
            title: 'Hamburgers',
            venues: [
              {
                name: 'Apuro - Vegan Bar',
                href: 'https://www.tripadvisor.pt/Restaurant_Review-g189180-d15238337-Reviews-APURO_Vegan_Bar-Porto_Porto_District_Northern_Portugal.html',
              },
            ],
            photos: [{ image: veganBurger, alt: 'A vegan burger on a wooden board with chips' }],
          },
          {
            id: 'vegan-buffet',
            title: 'Buffet',
            venues: [
              { name: 'daTerra Baixa', href: 'https://www.daterra.pt/contactos-daterra-baixa/' },
            ],
            photos: [
              {
                image: daterraBuffet,
                alt: 'A buffet table of colourful salads, grains, juices and desserts',
              },
            ],
          },
          {
            id: 'vegan-buffet-matosinhos',
            title: 'Buffet',
            venues: [
              {
                name: 'Terrárea',
                href: 'https://www.tripadvisor.pt/Restaurant_Review-g652092-d12729153-Reviews-Terrarea-Matosinhos_Porto_District_Northern_Portugal.html',
              },
            ],
            photos: [
              {
                image: terrarea,
                alt: 'A leafy restaurant interior full of plants, with wooden tables and blue chairs',
              },
            ],
          },
          {
            id: 'berry-boavista',
            venues: [
              {
                name: 'Berry Boavista',
                href: 'https://www.tripadvisor.pt/Restaurant_Review-g189180-d10452014-Reviews-Berry-Porto_Porto_District_Northern_Portugal.html',
              },
            ],
            photos: [{ image: berryWrap, alt: 'A wrap cut in half on a wooden board' }],
          },
          {
            id: 'vegan-donuts',
            title: 'Vegan Donuts',
            venues: [
              {
                name: 'Duh! Vegan Donuts',
                href: 'https://www.tripadvisor.com/Restaurant_Review-g189180-d16827715-Reviews-DUH_vegan_donuts-Porto_Porto_District_Northern_Portugal.html',
              },
            ],
            photos: [
              {
                image: veganDonuts,
                alt: 'A person holding a plate with two chocolate-glazed donuts',
              },
            ],
          },
        ],
      },
      {
        id: 'high-end',
        title: 'High €nd',
        places: [
          {
            id: 'experimental-cuisine',
            title: 'Experimental cuisine',
            venues: [
              {
                name: 'Mistu',
                href: 'https://www.tripadvisor.com/Restaurant_Review-g189180-d13129835-Reviews-MISTU_restaurant_bar-Porto_Porto_District_Northern_Portugal.html',
              },
            ],
            photos: [
              { image: mistu, alt: 'A plated dish of meat with grilled vegetables and mushrooms' },
            ],
          },
          {
            id: 'chef-avillez',
            title: 'Chef Avillez’s restaurant',
            venues: [
              {
                name: 'Cantinho do Avillez',
                href: 'https://www.google.com/maps/place/Cantinho+do+Avillez+-+Porto/@41.1469787,-8.6155272,15.12z/data=!3m1!5s0xd2464e19de59021:0xb45217327fd5246f!4m6!3m5!1s0xd2464e19dbe1b39:0x90420facf530bb81!8m2!3d41.1431846!4d-8.6134064!16s%2Fg%2F11b6c9q411',
              },
            ],
            photos: [
              {
                image: cantinhoDoAvillez,
                alt: 'A bowl of braised meat in sauce, garnished with star anise and herbs',
              },
            ],
          },
          {
            id: 'great-food',
            title: 'Great food',
            venues: [
              {
                name: 'Terminal 4450',
                href: 'https://www.google.com/maps/place/Restaurante+Terminal+4450/@41.1881653,-8.701009,16.28z/data=!4m6!3m5!1s0xd246f2bfde9b21d:0x14feb75946032a0a!8m2!3d41.1874058!4d-8.6991769!16s%2Fg%2F11bx55yy7b',
              },
            ],
            photos: [
              { image: terminal4450, alt: 'Grilled steak and toasted bread on a wooden board' },
            ],
          },
          {
            id: 'salt-mae-experience',
            title: 'A kind of Salt Bae experience',
            venues: [
              {
                name: 'Steakhouse da Maia',
                href: 'https://www.tripadvisor.pt/Restaurant_Review-g1066093-d11635816-Reviews-Steakhouse_Portuguesa_da_Maia-Maia_Porto_District_Northern_Portugal.html',
              },
            ],
            photos: [
              { image: steakhouseDaMaia, alt: 'Tiered wooden boards piled with sliced rare steak' },
            ],
          },
          {
            id: 'really-expensive',
            title: 'Really expensive, but a great place',
            venues: [
              { name: 'Casa de Chá da Boa Nova', href: 'https://www.casadechadaboanova.pt/' },
            ],
            photos: [
              {
                image: casaDeChaDaBoaNova,
                alt: 'A set table looking out through a wide window onto rocks and the ocean',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'have-a-drink',
    title: 'Have a drink/Tea',
    cover: { image: rotaDoCha, alt: '' },
    places: [
      {
        id: 'chapel-wine-bar',
        title: 'Old chapel turned into a wine bar',
        notes: [
          'Amazing place. They kept most of the chapel’s structure and altars, and it’s very charming. Good variety of wines; you can ask the staff for advice.',
        ],
        venues: [
          {
            name: 'Capela',
            href: 'https://www.tripadvisor.co.uk/Restaurant_Review-g189180-d10163651-Reviews-Capela_Incomum-Porto_Porto_District_Northern_Portugal.html',
          },
        ],
        photos: [
          {
            image: capelaWineBar,
            alt: 'Inside the chapel wine bar: a carved altar behind café tables and chairs',
          },
        ],
      },
      {
        id: 'craft-beers',
        title: 'Craft beers',
        notes: [
          'They have a great variety of beers, on tap and bottled, both Portuguese and foreign. You can ask for a taste of the tap beers if you’re undecided.',
          'Cool terrace in the backyard.',
        ],
        venues: [
          {
            name: 'Catraio',
            href: 'https://www.tripadvisor.co.uk/Attraction_Review-g189180-d9730575-Reviews-Catraio_Craft_Beer_Shop-Porto_Porto_District_Northern_Portugal.html',
          },
        ],
        photos: [
          {
            image: catraio,
            alt: 'Inside a craft beer shop, with bottles on the shelves and small high tables',
          },
        ],
      },
      {
        id: 'beer-in-a-garden',
        title: 'Beer in a garden',
        notes: [
          'Nice, helpful staff, plus good snacks and good-quality craft beer.',
          'Go down the stairs for extra seating and the beer garden. A lovely, quiet place.',
        ],
        venues: [
          {
            name: 'Letraria',
            href: 'https://www.tripadvisor.co.uk/Restaurant_Review-g189180-d12406057-Reviews-Letraria_Craft_Beer_Garden_Porto-Porto_Porto_District_Northern_Portugal.html',
          },
        ],
        photos: [
          { image: letraria, alt: 'People drinking at tables in a sunny, tree-shaded beer garden' },
        ],
      },
      {
        id: 'teas',
        title: 'Teas from all over the world',
        notes: ['Teas from all over the world with a lovely backyard garden.'],
        venues: [
          {
            name: 'Rota do Chá',
            href: 'https://www.tripadvisor.co.uk/Restaurant_Review-g189180-d3571080-Reviews-Rota_do_Cha-Porto_Porto_District_Northern_Portugal.html',
          },
        ],
        photos: [
          {
            image: rotaDoCha,
            alt: 'A leafy backyard garden with low tables, cushions and red lanterns',
          },
        ],
      },
      {
        id: 'cat-cafe',
        title: 'Cat Café',
        notes: [
          'Purrfect place for cat lovers, this fairly recent space is the first cat café in Porto. The owners belong to an animal welfare association, so all the cats in the café were rescued from the streets and are there to socialise and be adopted.',
        ],
        venues: [
          {
            name: 'Porto dos Gatos',
            href: 'https://www.tripadvisor.co.uk/Restaurant_Review-g189180-d13989465-Reviews-O_Porto_dos_Gatos-Porto_Porto_District_Northern_Portugal.html',
          },
        ],
        photos: [
          {
            image: catCafe,
            alt: 'A bright café room with a woman sitting by the window and cats lounging around',
          },
        ],
      },
    ],
  },
  {
    id: 'challenges',
    title: 'Challenges - Who is brave enough?',
    short: 'Challenges',
    cover: { image: megaFrancesinha, alt: '' },
    places: [
      {
        id: 'mega-francesinha',
        title: 'Brace yourself... and ask for the “Mega Francesinha”',
        venues: [
          {
            name: 'Verso em Pedra',
            href: 'https://www.tripadvisor.pt/Restaurant_Review-g189180-d2292130-Reviews-Restaurante_Verso_em_Pedra-Porto_Porto_District_Northern_Portugal.html',
          },
        ],
        photos: [
          {
            image: megaFrancesinha,
            alt: 'A huge francesinha on a platter, with a bowl of sauce on the side',
          },
        ],
      },
      {
        id: 'hot-wings',
        title: '12 🔥 hot 🔥 wings in 3 minutes',
        venues: [{ name: 'USA Axe Club', href: 'https://usaxeclub.com/index.php?lang=po' }],
        photos: [
          {
            image: hotWingsChallenge,
            alt: 'Poster for the “Jack Fire Challenge” showing a skillet of spicy chicken wings',
          },
        ],
      },
    ],
  },
  {
    id: 'desert-or-snack',
    title: 'Dessert or Snack',
    cover: { image: pastelDeNata, alt: '' },
    places: [
      {
        id: 'pastel-de-nata',
        title: 'Pastel de Nata',
        venues: [
          {
            name: 'Manteigaria',
            href: 'https://www.google.com/maps/place/Manteigaria+%E2%80%93+F%C3%A1brica+de+Past%C3%A9is+de+Nata/@41.1580284,-8.6173319,14z/data=!4m10!1m2!2m1!1snata+porto!3m6!1s0xd2464e53b98b8af:0xec985ce2cf82b127!8m2!3d41.1486437!4d-8.6069376!15sCgpuYXRhIHBvcnRvWgwiCm5hdGEgcG9ydG-SAQtwYXN0cnlfc2hvcJoBI0NoWkRTVWhOTUc5blMwVkpRMEZuU1VRd0xVMVFURXAzRUFF4AEA!16s%2Fg%2F11g9g0rk7n',
          },
        ],
        photos: [{ image: pastelDeNata, alt: 'Trays of freshly baked pastéis de nata' }],
      },
      {
        id: 'anything',
        title: 'Anything!',
        venues: [
          {
            name: 'Padaria Ribeiro',
            href: 'https://www.google.com/maps/place/Padaria+Ribeiro/@41.1475547,-8.6148815,3a,75y,90t/data=!3m8!1e2!3m6!1sAF1QipMii20xzJRFLlp4xokY4ND1QVGla1zeLT64XMr_!2e10!3e12!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipMii20xzJRFLlp4xokY4ND1QVGla1zeLT64XMr_%3Dw114-h86-k-no!7i4608!8i3456!4m11!1m2!2m1!1spadaria+ribeiro+porto!3m7!1s0xd2464e29435c62b:0x5a68c04c694dc3e2!8m2!3d41.1475591!4d-8.6149485!10e5!15sChVwYWRhcmlhIHJpYmVpcm8gcG9ydG8iA4gBAVoXIhVwYWRhcmlhIHJpYmVpcm8gcG9ydG-SAQtwYXN0cnlfc2hvcOABAA!16s%2Fg%2F1thq1_5q',
          },
        ],
        photos: [
          {
            image: padariaRibeiro,
            alt: 'Inside a bakery with glass display counters of pastries and cakes',
          },
        ],
      },
      {
        id: 'eclairs',
        title: 'Éclairs',
        venues: [{ name: 'Leitaria da Quinta do Paço' }],
        photos: [
          { image: eclairs, alt: 'Two cream-filled éclairs with a chocolate topping on a plate' },
        ],
      },
      {
        id: 'jesuita',
        title: 'Jesuíta!',
        venues: [{ name: 'Confeitaria Moura' }],
        photos: [
          {
            image: jesuitas,
            alt: 'A stack of jesuítas, triangular puff pastries with a sugar glaze',
          },
        ],
      },
      {
        id: 'pavlovas',
        title: 'Pavlovas and cakes',
        venues: [
          {
            name: 'Miss Pavlova',
            href: 'https://www.tripadvisor.pt/Restaurant_Review-g189180-d7933101-Reviews-Miss_Pavlova_Maison-Porto_Porto_District_Northern_Portugal.html',
          },
        ],
        photos: [{ image: pavlova, alt: 'A pavlova topped with raspberries and blueberries' }],
      },
      {
        id: 'croissants',
        title: 'Best ‘croissants’',
        venues: [
          {
            name: 'Mixpão',
            href: 'https://www.google.com/maps/place/MixP%C3%A3o+Matosinhos+-+O+Croissant+de+Portugal/@41.1740864,-8.6880109,18.71z/data=!4m6!3m5!1s0xd2466a6b51b324b:0xd99b4d04abc746e5!8m2!3d41.1738124!4d-8.6878972!16s%2Fg%2F11rs04rjg',
          },
        ],
        photos: [
          { image: mixpaoCroissants, alt: 'A tray of golden croissants sprinkled with chocolate' },
        ],
      },
      {
        id: 'banoffee',
        title: 'Banoffee',
        notes: ['(Grab a bite by the beach)'],
        venues: [
          {
            name: 'Picaba',
            href: 'https://www.tripadvisor.pt/Restaurant_Review-g189180-d6995446-Reviews-Picaba_Natural_Cafe-Porto_Porto_District_Northern_Portugal.html',
          },
        ],
        photos: [
          {
            image: banoffee,
            alt: 'A slice of banoffee pie drizzled with chocolate on a square plate',
          },
        ],
      },
      {
        id: 'brunch',
        title: 'Brunch / Pancakes / …',
        venues: [
          {
            name: 'Negra Café',
            href: 'https://www.tripadvisor.pt/Restaurant_Review-g189180-d12865926-Reviews-Negra_Cafe_Baixa-Porto_Porto_District_Northern_Portugal.html',
          },
        ],
        photos: [
          {
            image: brunch,
            alt: 'A tiered stand of brunch food with pastries, fruit, cake and a coffee',
          },
        ],
      },
      {
        id: 'treat-yourself',
        title: 'If you want to treat yourself big time...',
        venues: [
          {
            name: 'O gato comeu-te a língua',
            href: 'https://www.tripadvisor.co.uk/Restaurant_Review-g580268-d14883905-Reviews-O_Gato_Comeu_te_a_Lingua_Vila_Nova_de_Gaia-Vila_Nova_de_Gaia_Porto_District_Nort.html',
          },
        ],
        photos: [
          {
            image: sundaesAndCrepe,
            alt: 'Ice-cream sundaes in tall glasses next to a crêpe with chocolate sauce',
          },
        ],
      },
    ],
  },
  {
    id: 'what-to-visit',
    title: 'What to visit?',
    cover: { image: ribeira, alt: '' },
    subgroups: [
      {
        id: 'places-to-visit-porto',
        title: 'Places to visit - Porto',
        places: [
          {
            id: 'clerigos',
            title: 'Ex-libris of the city',
            notes: [
              'Can be seen from many different points in the city.',
              'It has a tower, a church and a museum.',
            ],
            venues: [{ name: 'Clérigos', href: 'https://www.torredosclerigos.pt/en/' }],
            photos: [
              {
                image: clerigos,
                alt: 'The baroque Clérigos church and its tall bell tower at the top of a street',
              },
            ],
          },
          {
            id: 'aliados',
            title: 'Considered the city centre',
            notes: [
              'A majestic avenue lined with Beaux-Arts buildings, with the city hall at the top.',
            ],
            venues: [{ name: 'Aliados' }],
            photos: [
              {
                image: aliados,
                alt: 'A wide avenue with an equestrian statue, lined with ornate buildings',
              },
            ],
          },
          {
            id: 'palacio-da-bolsa',
            title: '19th century Stock Exchange Palace',
            notes: [
              'A very beautiful historic building in Porto, with a special mention for the Arab Room (not the one in the picture, to avoid spoilers).',
            ],
            venues: [{ name: 'Palácio da Bolsa', href: 'https://palaciodabolsa.com/' }],
            photos: [
              {
                image: palacioDaBolsa,
                alt: 'An arcaded interior courtyard under a glass dome inside Palácio da Bolsa',
              },
            ],
          },
          {
            id: 'livraria-lello',
            title: 'The bookshop that is famous for inspiring Harry Potter',
            notes: [
              'Super iconic bookshop. It is considered one of the most beautiful bookshops in the world. It has a beautifully painted facade and an amazing staircase inside. Because of the number of visitors, there is now an entry fee, but you can deduct it from the price of a book bought there. Be ready for queues and a bit of waiting.',
            ],
            venues: [
              {
                name: 'Livraria Lello',
                href: 'https://www.google.com/maps/place/Livraria+Lello/@41.1469787,-8.6155272,15.12z/data=!4m6!3m5!1s0xd2464e28c5e9a77:0x7f08405ee8a1e44f!8m2!3d41.1469055!4d-8.6147746!16s%2Fm%2F0glq9bd',
              },
            ],
            photos: [
              {
                image: livrariaLello,
                alt: 'The red forked staircase inside Livraria Lello, surrounded by carved wooden bookshelves',
              },
            ],
          },
          {
            id: 'sao-bento-station',
            title: 'Beautiful train station',
            notes: ['A true icon of the city.', 'Right in the city centre, a must-see!'],
            venues: [
              {
                name: 'São Bento Station',
                href: 'https://en.wikipedia.org/wiki/S%C3%A3o_Bento_railway_station',
              },
            ],
            photos: [
              {
                image: saoBentoStation,
                alt: 'The entrance hall of São Bento station, its walls covered in blue-and-white tile panels',
              },
            ],
          },
          {
            id: 'praca-dos-leoes',
            title: 'A square in the heart of Porto’s nightlife',
            notes: [
              'It has an important academic tradition and sits among amazing buildings like the Reitoria do Porto (where the University of Porto was founded) and the Igreja do Carmo (the tiled church).',
            ],
            venues: [
              {
                name: 'Praça dos Leões',
                href: 'https://www.tripadvisor.pt/Attraction_Review-g189180-d11830538-Reviews-Praca_Gomes_Teixeira-Porto_Porto_District_Northern_Portugal.html',
              },
            ],
            photos: [
              {
                image: pracaDosLeoes,
                alt: 'A fountain with lion statues in a square, in front of a church with a tiled side wall',
              },
            ],
          },
          {
            id: 'ribeira',
            title: 'Riverfront pedestrian street',
            notes: [
              'With narrow, colourful houses, loads of traditional restaurants and a very good vibe.',
            ],
            venues: [{ name: 'Ribeira', href: 'https://porto.travel/ribeira/' }],
            photos: [
              {
                image: ribeira,
                alt: 'Crowds along the riverfront, with colourful houses and an iron bridge behind',
              },
            ],
          },
          {
            id: 'jardim-botanico',
            title: 'Porto Botanical Garden',
            notes: [
              'It has several ponds and greenhouses, and most plants have a little plaque with their species. Entry is free.',
            ],
            venues: [
              {
                name: 'Jardim Botânico',
                href: 'https://agendaculturalporto.org/os-melhores-jardins-e-parques-do-porto/jardim-botanico-do-porto/',
              },
            ],
            photos: [
              {
                image: jardimBotanico,
                alt: 'A red house reflected in a garden pond, surrounded by trees',
              },
            ],
          },
          {
            id: 'majestic',
            title: 'One of the most beautiful cafés in the world',
            notes: [
              'Expect a queue to get into the most famous café in Porto. It dates back to 1921 and has a Belle Époque architectural style.',
            ],
            venues: [
              {
                name: 'Majestic',
                href: 'https://www.google.com/maps/place/Majestic+Caf%C3%A9/@41.1455985,-8.6090793,16.81z/data=!4m6!3m5!1s0xd2464e5a52a2493:0x1dc3afde71cae5f4!8m2!3d41.1472382!4d-8.6065795!16s%2Fg%2F1hhzg00d5?hl=en',
              },
            ],
            photos: [{ image: majesticCafe, alt: 'The ornate carved facade of the Majestic Café' }],
          },
          {
            id: 'funicular-dos-guindais',
            title: 'Go up the hill',
            venues: [
              { name: 'Funicular dos Guindais', href: 'https://www.tudosobreporto.com/funicular' },
            ],
            photos: [
              {
                image: funicularDosGuindais,
                alt: 'A funicular car climbing a steep, leafy hillside track',
              },
            ],
          },
          {
            id: 'porto-cathedral',
            title: 'Old cathedral',
            venues: [{ name: 'Porto Cathedral' }],
            photos: [
              {
                image: portoCathedral,
                alt: 'Aerial view of the cathedral and its square, with an iron bridge and the river behind',
              },
            ],
          },
          {
            id: 'miradouro-das-fontainhas',
            title: 'Nice sightseeing',
            venues: [{ name: 'Miradouro das Fontainhas' }],
            photos: [
              {
                image: miradouroDasFontainhas,
                alt: 'View up the Douro river from a hillside viewpoint, with a bridge in the distance',
              },
            ],
          },
          {
            id: 'jardins-palacio-cristal',
            title: 'Nice gardens to visit',
            notes: [
              "It's called Jardins do Palácio de Cristal (Crystal Palace Gardens) after its original building, now gone. It now has an event/sports venue, while keeping the original gardens with an amazing river view.",
            ],
            venues: [{ name: 'Jardins Palácio Cristal' }],
            photos: [
              {
                image: palacioDeCristalGardens,
                alt: 'A formal garden with a fountain, with the river and a bridge beyond the trees',
              },
              {
                image: palacioDeCristalTurret,
                alt: 'A small stone turret on a garden wall overlooking the Douro river',
              },
            ],
          },
          {
            id: 'alfandega-do-porto',
            title: 'Old customs building (UNESCO World Heritage)',
            notes: [
              'Now converted into a convention centre. It usually has some interesting exhibitions.',
            ],
            venues: [{ name: 'Alfândega do Porto' }],
            photos: [
              {
                image: alfandegaDoPorto,
                alt: 'A long stone building with a tiled roof on the riverbank',
              },
            ],
          },
          {
            id: 'serralves',
            title: 'Nice gardens and Museum',
            venues: [{ name: 'Serralves' }],
            photos: [
              {
                image: serralves,
                alt: 'Aerial view of a pink villa at the end of a long formal garden with a fountain',
              },
            ],
          },
          {
            id: 'porto-tram',
            title: 'Tram tour',
            venues: [
              { name: 'Porto Tram', href: 'https://www.stcp.pt/pt/turismo/porto-tram-city-tour/' },
            ],
            photos: [{ image: portoTram, alt: 'A vintage wooden tram on a cobbled street' }],
          },
          {
            id: 'casa-da-musica',
            title: 'Want to see a concert in an amazing place?',
            notes: [
              'Venue for shows and concerts. Known for its advanced architecture and quirky design, it’s a modern symbol of the city.',
            ],
            venues: [{ name: 'Casa da Música' }],
            photos: [
              {
                image: casaDaMusica,
                alt: 'The angular white Casa da Música building under a blue sky',
              },
            ],
          },
          {
            id: 'mcdonalds-aliados',
            title: "Named the most beautiful McDonald's in the world",
            venues: [{ name: "McDonald's Aliados" }],
            photos: [
              {
                image: mcdonaldsAliados,
                alt: 'An Art Deco McDonald’s entrance, with a bronze eagle above the arched window',
              },
            ],
          },
        ],
      },
      {
        id: 'places-to-visit-gaia',
        title: 'Places to visit - Gaia',
        places: [
          {
            id: 'ponte-d-luis',
            title: 'Nice sightseeing - walk across the bridge to Gaia',
            venues: [{ name: 'Ponte D. Luís' }],
            photos: [
              {
                image: ponteDLuis,
                alt: 'An iron arch bridge spanning the Douro, with Porto’s old town on the hill behind',
              },
            ],
          },
          {
            id: 'serra-do-pilar',
            title: 'Then see Porto from here',
            venues: [{ name: 'Mosteiro da Serra do Pilar' }],
            photos: [{ image: serraDoPilar, alt: 'A domed monastery on top of a rocky hill' }],
          },
          {
            id: 'wow',
            title: 'Beautiful view, museums and Porto wine tasting',
            venues: [{ name: 'WoW' }],
            photos: [
              {
                image: wow,
                alt: 'A square at night, with a light projection on the surrounding buildings',
              },
            ],
          },
          {
            id: 'teleferico-de-gaia',
            title: 'Cable car',
            venues: [{ name: 'Teleférico de Gaia', href: 'https://gaiacablecar.com/' }],
            photos: [
              {
                image: gaiaCableCar,
                alt: 'A cable car cabin gliding over riverside rooftops at sunset',
              },
            ],
          },
        ],
      },
      {
        id: 'places-to-visit-matosinhos',
        title: 'Places to visit - Matosinhos',
        places: [
          {
            id: 'parque-da-cidade',
            title: 'Nice sightseeing and Park',
            venues: [{ name: 'Miradouro da Aurora / Parque da Cidade' }],
            photos: [
              { image: parqueDaCidade, alt: 'A green park and a lake seen through a stone window' },
            ],
          },
          {
            id: 'castelo-do-queijo',
            title: 'Old beach fort',
            venues: [
              {
                name: 'Castelo do Queijo',
                href: 'https://www.tripadvisor.pt/Attraction_Review-g189180-d3923513-Reviews-Castle_of_the_Cheese-Porto_Porto_District_Northern_Portugal.html',
              },
            ],
            photos: [{ image: casteloDoQueijo, alt: 'A squat stone fort on the seafront' }],
          },
          {
            id: 'matosinhos-beach',
            title: 'Walk along the Beach',
            venues: [
              {
                name: 'Matosinhos',
                href: 'https://www.google.com/maps/place/Praia+de+Matosinhos/@41.1752475,-8.6920095,15z/data=!4m15!1m8!3m7!1s0xd24689da50b488b:0x400ebbde49038d0!2sMatosinhos!3b1!8m2!3d41.1844362!4d-8.6962775!16zL20vMDFycGRk!3m5!1s0xd246f3ccebcdfd9:0x53fc48bbe21c603f!8m2!3d41.1763702!4d-8.6926763!16s%2Fg%2F11b6_99gtk',
              },
            ],
            photos: [
              {
                image: matosinhosBeach,
                alt: 'A wide sandy beach with a port terminal in the distance',
              },
            ],
          },
          {
            id: 'piscina-das-mares',
            title: 'Ocean pool',
            venues: [
              {
                name: 'Piscina das Marés',
                href: 'https://www.google.com/maps/place/Piscina+das+Mar%C3%A9s/@41.1924827,-8.708906,16.72z/data=!4m6!3m5!1s0xd24692b163545db:0x30fd5b93d94a6d1e!8m2!3d41.1927778!4d-8.7075!16s%2Fm%2F0_9b3bd',
              },
            ],
            photos: [
              { image: piscinaDasMares, alt: 'A turquoise ocean pool among the rocks by the sea' },
            ],
          },
          {
            id: 'canned-fish-factory',
            title: 'Visit a traditional canned fish factory',
            venues: [
              { name: 'Portugal Norte', href: 'https://portugalnorte.com/en/visit-the-factory' },
            ],
            photos: [
              {
                image: cannedFishFactory,
                alt: 'Workers in hairnets and aprons preparing fish on a cannery production line',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'fun-team-building',
    title: 'Fun / Team Building',
    cover: { image: bridgeClimb, alt: '' },
    subgroups: [
      {
        id: 'porto-matosinhos',
        title: 'Porto & Matosinhos',
        places: [
          {
            id: 'axe-throwing',
            title: 'Axe Throwing',
            venues: [{ name: 'USA Axe Club', href: 'https://usaxeclub.com/index.php?lang=po' }],
            photos: [{ image: axeThrowing, alt: 'A man throwing an axe at a wooden target' }],
          },
          {
            id: 'lasertag',
            title: 'LaserTag',
            venues: [
              { name: 'LaserZone', href: 'https://www.instagram.com/laserzone.pt' },
              { name: 'laserx.pt', href: 'http://laserx.pt', joiner: 'or' },
            ],
            photos: [
              {
                image: laserTag,
                alt: 'A player in a glowing vest aiming a laser tag gun in a dark neon arena',
              },
            ],
          },
          {
            id: 'simuladores',
            title: 'Simuladores',
            venues: [{ name: 'Autódromo Virtual da Boavista' }],
            photos: [
              {
                image: racingSimulator,
                alt: 'A driver in a racing simulator seat facing three screens',
              },
            ],
          },
          {
            id: 'vr-experiences',
            title: 'VR Experiences',
            venues: [
              { name: 'Another World', href: 'https://porto.another-world.pt/' },
              {
                name: 'The Park VR Porto',
                href: 'https://www.theparkplayground.com/pt-pt',
                joiner: 'or',
              },
            ],
            photos: [
              { image: vrNeonRoom, alt: 'People wearing VR headsets in a neon-lit room' },
              {
                image: vrArena,
                alt: 'A group with VR headsets and controllers in a free-roam arena',
              },
            ],
          },
          {
            id: 'floor-is-lava',
            title: 'Challenges & Floor is Lava',
            venues: [
              { name: 'Banzai', href: 'https://banzai.pt/team-building/' },
              {
                name: 'Lava Run',
                href: 'https://www.instagram.com/lava_run_game?igsh=MTNoaGM2dDhlYWRucA%3D%3D',
                joiner: 'or',
              },
            ],
            photos: [
              { image: laserMaze, alt: 'A player crawling through a maze of green laser beams' },
              {
                image: lavaRun,
                alt: 'Players on a glowing tiled floor under a “Lava Run” neon sign',
              },
            ],
          },
          {
            id: 'mini-golf',
            title: 'Mini Golf & Billiards',
            venues: [{ name: 'Mini Golf Porto', href: 'https://minigolfporto.com/' }],
            photos: [
              { image: miniGolf, alt: 'A man putting on a glow-in-the-dark mini golf course' },
            ],
          },
          {
            id: 'bouldering',
            title: 'Bouldering (Indoor Climbing)',
            venues: [
              { name: 'North Wall', href: 'https://thenorthwall.pt/en/home-en/' },
              { name: 'São Rock', href: 'https://saorockclimbing.com/', joiner: 'or' },
            ],
            photos: [
              {
                image: bouldering,
                alt: 'A climber looking up at the colourful holds of an indoor bouldering wall',
              },
            ],
          },
          {
            id: 'golf-on-a-pub',
            title: 'Golf in a Pub',
            venues: [{ name: 'FinoGolfClub', href: 'https://www.finogolfclub.com/' }],
            photos: [
              {
                image: golfSimulator,
                alt: 'Someone swinging a club in front of a golf simulator screen',
              },
            ],
          },
          {
            id: 'trampolines',
            title: 'Trampolines',
            venues: [
              {
                name: 'Jumpers',
                href: 'https://www.google.com/maps/place/Jumpers+-+Trampolim+Parque+-+Porto/@41.1733234,-8.6537608,15.1z/data=!3m1!5s0xd246592d05fafab:0x1403f2fd7f816c87!4m6!3m5!1s0xd246592d0854d63:0x104abe32f94cb511!8m2!3d41.1758863!4d-8.6467817!16s%2Fg%2F11f3vnk4bw',
              },
              {
                name: 'Jumpyard',
                href: 'https://jumpyard.pt/matosinhos/2h-jumptime/',
                joiner: 'or',
              },
            ],
            photos: [
              { image: trampolines, alt: 'An indoor trampoline park with rows of trampolines' },
            ],
          },
          {
            id: 'bridge-climb',
            title: '"Climb" a bridge',
            venues: [{ name: 'Porto Bridge Climb', href: 'https://booking.portobridgeclimb.com/' }],
            photos: [
              {
                image: bridgeClimb,
                alt: 'People climbing the steps along the arch of a bridge at sunset',
              },
            ],
          },
          {
            id: 'escape-rooms',
            title: 'Escape rooms',
            venues: [{ name: 'Porto Exit Games', href: 'https://portoexitgames.com/' }],
            photos: [
              { image: escapeRooms, alt: 'An Exit Games Porto sign asking “Can you escape?”' },
            ],
          },
          {
            id: 'bridge-cruise',
            title: '(Small) Bridge cruise',
            venues: [
              {
                name: 'Cruzeiro das 6 pontes',
                href: 'https://www.cruzeiros-douro.pt/pt/cruzeiros-1-dia/cruzeiro-6-pontes',
              },
            ],
            photos: [
              {
                image: sixBridgesCruise,
                alt: 'A traditional wooden boat on the Douro in front of the riverside and a bridge',
              },
            ],
          },
          {
            id: 'up-river-cruise',
            title: 'Full day up-river cruise',
            venues: [
              {
                name: 'Porto - Pinhão - Porto',
                href: 'https://novasetapas.com/en/package/upstream-porto-pinhao-porto/',
              },
            ],
            photos: [
              { image: douroRiverCruise, alt: 'A river cruise ship among terraced vineyard hills' },
            ],
          },
          {
            id: 'speedboat',
            title: 'Speedboat',
            venues: [
              {
                name: 'Douro Speedboat',
                href: 'https://www.livingtours.com/en/tour/porto-speed-boat',
              },
            ],
            photos: [
              {
                image: speedboat,
                alt: 'A group in life jackets on a red speedboat throwing up spray',
              },
            ],
          },
          {
            id: 'quiz-game',
            title: 'Quiz Game',
            venues: [{ name: 'Quiz Game', href: 'https://quiz-game.pt/' }],
            photos: [
              { image: quizGame, alt: 'Players at illuminated game-show podiums in a quiz room' },
            ],
          },
          {
            id: 'bubble-football',
            title: 'Bubble Football',
            venues: [{ name: 'Bubble Football Povoa Varzim' }],
            photos: [
              {
                image: bubbleFootball,
                alt: 'People inside inflatable bubbles playing football on a grass field',
              },
            ],
          },
          {
            id: 'paintball',
            title: 'Paintball',
            venues: [{ name: 'Paintball Porto' }],
            photos: [
              {
                image: paintball,
                alt: 'A group of paintball players in masks and camouflage holding markers',
              },
            ],
          },
          {
            id: 'karts',
            title: 'Karts',
            venues: [
              { name: 'Kart Center Matosinhos', href: 'https://www.kartcentermatosinhos.com/' },
              { name: 'Cabo do Mundo', href: 'https://cabodomundokarting.pt/', joiner: 'or' },
            ],
            photos: [
              { image: kartsIndoor, alt: 'Rows of go-karts lined up on an indoor track' },
              { image: kartsOutdoor, alt: 'Two go-karts racing on an outdoor track' },
            ],
          },
          {
            id: 'dinner-with-the-assassin',
            title: 'Dinner with the Assassin',
            venues: [
              {
                name: 'Jantar com o Assassino',
                href: 'https://www.jump.pt/pt/programas-de-teambuilding/misterio/a-mesa-com-o-assassino',
              },
            ],
            photos: [
              {
                image: dinnerWithTheAssassin,
                alt: 'A woman in a masquerade mask reading a card while a guest laughs',
              },
            ],
          },
          {
            id: 'regatta',
            title: 'Regatta',
            venues: [
              {
                name: 'BBdouro',
                href: 'https://www.bbdouro.com/servicos-empresariais/team-building-regata-porto/',
              },
            ],
            photos: [
              { image: regatta, alt: 'A team sailing a racing yacht with red and yellow sails' },
            ],
          },
          {
            id: 'be-a-band',
            title: 'Be a Band',
            venues: [
              {
                name: 'Be a Band',
                href: 'http://www.beaband.pt/?gclid=Cj0KCQiAgaGgBhC8ARIsAAAyLfFaHqWvqMXTlQxzuHmhj4-abvvcKwwj7q8MNFkibL_S9fVZKe4hcFwaAmO6EALw_wcB',
              },
            ],
            photos: [
              {
                image: beABand,
                alt: 'A man conducting a group playing instruments on stage in front of a large screen',
              },
            ],
          },
        ],
      },
    ],
  },
];
