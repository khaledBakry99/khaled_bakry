# Project Cards Components

هذا المجلد يحتوي على مكونات كاردات المشاريع الأربعة، كل مشروع في ملف منفصل لسهولة التعديل والصيانة.

## الملفات:

### 1. AcademicProjectCard.tsx
- **المشروع**: Academic Project Management System
- **الألوان**: أزرق → سماوي
- **التقنيات**: React.js, Material UI, Redux Toolkit
- **الرابط**: `/projects/1`

### 2. CinemaProjectCard.tsx
- **المشروع**: Cinema Management & Booking System
- **الألوان**: بنفسجي → وردي
- **التقنيات**: React, Tailwind CSS, ASP.NET Core
- **الرابط**: `/projects/4`

### 3. JobScopeProjectCard.tsx
- **المشروع**: JobScope – Service Provider Platform
- **الألوان**: أخضر زمردي → تركواز
- **التقنيات**: React.js, Tailwind CSS, Leaflet.js
- **الرابط**: `/projects/3`

### 4. BlackMovieProjectCard.tsx
- **المشروع**: Black Movie Website
- **الألوان**: برتقالي → أحمر
- **التقنيات**: HTML5, CSS3, JavaScript
- **الرابط**: `/projects/2`

## كيفية الاستخدام:

```tsx
import AcademicProjectCard from '@/components/projects/AcademicProjectCard';
import CinemaProjectCard from '@/components/projects/CinemaProjectCard';
import JobScopeProjectCard from '@/components/projects/JobScopeProjectCard';
import BlackMovieProjectCard from '@/components/projects/BlackMovieProjectCard';

// في الصفحة الرئيسية
<ScrollAnimation animation="slideLeft" delay={200}>
  <AcademicProjectCard />
</ScrollAnimation>
```

## التعديل:

لتعديل أي مشروع، افتح الملف المقابل وقم بتغيير:
- العنوان (h3)
- الوصف (p)
- التقنيات المستخدمة (Tech Stack)
- الصورة (src)
- الرابط (href)
- الألوان (gradients)

## المميزات:

✅ تصميم احترافي مع أنيميشن خارق
✅ إطار متحرك ملون
✅ أيقونة عائمة تظهر عند التمرير
✅ زخارف ضوئية في الزوايا
✅ تكبير الصورة عند التمرير
✅ ألوان مميزة لكل مشروع
