import Exb1 from '../assets/Album/1. Exhibition/3.webp';
import Exb2 from '../assets/Album/1. Exhibition/Exhibition.webp';
import Exb3 from '../assets/Album/1. Exhibition/Exhibtiion 2.webp';
import Exb4 from '../assets/Album/1. Exhibition/harvest.webp';
import harvest from '../assets/Album/1. Exhibition/harvest.webp'

import Booth1 from '../assets/Album/2. Booth/Booth 1.webp';
import Booth2 from '../assets/Album/2. Booth/Booth 2.webp';
import Booth3 from '../assets/Album/2. Booth/Booth 3.webp';
import Booth4 from '../assets/Album/2. Booth/Booth4.webp';
import Booth5 from '../assets/Album/2. Booth/Booth5.webp';

import Stage1 from '../assets/Album/3. Stage/stage.webp';

import Bw1 from '../assets/Album/4. Backdrop/Backdrop 1.webp';
import Bw2 from '../assets/Album/4. Backdrop/Backrop 2.webp';

import D1 from '../assets/Album/5. 3D/37.webp';
import D2 from '../assets/Album/5. 3D/38.webp';
import D3 from '../assets/Album/5. 3D/3D1.webp';
import D4 from '../assets/Album/5. 3D/3D2.webp';
import D5 from '../assets/Album/5. 3D/3D3.webp';
import D6 from '../assets/Album/5. 3D/3D4.webp';
import D7 from '../assets/Album/5. 3D/3D5.webp';
import D8 from '../assets/Album/5. 3D/3D6.webp';

import Eo1 from '../assets/Album/6. EO/EO1.webp';

import profile1 from '../assets/Profile/Ahmad-Faiz-Afco.png';
import profile2 from '../assets/Profile/Bang-Doel-Afco.png';
import profile3 from '../assets/Profile/Ardila-Afco.png';


export const exhibitionImages = [
  { src: Exb1, title: "Exhibition", description: "This is the Exhibition photo.", id: "exb1" },
  { src: Exb2, title: "Exhibition", description: "This is the Exhibition photo.", id: "exb2" },
  { src: Exb3, title: "Exhibition", description: "This is the Exhibition photo.", id: "exb3" },
  { src: Exb4, title: "Exhibition", description: "This is the Exhibition photo.", id: "exb4" }
];

export const boothImages = [
  { src: Booth1, title: 'Booth Contractor', description: 'This is the Booth Contractor photo.', id: "booth1" },
  { src: Booth2, title: 'Booth Contractor', description: 'This is the Booth Contractor photo.', id: "booth2" },
  { src: Booth3, title: 'Booth Contractor', description: 'This is the Booth Contractor photo.', id: "booth3" },
  { src: Booth4, title: 'Booth Contractor', description: 'This is the Booth Contractor photo.', id: "booth4" },
  { src: Booth5, title: 'Booth Contractor', description: 'This is the Booth Contractor photo.', id: "booth5" },
];

export const stageImages = [
  { src: Stage1, title: "Level & Stage", description: 'This is the Level & Stage photo', id: "stage1" }
];

export const wallImages = [
  { src: Bw1, title: 'Backdrop & Wall', description: 'This is the Backdrop & Wall photo', id: "wall1" },
  { src: Bw2, title: 'Backdrop & Wall', description: 'This is the Backdrop & Wall photo', id: "wall2" }
];

export const dimensionImages = [
  { src: D1, title: 'Custom 3D Desain', description: 'This is the 3D Desain photo', id: "dim1" },
  { src: D2, title: 'Custom 3D Desain', description: 'This is the 3D Desain photo', id: "dim2" },
  { src: D3, title: 'Custom 3D Desain', description: 'This is the 3D Desain photo', id: "dim3" },
  { src: D4, title: 'Custom 3D Desain', description: 'This is the 3D Desain photo', id: "dim4" },
  { src: D5, title: 'Custom 3D Desain', description: 'This is the 3D Desain photo', id: "dim5" },
  { src: D6, title: 'Custom 3D Desain', description: 'This is the 3D Desain photo', id: "dim6" },
  { src: D7, title: 'Custom 3D Desain', description: 'This is the 3D Desain photo', id: "dim7" },
  { src: D8, title: 'Custom 3D Desain', description: 'This is the 3D Desain photo', id: "dim8" }
];

export const eventImages = [
  { src: Eo1, title: 'Event Organizer', description: 'This is the Event Organizer photo', id: "event1" }
];


