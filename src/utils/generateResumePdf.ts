const resume = {
  name: 'SYAFIRA FIRDAUSI NUZULLA',
  contact: [
    'Malang, Indonesia',
    'syafiranuzulla@student.ub.ac.id',
    'linkedin.com/in/syafirafn',
    'github.com/Firaa14',
  ],
  summary:
    'Information Technology student at Universitas Brawijaya with a focus on back-end development, IoT systems, data processing, and scalable web applications. Experienced in system ownership, asset reliability monitoring, embedded systems, web development, and technical leadership.',
  education: [
    {
      period: '2024 - Present',
      institution: 'Universitas Brawijaya',
      location: 'Malang, Indonesia',
      degree: 'Diploma Teknologi Informasi',
    },
    {
      period: '2021 - 2024',
      institution: 'SMA Negeri 1 Sumberpucung',
      location: 'Malang, Indonesia',
      degree: 'MIPA (Mathematics & Natural Sciences)',
    },
  ],
  experience: [
    {
      period: 'Aug - Dec 2026',
      title: 'IT Intern - System Owner',
      organization: 'PT PLN Nusantara Power Unit Pembangkitan Brantas',
      location: 'Karangkates, Indonesia',
      description:
        'Developed and maintained a web-based health mapping system for hydroelectric power plant asset reliability monitoring; analyzed and organized telemetry data using Microsoft Excel.',
    },
    {
      period: '2026 - 2027',
      title: 'Bank Indonesia Scholarship Awardee',
      organization: 'Bank Indonesia (GenBI)',
      location: 'Malang, Indonesia',
      description:
        'Recognized for academic achievement and leadership potential; participated in community leadership and empowerment initiatives.',
    },
    {
      period: 'Jul - Aug 2025',
      title: 'National Finalist - Olimpiade Vokasi Indonesia',
      organization: 'Forum Pendidikan Tinggi Vokasi Indonesia',
      location: 'National, Indonesia',
      description:
        'Top 7 finalist among 1,303 teams from 94 universities; developed an IoT food safety device for the Free Nutritious Meals program.',
    },
  ],
  skills: [
    'Laravel',
    'React',
    'Node.js',
    'JavaScript',
    'TypeScript',
    'Python',
    'Java',
    'C++',
    'PHP',
    'MySQL',
    'Arduino',
    'Linux',
    'Firebase',
    'Microsoft Excel',
    'Microsoft 365',
  ],
  certifications: [
    'Microsoft Office Desktop Application - Trust Training Partners / Universitas Brawijaya',
    'Building Virtual Labs & Linux Fundamentals - Komdigi',
    'Introduction to Cloud Computing - Komdigi',
    'Introduction to Cyber Security - Cisco Networking Academy',
    'Introduction to Cybersecurity and Career Awareness - Komdigi',
    'Belajar Dasar Structured Query Language (SQL) - Dicoding Indonesia',
    'Foundational C# with Microsoft - freeCodeCamp / Microsoft',
    'Belajar Dasar AI - Dicoding Indonesia',
    'Samsung Innovation Campus - Samsung / Hacktiv8 Indonesia',
  ],
  awards: [
    'Top 7 National Finalist - Smart Systems, OLIVIA X Universitas Brawijaya (2025)',
    'Bank Indonesia Scholarship Awardee, GenBI (2026)',
  ],
};

export async function generateResumePdf() {
  const { jsPDF } = await import('jspdf');
  const doc = new jsPDF({ unit: 'mm', format: 'a4', orientation: 'portrait' });
  const pageWidth = doc.internal.pageSize.getWidth();
  const margin = 16;
  const contentWidth = pageWidth - margin * 2;
  let y = 15;

  const ensureSpace = (height: number) => {
    if (y + height > 278) {
      doc.addPage();
      y = 16;
    }
  };

  const sectionHeading = (title: string) => {
    ensureSpace(12);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(11);
    doc.setTextColor(131, 0, 0);
    doc.text(title.toUpperCase(), margin, y);
    y += 2.5;
    doc.setDrawColor(131, 0, 0);
    doc.setLineWidth(0.35);
    doc.line(margin, y, pageWidth - margin, y);
    y += 5;
  };

  const writeWrapped = (text: string, size = 9.2, bold = false, indent = 0) => {
    doc.setFont('helvetica', bold ? 'bold' : 'normal');
    doc.setFontSize(size);
    doc.setTextColor(35, 35, 38);
    const lines = doc.splitTextToSize(text, contentWidth - indent) as string[];
    lines.forEach((line) => {
      ensureSpace(5);
      doc.text(line, margin + indent, y);
      y += 4.4;
    });
  };

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(20);
  doc.setTextColor(35, 35, 38);
  doc.text(resume.name, margin, y);
  y += 7;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(75, 75, 78);
  doc.text(resume.contact.join('  |  '), margin, y);
  y += 9;

  sectionHeading('Professional Summary');
  writeWrapped(resume.summary);
  y += 3;

  sectionHeading('Education');
  resume.education.forEach((item) => {
    ensureSpace(18);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10);
    doc.setTextColor(35, 35, 38);
    doc.text(item.degree, margin, y);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    doc.setTextColor(75, 75, 78);
    doc.text(item.period, pageWidth - margin, y, { align: 'right' });
    y += 4.5;
    doc.text(`${item.institution} | ${item.location}`, margin, y);
    y += 6;
  });

  sectionHeading('Experience');
  resume.experience.forEach((item) => {
    ensureSpace(22);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10);
    doc.setTextColor(35, 35, 38);
    doc.text(item.title, margin, y);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    doc.setTextColor(75, 75, 78);
    doc.text(item.period, pageWidth - margin, y, { align: 'right' });
    y += 4.5;
    doc.text(`${item.organization} | ${item.location}`, margin, y);
    y += 4.8;
    writeWrapped(item.description);
    y += 2;
  });

  sectionHeading('Technical Skills');
  writeWrapped(resume.skills.join('  |  '));
  y += 3;

  sectionHeading('Awards & Honors');
  resume.awards.forEach((item) => {
    writeWrapped(`• ${item}`);
  });
  y += 3;

  sectionHeading('Certifications');
  resume.certifications.forEach((item) => {
    writeWrapped(`• ${item}`);
  });

  doc.setProperties({
    title: 'Syafira Firdausi Nuzulla - ATS Resume',
    subject: 'Professional resume',
    author: 'Syafira Firdausi Nuzulla',
  });

  doc.save('Syafira-Firdausi-Nuzulla-Resume.pdf');
}
