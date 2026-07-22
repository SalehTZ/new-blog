---
title: "Flutter 3.32.0: What's New, Improved, and Changed"
date: "2025-05-22T08:21:31+03:30"
draft: false
description: "Explore all the major improvements, new features, and breaking changes in Flutter 3.32.0 — including Material 3 as the default, the Impeller rendering engine on Android, Dart 3.3 updates, and more."
tags:
  - "flutter"
  - "flutter update"
  - "flutter 3.32"
  - "dart"
  - "material 3"
  - "impeller"
  - "flutter devtools"
categories:
  - "Flutter"
  - "Release Notes"
slug: "flutter-3-32-0"
---

<!--more-->

# Flutter 3.32.0: What's New, Improved, and Changed

Flutter 3.32.0 is a major release that enhances nearly every aspect of the framework — from rendering to platform integration, developer tools to accessibility, and beyond. This release brings significant improvements, powerful new widgets, stability and performance optimizations, and several important breaking changes that developers need to be aware of. Let’s dive deep into what’s new, what’s improved, and what’s changing in Flutter 3.32.

---

## 🌟 Key Highlights

### 1. **Material 3 Is Now the Default**

Material 3 (M3), Google's latest design system, is now the default for new Flutter apps.

* Core widgets like `AppBar`, `TextButton`, `Dialog`, and others are styled using M3 by default.
* Includes support for dynamic color schemes, new elevation behaviors, squircle-shaped components, and enhanced theme configuration.
* Developers upgrading from Material 2 (M2) should test UI thoroughly as default styles, paddings, and typography have changed.
* A full migration guide and tools are available to assist in upgrading.

### 2. **Impeller on Android (Preview)**

Impeller — Flutter’s next-generation rendering engine — is now available as an experimental preview on Android (already stable on iOS).

```bash
flutter build apk --enable-impeller
```

* Designed to replace Skia with better frame pacing and lower shader compilation jank.
* Brings smoother animations, especially on low and mid-tier Android devices.
* Expect continuous performance improvements in upcoming versions.

### 3. **Hot Reload on Web (Experimental)**

* Hot reload is now supported on Flutter Web (behind an experimental flag).
* Significantly boosts web development productivity.
* Developers can preview UI changes in real-time without full reloads.

### 4. **DevTools 2.30 + Property Editor**

DevTools continues to improve with version 2.30:

* New **Property Editor**: Easily tweak widget properties live. Very helpful in debugging and UI prototyping workflows.
* Memory tab is clearer and more detailed, with better GC and allocation tracking.
* Startup performance has improved across the board.
* Added visual badges and notifications for runtime insights.

### 5. **New Widgets: Expansible & Superellipse**

* **Expansible** widget makes building expandable UIs much simpler and more flexible — potentially replacing third-party solutions.
* **Superellipse (Squircle)** shapes are now natively supported, bringing more polished iOS-style aesthetics.
* Goodbye to pub packages — these are now built-in.

### 6. **Cupertino and Material Library Updates**

* Cupertino sheet has been refined — better animation and interaction.
* `FormField` widgets now support fully customizable error widgets, replacing the older errorText-only model.
* Accessibility updates improve semantic role handling and screen reader support.
* `SearchBar` has received some updates, although custom implementations might still be preferred.

### 7. **Dart 3.3 Included**

Flutter 3.32 ships with Dart 3.3:

* Inline class declarations: zero-overhead wrappers.
* Improved type inference and pattern matching.
* Enhanced enums with mixins and member functions.

### 8. **Other Notable Features**

* Canonical multi-window support for desktop platforms.
* Merged threads on desktop enhance performance and responsiveness.
* Stylus support on Android improves input diversity.
* Removal of iOS paste dialog when copying — one less UX annoyance.
* Gradle tooling is now written in Kotlin for better integration and stability.
* Gemini AI in Android Studio now supports Dart & Flutter — a long-awaited productivity upgrade.
* Firebase AI Logic SDKs and monitoring dashboards are available for intelligent app development.

---

## 🚀 Framework & Engine Improvements

* **Web Rendering**:

  * Optimized CanvasKit startup by reducing font load times.
  * Better support for SVGs and vector animations.

* **Animations & Transitions**:

  * Improved entrance/exit animations in `AnimatedSwitcher`.
  * Layout stability fixes during animated widget transitions.

* **Text & Input Widgets**:

  * More accurate multiline `TextField` behavior.
  * Keyboard actions work more consistently across iOS, Android, and web.

* **Platform Integration**:

  * Enhanced VoiceOver and TalkBack accessibility.
  * Full support for external keyboards with key remapping.

* **Memory & Debugging**:

  * DevTools uses less memory.
  * Debug builds now have more efficient memory usage patterns.

* **Rendering Pipeline**:

  * Better z-index stacking logic.
  * Frame invalidation optimized for responsive layout updates.

---

## ❌ Breaking Changes

Several key breaking changes require developer attention:

1. **Material 3 Default**

   * UI components may visually change.
   * Consider temporarily disabling with `useMaterial3: false` if needed.

2. **New `textScaler` API**

   * Replaces `MediaQuery.textScaleFactor` with `MediaQuery.textScaler`.
   * More granular control over how text scaling works.
   * Use `TextScaler.linear()` for backward compatibility.

3. **Deprecated `InkFeature` Removed**

   * Custom ink effects must use the modern `InkRipple.splashFactory`.
   * Breaks legacy ripple animations relying on `InkFeature`.

4. **`PlatformDispatcher.onError` API Changed**

   * Now takes an optional `StackTrace?` parameter.
   * Update custom error handlers accordingly.

5. **`IconTheme` Inheritance Updated**

   * `Icon` widgets no longer inherit color from `DefaultTextStyle`.
   * Set `color` manually in `Icon` widgets where needed.

---

## 🔄 Migration Tips & Best Practices

* **UI Testing**:

  * Review your app visually, especially buttons, navigation bars, and dialogs.
  * Ensure themes render as expected under Material 3.

* **Scaling**:

  * Replace `textScaleFactor` with `textScaler` APIs for forward compatibility.

* **Ink Effects**:

  * Refactor old ink animations.
  * Use `InkRipple` or `NoSplash` based on desired effects.

* **Error Handling**:

  * Confirm custom error handlers handle the new `StackTrace?` parameter.

* **Icon Styling**:

  * Manually style icons where color inheritance used to be implicit.

---

## 🧭 Final Thoughts

Flutter 3.32.0 is a robust and forward-thinking release. It signals Flutter’s ongoing maturity — offering better design defaults, modern rendering engines, enhanced developer tooling, and deep platform integration. With Material 3, Impeller, Dart 3.3, and tools like the Property Editor, this release empowers developers to build smoother, faster, and more accessible apps across platforms.

Whether you're developing for mobile, web, or desktop, Flutter 3.32 positions itself as a stable and highly capable toolkit with a clear eye on the future.

---

## 📚 Learn More

* 📖 [Flutter 3.32 Blog Post](https://medium.com/flutter/whats-new-in-flutter-3-32-40c1086bab6e)
* 📋 [Official Release Notes](https://docs.flutter.dev/release/release-notes/release-notes-3.32.0)
* ⚠️ [Breaking Changes Documentation](https://docs.flutter.dev/release/breaking-changes#released-in-flutter-3-32)

Stay up to date with the latest improvements and start upgrading today to take full advantage of everything Flutter 3.32 has to offer!