export const dataCard = [
  {
    src: D1,
    title: "3D",
    description: "This is the Exhibiton photo.",
    id: "5",
  },
  {
    src: harvest,
    title: 'Booth',
    description: 'This is the Booth Contractor photo.',
    id: "2",
  },
  {
    src: Bw1,
    title: "Backdrop & Wall",
    description: 'This is the Level & Stage photo',
    id: "6",
  },
  {
    src: Stage1,
    title: 'Festival / Konser / Event',
    description: 'This is the Backdrop & Wall photo',
    id: "4",
  },
  {
    src: D1,
    title: 'Thematic Event',
    description: 'This is the 3D Desain photo',
    id: "5",
  },
  {
    src: Eo1,
    title: 'Neon Box / Neon Sign',
    description: 'This is the Event Organizer photo',
    id: "6",
  }
];

// Data.js
export const teamMembers = [
  {
    id: 1,
    name: 'Ahmad Faiz',
    position: 'Founder',
    phone: '6281222200233',
    wa: '081222200233',
    photo: profile1
  },
  {
    id: 2,
    name: 'Bang Doel',
    position: 'Product Specialist',
    photo: profile2
  },
  {
    id: 3,
    name: 'Reza Ardila',
    position: 'Creative Team',
    photo: profile3
  },
  // Tambahkan anggota tim lainnya di sini
];


