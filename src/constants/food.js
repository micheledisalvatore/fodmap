export const ADD_TO_LOCAL = 'FOOD::ADD_TO_LOCAL';
export const SORT_BY = 'FOOD::SORT_BY';
export const SEARCH = 'FOOD::SEARCH';
export const TO_AVOID = 'to avoid';
export const PERMITTED = 'permitted';
export const RESTRICTED = 'restricted';
export const SUSPICIOUS = 'suspicious';
export const CUSTOM = 'custom';
const CEREAL = 'cereal';
const FRUIT = 'fruit';
const VEGETABLE = 'vegetable';
const FAT = 'fat';
const ANIMAL = 'animal';
const EXTRA = 'extra';
const BASE_FOOD = 'base food';

export const INGREDIENTS = [
  {
    name: 'Aceite 1 cucharadita',
    type: PERMITTED,
    group: FAT,
  },
  {
    name: 'Aceite de ajonjolí',
    type: PERMITTED,
    group: BASE_FOOD,
  },
  {
    name: 'Aceite de soya',
    type: PERMITTED,
    group: BASE_FOOD,
  },
  {
    name: 'Aceitunas 9 piezas',
    type: PERMITTED,
    group: FAT,
  },
  {
    name: 'Acelga 1⁄2 t',
    type: PERMITTED,
    group: VEGETABLE,
  },
  {
    name: 'Aguacate',
    type: TO_AVOID,
  },
  {
    name: 'Aislado de proteína de suero de leche',
    type: PERMITTED,
    group: BASE_FOOD,
  },
  {
    name: 'Ajo',
    type: TO_AVOID,
  },
  {
    name: 'Albahaca',
    type: PERMITTED,
    group: BASE_FOOD,
  },
  {
    name: 'Alcachofas',
    type: TO_AVOID,
  },
  {
    name: 'Alga 1⁄2 t',
    type: PERMITTED,
    group: VEGETABLE,
  },
  {
    name: 'Alimentos con edulcorantes (chicles o caramelos sin azúcar)',
    type: TO_AVOID,
  },
  {
    name: 'Almidón de maíz',
    type: PERMITTED,
    group: BASE_FOOD,
  },
  {
    name: 'Almidón de trigo',
    type: PERMITTED,
    group: BASE_FOOD,
  },
  {
    name: 'Almidón hidrogenado',
    type: TO_AVOID,
    group: BASE_FOOD,
  },
  {
    name: 'Almidón modificado',
    type: PERMITTED,
    group: BASE_FOOD,
  },
  {
    name: 'Almidón resistente',
    type: PERMITTED,
    group: BASE_FOOD,
  },
  {
    name: 'Amaranto 1⁄2 t',
    type: PERMITTED,
    group: CEREAL,
  },
  {
    name: 'Apio 1 mediano',
    type: RESTRICTED,
    group: VEGETABLE,
  },
  {
    name: 'Arroz blanco, cocido 1/3 t',
    type: PERMITTED,
    group: CEREAL,
  },
  {
    name: 'Arúgula 1⁄2 t',
    type: PERMITTED,
    group: VEGETABLE,
  },
  {
    name: 'Aspartame',
    type: PERMITTED,
    group: BASE_FOOD,
  },
  {
    name: 'Avena seca 1 cuch',
    type: RESTRICTED,
    group: CEREAL,
  },
  {
    name: 'Avena, cocida 1⁄2 t',
    type: RESTRICTED,
    group: CEREAL,
  },
  {
    name: 'Azúcar 1 1⁄2 cucharadas',
    type: RESTRICTED,
    group: EXTRA,
  },
  {
    name: 'Azúcar de betabel',
    type: PERMITTED,
    group: BASE_FOOD,
  },
  {
    name: 'Azúcar de caña',
    type: PERMITTED,
    group: BASE_FOOD,
  },
  {
    name: 'Azúcar de moras',
    type: PERMITTED,
    group: BASE_FOOD,
  },
  {
    name: 'Azúcar glas',
    type: PERMITTED,
    group: BASE_FOOD,
  },
  {
    name: 'Azúcar morena',
    type: PERMITTED,
    group: BASE_FOOD,
  },
  {
    name: 'Azúcar orgánica',
    type: PERMITTED,
    group: BASE_FOOD,
  },
  {
    name: 'Azúcar refinada',
    type: PERMITTED,
    group: BASE_FOOD,
  },
  {
    name: 'Berenjena 1/2t',
    type: PERMITTED,
    group: VEGETABLE,
  },
  {
    name: 'Betabel',
    type: TO_AVOID,
  },
  {
    name: 'Bicarbonato de sodio',
    type: PERMITTED,
    group: BASE_FOOD,
  },
  {
    name: 'Blueberries (20 piezas)',
    type: PERMITTED,
    group: FRUIT,
  },
  {
    name: 'Bok choy 1⁄2 t',
    type: RESTRICTED,
    group: VEGETABLE,
  },
  {
    name: 'Brócoli',
    type: TO_AVOID,
  },
  {
    name: 'Café Americano 1 t',
    type: RESTRICTED,
    group: EXTRA,
  },
  {
    name: 'Café expreso 50ml',
    type: RESTRICTED,
    group: EXTRA,
  },
  {
    name: 'Café instantáneo',
    type: TO_AVOID,
    group: BASE_FOOD,
  },
  {
    name: 'Calabacita 1⁄2 t',
    type: PERMITTED,
    group: VEGETABLE,
  },
  {
    name: 'Calabaza 1⁄2 t',
    type: PERMITTED,
    group: VEGETABLE,
  },
  {
    name: 'Camote 1⁄2 t',
    type: RESTRICTED,
    group: VEGETABLE,
  },
  {
    name: 'Canela',
    type: PERMITTED,
    group: BASE_FOOD,
  },
  {
    name: 'Carambola 1 pieza',
    type: PERMITTED,
    group: FRUIT,
  },
  {
    name: 'Castañas 1⁄2 t',
    type: PERMITTED,
    group: VEGETABLE,
  },
  {
    name: 'Cebolla',
    type: TO_AVOID,
  },
  {
    name: 'Cebollin',
    type: PERMITTED,
    group: BASE_FOOD,
  },
  {
    name: 'Cebollín',
    type: TO_AVOID,
  },
  {
    name: 'Cebollín (parte verde) 1⁄2 t',
    type: PERMITTED,
    group: VEGETABLE,
  },
  {
    name: 'Cebollitas (parte verde) 1⁄2 t',
    type: PERMITTED,
    group: VEGETABLE,
  },
  {
    name: 'Cerdo 90grs',
    type: PERMITTED,
    group: ANIMAL,
  },
  {
    name: 'Cereal de caja hecho de avena, arroz, maíz, quínoa, amaranto',
    type: PERMITTED,
    group: CEREAL,
  },
  {
    name: 'Cerveza 1 botella',
    type: RESTRICTED,
    group: EXTRA,
  },
  {
    name: 'Champiñones',
    type: TO_AVOID,
  },
  {
    name: 'Chile 1 pequeño',
    type: PERMITTED,
    group: VEGETABLE,
  },
  {
    name: 'Chile en polvo',
    type: PERMITTED,
    group: BASE_FOOD,
  },
  {
    name: 'Chocolate (con foodes permitidos) 30grs',
    type: RESTRICTED,
    group: EXTRA,
  },
  {
    name: 'Cilantro',
    type: PERMITTED,
    group: BASE_FOOD,
  },
  {
    name: 'Cinco especias chinas',
    type: PERMITTED,
    group: BASE_FOOD,
  },
  {
    name: 'Ciruela',
    type: TO_AVOID,
  },
  {
    name: 'Claras de huevo 4 piezas',
    type: PERMITTED,
    group: ANIMAL,
  },
  {
    name: 'Coco 2 cucharadas',
    type: RESTRICTED,
    group: FAT,
  },
  {
    name: 'Cocoa',
    type: TO_AVOID,
    group: BASE_FOOD,
  },
  {
    name: 'Col',
    type: TO_AVOID,
  },
  {
    name: 'Coliflor',
    type: TO_AVOID,
  },
  {
    name: 'Comino',
    type: PERMITTED,
    group: BASE_FOOD,
  },
  {
    name: 'Concentrado de proteína de suero de leche (a menos que sea deslactosada)',
    type: TO_AVOID,
    group: BASE_FOOD,
  },
  {
    name: 'Concentrados de jugos de fruta',
    type: TO_AVOID,
    group: BASE_FOOD,
  },
  {
    name: 'Cordero 90grs',
    type: PERMITTED,
    group: ANIMAL,
  },
  {
    name: 'Crema (enteros o light)',
    type: TO_AVOID,
  },
  {
    name: 'Crema batida 1⁄4 taza',
    type: RESTRICTED,
    group: FAT,
  },
  {
    name: 'Crema de coco 2 cucharadas',
    type: PERMITTED,
    group: FAT,
  },
  {
    name: 'Crema light o normal 2 cucharadas',
    type: RESTRICTED,
    group: FAT,
  },
  {
    name: 'Cúrcuma',
    type: PERMITTED,
    group: BASE_FOOD,
  },
  {
    name: 'De jugo de limón',
    type: PERMITTED,
    group: BASE_FOOD,
  },
  {
    name: 'Dextrosa',
    type: PERMITTED,
    group: BASE_FOOD,
  },
  {
    name: 'Durazno',
    type: TO_AVOID,
  },
  {
    name: 'Endibias 1⁄2 t',
    type: PERMITTED,
    group: VEGETABLE,
  },
  {
    name: 'Eneldo',
    type: PERMITTED,
    group: BASE_FOOD,
  },
  {
    name: 'Eritriol',
    type: TO_AVOID,
    group: BASE_FOOD,
  },
  {
    name: 'Espárragos',
    type: TO_AVOID,
  },
  {
    name: 'Espinacas cocidas 1⁄2 t',
    type: PERMITTED,
    group: VEGETABLE,
  },
  {
    name: 'Espinacas crudas 2t',
    type: PERMITTED,
    group: VEGETABLE,
  },
  {
    name: 'Extracto de malta',
    type: PERMITTED,
    group: BASE_FOOD,
  },
  {
    name: 'Fibra de caña de azúcar',
    type: TO_AVOID,
    group: BASE_FOOD,
  },
  {
    name: 'Fideos de soba, cocidos 1⁄2 t',
    type: PERMITTED,
    group: CEREAL,
  },
  {
    name: 'Frambuesa 10 piezas',
    type: PERMITTED,
    group: FRUIT,
  },
  {
    name: 'Fresas 10 piezas',
    type: PERMITTED,
    group: FRUIT,
  },
  {
    name: 'Fructooligosacaridos /FOS',
    type: TO_AVOID,
    group: BASE_FOOD,
  },
  {
    name: 'Fructuosa',
    type: TO_AVOID,
    group: BASE_FOOD,
  },
  {
    name: 'Frutas deshidratadas o ate',
    type: TO_AVOID,
  },
  {
    name: 'Galletas de arroz o maíz 3 pzas',
    type: PERMITTED,
    group: CEREAL,
  },
  {
    name: 'Germen de alfalfa 1⁄2 t',
    type: PERMITTED,
    group: VEGETABLE,
  },
  {
    name: 'Germen de frijol 1⁄2 t',
    type: PERMITTED,
    group: VEGETABLE,
  },
  {
    name: 'Germen de trigo',
    type: TO_AVOID,
    group: BASE_FOOD,
  },
  {
    name: 'Glicerina',
    type: TO_AVOID,
    group: BASE_FOOD,
  },
  {
    name: 'Glucosa',
    type: PERMITTED,
    group: BASE_FOOD,
  },
  {
    name: 'Goma acacia *',
    type: PERMITTED,
    group: BASE_FOOD,
  },
  {
    name: 'Goma arábica*',
    type: PERMITTED,
    group: BASE_FOOD,
  },
  {
    name: 'Goma Guar*',
    type: PERMITTED,
    group: BASE_FOOD,
  },
  {
    name: 'Goma tara*',
    type: PERMITTED,
    group: BASE_FOOD,
  },
  {
    name: 'Goma Xantana*',
    type: PERMITTED,
    group: BASE_FOOD,
  },
  {
    name: 'Granos de trigo',
    type: TO_AVOID,
    group: BASE_FOOD,
  },
  {
    name: 'Guayaba 1 pza',
    type: PERMITTED,
    group: FRUIT,
  },
  {
    name: 'Harina',
    type: TO_AVOID,
    group: BASE_FOOD,
  },
  {
    name: 'Harina blanca',
    type: TO_AVOID,
    group: BASE_FOOD,
  },
  {
    name: 'Harina de avena 1⁄4 t',
    type: RESTRICTED,
    group: CEREAL,
  },
  {
    name: 'Harina enriquecida',
    type: TO_AVOID,
    group: BASE_FOOD,
  },
  {
    name: 'Harina integral',
    type: TO_AVOID,
    group: BASE_FOOD,
  },
  {
    name: 'Helado de crema deslactosado 1⁄2 t',
    type: RESTRICTED,
    group: EXTRA,
  },
  {
    name: 'Hinojo 1⁄2 t',
    type: RESTRICTED,
    group: VEGETABLE,
  },
  {
    name: 'Hoja de laurel',
    type: PERMITTED,
    group: BASE_FOOD,
  },
  {
    name: 'Huevo entero 2 piezas',
    type: PERMITTED,
    group: ANIMAL,
  },
  {
    name: 'Inulina',
    type: TO_AVOID,
    group: BASE_FOOD,
  },
  {
    name: 'Isomaltosa',
    type: TO_AVOID,
    group: BASE_FOOD,
  },
  {
    name: 'Jalea o mermelada 1 1⁄2 cucharadas',
    type: RESTRICTED,
    group: EXTRA,
  },
  {
    name: 'Jarabe de agave',
    type: TO_AVOID,
    group: BASE_FOOD,
  },
  {
    name: 'Jarabe de arroz integral',
    type: PERMITTED,
    group: BASE_FOOD,
  },
  {
    name: 'Jarabe de arroz integral 1 1⁄2 t',
    type: RESTRICTED,
    group: EXTRA,
  },
  {
    name: 'Jarabe de azúcar',
    type: PERMITTED,
    group: BASE_FOOD,
  },
  {
    name: 'Jarabe de caña o azúcar 1 1⁄2 cucharadas',
    type: RESTRICTED,
    group: EXTRA,
  },
  {
    name: 'Jarabe de maíz (no de alta fructosa) 1 1⁄2 cucharadas',
    type: RESTRICTED,
    group: EXTRA,
  },
  {
    name: 'Jarabe de maíz (no de alta fructosa)',
    type: PERMITTED,
    group: BASE_FOOD,
  },
  {
    name: 'Jarabe de maíz alto en maitosa',
    type: PERMITTED,
    group: BASE_FOOD,
  },
  {
    name: 'Jarabe de maíz de alta fructosa',
    type: TO_AVOID,
    group: BASE_FOOD,
  },
  {
    name: 'jengibre',
    type: PERMITTED,
    group: BASE_FOOD,
  },
  {
    name: 'Jitomate enlatado 1⁄2 t',
    type: PERMITTED,
    group: VEGETABLE,
  },
  {
    name: 'Jitomate fresco 1 pza. mediana',
    type: PERMITTED,
    group: VEGETABLE,
  },
  {
    name: 'Jitomates cherry 8 pzas',
    type: PERMITTED,
    group: VEGETABLE,
  },
  {
    name: 'Jugos',
    type: TO_AVOID,
  },
  {
    name: 'Kale cocida 1⁄2 t',
    type: RESTRICTED,
    group: VEGETABLE,
  },
  {
    name: 'Kamut',
    type: TO_AVOID,
    group: BASE_FOOD,
  },
  {
    name: 'Kéfir deslactosado 1 t',
    type: PERMITTED,
    group: ANIMAL,
  },
  {
    name: 'Kefir regular 1⁄2 t',
    type: RESTRICTED,
    group: ANIMAL,
  },
  {
    name: 'Kiwi 2 piezas',
    type: PERMITTED,
    group: FRUIT,
  },
  {
    name: 'Lácteos enteros o light',
    type: TO_AVOID,
  },
  {
    name: 'Lactitol',
    type: TO_AVOID,
    group: BASE_FOOD,
  },
  {
    name: 'Lactulosa',
    type: TO_AVOID,
    group: BASE_FOOD,
  },
  {
    name: 'Leche (enteros o light)',
    type: TO_AVOID,
  },
  {
    name: 'Leche de arroz 1 t',
    type: PERMITTED,
    group: EXTRA,
  },
  {
    name: 'Leche de cabra (a menos que sea deslactosada)',
    type: TO_AVOID,
    group: BASE_FOOD,
  },
  {
    name: 'Leche de coco 1⁄4 taza',
    type: PERMITTED,
    group: FAT,
  },
  {
    name: 'Leche deslactosada light 1 t',
    type: PERMITTED,
    group: ANIMAL,
  },
  {
    name: 'Leche en polvo',
    type: TO_AVOID,
    group: BASE_FOOD,
  },
  {
    name: 'Lechuga 2 t',
    type: PERMITTED,
    group: VEGETABLE,
  },
  {
    name: 'Lecitina de soya',
    type: PERMITTED,
    group: BASE_FOOD,
  },
  {
    name: 'Leguminosas (chícharos, frijoles, habas, lentejas, ejotes)',
    type: TO_AVOID,
  },
  {
    name: 'Levadura',
    type: PERMITTED,
    group: BASE_FOOD,
  },
  {
    name: 'Licores (menos ron) 1 1⁄2 oz',
    type: RESTRICTED,
    group: EXTRA,
  },
  {
    name: 'Malito&#39;',
    type: TO_AVOID,
    group: BASE_FOOD,
  },
  {
    name: 'Maltodextrina',
    type: PERMITTED,
    group: BASE_FOOD,
  },
  {
    name: 'Maltosa',
    type: PERMITTED,
    group: BASE_FOOD,
  },
  {
    name: 'Mananitol',
    type: TO_AVOID,
    group: BASE_FOOD,
  },
  {
    name: 'Mandarina 1 pieza',
    type: PERMITTED,
    group: FRUIT,
  },
  {
    name: 'Mango',
    type: TO_AVOID,
  },
  {
    name: 'Manteca de cacao',
    type: PERMITTED,
    group: BASE_FOOD,
  },
  {
    name: 'Mantequilla 1 cucharadita',
    type: PERMITTED,
    group: FAT,
  },
  {
    name: 'Mantequilla de cacahuate o almendra 2 cucharadas',
    type: RESTRICTED,
    group: FAT,
  },
  {
    name: 'Manzana',
    type: TO_AVOID,
  },
  {
    name: 'Maracuyá 1 pieza',
    type: PERMITTED,
    group: FRUIT,
  },
  {
    name: 'Margarina 1 cucharadita',
    type: PERMITTED,
    group: FAT,
  },
  {
    name: 'Mariscos 90grs',
    type: PERMITTED,
    group: ANIMAL,
  },
  {
    name: 'Mayonesa regular 1 cucharada',
    type: PERMITTED,
    group: FAT,
  },
  {
    name: 'Media crema 2 cucharadas',
    type: RESTRICTED,
    group: FAT,
  },
  {
    name: 'Mejorana',
    type: PERMITTED,
    group: BASE_FOOD,
  },
  {
    name: 'Melaza',
    type: TO_AVOID,
    group: BASE_FOOD,
  },
  {
    name: 'Melón 1⁄2 t',
    type: RESTRICTED,
    group: FRUIT,
  },
  {
    name: 'Miel',
    type: TO_AVOID,
    group: BASE_FOOD,
  },
  {
    name: 'Miel de abeja',
    type: TO_AVOID,
  },
  {
    name: 'Miel de maple 100% pura 1 1⁄2 cucharadas',
    type: RESTRICTED,
    group: EXTRA,
  },
  {
    name: 'mijo. 1⁄2 t',
    type: PERMITTED,
    group: CEREAL,
  },
  {
    name: 'Miso',
    type: TO_AVOID,
    group: BASE_FOOD,
  },
  {
    name: 'Mostaza',
    type: PERMITTED,
    group: BASE_FOOD,
  },
  {
    name: 'Mostaza en polvo seca',
    type: PERMITTED,
    group: BASE_FOOD,
  },
  {
    name: 'Nabo 1⁄2 t',
    type: RESTRICTED,
    group: VEGETABLE,
  },
  {
    name: 'Naranja 1 pieza',
    type: RESTRICTED,
    group: FRUIT,
  },
  {
    name: 'Nueces en general 2 cucharadas (no pistaches ni nuez de la india)',
    type: RESTRICTED,
    group: FAT,
  },
  {
    name: 'ó 1⁄2 t',
    type: PERMITTED,
    group: VEGETABLE,
  },
  {
    name: 'Orégano',
    type: PERMITTED,
    group: BASE_FOOD,
  },
  {
    name: 'Palomitas hechas 2 t',
    type: PERMITTED,
    group: CEREAL,
  },
  {
    name: 'Pan de masa madre 1 rebanada',
    type: PERMITTED,
    group: CEREAL,
  },
  {
    name: 'Pan sin gluten 30grs (1 rebanada)',
    type: PERMITTED,
    group: CEREAL,
  },
  {
    name: 'Papa cocida, 1⁄2 t. o 1 pieza pequeña',
    type: PERMITTED,
    group: CEREAL,
  },
  {
    name: 'Papaya 1 taza',
    type: RESTRICTED,
    group: FRUIT,
  },
  {
    name: 'Páprika,',
    type: PERMITTED,
    group: BASE_FOOD,
  },
  {
    name: 'Pasta de maíz, arroz o quínoa cocida 1⁄2 t',
    type: PERMITTED,
    group: CEREAL,
  },
  {
    name: 'Pasta de tomate',
    type: TO_AVOID,
    group: BASE_FOOD,
  },
  {
    name: 'Pato 90grs',
    type: PERMITTED,
    group: ANIMAL,
  },
  {
    name: 'Pavo 90grs',
    type: PERMITTED,
    group: ANIMAL,
  },
  {
    name: 'Pectina',
    type: PERMITTED,
    group: BASE_FOOD,
  },
  {
    name: 'Pepinillo 1 pieza',
    type: PERMITTED,
    group: VEGETABLE,
  },
  {
    name: 'Pepino 1⁄2 t',
    type: PERMITTED,
    group: VEGETABLE,
  },
  {
    name: 'Pera',
    type: TO_AVOID,
  },
  {
    name: 'Perejil',
    type: PERMITTED,
    group: BASE_FOOD,
  },
  {
    name: 'Pescado 90grs',
    type: PERMITTED,
    group: ANIMAL,
  },
  {
    name: 'Pimienta',
    type: PERMITTED,
    group: BASE_FOOD,
  },
  {
    name: 'Pimienta negro',
    type: PERMITTED,
    group: BASE_FOOD,
  },
  {
    name: 'Pimiento rojo 1⁄2 t',
    type: RESTRICTED,
    group: VEGETABLE,
  },
  {
    name: 'Pimiento verde 1⁄2 t',
    type: PERMITTED,
    group: VEGETABLE,
  },
  {
    name: 'Piña 1 taza',
    type: RESTRICTED,
    group: FRUIT,
  },
  {
    name: 'Pitaya 1 pieza',
    type: RESTRICTED,
    group: FRUIT,
  },
  {
    name: 'Plátano 1 pieza',
    type: RESTRICTED,
    group: FRUIT,
  },
  {
    name: 'Polenta seca 1⁄4 t',
    type: PERMITTED,
    group: CEREAL,
  },
  {
    name: 'Polidextrosa',
    type: TO_AVOID,
    group: BASE_FOOD,
  },
  {
    name: 'Pollo 90grs',
    type: PERMITTED,
    group: ANIMAL,
  },
  {
    name: 'Polvo de algarroba',
    type: TO_AVOID,
    group: BASE_FOOD,
  },
  {
    name: 'Poro (puerro)',
    type: TO_AVOID,
  },
  {
    name: 'Proteína vegetal texturizada',
    type: TO_AVOID,
    group: BASE_FOOD,
  },
  {
    name: 'Queso crema 2 cucharadas',
    type: RESTRICTED,
    group: FAT,
  },
  {
    name: 'Queso curado de leche de cabra 30grs',
    type: RESTRICTED,
    group: ANIMAL,
  },
  {
    name: 'Queso duro (cheddar, suizo, brie, parmesano, mozzarella, feta) 30grs',
    type: PERMITTED,
    group: ANIMAL,
  },
  {
    name: 'Queso ricotta 1/3 t',
    type: RESTRICTED,
    group: ANIMAL,
  },
  {
    name: 'Quesos frescos (enteros o light)',
    type: TO_AVOID,
  },
  {
    name: 'Quínoa cocinada 1⁄2 t',
    type: PERMITTED,
    group: CEREAL,
  },
  {
    name: 'Rábano 10pzas pequeñas',
    type: PERMITTED,
    group: VEGETABLE,
  },
  {
    name: 'Raíz o fibra de achicoria',
    type: TO_AVOID,
    group: BASE_FOOD,
  },
  {
    name: 'Requesón 1⁄4 t',
    type: PERMITTED,
    group: ANIMAL,
  },
  {
    name: 'Res 90grs',
    type: PERMITTED,
    group: ANIMAL,
  },
  {
    name: 'Romero',
    type: PERMITTED,
    group: BASE_FOOD,
  },
  {
    name: 'Sacarina',
    type: PERMITTED,
    group: BASE_FOOD,
  },
  {
    name: 'Sal',
    type: PERMITTED,
    group: BASE_FOOD,
  },
  {
    name: 'Salsa de soya',
    type: PERMITTED,
    group: BASE_FOOD,
  },
  {
    name: 'Salsa de soya sin trigo',
    type: PERMITTED,
    group: BASE_FOOD,
  },
  {
    name: 'Salsa inglesa',
    type: PERMITTED,
    group: BASE_FOOD,
  },
  {
    name: 'Salsa tártara 1 cucharada',
    type: PERMITTED,
    group: FAT,
  },
  {
    name: 'Sandía',
    type: TO_AVOID,
  },
  {
    name: 'Semillas de girasol, piñones, chía, ajonjolí 1 1⁄2 cucharadas',
    type: RESTRICTED,
    group: FAT,
  },
  {
    name: 'Sorbete con foodes permitidos 1⁄2 t',
    type: RESTRICTED,
    group: EXTRA,
  },
  {
    name: 'Sorbitol oolong',
    type: TO_AVOID,
    group: BASE_FOOD,
  },
  {
    name: 'Stevia',
    type: PERMITTED,
    group: BASE_FOOD,
  },
  {
    name: 'Sucarosa',
    type: PERMITTED,
    group: BASE_FOOD,
  },
  {
    name: 'Sucralosa',
    type: PERMITTED,
    group: BASE_FOOD,
  },
  {
    name: 'Tamari',
    type: PERMITTED,
    group: BASE_FOOD,
  },
  {
    name: 'Tapioca',
    type: PERMITTED,
    group: BASE_FOOD,
  },
  {
    name: 'Te de manzanilla',
    type: TO_AVOID,
  },
  {
    name: 'Te: negro, verde, blanco, de jengibre, hierbabuena 1t',
    type: PERMITTED,
    group: EXTRA,
  },
  {
    name: 'Tempeh 90grs',
    type: PERMITTED,
    group: ANIMAL,
  },
  {
    name: 'Ternera 90grs',
    type: PERMITTED,
    group: ANIMAL,
  },
  {
    name: 'Tofu 90grs',
    type: PERMITTED,
    group: ANIMAL,
  },
  {
    name: 'Toronja',
    type: TO_AVOID,
  },
  {
    name: 'Tortilla de maíz 1 pza',
    type: PERMITTED,
    group: CEREAL,
  },
  {
    name: 'Tortitas de arroz o maíz 3 pzas',
    type: PERMITTED,
    group: CEREAL,
  },
  {
    name: 'Trigo de búlgaros',
    type: TO_AVOID,
    group: BASE_FOOD,
  },
  {
    name: 'Trigo y sus derivados (pan, pasta, galletas)',
    type: TO_AVOID,
  },
  {
    name: 'Tuna 1 pieza',
    type: RESTRICTED,
    group: FRUIT,
  },
  {
    name: 'Uvas 18 piezas',
    type: RESTRICTED,
    group: FRUIT,
  },
  {
    name: 'Vinagre 2 cucharadas',
    type: PERMITTED,
    group: EXTRA,
  },
  {
    name: 'Vinagre Aceite con infusión de ajo (no extracto),',
    type: PERMITTED,
    group: BASE_FOOD,
  },
  {
    name: 'Vinagre balsámico 2 cucharaditas',
    type: RESTRICTED,
    group: EXTRA,
  },
  {
    name: 'Vino tinto o blanco 120ml (1 copa)',
    type: RESTRICTED,
    group: EXTRA,
  },
  {
    name: 'Yogurt (enteros o light)',
    type: TO_AVOID,
  },
  {
    name: 'Yogurt deslactosado 1 t',
    type: PERMITTED,
    group: ANIMAL,
  },
  {
    name: 'Zanahoria 1 pza',
    type: PERMITTED,
    group: VEGETABLE,
  },
];

export const SORT_BY_OPTIONS = {
  NAME: 'name',
  INTOLERANCE: 'intollerance',
};
