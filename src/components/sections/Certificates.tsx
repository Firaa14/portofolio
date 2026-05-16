import Section from '../layout/Section';
import FlipCard from '../ui/FlipCard';

const certificates = [
  {
    title: "Microsoft Office Desktop Application",
    issuer: "Trust Training Partners with Universitas Brawijaya",
    date: "Februari 2026",
    description: "Sertifikasi ini menandai langkah awal saya dalam memahami penggunaan aplikasi Microsoft Office secara profesional, yang merupakan keterampilan penting untuk membangun karier di bidang Teknologi Informasi.",
    imageUrl: "public/images/ms office ub.png"
  },
  {
    title: "Membangun Lab Virtual & Dasar Linux",
    issuer: "Komdigi",
    date: "Februari 2026",
    description: "Sertifikasi ini menandai langkah awal saya dalam memahami konsep dasar pembuatan lab virtual dan penggunaan sistem operasi Linux, yang merupakan fondasi penting untuk membangun karier di bidang Teknologi Informasi.",
    imageUrl: "public/images/dasar linux kondigi.png"
  },
  {
    title: "Introduction To Cloud Computing",
    issuer: "Komdigi",
    date: "Februari 2026",
    description: "Sertifikasi ini menandai langkah awal saya dalam memahami konsep dasar komputasi cloud, yang merupakan fondasi penting untuk membangun karier di bidang Teknologi Informasi dengan fokus pada pengelolaan dan pengembangan aplikasi berbasis cloud.",
    imageUrl: "public/images/fondasi clous computing komdigi.png"
  },
  {
    title: "Introduction to Cyber Security",
    issuer: "CisCO Networking Academy",
    date: "Februari 2026",
    description: "Sertifikasi ini menandai langkah awal saya dalam memahami konsep dasar keamanan siber, yang merupakan fondasi penting untuk membangun karier di bidang Teknologi Informasi dengan fokus pada perlindungan data dan sistem digital.",
    imageUrl: "public/images/(BTCMP) Introduce to CyberSecurity - Cisco.png"
  },
  {
    title: "Sertifikat Penghargaan Olimpiade Vokasi Indonesia X 2025",
    issuer: "Forum Pendidikan Tinggi Vokasi Indonesia",
    date: "Agustus 2025",
    description: "Dalam kompetisi ini, saya berhasil meraih penghargaan sebagai finalis dari 1000+ peserta dan 100+ tim dari seluruh Indonesisa. Melalui kompetisi ini, saya mendapatkan pengalaman dalam bekerjasama dalam tim dan berkarya di bidang Internet of Things (IoT) untuk menciptakan solusi inovatif yang berdampak positif bagi masyarakat.",
    imageUrl: "public/images/olivia foto.png"
  },
  {
    title: "Introduction to Cybersecurity and Career Awareness",
    issuer: "Komdigi",
    date: "Agustus 2025",
    description: "Melalui program ini, saya memperoleh wawasan mendalam mengenai dasar-dasar keamanan siber serta peluang karier di industri digital guna mendukung kesiapan profesional di era teknologi informasi.",
    imageUrl: "public/images/cyber.png"
  },
  {
    title: "Belajar Dasar Structured Query Language (SQL)",
    issuer: "Dicoding",
    date: "April 2025",
    description: "Saya telah menyelesaikan sertifikasi Belajar Dasar Structured Query Language (SQL) dari Dicoding Indonesia pada April 2025, yang membekali saya dengan kemampuan fundamental dalam pengelolaan serta manipulasi data relasional untuk kebutuhan pengembangan teknologi informasi.",
    imageUrl: "public/images/belajar dasar sql.png"
  },
  {
    title: "Foundational C# with Microsoft",
    issuer: "Microsoft",
    date: "Maret 2025",
    description: "Sertifikasi Foundational C# with Microsoft ini menandai langkah awal saya dalam memahami bahasa pemrograman C#.",
    imageUrl: "public/images/(BTCMP) freeCodeCamp - Microsoft.png"
  },
  {
    title: "Belajar Dasar AI",
    issuer: "Dicoding",
    date: "Maret 2025",
    description: "Sertifikasi Belajar Dasar AI dari Dicoding Indonesia ini menandai langkah awal saya dalam mendalami dunia kecerdasan buatan, di mana saya berhasil menguasai konsep fundamental teknologi pintar untuk membangun fondasi karier yang kuat di bidang Teknologi Informasi.",
    imageUrl: "public/images/belajar dasar ai dicoding.png"
  },
  {
    title: "Samsung Innovation Campus by Hacktiv8",
    issuer: "Samsung / Hacktiv8",
    date: "Desember 2024",
    description: "Pada kesempatan ini, kemampuan logika dan penalaran analitis diuji dalam konteks teknologi masa depan, khususnya AI. Pengalaman ini memantapkan langkah saya untuk mendalami dunia Teknologi Informasi, dimana logika yang presisi adalah kunci utama dalam membangun solusi digital yang efektif.",
    imageUrl: "public/images/(BTCMP) Sertifikat SIC6.png" 
  }
];

export default function Certificates() {
  return (
    <Section 
      id="certificates" 
      title="Sertifikat" 
      subtitle="Klik atau arahkan kursor untuk melihat sertifikat."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-8 max-w-7xl mx-auto">
        {certificates.map((cert) => (
          <div key={cert.title}>
            <FlipCard
              title={cert.title}
              issuer={cert.issuer}
              date={cert.date}
              description={cert.description}
              imageUrl={cert.imageUrl}
            />
          </div>
        ))}
      </div>
    </Section>
  );
}