export const ServiceDetail = [
  {
    id: '1',
    title: 'Exhibition',
    src: Exb4,
    description: 'Mengutamakan kualitas dan mempertahankan tema desain yang unik dan menarik sesuai dengan ciri khas Brand Anda.',
    details: 'Kami menghadirkan kombinasi sempurna antara inovasi dan profesionalisme memastikan booth anda menonjol di setiap pameran.',
    features: [
      {
        feature: '1. Komitmen terhadap Kualitas',
        description: 'Kami berkomitmen memberikan solusi yang melebihi ekspektasi dengan standar kualitas tertinggi.'
      },
      {
        feature: '2. Fokus pada Kepuasan Pelanggan',
        description: 'Kepuasan Anda adalah prioritas kami dengan layanan responsif dan hasil yang konsisten.'
      },
      {
        feature: '3. Keahlian yang Berbeda',
        description: 'Keahlian kami yang unik memastikan solusi terbaik untuk setiap tantangan.'
      },
      {
        feature: '4. Tim Ahli yang Terpercaya',
        description: 'Bekerja dengan tim ahli kami yang berpengalaman untuk hasil yang luar biasa.'
      },
      {
        feature: '5. Efisiensi Optimal',
        description: 'Solusi kami dirancang untuk efisiensi maksimal, menghemat waktu dan biaya Anda.'
      },
      {
        feature: '6. Solusi Inovatif dan Kreatif',
        description: 'Solusi kami menggabungkan inovasi dan kreativitas untuk hasil yang unik.'
      },
      // Tambahkan objek fitur lainnya di sini
    ],
    projectImages: [Exb1, Exb2, Exb3, Exb4],
    sliderImages: ['/path/to/slider-image1.jpg', '/path/to/slider-image2.jpg'],
  },
  {
    id: '2',
    title: 'Booth Contractor',
    src: Booth2,
    description: 'Kami menghadirkan kombinasi sempurna antara inovasi dan profesionalisme, memastikan setiap booth yang kami rancang dan bangun menonjol di setiap pameran.',
    details: 'Dengan pengalaman dan dedikasi, kami menjamin booth Anda tidak hanya menarik, tetapi juga fungsional dan sepenuhnya mencerminkan identitas brand Anda.',
    features: [
      {
        feature: '1. Komitmen terhadap Kualitas',
        description: 'Kami berkomitmen memberikan solusi yang melebihi ekspektasi dengan standar kualitas tertinggi.'
      },
      {
        feature: '2. Fokus pada Kepuasan Pelanggan',
        description: 'Kepuasan Anda adalah prioritas kami dengan layanan responsif dan hasil yang konsisten.'
      },
      {
        feature: '3. Keahlian yang Berbeda',
        description: 'Keahlian kami yang unik memastikan solusi terbaik untuk setiap tantangan.'
      },
      {
        feature: '4. Tim Ahli yang Terpercaya',
        description: 'Bekerja dengan tim ahli kami yang berpengalaman untuk hasil yang luar biasa.'
      },
      {
        feature: '5. Efisiensi Optimal',
        description: 'Solusi kami dirancang untuk efisiensi maksimal, menghemat waktu dan biaya Anda.'
      },
      {
        feature: '6. Solusi Inovatif dan Kreatif',
        description: 'Solusi kami menggabungkan inovasi dan kreativitas untuk hasil yang unik.'
      },
      // Tambahkan objek fitur lainnya di sini
    ],
    projectImages: [Booth1, Booth2, Booth3, Booth4],
    sliderImages: ['/path/to/slider-image1.jpg', '/path/to/slider-image2.jpg'],
  },
  {
    id: '3',
    title: 'Level & Stages',
    src: Stage1,
    description: 'Jasa Pembuatan Stage dan Level untuk Berbagai Kebutuhan',
    details: 'Transformasi kebutuhan Anda menjadi panggung dan level yang sempurna bersama Nightbat. Kami hadir dengan layanan profesional untuk menciptakan desain yang sesuai dengan visi Anda',
    features: [
      {
        feature: '1. Desain dan Perencanaan',
        description: 'Tentukan tujuan utama dan jenis acara yang akan diselenggarakan untuk merancang stage yang sesuai.'
      },
      {
        feature: '2. Keamanan dan Stabilitas',
        description: ' Gunakan bahan berkualitas tinggi dan teknik konstruksi yang andal untuk memastikan stabilitas dan keamanan stage.'
      },
      {
        feature: '3. Ukuran dan Kapasitas',
        description: 'Pastikan stage memiliki ukuran yang cukup untuk menampung semua peserta, alat, dan kegiatan yang direncanakan.'
      },
      {
        feature: '4.  Aksesibilitas',
        description: ' Pastikan ada akses yang mudah ke dan dari stage, baik untuk peserta maupun peralatan.'
      },
      {
        feature: '5. Teknologi dan Peralatan',
        description: ' Pastikan mengetahui peralatan apa saja yang mungkin berhubungan atau melewati Level dan Stage, buat jalur tersebut pada saat desain agar estetika terjaga.'
      },
      {
        feature: '6. Dekorasi dan Estetika',
        description: 'Tambahkan elemen dekoratif yang sesuai dengan tema acara untuk meningkatkan estetika stage.'
      },
      // Tambahkan objek fitur lainnya di sini
    ],
    projectImages: [Stage1],
  },
  {
    id: '4',
    title: 'Backdrop & Wall',
    src: Bw2,
    description: 'Menghadirkan jasa pembuatan backdrop dan wall branding dalam berbagai bentuk dan penempatan, memastikan setiap elemen acara Anda tampil memukau dan sesuai dengan identitas brand Anda.',
    details: 'Kami menawarkan jasa pembuatan backdrop kreatif yang sesuai dengan brand Anda, lengkap dengan wall branding custom untuk memperkuat citra dan meningkatkan brand awareness di berbagai lokasi. Desain dan penempatan yang variatif memastikan kebutuhan brand Anda terpenuhi dengan sempurna.',
    features: [
      {
        feature: '1. Inspirasi Desain Unik',
        description: 'Kami menciptakan backdrop dan wall branding yang tak hanya menarik, tapi juga mencerminkan identitas brand Anda dengan kreativitas yang segar.'
      },
      {
        feature: '2. Citra Brand yang Kuat',
        description: 'Dengan wall branding custom, kami membantu memperkuat brand image dan meningkatkan awareness di setiap kesempatan.'
      },
      {
        feature: '3. Penempatan yang Beragam',
        description: 'Backdrop dan wall branding kami tersedia dalam berbagai bentuk dan penempatan, disesuaikan dengan kebutuhan ruang dan acara Anda.'
      },
      {
        feature: '4. Desain yang Memukau',
        description: 'Kami menawarkan desain backdrop dan wall branding yang memikat, dirancang untuk meninggalkan kesan yang mendalam pada audiens Anda.'
      },
      {
        feature: '5. Pilihan Fleksibel',
        description: 'Dari konsep hingga eksekusi, kami menyediakan beragam pilihan yang dapat disesuaikan dengan berbagai jenis ruang dan acara.'
      },
      {
        feature: '6. Hasil Berkualitas Tinggi',
        description: 'Tim profesional kami memastikan setiap detail backdrop dan wall branding diproses dengan teliti, menghasilkan produk akhir yang berkualitas tinggi.'
      },
      // Tambahkan objek fitur lainnya di sini
    ],
    projectImages: [Bw1, Bw2],
  },
  {
    id: '5',
    title: 'Custom 3D Desain',
    src: D1,
    description: 'Kami menyediakan layanan produksi custom 3D untuk segala bentuk dan bahan sesuai kebutuhan Anda.',
    details: 'Proses produksi yang dioptimalkan untuk mendapatkan kualitas terbaik dengan delivery time yang relatif lebih cepat. Nightbat adalah tim solid yang saling bekerja sama .',
    features: [
      {
        feature: '1. Desain 3D Custom',
        description: 'Kami menawarkan layanan desain 3D yang sepenuhnya kustom, menciptakan solusi unik yang sesuai dengan visi dan kebutuhan Anda.'
      },
      {
        feature: '2. Pilihan Bahan yang Luas',
        description: 'Kami memproduksi produk 3D menggunakan berbagai jenis bahan, memastikan hasil akhir yang sesuai dengan keinginan dan kebutuhan Anda.'
      },
      {
        feature: '3. Kualitas Produksi Terjamin',
        description: 'Dengan dukungan tim ahli, kami memastikan setiap detail dari produk 3D Anda diproduksi dengan kualitas terbaik dan presisi yang tinggi.'
      },
      {
        feature: '4. Wujudkan Ide Anda',
        description: 'Kirimkan konsep desain Anda kepada kami, dan biarkan kami mengubahnya menjadi produk 3D nyata yang memenuhi harapan Anda.'
      },
      {
        feature: '5. Desain Kustom untuk Kebutuhan 3D',
        description: 'Layanan desain kami dirancang khusus untuk menciptakan produk 3D yang tidak hanya fungsional tetapi juga estetis sesuai dengan kebutuhan Anda.'
      },
      {
        feature: '6. Proses Cepat dan Efisien',
        description: 'Kami menjamin proses produksi yang cepat dan efisien, memberikan hasil yang berkualitas tinggi tanpa mengorbankan waktu.'
      },
      // Tambahkan objek fitur lainnya di sini
    ],
    projectImages: [D1, D2, D3, D4, D5, D6, D7, D8],
  },
  {
    id: '6',
    title: 'Event Organizer',
    src: Eo1,
    description: 'Nightbat menghadirkan layanan event organizer yang menggabungkan kreativitas dan profesionalisme, menciptakan pengalaman acara yang tak terlupakan. Dari desain unik hingga eksekusi yang sempurna, kami berkomitmen untuk mewujudkan visi acara Anda dengan hasil berkualitas tinggi.',
    details: 'Kami menyediakan layanan lengkap mulai dari perencanaan dan desain acara, dekorasi kreatif, hingga produksi yang melibatkan material premium. Tim kami yang berpengalaman bekerja dengan efisiensi tinggi untuk memastikan acara Anda berjalan lancar, dengan perhatian penuh pada setiap detail dari awal hingga akhir.',
    features: [
      {
        feature: '1. Desain Event Unik',
        description: 'Kami menciptakan desain event yang unik dan memukau, disesuaikan dengan visi dan tema acara Anda.'
      },
      {
        feature: '2. Produksi Berkualitas Tinggi',
        description: 'Dengan tim profesional, kami memastikan setiap detail acara diproduksi dengan standar kualitas tertinggi.'
      },
      {
        feature: '3. Penggunaan Material Premium',
        description: 'Kami hanya menggunakan bahan-bahan premium untuk memastikan hasil yang elegan dan tahan lama.'
      },
      {
        feature: '4. Pengerjaan Efisien dan Cepat',
        description: 'Proses pengerjaan yang efisien memungkinkan kami untuk mewujudkan event Anda dengan cepat, tanpa mengorbankan kualitas.'
      },
      {
        feature: '5. Dukungan Sepenuhnya',
        description: 'Kami selalu siap mendukung Anda dari awal hingga akhir acara, memastikan setiap detail berjalan lancar.'
      },
      // Tambahkan objek fitur lainnya di sini
    ],
    projectImages: [Eo1],
  },
];


