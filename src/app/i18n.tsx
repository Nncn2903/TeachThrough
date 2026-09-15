import { createContext, useContext, useState, ReactNode } from "react";

export type Lang = "en" | "th";

type Dict = Record<string, { en: string; th: string }>;

export const dict: Dict = {
  // Nav
  "nav.home": { en: "Home", th: "หน้าแรก" },
  "nav.find": { en: "Find Tutors", th: "ค้นหาติวเตอร์" },
  "nav.subjects": { en: "Subjects", th: "วิชา" },
  "nav.teach": { en: "Teach on Platform", th: "สอนบนแพลตฟอร์ม" },
  "nav.about": { en: "About", th: "เกี่ยวกับเรา" },
  "nav.contact": { en: "Contact", th: "ติดต่อ" },
  "nav.login": { en: "Login", th: "เข้าสู่ระบบ" },
  "nav.signup": { en: "Sign Up", th: "สมัครสมาชิก" },

  // Home hero
  "home.heroTitle": {
    en: "Find the perfect tutor for your goals",
    th: "ค้นหาติวเตอร์ที่ใช่สำหรับเป้าหมายของคุณ",
  },
  "home.heroSub": {
    en: "Connect with expert tutors in any subject, anytime, anywhere. Learn at your own pace and reach your full potential.",
    th: "เชื่อมต่อกับติวเตอร์ผู้เชี่ยวชาญในทุกวิชา ทุกที่ ทุกเวลา เรียนรู้ตามจังหวะของคุณและเติบโตเต็มศักยภาพ",
  },
  "home.subject": { en: "Subject", th: "วิชา" },
  "home.location": { en: "Location", th: "สถานที่" },
  "home.search": { en: "Search", th: "ค้นหา" },
  "home.expertTutors": { en: "Expert Tutors", th: "ติวเตอร์มืออาชีพ" },
  "home.subjectsLabel": { en: "Subjects", th: "วิชา" },
  "home.rating": { en: "Rating", th: "คะแนน" },
  "home.popularSubjects": { en: "Popular Subjects", th: "วิชายอดนิยม" },
  "home.popularSub": {
    en: "Explore the most in-demand learning categories",
    th: "สำรวจหมวดวิชาที่ได้รับความนิยมสูงสุด",
  },
  "home.viewAll": { en: "View All", th: "ดูทั้งหมด" },
  "home.ctaTitle": {
    en: "Become a tutor and share your knowledge",
    th: "มาเป็นติวเตอร์และแบ่งปันความรู้ของคุณ",
  },
  "home.ctaSub": {
    en: "Join thousands of educators earning by teaching what they love. Set your own schedule and rates.",
    th: "ร่วมกับนักการศึกษานับพันที่หารายได้จากการสอนสิ่งที่รัก กำหนดตารางและค่าสอนได้ด้วยตัวเอง",
  },
  "home.applyNow": { en: "Apply Now", th: "สมัครเลย" },
  "home.liveNow": { en: "Live now", th: "ออนไลน์อยู่" },
  "home.ratingTag": { en: "4.9★ rating", th: "คะแนน 4.9★" },
  "home.tutors": { en: "tutors", th: "ติวเตอร์" },

  // Footer
  "footer.rights": {
    en: "© 2026 TeachThrough. All rights reserved.",
    th: "© 2026 TeachThrough สงวนลิขสิทธิ์",
  },
  "footer.privacy": { en: "Privacy", th: "ความเป็นส่วนตัว" },
  "footer.terms": { en: "Terms", th: "เงื่อนไข" },
  "footer.contact": { en: "Contact", th: "ติดต่อ" },

  // Find Tutors
  "find.title": { en: "Find Tutors", th: "ค้นหาติวเตอร์" },
  "find.sub": {
    en: "Browse expert tutors and find the perfect match for your needs",
    th: "ค้นหาติวเตอร์มืออาชีพที่เหมาะกับความต้องการของคุณ",
  },
  "find.searchPlaceholder": {
    en: "Search by name or subject...",
    th: "ค้นหาจากชื่อหรือวิชา...",
  },
  "find.allSubjects": { en: "All Subjects", th: "ทุกวิชา" },
  "find.price": { en: "Price", th: "ราคา" },
  "find.rating": { en: "Rating", th: "คะแนน" },
  "find.filters": { en: "Filters", th: "ตัวกรอง" },
  "find.subjects": { en: "Subjects", th: "วิชา" },
  "find.priceRange": { en: "Price Range", th: "ช่วงราคา" },
  "find.availability": { en: "Availability", th: "เวลาว่าง" },
  "find.tutorType": { en: "Tutor Type", th: "ประเภทติวเตอร์" },
  "find.found": { en: "Tutors Found", th: "ติวเตอร์ที่พบ" },
  "find.sortBy": { en: "Sort by:", th: "เรียงตาม:" },
  "find.relevance": { en: "Relevance", th: "ความเกี่ยวข้อง" },
  "find.viewProfile": { en: "View Profile", th: "ดูโปรไฟล์" },
  "find.availableNow": { en: "Available Now", th: "พร้อมสอนตอนนี้" },
  "find.reviews": { en: "reviews", th: "รีวิว" },
  "find.hour": { en: "/hour", th: "/ชั่วโมง" },
  "subj.all": { en: "All Subjects", th: "ทุกวิชา" },
  "subj.math": { en: "Math", th: "คณิตศาสตร์" },
  "subj.science": { en: "Science", th: "วิทยาศาสตร์" },
  "subj.english": { en: "English", th: "ภาษาอังกฤษ" },
  "subj.programming": { en: "Programming", th: "การเขียนโปรแกรม" },
  "subj.business": { en: "Business", th: "ธุรกิจ" },
  "subj.design": { en: "Design", th: "การออกแบบ" },
  "subj.music": { en: "Music", th: "ดนตรี" },
  "subj.languages": { en: "Languages", th: "ภาษา" },
  "subj.physics": { en: "Physics", th: "ฟิสิกส์" },
  "subj.calculus": { en: "Calculus", th: "แคลคูลัส" },
  "subj.javascript": { en: "JavaScript", th: "JavaScript" },
  "subj.python": { en: "Python", th: "Python" },
  "subj.literature": { en: "Literature", th: "วรรณกรรม" },
  "subj.writing": { en: "Writing", th: "การเขียน" },
  "subj.chemistry": { en: "Chemistry", th: "เคมี" },
  "subj.biology": { en: "Biology", th: "ชีววิทยา" },
  "avail.now": { en: "Available Now", th: "พร้อมสอนตอนนี้" },
  "avail.weekdays": { en: "Weekdays", th: "วันธรรมดา" },
  "avail.weekends": { en: "Weekends", th: "วันหยุดสุดสัปดาห์" },
  "avail.evenings": { en: "Evenings", th: "ช่วงเย็น" },
  "type.pro": { en: "Professional", th: "มืออาชีพ" },
  "type.uni": { en: "University", th: "นักศึกษามหาวิทยาลัย" },
  "type.native": { en: "Native Speaker", th: "เจ้าของภาษา" },
  "tutor.s1.desc": {
    en: "PhD in Mathematics with 8+ years of experience teaching high school and university students.",
    th: "ปริญญาเอกด้านคณิตศาสตร์ ประสบการณ์สอน 8+ ปี ทั้งระดับมัธยมและมหาวิทยาลัย",
  },
  "tutor.s2.desc": {
    en: "Senior software engineer turned tutor, specializing in web development and computer science.",
    th: "อดีตวิศวกรซอฟต์แวร์อาวุโสที่ผันมาเป็นติวเตอร์ เชี่ยวชาญด้านพัฒนาเว็บและวิทยาการคอมพิวเตอร์",
  },
  "tutor.s3.desc": {
    en: "Cambridge-certified English tutor helping students improve fluency and academic writing.",
    th: "ติวเตอร์ภาษาอังกฤษได้รับการรับรองจาก Cambridge ช่วยพัฒนาความคล่องและการเขียนเชิงวิชาการ",
  },
  "tutor.s4.desc": {
    en: "Passionate science educator with a focus on building strong fundamentals through experiments.",
    th: "นักการศึกษาด้านวิทยาศาสตร์ที่เน้นปูพื้นฐานให้แข็งแกร่งผ่านการทดลอง",
  },

  // Subjects (course listing) page
  "subjects.title": { en: "Find Subjects Offered", th: "ค้นหาวิชาที่เปิดสอน" },
  "subjects.sub": {
    en: "Browse expert tutors and find the perfect match for your needs",
    th: "เลือกดูคอร์สจากติวเตอร์ผู้เชี่ยวชาญ และค้นหาคอร์สที่ใช่สำหรับคุณ",
  },
  "subjects.searchPh": { en: "Search by name or subject...", th: "ค้นหาจากชื่อหรือวิชา..." },
  "subjects.allSubjects": { en: "All Subjects", th: "ทุกวิชา" },
  "subjects.price": { en: "Price", th: "ราคา" },
  "subjects.rating": { en: "Rating", th: "คะแนน" },
  "subjects.filters": { en: "Filters", th: "ตัวกรอง" },
  "subjects.found": { en: "Subjects Found", th: "วิชาที่พบ" },
  "subjects.sortBy": { en: "Sort by:", th: "เรียงตาม:" },
  "subjects.relevance": { en: "Relevance", th: "ความเกี่ยวข้อง" },
  "subjects.taughtBy": { en: "Taught by", th: "สอนโดย" },

  // Tutor Profile
  "profile.back": { en: "Back to Tutors", th: "กลับสู่รายชื่อติวเตอร์" },
  "profile.about": { en: "About Me", th: "เกี่ยวกับฉัน" },
  "profile.contactSarah": { en: "Contact Sarah", th: "ติดต่อ Sarah" },
  "profile.message": { en: "Message", th: "ส่งข้อความ" },
  "profile.book": { en: "Book a Lesson", th: "จองเรียน" },
  "profile.subjectsTeach": { en: "Subjects I Teach", th: "วิชาที่สอน" },
  "profile.experience": { en: "Experience & Education", th: "ประสบการณ์และการศึกษา" },
  "profile.teachingStyle": { en: "Teaching Style", th: "สไตล์การสอน" },
  "profile.reviews": { en: "Reviews", th: "รีวิว" },
  "profile.overview": { en: "Overview", th: "ภาพรวม" },
  "profile.schedule": { en: "Schedule", th: "ตารางเวลา" },

  // Auth
  "auth.welcome": { en: "Welcome Back!", th: "ยินดีต้อนรับกลับ!" },
  "auth.welcomeSub": { en: "Sign in to continue to TeachThrough", th: "เข้าสู่ระบบเพื่อใช้งาน TeachThrough" },
  "auth.email": { en: "Email", th: "อีเมล" },
  "auth.password": { en: "Password", th: "รหัสผ่าน" },
  "auth.emailPh": { en: "Enter your email", th: "กรอกอีเมลของคุณ" },
  "auth.passwordPh": { en: "Enter your password", th: "กรอกรหัสผ่านของคุณ" },
  "auth.forgot": { en: "Forgot Password?", th: "ลืมรหัสผ่าน?" },
  "auth.remember": { en: "Remember me", th: "จดจำฉัน" },
  "auth.signIn": { en: "Sign In", th: "เข้าสู่ระบบ" },
  "auth.noAccount": { en: "Don't have an account?", th: "ยังไม่มีบัญชี?" },
  "auth.haveAccount": { en: "Already have an account?", th: "มีบัญชีอยู่แล้ว?" },
  "auth.createAccount": { en: "Create Your Account", th: "สร้างบัญชีใหม่" },
  "auth.joinSub": { en: "Join TeachThrough today", th: "เข้าร่วม TeachThrough วันนี้" },
  "auth.fullName": { en: "Full Name", th: "ชื่อ-นามสกุล" },
  "auth.fullNamePh": { en: "Enter your full name", th: "กรอกชื่อ-นามสกุล" },
  "auth.createPw": { en: "Create a password", th: "สร้างรหัสผ่าน" },
  "auth.confirmPw": { en: "Confirm Password", th: "ยืนยันรหัสผ่าน" },
  "auth.reenterPw": { en: "Re-enter password", th: "กรอกรหัสผ่านอีกครั้ง" },
  "auth.agree": { en: "I agree to the", th: "ฉันยอมรับ" },
  "auth.tos": { en: "Terms of Service", th: "เงื่อนไขการใช้งาน" },
  "auth.and": { en: "and", th: "และ" },
  "auth.privacy": { en: "Privacy Policy", th: "นโยบายความเป็นส่วนตัว" },
  "auth.reset": { en: "Reset Your Password", th: "รีเซ็ตรหัสผ่าน" },
  "auth.resetSub": {
    en: "Enter your email and we'll send you a link to reset your password.",
    th: "กรอกอีเมลของคุณ เราจะส่งลิงก์รีเซ็ตรหัสผ่านให้",
  },
  "auth.sendReset": { en: "Send Reset Link", th: "ส่งลิงก์รีเซ็ต" },
  "auth.backToSignIn": { en: "Back to Sign In", th: "กลับสู่หน้าเข้าสู่ระบบ" },

  // Registration
  "reg.title": { en: "Apply as a Tutor", th: "สมัครเป็นติวเตอร์" },
  "reg.sub": {
    en: "Join our community of educators and start helping students learn and grow.",
    th: "เข้าร่วมกับกลุ่มนักการศึกษาของเรา และเริ่มต้นช่วยเหลือผู้เรียน",
  },
  "reg.saveContinue": { en: "Save & Continue", th: "บันทึกและไปต่อ" },
  "reg.back": { en: "Back", th: "ย้อนกลับ" },
  "reg.cancel": { en: "Cancel", th: "ยกเลิก" },
  "reg.submit": { en: "Submit Application", th: "ส่งใบสมัคร" },
  "reg.step1": { en: "Personal Information", th: "ข้อมูลส่วนตัว" },
  "reg.step2": { en: "Education & Experience", th: "การศึกษาและประสบการณ์" },
  "reg.step3": { en: "Subject Expertise", th: "ความเชี่ยวชาญในวิชา" },
  "reg.step4": { en: "Upload Certificates", th: "อัปโหลดเอกสาร" },
  "reg.step5": { en: "Verification Process", th: "ขั้นตอนตรวจสอบ" },

  // Registration - Step 1: Personal Information
  "reg.fullName": { en: "Full Name", th: "ชื่อ-นามสกุล" },
  "reg.fullNamePh": { en: "Enter your full name", th: "กรอกชื่อ-นามสกุล" },
  "reg.email": { en: "Email Address", th: "อีเมล" },
  "reg.emailPh": { en: "Enter your email", th: "กรอกอีเมลของคุณ" },
  "reg.phone": { en: "Phone Number", th: "เบอร์โทรศัพท์" },
  "reg.phonePh": { en: "Enter your phone number", th: "กรอกเบอร์โทรศัพท์" },
  "reg.country": { en: "Country", th: "ประเทศ" },
  "reg.countryPh": { en: "Select your country", th: "เลือกประเทศ" },
  "reg.profilePic": { en: "Profile Picture", th: "รูปโปรไฟล์" },
  "reg.clickUpload": { en: "Click to upload", th: "คลิกเพื่ออัปโหลด" },
  "reg.profileHint": {
    en: "or drag and drop · PNG, JPG up to 5MB",
    th: "หรือลากมาวาง · PNG, JPG ไม่เกิน 5MB",
  },
  "reg.country.us": { en: "United States", th: "สหรัฐอเมริกา" },
  "reg.country.th": { en: "Thailand", th: "ไทย" },
  "reg.country.uk": { en: "United Kingdom", th: "สหราชอาณาจักร" },
  "reg.country.sg": { en: "Singapore", th: "สิงคโปร์" },
  "reg.country.jp": { en: "Japan", th: "ญี่ปุ่น" },

  // Registration - Step 2: Education & Experience
  "reg.highestDegree": { en: "Highest Degree", th: "วุฒิการศึกษาสูงสุด" },
  "reg.highestDegreePh": { en: "Select your highest degree", th: "เลือกวุฒิการศึกษาสูงสุด" },
  "reg.degree.highschool": { en: "High School", th: "มัธยมปลาย" },
  "reg.degree.bachelor": { en: "Bachelor", th: "ปริญญาตรี" },
  "reg.degree.master": { en: "Master", th: "ปริญญาโท" },
  "reg.degree.phd": { en: "PhD", th: "ปริญญาเอก" },
  "reg.university": { en: "University / Institution", th: "มหาวิทยาลัย / สถาบัน" },
  "reg.universityPh": { en: "e.g. Stanford University", th: "เช่น มหาวิทยาลัยสแตนฟอร์ด" },
  "reg.field": { en: "Field of Study", th: "สาขาวิชา" },
  "reg.fieldPh": { en: "e.g. Mathematics", th: "เช่น คณิตศาสตร์" },
  "reg.yearsExp": { en: "Years of Experience", th: "จำนวนปีประสบการณ์" },
  "reg.selectRange": { en: "Select range", th: "เลือกช่วง" },
  "reg.bio": { en: "Brief Bio", th: "ประวัติโดยย่อ" },
  "reg.bioPh": {
    en: "Tell students about your teaching background and experience...",
    th: "เล่าให้นักเรียนฟังเกี่ยวกับภูมิหลังและประสบการณ์การสอนของคุณ...",
  },

  // Registration - Step 3: Subject Expertise
  "reg.subjectsTeach": { en: "Subjects You Teach", th: "วิชาที่คุณสอน" },
  "reg.hourlyRate": { en: "Hourly Rate (USD)", th: "ค่าสอนต่อชั่วโมง (USD)" },
  "reg.hourlyRatePh": { en: "e.g. 25", th: "เช่น 25" },
  "reg.teachingLevel": { en: "Teaching Level", th: "ระดับที่สอน" },
  "reg.selectLevel": { en: "Select level", th: "เลือกระดับ" },
  "reg.level.elementary": { en: "Elementary", th: "ประถมศึกษา" },
  "reg.level.middle": { en: "Middle School", th: "มัธยมต้น" },
  "reg.level.high": { en: "High School", th: "มัธยมปลาย" },
  "reg.level.university": { en: "University", th: "มหาวิทยาลัย" },
  "reg.level.adult": { en: "Adult", th: "ผู้ใหญ่" },
  "reg.teachingApproach": { en: "Teaching Approach", th: "แนวทางการสอน" },
  "reg.teachingApproachPh": {
    en: "Describe your teaching style and approach...",
    th: "อธิบายสไตล์และแนวทางการสอนของคุณ...",
  },

  // Registration - Availability
  "reg.availability": { en: "Weekly Availability", th: "เวลาที่สะดวกสอน (รายสัปดาห์)" },
  "reg.availabilityHint": {
    en: "Select the time slots when you're available to teach. You can update this anytime.",
    th: "เลือกช่วงเวลาที่คุณสะดวกสอน สามารถแก้ไขได้ตลอดเวลา",
  },
  "reg.availabilityNone": { en: "No time slots selected yet.", th: "ยังไม่ได้เลือกช่วงเวลา" },
  "reg.availabilitySelected": { en: "slots selected", th: "ช่วงเวลาที่เลือก" },
  "reg.day.mon": { en: "Monday", th: "จันทร์" },
  "reg.day.tue": { en: "Tuesday", th: "อังคาร" },
  "reg.day.wed": { en: "Wednesday", th: "พุธ" },
  "reg.day.thu": { en: "Thursday", th: "พฤหัสบดี" },
  "reg.day.fri": { en: "Friday", th: "ศุกร์" },
  "reg.day.sat": { en: "Saturday", th: "เสาร์" },
  "reg.day.sun": { en: "Sunday", th: "อาทิตย์" },
  "reg.slot.morning": { en: "Morning", th: "ช่วงเช้า" },
  "reg.slot.afternoon": { en: "Afternoon", th: "ช่วงบ่าย" },
  "reg.slot.evening": { en: "Evening", th: "ช่วงเย็น" },

  // Registration - Step 4: Upload Certificates
  "reg.govId": { en: "Government-issued ID", th: "บัตรประจำตัวที่ออกโดยรัฐ" },
  "reg.govIdHint": { en: "PNG, JPG, PDF up to 10MB", th: "PNG, JPG, PDF ไม่เกิน 10MB" },
  "reg.degreeCert": { en: "Degree Certificate", th: "ใบรับรองวุฒิการศึกษา" },
  "reg.degreeCertHint": { en: "PDF preferred · up to 10MB", th: "แนะนำ PDF · ไม่เกิน 10MB" },
  "reg.teachingCert": { en: "Teaching Certifications (optional)", th: "ใบรับรองการสอน (ไม่บังคับ)" },
  "reg.teachingCertHint": { en: "You can upload multiple files", th: "อัปโหลดได้หลายไฟล์" },

  // Registration - Step 5: Verification
  "reg.reviewTitle": { en: "Your application will be reviewed", th: "ใบสมัครของคุณจะถูกตรวจสอบ" },
  "reg.reviewText": {
    en: "Our team typically reviews applications within 2-3 business days. You'll receive an email once your account has been verified.",
    th: "ทีมงานของเรามักตรวจสอบใบสมัครภายใน 2-3 วันทำการ คุณจะได้รับอีเมลเมื่อบัญชีของคุณได้รับการยืนยัน",
  },
  "reg.completed": { en: "Completed", th: "เสร็จสิ้น" },
  "reg.confirmTerms": {
    en: "I confirm the information provided is accurate and agree to the platform's tutor terms.",
    th: "ฉันยืนยันว่าข้อมูลที่ให้ถูกต้องและยอมรับเงื่อนไขสำหรับติวเตอร์ของแพลตฟอร์ม",
  },

  // About
  "about.tag": { en: "About TeachThrough", th: "เกี่ยวกับ TeachThrough" },
  "about.heroTitle": {
    en: "Building a global community where every learner thrives",
    th: "สร้างชุมชนระดับโลกที่ผู้เรียนทุกคนเติบโตได้",
  },
  "about.heroSub": {
    en: "TeachThrough exists to make personalized education accessible to everyone. We believe great tutors change lives — and we're here to connect them with the students who need them most.",
    th: "TeachThrough มีไว้เพื่อให้การศึกษาเฉพาะบุคคลเข้าถึงได้สำหรับทุกคน เราเชื่อว่าติวเตอร์ที่ดีเปลี่ยนชีวิตได้ และเราอยู่ที่นี่เพื่อเชื่อมต่อพวกเขากับผู้เรียนที่ต้องการ",
  },
  "about.story": { en: "Our Story", th: "เรื่องราวของเรา" },
  "about.vision": { en: "Our Vision", th: "วิสัยทัศน์ของเรา" },
  "about.mission": { en: "Our Mission", th: "พันธกิจของเรา" },
  "about.impact": { en: "Our Impact", th: "ผลกระทบของเรา" },
  "about.awards": { en: "Our Awards", th: "รางวัลของเรา" },
  "about.partners": { en: "Our Partners", th: "พันธมิตรของเรา" },
  "about.contactCta": { en: "Want to partner with us?", th: "อยากร่วมเป็นพันธมิตรกับเรา?" },
  "about.contactCtaSub": {
    en: "We're always looking for organizations who share our mission. Get in touch and let's build something together.",
    th: "เรามองหาองค์กรที่มีพันธกิจร่วมกันเสมอ ติดต่อเราเพื่อสร้างสิ่งดีๆ ร่วมกัน",
  },
  "about.contactBtn": { en: "Contact Us", th: "ติดต่อเรา" },

  // About - Values
  "about.value1Title": { en: "Always Inspired", th: "มีแรงบันดาลใจเสมอ" },
  "about.value1Text": { en: "We connect learners with passionate tutors who spark curiosity and a love for learning.", th: "เราเชื่อมต่อผู้เรียนกับติวเตอร์ที่มีใจรัก ซึ่งจุดประกายความอยากรู้และความรักในการเรียนรู้" },
  "about.value2Title": { en: "Always Supported", th: "ได้รับการสนับสนุนเสมอ" },
  "about.value2Text": { en: "Every student gets a community that believes in their potential and helps them grow.", th: "ผู้เรียนทุกคนได้รับชุมชนที่เชื่อในศักยภาพและช่วยให้พวกเขาเติบโต" },
  "about.value3Title": { en: "Always Empowered", th: "เสริมพลังเสมอ" },
  "about.value3Text": { en: "We give tutors the tools to share their knowledge and reach students worldwide.", th: "เราให้เครื่องมือแก่ติวเตอร์เพื่อแบ่งปันความรู้และเข้าถึงนักเรียนทั่วโลก" },

  // About - Story
  "about.storyTitle": { en: "From a small idea to a movement for learning", th: "จากไอเดียเล็กๆ สู่การเคลื่อนไหวเพื่อการเรียนรู้" },
  "about.storyP1": {
    en: "TutorFirst started in 2020 with a simple belief: every student deserves a tutor who truly believes in them. What began as a small network of educators has grown into a global community of 10,000+ tutors and 150,000+ learners.",
    th: "TeachThrough เริ่มต้นในปี 2020 ด้วยความเชื่อง่ายๆ ว่าผู้เรียนทุกคนสมควรได้ติวเตอร์ที่เชื่อในตัวพวกเขาอย่างแท้จริง สิ่งที่เริ่มต้นจากเครือข่ายนักการศึกษาเล็กๆ ได้เติบโตเป็นชุมชนระดับโลกที่มีติวเตอร์มากกว่า 10,000 คนและผู้เรียนมากกว่า 150,000 คน"
  },
  "about.storyP2": {
    en: "We've built the platform we wished existed when we were students — one where finding a tutor feels personal, scheduling is effortless, and every lesson moves you closer to your goals.",
    th: "เราสร้างแพลตฟอร์มที่เราหวังว่าจะมีตอนที่เราเป็นนักเรียน — แพลตฟอร์มที่การหาติวเตอร์รู้สึกเป็นส่วนตัว การจองเรียนง่ายดาย และทุกบทเรียนนำคุณเข้าใกล้เป้าหมายมากขึ้น"
  },

  // About - Vision
  "about.visionTitle": { en: "Inspire learners. Change the future.", th: "สร้างแรงบันดาลใจให้ผู้เรียน เปลี่ยนแปลงอนาคต" },
  "about.visionText": {
    en: "We envision a world where geography, income, or background never decide who gets a great education. Tutoring should be a right, not a luxury — and we're building the tools to make that real.",
    th: "เรามองเห็นโลกที่ภูมิศาสตร์ รายได้ หรือพื้นฐานไม่เคยเป็นตัวกำหนดว่าใครจะได้รับการศึกษาที่ดี การสอนพิเศษควรเป็นสิทธิ์ ไม่ใช่ความหรูหรา — และเรากำลังสร้างเครื่องมือเพื่อทำให้มันเป็นจริง"
  },
  "about.visionImpact": { en: "Long-term impact", th: "ผลกระทบระยะยาว" },
  "about.visionImpactSub": { en: "Investing in learners and tutors alike", th: "ลงทุนในผู้เรียนและติวเตอร์อย่างเท่าเทียม" },

  // About - Mission
  "about.missionTitle": { en: "Three pillars guiding everything we do", th: "สามเสาหลักที่นำทางทุกสิ่งที่เราทำ" },
  "about.mission1Title": { en: "Support", th: "สนับสนุน" },
  "about.mission1Text": { en: "Provide accessible, high-quality tutoring to every learner regardless of background.", th: "มอบการสอนพิเศษคุณภาพสูงที่เข้าถึงได้แก่ผู้เรียนทุกคนไม่ว่าพื้นฐานใด" },
  "about.mission2Title": { en: "Strengthen", th: "เสริมสร้าง" },
  "about.mission2Text": { en: "Equip educators with platforms and resources to do their best teaching.", th: "จัดเตรียมแพลตฟอร์มและทรัพยากรให้นักการศึกษาเพื่อสอนได้ดีที่สุด" },
  "about.mission3Title": { en: "Scaling", th: "ขยายขอบเขต" },
  "about.mission3Text": { en: "Grow a global community where learning has no borders or limits.", th: "เติบโตเป็นชุมชนระดับโลกที่การเรียนรู้ไม่มีพรมแดนหรือข้อจำกัด" },

  // About - Impact
  "about.impactTitle": { en: "The numbers behind the community", th: "ตัวเลขที่อยู่เบื้องหลังชุมชน" },
  "about.impact1": { en: "Expert Tutors", th: "ติวเตอร์ผู้เชี่ยวชาญ" },
  "about.impact2": { en: "Active Students", th: "นักเรียนที่ใช้งาน" },
  "about.impact3": { en: "Subjects Offered", th: "วิชาที่นำเสนอ" },
  "about.impact4": { en: "Countries Reached", th: "ประเทศที่เข้าถึง" },

  // About - Testimonials
  "about.test1Name": { en: "Aisha P.", th: "ไอชา พี." },
  "about.test1Role": { en: "University Student", th: "นักศึกษามหาวิทยาลัย" },
  "about.test1Text": {
    en: "TutorFirst helped me find a tutor who actually understands how I learn. My grades have never been better.",
    th: "TeachThrough ช่วยให้ฉันพบติวเตอร์ที่เข้าใจจริงๆ ว่าฉันเรียนรู้อย่างไร เกรดของฉันไม่เคยดีขนาดนี้มาก่อน"
  },
  "about.test2Name": { en: "Daniel R.", th: "แดเนียล อาร์." },
  "about.test2Role": { en: "Mathematics Tutor", th: "ติวเตอร์คณิตศาสตร์" },
  "about.test2Text": {
    en: "Teaching on TutorFirst lets me reach students from around the world while building a sustainable career.",
    th: "การสอนบน TeachThrough ทำให้ฉันเข้าถึงนักเรียนจากทั่วโลกพร้อมกับสร้างอาชีพที่ยั่งยืน"
  },
  "about.test3Name": { en: "Maya K.", th: "มายา เค." },
  "about.test3Role": { en: "High School Student", th: "นักเรียนมัธยม" },
  "about.test3Text": {
    en: "Booking lessons is so easy and the tutors here genuinely care. I look forward to every session.",
    th: "การจองเรียนง่ายมากและติวเตอร์ที่นี่ใส่ใจจริงๆ ฉันตั้งตารอทุกคาบเรียน"
  },

  // About - Awards
  "about.awardsTitle": { en: "Recognized for the work we love", th: "ได้รับการยอมรับจากงานที่เรารัก" },
  "about.award1": { en: "Top 100, EdTech Companies 2024", th: "100 อันดับแรก บริษัท EdTech ปี 2024" },
  "about.award2": { en: "Innovation Award, Asia Learning Summit 2023", th: "รางวัลนวัตกรรม งาน Asia Learning Summit 2023" },
  "about.award3": { en: "Best Education Platform, Tech Excellence 2022", th: "แพลตฟอร์มการศึกษาที่ดีที่สุด Tech Excellence 2022" },
  "about.award4": { en: "Top 10 Most Impactful Startups, 2021", th: "10 อันดับ Startups ที่มีผลกระทบมากที่สุด ปี 2021" },

  // About - Partners
  "about.partnersTitle": { en: "Trusted by leading organizations", th: "ได้รับความไว้วางใจจากองค์กรชั้นนำ" },

  // Contact
  "contact.tag": { en: "Contact Us", th: "ติดต่อเรา" },
  "contact.title": { en: "We'd love to hear from you", th: "เรายินดีรับฟังจากคุณ" },
  "contact.sub": {
    en: "Questions, feedback, partnerships, or just want to say hello — our team is ready to help.",
    th: "สอบถาม ฟีดแบ็ก ความร่วมมือ หรือทักทายเฉยๆ ทีมงานพร้อมช่วยเหลือ",
  },
  "contact.send": { en: "Send us a message", th: "ส่งข้อความถึงเรา" },
  "contact.sendBtn": { en: "Send Message", th: "ส่งข้อความ" },
  "contact.firstName": { en: "First Name", th: "ชื่อ" },
  "contact.lastName": { en: "Last Name", th: "นามสกุล" },
  "contact.subject": { en: "Subject", th: "หัวข้อ" },
  "contact.message": { en: "Message", th: "ข้อความ" },
  "contact.follow": { en: "Follow Us", th: "ติดตามเรา" },
  "contact.faq": { en: "Frequently asked questions", th: "คำถามที่พบบ่อย" },

  // Contact - Channels
  "contact.ch1Title": { en: "Email Us", th: "ส่งอีเมลถึงเรา" },
  "contact.ch1Value": { en: "support@tutorfirst.com", th: "support@teachthrough.com" },
  "contact.ch1Sub": { en: "We reply within 24 hours", th: "เราตอบกลับภายใน 24 ชั่วโมง" },
  "contact.ch2Title": { en: "Call Us", th: "โทรหาเรา" },
  "contact.ch2Value": { en: "+1 (555) 123-4567", th: "+66 (0) 2-123-4567" },
  "contact.ch2Sub": { en: "Mon – Fri, 9am – 6pm", th: "จันทร์ – ศุกร์, 9:00 – 18:00 น." },
  "contact.ch3Title": { en: "Visit Us", th: "มาพบเรา" },
  "contact.ch3Value": { en: "123 Learning Lane, Suite 400", th: "123 Learning Lane, Suite 400" },
  "contact.ch3Sub": { en: "New York, NY 10001", th: "กรุงเทพฯ 10110" },
  "contact.ch4Title": { en: "Office Hours", th: "เวลาทำการ" },
  "contact.ch4Value": { en: "Monday – Friday", th: "จันทร์ – ศุกร์" },
  "contact.ch4Sub": { en: "9:00 AM – 6:00 PM (EST)", th: "9:00 – 18:00 น." },

  // Contact - Form
  "contact.formSub": { en: "Fill out the form and we'll be in touch within one business day.", th: "กรอกแบบฟอร์มและเราจะติดต่อกลับภายในหนึ่งวันทำการ" },
  "contact.ph1": { en: "Jane", th: "สมชาย" },
  "contact.ph2": { en: "Doe", th: "ใจดี" },
  "contact.emailPh": { en: "jane@example.com", th: "somchai@example.com" },
  "contact.chooseTopicPh": { en: "Choose a topic", th: "เลือกหัวข้อ" },
  "contact.opt1": { en: "General Inquiry", th: "สอบถามทั่วไป" },
  "contact.opt2": { en: "Support", th: "ฝ่ายสนับสนุน" },
  "contact.opt3": { en: "Partnership", th: "ความร่วมมือ" },
  "contact.opt4": { en: "Press", th: "สื่อมวลชน" },
  "contact.msgPh": { en: "Tell us how we can help...", th: "บอกเราว่าเราช่วยอะไรได้บ้าง..." },

  // Contact - Side
  "contact.hq": { en: "TutorFirst HQ", th: "สำนักงานใหญ่ TeachThrough" },
  "contact.hqAddr": { en: "123 Learning Lane, New York", th: "123 Learning Lane, กรุงเทพฯ" },
  "contact.followSub": { en: "Stay updated on the latest features and stories.", th: "รับข้อมูลล่าสุดเกี่ยวกับฟีเจอร์และเรื่องราวใหม่ๆ" },
  "contact.urgentTitle": { en: "Need urgent help?", th: "ต้องการความช่วยเหลือด่วน?" },
  "contact.urgentSub": { en: "Our support team is available 7 days a week for active members.", th: "ทีมสนับสนุนของเราพร้อมให้บริการ 7 วันต่อสัปดาห์สำหรับสมาชิก" },
  "contact.helpBtn": { en: "Open Help Center", th: "เปิดศูนย์ช่วยเหลือ" },

  // Contact - FAQ
  "contact.faq1Q": { en: "How do I find the right tutor?", th: "ฉันจะหาติวเตอร์ที่เหมาะสมได้อย่างไร?" },
  "contact.faq1A": {
    en: "Use our Find Tutors page to filter by subject, price, availability, and ratings. You can also message tutors before booking.",
    th: "ใช้หน้าค้นหาติวเตอร์ของเราเพื่อกรองตามวิชา ราคา เวลาว่าง และคะแนน คุณยังสามารถส่งข้อความหาติวเตอร์ก่อนจองได้"
  },
  "contact.faq2Q": { en: "How can I become a tutor on TutorFirst?", th: "ฉันจะเป็นติวเตอร์บน TeachThrough ได้อย่างไร?" },
  "contact.faq2A": {
    en: "Click 'Apply Now' on our homepage or visit the Teach on Platform page to start the application process.",
    th: "คลิก 'สมัครเลย' ที่หน้าแรกของเรา หรือไปที่หน้าสอนบนแพลตฟอร์มเพื่อเริ่มกระบวนการสมัคร"
  },
  "contact.faq3Q": { en: "What payment methods are supported?", th: "รองรับวิธีการชำระเงินอะไรบ้าง?" },
  "contact.faq3A": {
    en: "We accept all major credit cards, PayPal, and bank transfers in most countries.",
    th: "เรารับบัตรเครดิตหลักทุกประเภท PayPal และการโอนเงินผ่านธนาคารในหลายประเทศ"
  },

  // Common actions
  "nav.logout": { en: "Log Out", th: "ออกจากระบบ" },
  "nav.dashboard": { en: "Dashboard", th: "แดชบอร์ด" },
  "common.viewAll": { en: "View all", th: "ดูทั้งหมด" },
  "common.save": { en: "Save", th: "บันทึก" },
  "common.saveChanges": { en: "Save Changes", th: "บันทึกการเปลี่ยนแปลง" },
  "common.cancel": { en: "Cancel", th: "ยกเลิก" },
  "common.confirm": { en: "Confirm", th: "ยืนยัน" },
  "common.continue": { en: "Continue", th: "ดำเนินการต่อ" },
  "common.back": { en: "Back", th: "ย้อนกลับ" },
  "common.next": { en: "Next", th: "ถัดไป" },
  "common.search": { en: "Search", th: "ค้นหา" },
  "common.filters": { en: "Filters", th: "ตัวกรอง" },
  "common.message": { en: "Message", th: "ส่งข้อความ" },
  "common.status": { en: "Status", th: "สถานะ" },
  "common.date": { en: "Date", th: "วันที่" },
  "common.amount": { en: "Amount", th: "จำนวนเงิน" },
  "common.actions": { en: "Actions", th: "การจัดการ" },
  "common.upcoming": { en: "Upcoming", th: "กำลังจะถึง" },
  "common.completed": { en: "Completed", th: "เสร็จสิ้น" },
  "common.cancelled": { en: "Cancelled", th: "ยกเลิกแล้ว" },
  "common.pending": { en: "Pending", th: "รอดำเนินการ" },
  "common.approved": { en: "Approved", th: "อนุมัติแล้ว" },
  "common.rejected": { en: "Rejected", th: "ปฏิเสธ" },
  "common.paid": { en: "Paid", th: "ชำระแล้ว" },
  "common.hour": { en: "/hour", th: "/ชั่วโมง" },
  "common.reschedule": { en: "Reschedule", th: "เลื่อนเวลา" },
  "common.join": { en: "Join Lesson", th: "เข้าเรียน" },
  "common.view": { en: "View", th: "ดู" },
  "common.markAllRead": { en: "Mark all as read", th: "ทำเครื่องหมายว่าอ่านแล้วทั้งหมด" },

  // Sidebar
  "side.dashboard": { en: "Dashboard", th: "แดชบอร์ด" },
  "side.overview": { en: "Overview", th: "ภาพรวม" },
  "side.findTutors": { en: "Find Tutors", th: "ค้นหาติวเตอร์" },
  "side.bookings": { en: "Bookings", th: "การจอง" },
  "side.messages": { en: "Messages", th: "ข้อความ" },
  "side.saved": { en: "Saved Tutors", th: "ติวเตอร์ที่บันทึก" },
  "side.payments": { en: "Payments", th: "การชำระเงิน" },
  "side.earnings": { en: "Earnings", th: "รายได้" },
  "side.transactions": { en: "Transactions", th: "ธุรกรรม" },
  "side.reviews": { en: "Reviews", th: "รีวิว" },
  "side.notifications": { en: "Notifications", th: "การแจ้งเตือน" },
  "side.settings": { en: "Settings", th: "ตั้งค่า" },
  "side.availability": { en: "Availability", th: "ตารางเวลา" },
  "side.verification": { en: "Verification", th: "การยืนยันตัวตน" },
  "side.verifications": { en: "Verifications", th: "คำขอยืนยัน" },
  "side.tutors": { en: "Tutors", th: "ติวเตอร์" },
  "side.roleLabel.student": { en: "Student workspace", th: "พื้นที่นักเรียน" },
  "side.roleLabel.tutor": { en: "Tutor workspace", th: "พื้นที่ติวเตอร์" },
  "side.roleLabel.admin": { en: "Admin console", th: "คอนโซลผู้ดูแล" },

  // Auth - role selection
  "auth.roleQuestion": { en: "I want to join as", th: "ฉันต้องการเข้าร่วมในฐานะ" },
  "auth.roleStudent": { en: "Student", th: "นักเรียน" },
  "auth.roleStudentSub": { en: "Find tutors & book lessons", th: "หาติวเตอร์และจองเรียน" },
  "auth.roleTutor": { en: "Tutor", th: "ติวเตอร์" },
  "auth.roleTutorSub": { en: "Teach & earn income", th: "สอนและสร้างรายได้" },
  "auth.demoNote": { en: "Demo mode — use the buttons below to explore any role instantly.", th: "โหมดทดลอง — ใช้ปุ่มด้านล่างเพื่อสำรวจแต่ละ role ได้ทันที" },
  "auth.quickStudent": { en: "Enter as Student", th: "เข้าใช้เป็นนักเรียน" },
  "auth.quickTutor": { en: "Enter as Tutor", th: "เข้าใช้เป็นติวเตอร์" },
  "auth.quickAdmin": { en: "Enter as Admin", th: "เข้าใช้เป็นแอดมิน" },

  // Student Dashboard
  "sdash.title": { en: "Welcome back", th: "ยินดีต้อนรับกลับ" },
  "sdash.sub": { en: "Here's what's happening with your learning", th: "สรุปความคืบหน้าการเรียนของคุณ" },
  "sdash.upcomingLessons": { en: "Upcoming Lessons", th: "คลาสที่กำลังจะถึง" },
  "sdash.hoursLearned": { en: "Hours Learned", th: "ชั่วโมงที่เรียน" },
  "sdash.activeTutors": { en: "Active Tutors", th: "ติวเตอร์ที่กำลังเรียนด้วย" },
  "sdash.avgRating": { en: "Avg. Rating Given", th: "คะแนนเฉลี่ยที่ให้" },
  "sdash.nextLesson": { en: "Your Next Lesson", th: "คลาสถัดไปของคุณ" },
  "sdash.recommended": { en: "Recommended for you", th: "แนะนำสำหรับคุณ" },
  "sdash.continueLearning": { en: "Continue Learning", th: "เรียนต่อ" },

  // Tutor Dashboard
  "tdash.title": { en: "Tutor Dashboard", th: "แดชบอร์ดติวเตอร์" },
  "tdash.sub": { en: "Track your lessons, earnings, and students", th: "ติดตามคลาส รายได้ และนักเรียนของคุณ" },
  "tdash.earnings": { en: "This Month's Earnings", th: "รายได้เดือนนี้" },
  "tdash.lessons": { en: "Lessons Taught", th: "คลาสที่สอนแล้ว" },
  "tdash.students": { en: "Active Students", th: "นักเรียนที่ใช้งาน" },
  "tdash.rating": { en: "Your Rating", th: "คะแนนของคุณ" },
  "tdash.schedule": { en: "Today's Schedule", th: "ตารางวันนี้" },
  "tdash.earningsTrend": { en: "Earnings Trend", th: "แนวโน้มรายได้" },
  "tdash.requests": { en: "Booking Requests", th: "คำขอจอง" },
  "tdash.accept": { en: "Accept", th: "ตอบรับ" },
  "tdash.decline": { en: "Decline", th: "ปฏิเสธ" },

  // Admin Dashboard
  "adash.title": { en: "Admin Overview", th: "ภาพรวมผู้ดูแลระบบ" },
  "adash.sub": { en: "Monitor platform health and activity", th: "ติดตามสุขภาพและกิจกรรมของแพลตฟอร์ม" },
  "adash.totalUsers": { en: "Total Users", th: "ผู้ใช้ทั้งหมด" },
  "adash.totalTutors": { en: "Active Tutors", th: "ติวเตอร์ที่ใช้งาน" },
  "adash.revenue": { en: "Platform Revenue", th: "รายได้แพลตฟอร์ม" },
  "adash.pendingV": { en: "Pending Verifications", th: "รอยืนยันตัวตน" },
  "adash.growth": { en: "User Growth", th: "การเติบโตของผู้ใช้" },
  "adash.recentSignups": { en: "Recent Signups", th: "สมาชิกใหม่ล่าสุด" },
  "adash.reports": { en: "Open Reports", th: "รายงานที่ค้างอยู่" },

  // Booking flow
  "booking.title": { en: "Book a Lesson", th: "จองคลาสเรียน" },
  "booking.step1": { en: "Select Subject", th: "เลือกวิชา" },
  "booking.step2": { en: "Pick Date & Time", th: "เลือกวันและเวลา" },
  "booking.step3": { en: "Lesson Details", th: "รายละเอียดคลาส" },
  "booking.step4": { en: "Review & Pay", th: "ตรวจสอบและชำระเงิน" },
  "booking.chooseSubject": { en: "Which subject would you like to learn?", th: "คุณต้องการเรียนวิชาอะไร?" },
  "booking.lessonLength": { en: "Lesson Length", th: "ความยาวคลาส" },
  "booking.selectDate": { en: "Select a date", th: "เลือกวันที่" },
  "booking.selectTime": { en: "Available times", th: "เวลาที่ว่าง" },
  "booking.notes": { en: "Notes for your tutor (optional)", th: "หมายเหตุถึงติวเตอร์ (ไม่บังคับ)" },
  "booking.notesPh": { en: "What would you like to focus on?", th: "อยากเน้นเรื่องอะไรเป็นพิเศษ?" },
  "booking.summary": { en: "Booking Summary", th: "สรุปการจอง" },
  "booking.tutor": { en: "Tutor", th: "ติวเตอร์" },
  "booking.subject": { en: "Subject", th: "วิชา" },
  "booking.datetime": { en: "Date & Time", th: "วันและเวลา" },
  "booking.duration": { en: "Duration", th: "ระยะเวลา" },
  "booking.total": { en: "Total", th: "รวมทั้งหมด" },
  "booking.confirmPay": { en: "Confirm & Pay", th: "ยืนยันและชำระเงิน" },
  "booking.min": { en: "min", th: "นาที" },

  // Booking history
  "bhist.title": { en: "My Bookings", th: "การจองของฉัน" },
  "bhist.sub": { en: "Manage your upcoming and past lessons", th: "จัดการคลาสที่กำลังจะถึงและที่ผ่านมา" },
  "bhist.all": { en: "All", th: "ทั้งหมด" },
  "bhist.empty": { en: "No bookings yet", th: "ยังไม่มีการจอง" },
  "bhist.emptySub": { en: "Book your first lesson to get started.", th: "เริ่มต้นด้วยการจองคลาสแรกของคุณ" },

  // Messages
  "msg.title": { en: "Messages", th: "ข้อความ" },
  "msg.searchPh": { en: "Search conversations...", th: "ค้นหาการสนทนา..." },
  "msg.typePh": { en: "Type a message...", th: "พิมพ์ข้อความ..." },
  "msg.send": { en: "Send", th: "ส่ง" },
  "msg.online": { en: "Online", th: "ออนไลน์" },
  "msg.selectConvo": { en: "Select a conversation to start chatting", th: "เลือกการสนทนาเพื่อเริ่มแชท" },
  "msg.today": { en: "Today", th: "วันนี้" },

  // Saved tutors
  "saved.title": { en: "Saved Tutors", th: "ติวเตอร์ที่บันทึก" },
  "saved.sub": { en: "Your shortlisted tutors", th: "รายชื่อติวเตอร์ที่คุณสนใจ" },
  "saved.empty": { en: "No saved tutors yet", th: "ยังไม่มีติวเตอร์ที่บันทึก" },
  "saved.emptySub": { en: "Tap the heart on any tutor to save them here.", th: "แตะรูปหัวใจที่ติวเตอร์เพื่อบันทึกไว้ที่นี่" },
  "saved.book": { en: "Book", th: "จอง" },

  // Availability calendar
  "cal.title": { en: "Availability Calendar", th: "ปฏิทินเวลาว่าง" },
  "cal.sub": { en: "Set the hours you're available to teach", th: "กำหนดเวลาที่คุณสะดวกสอน" },
  "cal.save": { en: "Save Availability", th: "บันทึกเวลาว่าง" },
  "cal.selected": { en: "hours selected", th: "ชั่วโมงที่เลือก" },
  "cal.legend": { en: "Click a slot to toggle availability", th: "คลิกช่องเพื่อเปิด/ปิดเวลาว่าง" },

  // Payment checkout
  "pay.title": { en: "Checkout", th: "ชำระเงิน" },
  "pay.method": { en: "Payment Method", th: "วิธีชำระเงิน" },
  "pay.card": { en: "Credit / Debit Card", th: "บัตรเครดิต / เดบิต" },
  "pay.cardNumber": { en: "Card Number", th: "หมายเลขบัตร" },
  "pay.expiry": { en: "Expiry", th: "วันหมดอายุ" },
  "pay.cvc": { en: "CVC", th: "รหัส CVC" },
  "pay.nameOnCard": { en: "Name on Card", th: "ชื่อบนบัตร" },
  "pay.orderSummary": { en: "Order Summary", th: "สรุปคำสั่งซื้อ" },
  "pay.subtotal": { en: "Subtotal", th: "ยอดรวมย่อย" },
  "pay.serviceFee": { en: "Service Fee", th: "ค่าบริการ" },
  "pay.payNow": { en: "Pay Now", th: "ชำระเงิน" },
  "pay.secure": { en: "Payments are secure and encrypted", th: "การชำระเงินปลอดภัยและเข้ารหัส" },
  "pay.success": { en: "Payment Successful!", th: "ชำระเงินสำเร็จ!" },
  "pay.successSub": { en: "Your lesson is booked. A confirmation has been sent to your email.", th: "จองคลาสเรียบร้อย ระบบได้ส่งอีเมลยืนยันให้คุณแล้ว" },
  "pay.viewBookings": { en: "View My Bookings", th: "ดูการจองของฉัน" },

  // Payment history
  "phist.title": { en: "Payment History", th: "ประวัติการชำระเงิน" },
  "phist.subStudent": { en: "Your past transactions and receipts", th: "ธุรกรรมและใบเสร็จที่ผ่านมา" },
  "phist.subTutor": { en: "Your earnings and payouts", th: "รายได้และการจ่ายเงินของคุณ" },
  "phist.totalSpent": { en: "Total Spent", th: "ยอดใช้จ่ายรวม" },
  "phist.totalEarned": { en: "Total Earned", th: "รายได้รวม" },
  "phist.thisMonth": { en: "This Month", th: "เดือนนี้" },
  "phist.receipt": { en: "Receipt", th: "ใบเสร็จ" },
  "phist.description": { en: "Description", th: "รายการ" },

  // Notifications
  "notif.title": { en: "Notifications", th: "การแจ้งเตือน" },
  "notif.empty": { en: "You're all caught up", th: "คุณอ่านครบทุกรายการแล้ว" },
  "notif.new": { en: "New", th: "ใหม่" },

  // Account settings
  "set.title": { en: "Account Settings", th: "ตั้งค่าบัญชี" },
  "set.profile": { en: "Profile", th: "โปรไฟล์" },
  "set.security": { en: "Security", th: "ความปลอดภัย" },
  "set.notifs": { en: "Notifications", th: "การแจ้งเตือน" },
  "set.billing": { en: "Billing", th: "การเรียกเก็บเงิน" },
  "set.displayName": { en: "Display Name", th: "ชื่อที่แสดง" },
  "set.bio": { en: "Bio", th: "ประวัติโดยย่อ" },
  "set.timezone": { en: "Time Zone", th: "เขตเวลา" },
  "set.language": { en: "Preferred Language", th: "ภาษาที่ต้องการ" },
  "set.changePw": { en: "Change Password", th: "เปลี่ยนรหัสผ่าน" },
  "set.currentPw": { en: "Current Password", th: "รหัสผ่านปัจจุบัน" },
  "set.newPw": { en: "New Password", th: "รหัสผ่านใหม่" },
  "set.twoFa": { en: "Two-Factor Authentication", th: "การยืนยันตัวตนสองชั้น" },
  "set.twoFaSub": { en: "Add an extra layer of security to your account", th: "เพิ่มความปลอดภัยอีกชั้นให้บัญชีของคุณ" },
  "set.emailNotifs": { en: "Email notifications", th: "แจ้งเตือนทางอีเมล" },
  "set.pushNotifs": { en: "Push notifications", th: "แจ้งเตือนแบบพุช" },
  "set.marketing": { en: "Marketing emails", th: "อีเมลการตลาด" },
  "set.dangerZone": { en: "Danger Zone", th: "โซนอันตราย" },
  "set.deleteAccount": { en: "Delete Account", th: "ลบบัญชี" },

  // Reviews
  "rev.title": { en: "Reviews & Ratings", th: "รีวิวและคะแนน" },
  "rev.subStudent": { en: "Reviews you've written", th: "รีวิวที่คุณเขียน" },
  "rev.subTutor": { en: "What your students say", th: "เสียงจากนักเรียนของคุณ" },
  "rev.writeTitle": { en: "Write a Review", th: "เขียนรีวิว" },
  "rev.yourRating": { en: "Your Rating", th: "คะแนนของคุณ" },
  "rev.yourReview": { en: "Your Review", th: "รีวิวของคุณ" },
  "rev.reviewPh": { en: "Share your experience with this tutor...", th: "แบ่งปันประสบการณ์กับติวเตอร์คนนี้..." },
  "rev.submit": { en: "Submit Review", th: "ส่งรีวิว" },
  "rev.average": { en: "Average Rating", th: "คะแนนเฉลี่ย" },
  "rev.basedOn": { en: "based on", th: "จาก" },
  "rev.reviews": { en: "reviews", th: "รีวิว" },

  // Tutor verification
  "verif.title": { en: "Tutor Verification", th: "การยืนยันตัวตนติวเตอร์" },
  "verif.subTutor": { en: "Complete these steps to get your verified badge", th: "ทำตามขั้นตอนเพื่อรับป้ายยืนยันตัวตน" },
  "verif.subAdmin": { en: "Review and approve tutor verification requests", th: "ตรวจสอบและอนุมัติคำขอยืนยันตัวตนติวเตอร์" },
  "verif.identity": { en: "Identity Verification", th: "ยืนยันตัวตน" },
  "verif.identitySub": { en: "Government-issued ID", th: "บัตรประชาชนหรือเอกสารราชการ" },
  "verif.education": { en: "Education Credentials", th: "วุฒิการศึกษา" },
  "verif.educationSub": { en: "Degree or certificate", th: "ปริญญาหรือใบรับรอง" },
  "verif.background": { en: "Background Check", th: "ตรวจสอบประวัติ" },
  "verif.backgroundSub": { en: "Optional but recommended", th: "ไม่บังคับแต่แนะนำ" },
  "verif.videoIntro": { en: "Video Introduction", th: "วิดีโอแนะนำตัว" },
  "verif.videoSub": { en: "A short intro builds trust", th: "วิดีโอสั้นๆ ช่วยสร้างความน่าเชื่อถือ" },
  "verif.verified": { en: "Verified", th: "ยืนยันแล้ว" },
  "verif.underReview": { en: "Under Review", th: "กำลังตรวจสอบ" },
  "verif.notStarted": { en: "Not Started", th: "ยังไม่เริ่ม" },
  "verif.upload": { en: "Upload", th: "อัปโหลด" },
  "verif.queue": { en: "Verification Queue", th: "คิวรอตรวจสอบ" },
  "verif.review": { en: "Review", th: "ตรวจสอบ" },
  "verif.approve": { en: "Approve", th: "อนุมัติ" },
  "verif.reject": { en: "Reject", th: "ปฏิเสธ" },

  // Advanced search
  "adv.title": { en: "Advanced Tutor Search", th: "ค้นหาติวเตอร์ขั้นสูง" },
  "adv.sub": { en: "Fine-tune your search with detailed filters", th: "ปรับแต่งการค้นหาด้วยตัวกรองแบบละเอียด" },
  "adv.keyword": { en: "Keyword", th: "คำค้นหา" },
  "adv.priceRange": { en: "Price Range", th: "ช่วงราคา" },
  "adv.minRating": { en: "Minimum Rating", th: "คะแนนขั้นต่ำ" },
  "adv.lessonMode": { en: "Lesson Mode", th: "รูปแบบการเรียน" },
  "adv.online": { en: "Online", th: "ออนไลน์" },
  "adv.inPerson": { en: "In-person", th: "พบตัว" },
  "adv.langSpoken": { en: "Languages Spoken", th: "ภาษาที่สื่อสารได้" },
  "adv.experience": { en: "Experience Level", th: "ระดับประสบการณ์" },
  "adv.apply": { en: "Apply Filters", th: "ใช้ตัวกรอง" },
  "adv.reset": { en: "Reset", th: "รีเซ็ต" },
  "adv.results": { en: "matching tutors", th: "ติวเตอร์ที่ตรงกัน" },

  // AI recommendation
  "ai.title": { en: "AI Tutor Recommendation", th: "แนะนำติวเตอร์ด้วย AI" },
  "ai.sub": { en: "Answer a few questions and we'll match you with the perfect tutor", th: "ตอบคำถามสั้นๆ แล้วเราจะจับคู่ติวเตอร์ที่ใช่ให้คุณ" },
  "ai.q1": { en: "What do you want to learn?", th: "คุณอยากเรียนอะไร?" },
  "ai.q2": { en: "What's your current level?", th: "ระดับปัจจุบันของคุณ?" },
  "ai.q3": { en: "What's your goal?", th: "เป้าหมายของคุณคืออะไร?" },
  "ai.q4": { en: "Preferred budget per hour", th: "งบต่อชั่วโมงที่ต้องการ" },
  "ai.levelBeginner": { en: "Beginner", th: "เริ่มต้น" },
  "ai.levelIntermediate": { en: "Intermediate", th: "ปานกลาง" },
  "ai.levelAdvanced": { en: "Advanced", th: "ขั้นสูง" },
  "ai.goalExam": { en: "Exam prep", th: "เตรียมสอบ" },
  "ai.goalConversation": { en: "Conversation", th: "การสนทนา" },
  "ai.goalCareer": { en: "Career growth", th: "ความก้าวหน้าในอาชีพ" },
  "ai.goalHobby": { en: "Hobby", th: "งานอดิเรก" },
  "ai.getMatches": { en: "Get My Matches", th: "ดูผลการจับคู่" },
  "ai.matchesTitle": { en: "Your Top Matches", th: "ติวเตอร์ที่จับคู่ให้คุณ" },
  "ai.matchScore": { en: "match", th: "ตรงกัน" },
  "ai.startOver": { en: "Start Over", th: "เริ่มใหม่" },
  "ai.thinking": { en: "Analyzing your preferences...", th: "กำลังวิเคราะห์ความต้องการของคุณ..." },

  // FAQ
  "faq.title": { en: "Frequently Asked Questions", th: "คำถามที่พบบ่อย" },
  "faq.sub": { en: "Everything you need to know about TeachThrough", th: "ทุกสิ่งที่คุณควรรู้เกี่ยวกับ TeachThrough" },
  "faq.searchPh": { en: "Search questions...", th: "ค้นหาคำถาม..." },
  "faq.catGeneral": { en: "General", th: "ทั่วไป" },
  "faq.catBooking": { en: "Booking", th: "การจอง" },
  "faq.catPayments": { en: "Payments", th: "การชำระเงิน" },
  "faq.catTutors": { en: "For Tutors", th: "สำหรับติวเตอร์" },
  "faq.stillTitle": { en: "Still have questions?", th: "ยังมีคำถามอยู่ใช่ไหม?" },
  "faq.stillSub": { en: "Our support team is here to help.", th: "ทีมสนับสนุนของเราพร้อมช่วยเหลือ" },

  // Blog
  "blog.title": { en: "TeachThrough Blog", th: "บล็อก TeachThrough" },
  "blog.sub": { en: "Learning tips, tutor stories, and platform news", th: "เคล็ดลับการเรียน เรื่องราวติวเตอร์ และข่าวสาร" },
  "blog.featured": { en: "Featured", th: "แนะนำ" },
  "blog.readMore": { en: "Read more", th: "อ่านต่อ" },
  "blog.allPosts": { en: "All Posts", th: "บทความทั้งหมด" },
  "blog.minRead": { en: "min read", th: "นาทีในการอ่าน" },

  // Legal
  "legal.tosTitle": { en: "Terms of Service", th: "เงื่อนไขการใช้บริการ" },
  "legal.privacyTitle": { en: "Privacy Policy", th: "นโยบายความเป็นส่วนตัว" },
  "legal.lastUpdated": { en: "Last updated", th: "อัปเดตล่าสุด" },
  "legal.tocTitle": { en: "On this page", th: "ในหน้านี้" },

  // Nav additions
  "nav.faq": { en: "FAQ", th: "คำถามที่พบบ่อย" },
  "nav.blog": { en: "Blog", th: "บล็อก" },
};

const LangContext = createContext<{
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: keyof typeof dict | string) => string;
}>({
  lang: "en",
  setLang: () => {},
  t: (k) => k as string,
});

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");
  const t = (key: string) => {
    const entry = dict[key];
    if (!entry) return key;
    return entry[lang];
  };
  return (
    <LangContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LangContext.Provider>
  );
}

export function useT() {
  return useContext(LangContext);
}
