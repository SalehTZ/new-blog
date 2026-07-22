---
title: "Index"
date: "2025-05-20T11:31:49+03:30"
draft: true
slug: "flutter-tests-part-2"
---

<!--more-->
# تست‌ها: بخش دوم تست ویجت – کار با رابط کاربری در فلاتر

خوش اومدی دوباره! 👋 حالا که تست‌های واحد (unit testing) رو یاد گرفتیم، وقتشه آستین‌هامونو بالا بزنیم و بریم سراغ یه چیز بصری‌تر: **تست ویجت‌ها**.

اگه تا حالا برات سوال بوده که «چطوری مطمئن بشم ویجت‌هام درست کار می‌کنن بدون اینکه کل اپ رو اجرا کنم؟»، تست ویجت جوابشه.

بیاید این موضوع رو به شکل ساده و دوستانه بررسی کنیم و با هم یاد بگیریم چطور برای ویجت‌ها در فلاتر تست بنویسیم.

---

## تست ویجت چیه؟ 🧱

تست ویجت (یا component testing) بررسی می‌کنه که یه ویجت خاص وقتی به تنهایی ساخته می‌شه، ظاهر و عملکرد درستی داره یا نه. این نوع تست سریع‌تر از اجرای کامل اپه و می‌تونی باهاش رفتار کاربر مثل لمس یا وارد کردن متن رو شبیه‌سازی کنی.

### چرا تست ویجت مهمه:

* ⚡ فوق‌العاده سریع و سبک‌تر از تست‌های یکپارچه (integration)
* 🤖 شبیه‌سازی رفتار کاربر مثل تاپ و تایپ کردن
* 🔄 قابل اتوماسیون ساده توی فرآیند CI/CD
* 🛡️ کمک می‌کنه باگ‌های رابط کاربری رو قبل از اجرای اپ پیدا کنیم

---

## آماده‌سازی برای تست ویجت

مطمئن شو که توی `pubspec.yaml` این قسمت رو داری (احتمالاً از قبل هست):

```yaml
dev_dependencies:
  flutter_test:
    sdk: flutter
```

همچنین یه فایل تست توی پوشه `test/` بساز.

---

## یه مثال ساده: تست ویجت شمارنده (Counter)

قراره ویجت شمارنده پیش‌فرض فلاتر رو تست کنیم که وقتی یه دکمه رو می‌زنیم، عددش زیاد می‌شه.

### ساخت یه ویجت ساده برای تست:

در مسیر `lib/counter.dart`:

```dart
import 'package:flutter/material.dart';

class Counter extends StatefulWidget {
  const Counter({super.key});

  @override
  State<Counter> createState() => _CounterState();
}

class _CounterState extends State<Counter> {
  int _count = 0;

  void _increment() {
    setState(() {
      _count++;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        Text('Count: \$_count', key: const Key('counter-text')),
        ElevatedButton(
          key: const Key('increment-button'),
          onPressed: _increment,
          child: const Text('Increment'),
        )
      ],
    );
  }
}
```

### نوشتن تست برای این ویجت

در مسیر `test/counter_test.dart`:

```dart
import 'package:flutter_test/flutter_test.dart';
import 'package:flutter/material.dart';
import 'package:your_app_name/counter.dart';

void main() {
  testWidgets('increments counter when button is tapped', (WidgetTester tester) async {
    // ساخت ویجت
    await tester.pumpWidget(const MaterialApp(home: Counter()));

    // بررسی حالت اولیه
    expect(find.text('Count: 0'), findsOneWidget);

    // کلیک روی دکمه
    await tester.tap(find.byKey(const Key('increment-button')));

    // بازسازی ویجت بعد از تغییر وضعیت
    await tester.pump();

    // بررسی وضعیت جدید
    expect(find.text('Count: 1'), findsOneWidget);
  });
}
```

### چه اتفاقی داره می‌افته:

* 🛠️ `testWidgets` محیط تست ویجت رو تنظیم می‌کنه.
* 🔍 با `find` ویجت‌ها رو از طریق متن یا کلید پیدا می‌کنیم.
* 🖱️ `tap` شبیه‌ساز لمس کاربره.
* 🔄 `pump()` باعث بازسازی ویجت می‌شه.

---

## نکات کاربردی برای تست ویجت‌ها

* 🧪 از `Key` برای پیدا کردن دقیق ویجت‌ها استفاده کن
* 👁️ از `find.byType`، `find.byKey` یا `find.text` برای وضوح بیشتر استفاده کن
* 🔍 تست‌هات رو متمرکز نگه دار—هر تست برای یه مسئولیت خاص
* 🧼 با `pumpWidget` ویجت رو تمیز بساز و فقط چیزایی که مهمه رو تست کن

---

## مرحله بعدی چیه؟ 🚀

حالا که تست یه ویجت ساده رو دیدی، تو پست بعدی می‌ریم سراغ موارد پیشرفته‌تر:

* 🧩 تست ویجت‌های ترکیبی (composed widgets)
* ⌨️ شبیه‌سازی ورود اطلاعات کاربر (TextField، فرم‌ها)
* 🧰 کار با Mock و تست وابستگی‌ها

کنجکاو بمون و هی تست کن—تست ویجت راهی به سمت رابط‌های کاربری تمیز و قابل اطمینانه!

تست خوش بگذره! 🧱✨
