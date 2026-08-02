---
title: "ShrinkWrap vs Slivers in Flutter"
date: "2025-04-23T08:27:57+03:30"
draft: false
description: "A practical breakdown of shrinkWrap and slivers in Flutter with code examples, use-cases, and when to use each approach."
tags:
  - "Flutter"
  - "ShrinkWrap"
  - "Slivers"
  - "UI Optimization"
categories:
  - "Flutter"
  - "UI"
  - "Performance"
slug: "shrinkwrap-vs-slivers"
aliases:
  - /shrinkwrap_vs_slivers/
---

<iframe width="100%" height="400" src="https://www.youtube.com/embed/LUqDNnv_dh0" title="ShrinkWrap vs Slivers in Flutter" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## 🧠 خلاصه: ShrinkWrap در برابر Slivers در فلاتر

در فلاتر، مدیریت صحیح ویجت‌های قابل اسکرول برای دستیابی به عملکرد بهتر و تجربه کاربری روان‌تر اهمیت بالایی دارد. این پست به بررسی دو روش رایج می‌پردازد: استفاده از `shrinkWrap` و به‌کارگیری `Slivers`.

### 🔹 ShrinkWrap

- **تعریف**: ویژگی‌ای که اگر مقدار آن روی `true` تنظیم شود، باعث می‌شود ویجت قابل اسکرول، اندازه خود را بر اساس فرزندانش تنظیم کند و نه فضای موجود.
- **موارد استفاده**:
  - زمانی که یک ویجت قابل اسکرول را داخل ویجت قابل اسکرول دیگری قرار می‌دهید (مثلاً `ListView` داخل `Column`).
  - زمانی که تعداد ویجت‌های فرزند کم و مشخص است.
- **نکات مهم**:
  - استفاده در لیست‌های بزرگ می‌تواند باعث افت عملکرد شود، زیرا باید اندازه تمام فرزندان را محاسبه کند.
  - ممکن است منجر به خطاهای محدودیت و overflow شود اگر به درستی مدیریت نشود.

#### ✅ مثال با `shrinkWrap`

```dart
Column(
  children: [
    Text('Header'),
    ListView.builder(
      shrinkWrap: true,
      physics: NeverScrollableScrollPhysics(),
      itemCount: 5,
      itemBuilder: (context, index) => ListTile(
        title: Text('آیتم \$index'),
      ),
    ),
  ],
)
```

### 🔹 Slivers

- **تعریف**: ویجت‌هایی تخصصی که ناحیه‌های قابل اسکرول با رفتارهای سفارشی تولید می‌کنند و کنترل دقیق‌تری روی اسکرول فراهم می‌سازند.
- **موارد استفاده**:
  - ساخت افکت‌های پیچیده اسکرول مانند نوار ابزار جمع‌شونده یا لیست‌های بی‌نهایت.
  - بهینه‌سازی عملکرد هنگام کار با مجموعه داده‌های بزرگ.
- **نکات مهم**:
  - نیاز به درک عمیق‌تری از مکانیزم رندر فلاتر دارد.
  - پیاده‌سازی آن نسبت به ویجت‌های اسکرول معمولی پیچیده‌تر و طولانی‌تر است.

#### ✅ مثال با `Slivers`

```dart
CustomScrollView(
  slivers: [
    SliverAppBar(
      expandedHeight: 200.0,
      floating: false,
      pinned: true,
      flexibleSpace: FlexibleSpaceBar(
        title: Text('دموی Sliver'),
      ),
    ),
    SliverList(
      delegate: SliverChildBuilderDelegate(
        (context, index) => ListTile(
          title: Text('آیتم \$index'),
        ),
        childCount: 20,
      ),
    ),
  ],
)
```

### 🆚 مقایسه

| ویژگی           | ShrinkWrap                          | Slivers                                                 |
|------------------|--------------------------------------|----------------------------------------------------------|
| **پیچیدگی**      | پیاده‌سازی ساده‌تر                 | پیچیده‌تر، نیازمند درک Sliverها                          |
| **عملکرد**       | ناکارآمد در لیست‌های بزرگ          | بهینه‌شده برای مجموعه داده‌های بزرگ                     |
| **سفارشی‌سازی**  | محدود                               | بسیار قابل سفارشی‌سازی                                  |
| **موارد استفاده**| ویجت‌های اسکرول کوچک و تو در تو     | افکت‌های اسکرول پیشرفته و لیست‌های حجیم                 |

---

## 📝 جمع‌بندی

انتخاب بین `shrinkWrap` و `Slivers` به نیازهای خاص اپلیکیشن شما بستگی دارد. برای ویجت‌های اسکرول تو در تو و کوچک با تعداد مشخص فرزندان، استفاده از `shrinkWrap` ساده و مناسب است. اما اگر به دنبال اسکرول‌های پیچیده یا بهینه‌سازی عملکرد در داده‌های حجیم هستید، استفاده از `Slivers` گزینه بهتری خواهد بود.

آشنایی با این ابزارها و استفاده درست از آن‌ها نقش مهمی در توسعه اپلیکیشن‌های سریع و پاسخ‌گو در فلاتر دارد.
