/* eslint-disable @next/next/no-img-element */
"use client";

import { motion } from "framer-motion";
import { Code2, Cpu, Database, Eye } from "lucide-react";
import CyberGrid from "../../components/background/CyberGrid";
import NextButton from "../../components/ui/NextButton";
import EnergySection from "../../components/animation/EnergySection";
import { useLocale } from "../../context/LocaleContext";

const translations = {
  en: {
    name: "Hi, my name is elwin",
    intro:
      "I am a Full-Stack Developer with three years of professional experience in crafting robust, scalable software solutions. Holding a degree in Software Engineering, I excel at bridging the gap between complex theoretical concepts and high-quality, practical execution. My goal is to deliver seamless digital experiences that maintain excellence from the frontend all the way to the backend.",
    quote1:
      "Silence is the sanctuary where complex problems find their simplest solutions.",
    intro2:
      "As an introvert, I thrive in focused environments that allow me to deep-dive into complex problem-solving. This inner calm enables me to analyze technical architectures with meticulous precision, resulting in cleaner, more efficient, and sustainable code. I firmly believe that the most innovative and impactful solutions are often born in moments of deep, quiet concentration.",
    quote2: "Solitude fuels my architecture.",
    intro3:
      "While I value my solitude, I am deeply committed to cultivating a strong, high-level professional network. Engaging with exceptional minds in the tech industry keeps me at the forefront of emerging trends and provides invaluable perspectives. These strategic connections are a cornerstone of my professional growth and ensure that my work consistently meets the highest industry standards. My passion for computer science extends far beyond coding; I am deeply fascinated by the intricate worlds of network architecture and cybersecurity.",
    quote3: "Code is the language, but security is the foundation of trust.",
    skills: [
      { name: "I'm Full Stack Engineer!" },
      { name: "Frontend: Next.js · React · TypeScript" },
      { name: "Backend: Node.js · Laravel · Django" },
    ],
    cards: [
      {
        title: "System Module 1",
        desc: "Scalable and modern architecture for high-performance apps.",
      },
      {
        title: "System Module 2",
        desc: "Secure and efficient backend solutions with optimized databases.",
      },
      {
        title: "System Module 3",
        desc: "Beautiful, responsive and user-centric frontend experiences.",
      },
    ],
  },
  fa: {
    name: "سلام، من الوینم ",
    intro:
      "توسعه‌دهنده فول‌استک هستم با حدود سه سال تجربه که عاشق ساختن نرم‌افزارهای تمیز، مقیاس‌پذیر با تکنولوژی روز دنیا . لیسانس مهندسی نرم‌افزار دارم و خیلی خوشم میاد که مفاهیم پیچیده رو تبدیل کنم به چیزهای قابل اجرا و کاربردی. هدفم اینه که از فرانت تا بک، یه تجربه یکدست و باکیفیت بسازم.",
    quote1:
      "سکوت جاییه که پیچیده‌ترین مسئله‌ها، بهترین و ساده ترین راه‌حل‌هاشون رو پیدا می‌کنن.",
    intro2:
      "آدم درون‌گرایی‌ام و واقعاً توی محیط‌های آروم و متمرکز بهترین عملکردم رو دارم. وقتی عمیق می‌رم توی یه مسئله، می‌تونم معماری‌ها رو دقیق بررسی کنم و کدی بنویسم که هم تمیز باشه، هم بهینه، هم قابل نگهداری.",
    quote2: "تنهایی سوخت معماری منه.",
    intro3:
      "ساختن ارتباطات حرفه‌ای برام مهمه. تعامل با آدم‌های خفن این حوزه کمکم می‌کنه همیشه آپدیت بمونم. علاقه‌م به کامپیوتر فقط کدنویسی نیست؛ معماری شبکه و امنیت سایبری هم خیلی برام جذابه.",
    quote3: "کد یه زبانه، ولی امنیت پایه‌ی اعتماده.",
    skills: [
      { name: "یه فول‌استک دولوپر واقعی‌ام " },
      { name: "فرانت‌اند: Next.js · React · TypeScript" },
      { name: "بک‌اند: Node.js · Laravel · Django" },
    ],
    cards: [
      {
        title: "ماژول سیستم ۱",
        desc: "معماری مدرن و مقیاس‌پذیر برای اپلیکیشن‌های با عملکرد بالا.",
      },
      {
        title: "ماژول سیستم ۲",
        desc: "راه‌حل‌های بک‌اند امن و کارآمد با دیتابیس بهینه‌شده.",
      },
      {
        title: "ماژول سیستم ۳",
        desc: "تجربه کاربری زیبا، ریسپانسیو و متمرکز بر کاربر.",
      },
    ],
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};
const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};
const cardVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function AboutPage() {
  const { locale } = useLocale();
  const text = translations[locale];
  const isFa = locale === "fa";

  // NOTE: direction is intentionally NOT applied to the element that has
  // overflow-x-hidden. Mixing `direction: rtl` with `overflow-x-hidden`
  // on the same element makes browsers anchor overflow from the right
  // edge, which creates a phantom horizontal scroll region in RTL mode.
  const pageStyle = {
    fontFamily: isFa ? "'Estedad', sans-serif" : "'Russo One', sans-serif",
    fontWeight: isFa ? "300" : "100",
  } as React.CSSProperties;

  const dirStyle = {
    direction: isFa ? "rtl" : "ltr",
  } as React.CSSProperties;

  const quoteClass =
    "text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#00d4ff] leading-tight tracking-tight";

  return (
    <main
      className="relative text-white overflow-x-hidden w-full max-w-[100vw] [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
      style={pageStyle}
    >
      <CyberGrid />

      <div className="relative z-10" style={dirStyle}>
        {/* HERO */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col items-center justify-center pt-12 pb-16 px-4 text-center"
        >
          <img
            src="/ewo.png"
            alt="Elwin"
            className="w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 object-cover rounded-3xl shadow-2xl"
          />
          <h1 className="mt-10 text-4xl sm:text-5xl md:text-6xl text-[#00d4ff]">
            {text.name}
          </h1>
        </motion.section>

        {/* INTRO */}
        <motion.section
          variants={fadeLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-3xl mx-auto text-center px-4 space-y-4 pb-12"
        >
          <p className="text-neutral-100 leading-8 text-sm sm:text-base px-2">
            {text.intro}
          </p>
        </motion.section>

        {/* EXPERIENCE + QUOTE 1 */}
        <section className="max-w-7xl mx-auto px-4 py-16">
          <motion.h3
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className={`${quoteClass} text-center mb-12`}
          >
            {text.quote1}
          </motion.h3>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-16"
          >
            {text.cards.map((card, i) => (
              <motion.div
                key={i}
                variants={cardVariant}
                className="p-6 border border-white/5 rounded-2xl hover:border-[#00d4ff]/40 hover:shadow-[0_0_30px_rgba(0,212,255,0.15)] transition-all duration-300"
              >
                <Eye className="text-[#00d4ff] mb-4 w-8 h-8" />
                <h4 className="text-lg font-medium mb-2">{card.title}</h4>
                <p className="text-neutral-300 text-sm leading-relaxed">
                  {card.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <EnergySection />

          {/* QUOTE 2 + Robot */}
          <motion.section
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="flex flex-col items-center justify-center pt-20 pb-8 px-4 text-center"
          >
            <img
              src="/robot.png"
              alt="Robot"
              className="w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 object-cover rounded-3xl shadow-2xl"
            />
            <p className="text-neutral-100 leading-9 mt-12 text-sm sm:text-base max-w-2xl">
              {text.intro2}
            </p>
            <h1 className={`${quoteClass} mt-12`}>{text.quote2}</h1>
          </motion.section>
        </section>

        {/* TECH STACK */}
        <section className="max-w-7xl mx-auto px-4 py-8">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
          >
            {[
              { icon: <Cpu className="w-8 h-8" />, name: text.skills[0].name },
              {
                icon: <Code2 className="w-8 h-8" />,
                name: text.skills[1].name,
              },
              {
                icon: <Database className="w-8 h-8" />,
                name: text.skills[2].name,
              },
            ].map((skill, idx) => (
              <motion.div
                key={idx}
                variants={cardVariant}
                className="h-40 border border-white/5 flex flex-col items-center justify-center gap-4 px-6 text-center rounded-2xl hover:border-[#00d4ff]/40 transition-all duration-300"
              >
                {skill.icon}
                <span className="text-sm text-neutral-300 font-medium">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* QUOTE 3 + Work Image */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col items-center justify-center pt-12 pb-20 px-4 text-center"
        >
          <img
            src="/worki.jpeg"
            alt="Work"
            className="w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 object-cover rounded-3xl shadow-2xl"
          />
          <p className="text-neutral-100 leading-9 mt-12 text-sm sm:text-base max-w-2xl px-4">
            {text.intro3}
          </p>
          <h1 className={`${quoteClass} mt-10`}>{text.quote3}</h1>
        </motion.section>

        {/* CTA */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="flex justify-center pb-32 px-4"
        >
          <NextButton />
        </motion.section>
      </div>
    </main>
  );
}
