import { useState, ReactNode } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Globe, MessageSquare } from "lucide-react";
import { WHATSAPP_NUMBER } from "../constants";

type FAQItem = {
  q: string;
  a: string | ReactNode;
};

export default function FAQ() {
  const [language, setLanguage] = useState<"en" | "id">("en");

  const englishFaqs: FAQItem[] = [
    {
      q: "1. Is this a personal shopping service or a trade-based import service?",
      a: (
        <div className="space-y-4">
          <p>Xcelerate operates <strong>strictly under trade terms</strong>, not as a personal shopping or personal parcel service.</p>
          <p>Even if the goods are for personal use, all shipments are treated as <strong>commercial goods</strong> and must comply with:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>New Zealand Customs regulations</li>
            <li>New Zealand Biosecurity / MPI (Ministry for Primary Industries) requirements</li>
          </ul>
          <p>This ensures the shipment is legally allowed to enter New Zealand as a commercial import.</p>
        </div>
      )
    },
    {
      q: "2. What items are NOT allowed to be sent from Indonesia to New Zealand?",
      a: (
        <div className="space-y-4">
          <p><strong>Prohibited items include:</strong></p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Firearms and weapons</li>
            <li>Illegal drugs and related equipment</li>
            <li>Certain medicines</li>
            <li>Any items prohibited by NZ Customs</li>
          </ul>
          <p>Full list: <a href="https://www.customs.govt.nz/travel-to-and-from-new-zealand/prohibited-and-restricted-items" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">NZ Customs Prohibited Items</a></p>
          <p><strong>Restricted items depend on:</strong></p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Product composition</li>
            <li>Biosecurity risk</li>
            <li>Country of origin</li>
            <li>Processing method</li>
          </ul>
          <p>MPI may require inspections, declarations, or treatment for certain goods.</p>
        </div>
      )
    },
    {
      q: "3. What items can be shipped, and what are the restrictions?",
      a: (
        <div className="space-y-4">
          <p>Most shelf-stable food and beverages are allowed if they meet NZ labelling and ingredient requirements. Restrictions apply to:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Food & Beverage:</strong> Must be commercially packaged, shelf-stable, and meet MPI standards.</li>
            <li><strong>Non-food items:</strong> Clothing, crafts, and processed wood products are generally allowed but may require specific documentation.</li>
          </ul>
        </div>
      )
    },
    {
      q: "4. How is the total shipping cost calculated?",
      a: "Shipping costs are typically calculated based on volume (CBM) or weight, depending on the shipment type. This includes sea freight, handling, and documentation fees."
    },
    {
      q: "5. Why is 15% Import GST charged?",
      a: "All goods imported into New Zealand are subject to Goods and Services Tax (GST) of 15% on the total value of the goods plus shipping and insurance costs, as required by NZ Customs."
    },
    {
      q: "6. What are the requirements for goods shipped under trade terms?",
      a: "Goods must have commercial invoices, packing lists, and meet all NZ regulatory standards for their specific category (e.g., food safety, electrical safety)."
    },
    {
      q: "7. Why must boxes be clean and strong?",
      a: "MPI requires clean packaging to prevent biosecurity risks. Strong boxes ensure goods are protected during sea freight and multiple handling stages."
    },
    {
      q: "8. Why must all boxes be opened and photographed?",
      a: "We verify contents against the packing list for customs accuracy and check for any prohibited items to ensure a smooth clearance process in New Zealand."
    },
    {
      q: "9. Can I receive an estimate before sending goods?",
      a: "Yes, we can provide a preliminary estimate based on your provided dimensions, weight, and value. Final costs are confirmed upon arrival at our warehouse."
    },
    {
      q: "10. Where is the receiving warehouse in Indonesia?",
      a: "Our primary consolidation warehouse is located in Surabaya, East Java. Specific address details are provided once your shipment is booked."
    },
    {
      q: "11. Where do I collect goods in New Zealand?",
      a: "Goods can be collected from our Auckland-based warehouse. We also offer nationwide delivery options for an additional fee."
    },
    {
      q: "12. Does Xcelerate handle biosecurity & customs clearance?",
      a: "Yes, our service includes full handling of MPI biosecurity inspections and NZ Customs clearance documentation."
    },
    {
      q: "13. When is the next shipment schedule?",
      a: "We typically run monthly consolidations. Please check our 'Importing' page or contact us for the most up-to-date ETD/ETA dates."
    },
    {
      q: "14. Do you offer a buying service?",
      a: "Yes, we can support sourcing and purchasing for specific trade requirements in Indonesia. Contact us to discuss your sourcing needs."
    }
  ];

  const indonesianFaqs: FAQItem[] = [
    {
      q: "1. Apakah layanan ini jastip personal atau trade?",
      a: (
        <div className="space-y-4">
          <p>Xcelerate beroperasi <strong>secara ketat di bawah persyaratan perdagangan (trade terms)</strong>, bukan sebagai layanan belanja pribadi (jastip) atau layanan paket pribadi.</p>
          <p>Meskipun barang tersebut untuk penggunaan pribadi, semua pengiriman diperlakukan sebagai <strong>barang komersial</strong> dan harus mematuhi:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Peraturan Bea Cukai Selandia Baru</li>
            <li>Persyaratan Biosekuriti Selandia Baru / MPI (Ministry for Primary Industries)</li>
          </ul>
          <p>Hal ini memastikan pengiriman diizinkan secara hukum untuk masuk ke Selandia Baru sebagai impor komersial.</p>
        </div>
      )
    },
    {
      q: "2. Apa saja barang yang TIDAK boleh dikirim dari Indonesia ke New Zealand?",
      a: (
        <div className="space-y-4">
          <p><strong>Barang-barang yang dilarang meliputi:</strong></p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Senjata api dan senjata</li>
            <li>Obat-obatan terlarang dan peralatan terkait</li>
            <li>Obat-obatan tertentu</li>
            <li>Barang apa pun yang dilarang oleh Bea Cukai NZ</li>
          </ul>
          <p>Daftar lengkap: <a href="https://www.customs.govt.nz/travel-to-and-from-new-zealand/prohibited-and-restricted-items" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Barang Terlarang Bea Cukai NZ</a></p>
          <p><strong>Barang-barang yang dibatasi bergantung pada:</strong></p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Komposisi produk</li>
            <li>Risiko biosekuriti</li>
            <li>Negara asal</li>
            <li>Metode pemrosesan</li>
          </ul>
          <p>MPI mungkin memerlukan inspeksi, deklarasi, atau perlakuan untuk barang-barang tertentu.</p>
        </div>
      )
    },
    {
      q: "3. Apa saja barang yang boleh dikirim, dan apa pembatasannya?",
      a: (
        <div className="space-y-4">
          <p>Sebagian besar makanan dan minuman kemasan diperbolehkan jika memenuhi persyaratan pelabelan dan bahan NZ. Ketentuan berlaku untuk:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Produk Makanan & Minuman:</strong> Harus dikemas secara komersial, tahan lama (shelf-stable), dan memenuhi standar MPI.</li>
            <li><strong>Barang Non-makanan:</strong> Pakaian, kerajinan tangan, dan produk kayu olahan umumnya diperbolehkan tetapi mungkin memerlukan dokumentasi khusus.</li>
          </ul>
        </div>
      )
    },
    {
      q: "4. Berapa total biaya kirim?",
      a: "Biaya pengiriman biasanya dihitung berdasarkan volume (CBM) atau berat, tergantung pada jenis pengiriman. Ini termasuk biaya angkut laut, penanganan, dan biaya dokumentasi."
    },
    {
      q: "5. Mengapa ada Import GST 15%?",
      a: "Semua barang yang diimpor ke Selandia Baru dikenakan Pajak Barang dan Jasa (GST) sebesar 15% dari total nilai barang ditambah biaya pengiriman dan asuransi, sesuai persyaratan Bea Cukai NZ."
    },
    {
      q: "6. Bagaimana cara kirim barang konsumsi pribadi tapi tetap mengikuti trade terms?",
      a: "Barang harus memiliki invoice komersial, daftar kemasan (packing list), dan memenuhi semua standar regulasi NZ untuk kategori spesifik mereka."
    },
    {
      q: "7. Mengapa dus harus bersih dan kuat?",
      a: "MPI mewajibkan kemasan yang bersih untuk mencegah risiko biosekuriti. Dus yang kuat memastikan barang terlindungi selama pengiriman laut dan berbagai tahap penanganan."
    },
    {
      q: "8. Mengapa semua box harus dibuka dan difoto?",
      a: "Kami memverifikasi isi terhadap daftar kemasan untuk akurasi bea cukai dan memeriksa barang terlarang untuk memastikan proses kliring yang lancar di Selandia Baru."
    },
    {
      q: "9. Apakah saya bisa mendapatkan perkiraan biaya sebelum mengirim barang?",
      a: "Ya, kami dapat memberikan perkiraan awal berdasarkan dimensi, berat, dan nilai yang Anda berikan. Biaya akhir dikonfirmasi saat tiba di gudang kami."
    },
    {
      q: "10. Di mana alamat gudang penerimaan barang di Indonesia?",
      a: "Gudang konsolidasi utama kami berlokasi di Surabaya, Jawa Timur. Detail alamat lengkap diberikan setelah pengiriman Anda dipesan."
    },
    {
      q: "11. Di mana mengambil barang di NZ?",
      a: "Barang dapat diambil dari gudang kami yang berbasis di Auckland. Kami juga menawarkan opsi pengiriman nasional dengan biaya tambahan."
    },
    {
      q: "12. Apakah Xcelerate membantu proses biosecurity & customs?",
      a: "Ya, layanan kami mencakup penanganan penuh inspeksi biosekuriti MPI dan dokumentasi kliring Bea Cukai NZ."
    },
    {
      q: "13. Bagaimana dengan jadwal pengiriman?",
      a: "Kami biasanya menjalankan konsolidasi bulanan. Silakan periksa halaman 'Importing' kami atau hubungi kami untuk tanggal ETD/ETA terbaru."
    },
    {
      q: "14. Bisakah titip beli?",
      a: "Ya, kami dapat mendukung pencarian dan pembelian untuk persyaratan perdagangan tertentu di Indonesia. Hubungi kami untuk mendiskusikan kebutuhan sourcing Anda."
    }
  ];

  const currentFaqs = language === "en" ? englishFaqs : indonesianFaqs;

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#0D0D0D] pt-40 pb-20">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="inline-flex items-center gap-3 bg-white/8 border border-white/10 rounded-full px-4 py-2 mb-10">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                <span className="text-white/70 text-xs font-medium tracking-[0.15em] uppercase">Support Centre</span>
              </div>
              <h1 style={{ fontFamily: "var(--font-heading)" }} className="text-6xl md:text-7xl font-medium text-white leading-[1.03] mb-6 tracking-tight">
                Frequently Asked<br /><span className="text-accent">Questions</span>
              </h1>
              <p className="text-white/50 text-lg leading-relaxed mb-10 max-w-xl">
                Everything you need to know about importing from Indonesia to New Zealand.
              </p>

              {/* Language Switcher */}
              <div className="flex p-1 bg-white/8 border border-white/10 rounded-full w-fit">
                <button
                  onClick={() => setLanguage("en")}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${
                    language === "en"
                      ? "bg-accent text-white"
                      : "text-white/50 hover:text-white"
                  }`}
                >
                  <Globe size={14} /> English
                </button>
                <button
                  onClick={() => setLanguage("id")}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${
                    language === "id"
                      ? "bg-accent text-white"
                      : "text-white/50 hover:text-white"
                  }`}
                >
                  <MessageSquare size={14} /> Bahasa Indonesia
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-24">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-4xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={language}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
              >
                <Accordion multiple={false} className="space-y-3">
                  {currentFaqs.map((faq, i) => (
                    <AccordionItem
                      key={i}
                      value={`item-${i}`}
                      className="border border-border rounded-xl overflow-hidden bg-white hover:border-accent/25 transition-colors px-6"
                    >
                      <AccordionTrigger className="py-6 text-left text-base font-medium text-primary hover:text-accent hover:no-underline transition-colors">
                        {faq.q}
                      </AccordionTrigger>
                      <AccordionContent className="pb-6 text-muted text-sm leading-relaxed">
                        {faq.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </motion.div>
            </AnimatePresence>

            <div className="mt-16 p-10 md:p-14 bg-[#F7F7F5] border border-border rounded-2xl text-center">
              <h3 style={{ fontFamily: "var(--font-heading)" }} className="text-2xl font-medium text-primary mb-4">Still have questions?</h3>
              <p className="text-muted text-sm mb-8 max-w-md mx-auto leading-relaxed">
                Our team is here to help with any specific logistics or biosecurity inquiries.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link to="/contact" className="luxury-btn-accent px-10">
                  Contact Support
                </Link>
                <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" className="luxury-btn px-10">
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