export const testimonials = [
  {
    imgSrc: Exb2,
    name: 'Bang Dedy',
    title: 'Sign Enterprise',
    testimonial: 'yang mau ngejar waktu dan kualitas pilihan nya ke afco. Thank u afco event kami berjalan sukses.',
    avatar: 'https://afcoproduction.com/wp-content/uploads/2024/08/2024-08-16-17_08_10-WhatsApp-Web.png',
    star: '5'
  },
  {
    imgSrc: 'https://afcoproduction.com/wp-content/uploads/2024/08/Clariant.webp',
    name: 'PT. LOTUS',
    title: 'Clariant',
    testimonial: 'Kerjasama dengan afco itu asik, orang2nya kompeten timnya jg solid. Sukses terus afco. makasih ya rak nya.',
    avatar: 'https://i.pinimg.com/474x/d2/97/a3/d297a3eced48990f8001c8624ec84145.jpg',
    star: '5'
  },
  {
    imgSrc: 'https://afcoproduction.com/wp-content/uploads/2024/08/The-Harvest-Kingdom.webp',
    name: 'Pak Boby',
    title: 'The Harvest Kingdom',
    testimonial: 'Timnya humble parah, bisa banget diajak kerja bareng. Ada aja idenya.',
    avatar: 'https://i.pinimg.com/474x/d2/97/a3/d297a3eced48990f8001c8624ec84145.jpg',
    star: '5'
  }
];