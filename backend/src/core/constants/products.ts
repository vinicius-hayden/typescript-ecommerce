import Product from "../product/Product";

const products : Product[] = [  
    {
        id: 1,
        name: "Acer Nitro 5 Gaming Laptop",
        description: "Acer Nitro 5 is a powerful gaming notebook, ideal for heavy gaming and multitasking.",
        brand: "Acer",
        model: "AN515-54-58CL",
        image: "https://firebasestorage.googleapis.com/v0/b/formacao-dev.appspot.com/o/lancamentos%2Fgam3rstore%2Facer-nitro-5.png?alt=media&token=094ba6a8-1a4d-414a-b32c-c176bfeaca8e",
        rating: 4.5,
        videoReview: "https://www.youtube.com/embed/8NQFr9De3lU?si=s_lN2KTQresD-36Y",
        tags: [
          "On Sale"
        ],
        basePrice: 6499.99,
        salesPrice: 5999.99,
        lowestPrice: 4850.9,
        highestPrice: 9800.8,
        medianPrice: 6503.7,
        specifications: {
          title: "NVIDIA GeForce RTX 2060"
        }
      },
      {
        id: 2,
        name: "Dell G5 Gaming Laptop",
        description: "The Dell G5 delivers a smooth gaming experience and high-quality graphics.",
        brand: "Dell",
        model: "G5-5590-A30B",
        image: "https://firebasestorage.googleapis.com/v0/b/formacao-dev.appspot.com/o/lancamentos%2Fgam3rstore%2Fdell-g5.png?alt=media&token=ac1cb3fa-4cc4-4f30-a831-19bca5b85644",
        rating: 5,
        videoReview: "https://www.youtube.com/embed/N5C1ALQkv1Q?si=KuVr4V6-A02Z23XK",
        tags: [
          
        ],
        basePrice: 7299.99,
        salesPrice: 6799.99,
        lowestPrice: 4850,
        highestPrice: 9800,
        medianPrice: 6500,
        specifications: {
          title: "NVIDIA GeForce GTX 1660 Ti"
        }
      },
      {
        id: 3,
        name: "Lenovo Legion Y540 Gaming Laptop",
        description: "The Lenovo Legion Y540 is a high-performance gaming notebook with a stylish design.",
        brand: "Lenovo",
        model: "Legion Y540-15IRH",
        image: "https://firebasestorage.googleapis.com/v0/b/formacao-dev.appspot.com/o/lancamentos%2Fgam3rstore%2Flegion-y540.png?alt=media&token=b36f6c61-8b7d-4454-9940-d945b89d44f8",
        rating: 4.5,
        videoReview: "https://www.youtube.com/embed/knhriyVTMpA?si=3RduZcEVx4mjEwER",
        tags: [
          "Recommended"
        ],
        basePrice: 6999.99,
        salesPrice: 6499.99,
        lowestPrice: 4850,
        highestPrice: 9800,
        medianPrice: 6500,
        specifications: {
          title: "NVIDIA GeForce GTX 1660 Ti"
        }
      },
      {
        id: 4,
        name: "HP Pavilion Gaming Laptop",
        description: "The HP Pavilion is a gaming notebook with solid performance and a modern design, perfect for gamers looking for value for money.",
        brand: "HP",
        model: "Pavilion 15-dk0010",
        image: "https://firebasestorage.googleapis.com/v0/b/formacao-dev.appspot.com/o/lancamentos%2Fgam3rstore%2Fhp-pavilion-dk0010.png?alt=media&token=6f0d7c8d-0612-4ca9-9ee8-1849971ae8c4",
        rating: 4,
        videoReview: "https://www.youtube.com/embed/dCvvugSjnZ4?si=zOMGbydgNdkB9QwY",
        tags: [
          
        ],
        basePrice: 5499.99,
        salesPrice: 4999.99,
        lowestPrice: 4133,
        highestPrice: 7990.9,
        medianPrice: 5107.9,
        specifications: {
          title: "NVIDIA GeForce GTX 1650"
        }
      },
      {
        id: 5,
        name: "ASUS TUF A15 Gaming Laptop",
        description: "ASUS TUF Gaming A15 combines military-grade durability with superb gaming performance.",
        brand: "ASUS",
        model: "TUF A15 FA506IV",
        image: "https://firebasestorage.googleapis.com/v0/b/formacao-dev.appspot.com/o/lancamentos%2Fgam3rstore%2Fasus-tuf-a15.png?alt=media&token=989d3375-f26b-4ada-a920-afa41dfdb8de",
        rating: 5,
        videoReview: "https://www.youtube.com/embed/v-LmH_Gfnn8?si=IGQmsvb-eZyDInwV",
        tags: [
          "Opportunity"
        ],
        basePrice: 7499.99,
        salesPrice: 6999.99,
        lowestPrice: 4133,
        highestPrice: 7990.9,
        medianPrice: 5107.9,
        specifications: {
          title: "NVIDIA GeForce RTX 2060"
        }
      },
      {
        id: 6,
        name: "MSI GL65 Leopard Gaming Laptop",
        description: "MSI GL65 Leopard Delivers Superior Performance with Aggressive Design and Customizable RGB Keyboard.",
        brand: "MSI",
        model: "GL65 Leopard 10SFK-062",
        image: "https://firebasestorage.googleapis.com/v0/b/formacao-dev.appspot.com/o/lancamentos%2Fgam3rstore%2Fmsi-gl65.png?alt=media&token=24798828-8546-4720-bfe7-f813f4e78507",
        rating: 4,
        videoReview: "https://www.youtube.com/embed/uT-YHREKDaE?si=Z7e2lk9G-H7-cghs",
        tags: [
          "Best RTX 2070"
        ],
        basePrice: 8999.99,
        salesPrice: 8499.99,
        lowestPrice: 4133,
        highestPrice: 7990.9,
        medianPrice: 5107.9,
        specifications: {
          title: "NVIDIA GeForce RTX 2070"
        }
      },
      {
        id: 7,
        name: "Razer Blade 15 Gaming Laptop",
        description: "The Razer Blade 15 is a premium gaming laptop with an ultra-thin design and cutting-edge hardware.",
        brand: "Razer",
        model: "Blade 15 Base",
        image: "https://firebasestorage.googleapis.com/v0/b/formacao-dev.appspot.com/o/lancamentos%2Fgam3rstore%2Frazer-blade-15.png?alt=media&token=6e23866d-56d0-4da9-94e8-feb1b57d8fac",
        rating: 5,
        videoReview: "https://www.youtube.com/embed/7kpreUxmHvA?si=wj5A9bw4F8zm_w_Y",
        tags: [
          
        ],
        basePrice: 12499.99,
        salesPrice: 11999.99,
        lowestPrice: 6850,
        highestPrice: 13500,
        medianPrice: 10900.9,
        specifications: {
          title: "NVIDIA GeForce RTX 2070"
        }
      },
      {
        id: 8,
        name: "Alienware m15 ",
        description: "The Alienware m15 is a high-performance gaming notebook with a futuristic design and advanced features.",
        brand: "Dell",
        model: "m15 R3",
        image: "https://firebasestorage.googleapis.com/v0/b/formacao-dev.appspot.com/o/lancamentos%2Fgam3rstore%2Falienware-m15.png?alt=media&token=85df89d1-3db1-4978-9581-4802b42d7c6e",
        rating: 4.5,
        videoReview: "https://www.youtube.com/embed/OywbZPwHJBw?si=cZmqJESmXGh-D1Bw",
        tags: [
          
        ],
        basePrice: 14999.99,
        salesPrice: 13999.99,
        lowestPrice: 4133,
        highestPrice: 7990.9,
        medianPrice: 5107.9,
        specifications: {
          title: "NVIDIA GeForce RTX 2080 Super"
        }
      },
      {
        id: 9,
        name: "AMD Ryzen 7 5700X3D Processor",
        description: "Experience blazing speeds with 8 cores and 16 processing threads ready to take on the most challenging titles. Base frequency of 3.0GHz and dynamic boost up to 4.1GHz to eliminate stuttering.",
        brand: "AMD",
        model: "100-100001503WOF",
        image: "https://firebasestorage.googleapis.com/v0/b/formacao-dev.appspot.com/o/lancamentos%2Fgam3rstore%2Fryzen-7-5700x3d.png?alt=media&token=62caf240-b3c6-41d9-889a-c4ca882822d9",
        rating: 4.5,
        videoReview: "https://www.youtube.com/embed/ic8a_L15Z98&t=67s",
        tags: [
          "Cost benefit"
        ],
        basePrice: 2499.99,
        salesPrice: 1189.99,
        lowestPrice: 999.99,
        highestPrice: 3290.9,
        medianPrice: 1699.9,
        specifications: {
          title: "AMD Ryzen 7 5700X3D"
        }
      },
      {
        id: 10,
        name: "Intel Core i9-13900K Processor",
        description: "The Intel Core i9-13900K is the ideal processor for gamers and professionals who need extreme performance. Equipped with 24 cores and 32 threads, it reaches frequencies of up to 5.8 GHz in turbo mode, offering unmatched performance.",
        brand: "Intel",
        model: "BX8071513900K",
        image: "https://firebasestorage.googleapis.com/v0/b/formacao-dev.appspot.com/o/lancamentos%2Fgam3rstore%2Fcore-i9-13900k.png?alt=media&token=9d185bf6-64ca-48bf-bdb7-acd0de317f09",
        rating: 4.8,
        videoReview: "https://www.youtube.com/embed/tV-FbmLJejg",
        tags: [
          "Maximum Perfomance",
          "Gaming Recommended",
          "Overclock"
        ],
        basePrice: 3899.99,
        salesPrice: 3299.99,
        lowestPrice: 2999.99,
        highestPrice: 4199.9,
        medianPrice: 3599.9,
        specifications: {
          title: "Intel Core i9-13900K"
        }
      },
      {
        id: 11,
        name: "AMD Ryzen 9 7950X3D Processor",
        description: "The AMD Ryzen 9 7950X3D processor redefines gaming and productivity performance with 16 cores and 32 threads and 128MB total cache. Boost frequency up to 5.7GHz is ideal for intense workloads and multitasking.",
        brand: "AMD",
        model: "100-100001700WOF",
        image: "https://firebasestorage.googleapis.com/v0/b/formacao-dev.appspot.com/o/lancamentos%2Fgam3rstore%2Fryzen-9-7950x3d.png?alt=media&token=74ab9ea8-1250-42b8-b653-db430969d3cf",
        rating: 4.9,
        videoReview: "https://www.youtube.com/embed/3XFI1jhZMEU",
        tags: [
          "Extreme Perfomance",
          "S Tier",
          "Gaming"
        ],
        basePrice: 5899.99,
        salesPrice: 4599.99,
        lowestPrice: 4199.99,
        highestPrice: 5999.9,
        medianPrice: 4999.9,
        specifications: {
          title: "AMD Ryzen 9 7950X3D"
        }
      },
      {
        id: 12,
        name: "Razer BlackWidow V3 Gaming Mechanical Keyboard",
        description: "The Razer BlackWidow V3 is equipped with Razer Green mechanical switches for precise tactile response and satisfying aural feedback. It features Razer Chroma RGB lighting and an aluminum frame for increased durability.",
        brand: "Razer",
        model: "RZ03-03540100-R3U1",
        image: "https://firebasestorage.googleapis.com/v0/b/formacao-dev.appspot.com/o/lancamentos%2Fgam3rstore%2Fteclado-razer-blackwidow-v3.png?alt=media&token=41cf33c1-66d7-4c4f-a36f-a358d9061d29",
        rating: 4.7,
        videoReview: "https://www.youtube.com/embed/HVPSyfIs-84",
        tags: [
          "RGB",
          "Durability",
          "Tactile Switch"
        ],
        basePrice: 1299.99,
        salesPrice: 999.99,
        lowestPrice: 799.99,
        highestPrice: 1599.99,
        medianPrice: 999.99,
        specifications: {
          title: "Switch Razer Green"
        }
      },
      {
        id: 13,
        name: "Corsair K70 RGB MK.2 Gaming Keyboard",
        description: "With Cherry MX Red switches, the Corsair K70 RGB MK.2 offers a linear and quiet response. Constructed in brushed aluminum, ideal for long gameplay sessions, and with dynamic RGB lighting.",
        brand: "Corsair",
        model: "CH-9109010-NA",
        image: "https://firebasestorage.googleapis.com/v0/b/formacao-dev.appspot.com/o/lancamentos%2Fgam3rstore%2Fteclado-corsair-k70.png?alt=media&token=3dbe507e-1df9-4743-b8c4-cd782cfe6c63",
        rating: 4.8,
        videoReview: "https://www.youtube.com/embed/1ABIgPdZrkI?si=7HUrXG7JD-vkQR5_",
        tags: [
          "Dynamic RGB",
          "Aluminum Body",
          "Stealth Switch"
        ],
        basePrice: 1799.99,
        salesPrice: 1349.99,
        lowestPrice: 1199.99,
        highestPrice: 2299.9,
        medianPrice: 1249.9,
        specifications: {
          title: "Switch Cherry MX Red"
        }
      },
      {
        id: 14,
        name: "Redragon Draconic K530 Gaming Mechanical Keyboard",
        description: "The Redragon Draconic K530 is a compact, wireless mechanical keyboard designed for maximum portability and performance. Equipped with Outemu Brown switches, ideal for those looking for a balance between tactile feedback and silence, as well as Bluetooth connectivity.",
        brand: "Redragon",
        model: "K530-RGB",
        image: "https://firebasestorage.googleapis.com/v0/b/formacao-dev.appspot.com/o/lancamentos%2Fgam3rstore%2Fteclado-redragon-draconic-k530.png?alt=media&token=d456ac67-d742-40ed-9a99-2c3281b9a2c2",
        rating: 4.6,
        videoReview: "https://www.youtube.com/embed/6sAqSwcjjt0",
        tags: [
          "Bluetooth",
          "Compact",
          "Portable",
          "Tactile Switch"
        ],
        basePrice: 549.99,
        salesPrice: 429.99,
        lowestPrice: 399.99,
        highestPrice: 599.99,
        medianPrice: 499.99,
        specifications: {
          title: "Switch Outemu Brown"
        }
      },
      {
        id: 15,
        name: "Logitech G403 Hero Gaming Mouse",
        description: "The Logitech G403 Hero is equipped with the HERO 25K sensor, offering maximum precision with up to 25,600 adjustable DPI. Ergonomic design, lightweight structure and adjustable weight, ideal for those looking for comfort and high performance in games.",
        brand: "Logitech",
        model: "910-005631",
        image: "https://firebasestorage.googleapis.com/v0/b/formacao-dev.appspot.com/o/lancamentos%2Fgam3rstore%2Fmouse-logitech-g403-hero.png?alt=media&token=869b7dff-b08e-449f-b35c-c16d95d5cbe3",
        rating: 4.8,
        videoReview: "https://www.youtube.com/embed/SjxHa-hv_2c",
        tags: [
          "Ergonomic",
          "Adjustable Weight",
          "HERO Sensor",
          "Cost Benefit"
        ],
        basePrice: 399.99,
        salesPrice: 299.99,
        lowestPrice: 279.99,
        highestPrice: 449.9,
        medianPrice: 349.99,
        specifications: {
          title: "HERO 16K / 25K"
        }
      },
      {
        id: 16,
        name: "Razer DeathAdder V2 Gaming Mouse",
        description: "The Razer DeathAdder V2 features a 20,000 DPI Focus+ optical sensor with optical switches for faster clicks and a 70 million click lifespan. It features an ergonomic, lightweight design with a SpeedFlex cable for drag-free movement.",
        brand: "Razer",
        model: "RZ01-03210100-R3U1",
        image: "https://firebasestorage.googleapis.com/v0/b/formacao-dev.appspot.com/o/lancamentos%2Fgam3rstore%2Fmouse-razer-deathadder-v2.png?alt=media&token=6b3d7cf9-334d-4950-8c66-a15d136216a6",
        rating: 4.7,
        videoReview: "https://www.youtube.com/embed/jlmeKfzu_is",
        tags: [
          "Ergonomy",
          "Optical Sensor",
          "Optical Switches"
        ],
        basePrice: 499.99,
        salesPrice: 399.99,
        lowestPrice: 349.99,
        highestPrice: 549.9,
        medianPrice: 449.99,
        specifications: {
          title: "Sensor Focus+"
        }
      },
      {
        id: 17,
        name: "HyperX Pulsefire FPS Pro Gaming Mouse",
        description: "The HyperX Pulsefire FPS Pro is ideal for gamers looking for precision and comfort. Equipped with the Pixart 3389 sensor with up to 16,000 DPI and Omron buttons with high durability. Customizable RGB lighting and ergonomic design.",
        brand: "HyperX",
        model: "HX-MC003B",
        image: "https://firebasestorage.googleapis.com/v0/b/formacao-dev.appspot.com/o/lancamentos%2Fgam3rstore%2Fmouse-hyperxppulsefire-fps-pro.png?alt=media&token=8b0edce3-1eef-412e-be5f-bc701646b23f",
        rating: 4.5,
        videoReview: "https://www.youtube.com/embed/sJAM6Pxa4PI",
        tags: [
          "High Accuracy",
          "Pixart Sensor",
          "Ergonomy"
        ],
        basePrice: 349.99,
        salesPrice: 249.99,
        lowestPrice: 219.99,
        highestPrice: 399.9,
        medianPrice: 299.99,
        specifications: {
          title: "Pixart Sensor 3389"
        }
      },
      {
        id: 18,
        name: "HyperX Cloud II Gaming Headset",
        description: "The HyperX Cloud II is a headset designed for maximum comfort and sound quality. It features 53mm drivers and 7.1 virtual surround sound, ideal for gamers looking for complete immersion in games.",
        brand: "HyperX",
        model: "KHX-HSCP-RD",
        image: "https://firebasestorage.googleapis.com/v0/b/formacao-dev.appspot.com/o/lancamentos%2Fgam3rstore%2Fheadset-gamer-hyperx-cloud-II.png?alt=media&token=82dce4ef-75c7-4c75-9e1a-ccf20aac1af7",
        rating: 4.8,
        videoReview: "https://www.youtube.com/embed/BT6NFjvRNu0",
        tags: [
          "Comfortable",
          "7.1 Surround",
          "Removable Microphone"
        ],
        basePrice: 899.99,
        salesPrice: 699.99,
        lowestPrice: 649.99,
        highestPrice: 949.99,
        medianPrice: 799.99,
        specifications: {
          title: "Surround Virtual 7.1"
        }
      },
      {
        id: 19,
        name: "Razer Kraken X Gaming Headset",
        description: "The Razer Kraken X is an ultra-lightweight headset with 7.1 surround sound and memory foam ear cushions for maximum comfort. Cardioid microphone and reinforced frame for durability.",
        brand: "Razer",
        model: "RZ04-02890100-R3U1",
        image: "https://firebasestorage.googleapis.com/v0/b/formacao-dev.appspot.com/o/lancamentos%2Fgam3rstore%2Fheadset-razer-kraken-x-lite.png?alt=media&token=d1219f2a-2199-4e17-9dca-5b7db5537f55",
        rating: 4.6,
        videoReview: "https://www.youtube.com/embed/L3lW1P0rr_M",
        tags: [
          "Lightweight",
          "7.1 Surround",
          "Flexible Microphone"
        ],
        basePrice: 299.99,
        salesPrice: 229.99,
        lowestPrice: 199.99,
        highestPrice: 349.99,
        medianPrice: 269.99,
        specifications: {
          title: "Surround Virtual 7.1"
        }
      },
      {
        id: 20,
        name: "Samsung Odyssey G7 27\" Gaming Monitor",
        description: "The Samsung Odyssey G7 has a 240Hz refresh rate and 1ms response time. With a curved QHD panel and G-Sync technology, it is ideal for gamers looking for performance and immersion.",
        brand: "Samsung",
        model: "LC27G75TQSNXZA",
        image: "https://firebasestorage.googleapis.com/v0/b/formacao-dev.appspot.com/o/lancamentos%2Fgam3rstore%2Fmonitor-gamer-samsung-led-27-odyssey-curvo.png?alt=media&token=98f062fb-4c3a-4e87-895d-61ecdd7f7609",
        rating: 4.9,
        videoReview: "https://www.youtube.com/embed/-xrNbdySG-Y",
        tags: [
          "240Hz",
          "Curvo",
          "G-Sync"
        ],
        basePrice: 3499.99,
        salesPrice: 2999.99,
        lowestPrice: 2799.99,
        highestPrice: 3999.99,
        medianPrice: 3299.99,
        specifications: {
          title: "Curved Panel QHD"
        }
      },
      {
        id: 21,
        name: "Gaming Monitor LG UltraGear 34\"",
        description: "The LG UltraGear 34\" is an ultra-wide monitor with WQHD (3440x1440) resolution, 160Hz refresh rate and G-Sync support. Ideal for those looking for a monitor for gaming and productivity.",
        brand: "LG",
        model: "34GN850-B",
        image: "https://firebasestorage.googleapis.com/v0/b/formacao-dev.appspot.com/o/lancamentos%2Fgam3rstore%2Fmonitor-gamer-lg-ultragear-lg-34-curvo.png?alt=media&token=7f00d9ba-f2ef-416e-bf01-0b84962e099b",
        rating: 4.7,
        videoReview: "https://www.youtube.com/embed/YUbQODIro2k",
        tags: [
          "Ultra-Wide",
          "144Hz",
          "G-Sync"
        ],
        basePrice: 2999.99,
        salesPrice: 2399.99,
        lowestPrice: 2199.99,
        highestPrice: 3999.99,
        medianPrice: 2899.99,
        specifications: {
          title: "WQHD Panel"
        }
      },
      {
        id: 22,
        name: "NVIDIA GeForce RTX 3060 Ventus 2X MSI Graphics Card ",
        description: "The MSI RTX 3060 Ventus 2X is equipped with 12GB GDDR6, delivering next-gen performance for 4K gaming and ray tracing. It features DLSS support and advanced NVIDIA technologies for maximum performance.",
        brand: "MSI",
        model: "RTX 3060 Ventus",
        image: "https://firebasestorage.googleapis.com/v0/b/formacao-dev.appspot.com/o/lancamentos%2Fgam3rstore%2Fplaca-de-video-msi-nvidia-geforce-rtx-3060-ventus-2x-12gb.png?alt=media&token=ee112ada-6ac9-4f1c-9766-586caae1713a",
        rating: 4.9,
        videoReview: "https://www.youtube.com/embed/a_u2HPe2Cqg",
        tags: [
          "4K Gaming",
          "Ray Tracing",
          "DLSS",
          "NVidia",
          "GeForce"
        ],
        basePrice: 2399.99,
        salesPrice: 1999.99,
        lowestPrice: 1599.99,
        highestPrice: 3899.99,
        medianPrice: 2199.99,
        specifications: {
          title: "12GB GDDR6"
        }
      },
      {
        id: 23,
        name: "AMD Radeon RX 6800 XT Graphics Card",
        description: "The RX 6800 XT features 16GB GDDR6 and RDNA 2 architecture, delivering excellent performance in 1440p and 4K gaming. Includes support for Ray Tracing and Smart Access Memory technology for Ryzen CPUs.",
        brand: "ASRock",
        model: "90-GA28ZZ-00UANF",
        image: "https://firebasestorage.googleapis.com/v0/b/formacao-dev.appspot.com/o/lancamentos%2Fgam3rstore%2Famd-radeon-6800-xt.png?alt=media&token=f2fdddc2-fc6b-4286-8452-10add1ff37f8",
        rating: 4.7,
        videoReview: "https://www.youtube.com/embed/ddbpej8sM9s",
        tags: [
          "Ray Tracing",
          "16GB GDDR6",
          "Smart Access Memory"
        ],
        basePrice: 6449.99,
        salesPrice: 5799.99,
        lowestPrice: 5499.99,
        highestPrice: 8199.99,
        medianPrice: 5999.99,
        specifications: {
          title: "16GB GDDR6"
        }
      },
      {
        id: 24,
        name: "ASUS ROG Strix Z590-E Motherboard",
        description: "The ROG Strix Z590-E is a premium motherboard for 11th Gen Intel processors, featuring overclocking support, integrated Wi-Fi 6E, and ASUS Aura Sync RGB lighting.",
        brand: "ASUS",
        model: "ROG STRIX Z590-E GAMING WIFI",
        image: "https://firebasestorage.googleapis.com/v0/b/formacao-dev.appspot.com/o/lancamentos%2Fgam3rstore%2Fplaca-mae-asus-rog-strix-z590.png?alt=media&token=85f6951d-ff10-4a86-8000-089162c2f689",
        rating: 4.8,
        videoReview: "https://www.youtube.com/embed/toHoH4j25yo",
        tags: [
          "Wi-Fi 6E",
          "Overclocking",
          "RGB"
        ],
        basePrice: 2999.99,
        salesPrice: 2799.99,
        lowestPrice: 2599.99,
        highestPrice: 3299.99,
        medianPrice: 2899.99,
        specifications: {
          title: "Chipset Z590"
        }
      },
      {
        id: 25,
        name: "MSI MAG B550 Tomahawk Motherboard",
        description: "The MAG B550 Tomahawk is a robust motherboard for AMD Ryzen CPUs, offering PCIe 4.0 support and optimized thermal design with extended heatsinks for increased stability.",
        brand: "MSI",
        model: "B550 TOMAHAWK",
        image: "https://firebasestorage.googleapis.com/v0/b/formacao-dev.appspot.com/o/lancamentos%2Fgam3rstore%2Fplaca-mae-msi-mag-b550.png?alt=media&token=d605f0ca-bac9-4fde-89c6-879909542a03",
        rating: 4.7,
        videoReview: "https://www.youtube.com/embed/mv-HByOFJG0",
        tags: [
          "PCIe 4.0",
          "Advanced Dissipation",
          "Ryzen Support"
        ],
        basePrice: 1399.99,
        salesPrice: 999.99,
        lowestPrice: 899.99,
        highestPrice: 1599.99,
        medianPrice: 1199.99,
        specifications: {
          title: "Chipset B550"
        }
      },
      {
        id: 26,
        name: "Corsair Vengeance RGB Pro 16GB (2x8GB)",
        description: "The Corsair Vengeance RGB Pro Kit delivers high-end performance for gamers and content creators, with 16GB of capacity, 3200MHz frequency, and dynamic RGB lighting.",
        brand: "Corsair",
        model: "CMW16GX4M2C3200C16",
        image: "https://firebasestorage.googleapis.com/v0/b/formacao-dev.appspot.com/o/lancamentos%2Fgam3rstore%2Fmemoria-corsair-vengeance-rgb-pro-16gb-2x8gb-3200mhz.png?alt=media&token=7dd6698e-8da9-4b0d-9e80-84b716da0c1a",
        rating: 4.8,
        videoReview: "https://www.youtube.com/embed/XRkJAV6-gFw",
        tags: [
          "High Performance",
          "RGB",
          "Dual-Channel"
        ],
        basePrice: 649.99,
        salesPrice: 299.99,
        lowestPrice: 299.99,
        highestPrice: 749.99,
        medianPrice: 599.99,
        specifications: {
          title: "16GB (2x8GB)"
        }
      },
      {
        id: 27,
        name: "Kingston Fury Beast 32GB RAM (2x16GB)",
        description: "The Kingston Fury Beast is designed for users who need extra capacity. With 32GB and a 3200MHz frequency, it is ideal for advanced multitasking and heavy gaming, while maintaining low latency.",
        brand: "Kingston",
        model: "KF436C18BBK2/32",
        image: "https://firebasestorage.googleapis.com/v0/b/formacao-dev.appspot.com/o/lancamentos%2Fgam3rstore%2Fmemoria-kingston-fury-beast-rgb-32gb-2x16gb-3200mhz.png?alt=media&token=533ffeb2-499b-4e72-87fb-238282dd20da",
        rating: 4.7,
        videoReview: "https://www.youtube.com/embed/MTvBo2pSBgQ",
        tags: [
          "High Capacity",
          "3200MHz",
          "Heatsink"
        ],
        basePrice: 999.99,
        salesPrice: 699.99,
        lowestPrice: 549.99,
        highestPrice: 1199.99,
        medianPrice: 799.99,
        specifications: {
          title: "32GB (2x16GB)"
        }
      },
      {
        id: 28,
        name: "Sony PlayStation 5 Slim",
        description: "PlayStation 5 Slim delivers next-generation graphics with ray tracing support, fast load times with its custom SSD, and exclusive games that define the platform.",
        brand: "Sony",
        model: "CFI-1015A",
        image: "https://firebasestorage.googleapis.com/v0/b/formacao-dev.appspot.com/o/lancamentos%2Fgam3rstore%2Fps5-slim.png?alt=media&token=ed2ca61f-61c6-46bf-bc75-b4155132ca97",
        rating: 4.9,
        videoReview: "https://www.youtube.com/embed/bMFC-TM-t5E",
        tags: [
          "Next Generation",
          "Ray Tracing",
          "Exclusives"
        ],
        basePrice: 3999.99,
        salesPrice: 3499.99,
        lowestPrice: 2999.99,
        highestPrice: 5999.99,
        medianPrice: 3899.99,
        specifications: {
          title: "Customized SSD"
        }
      }

]

export default products